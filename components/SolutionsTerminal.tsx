
import React from 'react';
import {
  ExternalLink,
  Cpu,
  Target,
  Layers,
  ArrowRight,
  ShieldCheck,
  Zap,
  Share2,
  TrendingUp,
  Server,
  MessageSquare,
  Network
} from 'lucide-react';
import { POLYGON_PURPLE } from '../constants';
import { openExternalLink } from '../utils/navigation';

const SOLUTIONS = [
  {
    id: "agent_support",
    title: "NΞØ Customer Agent",
    game_effect: "Elimina cliques manuais de suporte.",
    real_world_tech: "Automação via LLM (GPT-4o) treinada na base de conhecimento da empresa. Atendimento resolutivo 24/7.",
    cta_link: "https://t.me/neomello",
    icon: <MessageSquare className="text-magenta" size={20} />
  },
  {
    id: "agent_social",
    title: "Social Autopilot",
    game_effect: "Escala alcance orgânico sem humanos.",
    real_world_tech: "Criação de pautas, artes e agendamento via IA. Distribuição multi-canal sincronizada.",
    cta_link: "https://t.me/neomello",
    icon: <Share2 className="text-magenta" size={20} />
  },
  {
    id: "agent_traffic",
    title: "Ads ROAS Optimizer",
    game_effect: "Previne queima de caixa em Ads.",
    real_world_tech: "Monitoramento de APIs de Facebook/Google Ads com scripts de pausa automática por performance.",
    cta_link: "https://t.me/neomello",
    icon: <TrendingUp className="text-magenta" size={20} />
  },
  {
    id: "agent_outbound",
    title: "Hunter SDR Protocol",
    game_effect: "Gera receita passiva agressiva.",
    real_world_tech: "Scraping inteligente, enriquecimento de leads e cadência de e-mails/LinkedIn via Agenteston.",
    cta_link: "https://t.me/neomello",
    icon: <Target className="text-magenta" size={20} />
  },
  {
    id: "agent_infra",
    title: "Zero-Ops Cloud",
    game_effect: "Sistemas resilientes e auto-curáveis.",
    real_world_tech: "Infraestrutura como código (IaC) com scripts de auto-recovery e monitoramento preditivo.",
    cta_link: "https://t.me/neomello",
    icon: <Server className="text-magenta" size={20} />
  },
  {
    id: "token_infrastructure",
    title: "Tokenization Engine",
    game_effect: "Multiplicador de Valuation e Equity.",
    real_world_tech: "Smart Contracts (ERC-20/721) na Polygon para distribuição de lucros e governança on-chain.",
    cta_link: "https://polygonscan.com/token/0x59aa4EaE743d608FBDd4205ebA59b38DCA755Dd2",
    icon: <Network style={{ color: POLYGON_PURPLE }} size={20} />
  }
];

interface SolutionsTerminalProps {
  userName?: string;
}

const SolutionsTerminal: React.FC<SolutionsTerminalProps> = ({ userName = 'CEO' }) => {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-5 duration-700 pb-32">
      <header className="px-1 space-y-2">
        <div className="flex items-center gap-2 text-magenta opacity-80">
          <ShieldCheck size={14} />
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em]">NEØ FlowOFF Technical Manifest</h2>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white uppercase italic text-glow">Protocols</h1>
        <p className="text-xs text-gray-400 font-medium leading-relaxed max-w-[95%]">
          A fronteira final entre o código e o lucro. Conheça as tecnologias que estamos usando para automatizar o mundo real.
        </p>
      </header>

      <div className="grid gap-4">
        {SOLUTIONS.map((sol) => (
          <div
            key={sol.id}
            className="group relative bg-[#130b1a]/60 ios-blur border border-white/5 rounded-[32px] overflow-hidden transition-all hover:border-magenta/30 active:scale-[0.98]"
          >
            <div className="p-6 space-y-5 flex flex-col h-full">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 flex items-center justify-center bg-white/5 rounded-2xl border border-white/10 group-hover:bg-magenta/10 group-hover:border-magenta/20 transition-all">
                    {sol.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-black text-white uppercase tracking-tight">{sol.title}</h3>
                    <div className="flex items-center gap-2 mt-0.5">
                      <Zap size={10} className="text-magenta animate-pulse" />
                      <span className="text-[8px] font-black uppercase tracking-widest text-[#a855f7]">Verified Protocol</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => {
                    const text = encodeURIComponent(`Olá Mellø, sou o ${userName}. Vi o manifesto técnico e quero implementar o protocolo ${sol.title} no meu negócio.`);
                    openExternalLink(`https://t.me/neomello?text=${text}`);
                  }}
                  className="p-2 text-gray-600 hover:text-magenta transition-colors"
                >
                  <ExternalLink size={18} />
                </button>
              </div>

              <div className="space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div className="bg-black/20 p-3 rounded-2xl border border-white/5">
                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Game Impact</span>
                    <p className="text-[10px] text-magenta font-bold italic领先-tight">{sol.game_effect}</p>
                  </div>
                  <div className="bg-black/20 p-3 rounded-2xl border border-white/5">
                    <span className="text-[8px] font-black text-gray-500 uppercase tracking-widest block mb-1">Status</span>
                    <p className="text-[10px] text-green-400 font-bold uppercase tracking-widest">Active ⦿</p>
                  </div>
                </div>

                <div className="bg-black/40 p-4 rounded-2xl border border-white/5 relative overflow-hidden">
                  <span className="text-[8px] font-black uppercase tracking-widest text-white/40 block mb-2">Technical Implementation</span>
                  <p className="text-[11px] text-gray-400 leading-relaxed relative z-10">
                    {sol.real_world_tech}
                  </p>
                  <div className="absolute top-0 right-0 p-2 opacity-10">
                    <Cpu size={40} />
                  </div>
                </div>
              </div>

              <button
                onClick={() => {
                  const text = encodeURIComponent(`Olá Mellø, sou o ${userName}. Vi o manifesto técnico e quero implementar o protocolo ${sol.title} no meu negócio.`);
                  openExternalLink(`https://t.me/neomello?text=${text}`);
                }}
                className="w-full py-4 bg-white/5 border border-white/10 rounded-[20px] flex items-center justify-center gap-2 text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all group-hover:bg-magenta group-hover:border-magenta group-hover:shadow-[0_10px_30px_rgba(255,0,255,0.2)]"
              >
                Implementar Agora
                <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="relative mt-8 group">
        <div className="absolute -inset-1 bg-gradient-to-r from-magenta to-purple-600 rounded-[35px] blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
        <div
          onClick={() => {
            const text = encodeURIComponent(`Olá Mellø, sou o ${userName}. Gostaria de agendar um diagnóstico de infraestrutura real para minha empresa.`);
            openExternalLink(`https://t.me/neomello?text=${text}`);
          }}
          className="relative bg-[#0d0714] border border-white/10 rounded-[35px] p-8 text-center cursor-pointer hover:border-magenta/50 transition-all shadow-2xl"
        >
          <Network className="mx-auto text-magenta mb-4 animate-spin-slow" size={32} />
          <h2 className="text-xl font-black text-white uppercase italic mb-2 tracking-tight">Escala Real On-Demand</h2>
          <p className="text-xs text-gray-500 leading-relaxed mb-6 max-w-xs mx-auto">
            O jogo é apenas o começo. Agende um diagnóstico de infraestrutura e traga os agentes para o seu negócio real.
          </p>
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-magenta text-white text-[11px] font-black uppercase tracking-widest rounded-full shadow-[0_5px_15px_rgba(255,0,255,0.4)] active:scale-95 transition-all">
            Falar com Mellø no Telegram
            <ArrowRight size={16} />
          </div>
        </div>
      </div>

      <footer className="text-center pt-8">
        <p className="text-[9px] text-gray-700 font-mono uppercase tracking-[0.5em]">
          NEØ FlowOFF // Autonomous Engineering Group // 2026
        </p>
      </footer>
    </div>
  );
};

export default SolutionsTerminal;
