
import React from 'react';
import { Wallet, Zap, ShieldCheck, ChevronRight, Loader2, ExternalLink } from 'lucide-react';
import { useNeoToken } from '../hooks/useNeoToken';

interface NeoMintModalProps {
    onClose: () => void;
}

const NeoMintModal: React.FC<NeoMintModalProps> = ({ onClose }) => {
    const {
        isConnected,
        balance,
        stats,
        mint,
        isPending,
        mintSuccess,
        error
    } = useNeoToken();

    const handleAction = async () => {
        if (!isConnected) {
            // Reown modal handle
            const connectButton = document.querySelector('appkit-button');
            if (connectButton) {
                // Clicking the webcomponent if it exists
                (connectButton as any).click();
            } else {
                // Fallback or custom trigger if needed
                window.alert("Por favor, conecte sua carteira usando o botão no topo.");
            }
            return;
        }

        try {
            await mint();
        } catch (err) {
            console.error(err);
        }
    };

    return (
        <div id="modal-neomint" className="fixed inset-0 z-[600] flex items-end justify-center">
            <div id="modal-neomint-backdrop" className="absolute inset-0 bg-black/95 backdrop-blur-xl animate-in fade-in" onClick={onClose} />
            <div className="relative w-full max-w-lg bg-[#0a0510] border-t-2 border-magenta/40 rounded-t-[40px] p-8 pointer-events-auto animate-in slide-in-from-bottom duration-500 pb-[calc(40px+env(safe-area-inset-bottom))]">
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-12 h-1.5 bg-white/10 rounded-full" />

                <header className="text-center mb-8">
                    <div className="inline-flex p-4 bg-magenta/10 rounded-2xl border border-magenta/20 mb-4 group hover:bg-magenta/20 transition-all duration-500">
                        <Zap className="text-magenta animate-pulse" size={32} />
                    </div>
                    <h2 className="text-2xl font-black text-white uppercase italic tracking-tighter leading-tight">MINT $NEOFLW</h2>
                    <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest mt-1">Protocolo Mainnet Base ⦿ Official</p>
                </header>

                <div className="space-y-4">
                    {/* Status Card */}
                    <div className="bg-white/5 p-6 rounded-[28px] border border-white/10 flex justify-between items-center bg-gradient-to-br from-magenta/10 via-transparent to-transparent">
                        <div>
                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest block mb-1">Seu Saldo Real</span>
                            <div className="flex items-baseline gap-2">
                                <p className="text-3xl font-black text-white font-mono leading-none">{balance}</p>
                                <span className="text-[10px] font-black text-magenta uppercase tracking-widest">$NEOFLW</span>
                            </div>
                        </div>
                        <div className="text-right">
                            <span className="text-[9px] font-black text-gray-500 uppercase tracking-widest block mb-1">Status Mint</span>
                            <span className={`text-[10px] font-black uppercase tracking-widest px-3 py-1 rounded-full border ${stats?.mintEnabled ? 'text-green-500 border-green-500/20 bg-green-500/5' : 'text-orange-500 border-orange-500/20 bg-orange-500/5'}`}>
                                {stats?.mintEnabled ? 'ATIVO' : 'PAUSADO'}
                            </span>
                        </div>
                    </div>

                    {/* Supply Progress */}
                    {stats && (
                        <div className="bg-white/5 p-4 rounded-[24px] border border-white/5">
                            <div className="flex justify-between items-center mb-2">
                                <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest">Suprimento Distribuído</span>
                                <span className="text-[9px] font-bold text-white uppercase tracking-widest">
                                    {Math.round((Number(stats.currentSupply) / Number(stats.maxSupply)) * 100)}%
                                </span>
                            </div>
                            <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                                <div
                                    className="h-full bg-magenta transition-all duration-1000 ease-out"
                                    style={{ width: `${(Number(stats.currentSupply) / Number(stats.maxSupply)) * 100}%` }}
                                />
                            </div>
                            <div className="flex justify-between mt-2">
                                <span className="text-[8px] font-medium text-gray-600 uppercase tracking-tighter">Genesis</span>
                                <span className="text-[8px] font-medium text-gray-600 uppercase tracking-tighter">1,000,000,000 MAX</span>
                            </div>
                        </div>
                    )}

                    {/* Error Message */}
                    {error && (
                        <div className="p-4 bg-red-500/10 border border-red-500/20 rounded-2xl animate-in fade-in zoom-in duration-300">
                            <p className="text-[10px] font-medium text-red-400 text-center uppercase tracking-wide">
                                {error}
                            </p>
                        </div>
                    )}

                    {/* Success Message */}
                    {mintSuccess && (
                        <div className="p-4 bg-green-500/10 border border-green-500/20 rounded-2xl text-center space-y-2 animate-in fade-in zoom-in duration-300">
                            <div className="flex items-center justify-center gap-2 text-green-400">
                                <ShieldCheck size={16} />
                                <span className="text-[10px] font-black uppercase tracking-widest">Mint Realizado com Sucesso!</span>
                            </div>
                            <p className="text-[9px] text-gray-400 uppercase tracking-tight leading-relaxed">
                                Suas quotas de escalabilidade foram protocoladas on-chain.
                            </p>
                        </div>
                    )}

                    <div className="grid grid-cols-2 gap-3 pt-2">
                        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-2xl">
                            <div className="w-2 h-2 rounded-full bg-magenta animate-pulse" />
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tight italic">Mainnet Base</span>
                        </div>
                        <div className="flex items-center gap-3 px-4 py-3 bg-white/5 border border-white/5 rounded-2xl">
                            <ShieldCheck className="text-gray-500" size={14} />
                            <span className="text-[9px] font-bold text-gray-400 uppercase tracking-tight italic">Verificado</span>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            onClick={handleAction}
                            disabled={isPending || (isConnected && !stats?.mintEnabled)}
                            className={`w-full py-6 rounded-[24px] font-black uppercase tracking-[0.2em] text-xs flex items-center justify-center gap-3 shadow-[0_20px_40px_rgba(255,0,255,0.2)] active:scale-[0.96] transition-all group relative overflow-hidden ${isPending
                                    ? 'bg-magenta/50 cursor-not-allowed'
                                    : 'bg-magenta text-white hover:brightness-110'
                                }`}
                        >
                            {isPending ? (
                                <>
                                    <Loader2 className="animate-spin" size={18} />
                                    PROCESSANDO MINT...
                                </>
                            ) : !isConnected ? (
                                <>
                                    <Wallet size={18} />
                                    CONECTAR CARTEIRA
                                </>
                            ) : (
                                <>
                                    INICIAR MINT ({stats?.mintPrice} ETH)
                                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </>
                            )}
                        </button>

                        <a
                            href="https://basescan.org/address/0x41F4ff3d45DED9C1332e4908F637B75fe83F5d6B"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full py-4 text-[9px] font-black text-gray-600 uppercase tracking-[0.3em] flex items-center justify-center gap-2 hover:text-magenta transition-colors mt-2"
                        >
                            VER CONTRATO NO EXPLORER
                            <ExternalLink size={10} />
                        </a>
                    </div>

                    <button
                        id="modal-neomint-close"
                        onClick={onClose}
                        className="w-full text-[9px] font-black text-gray-700 uppercase tracking-[0.3em] hover:text-white transition-colors"
                    >
                        FECHAR // MINIMIZAR
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NeoMintModal;
