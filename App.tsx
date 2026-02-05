
import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
  calculateValuation,
  checkFinalVictory,
  canPrestige
} from './engine/gameLogic';
import { DEFAULT_REGIME_ID, evaluateMetaGovernor, getRegimeConfig } from './engine/regimes';
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
import PrestigeModal from './components/PrestigeModal';
import { StoreModal } from './components/StoreModal';
import { DailyTasksModal } from './components/DailyTasksModal';
import { LeaderboardModal } from './components/LeaderboardModal';
import NeoMintModal from './components/NeoMintModal';
import { playAlert, playNotification } from './engine/soundEffects';
import { useAuth } from './hooks/useAuth';
import telegram from './utils/telegramUtils';
import { DailyTask, DayStreak, DAILY_TASKS, calculateStreak } from './utils/dailyTasks';
import { CloudSaveService } from './utils/cloudSave';
import { resetUserData, saveFreshState } from './utils/resetUserData';

const CRASH_DURATION_MS = 12000;
const CLICK_THRESHOLD_MS = 100;

const App: React.FC = () => {
  const { user, loading: authLoading, initialData } = useAuth();
  const [offlineData, setOfflineData] = useState<{ capital: number; seconds: number } | null>(null);
  const [showSingularity, setShowSingularity] = useState(false);
  const [showWithdraw, setShowWithdraw] = useState(false);
  const [showStore, setShowStore] = useState(false);
  const [showDailyTasks, setShowDailyTasks] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);
  const [showNeoMint, setShowNeoMint] = useState(false);
  const [showPrestige, setShowPrestige] = useState(false);

  const [dailyTasks, setDailyTasks] = useState<DailyTask[]>(DAILY_TASKS);
  const [streak, setStreak] = useState<DayStreak>({ current: 0, lastLoginDate: 0 });

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
        message: `Versão ${import.meta.env.VITE_APP_VERSION || '2.5'}. Para suporte ou diagnóstico da sua infraestrutura real, fale com a NEØFLW.`,
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

  // Listener para evento 'open-tasks' (Similar ao open-store)
  useEffect(() => {
    const handleOpenMint = () => setShowNeoMint(true);
    const handleOpenTasks = () => setShowDailyTasks(true);
    const handleOpenLeaderboard = () => setShowLeaderboard(true);

    window.addEventListener('open-mint', handleOpenMint);
    window.addEventListener('open-tasks', handleOpenTasks);
    window.addEventListener('open-leaderboard', handleOpenLeaderboard);

    return () => {
      window.removeEventListener('open-mint', handleOpenMint);
      window.removeEventListener('open-tasks', handleOpenTasks);
      window.removeEventListener('open-leaderboard', handleOpenLeaderboard);
    };
  }, []);

  // Daily Check Logic
  useEffect(() => {
    const savedStreakStr = localStorage.getItem('ceo_streak');
    const savedTasksStr = localStorage.getItem('ceo_daily_tasks');
    const lastLogin = savedStreakStr ? JSON.parse(savedStreakStr).lastLoginDate : 0;

    const newStreakValue = calculateStreak(lastLogin);

    let currentStreak = savedStreakStr ? JSON.parse(savedStreakStr) : { current: 1, lastLoginDate: Date.now() };

    if (newStreakValue === 1) { // Login consecutivo
      currentStreak = { current: currentStreak.current + 1, lastLoginDate: Date.now() };
      showToast(`STREAK AUMENTOU! ${currentStreak.current} DIAS 🔥`);
    } else if (newStreakValue === -1) { // Quebrou streak
      currentStreak = { current: 1, lastLoginDate: Date.now() };
      showToast(`STREAK PERDIDA! REINICIANDO...`);
    } else {
      // Mesmo dia, só atualiza timestamp se precisar
      currentStreak.lastLoginDate = Date.now();
    }

    setStreak(currentStreak);
    localStorage.setItem('ceo_streak', JSON.stringify(currentStreak));

    // Reset Tasks if new day
    const today = new Date().toDateString();
    const lastTaskDate = localStorage.getItem('ceo_task_date');

    if (lastTaskDate !== today) {
      setDailyTasks(DAILY_TASKS.map(t => ({ ...t, current: 0, completed: false })));
      localStorage.setItem('ceo_task_date', today);
    } else if (savedTasksStr) {
      setDailyTasks(JSON.parse(savedTasksStr));
    }
  }, []);

  // Persist Tasks on Change
  useEffect(() => {
    localStorage.setItem('ceo_daily_tasks', JSON.stringify(dailyTasks));
  }, [dailyTasks]);

  // Cloud Save Auto-Sync
  useEffect(() => {
    if (!gameState.meta.user?.id) return;

    const syncInterval = setInterval(async () => {
      await CloudSaveService.save(gameState.meta.user!.id.toString(), gameState);
    }, 60000); // 1 Minute

    return () => clearInterval(syncInterval);
  }, [gameState.meta.user?.id, gameState]);

  // Local Persistence (Backup/Offline)
  useEffect(() => {
    localStorage.setItem('ceo_game_state', JSON.stringify(gameState));
  }, [gameState]);


  // Listener para evento 'open-store'
  useEffect(() => {
    const handleOpenStore = () => setShowStore(true);
    window.addEventListener('open-store', handleOpenStore);
    return () => window.removeEventListener('open-store', handleOpenStore);
  }, []);

  const showToast = useCallback((message: string, duration = 5000) => {
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

    import('./utils/tracing').then(({ withSpanSync }) => {
      withSpanSync('game.persist_state', (span) => {
        const data = JSON.stringify(state);
        telegram.cloudStorage.setItem(`ceo_state_${user?.id}`, data);
        span.setAttributes({
          'user.id': user?.id || 'anonymous',
          'game.valuation': calculateValuation(state).toFixed(2),
          'payload.size': data.length
        });
      });
    });
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

        const pps = calculateTotalPPS(
          prev.agents,
          prev.inventory,
          prev.meta.prestige_level || 0,
          prev.meta.active_regime
        );
        const newCapital = capital + pps;
        const newTotalCapital = prev.meta.capital_total_gerado + pps;

        // 1. Social Media Event
        if (!event_social_media_triggered && newTotalCapital >= 150) {
          event_social_media_triggered = true;
          capital = Math.max(0, capital - 50);
          stress = Math.min(100, stress + 25);
          triggerHaptic('error');
          triggerVisualAlert();
          showToast("VULNERABILIDADE: Social Media em hiato. -$50.", 8000);
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
            showToast("BACKLOG: Suporte manual colapsou. -$150.", 8000);
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
            showToast("FATIGA: Prospecção manual parou. -$400.", 8000);
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
            showToast("PREJUÍZO: Ads sem gestão. Verba drenada. -$1000.", 9000);
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
            showToast("DOWNTIME: Bug crítico na infra manual. -$2500.", 10000);
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

        // Verifica vitória final
        const currentStateForCheck = {
          ...prev,
          resources: { ...prev.resources, capital: newCapital, receita_passiva: pps },
          meta: { ...prev.meta, capital_total_gerado: newTotalCapital }
        };
        const finalVictory = checkFinalVictory(currentStateForCheck);
        if (finalVictory && !prev.meta.final_victory_reached) {
          singularity_reached = true; // Marca também como singularity se ainda não foi
        }

        // Mostra modal de prestígio se atingir o limite (apenas uma vez por sessão)
        if (canPrestige(currentStateForCheck) && currentValuation >= 500000 && !prev.meta.final_victory_reached) {
          // Usa um pequeno delay para evitar múltiplos triggers
          setTimeout(() => {
            setShowPrestige(true);
          }, 2000);
        }

        const finalStress = Math.min(100, stress);
        const currentRegime = prev.meta.active_regime || DEFAULT_REGIME_ID;
        const proposedRegime = evaluateMetaGovernor(currentStateForCheck);
        const nextRegime = proposedRegime ?? currentRegime;
        let governanceHistory = prev.meta.governance_history ? [...prev.meta.governance_history] : [currentRegime];
        if (proposedRegime) {
          governanceHistory = [...governanceHistory, proposedRegime].slice(-10);
          const regimeInfo = getRegimeConfig(proposedRegime);
          showToast(`Governança: ${regimeInfo.id} · ${regimeInfo.description}`, 7000);
          if (soundEnabled) playNotification();
        }
        const stressFlag = finalStress >= 85 ? 'stress:critical' : 'stress:stable';
        const normalizedFlags = (prev.meta.regime_flags ?? []).filter(flag => !flag.startsWith('stress:') && !flag.startsWith('regime:'));
        const regimeBadge = `regime:${nextRegime}`;
        const regimeFlags = [...normalizedFlags, stressFlag, regimeBadge].slice(-5);

        const newState = {
          ...prev,
          resources: {
            ...prev.resources,
            capital: capital + pps,
            receita_passiva: pps,
            stress: finalStress
          },
          meta: {
            ...prev.meta,
            capital_total_gerado: newTotalCapital,
            status: updateStatus(currentValuation),
            snapshot_unlocked: currentValuation >= 250,
            is_crashed,
            crash_end_time,
            singularity_reached,
            final_victory_reached: finalVictory || prev.meta.final_victory_reached,
            event_social_media_triggered,
            event_traffic_loss_triggered,
            event_support_backlog_triggered,
            event_sdr_fatigue_triggered,
            event_infra_downtime_triggered,
            active_regime: nextRegime,
            governance_history: governanceHistory,
            regime_flags: regimeFlags
          },
          lastTick: now
        };

        persistState(newState);
        return newState;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [authLoading, soundEnabled, triggerHaptic, persistState, showToast]);

  const buyAgent = useCallback((agent: Agent) => {
    const currentOwned = gameState.inventory.find(i => i.id === agent.id)?.quantity || 0;
    const cost = calculateAgentCost(agent.custo_base, currentOwned, gameState.meta.prestige_level || 0);

    if (gameState.resources.capital >= cost) {
      import('./utils/tracing').then(({ withSpanSync }) => {
        withSpanSync('game.buy_agent', (span) => {
          span.setAttributes({
            'agent.id': agent.id,
            'agent.cost': cost,
            'agent.new_quantity': currentOwned + 1
          });

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
        });
      });
      triggerHaptic('success');
      showToast(`ROI: +${agent.economia_diaria_minutos}min/dia recuperados.`);
      return true;
    }
    return false;
  }, [gameState.resources.capital, gameState.inventory, triggerHaptic, showToast]);

  // Telegram MainButton Logic
  useEffect(() => {
    if (selectedAgentId && currentView === 'agentes') {
      const agent = gameState.agents.find(a => a.id === selectedAgentId);
      if (agent) {
        const owned = gameState.inventory.find(i => i.id === agent.id)?.quantity || 0;
        const cost = calculateAgentCost(agent.custo_base, owned, gameState.meta.prestige_level || 0);
        const canAfford = gameState.resources.capital >= cost;

        telegram.mainButton.setText(canAfford ? `INVESTIR $${cost.toLocaleString()}` : `CAPITAL INSUFICIENTE ($${cost.toLocaleString()})`);

        const handleMainClick = () => {
          if (buyAgent(agent)) {
            setSelectedAgentId(null);
            // Daily Task: Buy Agent
            setDailyTasks(prev => prev.map(t =>
              t.id === 'task_agent' && !t.completed
                ? { ...t, current: Math.min(t.target, t.current + 1) }
                : t
            ));
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

    // Daily Task: Tracker de Cliques
    setDailyTasks(prev => prev.map(t =>
      t.id === 'task_clicks' && !t.completed
        ? { ...t, current: Math.min(t.target, t.current + 1) }
        : t
    ));

    import('./utils/tracing').then(({ withSpanSync }) => {
      withSpanSync('game.manual_action', (span) => {
        const scaledGain = calculateManualGain(
          action,
          gameState.meta.capital_total_gerado,
          gameState.meta.prestige_level || 0,
          gameState.meta.active_regime
        );
        span.setAttributes({
          'action.id': action.id,
          'action.gain': scaledGain,
          'action.stress': action.stress_gain
        });

        triggerHaptic('impact');

        setGameState(prev => ({
          ...prev,
          resources: {
            ...prev.resources,
            capital: prev.resources.capital + scaledGain,
            stress: prev.resources.stress + action.stress_gain
          },
          meta: { ...prev.meta, capital_total_gerado: prev.meta.capital_total_gerado + scaledGain }
        }));
      });
    });
  };

  const resetGame = useCallback(async () => {
    const confirmed = await telegram.showConfirm("Você deseja reiniciar sua operação? Você manterá seu nome e conquistas, mas o capital e agentes serão resetados para uma nova escala.");
    if (confirmed) {
      const freshState = {
        ...INITIAL_GAME_STATE,
        meta: {
          ...INITIAL_GAME_STATE.meta,
          user: gameState.meta.user,
          start_time: Date.now()
        }
      };

      setGameState(freshState);
      setShowSingularity(false);

      // Limpa e salva estado limpo
      if (user?.id) {
        await resetUserData(user.id);
        await saveFreshState(user.id, gameState.meta.user);
      }

      showToast("SISTEMA RESETADO. INICIANDO NOVA ESCALA...");
    }
  }, [gameState.meta.user, user?.id, showToast]);

  const handlePrestige = useCallback(async () => {
    const currentPrestige = gameState.meta.prestige_level || 0;
    const confirmed = await telegram.showConfirm(`Ativar Prestígio? Você resetará seu progresso mas ganhará +${((currentPrestige + 1) * 10).toFixed(0)}% de bônus permanente em todas as próximas jornadas.`);
    if (confirmed) {
      const freshState = {
        ...INITIAL_GAME_STATE,
        meta: {
          ...INITIAL_GAME_STATE.meta,
          user: gameState.meta.user,
          start_time: Date.now(),
          prestige_level: currentPrestige + 1,
          final_victory_reached: gameState.meta.final_victory_reached || false
        }
      };

      setGameState(freshState);
      setShowPrestige(false);

      // Salva estado limpo
      if (user?.id) {
        await saveFreshState(user.id, gameState.meta.user);
      }

      showToast(`PRESTÍGIO ATIVADO! Bônus permanente: +${((currentPrestige + 1) * 10).toFixed(0)}%`);
    }
  }, [gameState.meta.user, gameState.meta.prestige_level, gameState.meta.final_victory_reached, user?.id, showToast]);

  // Função global para resetar dados (disponível no console do navegador)
  useEffect(() => {
    (window as any).resetAgentFlow = async () => {
      if (!user?.id) {
        console.error('Usuário não identificado');
        return;
      }

      const confirmed = confirm('⚠️ ATENÇÃO: Isso vai ZERAR TODOS os seus dados do jogo. Deseja continuar?');
      if (!confirmed) return;

      try {
        await resetUserData(user.id);
        await saveFreshState(user.id, gameState.meta.user);

        const freshState = {
          ...INITIAL_GAME_STATE,
          meta: {
            ...INITIAL_GAME_STATE.meta,
            user: gameState.meta.user,
            start_time: Date.now()
          }
        };

        setGameState(freshState);
        showToast("DADOS RESETADOS COMPLETAMENTE. RECARREGUE A PÁGINA.");

        // Recarrega a página após 2 segundos
        setTimeout(() => {
          window.location.reload();
        }, 2000);
      } catch (error) {
        console.error('Erro ao resetar:', error);
        showToast("ERRO AO RESETAR. TENTE NOVAMENTE.");
      }
    };

    console.log('%c🔄 Reset disponível:', 'color: #ff00ff; font-weight: bold;', 'Digite resetAgentFlow() no console para resetar seus dados');
  }, [user?.id, gameState.meta.user, showToast]);

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
      {showSingularity && (
        <SingularityCertificate
          userName={gameState.meta.user?.name || 'CEO'}
          onClose={() => setShowSingularity(false)}
          onReset={resetGame}
        />
      )}
      {showWithdraw && (
        <WithdrawModal
          valuation={calculateValuation(gameState).toFixed(0)}
          userName={gameState.meta.user?.name || 'CEO'}
          onClose={() => setShowWithdraw(false)}
        />
      )}
      {showPrestige && (
        <PrestigeModal
          userName={gameState.meta.user?.name || 'CEO'}
          valuation={calculateValuation(gameState)}
          prestigeLevel={gameState.meta.prestige_level || 0}
          onClose={() => setShowPrestige(false)}
          onPrestige={handlePrestige}
        />
      )}

      <StoreModal
        isOpen={showStore}
        onClose={() => setShowStore(false)}
        onPurchaseSuccess={(item) => {
          showToast(`COMPRA REALIZADA: ${item.title}`);
          triggerHaptic('success');

          setGameState(prev => {
            let newResources = { ...prev.resources };
            let newMeta = { ...prev.meta };

            if (item.effect_type === 'capital') {
              newResources.capital += item.effect_value;
              newMeta.capital_total_gerado += item.effect_value;
            } else if (item.effect_type === 'insurance') {
              newResources.stress = 0;
              newMeta.is_crashed = false;
              newMeta.crash_end_time = 0;
            }

            return {
              ...prev,
              resources: newResources,
              meta: newMeta
            };
          });
        }}
      />

      <DailyTasksModal
        isOpen={showDailyTasks}
        onClose={() => setShowDailyTasks(false)}
        streak={streak}
        tasks={dailyTasks}
        onClaim={(taskId) => {
          const task = dailyTasks.find(t => t.id === taskId);
          if (!task || task.completed) return;

          triggerHaptic('success');
          showToast(`RECOMPENSA RESGATADA: ${task.reward}`);

          // Apply Reward Logic
          setGameState(prev => {
            let r = { ...prev.resources };
            if (taskId === 'task_login') r.capital += (r.capital * 0.10);
            if (taskId === 'task_clicks') r.stress = Math.max(0, r.stress - 20);
            if (taskId === 'task_agent') r.capital += 500;
            return { ...prev, resources: r };
          });

          setDailyTasks(prev => prev.map(t => t.id === taskId ? { ...t, completed: true } : t));
        }}
      />

      <LeaderboardModal
        isOpen={showLeaderboard}
        onClose={() => setShowLeaderboard(false)}
        currentValuation={calculateValuation(gameState)}
        userName={gameState.meta.user?.name || 'CEO'}
        userId={gameState.meta.user?.id || 0}
      />

      {showNeoMint && (
        <NeoMintModal onClose={() => setShowNeoMint(false)} />
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
        <div className="bg-[#130b1a]/90 ios-blur text-white px-5 py-2.5 rounded-full font-bold text-[9px] uppercase shadow-[0_10px_30px_rgba(0,0,0,0.5)] tracking-widest border border-white/5 flex items-center gap-3">
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
      <SpeedInsights />
    </div>
  );
};

export default App;
