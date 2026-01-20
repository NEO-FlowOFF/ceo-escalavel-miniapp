
import React, { useState, useMemo, useRef } from 'react';
import { ManualAction, GameState } from '../types';
import { isActionAutomated, formatHours, calculateManualGain, calculateValuation } from '../engine/gameLogic';
import { CheckCircle2, Clock, RefreshCcw, TrendingUp, ShieldCheck, Share2, Sparkles } from 'lucide-react';
import NeoTerminal from './NeoTerminal';
import telegram from '../utils/telegramUtils';
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

      <NeoTerminal gameState={gameState} soundEnabled={soundEnabled} />

      <div className="grid grid-cols-2 gap-3">
        <div className="bg-white/5 ios-blur border border-white/5 p-4 rounded-[24px] shadow-lg flex flex-col justify-between h-28 transition-all">
          <div className="flex items-center gap-2 opacity-60">
            <TrendingUp size={12} className="text-magenta" />
            <span className="text-[9px] font-black uppercase tracking-widest">Nível de Maturidade</span>
          </div>
          <p className="text-[13px] font-black text-white uppercase leading-tight truncate">{meta.status}</p>
          <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-magenta transition-all duration-500" style={{ width: `${progress}%` }} />
          </div>
        </div>

        <div className="ios-blur border p-4 rounded-[24px] shadow-lg flex flex-col justify-between h-28 relative overflow-hidden group transition-all active:scale-95 cursor-pointer" style={{ borderColor: `${POLYGON_PURPLE}25`, backgroundColor: `${POLYGON_PURPLE}10` }} onClick={() => onWithdrawAttempt?.()}>
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

      <div className="bg-white/5 border border-white/5 p-4 rounded-[24px] flex justify-between items-center shadow-lg">
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
        <div className="flex gap-2">
          <button
            onClick={() => {
              const valuation = calculateValuation(gameState).toFixed(0);
              const text = `Alcancei $${valuation}M de valuation no Agent Flow! 🚀\n\nPare de ser o gargalo da sua empresa.\n\n$NEOFLW\n\nhttps://t.me/AgenteFlow_Bot`;
              const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
              window.open(twitterUrl, '_blank');
            }}
            className="flex-1 bg-white/5 border border-white/5 p-3 rounded-[22px] flex items-center justify-center gap-2 active:scale-95 transition-all group hover:border-cyan-500/50"
          >
            <svg className="w-4 h-4 text-cyan-400 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Postar no X</span>
          </button>

          <button
            onClick={() => {
              const valuation = calculateValuation(gameState).toFixed(0);
              const text = `Alcancei $${valuation}M de valuation no Agent Flow! 🚀\n\nPare de ser o gargalo da sua empresa.\n\n$NEOFLW\n\nhttps://t.me/AgenteFlow_Bot`;
              const farcasterUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}`;
              window.open(farcasterUrl, '_blank');
            }}
            className="flex-1 bg-white/5 border border-white/5 p-3 rounded-[22px] flex items-center justify-center gap-2 active:scale-95 transition-all group hover:border-purple-500/50"
          >
            <svg className="w-4 h-4 text-purple-400 group-hover:animate-bounce" viewBox="0 0 24 24" fill="currentColor">
              <path d="M23.2 12c0-1.5-.6-2.9-1.7-4L18 4.5c-.8-.8-1.8-1.2-2.9-1.2H8.9c-1.1 0-2.1.4-2.9 1.2L2.5 8C1.4 9.1.8 10.5.8 12s.6 2.9 1.7 4L6 19.5c.8.8 1.8 1.2 2.9 1.2h6.2c1.1 0 2.1-.4 2.9-1.2l3.5-3.5c1.1-1.1 1.7-2.5 1.7-4zm-11.2 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
            </svg>
            <span className="text-[10px] font-black text-white uppercase tracking-widest">Fazer Cast</span>
          </button>
        </div>

        {meta.is_crashed && (
          <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-[#0a050f]/90 backdrop-blur-xl rounded-[22px] border border-red-500/50 p-6 text-center animate-in fade-in zoom-in duration-300 shadow-[0_0_50px_rgba(255,0,0,0.2)]">
            <RefreshCcw size={32} className="text-red-500 animate-spin mb-3 shadow-[0_0_15px_rgba(255,0,0,0.5)]" />
            <h4 className="text-lg font-black text-red-500 uppercase italic tracking-tighter mb-1 red-glow">COLAPSO OPERACIONAL</h4>
            <p className="text-[10px] text-red-500/70 font-bold uppercase tracking-widest mb-6">Reiniciando Processos... {crashTimeRemaining}s</p>

            <div className="w-full space-y-2">
              <button
                onClick={() => {
                  const text = `Minha operação colapsou por excesso de stress! 🚨\n\nPreciso de mais agentes no Agent Flow.\n\n$NEOFLW\n\nhttps://t.me/AgenteFlow_Bot`;
                  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
                  window.open(twitterUrl, '_blank');
                  onSocialReset();
                }}
                className="w-full bg-cyan-600 hover:bg-cyan-500 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(6,182,212,0.4)] active:scale-95 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                RESETAR COM POST NO X
              </button>

              <button
                onClick={() => {
                  const text = `Minha operação colapsou por excesso de stress! 🚨\n\nPreciso de mais agentes no Agent Flow.\n\n$NEOFLW\n\nhttps://t.me/AgenteFlow_Bot`;
                  const farcasterUrl = `https://warpcast.com/~/compose?text=${encodeURIComponent(text)}`;
                  window.open(farcasterUrl, '_blank');
                  onSocialReset();
                }}
                className="w-full bg-purple-600 hover:bg-purple-500 text-white py-3 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(168,85,247,0.4)] active:scale-95 transition-all"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.2 12c0-1.5-.6-2.9-1.7-4L18 4.5c-.8-.8-1.8-1.2-2.9-1.2H8.9c-1.1 0-2.1.4-2.9 1.2L2.5 8C1.4 9.1.8 10.5.8 12s.6 2.9 1.7 4L6 19.5c.8.8 1.8 1.2 2.9 1.2h6.2c1.1 0 2.1-.4 2.9-1.2l3.5-3.5c1.1-1.1 1.7-2.5 1.7-4zm-11.2 5c-2.8 0-5-2.2-5-5s2.2-5 5-5 5 2.2 5 5-2.2 5-5 5z" />
                </svg>
                RESETAR COM CAST
              </button>
            </div>
          </div>
        )}

        <div className={`grid grid-cols-1 gap-3.5 transition-opacity duration-300 ${meta.is_crashed ? 'opacity-20 pointer-events-none' : ''}`}>
          {manualActions.map(action => {
            const automated = isActionAutomated(action.id, inventory, agents);
            const currentManualGain = calculateManualGain(action, meta.capital_total_gerado);
            return (
              <button
                key={action.id}
                disabled={automated || meta.is_crashed}
                onClick={(e) => handleInteraction(e, action)}
                className={`group relative flex items-center justify-between p-5 rounded-[22px] transition-all duration-300 active:scale-[0.96] border
                  ${automated
                    ? 'bg-black/20 border-white/5 opacity-30'
                    : 'bg-magenta/[0.03] border-magenta/15 hover:border-magenta/30 shadow-[0_0_15px_rgba(255,0,255,0.02)] animate-pulse-subtle'
                  }`}
              >
                {!automated && (
                  <div className="absolute -inset-0.5 bg-magenta/20 rounded-[22px] blur opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                )}

                <div className="flex flex-col items-start text-left relative z-10">
                  <span className={`text-base font-bold tracking-tight ${automated ? 'text-gray-600' : 'text-white'}`}>{action.label}</span>
                  {!automated && (
                    <div className="flex gap-2.5 mt-1.5">
                      <div className="flex items-center gap-1 bg-magenta/10 px-2 py-0.5 rounded-lg border border-magenta/20">
                        <span className="text-[9px] font-black text-magenta uppercase tracking-tighter cursor-default">AÇÃO MANUAL</span>
                        <div className="w-1 h-1 rounded-full bg-magenta animate-ping" />
                      </div>
                      <div className="flex items-center gap-1 bg-white/5 px-2 py-0.5 rounded-lg">
                        <span className="text-[9px] font-bold text-gray-400">+$ {currentManualGain}</span>
                      </div>
                    </div>
                  )}
                </div>

                {automated ? (
                  <div className="flex items-center gap-1.5 text-green-500 bg-green-500/10 px-3 py-1.5 rounded-full border border-green-500/20 relative z-10 font-black italic">
                    <CheckCircle2 size={14} strokeWidth={3} />
                    <span className="text-[9px] uppercase tracking-tight">AUTO</span>
                  </div>
                ) : (
                  <div className="w-10 h-10 rounded-2xl bg-magenta/20 border border-magenta/40 flex items-center justify-center text-magenta group-active:bg-magenta group-active:text-white transition-all relative z-10 shadow-[0_0_15px_rgba(255,0,255,0.2)]">
                    <span className="text-xl font-light leading-none">+</span>
                  </div>
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
