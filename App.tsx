
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { GameState, View, Agent, ManualAction } from './types';
import { INITIAL_GAME_STATE, STATUS_MILESTONES } from './constants';
import {
  calculateTotalPPS,
  calculateAgentCost,
  updateStatus,
  isActionAutomated,
  formatHours,
  checkSingularity,
  calculateManualGain
} from './engine/gameLogic';
import TopBar from './components/TopBar';
import Navigation from './components/Navigation';
import Operation from './components/Operation';
import AgentStore from './components/AgentStore';
import XRay from './components/XRay';
import SolutionsTerminal from './components/SolutionsTerminal';
import OfflineEarningsModal from './components/OfflineEarningsModal';
import SingularityCertificate from './components/SingularityCertificate';
import IntroOverlay from './components/IntroOverlay';
import { playAlert, playNotification } from './engine/soundEffects';
import { useAuth } from './hooks/useAuth';

const CRASH_DURATION_MS = 12000;
const CLICK_THRESHOLD_MS = 100;

const App: React.FC = () => {
  const { user, loading: authLoading, initialData } = useAuth();
  const [offlineData, setOfflineData] = useState<{ capital: number; seconds: number } | null>(null);
  const [showSingularity, setShowSingularity] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

  const tg = (window as any).Telegram?.WebApp;

  const [showIntro, setShowIntro] = useState(() => {
    const seen = localStorage.getItem('ceo_intro_seen');
    return seen !== 'true';
  });

  const lastClickTime = useRef<number>(0);
  const lastSaveTime = useRef<number>(0);

  // Estado hidratado pelo useAuth (CloudStorage ou LocalStorage)
  const [gameState, setGameState] = useState<GameState>(INITIAL_GAME_STATE);
  const [currentView, setCurrentView] = useState<View>('operacao');
  const [toast, setToast] = useState<string | null>(null);
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('sound_enabled');
    return saved === null ? true : saved === 'true';
  });

  // Hidratação inicial
  useEffect(() => {
    if (initialData) {
      setGameState(prev => ({ ...prev, ...initialData }));
    }
  }, [initialData]);

  // Função de persistência Híbrida (Telegram Cloud + Local)
  const persistState = useCallback((state: GameState) => {
    const now = Date.now();
    // Throttle de salvamento para evitar overload de API do Telegram (1x a cada 5s)
    if (now - lastSaveTime.current < 5000) return;
    lastSaveTime.current = now;

    const data = JSON.stringify(state);
    localStorage.setItem(`ceo_state_${user?.id}`, data);

    if (tg?.cloudStorage) {
      tg.cloudStorage.setItem('ceo_game_state', data);
    }
  }, [user?.id, tg]);

  // Haptic Feedback Helper
  const triggerHaptic = useCallback((type: 'impact' | 'error' | 'success') => {
    if (tg?.HapticFeedback) {
      if (type === 'impact') tg.HapticFeedback.impactOccurred('medium');
      else if (type === 'error') tg.HapticFeedback.notificationOccurred('error');
      else if (type === 'success') tg.HapticFeedback.notificationOccurred('success');
    } else if (window.navigator?.vibrate) {
      if (type === 'impact') window.navigator.vibrate(15);
      else if (type === 'error') window.navigator.vibrate([50, 50, 50]);
    }
  }, [tg]);

  // Sync user from auth hook
  useEffect(() => {
    if (user) {
      setGameState(prev => ({ ...prev, meta: { ...prev.meta, user } }));
    }
  }, [user]);

  // Game Engine Loop
  useEffect(() => {
    if (authLoading) return;

    const interval = setInterval(() => {
      setGameState(prev => {
        const now = Date.now();
        let { is_crashed, crash_end_time, singularity_reached, event_social_media_triggered } = prev.meta;
        let stress = prev.resources.stress;
        let capital = prev.resources.capital;

        if (!event_social_media_triggered && capital >= 150) {
          event_social_media_triggered = true;
          capital = Math.max(0, capital - 50);
          stress = Math.min(100, stress + 25);
          triggerHaptic('error');
          setToast("VULNERABILIDADE: Social Media em hiato. -$50.");
          setTimeout(() => setToast(null), 4000);
        }

        if (is_crashed && now >= crash_end_time) {
          is_crashed = false;
          stress = 20;
          triggerHaptic('success');
        }

        const statusMultiplier = (STATUS_MILESTONES.findIndex(m => m.label === prev.meta.status) + 1) * 0.12;
        const agentRelief = prev.inventory.reduce((acc, item) => acc + (item.quantity * 0.1), 0.4 + statusMultiplier);
        stress = Math.max(0, stress - agentRelief);

        if (!is_crashed && stress >= 100) {
          is_crashed = true;
          crash_end_time = now + CRASH_DURATION_MS;
          triggerHaptic('error');
          if (soundEnabled) playAlert();
        }

        const pps = calculateTotalPPS(prev.agents, prev.inventory);
        const newCapital = capital + pps;
        const newTotalCapital = prev.meta.capital_total_gerado + pps;

        if (!singularity_reached && checkSingularity(prev)) {
          singularity_reached = true;
          setShowSingularity(true);
        }

        const newState = {
          ...prev,
          resources: {
            ...prev.resources,
            capital: newCapital,
            receita_passiva: pps,
            stress: Math.min(100, stress)
          },
          meta: {
            ...prev.meta,
            capital_total_gerado: newTotalCapital,
            status: updateStatus(newTotalCapital),
            snapshot_unlocked: newTotalCapital >= 150000,
            is_crashed,
            crash_end_time,
            singularity_reached,
            event_social_media_triggered
          },
          lastTick: now
        };

        persistState(newState);
        return newState;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [authLoading, soundEnabled, triggerHaptic, persistState]);

  const buyAgent = useCallback((agent: Agent) => {
    const currentOwned = gameState.inventory.find(i => i.id === agent.id)?.quantity || 0;
    const cost = calculateAgentCost(agent.custo_base, currentOwned);

    if (gameState.resources.capital >= cost) {
      setGameState(prev => {
        const newInventory = [...prev.inventory];
        const index = newInventory.findIndex(i => i.id === agent.id);
        if (index >= 0) newInventory[index].quantity += 1;
        else newInventory.push({ id: agent.id, quantity: 1 });

        return {
          ...prev,
          resources: {
            ...prev.resources,
            capital: prev.resources.capital - cost,
            horas_manuais_eliminadas: prev.resources.horas_manuais_eliminadas + (agent.economia_diaria_minutos / 60)
          },
          inventory: newInventory
        };
      });
      triggerHaptic('success');
      setToast(`ROI: +${agent.economia_diaria_minutos}min/dia recuperados.`);
      return true;
    }
    return false;
  }, [gameState.resources.capital, gameState.inventory, triggerHaptic]);

  // Telegram MainButton Logic
  useEffect(() => {
    if (!tg || !tg.MainButton) return;

    if (selectedAgentId && currentView === 'agentes') {
      const agent = gameState.agents.find(a => a.id === selectedAgentId);
      if (agent) {
        const owned = gameState.inventory.find(i => i.id === agent.id)?.quantity || 0;
        const cost = calculateAgentCost(agent.custo_base, owned);
        const canAfford = gameState.resources.capital >= cost;

        tg.MainButton.setText(canAfford ? `INVESTIR $${cost.toLocaleString()}` : `CAPITAL INSUFICIENTE ($${cost.toLocaleString()})`);
        tg.MainButton.setParams({
          is_active: canAfford,
          color: canAfford ? '#ff00ff' : '#222222',
          text_color: '#ffffff'
        });

        const handleMainClick = () => {
          if (buyAgent(agent)) {
            setSelectedAgentId(null);
          }
        };

        tg.MainButton.show();
        tg.MainButton.onClick(handleMainClick);
        return () => {
          tg.MainButton.offClick(handleMainClick);
          tg.MainButton.hide();
        };
      }
    } else {
      tg.MainButton.hide();
    }
  }, [selectedAgentId, currentView, gameState.resources.capital, gameState.agents, gameState.inventory, tg, buyAgent]);

  const handleManualAction = (action: ManualAction) => {
    if (gameState.meta.is_crashed) return;
    const now = Date.now();
    if (now - lastClickTime.current < CLICK_THRESHOLD_MS) return;
    lastClickTime.current = now;

    triggerHaptic('impact');

    const scaledGain = calculateManualGain(action, gameState.meta.capital_total_gerado);
    setGameState(prev => ({
      ...prev,
      resources: {
        ...prev.resources,
        capital: prev.resources.capital + scaledGain,
        stress: prev.resources.stress + action.stress_gain
      },
      meta: { ...prev.meta, capital_total_gerado: prev.meta.capital_total_gerado + scaledGain }
    }));
  };

  if (authLoading) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-[#0a050f] text-magenta">
        <div className="w-10 h-10 border-2 border-magenta border-t-transparent rounded-full animate-spin mb-4" />
        <p className="font-mono text-[8px] font-black uppercase tracking-[0.4em] opacity-50">Handshaking Nexus...</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full w-full max-w-lg mx-auto bg-[#0a050f] relative overflow-hidden">
      {showIntro && (
        <IntroOverlay onComplete={() => {
          setShowIntro(false);
          localStorage.setItem('ceo_intro_seen', 'true');
        }} />
      )}

      {offlineData && <OfflineEarningsModal pu={offlineData.capital} seconds={offlineData.seconds} onClose={() => setOfflineData(null)} />}
      {showSingularity && <SingularityCertificate userName={gameState.meta.user?.name || 'CEO'} onClose={() => setShowSingularity(false)} />}

      <div className={`fixed top-24 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 transform ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <div className="bg-magenta/90 ios-blur text-white px-6 py-2 rounded-full font-bold text-[10px] uppercase shadow-2xl tracking-widest border border-white/20">
          {toast}
        </div>
      </div>

      <TopBar
        pu={gameState.resources.capital}
        pps={gameState.resources.receita_passiva}
        stress={gameState.resources.stress}
        soundEnabled={soundEnabled}
        onToggleSound={() => setSoundEnabled(!soundEnabled)}
      />

      <main className="flex-1 scrollable px-5 pt-6 pb-24">
        {currentView === 'operacao' && <Operation gameState={gameState} onAction={handleManualAction} soundEnabled={soundEnabled} />}
        {currentView === 'agentes' && (
          <AgentStore
            agents={gameState.agents}
            inventory={gameState.inventory}
            pu={gameState.resources.capital}
            totalPu={gameState.meta.capital_total_gerado}
            onBuy={buyAgent}
            selectedId={selectedAgentId}
            onSelect={setSelectedAgentId}
          />
        )}
        {currentView === 'protocols' && <SolutionsTerminal />}
        {currentView === 'raiox' && <XRay gameState={gameState} onCopySuccess={setToast} />}
      </main>

      <Navigation active={currentView} onChange={setCurrentView} />
    </div>
  );
};

export default App;
