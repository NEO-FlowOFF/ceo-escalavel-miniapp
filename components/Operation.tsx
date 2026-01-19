
import React, { useState, useMemo, useRef } from 'react';
import { ManualAction, GameState } from '../types';
import { isActionAutomated, formatHours, calculateManualGain, calculateValuation } from '../engine/gameLogic';
import { CheckCircle2, Clock, RefreshCcw, TrendingUp, ShieldCheck, Share2, Sparkles } from 'lucide-react';
import NeoTerminal from './NeoTerminal';
import { STATUS_MILESTONES, TOKEN_TICKER, POLYGON_PURPLE } from '../constants';

interface OperationProps {
  gameState: GameState;
  onAction: (action: ManualAction) => void;
  onWithdrawAttempt?: () => void;
  soundEnabled: boolean;
  onSocialReset?: () => void;
}

interface Particle {
  id: number;
  x: number;
  y: number;
  text: string;
  color: string;
}

const LOGO_URL = "/icon-512.webp";

const Operation: React.FC<OperationProps> = ({ gameState, onAction, onWithdrawAttempt, soundEnabled, onSocialReset }) => {
  const { manualActions, inventory, agents, resources, meta } = gameState;
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastParticleTime = useRef(0);

  const tokenEarned = calculateValuation(gameState).toFixed(2);

  const { progress } = useMemo(() => {
    const valuation = calculateValuation(gameState);
    const currentIdx = [...STATUS_MILESTONES].reverse().find(m => valuation >= m.pu);
    const actualIdx = STATUS_MILESTONES.findIndex(m => m.pu === currentIdx?.pu) || 0;
    const currentMilestone = STATUS_MILESTONES[actualIdx];
    const nextMilestone = STATUS_MILESTONES[actualIdx + 1];
    if (!nextMilestone) return { progress: 100 };
    const range = nextMilestone.pu - currentMilestone.pu;
    const currentProgress = valuation - currentMilestone.pu;
    return { progress: Math.min(100, (currentProgress / range) * 100) };
  }, [gameState]);

  const handleInteraction = (e: React.MouseEvent | React.TouchEvent, action: ManualAction) => {
    if (meta.is_crashed) return;
    if (isActionAutomated(action.id, inventory, agents)) return;

    let clientX = 0, clientY = 0;
    if ('touches' in e) {
      if (e.touches && e.touches.length > 0) {
        clientX = e.touches[0].clientX;
        clientY = e.touches[0].clientY;
      } else return;
    } else {
      clientX = (e as React.MouseEvent).clientX;
      clientY = (e as React.MouseEvent).clientY;
    }

    onAction(action);

    // Performance: Limitar criação de partículas a cada 50ms
    const now = Date.now();
    if (now - lastParticleTime.current > 50) {
      const scaledGain = calculateManualGain(action, meta.capital_total_gerado);
      const timestamp = now;
      const newParticles: Particle[] = [
        { id: timestamp, x: clientX - 20, y: clientY - 20, text: `+$${scaledGain}`, color: 'text-magenta' }
      ];
      setParticles(prev => [...prev.slice(-10), ...newParticles]); // Manter apenas as últimas 10 no estado
      setTimeout(() => setParticles(prev => prev.filter(p => p.id !== timestamp)), 800);
      lastParticleTime.current = now;
    }
  };

  const crashTimeRemaining = Math.max(0, Math.ceil((meta.crash_end_time - Date.now()) / 1000));

  return (
    <div className="space-y-6 relative">
      <div className="fixed inset-0 pointer-events-none z-[200]">
        {particles.map(p => (
          <div key={p.id} className={`absolute font-mono font-black text-sm animate-float-up pointer-events-none whitespace-nowrap ${p.color}`} style={{ left: p.x, top: p.y }}>{p.text}</div>
        ))}
      </div>

      <header className="flex items-center justify-between px-1">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl overflow-hidden border border-magenta/20 shadow-lg shadow-magenta/5">
            <img src={LOGO_URL} alt="NEØ FlowOFF Logo" className="w-full h-full object-cover" />
          </div>
          <div>
            <h2 className="text-[9px] font-bold text-magenta uppercase tracking-[0.2em] opacity-80 leading-none mb-1">Nexus v2.5</h2>
            <h1 className="text-xl font-black text-white uppercase italic tracking-tighter">AGENTE FLOW CONSOLE</h1>
          </div>
        </div>
      </header>

      <NeoTerminal gameState={gameState} soundEnabled={soundEnabled} />

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 ios-blur border border-white/10 p-4 rounded-[24px] shadow-lg flex flex-col justify-between h-28 transition-all">
          <div className="flex items-center gap-2 opacity-60">
            <TrendingUp size={12} className="text-magenta" />
            <span className="text-[9px] font-black uppercase tracking-widest">Nível de Maturidade</span>
          </div>
          <p className="text-[13px] font-black text-white uppercase leading-tight truncate">{meta.status}</p>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-magenta transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="ios-blur border p-4 rounded-[24px] shadow-lg flex flex-col justify-between h-28 relative overflow-hidden group transition-all active:scale-95 cursor-pointer" style={{ borderColor: `${POLYGON_PURPLE}60`, backgroundColor: `${POLYGON_PURPLE}15` }} onClick={() => onWithdrawAttempt?.()}>
          <div className="flex items-center justify-between relative z-10">
            <div className="flex items-center gap-2" style={{ color: POLYGON_PURPLE }}>
              <Sparkles size={12} />
              <span className="text-[9px] font-black uppercase tracking-widest">Valuation</span>
            </div>
          </div>
          <div className="space-y-0.5 relative z-10">
            <p className="text-[26px] font-black text-white font-mono leading-none tracking-tighter drop-shadow-[0_0_15px_rgba(130,71,229,0.8)]">{tokenEarned}</p>
            <div className="flex items-center gap-1">
              <p className="text-[10px] font-black uppercase tracking-widest" style={{ color: POLYGON_PURPLE }}>{TOKEN_TICKER}</p>
              <ShieldCheck size={10} style={{ color: POLYGON_PURPLE }} className="opacity-60" />
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white/5 border border-white/10 p-4 rounded-[24px] flex justify-between items-center shadow-lg">
        <div className="flex-1 space-y-1">
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Tempo Devolvido p/ Dia</span>
          <div className="flex items-center gap-2 text-green-400 font-mono text-xl font-black leading-none">
            <Clock size={16} strokeWidth={3} />
            <span>{formatHours(resources.horas_manuais_eliminadas * 3600)}</span>
          </div>
        </div>
        <div className="text-right flex flex-col items-end">
          <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest">Receita/s</span>
          <span className="text-sm font-black text-white font-mono">${(resources.receita_passiva).toFixed(1)}/s</span>
        </div>
      </div>

      <div className="space-y-3 relative">
        {meta.is_crashed && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0a050f]/80 backdrop-blur-md rounded-[22px] border border-red-500/30 p-6 text-center animate-in fade-in duration-300">
            <RefreshCcw size={32} className="text-red-500 animate-spin mb-3" />
            <h4 className="text-lg font-black text-red-500 uppercase italic tracking-tighter mb-1">COLAPSO OPERACIONAL</h4>
            <p className="text-[10px] text-red-500/70 font-bold uppercase tracking-widest mb-6">Reiniciando Processos... {crashTimeRemaining}s</p>
            <button onClick={onSocialReset} className="w-full bg-red-500 text-white py-4 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-3 shadow-[0_10px_20_rgba(255,0,0,0.3)] active:scale-95 transition-all"><Share2 size={16} />RESETAR SISTEMA (Compartilhar)</button>
          </div>
        )}

        <div className={`grid grid-cols-1 gap-3.5 transition-opacity duration-300 ${meta.is_crashed ? 'opacity-20 pointer-events-none' : ''}`}>
          {manualActions.map(action => {
            const automated = isActionAutomated(action.id, inventory, agents);
            const currentManualGain = calculateManualGain(action, meta.capital_total_gerado);
            return (
              <button key={action.id} disabled={automated || meta.is_crashed} onClick={(e) => handleInteraction(e, action)} className={`group relative flex items-center justify-between p-5 rounded-[22px] border transition-all duration-300 active:scale-[0.96] ${automated ? 'bg-black/20 border-white/5 opacity-40' : 'bg-white/5 border-white/10 hover:border-magenta shadow-xl'}`}>
                <div className="flex flex-col items-start text-left">
                  <span className={`text-base font-bold tracking-tight ${automated ? 'text-gray-600' : 'text-white'}`}>{action.label}</span>
                  {!automated && (
                    <div className="flex gap-2.5 mt-1.5">
                      <div className="flex items-center gap-1 bg-magenta/10 px-2 py-0.5 rounded-lg">
                        <span className="text-[9px] font-bold text-magenta">+$ {currentManualGain}</span>
                      </div>
                      {currentManualGain > action.capital_gain && (
                        <div className="flex items-center gap-1 bg-green-500/10 px-2 py-0.5 rounded-lg border border-green-500/20">
                          <TrendingUp size={8} className="text-green-500" />
                          <span className="text-[8px] font-bold text-green-500">BÔNUS STATUS</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {automated ? (
                  <div className="flex items-center gap-1.5 text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20"><CheckCircle2 size={16} strokeWidth={3} /><span className="text-[10px] font-bold uppercase tracking-tight">AUTÔNOMO</span></div>
                ) : (
                  <div className="w-10 h-10 rounded-2xl bg-magenta/10 border border-magenta/20 flex items-center justify-center text-magenta group-active:bg-magenta group-active:text-white transition-all"><span className="text-xl font-light leading-none">+</span></div>
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Operation;
