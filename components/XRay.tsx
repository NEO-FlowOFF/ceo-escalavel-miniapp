
import React from 'react';
import { GameState } from '../types';
import { formatHours, calculateValuation } from '../engine/gameLogic';
import { ClipboardCheck, Lock, Wallet, ExternalLink, Coins, Sparkles } from 'lucide-react';
import { TOKEN_TICKER, TOKEN_CONTRACT, SCAN_LINK, POLYGON_PURPLE } from '../constants';
import { openExternalLink } from '../utils/navigation';

interface XRayProps {
  gameState: GameState;
  onCopySuccess: (msg: string) => void;
}

const LOGO_URL = "/icon-512.webp";

const XRay: React.FC<XRayProps> = ({ gameState, onCopySuccess }) => {
  const isUnlocked = gameState.meta.snapshot_unlocked;
  const userName = gameState.meta.user?.name || "Operador";
  const userHandle = gameState.meta.user?.username ? `@${gameState.meta.user.username}` : `#${gameState.meta.user?.id.toString().slice(-4) || 'XXXX'}`;

  const tokenEarned = calculateValuation(gameState).toFixed(2);

  const copyReport = async () => {
    const hoursStr = formatHours(gameState.resources.horas_manuais_eliminadas);
    const totalAgents = gameState.inventory.reduce((acc, item) => acc + item.quantity, 0);
    const status = gameState.meta.status;

    const report = `🚀 Diagnóstico de Escala: ${userName}\n⏳ Tempo Recuperado: ${hoursStr}/dia\n🤖 Frota Autônoma: ${totalAgents} agentes\n📈 Status Operacional: ${status}\n💎 Valuation: ${tokenEarned} ${TOKEN_TICKER}\n\nIA não é o futuro, é a margem de lucro do presente. @neomello @neoflwofficial #NEØFlowOFF #Scalability #ROI`;

    try {
      await navigator.clipboard.writeText(report);
      onCopySuccess("Dashboard Copiado!");
    } catch (err) { }
  };

  const shareToX = () => {
    const hoursStr = formatHours(gameState.resources.horas_manuais_eliminadas);
    const tokenValuation = calculateValuation(gameState).toFixed(0);
    const text = encodeURIComponent(`🚀 Escalei minha empresa para ${tokenValuation} $NEOFLW com frotas de IA autônomas.\n\n⏳ Recuperei ${hoursStr}/dia eliminando tarefas humanas.\n\nQuem não escala com agentes está pagando o imposto da ineficiência.\n\n@neomello @neoflwofficial #NEØFlowOFF #AI #SaaS`);
    openExternalLink(`https://x.com/intent/post?text=${text}`);
  };

  const shareToFarcaster = () => {
    const tokenValuation = calculateValuation(gameState).toFixed(0);
    const text = encodeURIComponent(`🚀 CEO Escalável: My company valuation reached ${tokenValuation} $NEOFLW using autonomous agent fleets.\n\nScaling with @neomello at @neoflwofficial. Protocol established. ⦿\n\n#NEØFlowOFF #Agents #Base`);
    openExternalLink(`https://warpcast.com/~/compose?text=${text}`);
  };

  if (!isUnlocked) {
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-center space-y-6 px-4">
        <div className="w-24 h-24 bg-[#130b1a] border-2 border-dashed border-[#1a1025] rounded-3xl flex items-center justify-center text-gray-700">
          <Lock size={40} className="opacity-20" />
        </div>
        <div className="space-y-2">
          <h2 className="text-xl font-black uppercase tracking-tight text-white">Raio-X de Valuation</h2>
          <p className="text-xs text-gray-500 max-w-[240px] mx-auto leading-relaxed">
            Diagnóstico bloqueado. Sua empresa precisa atingir <span className="text-magenta font-bold">250 {TOKEN_TICKER}</span> de Valuation para auditoria.
          </p>
        </div>
        <div className="w-full max-w-[200px] h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-magenta" style={{ width: `${Math.min(100, (calculateValuation(gameState) / 250) * 100)}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700 px-1 pb-24">
      <header className="space-y-1">
        <h2 className="text-xs font-mono text-magenta uppercase tracking-widest opacity-70">Auditoria de Escala</h2>
        <h1 className="text-2xl font-black tracking-tight text-white uppercase italic">Protocolo {userName}</h1>
      </header>

      <div className="bg-[#0a050f] border-2 border-magenta p-6 rounded-[32px] space-y-6 shadow-[0_0_50px_rgba(255,0,255,0.2)] active:scale-[0.99] transition-transform">
        <div className="flex justify-between items-start">
          <div className="flex gap-4 items-center">
            <div className="w-12 h-12 rounded-2xl overflow-hidden border-2 border-magenta shadow-[0_0_15px_rgba(255,0,255,0.4)]">
              <img src={LOGO_URL} alt="FlowOff" className="w-full h-full object-cover" />
            </div>
            <div>
              <span className="text-[10px] font-black text-magenta uppercase tracking-[0.2em] animate-pulse">Dashboard Ativo</span>
              <h3 className="text-xl font-black uppercase text-white tracking-tighter leading-tight">{userName}</h3>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest block mb-1">Valuation Real</span>
            <p className="text-2xl font-black font-mono leading-none" style={{ color: POLYGON_PURPLE }}>{calculateValuation(gameState).toFixed(0)} <span className="text-xs opacity-50">{TOKEN_TICKER}</span></p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#130b1a] p-4 rounded-2xl border border-white/5">
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Tempo Recuperado</span>
            <p className="text-2xl font-black text-green-400 font-mono leading-none">{formatHours(gameState.resources.horas_manuais_eliminadas)}</p>
            <span className="text-[8px] text-gray-700 uppercase mt-1 block tracking-widest font-black">por dia</span>
          </div>
          <div className="bg-[#130b1a] p-4 rounded-2xl border border-white/5">
            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest mb-2 block">Carga Cognitiva</span>
            <p className="text-2xl font-black text-cyan-400 font-mono leading-none">${gameState.resources.receita_passiva.toFixed(0)}</p>
            <span className="text-[8px] text-gray-700 uppercase mt-1 block tracking-widest font-black">tokens/sec</span>
          </div>
        </div>

        <div className="bg-[#1a1025]/50 p-4 rounded-2xl border border-magenta/20 flex justify-between items-center overflow-hidden relative">
          <div className="flex items-center gap-2 relative z-10">
            <Sparkles size={14} style={{ color: POLYGON_PURPLE }} />
            <span className="text-[9px] font-black text-white uppercase tracking-widest">Protocolo Established</span>
          </div>
          <code className="text-[9px] font-mono text-gray-600 relative z-10 italic truncate max-w-[80px]">0x{TOKEN_CONTRACT.slice(2, 10)}</code>
          <div className="absolute right-0 top-0 w-24 h-24 bg-magenta/5 blur-2xl rounded-full" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <button onClick={shareToX} className="bg-black border border-white/10 text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white/5 transition-all active:scale-95 shadow-xl">
          Share to X
        </button>
        <button onClick={shareToFarcaster} className="bg-[#472a91] text-white py-4 rounded-2xl font-black uppercase text-[10px] tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-[#5a36b5] transition-all active:scale-95 shadow-xl">
          Warpcast
        </button>
      </div>

      <div className="space-y-4 pt-2 pb-10">
        <button onClick={copyReport} className="w-full bg-white/5 border border-white/10 text-white py-4 rounded-2xl font-black uppercase text-xs tracking-[0.2em] flex items-center justify-center gap-3 active:scale-95 transition-all hover:bg-white/10">
          <ClipboardCheck size={18} className="text-magenta" />
          Copiar Relatório Full
        </button>

        <div className="flex flex-col items-center gap-2 pt-4 opacity-40">
          <p className="text-[8px] text-center text-gray-500 font-mono uppercase tracking-[0.3em] font-black">
            Snapshots liberados // Tire print para compartilhar como imagem
          </p>
          <div className="flex gap-2">
            <div className="w-1 h-1 bg-magenta rounded-full animate-pulse" />
            <div className="w-1 h-1 bg-magenta rounded-full animate-pulse delay-75" />
            <div className="w-1 h-1 bg-magenta rounded-full animate-pulse delay-150" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default XRay;
