
import React, { useState, useRef, useCallback } from 'react';
import { Brain, Volume2, VolumeX, X, AlertCircle, TrendingUp, DollarSign, Target, Info } from 'lucide-react';
import { TOKEN_TICKER } from '../constants';

interface TopBarProps {
  pu: number;
  pps: number;
  stress: number;
  soundEnabled: boolean;
  onToggleSound: () => void;
  totalPuGenerated?: number;
  onWithdrawAttempt?: () => void;
}

type MetricType = 'capital' | 'pps' | 'burnout';

const TopBar: React.FC<TopBarProps> = ({ pu, pps, stress, soundEnabled, onToggleSound, totalPuGenerated = 0 }) => {
  const [activeMetric, setActiveMetric] = useState<MetricType | null>(null);
  const [pressingMetric, setPressingMetric] = useState<MetricType | null>(null);
  const timerRef = useRef<number | null>(null);

  const isStressed = stress > 70;
  const isCritical = stress > 85;

  const handleStart = (type: MetricType) => {
    setPressingMetric(type);
    timerRef.current = window.setTimeout(() => {
      setActiveMetric(type);
      setPressingMetric(null);
      if (window.navigator && window.navigator.vibrate) {
        window.navigator.vibrate(20);
      }
    }, 500); // 500ms for long press
  };

  const handleEnd = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
    setPressingMetric(null);
  };

  const renderMetricModal = () => {
    if (!activeMetric) return null;

    const content = {
      capital: {
        title: "Liquidez Operacional",
        icon: <DollarSign className="text-magenta" size={24} />,
        desc: "O Capital é o seu combustível de escala. Representa o caixa disponível para reinvestimento imediato em novos Agentes e Infraestrutura.",
        impact: "Sem capital, sua empresa estagna. Agentes geram capital passivo, liberando você da necessidade de 'vender horas'."
      },
      pps: {
        title: "Taxa de Receita (PPS)",
        icon: <TrendingUp className="text-cyan-400" size={24} />,
        desc: "Passive Profit per Second. É a métrica de autonomia da sua empresa.",
        impact: "Quanto maior o seu PPS, mais rápido seu Valuation cresce sem esforço manual. É a prova real de que o sistema está trabalhando para você."
      },
      burnout: {
        title: "Índice de Burnout",
        icon: <Brain className="text-orange-500" size={24} />,
        desc: "Métrica biológica de stress. Ações manuais aumentam o cortisol e aproximam o sistema do colapso.",
        impact: "Atingir 100% causa um 'Crash Operacional'. Automações (Agentes) reduzem o stress passivamente e eliminam a necessidade de cliques geradores de burnout."
      }
    }[activeMetric];

    return (
      <div className="fixed inset-0 z-[200] flex items-center justify-center p-6 pointer-events-none">
        <div
          className="absolute inset-0 bg-black/80 backdrop-blur-md pointer-events-auto animate-in fade-in duration-300"
          onClick={() => setActiveMetric(null)}
        />
        <div className="relative w-full max-w-xs bg-[#130b1a] border border-white/10 rounded-[32px] p-7 pointer-events-auto animate-in zoom-in-95 duration-300 shadow-[0_32px_64px_rgba(0,0,0,0.8)] overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-magenta/20">
            <div className="h-full bg-magenta animate-progress" style={{ width: '100%' }} />
          </div>

          <div className="flex justify-between items-center mb-6">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-white/5 rounded-xl border border-white/10">
                {content.icon}
              </div>
              <h3 className="text-sm font-black text-white uppercase tracking-wider">{content.title}</h3>
            </div>
            <button onClick={() => setActiveMetric(null)} className="p-1.5 bg-white/5 rounded-full text-gray-500 active:scale-90"><X size={18} /></button>
          </div>

          <div className="space-y-5">
            <p className="text-sm text-gray-300 leading-relaxed font-medium">
              {content.desc}
            </p>
            <div className="p-4 bg-white/5 rounded-2xl border border-white/5 italic">
               <p className="text-[11px] text-gray-400 leading-relaxed">
                 <span className="text-magenta font-black uppercase tracking-widest block mb-1 text-[9px] not-italic">Impacto no ROI:</span>
                 {content.impact}
               </p>
            </div>
          </div>

          <button onClick={() => setActiveMetric(null)} className="w-full mt-8 py-4 bg-white/5 border border-white/10 rounded-2xl text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">FECHAR AUDITORIA</button>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className={`sticky top-0 z-[60] ios-blur border-b pt-[calc(10px+env(safe-area-inset-top))] pb-3 px-5 flex items-end justify-between gap-2 transition-all duration-300 ${
        isCritical
        ? 'bg-red-950/40 border-red-500 shadow-[0_0_40px_rgba(255,0,0,0.3)]'
        : isStressed
        ? 'bg-red-900/10 border-red-600/50'
        : 'bg-[#0a050f]/60 border-[#ffffff10]'
      }`}>

        {/* Metric 1: CAPITAL */}
        <div
          className={`flex flex-col items-start flex-1 cursor-pointer select-none transition-all duration-200 ${pressingMetric === 'capital' ? 'scale-90 brightness-150' : ''}`}
          onTouchStart={() => handleStart('capital')}
          onTouchEnd={handleEnd}
          onMouseDown={() => handleStart('capital')}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          <div className="flex items-center gap-1 text-magenta mb-0.5 opacity-90">
            <DollarSign size={10} strokeWidth={3} />
            <span className="text-[8px] font-black uppercase tracking-widest">Capital</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-base font-extrabold tracking-tight">${Math.floor(pu).toLocaleString()}</span>
            {pressingMetric === 'capital' && <Info size={10} className="text-magenta animate-pulse" />}
          </div>
        </div>

        {/* Metric 2: PPS (Receita/s) */}
        <div
          className={`flex flex-col items-center flex-1 cursor-pointer select-none transition-all duration-200 ${pressingMetric === 'pps' ? 'scale-90 brightness-150' : ''}`}
          onTouchStart={() => handleStart('pps')}
          onTouchEnd={handleEnd}
          onMouseDown={() => handleStart('pps')}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          <div className="flex items-center gap-1 text-cyan-400 mb-0.5 opacity-90">
            <TrendingUp size={10} strokeWidth={3} />
            <span className="text-[8px] font-black uppercase tracking-widest">Profit/s</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-base font-extrabold tracking-tight text-white/90">
              ${pps.toFixed(1)}
            </span>
            {pressingMetric === 'pps' && <Info size={10} className="text-cyan-400 animate-pulse" />}
          </div>
        </div>

        {/* Metric 3: BURNOUT (Stress) */}
        <div
          className={`flex flex-col items-end flex-1 cursor-pointer select-none transition-all duration-200 ${pressingMetric === 'burnout' ? 'scale-90 brightness-150' : ''}`}
          onTouchStart={() => handleStart('burnout')}
          onTouchEnd={handleEnd}
          onMouseDown={() => handleStart('burnout')}
          onMouseUp={handleEnd}
          onMouseLeave={handleEnd}
        >
          <div className={`flex items-center gap-1.5 mb-0.5 transition-colors duration-300 ${isStressed ? 'text-red-500 animate-pulse' : 'text-orange-500'} opacity-90`}>
            {isCritical ? <AlertCircle size={10} className="animate-pulse" /> : <Brain size={10} className={isStressed ? 'animate-bounce' : ''} />}
            <span className={`text-[8px] font-black uppercase tracking-widest ${isStressed ? 'red-glow' : ''}`}>
              Burnout
            </span>
          </div>
          <div className="flex items-center gap-2">
            {pressingMetric === 'burnout' && <Info size={10} className="text-orange-500 animate-pulse" />}
            <div className={`w-16 h-1.5 bg-gray-900 rounded-full overflow-hidden relative shadow-inner border border-white/5 transition-colors ${isStressed ? 'border-red-500/40 shadow-[0_0_10px_rgba(255,0,0,0.2)]' : ''}`}>
              <div
                className={`h-full transition-all duration-700 ${
                  stress > 80
                  ? 'bg-red-500'
                  : stress > 70
                  ? 'bg-red-600'
                  : 'bg-orange-500'
                } ${isStressed ? 'pulse-critical' : ''}`}
                style={{ width: `${Math.min(100, stress)}%` }}
              />
            </div>
          </div>
        </div>

        <button
          onClick={onToggleSound}
          className={`ml-1 p-2 bg-white/5 rounded-full transition-all active:scale-90 ${isStressed ? 'text-red-500 border border-red-500/20' : 'text-gray-500'}`}
        >
          {soundEnabled ? <Volume2 size={14} /> : <VolumeX size={14} />}
        </button>
      </div>

      {renderMetricModal()}
    </>
  );
};

export default TopBar;
