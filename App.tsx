
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
  calculateManualGain,
  calculateValuation
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
import AgentDetailsModal from './components/AgentDetailsModal';
import WithdrawModal from './components/WithdrawModal';
import { playAlert, playNotification } from './engine/soundEffects';
import { useAuth } from './hooks/useAuth';
import telegram from './utils/telegramUtils';

const CRASH_DURATION_MS = 12000;
const CLICK_THRESHOLD_MS = 100;

const App: React.FC = () => {
  const { user, loading: authLoading, initialData } = useAuth();
  const [offlineData, setOfflineData] = useState<{ capital: number; seconds: number } | null>(null);
  const [showSingularity, setShowSingularity] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null);

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
  const toastTimerRef = useRef<number | null>(null);

  // Configuração do BackButton conforme a view
  useEffect(() => {
    if (currentView !== 'operacao') {
      telegram.backButton.show();
      const handleBack = () => setCurrentView('operacao');
      telegram.backButton.onClick(handleBack);
      return () => {
        telegram.backButton.offClick(handleBack);
      };
    } else {
      telegram.backButton.hide();
    }
  }, [currentView]);

  // Configuração do SettingsButton
  useEffect(() => {
    telegram.settingsButton.show();
    const handleSettings = () => {
      telegram.showPopup({
        title: "Protocolo Agente Flow",
        message: "Versão 2.5. Para suporte ou diagnóstico da sua infraestrutura real, fale com a NEØFLW.",
        buttons: [
          { id: "consult", type: "default", text: "Diagnóstico Real" },
          { id: "close", type: "close", text: "Voltar ao Console" }
        ]
      }).then((buttonId) => {
        if (buttonId === "consult") {
          telegram.openTelegramLink("https://t.me/neomello");
        }
      });
    };
    telegram.settingsButton.onClick(handleSettings);
    return () => telegram.settingsButton.offClick(handleSettings);
  }, []);

  const showToast = useCallback((message: string, duration = 3000) => {
    if (toastTimerRef.current) clearTimeout(toastTimerRef.current);
    setToast(message);
    toastTimerRef.current = window.setTimeout(() => {
      setToast(null);
      toastTimerRef.current = null;
    }, duration);
  }, []);

  const [visualAlert, setVisualAlert] = useState(false);

  const triggerVisualAlert = useCallback(() => {
    setVisualAlert(true);
    setTimeout(() => setVisualAlert(false), 800);
  }, []);

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
    telegram.cloudStorage.setItem(`ceo_state_${user?.id}`, data);
  }, [user?.id]);

  // Haptic Feedback Helper
  const triggerHaptic = useCallback((type: 'impact' | 'error' | 'success') => {
    if (type === 'impact') telegram.hapticFeedback.impact('medium');
    else if (type === 'error') telegram.hapticFeedback.notification('error');
    else if (type === 'success') telegram.hapticFeedback.notification('success');
  }, []);

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
        let {
          is_crashed,
          crash_end_time,
          singularity_reached,
          event_social_media_triggered,
          event_traffic_loss_triggered,
          event_support_backlog_triggered,
          event_sdr_fatigue_triggered,
          event_infra_downtime_triggered
        } = prev.meta;

        let stress = prev.resources.stress;
        let capital = prev.resources.capital;

        const pps = calculateTotalPPS(prev.agents, prev.inventory);
        const newCapital = capital + pps;
        const newTotalCapital = prev.meta.capital_total_gerado + pps;

        // 1. Social Media Event
        if (!event_social_media_triggered && newTotalCapital >= 150) {
          event_social_media_triggered = true;
          capital = Math.max(0, capital - 50);
          stress = Math.min(100, stress + 25);
          triggerHaptic('error');
          triggerVisualAlert();
          showToast("VULNERABILIDADE: Social Media em hiato. -$50.", 4000);
        }

        // 2. Support Backlog Event
        if (!event_support_backlog_triggered && newTotalCapital >= 800) {
          const hasSupport = prev.inventory.some(i => i.id === 'agent_support_v1');
          if (!hasSupport) {
            event_support_backlog_triggered = true;
            capital = Math.max(0, capital - 150);
            stress = Math.min(100, stress + 30);
            triggerHaptic('error');
            triggerVisualAlert();
            showToast("BACKLOG: Suporte manual colapsou. -$150.", 4000);
          }
        }

        // 3. SDR Fatigue Event
        if (!event_sdr_fatigue_triggered && newTotalCapital >= 1500) {
          const hasSDR = prev.inventory.some(i => i.id === 'agent_sdr_v1');
          if (!hasSDR) {
            event_sdr_fatigue_triggered = true;
            capital = Math.max(0, capital - 400);
            triggerHaptic('error');
            triggerVisualAlert();
            showToast("FATIGA: Prospecção manual parou. -$400.", 4000);
          }
        }

        // 4. Traffic Loss Event
        if (!event_traffic_loss_triggered && newTotalCapital >= 3000) {
          const hasTraffic = prev.inventory.some(i => i.id === 'agent_traffic_v1');
          if (!hasTraffic) {
            event_traffic_loss_triggered = true;
            capital = Math.max(0, capital - 1000);
            triggerHaptic('error');
            triggerVisualAlert();
            showToast("PREJUÍZO: Ads sem gestão. Verba drenada. -$1000.", 4000);
          }
        }

        // 5. Infra Downtime Event
        if (!event_infra_downtime_triggered && newTotalCapital >= 5000) {
          const hasInfra = prev.inventory.some(i => i.id === 'agent_engineer_v1');
          if (!hasInfra) {
            event_infra_downtime_triggered = true;
            capital = Math.max(0, capital - 2500);
            triggerHaptic('error');
            triggerVisualAlert();
            showToast("DOWNTIME: Bug crítico na infra manual. -$2500.", 5000);
          }
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
          triggerVisualAlert();
          if (soundEnabled) playAlert();
        }

        // Valuation Calculation
        const currentValuation = calculateValuation({
          ...prev,
          resources: { ...prev.resources, capital: newCapital, receita_passiva: pps },
          meta: { ...prev.meta, capital_total_gerado: newTotalCapital }
        });

        if (!singularity_reached && checkSingularity(prev)) {
          singularity_reached = true;
          setShowSingularity(true);
        }

        const newState = {
          ...prev,
          resources: {
            ...prev.resources,
            capital: capital + pps,
            receita_passiva: pps,
            stress: Math.min(100, stress)
          },
          meta: {
            ...prev.meta,
            capital_total_gerado: newTotalCapital,
            status: updateStatus(currentValuation),
            snapshot_unlocked: currentValuation >= 250,
            is_crashed,
            crash_end_time,
            singularity_reached,
            event_social_media_triggered,
            event_traffic_loss_triggered,
            event_support_backlog_triggered,
            event_sdr_fatigue_triggered,
            event_infra_downtime_triggered
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
      showToast(`ROI: +${agent.economia_diaria_minutos}min/dia recuperados.`);
      return true;
    }
    return false;
  }, [gameState.resources.capital, gameState.inventory, triggerHaptic]);

  // Telegram MainButton Logic
  useEffect(() => {
    if (selectedAgentId && currentView === 'agentes') {
      const agent = gameState.agents.find(a => a.id === selectedAgentId);
      if (agent) {
        const owned = gameState.inventory.find(i => i.id === agent.id)?.quantity || 0;
        const cost = calculateAgentCost(agent.custo_base, owned);
        const canAfford = gameState.resources.capital >= cost;

        telegram.mainButton.setText(canAfford ? `INVESTIR $${cost.toLocaleString()}` : `CAPITAL INSUFICIENTE ($${cost.toLocaleString()})`);

        const handleMainClick = () => {
          if (buyAgent(agent)) {
            setSelectedAgentId(null);
          }
        };

        telegram.mainButton.show();
        telegram.mainButton.onClick(handleMainClick);
        return () => {
          telegram.mainButton.offClick(handleMainClick);
          telegram.mainButton.hide();
        };
      }
    } else {
      telegram.mainButton.hide();
    }
  }, [selectedAgentId, currentView, gameState.resources.capital, gameState.agents, gameState.inventory, buyAgent]);

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

  const isLowPerf = useMemo(() => telegram.isLowPerformanceDevice(), []);

  if (authLoading) {
    return (
      <div className="h-full w-full flex flex-col items-center justify-center bg-[#0a050f] text-magenta">
        <div className="w-10 h-10 border-2 border-magenta border-t-transparent rounded-full animate-spin mb-4" />
        <p className="font-mono text-[8px] font-black uppercase tracking-[0.4em] opacity-50">Handshaking System...</p>
      </div>
    );
  }

  return (
    <div className={`flex flex-col h-full w-full max-w-lg mx-auto bg-[#0a050f] relative overflow-hidden transition-transform duration-100 ${(visualAlert || gameState.meta.is_crashed) && !isLowPerf ? 'animate-shake' : ''}`}>
      {/* Visual Alert Overlay (Flash Vermelho) */}
      <div className={`fixed inset-0 z-[2000] pointer-events-none transition-opacity duration-300 bg-red-600/20 ${visualAlert ? 'opacity-100' : 'opacity-0'}`} />

      {showIntro && (
        <IntroOverlay onComplete={() => {
          setShowIntro(false);
          localStorage.setItem('ceo_intro_seen', 'true');
        }} />
      )}

      {offlineData && <OfflineEarningsModal pu={offlineData.capital} seconds={offlineData.seconds} onClose={() => setOfflineData(null)} />}
      {showSingularity && <SingularityCertificate userName={gameState.meta.user?.name || 'CEO'} onClose={() => setShowSingularity(false)} />}
      {showWithdraw && (
        <WithdrawModal
          valuation={calculateValuation(gameState).toFixed(0)}
          userName={gameState.meta.user?.name || 'CEO'}
          onClose={() => setShowWithdraw(false)}
        />
      )}

      {selectedAgentId && currentView === 'agentes' && (
        (() => {
          const agent = gameState.agents.find(a => a.id === selectedAgentId);
          return agent ? (
            <AgentDetailsModal
              agent={agent}
              inventory={gameState.inventory}
              capital={gameState.resources.capital}
              onBuy={buyAgent}
              onClose={() => setSelectedAgentId(null)}
            />
          ) : null;
        })()
      )}
      <div className={`fixed bottom-28 left-1/2 -translate-x-1/2 z-[1000] transition-all duration-500 transform ${toast ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}`}>
        <div className="bg-[#130b1a]/90 ios-blur text-white px-5 py-2.5 rounded-full font-bold text-[9px] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-widest border border-white/10 flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-magenta animate-pulse" />
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
        {currentView === 'operacao' && (
          <Operation
            gameState={gameState}
            onAction={handleManualAction}
            soundEnabled={soundEnabled}
            onWithdrawAttempt={() => setShowWithdraw(true)}
            onSocialReset={() => {
              setGameState(prev => ({
                ...prev,
                meta: { ...prev.meta, is_crashed: false, crash_end_time: 0 }
              }));
              showToast("SISTEMA REINICIADO VIA SHARE");
            }}
          />
        )}
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
        {currentView === 'protocols' && <SolutionsTerminal userName={gameState.meta.user?.name || 'CEO'} />}
        {currentView === 'raiox' && <XRay gameState={gameState} onCopySuccess={showToast} />}
      </main>

      <Navigation active={currentView} onChange={setCurrentView} />
    </div>
  );
};

export default App;
