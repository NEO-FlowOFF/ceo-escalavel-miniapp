
import React, { useState, useEffect, useRef, memo } from 'react';
import { GameState } from '../types';
import { playTyping, playNotification, playAlert } from '../engine/soundEffects';
import { calculateAgentCost, calculateValuation } from '../engine/gameLogic';
import { AUDITOR_MESSAGES } from '../constants/auditorMessages';
import { openExternalLink } from '../utils/navigation';

interface NeoTerminalProps {
  gameState: GameState;
  soundEnabled: boolean;
}

const NEO_AVATAR = {
  primary: "/agent_neo.png",
  fallback: "/agent_neo.png"
};

const NeoTerminal: React.FC<NeoTerminalProps> = ({ gameState, soundEnabled }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [fullText, setFullText] = useState(AUDITOR_MESSAGES.SYSTEM.IDLE_INITIAL);
  const [activeCta, setActiveCta] = useState<{ label: string, link: string } | null>(null);
  const [isTyping, setIsTyping] = useState(false);

  // Refs para controle de memória do Auditor
  const lastMessageRef = useRef<string>("");
  const lastIdleSwitchRef = useRef<number>(0);
  const lastAdviceTimeRef = useRef<number>(0);
  const socialEventTriggeredRef = useRef(false);
  const trafficEventTriggeredRef = useRef(false);
  const supportEventTriggeredRef = useRef(false);
  const sdrEventTriggeredRef = useRef(false);
  const infraEventTriggeredRef = useRef(false);
  const fastGrowthRef = useRef(false);
  const whaleValuationRef = useRef(false);
  const burnoutProRef = useRef(0);
  const prevInventoryCount = useRef(gameState.inventory.reduce((acc, i) => acc + i.quantity, 0));
  const prevStatus = useRef(gameState.meta.status);

  const userName = gameState.meta.user?.name || "Operador";

  // Inicialização: marca refs baseado no estado atual para evitar reenvio de mensagens antigas
  const initializedRef = useRef(false);

  useEffect(() => {
    const { resources, inventory, meta, agents } = gameState;
    const totalCap = meta.capital_total_gerado;
    const stress = resources.stress;
    const currentInventoryCount = inventory.reduce((acc, i) => acc + i.quantity, 0);
    const now = Date.now();

    const currentValuation = calculateValuation(gameState);
    const playMinutes = (now - meta.start_time) / 1000 / 60;

    // Inicialização única: marca refs baseado no estado atual para evitar reenvio de mensagens antigas
    if (!initializedRef.current && meta.start_time) {
      initializedRef.current = true;

      // Marca eventos já disparados como processados (evita reenvio)
      if (meta.event_social_media_triggered) {
        socialEventTriggeredRef.current = true;
      }
      if (meta.event_traffic_loss_triggered) {
        trafficEventTriggeredRef.current = true;
      }
      if (meta.event_support_backlog_triggered) {
        supportEventTriggeredRef.current = true;
      }
      if (meta.event_sdr_fatigue_triggered) {
        sdrEventTriggeredRef.current = true;
      }
      if (meta.event_infra_downtime_triggered) {
        infraEventTriggeredRef.current = true;
      }

      // Marca easter eggs já atingidos como processados
      // Fast Growth: só é válido se valuation > 500 E playMinutes < 3
      // Se já passou dos 3 minutos OU já tem valuation alto, marca como processado
      if (playMinutes >= 3 || currentValuation > 10000) {
        fastGrowthRef.current = true;
      }
      if (currentValuation > 10000) {
        whaleValuationRef.current = true;
      }

      // Inicializa prevInventoryCount e prevStatus com valores atuais
      prevInventoryCount.current = currentInventoryCount;
      prevStatus.current = meta.status;

      // Se já passou do estado inicial, define uma mensagem idle apropriada
      if (meta.capital_total_gerado > 0) {
        const idlePool = AUDITOR_MESSAGES.IDLE_THOUGHTS;
        const initialIdle = idlePool[Math.floor(Math.random() * idlePool.length)];
        setFullText(initialIdle);
        lastMessageRef.current = initialIdle;
        lastIdleSwitchRef.current = now;
      } else {
        // Primeiro acesso: mantém mensagem inicial
        lastMessageRef.current = "";
      }
      
      // Retorna early na primeira inicialização para evitar processar mensagens antigas
      return;
    }

    let priorityMessage = "";
    let isHighPriority = false;
    let currentCta = null;

    // 1. Mensagens Críticas (Sempre Verificadas)
    if (meta.is_crashed) {
      if (burnoutProRef.current < 1) {
        priorityMessage = AUDITOR_MESSAGES.CRITICAL.CRASH(userName);
        burnoutProRef.current = 1;
        isHighPriority = true;
      }
    } else if (currentValuation > 500 && playMinutes < 3 && !fastGrowthRef.current) {
      priorityMessage = AUDITOR_MESSAGES.EASTER_EGG.FAST_GROWTH.text;
      currentCta = AUDITOR_MESSAGES.EASTER_EGG.FAST_GROWTH.cta;
      fastGrowthRef.current = true;
      isHighPriority = true;
    } else if (currentValuation > 10000 && !whaleValuationRef.current) {
      priorityMessage = AUDITOR_MESSAGES.EASTER_EGG.WHALE_VALUATION.text;
      currentCta = AUDITOR_MESSAGES.EASTER_EGG.WHALE_VALUATION.cta;
      whaleValuationRef.current = true;
      isHighPriority = true;
    } else if (meta.event_social_media_triggered && !socialEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.SOCIAL_VULNERABILITY;
      socialEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (meta.event_traffic_loss_triggered && !trafficEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.TRAFFIC_LOSS;
      trafficEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (meta.event_support_backlog_triggered && !supportEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.SUPPORT_BACKLOG;
      supportEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (meta.event_sdr_fatigue_triggered && !sdrEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.SDR_FATIGUE;
      sdrEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (meta.event_infra_downtime_triggered && !infraEventTriggeredRef.current) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.INFRA_DOWNTIME;
      infraEventTriggeredRef.current = true;
      isHighPriority = true;
    } else if (stress > 95 && lastMessageRef.current !== AUDITOR_MESSAGES.CRITICAL.BURNOUT_WARNING) {
      priorityMessage = AUDITOR_MESSAGES.CRITICAL.BURNOUT_WARNING;
      isHighPriority = true;
    }

    // 2. Mudanças de Estado (Gatilhos Únicos)
    else if (currentInventoryCount > prevInventoryCount.current) {
      priorityMessage = AUDITOR_MESSAGES.PROGRESS.AGENT_INJECTED;
      prevInventoryCount.current = currentInventoryCount;
    } else if (prevStatus.current !== meta.status) {
      priorityMessage = AUDITOR_MESSAGES.PROGRESS.STATUS_EVOLUTION(meta.status);
      prevStatus.current = meta.status;
    } else if (totalCap === 0 && lastMessageRef.current === "") {
      priorityMessage = AUDITOR_MESSAGES.SYSTEM.INITIAL(userName);
    }

    // 3. Conselhos Contextuais (Com Cooldown de 120s)
    else {
      const nextAgent = agents.find(a => totalCap >= a.desbloqueia_em_capital_total);
      const nextAgentCost = nextAgent ? calculateAgentCost(nextAgent.custo_base, inventory.find(i => i.id === nextAgent.id)?.quantity || 0) : 0;

      const isAdviceCooldownOver = now - lastAdviceTimeRef.current > 120000;

      if (nextAgentCost > 0 && resources.capital > nextAgentCost * 2 && isAdviceCooldownOver) {
        priorityMessage = AUDITOR_MESSAGES.ADVICE.IDLE_CAPITAL;
        lastAdviceTimeRef.current = now;
      }
    }

    // Reset burnout ref when not crashed
    if (!meta.is_crashed && burnoutProRef.current > 0) {
      burnoutProRef.current = 0;
    }

    // 4. Lógica de Troca de Mensagem
    const shouldUpdateIdle = now - lastIdleSwitchRef.current > 45000;

    if (priorityMessage && priorityMessage !== lastMessageRef.current) {
      // Se houver uma mensagem de prioridade NOVA, exibe imediatamente
      setFullText(priorityMessage);
      setDisplayedText("");

      if (currentCta) {
        const isTelegram = gameState.meta.user?.type === 'telegram';
        const rawLink = isTelegram ? currentCta.tg : currentCta.wa;
        const finalLink = rawLink.replace('{{NAME}}', encodeURIComponent(userName));

        setActiveCta({
          label: currentCta.label,
          link: finalLink
        });
      } else {
        setActiveCta(null);
      }

      lastMessageRef.current = priorityMessage;
      if (soundEnabled) {
        if (isHighPriority) playAlert();
        else playNotification();
      }
    } else if (shouldUpdateIdle && !priorityMessage && !isTyping) {
      // Se não houver prioridade NOVA, mas for hora de atualizar, roda pensamentos IDLE
      const idlePool = AUDITOR_MESSAGES.IDLE_THOUGHTS;
      let nextIdle = lastMessageRef.current;

      while (nextIdle === lastMessageRef.current) {
        nextIdle = idlePool[Math.floor(Math.random() * idlePool.length)];
      }

      setFullText(nextIdle);
      setDisplayedText("");
      setActiveCta(null);
      lastMessageRef.current = nextIdle;
      lastIdleSwitchRef.current = now;
      if (soundEnabled) playNotification();
    }
  }, [
    gameState.meta.status,
    gameState.meta.is_crashed,
    gameState.meta.event_social_media_triggered,
    gameState.meta.event_traffic_loss_triggered,
    gameState.meta.event_support_backlog_triggered,
    gameState.meta.event_sdr_fatigue_triggered,
    gameState.meta.event_infra_downtime_triggered,
    gameState.inventory.length,
    gameState.resources.capital,
    userName,
    soundEnabled,
    // Removido gameState inteiro para evitar triggers de 1s, usando apenas o necessário
    gameState.resources.stress,
    gameState.meta.capital_total_gerado
  ]);

  useEffect(() => {
    if (displayedText.length < fullText.length) {
      setIsTyping(true);
      const timeout = setTimeout(() => {
        setDisplayedText(fullText.slice(0, displayedText.length + 1));
        if (soundEnabled && displayedText.length % 2 === 0) playTyping();
      }, 15);
      return () => clearTimeout(timeout);
    } else {
      setIsTyping(false);
    }
  }, [displayedText, fullText, soundEnabled]);

  return (
    <div className="relative mx-1">
      <div className={`absolute -inset-0.5 rounded-[28px] blur-xl opacity-20 transition-all duration-1000 ${gameState.meta.is_crashed ? 'bg-red-600 animate-pulse' : 'bg-magenta/40'
        }`}></div>

      <div className={`relative bg-[#0d0714]/90 ios-blur border rounded-[28px] p-5 flex gap-4 items-center border-white/5 overflow-hidden`}>
        <div className="w-12 h-12 flex-shrink-0 relative">
          <img
            src={NEO_AVATAR.primary}
            alt="Neo"
            className={`w-full h-full object-cover rounded-xl grayscale-[0.5] ${gameState.meta.is_crashed ? 'hue-rotate-[300deg]' : ''}`}
            onError={(e) => { (e.target as HTMLImageElement).src = NEO_AVATAR.fallback; }}
          />
          <div className={`absolute -bottom-1 -right-1 w-3 h-3 rounded-full border-2 border-[#0d0714] ${gameState.meta.is_crashed ? 'bg-red-600' : 'bg-green-500'
            }`}></div>
        </div>

        <div className="flex-1 min-h-[40px]">
          <div className="flex justify-between items-center mb-1">
            <span className="text-[8px] font-black text-magenta uppercase tracking-widest opacity-60">NEO // AUDITOR</span>
          </div>
          <p className="text-[12px] font-mono text-gray-200 leading-tight">
            <span className="text-magenta mr-1">$</span>
            {displayedText}
            <span className={`inline-block w-1.5 h-3 bg-magenta ml-1 align-middle ${isTyping ? 'opacity-100' : 'opacity-0'}`}></span>
          </p>

          {activeCta && !isTyping && (
            <div className="mt-3 animate-float-up">
              <button
                onClick={() => openExternalLink(activeCta.link)}
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-magenta/20 border border-magenta/40 rounded-full text-[9px] font-black text-magenta uppercase tracking-widest hover:bg-magenta hover:text-white transition-all animate-pulse"
              >
                {activeCta.label}
                <div className="w-1 h-1 rounded-full bg-magenta animate-ping" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(NeoTerminal);
