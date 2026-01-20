import React, { useEffect, useState } from 'react';
import { X, Trophy, Crown, Loader2 } from 'lucide-react';

interface LeaderboardEntry {
    name: string;
    score: number;
}

interface LeaderboardModalProps {
    isOpen: boolean;
    onClose: () => void;
    currentValuation: number;
    userName: string;
    userId: number;
}

export const LeaderboardModal: React.FC<LeaderboardModalProps> = ({ isOpen, onClose, currentValuation, userName, userId }) => {
    const [leaders, setLeaders] = useState<LeaderboardEntry[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        if (isOpen) {
            fetchLeaderboard();
            submitScore(); // Otimista: tenta enviar o score atual ao abrir
        }
    }, [isOpen]);

    const fetchLeaderboard = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await fetch('/api/leaderboard');
            if (!res.ok) throw new Error('Falha na conexão');
            const data = await res.json();
            setLeaders(data.leaderboard || []);
        } catch (e) {
            setError('Erro ao carregar ranking.');
        } finally {
            setLoading(false);
        }
    };

    const submitScore = async () => {
        try {
            await fetch('/api/leaderboard', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: userName,
                    score: Math.floor(currentValuation),
                    user_id: userId
                })
            });
        } catch (e) {
            // Silently fail on submit
            console.warn('Failed to submit score');
        }
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-[90%] max-w-sm bg-[#1a1625] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200 flex flex-col max-h-[80vh]">

                {/* Header */}
                <div className="bg-gradient-to-r from-purple-900/40 to-purple-600/10 p-4 border-b border-white/5 flex items-center justify-between shrink-0">
                    <div className="flex items-center gap-2">
                        <Trophy className="text-purple-400" size={20} />
                        <h2 className="text-white font-bold text-lg">Ranking Global</h2>
                    </div>
                    <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                {/* Content */}
                <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
                    {loading ? (
                        <div className="flex flex-col items-center justify-center py-10 text-purple-400">
                            <Loader2 className="animate-spin mb-2" size={32} />
                            <span className="text-xs uppercase tracking-widest opacity-70">Sincronizando...</span>
                        </div>
                    ) : error ? (
                        <div className="text-center py-10 text-red-400 text-sm">
                            {error}
                            <button onClick={fetchLeaderboard} className="block mx-auto mt-2 text-xs underline">Tentar novamente</button>
                        </div>
                    ) : (
                        <div className="space-y-2">
                            {leaders.map((leader, index) => (
                                <div
                                    key={index}
                                    className={`flex items-center justify-between p-3 rounded-xl border ${leader.name === userName
                                            ? 'bg-purple-500/20 border-purple-500/40'
                                            : 'bg-white/5 border-white/5'
                                        }`}
                                >
                                    <div className="flex items-center gap-3">
                                        <div className={`w-8 h-8 flex items-center justify-center rounded-lg font-black text-sm ${index === 0 ? 'bg-yellow-500 text-black' :
                                                index === 1 ? 'bg-gray-400 text-black' :
                                                    index === 2 ? 'bg-orange-700 text-white' :
                                                        'bg-white/5 text-white/40'
                                            }`}>
                                            {index + 1}
                                        </div>
                                        <div>
                                            <div className="text-white text-sm font-bold flex items-center gap-1">
                                                {leader.name}
                                                {index === 0 && <Crown size={12} className="text-yellow-500 fill-yellow-500" />}
                                            </div>
                                            <div className="text-[10px] text-white/40 uppercase tracking-wider">CEO</div>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <div className="text-purple-300 font-mono font-bold text-sm">
                                            ${leader.score.toLocaleString()}
                                        </div>
                                    </div>
                                </div>
                            ))}

                            {leaders.length === 0 && (
                                <div className="text-center text-white/30 text-xs py-10">
                                    Seja o primeiro no topo!
                                </div>
                            )}
                        </div>
                    )}
                </div>

                {/* Status Bar */}
                <div className="p-3 bg-black/20 text-[10px] text-white/30 text-right shrink-0">
                    * Valuation Total Acumulado
                </div>
            </div>
        </div>
    );
};
