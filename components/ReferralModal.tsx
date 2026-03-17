import React, { useState } from 'react';
import { X, Share2, Copy, Check, Users, Gift, Rocket, ChevronRight } from 'lucide-react';
import telegram from '../utils/telegramUtils';

interface ReferralModalProps {
    isOpen: boolean;
    onClose: () => void;
    userId: string | number | undefined;
}

export const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose, userId }) => {
    const [copied, setCopied] = useState(false);

    if (!isOpen) return null;

    const botUsername = 'AgenteFlow_Bot';
    const referralLink = `https://t.me/${botUsername}/app?startapp=${userId}`;

    const handleCopyLink = () => {
        navigator.clipboard.writeText(referralLink);
        setCopied(true);
        telegram.hapticFeedback.notification('success');
        setTimeout(() => setCopied(false), 2000);
    };

    const handleShare = () => {
        const shareText = encodeURIComponent(
            `🚀 Entre na minha frota de agentes IA no Agent Flow e ganhe $1.000 de capital inicial!\n\nLink do protocolo: ${referralLink}`
        );
        telegram.openTelegramLink(`https://t.me/share/url?url=${referralLink}&text=${shareText}`);
        telegram.hapticFeedback.impact('heavy');
    };

    return (
        <div id="modal-referral" className="fixed inset-0 z-[650] flex items-center justify-center animate-in fade-in duration-200">
            <div
                id="modal-referral-backdrop"
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />
            <div className="relative w-[90%] max-w-sm bg-[#1a1625] border border-magenta/20 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="bg-gradient-to-r from-magenta/40 to-magenta/10 p-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Users className="text-magenta" size={20} />
                        <h2 className="text-white font-bold text-lg uppercase tracking-tight">Crescimento de Frota</h2>
                    </div>
                    <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-5 space-y-6">
                    <div className="text-center space-y-2">
                        <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-magenta/20 text-magenta mb-2">
                            <Gift size={24} />
                        </div>
                        <h3 className="text-white font-black uppercase text-sm tracking-widest">Incentivo de Expansão</h3>
                        <p className="text-[10px] text-white/50 leading-relaxed">
                            Convide parceiros estratégicos para o protocolo. Ambos recebem <span className="text-magenta font-bold">$1.000</span> de bônus na operação.
                        </p>
                    </div>

                    <div className="space-y-3">
                        <div className="p-3 bg-white/5 border border-white/10 rounded-xl space-y-2">
                            <p className="text-[8px] font-black uppercase tracking-[0.2em] text-white/30 italic">Seu Link de Convite</p>
                            <div className="flex items-center gap-2">
                                <div className="flex-1 overflow-hidden">
                                    <p className="text-[10px] text-magenta font-mono truncate">{referralLink}</p>
                                </div>
                                <button
                                    onClick={handleCopyLink}
                                    className="p-2 transition-colors text-white/40 hover:text-magenta"
                                >
                                    {copied ? <Check size={16} /> : <Copy size={16} />}
                                </button>
                            </div>
                        </div>

                        <button
                            onClick={handleShare}
                            className="w-full bg-magenta hover:bg-magenta-hover text-white py-3.5 rounded-xl font-black uppercase text-[10px] tracking-widest flex items-center justify-center gap-2 shadow-[0_10px_30px_rgba(255,0,142,0.3)] active:scale-95 transition-all"
                        >
                            <Share2 size={14} />
                            Enviar no Telegram
                        </button>
                    </div>

                    <div className="pt-2 border-t border-white/5">
                        <div className="flex items-center justify-between text-[8px] text-white/30 uppercase font-black tracking-widest">
                            <span>Status da Rede</span>
                            <span className="flex items-center gap-1">
                                <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                                Online
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
