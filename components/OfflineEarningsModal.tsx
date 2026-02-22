
import React from 'react';
import { Clock, DollarSign, Terminal, X, ArrowRight } from 'lucide-react';
import { formatHours } from '../engine/gameLogic';

interface OfflineEarningsModalProps {
  pu: number;
  seconds: number;
  onClose: () => void;
}

const OfflineEarningsModal: React.FC<OfflineEarningsModalProps> = ({ pu, seconds, onClose }) => {
  return (
    <div id="modal-offline-earnings" className="fixed inset-0 z-[300] flex items-center justify-center p-6 animate-in fade-in duration-500">
      <div id="modal-offline-earnings-backdrop" className="absolute inset-0 bg-black/90 backdrop-blur-xl pointer-events-auto" onClick={onClose} />
      <div className="relative w-full max-w-sm bg-[#0d0714] border border-magenta/30 rounded-[32px] p-8 shadow-[0_0_80px_rgba(255,0,255,0.2)]">
        <header className="flex justify-between items-start mb-8">
          <div className="flex items-center gap-3">
            <div className="p-3 bg-magenta/10 rounded-2xl border border-magenta/20"><Terminal className="text-magenta" size={24} /></div>
            <div>
              <h2 className="text-[10px] font-black text-magenta uppercase tracking-[0.2em] mb-1">Relatório de Ausência</h2>
              <h3 className="text-xl font-black text-white uppercase italic tracking-tighter">Receita Gerada</h3>
            </div>
          </div>
          <button id="modal-offline-earnings-close" onClick={onClose} className="p-2 text-gray-600 hover:text-white"><X size={20} /></button>
        </header>
        <div className="space-y-6 relative z-10">
          <p className="text-sm text-gray-400 font-medium leading-relaxed italic opacity-80">"Seus agentes nunca dormem. A escala continua enquanto você descansa."</p>
          <div className="bg-magenta/5 p-6 rounded-[24px] border border-magenta/20 flex flex-col items-center gap-2 text-center">
            <div className="flex items-center gap-2 mb-1">
              <DollarSign className="text-magenta" size={20} strokeWidth={3} />
              <span className="text-xs font-black text-magenta uppercase tracking-widest">Capital Acumulado</span>
            </div>
            <p className="text-4xl font-black text-white font-mono tracking-tighter">+ $ {Math.floor(pu).toLocaleString()}</p>
          </div>
          <button onClick={onClose} className="w-full py-5 bg-magenta text-white rounded-[22px] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-xl active:scale-95 transition-all">
            Voltar ao Dashboard
            <ArrowRight size={16} strokeWidth={3} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default OfflineEarningsModal;
