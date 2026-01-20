import React, { useState } from 'react';
import { X, Star } from 'lucide-react';
import { STORE_ITEMS, StoreItem, paymentService } from '../utils/payments';

interface StoreModalProps {
    isOpen: boolean;
    onClose: () => void;
    onPurchaseSuccess: (item: StoreItem) => void;
}

export const StoreModal: React.FC<StoreModalProps> = ({ isOpen, onClose, onPurchaseSuccess }) => {
    const [loadingItem, setLoadingItem] = useState<string | null>(null);

    if (!isOpen) return null;

    const handlePurchase = async (item: StoreItem) => {
        setLoadingItem(item.id);

        await paymentService.purchaseItem(
            item,
            () => {
                onPurchaseSuccess(item);
                setLoadingItem(null);
                onClose();
            },
            (errorMsg) => {
                console.error(errorMsg);
                alert(errorMsg);
                setLoadingItem(null);
            }
        );
    };

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-[90%] max-w-sm bg-[#1a1625] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">
                <div className="bg-gradient-to-r from-yellow-900/40 to-yellow-600/10 p-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Star className="text-yellow-400 fill-yellow-400" size={20} />
                        <h2 className="text-white font-bold text-lg">Loja Premium</h2>
                    </div>
                    <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-4 space-y-3">
                    <p className="text-xs text-white/50 text-center mb-4">
                        Use **Telegram Stars** para acelerar sua jornada rumo ao IPO.
                    </p>

                    {STORE_ITEMS.map((item) => (
                        <div
                            key={item.id}
                            className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3 hover:bg-white/10 transition-all cursor-pointer group"
                            onClick={() => !loadingItem && handlePurchase(item)}
                        >
                            <div className={`w-12 h-12 rounded-lg flex items-center justify-center text-2xl bg-gradient-to-br ${item.effect_type === 'insurance' ? 'from-red-900/40 to-red-500/20' : 'from-green-900/40 to-green-500/20'
                                }`}>
                                {item.icon}
                            </div>

                            <div className="flex-1">
                                <h3 className="text-white font-bold text-sm">{item.title}</h3>
                                <p className="text-[10px] text-white/60 leading-tight">{item.description}</p>
                            </div>

                            <button
                                disabled={loadingItem !== null}
                                className={`h-9 px-3 rounded-lg font-bold text-xs flex items-center gap-1 transition-all ${loadingItem === item.id
                                        ? 'bg-white/10 text-white/40'
                                        : 'bg-yellow-500 hover:bg-yellow-400 text-black shadow-[0_0_15px_rgba(234,179,8,0.3)]'
                                    }`}
                            >
                                {loadingItem === item.id ? (
                                    <span className="animate-spin">⏳</span>
                                ) : (
                                    <>
                                        <span>{item.price}</span>
                                        <Star size={10} className="fill-black" />
                                    </>
                                )}
                            </button>
                        </div>
                    ))}
                </div>

                <div className="p-3 bg-black/20 text-[10px] text-white/30 text-center">
                    Pagamentos processados via Telegram Verify ✅
                </div>
            </div>
        </div>
    );
};
