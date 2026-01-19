
import React, { useState, useEffect, useCallback } from 'react';
import { Terminal, ArrowRight, ShieldAlert, Cpu, FastForward, CheckCircle2 } from 'lucide-react';
import { playTyping, playNotification } from '../engine/soundEffects';

interface IntroOverlayProps {
  onComplete: () => void;
}

const INTRO_SCRIPT = [
  { text: "> INICIANDO PROTOCOLO Agente Flow v2.5...", type: 'system' },
  { text: "> ESCANEANDO SISTEMA ATUAL... ERRO: DEPENDÊNCIA HUMANA DETECTADA.", type: 'error' },
  { text: "> INSTRUÇÃO 1: Na Dashboard, clique nos BOTÕES DE AÇÃO para gerar capital.", type: 'instruction' },
  { text: "> INSTRUÇÃO 2: Use a aba AGENTES para automatizar e evitar o Colapso (Burnout).", type: 'instruction' }
];

const LEGAL_NOTICE = "> AVISO LEGAL: Esta é uma simulação de mercado. O $NEOFLW exibido é uma projeção de valuation baseada em performance.";

const IntroOverlay: React.FC<IntroOverlayProps> = ({ onComplete }) => {
  const [currentLineIdx, setCurrentLineIdx] = useState(0);
  const [displayedLines, setDisplayedLines] = useState<string[]>([]);
  const [currentCharIdx, setCurrentCharIdx] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isFastForward, setIsFastForward] = useState(false);
  const [isInitialActive, setIsInitialActive] = useState(true);

  // Remove o pulso inicial após 2 segundos de imersão
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialActive(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const completeAll = useCallback(() => {
    setDisplayedLines(INTRO_SCRIPT.map(s => s.text));
    setCurrentLineIdx(INTRO_SCRIPT.length);
    setIsFinished(true);
  }, []);

  useEffect(() => {
    if (currentLineIdx < INTRO_SCRIPT.length) {
      const currentLine = INTRO_SCRIPT[currentLineIdx].text;

      if (currentCharIdx < currentLine.length) {
        const timeout = setTimeout(() => {
          const newDisplayedLines = [...displayedLines];
          if (!newDisplayedLines[currentLineIdx]) {
            newDisplayedLines[currentLineIdx] = "";
          }
          newDisplayedLines[currentLineIdx] += currentLine[currentCharIdx];
          setDisplayedLines(newDisplayedLines);
          setCurrentCharIdx(currentCharIdx + 1);

          if (currentCharIdx % 3 === 0) playTyping();
        }, isFastForward ? 5 : 30);
        return () => clearTimeout(timeout);
      } else {
        let pauseDuration = isFastForward ? 50 : 400;
        if (currentLineIdx === 0) pauseDuration = isFastForward ? 100 : 1200;
        if (currentLineIdx === 1) pauseDuration = isFastForward ? 200 : 2500;

        const timeout = setTimeout(() => {
          setCurrentLineIdx(currentLineIdx + 1);
          setCurrentCharIdx(0);
        }, pauseDuration);
        return () => clearTimeout(timeout);
      }
    } else {
      setIsFinished(true);
    }
  }, [currentLineIdx, currentCharIdx, displayedLines, isFastForward]);

  const handleStart = () => {
    playNotification();
    setIsExiting(true);
    setTimeout(() => {
      onComplete();
    }, 800);
  };

  return (
    <div
      className={`fixed inset-0 z-[500] bg-black flex flex-col items-center justify-center p-8 transition-all duration-700 ease-in-out ${isExiting ? 'opacity-0 scale-110 pointer-events-none' : 'opacity-100 scale-100'}`}
      onClick={() => !isFinished && setIsFastForward(true)}
    >
      {/* Efeito de Scanline e Flicker CRT */}
      <div className="absolute inset-0 pointer-events-none z-[510] opacity-[0.03] bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.06),rgba(0,255,0,0.02),rgba(0,0,255,0.06))] bg-[length:100%_4px,3px_100%]" />

      {/* Camada de Cor Pink (Magenta) - Agora só pulsa na entrada (isInitialActive) e na saída (isExiting) */}
      <div className={`absolute inset-0 pointer-events-none z-[511] opacity-[0.02] bg-magenta transition-opacity duration-1000 ${isInitialActive || isExiting ? 'animate-pulse opacity-[0.04]' : 'opacity-[0.01]'}`} />

      {/* Noise Visual nos Cantos */}
      <div className="absolute top-4 left-4 font-mono text-[8px] text-magenta/20 select-none">
        ADDR: 0x59aa4EaE743d6...<br />
        MEM_LOAD: 88.4%
      </div>
      <div className="absolute top-4 right-4 font-mono text-[8px] text-magenta/20 text-right select-none">
        LATENCY: 12ms<br />
        ENCRYPTION: AES-256
      </div>

      <div className="w-full max-w-md flex-1 flex flex-col justify-center font-mono relative z-20">
        <div className="mb-10 flex items-center gap-3">
          <div className="w-12 h-12 bg-magenta/10 border border-magenta/30 rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(255,0,255,0.2)]">
            <Terminal className="text-magenta" size={24} />
          </div>
          <div className="h-px flex-1 bg-gradient-to-r from-magenta/50 to-transparent" />
          {!isFinished && (
            <button
              onClick={(e) => { e.stopPropagation(); completeAll(); }}
              className="flex items-center gap-1 text-[9px] font-black text-white/30 hover:text-magenta uppercase tracking-widest transition-colors"
            >
              Skip <FastForward size={10} />
            </button>
          )}
        </div>

        <div className="space-y-5 min-h-[220px]">
          {displayedLines.map((line, idx) => {
            const config = INTRO_SCRIPT[idx];
            return (
              <div key={idx} className="flex gap-3 items-start">
                <span className="text-magenta/40 mt-1 shrink-0">{'>'}</span>
                <p className={`text-sm md:text-base leading-relaxed tracking-tight font-medium ${config.type === 'error' ? 'text-magenta font-black text-glow' :
                    config.type === 'instruction' ? 'text-cyan-400/90' :
                      'text-gray-300'
                  }`}>
                  {line}
                  {config.type === 'instruction' && idx < currentLineIdx && (
                    <CheckCircle2 size={12} className="inline ml-2 text-cyan-400 animate-pulse" />
                  )}
                  {idx === currentLineIdx && !isFinished && (
                    <span className="inline-block w-2 h-4 bg-magenta ml-1 animate-pulse" />
                  )}
                </p>
              </div>
            );
          })}
        </div>

        <div className={`mt-10 transition-all duration-1000 ${isFinished ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <div className="relative group mb-8">
            <div className="absolute -inset-1 bg-magenta/40 rounded-[24px] blur-xl group-hover:bg-magenta/60 transition-all duration-500 animate-pulse" />

            <button
              onClick={(e) => { e.stopPropagation(); handleStart(); }}
              className="w-full relative py-6 px-4 bg-black/40 backdrop-blur-xl border border-magenta/50 rounded-[22px] overflow-hidden transition-all active:scale-[0.97] group"
            >
              <div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity bg-[conic-gradient(from_0deg_at_50%_50%,#ff00ff_0%,#000_25%,#ff00ff_50%,#000_75%,#ff00ff_100%)] animate-[spin_4s_linear_infinite]" />
              <div className="absolute inset-y-0 left-0 w-1 bg-white/40 shadow-[0_0_15px_#fff] -translate-x-full animate-[scan_3s_linear_infinite] z-20" />

              <div className="relative flex flex-col items-center gap-2 z-10">
                <div className="flex items-center gap-4 text-white font-black uppercase tracking-[0.3em] text-xs md:text-sm">
                  <Cpu size={18} className="text-magenta animate-pulse" />
                  CONECTAR COM NEØFLW
                  <ArrowRight size={18} strokeWidth={3} className="text-magenta group-hover:translate-x-2 transition-transform duration-300" />
                </div>

                <div className="flex items-center gap-2">
                  <div className="h-0.5 w-8 bg-magenta/30 rounded-full" />
                  <span className="text-[8px] font-bold text-magenta/60 uppercase tracking-widest">Acesso Autorizado</span>
                  <div className="h-0.5 w-8 bg-magenta/30 rounded-full" />
                </div>
              </div>
            </button>
          </div>

          <p className="text-[9px] md:text-[10px] text-gray-500 italic leading-relaxed text-center px-4 mb-8 font-mono opacity-60">
            {LEGAL_NOTICE}
          </p>

          <div className="flex items-center justify-center gap-2 opacity-30 text-[10px] text-gray-500 uppercase tracking-widest font-bold">
            <ShieldAlert size={12} />
            END-TO-END ENCRYPTION // SECURED BY FLOWOFF
          </div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes scan {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(400%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}} />

      <div className="absolute inset-0 pointer-events-none opacity-5">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_center,_var(--magenta)_0%,_transparent_70%)]" />
        <div className="w-full h-full" style={{ backgroundImage: 'linear-gradient(#ff00ff 1px, transparent 1px), linear-gradient(90deg, #ff00ff 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
      </div>
    </div>
  );
};

export default IntroOverlay;
