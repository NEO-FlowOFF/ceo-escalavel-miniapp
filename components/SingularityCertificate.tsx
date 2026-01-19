
import React from 'react';
import { Award, Sparkles, X, ArrowRight, ExternalLink, ShieldCheck, Zap } from 'lucide-react';

interface SingularityCertificateProps {
  userName: string;
  onClose: () => void;
}

const SingularityCertificate: React.FC<SingularityCertificateProps> = ({ userName, onClose }) => {
  const handleConsultancy = () => {
    window.open('https://www.flowoff.xyz/solutions', '_blank');
  };

  return (
    <div className="fixed inset-0 z-[400] flex items-center justify-center p-6 animate-in fade-in duration-700">
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl pointer-events-auto"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm bg-[#0a050f] border-2 border-yellow-500/50 rounded-[40px] p-8 shadow-[0_0_100px_rgba(234,179,8,0.2)] overflow-hidden animate-in zoom-in-95 duration-500">
        {/* Animated Particles/Background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--magenta)_0%,_transparent_70%)] animate-pulse" />
          <div className="absolute top-0 left-0 w-full h-full" style={{ backgroundImage: 'linear-gradient(#ea0b0b 1px, transparent 1px), linear-gradient(90deg, #ea0b0b 1px, transparent 1px)', backgroundSize: '40px 40px', opacity: 0.1 }} />
        </div>

        <header className="flex justify-between items-start mb-10 relative z-10">
          <div className="flex items-center gap-4">
            <div className="p-4 bg-yellow-500/10 rounded-[24px] border border-yellow-500/20 shadow-[0_0_20px_rgba(234,179,8,0.2)]">
              <Award className="text-yellow-500" size={32} />
            </div>
            <div>
              <h2 className="text-[10px] font-black text-yellow-500 uppercase tracking-[0.3em] mb-1">Endgame Reached</h2>
              <h3 className="text-2xl font-black text-white uppercase italic tracking-tighter">Singularity Achieved</h3>
            </div>
          </div>
          <button onClick={onClose} className="p-2 text-gray-700 hover:text-white transition-colors">
            <X size={24} />
          </button>
        </header>

        <div className="space-y-8 relative z-10">
          <div className="space-y-4">
            <div className="p-6 bg-white/5 border border-white/10 rounded-[32px] text-center space-y-3 shadow-inner">
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">This is to certify that</span>
               <p className="text-2xl font-black text-white uppercase tracking-tight italic drop-shadow-lg">{userName}</p>
               <span className="text-[10px] font-bold text-gray-500 uppercase tracking-widest block">has reached</span>
               <p className="text-lg font-black text-yellow-500 uppercase tracking-[0.2em] animate-pulse">TOTAL AUTOMATION</p>
            </div>

            <p className="text-sm text-gray-400 font-medium leading-relaxed italic text-center px-4 opacity-80">
              "Você não é mais um funcionário da sua própria empresa. Você é o arquiteto de um sistema autônomo."
            </p>
          </div>

          <div className="grid grid-cols-1 gap-3">
             <div className="flex items-center gap-3 px-4 py-3 bg-green-500/10 rounded-2xl border border-green-500/20">
                <ShieldCheck className="text-green-500" size={18} />
                <span className="text-[10px] font-black text-green-500 uppercase tracking-widest leading-none">Cliques Manuais: ZERO</span>
             </div>
             <div className="flex items-center gap-3 px-4 py-3 bg-cyan-500/10 rounded-2xl border border-cyan-500/20">
                <Zap className="text-cyan-500" size={18} />
                <span className="text-[10px] font-black text-cyan-500 uppercase tracking-widest leading-none">Eficiência: ESCALÁVEL</span>
             </div>
          </div>

          <div className="pt-6 space-y-4">
            <button
              onClick={handleConsultancy}
              className="w-full py-6 bg-gradient-to-r from-yellow-500 to-yellow-600 text-[#0a050f] rounded-[24px] font-black uppercase tracking-[0.1em] text-xs flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(234,179,8,0.4)] active:scale-95 transition-all group"
            >
              <Sparkles size={20} className="group-hover:rotate-12 transition-transform" />
              MIGRAR PARA REALIDADE
              <ArrowRight size={18} strokeWidth={3} />
            </button>
            <p className="text-center text-[9px] text-gray-600 font-mono uppercase tracking-[0.3em]">
              Protocolo NEØ FlowOFF 0xREALITY // Agendar Consultoria
            </p>
          </div>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-10" />
      </div>
    </div>
  );
};

export default SingularityCertificate;
