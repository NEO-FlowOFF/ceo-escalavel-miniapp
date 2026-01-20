
import React from 'react';
import { Award, Sparkles, X, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { openExternalLink } from '../utils/navigation';

interface SingularityCertificateProps {
  userName: string;
  onClose: () => void;
  onReset: () => void;
}

const SingularityCertificate: React.FC<SingularityCertificateProps> = ({ userName, onClose, onReset }) => {
  const handleConsultancy = () => {
    const text = encodeURIComponent(`Olá Mellø, sou o ${userName}. Alcancei a Singularidade no game e quero transicionar minha infra para o mundo real.`);
    openExternalLink(`https://t.me/neomello?text=${text}`);
  };

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 animate-in fade-in duration-700">
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl pointer-events-auto"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm bg-[#0d0714]/95 backdrop-blur-3xl border border-yellow-500/30 rounded-[40px] p-10 shadow-[0_0_80px_rgba(234,179,8,0.15)] overflow-hidden animate-in zoom-in-95 duration-500">
        {/* Subtle Background Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-yellow-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-magenta/10 blur-[100px] rounded-full" />

        <header className="text-center mb-12 relative z-10">
          <div className="inline-flex p-4 bg-yellow-500/10 rounded-3xl border border-yellow-500/20 mb-6">
            <Award className="text-yellow-500" size={32} />
          </div>
          <h2 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.4em] mb-2 opacity-80">Missão Concluída</h2>
          <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">Singularidade</h3>
        </header>

        <div className="space-y-10 relative z-10 text-center">
          <div className="space-y-2">
            <p className="text-4xl font-black text-white uppercase tracking-tighter italic drop-shadow-2xl">{userName}</p>
            <div className="h-0.5 w-12 bg-yellow-500 mx-auto rounded-full" />
            <p className="text-[11px] font-bold text-gray-400 uppercase tracking-[0.2em] pt-2">Operação 100% Autônoma</p>
          </div>

          <p className="text-sm text-gray-300 font-medium leading-relaxed italic px-2 opacity-90 border-l-2 border-yellow-500/30 py-1 ml-4 text-left">
            "Você deixou de ser o gargalo para se tornar o arquiteto. O sistema agora trabalha para você, não o contrário."
          </p>

          <div className="pt-4 space-y-4">
            <button
              onClick={handleConsultancy}
              className="w-full py-6 bg-yellow-500 hover:bg-yellow-400 text-black rounded-[24px] font-black uppercase tracking-[0.1em] text-sm flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(234,179,8,0.3)] active:scale-95 transition-all group"
            >
              <Sparkles size={20} />
              MIGRAR PARA O MUNDO REAL
              <ArrowRight size={18} strokeWidth={3} />
            </button>

            <button
              onClick={onReset}
              className="w-full py-4 bg-white/5 border border-white/10 rounded-[20px] text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:bg-magenta/10 hover:border-magenta/30 hover:text-magenta transition-all"
            >
              REINICIAR PARA NOVA ESCALA
            </button>

            <div className="flex flex-col items-center gap-1 opacity-40">
              <p className="text-[8px] font-mono uppercase tracking-[0.3em] font-bold text-white">
                Diagnóstico Estratégico Real
              </p>
              <Zap size={10} className="text-yellow-500" />
            </div>
          </div>
        </div>

        {/* Scanline Effect Subtle */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(234,179,8,0.02)_50%)] bg-[length:100%_8px] opacity-30" />
      </div>
    </div>
  );
};

export default SingularityCertificate;
