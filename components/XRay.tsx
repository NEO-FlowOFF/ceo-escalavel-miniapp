
import React from 'react';
import { GameState } from '../types';
import { formatHours } from '../engine/gameLogic';
import { ClipboardCheck, Lock, Wallet, ExternalLink, Coins, Sparkles } from 'lucide-react';
import { TOKEN_TICKER, TOKEN_CONTRACT, SCAN_LINK, POLYGON_PURPLE } from '../constants';

interface XRayProps {
  gameState: GameState;
  onCopySuccess: (msg: string) => void;
}

const LOGO_URL = "/icon-512.webp";

const XRay: React.FC<XRayProps> = ({ gameState, onCopySuccess }) => {
  const isUnlocked = gameState.meta.snapshot_unlocked;
  const userName = gameState.meta.user?.name || "Operador";
  const userHandle = gameState.meta.user?.username ? `@${gameState.meta.user.username}` : `#${gameState.meta.user?.id.toString().slice(-4) || 'XXXX'}`;

  const tokenEarned = (gameState.meta.capital_total_gerado / 1000).toFixed(2);

  const copyReport = async () => {
    const hoursStr = formatHours(gameState.resources.horas_manuais_eliminadas);
    const totalAgents = gameState.inventory.reduce((acc, item) => acc + item.quantity, 0);
    const status = gameState.meta.status;

    const report = `🚀 Diagnóstico de Escala: ${userName}
⏳ Tempo Recuperado: ${hoursStr}/dia
🤖 Frota Autônoma: ${totalAgents} agentes
📈 Status Operacional: ${status}
💎 Valuation: ${tokenEarned} ${TOKEN_TICKER}

IA não é o futuro, é a margem de lucro do presente. www.flowoff.xyz #NEØFlowOFF #Scalability #ROI`;

    try {
      await navigator.clipboard.writeText(report);
      onCopySuccess("Dashboard Copiado!");
    } catch (err) { }
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
            Diagnóstico bloqueado. Sua empresa precisa gerar <span className="text-magenta font-bold">$ 100.000</span> em Capital total para auditoria.
          </p>
        </div>
        <div className="w-full max-w-[200px] h-1.5 bg-gray-800 rounded-full overflow-hidden">
          <div className="h-full bg-magenta" style={{ width: `${Math.min(100, (gameState.meta.capital_total_gerado / 100000) * 100)}%` }} />
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6 animate-in fade-in duration-700 px-1">
      <header className="space-y-1">
        <h2 className="text-xs font-mono text-magenta uppercase tracking-widest opacity-70">Auditoria de Escala</h2>
        <h1 className="text-2xl font-black tracking-tight text-white uppercase italic">Protocolo {userName}</h1>
      </header>

      <div className="bg-[#0a050f] border-2 border-magenta p-6 rounded-2xl space-y-6 shadow-[0_0_50px_rgba(255,0,255,0.2)]">
        <div className="flex justify-between items-start">
          <div className="flex gap-3 items-center">
            <div className="w-10 h-10 rounded-lg overflow-hidden border border-magenta"><img src={LOGO_URL} alt="FlowOff" className="w-full h-full object-cover" /></div>
            <div>
              <span className="text-[10px] font-bold text-magenta uppercase tracking-widest">Dashboard Ativo</span>
              <h3 className="text-xl font-black uppercase text-white tracking-tighter">{userName}</h3>
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-bold text-gray-600 uppercase tracking-widest">Valuation Real</span>
            <p className="text-lg font-black font-mono" style={{ color: POLYGON_PURPLE }}>{tokenEarned} {TOKEN_TICKER}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#130b1a] p-4 rounded-xl border border-magenta/20">
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Tempo Recuperado</span>
            <p className="text-2xl font-black text-green-400 font-mono leading-none">{formatHours(gameState.resources.horas_manuais_eliminadas)}/d</p>
          </div>
          <div className="bg-[#130b1a] p-4 rounded-xl border border-magenta/20">
            <span className="text-[9px] font-bold text-gray-500 uppercase tracking-widest mb-1 block">Receita Passiva</span>
            <p className="text-2xl font-black text-cyan-400 font-mono leading-none">${gameState.resources.receita_passiva.toFixed(1)}/s</p>
          </div>
        </div>

        <div className="bg-[#1a1025] p-4 rounded-xl border border-magenta/30 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Sparkles size={14} style={{ color: POLYGON_PURPLE }} />
            <span className="text-[9px] font-black text-white uppercase tracking-widest">Alocação Estratégica</span>
          </div>
          <code className="text-[9px] font-mono text-gray-500">{TOKEN_CONTRACT.slice(0, 10)}...</code>
        </div>
      </div>

      <button onClick={copyReport} className="w-full bg-magenta text-white py-4 rounded-xl font-black uppercase text-sm tracking-widest flex items-center justify-center gap-3 active:scale-95 transition-all">
        <ClipboardCheck size={20} />
        Copiar Relatório de ROI
      </button>
    </div>
  );
};

export default XRay;
