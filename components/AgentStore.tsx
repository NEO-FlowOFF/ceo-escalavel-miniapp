
import React, { useState } from 'react';
import { Agent, AgentOwnership } from '../types';
import { calculateAgentCost } from '../engine/gameLogic';
import { Plus, Timer, X, Lock, Rocket, TrendingUp, ExternalLink, Sparkles, Loader2, Cpu, CheckCircle } from 'lucide-react';
import { playDeploy, playTyping } from '../engine/soundEffects';

interface AgentStoreProps {
  agents: Agent[];
  inventory: AgentOwnership[];
  pu: number;
  totalPu: number;
  onBuy: (agent: Agent) => void;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

const AgentStore: React.FC<AgentStoreProps> = ({ agents, inventory, pu, totalPu, onBuy, selectedId, onSelect }) => {
  const [deployingId, setDeployingId] = useState<string | null>(null);
  const [successId, setSuccessId] = useState<string | null>(null);

  const selectedAgent = agents.find(a => a.id === selectedId);
  const selectedOwned = selectedAgent ? (inventory.find(i => i.id === selectedAgent.id)?.quantity || 0) : 0;
  const selectedCost = selectedAgent ? calculateAgentCost(selectedAgent.custo_base, selectedOwned) : 0;

  const handlePurchase = async (agent: Agent) => {
    if (deployingId || successId) return;

    const owned = inventory.find(i => i.id === agent.id)?.quantity || 0;
    const cost = calculateAgentCost(agent.custo_base, owned);

    if (pu < cost) return;

    setDeployingId(agent.id);
    playTyping();

    await new Promise(resolve => setTimeout(resolve, 1400));

    setDeployingId(null);
    setSuccessId(agent.id);

    playDeploy();
    onBuy(agent);

    await new Promise(resolve => setTimeout(resolve, 1000));
    setSuccessId(null);
    onSelect(null);
  };

  return (
    <div className="space-y-8 pb-24">
      <header className="px-1">
        <h2 className="text-[10px] font-bold text-magenta uppercase tracking-widest opacity-80 mb-1">Mercado de Automação</h2>
        <h1 className="text-3xl font-black tracking-tight text-white uppercase italic">Agentes</h1>
      </header>

      <div className="space-y-4">
        {agents.map(agent => {
          const owned = inventory.find(i => i.id === agent.id)?.quantity || 0;
          const cost = calculateAgentCost(agent.custo_base, owned);
          const isUnlocked = totalPu >= agent.desbloqueia_em_capital_total;
          const canAfford = pu >= cost;
          const isDeploying = deployingId === agent.id;
          const isSuccess = successId === agent.id;

          if (!isUnlocked) {
            return (
              <div key={agent.id} className="bg-white/5 border border-white/5 p-5 rounded-[24px] flex items-center gap-5 grayscale opacity-50">
                <div className="w-12 h-12 bg-gray-900 rounded-2xl flex items-center justify-center border border-white/10 text-gray-700"><Lock size={20} /></div>
                <div className="flex-1">
                  <h3 className="text-sm font-black text-gray-400 uppercase tracking-widest">{agent.nome}</h3>
                  <p className="text-[10px] text-gray-600 font-mono">Requer $ {agent.desbloqueia_em_capital_total.toLocaleString()}</p>
                </div>
              </div>
            );
          }

          return (
            <div
              key={agent.id}
              className={`bg-white/5 ios-blur border rounded-[26px] overflow-hidden transition-all active:scale-[0.98] cursor-pointer group ${canAfford ? 'border-white/10' : 'border-white/5 opacity-80'} ${isSuccess ? 'border-green-500/50' : ''} ${selectedId === agent.id ? 'border-magenta shadow-[0_0_20px_rgba(255,0,255,0.1)]' : ''}`}
              onClick={() => !isDeploying && !isSuccess && onSelect(agent.id)}
            >
              <div className="p-5 relative">
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div className="flex-1">
                    <h3 className={`font-black text-lg uppercase tracking-tight transition-colors ${selectedId === agent.id ? 'text-magenta' : 'text-white'}`}>{agent.nome}</h3>
                    <p className="text-[11px] text-gray-500 mt-1">NÍVEL {owned}</p>
                  </div>
                  <Plus size={18} className={canAfford ? 'text-magenta' : 'text-gray-600'} />
                </div>

                <div className="flex gap-3 text-[10px] font-bold text-gray-400 mb-4 relative z-10">
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-cyan-400/5 rounded-lg border border-cyan-400/10 text-cyan-400">
                    <TrendingUp size={12} />
                    <span>+${agent.receita_passiva_segundo.toFixed(1)}/s</span>
                  </div>
                  <div className="flex items-center gap-1.5 px-2.5 py-1 bg-green-400/5 rounded-lg border border-green-400/10 text-green-400">
                    <Timer size={12} />
                    <span>-{agent.economia_diaria_minutos}m/d</span>
                  </div>
                </div>

                <div className="flex items-center justify-between mt-2">
                   <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">CUSTO: ${cost.toLocaleString()}</span>
                   {isDeploying && <Loader2 size={14} className="animate-spin text-magenta" />}
                   {isSuccess && <CheckCircle size={14} className="text-green-500" />}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedAgent && (
        <div className="fixed inset-0 z-[100] flex items-end justify-center pointer-events-none">
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto animate-in fade-in" onClick={() => !deployingId && !successId && onSelect(null)} />
          <div className="relative w-full max-w-lg bg-[#0d0714] border-t border-white/10 rounded-t-[32px] p-8 pointer-events-auto animate-in slide-in-from-bottom pb-[calc(40px+env(safe-area-inset-bottom))]">
            <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-white/20 rounded-full" />

            <div className="flex justify-between items-start mb-6">
              <div>
                <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">{selectedAgent.nome}</h2>
                <p className="text-[10px] text-magenta font-bold uppercase tracking-widest mt-2">Dossiê Operacional</p>
              </div>
              <button onClick={() => onSelect(null)} className="p-2 text-gray-500"><X size={20} /></button>
            </div>

            <div className="space-y-6">
              <div className="bg-white/5 p-6 rounded-[24px] border border-white/10 italic text-sm text-gray-400 leading-relaxed">
                "{selectedAgent.descricao_curta}"
              </div>

              {deployingId === selectedAgent.id ? (
                <div className="bg-magenta/10 border border-magenta/20 p-8 rounded-[24px] flex flex-col items-center justify-center gap-4 animate-pulse">
                  <Cpu size={40} className="text-magenta animate-spin-slow" />
                  <p className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Deploying Agent...</p>
                </div>
              ) : successId === selectedAgent.id ? (
                <div className="bg-green-500/10 border border-green-500/30 p-8 rounded-[24px] flex flex-col items-center justify-center gap-4">
                  <CheckCircle size={40} className="text-green-500" />
                  <p className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Active Protocol</p>
                </div>
              ) : (
                <div className="pt-2">
                  <button
                    onClick={() => handlePurchase(selectedAgent)}
                    disabled={pu < selectedCost}
                    className={`w-full py-5 rounded-[22px] font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-3 ${
                      pu >= selectedCost
                      ? 'bg-magenta text-white active:scale-[0.96]'
                      : 'bg-white/5 text-gray-600'
                    }`}
                  >
                    <Rocket size={18} />
                    INVESTIR $ {selectedCost.toLocaleString()}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AgentStore;
