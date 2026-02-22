
import React from 'react';
import { Agent, AgentOwnership } from '../types';
import { calculateAgentCost } from '../engine/gameLogic';
import { Plus, Timer, Lock, TrendingUp } from 'lucide-react';

interface AgentStoreProps {
  agents: Agent[];
  inventory: AgentOwnership[];
  pu: number;
  totalPu: number;
  onBuy: (agent: Agent) => void;
  selectedId: string | null;
  onSelect: (id: string | null) => void;
}

const AgentStore: React.FC<AgentStoreProps> = ({ agents, inventory, pu, totalPu, selectedId, onSelect }) => {
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
              id={`agent-card-${agent.id}`}
              className={`bg-white/5 ios-blur border rounded-[26px] overflow-hidden transition-all active:scale-[0.98] cursor-pointer group ${canAfford ? 'border-white/10' : 'border-white/5 opacity-80'} ${selectedId === agent.id ? 'border-magenta shadow-[0_0_20px_rgba(255,0,255,0.1)]' : ''}`}
              onClick={() => onSelect(agent.id)}
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
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default AgentStore;
