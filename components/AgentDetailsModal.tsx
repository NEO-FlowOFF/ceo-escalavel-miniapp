
import React, { useState } from 'react';
import { Agent, AgentOwnership } from '../types';
import { calculateAgentCost } from '../engine/gameLogic';
import { X, Rocket, Cpu, CheckCircle } from 'lucide-react';
import { playDeploy, playTyping } from '../engine/soundEffects';

interface AgentDetailsModalProps {
    agent: Agent;
    inventory: AgentOwnership[];
    capital: number;
    onBuy: (agent: Agent) => void;
    onClose: () => void;
}

const AgentDetailsModal: React.FC<AgentDetailsModalProps> = ({ agent, inventory, capital, onBuy, onClose }) => {
    const [deployingId, setDeployingId] = useState<string | null>(null);
    const [successId, setSuccessId] = useState<string | null>(null);

    const owned = inventory.find(i => i.id === agent.id)?.quantity || 0;
    const cost = calculateAgentCost(agent.custo_base, owned);

    const handlePurchase = async () => {
        if (deployingId || successId) return;
        if (capital < cost) return;

        setDeployingId(agent.id);
        playTyping();

        await new Promise(resolve => setTimeout(resolve, 1400));

        setDeployingId(null);
        setSuccessId(agent.id);

        playDeploy();
        onBuy(agent);

        await new Promise(resolve => setTimeout(resolve, 1000));
        setSuccessId(null);
        onClose();
    };

    return (
        <div id="modal-agent-details" className="fixed inset-0 z-[600] flex items-end justify-center pointer-events-none">
            <div id="modal-agent-details-backdrop" className="absolute inset-0 bg-black/80 backdrop-blur-sm pointer-events-auto animate-in fade-in" onClick={() => !deployingId && !successId && onClose()} />
            <div className="relative w-full max-w-lg bg-[#0d0714] border-t border-white/10 rounded-t-[32px] p-8 pointer-events-auto animate-in slide-in-from-bottom pb-[calc(40px+env(safe-area-inset-bottom))]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-10 h-1.5 bg-white/20 rounded-full" />

                <div className="flex justify-between items-start mb-6">
                    <div>
                        <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-none">{agent.nome}</h2>
                        <p className="text-[10px] text-magenta font-bold uppercase tracking-widest mt-2">Dossiê Operacional</p>
                    </div>
                    <button id="modal-agent-details-close" onClick={onClose} className="p-2 text-gray-500"><X size={20} /></button>
                </div>

                <div className="space-y-6">
                    <div className="bg-white/5 p-6 rounded-[24px] border border-white/10 italic text-sm text-gray-400 leading-relaxed">
                        "{agent.descricao_curta}"
                    </div>

                    {deployingId ? (
                        <div className="bg-magenta/10 border border-magenta/20 p-8 rounded-[24px] flex flex-col items-center justify-center gap-4 animate-pulse">
                            <Cpu size={40} className="text-magenta animate-spin-slow" />
                            <p className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Deploying Agent...</p>
                        </div>
                    ) : successId ? (
                        <div className="bg-green-500/10 border border-green-500/30 p-8 rounded-[24px] flex flex-col items-center justify-center gap-4">
                            <CheckCircle size={40} className="text-green-500" />
                            <p className="text-white font-black uppercase tracking-[0.2em] text-[10px]">Active Protocol</p>
                        </div>
                    ) : (
                        <div className="pt-2">
                            <button
                                onClick={handlePurchase}
                                disabled={capital < cost}
                                className={`w-full py-5 rounded-[22px] font-black uppercase text-xs tracking-widest transition-all flex items-center justify-center gap-3 ${capital >= cost
                                        ? 'bg-magenta text-white active:scale-[0.96]'
                                        : 'bg-white/5 text-gray-600'
                                    }`}
                            >
                                <Rocket size={18} />
                                INVESTIR $ {cost.toLocaleString()}
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AgentDetailsModal;
