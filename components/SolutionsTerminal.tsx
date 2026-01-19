
import React from 'react';
import { ExternalLink, Cpu, Target, Layers, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { POLYGON_PURPLE } from '../constants';

const SOLUTIONS = [
  {
    id: "agent_support",
    title: "NΞØ Customer Agent",
    game_effect: "Elimina cliques manuais de suporte.",
    real_world_tech: "IA autônoma treinada na sua base de conhecimento. Responde 24/7 em <2s.",
    cta_link: "https://www.flowoff.xyz/solutions/support",
    icon: <Cpu className="text-magenta" size={20} />
  },
  {
    id: "agent_outbound",
    title: "Hunter SDR Protocol",
    game_effect: "Gera receita passiva agressiva.",
    real_world_tech: "Agentes que buscam leads no LinkedIn/Web, enriquecem dados e iniciam contato frio.",
    cta_link: "https://www.flowoff.xyz/solutions/sales",
    icon: <Target className="text-magenta" size={20} />
  },
  {
    id: "token_infrastructure",
    title: "Tokenization Engine ($NEOFLW)",
    game_effect: "Multiplicador de Valuation.",
    real_world_tech: "Infraestrutura completa de Smart Contracts na Polygon para tokenizar ativos reais.",
    cta_link: "https://polygonscan.com/token/0x59aa4EaE743d608FBDd4205ebA59b38DCA755Dd2",
    icon: <Layers style={{ color: POLYGON_PURPLE }} size={20} />
  }
];

const SolutionsTerminal: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500 pb-10">
      <header className="px-1 space-y-2">
        <div className="flex items-center gap-2 text-magenta opacity-80">
          <ShieldCheck size={14} />
          <h2 className="text-[10px] font-black uppercase tracking-[0.2em]">NEØ FlowOFF Technical Manifest</h2>
        </div>
        <h1 className="text-3xl font-black tracking-tight text-white uppercase italic text-glow">Protocols</h1>
        <p className="text-xs text-gray-500 font-medium leading-relaxed max-w-[90%]">
          A ponte entre a simulação e a realidade. Conheça as tecnologias reais que alimentam a escala infinita.
        </p>
      </header>

      <div className="space-y-4">
        {SOLUTIONS.map((sol) => (
          <div
            key={sol.id}
            className="group relative bg-white/5 border border-white/10 rounded-[28px] overflow-hidden transition-all hover:bg-white/[0.08] active:scale-[0.98]"
          >
            <div className="p-6 space-y-4">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-white/5 rounded-2xl border border-white/10">
                    {sol.icon}
                  </div>
                  <h3 className="text-lg font-black text-white uppercase tracking-tight">{sol.title}</h3>
                </div>
                <button
                  onClick={() => window.open(sol.cta_link, '_blank')}
                  className="p-2 text-gray-500 hover:text-white transition-colors"
                >
                  <ExternalLink size={18} />
                </button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="px-2 py-0.5 bg-magenta/10 rounded-md border border-magenta/20">
                    <span className="text-[9px] font-black text-magenta uppercase tracking-widest">In-Game Effect</span>
                  </div>
                  <p className="text-[11px] text-gray-300 font-mono italic">{sol.game_effect}</p>
                </div>

                <div className="bg-black/20 p-4 rounded-2xl border border-white/5 space-y-2">
                  <div className="flex items-center gap-1.5 opacity-50">
                    <Zap size={10} className="text-magenta" />
                    <span className="text-[8px] font-black uppercase tracking-widest text-white">Real World Stack</span>
                  </div>
                  <p className="text-xs text-gray-400 leading-relaxed font-medium">
                    {sol.real_world_tech}
                  </p>
                </div>
              </div>

              <button
                onClick={() => window.open(sol.cta_link, '_blank')}
                className="w-full py-4 bg-white/5 border border-white/10 rounded-[18px] flex items-center justify-center gap-2 text-[10px] font-black text-white uppercase tracking-[0.2em] transition-all hover:bg-magenta hover:border-magenta hover:shadow-[0_0_20px_rgba(255,0,255,0.3)]"
              >
                Access Documentation
                <ArrowRight size={14} />
              </button>
            </div>

            {/* Subtle glow on hover */}
            <div className="absolute inset-0 bg-magenta/5 opacity-0 group-hover:opacity-100 pointer-events-none transition-opacity duration-500 blur-3xl" />
          </div>
        ))}
      </div>

      <div className="text-center pt-4">
        <p className="text-[8px] text-gray-600 font-mono uppercase tracking-[0.4em]">
          End of document // Protocol NEØ FlowOFF 0xFLOW
        </p>
      </div>
    </div>
  );
};

export default SolutionsTerminal;
