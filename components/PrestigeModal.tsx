
import React from 'react';
import { Sparkles, TrendingUp, X, ArrowRight, Zap, Award } from 'lucide-react';

interface PrestigeModalProps {
  userName: string;
  valuation: number;
  prestigeLevel: number;
  onClose: () => void;
  onPrestige: () => void;
}

const PrestigeModal: React.FC<PrestigeModalProps> = ({ userName, valuation, prestigeLevel, onClose, onPrestige }) => {
  const prestigeMultiplier = 1 + (prestigeLevel * 0.1); // 10% por nível
  const nextMultiplier = 1 + ((prestigeLevel + 1) * 0.1);

  return (
    <div className="fixed inset-0 z-[500] flex items-center justify-center p-6 animate-in fade-in duration-700">
      <div
        className="absolute inset-0 bg-black/95 backdrop-blur-2xl pointer-events-auto"
        onClick={onClose}
      />

      <div className="relative w-full max-w-sm bg-[#0d0714]/95 backdrop-blur-3xl border border-cyan-500/30 rounded-[40px] p-10 shadow-[0_0_80px_rgba(6,182,212,0.15)] overflow-hidden animate-in zoom-in-95 duration-500">
        {/* Background Glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-cyan-500/10 blur-[100px] rounded-full" />
        <div className="absolute -bottom-24 -right-24 w-64 h-64 bg-magenta/10 blur-[100px] rounded-full" />

        <header className="text-center mb-8 relative z-10">
          <div className="inline-flex p-4 bg-cyan-500/10 rounded-3xl border border-cyan-500/20 mb-6">
            <Sparkles className="text-cyan-500" size={32} />
          </div>
          <h2 className="text-[10px] font-black text-cyan-500 uppercase tracking-[0.4em] mb-2 opacity-80">Sistema de Prestígio</h2>
          <h3 className="text-3xl font-black text-white uppercase italic tracking-tight">Nova Escala</h3>
        </header>

        <div className="space-y-6 relative z-10">
          <div className="bg-white/5 p-6 rounded-[28px] border border-white/5">
            <p className="text-sm text-gray-300 font-medium leading-relaxed text-center mb-4">
              Você atingiu o limite máximo de crescimento. Reinicie sua operação e ganhe <span className="text-cyan-400 font-black">bônus permanentes</span> para sua próxima jornada.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-cyan-500/5 border border-cyan-500/10 rounded-xl">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Valuation Atual</span>
                <span className="text-lg font-black text-white font-mono">{valuation.toLocaleString()}</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-magenta/5 border border-magenta/10 rounded-xl">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Prestígio Atual</span>
                <span className="text-lg font-black text-magenta font-mono">+{((prestigeMultiplier - 1) * 100).toFixed(0)}%</span>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-500/5 border border-green-500/10 rounded-xl">
                <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wide">Próximo Bônus</span>
                <span className="text-lg font-black text-green-400 font-mono">+{((nextMultiplier - 1) * 100).toFixed(0)}%</span>
              </div>
            </div>
          </div>

          <div className="bg-yellow-500/5 p-4 rounded-[20px] border border-yellow-500/10">
            <div className="flex items-start gap-3">
              <Award className="text-yellow-500 mt-0.5" size={16} />
              <div>
                <p className="text-[10px] font-black text-yellow-500 uppercase tracking-wide mb-1">Bônus Permanentes</p>
                <ul className="text-[9px] text-gray-400 space-y-1">
                  <li>• +10% em ganhos de capital</li>
                  <li>• +10% em receita passiva por segundo</li>
                  <li>• Custo de agentes reduzido</li>
                  <li>• Progresso mais rápido</li>
                </ul>
              </div>
            </div>
          </div>

          <div className="pt-2 space-y-3">
            <button
              onClick={onPrestige}
              className="w-full py-6 bg-cyan-500 hover:bg-cyan-400 text-black rounded-[24px] font-black uppercase tracking-[0.1em] text-sm flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(6,182,212,0.3)] active:scale-95 transition-all group"
            >
              <Zap size={20} />
              ATIVAR PRESTÍGIO
              <ArrowRight size={18} strokeWidth={3} />
            </button>

            <button
              onClick={onClose}
              className="w-full py-4 bg-white/5 border border-white/10 rounded-[20px] text-[10px] font-black text-gray-400 uppercase tracking-[0.2em] hover:bg-white/10 hover:text-white transition-all"
            >
              CONTINUAR JOGANDO
            </button>
          </div>

          <p className="text-[8px] text-gray-500 text-center font-mono uppercase tracking-[0.3em] pt-2">
            Seu progresso será resetado, mas os bônus são permanentes
          </p>
        </div>

        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(transparent_50%,rgba(6,182,212,0.02)_50%)] bg-[length:100%_8px] opacity-30" />
      </div>
    </div>
  );
};

export default PrestigeModal;
