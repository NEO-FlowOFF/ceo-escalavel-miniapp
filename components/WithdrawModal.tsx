
import React from 'react';
import { Wallet, TrendingUp, ShieldCheck, Zap } from 'lucide-react';
import { openExternalLink } from '../utils/navigation';

interface WithdrawModalProps {
    valuation: string;
    userName: string;
    onClose: () => void;
}

const WithdrawModal: React.FC<WithdrawModalProps> = ({ valuation, userName, onClose }) => {
    const handleWithdraw = () => {
        const text = encodeURIComponent(`Olá Mellø, sou o ${userName}. Cheguei ao topo do game e quero protocolar o Saque Real do meu Equity de ${valuation} $NEOFLW.`);
        openExternalLink(`https://t.me/neomello?text=${text}`);
    };
    return (
        <div className="fixed inset-0 z-[600] flex items-end justify-center">
            <div className="absolute inset-0 bg-black/90 backdrop-blur-md animate-in fade-in" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-[#0a0510] border-t-2 border-magenta/30 rounded-t-[40px] p-8 pointer-events-auto animate-in slide-in-from-bottom duration-500 pb-[calc(40px+env(safe-area-inset-bottom))]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/10 rounded-full" />

                <header className="text-center mb-8">
                    <div className="inline-flex p-4 bg-magenta/10 rounded-2xl border border-magenta/20 mb-4">
                        <Wallet className="text-magenta" size={32} />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-tight">Liquidar Equity</h2>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Protocolo de Saque $NEOFLW</p>
                </header>

                <div className="space-y-4">
                    <div className="bg-white/5 p-6 rounded-[28px] border border-white/5 flex justify-between items-center bg-gradient-to-r from-magenta/5 to-transparent">
                        <div>
                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest">Valor de Saque Estimado</span>
                            <p className="text-3xl font-black text-white font-mono leading-none mt-1">{valuation}</p>
                        </div>
                        <div className="text-right">
                            <span className="text-[10px] font-black text-magenta uppercase tracking-widest">$NEOFLW</span>
                        </div>
                    </div>

                    <div className="space-y-3 pt-2">
                        <div className="flex items-center gap-3 px-4 py-3 bg-green-500/5 border border-green-500/10 rounded-2xl">
                            <ShieldCheck className="text-green-500" size={16} />
                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">Airdrop Qualificado por Performance</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 bg-cyan-500/5 border border-cyan-500/10 rounded-2xl">
                            <Zap className="text-cyan-500" size={16} />
                            <span className="text-[10px] font-bold text-gray-300 uppercase tracking-wide">Smart Contract Ativado ⦿</span>
                        </div>
                    </div>

                    <div className="bg-magenta/5 p-5 rounded-[24px] border border-magenta/10 mt-4 relative overflow-hidden">
                        <p className="text-[11px] text-gray-400 leading-relaxed text-center italic relative z-10">
                            "Tokens virtuais provam sua habilidade como arquiteto. Para sacar lucro real no mundo dos negócios, você precisa da infraestrutura certa."
                        </p>
                        <div className="absolute top-0 right-0 p-2 opacity-5">
                            <TrendingUp size={40} />
                        </div>
                    </div>

                    <button
                        onClick={handleWithdraw}
                        className="w-full py-6 bg-magenta text-white rounded-[24px] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,0,255,0.3)] active:scale-[0.96] transition-all mt-2 group"
                    >
                        PROTOCOLAR SAQUE REAL
                        <TrendingUp size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>

                    <button onClick={onClose} className="w-full py-4 text-[9px] font-black text-gray-600 uppercase tracking-[0.3em] hover:text-white transition-colors">
                        CANCELAR OPERAÇÃO // VOLTAR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default WithdrawModal;
