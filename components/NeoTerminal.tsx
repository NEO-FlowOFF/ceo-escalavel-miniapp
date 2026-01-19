
import React, { useState, useEffect, useRef, memo } from 'react';
import { GameState } from '../types';
import { playTyping, playNotification, playAlert } from '../engine/soundEffects';
import { calculateAgentCost } from '../engine/gameLogic';

interface NeoTerminalProps {
  gameState: GameState;
  soundEnabled: boolean;
}

const NEO_AVATAR = "/agent_neo.png";

const NeoTerminal: React.FC<NeoTerminalProps> = ({ gameState, soundEnabled }) => {
  const [displayedText, setDisplayedText] = useState("");
  const [fullText, setFullText] = useState("Iniciando auditoria de processos... Analisando gargalos.");
  const [isTyping, setIsTyping] = useState(false);

  // Usar refs para comparar estado e evitar triggers desnecessários de mensagens
  const prevInventoryCount = useRef(gameState.inventory.reduce((acc, i) => acc + i.quantity, 0));
  const prevStatus = useRef(gameState.meta.status);
  const socialEventTriggeredRef = useRef(false);

  const userName = gameState.meta.user?.name || "Operador";

  useEffect(() => {
    let message = "";
    const { resources, inventory, meta, agents } = gameState;
    const totalCap = meta.capital_total_gerado;
    const capital = resources.capital;
    const stress = resources.stress;
    const pps = resources.receita_passiva;
    const currentInventoryCount = inventory.reduce((acc, i) => acc + i.quantity, 0);

    const nextAgent = agents.find(a => totalCap >= a.desbloqueia_em_capital_total);
    const nextAgentCost = nextAgent ? calculateAgentCost(nextAgent.custo_base, inventory.find(i => i.id === nextAgent.id)?.quantity || 0) : 0;

    // --- Lógica de Gatilhos de Mensagem ---
    if (meta.is_crashed) {
      message = `SISTEMA OFFLINE. Burnout nível 10. ${userName}, sua infraestrutura biológica falhou. Reinicie ou peça ajuda à rede.`;
    }
    else if (meta.event_social_media_triggered && !socialEventTriggeredRef.current) {
      message = "VULNERABILIDADE: Inconsistência Humana nas redes sociais. Agentes não têm dias ruins.";
      socialEventTriggeredRef.current = true;
    }
    else if (stress > 95) {
      message = "ALERTA: Seus níveis de cortisol estão fritando o Nexus. Automatize ou colapse.";
    }
    else if (currentInventoryCount > prevInventoryCount.current) {
      message = "REDE EXPANDIDA: A dependência humana diminuiu drasticamente. Agente injetado.";
      prevInventoryCount.current = currentInventoryCount;
    }
    else if (prevStatus.current !== meta.status) {
      message = `EVOLUÇÃO: Você agora é '${meta.status}'. O mercado teme sua escala.`;
      prevStatus.current = meta.status;
    }
    else if (totalCap === 0) {
      message = `Cockpit pronto, ${userName}. Diagnóstico: Gargalo Humano Severo.`;
    }
    else if (nextAgentCost > 0 && capital > nextAgentCost * 1.5) {
      message = "Capital ocioso é pecado. Reinvista esse caixa agora.";
    }
    else {
      // Idle messages periodicamente (usando o tempo como seed)
      const timeSeed = Math.floor(Date.now() / 20000);
      const idleMessages = [
        "Processos batem talento todas as vezes.",
        "Se você ainda clica, você não é o dono, é o gargalo.",
        "O ROI da automação é infinito.",
        "Escalabilidade é a arte de remover o humano do caminho.",
        "Agentes não fazem pausa para café. Isso é FlowOff."
      ];
      message = idleMessages[timeSeed % idleMessages.length];
    }

    if (message && message !== fullText) {
      setFullText(message);
      setDisplayedText("");
      if (soundEnabled) {
        if (stress > 85 || meta.is_crashed) playAlert();
        else playNotification();
      }
    }
  }, [
    gameState.meta.status,
    gameState.meta.is_crashed,
    gameState.meta.event_social_media_triggered,
    gameState.inventory.length,
    gameState.resources.capital,
    userName
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

      <div className={`relative bg-[#0d0714]/90 ios-blur border rounded-[28px] p-5 flex gap-4 items-center border-white/10 overflow-hidden`}>
        <div className="w-12 h-12 flex-shrink-0 relative">
          <img
            src={NEO_AVATAR}
            alt="Neo"
            className={`w-full h-full object-cover rounded-xl grayscale-[0.5] ${gameState.meta.is_crashed ? 'hue-rotate-[300deg]' : ''}`}
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
        </div>
      </div>
    </div>
  );
};

export default memo(NeoTerminal);
