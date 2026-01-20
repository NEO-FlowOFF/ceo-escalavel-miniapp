import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Circle, Flame, Calendar } from 'lucide-react';
import { DailyTask, DayStreak, getStreakBonus } from '../utils/dailyTasks';

interface DailyTasksModalProps {
    isOpen: boolean;
    onClose: () => void;
    tasks: DailyTask[];
    streak: DayStreak;
    onClaim: (taskId: string) => void;
}

export const DailyTasksModal: React.FC<DailyTasksModalProps> = ({ isOpen, onClose, tasks, streak, onClaim }) => {
    if (!isOpen) return null;

    const streakBonus = getStreakBonus(streak.current);

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
            <div className="relative w-[90%] max-w-sm bg-[#1a1625] border border-white/10 rounded-2xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200">

                {/* Header */}
                <div className="bg-gradient-to-r from-orange-900/40 to-orange-600/10 p-4 border-b border-white/5 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <Calendar className="text-orange-400" size={20} />
                        <h2 className="text-white font-bold text-lg">Daily Operations</h2>
                    </div>
                    <button onClick={onClose} className="text-white/40 hover:text-white transition-colors">
                        <X size={24} />
                    </button>
                </div>

                <div className="p-5 space-y-6">

                    {/* Streak Section */}
                    <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-4 flex items-center justify-between">
                        <div>
                            <div className="text-[10px] text-orange-400 font-bold uppercase tracking-widest mb-1">Login Streak</div>
                            <div className="text-2xl font-black text-white flex items-center gap-2">
                                {streak.current} DIAS <Flame className="fill-orange-500 text-orange-500 animate-pulse" size={20} />
                            </div>
                        </div>
                        <div className="text-right">
                            <div className="text-[10px] text-white/40 font-bold uppercase tracking-widest mb-1">Atual Bonus</div>
                            <div className="text-sm font-bold text-white bg-white/10 px-2 py-1 rounded">{streakBonus}</div>
                        </div>
                    </div>

                    {/* Tasks List */}
                    <div className="space-y-3">
                        <p className="text-xs text-white/50 font-bold uppercase tracking-widest">Tarefas de Hoje</p>
                        {tasks.map((task) => (
                            <div key={task.id} className="bg-white/5 border border-white/5 rounded-xl p-3 flex items-center gap-3">
                                <div className="flex-1">
                                    <h3 className="text-white font-bold text-sm">{task.description}</h3>
                                    <div className="flex items-center gap-2 mt-1">
                                        <div className="h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                                            <div
                                                className="h-full bg-magenta transition-all duration-500"
                                                style={{ width: `${Math.min(100, (task.current / task.target) * 100)}%` }}
                                            />
                                        </div>
                                        <span className="text-[10px] text-white/40">{task.current}/{task.target}</span>
                                    </div>
                                </div>

                                {task.completed ? (
                                    <div className="flex flex-col items-end">
                                        <div className="text-green-500 flex items-center gap-1 text-xs font-bold mb-1">
                                            <CheckCircle size={12} /> FEITO
                                        </div>
                                    </div>
                                ) : (
                                    <button
                                        onClick={() => {
                                            if (task.current >= task.target) onClaim(task.id);
                                        }}
                                        disabled={task.current < task.target}
                                        className={`px-3 py-1.5 rounded-lg text-[10px] font-bold uppercase tracking-widest transition-all ${task.current >= task.target
                                                ? 'bg-green-500 text-black hover:bg-green-400 animate-pulse'
                                                : 'bg-white/5 text-white/20 cursor-not-allowed'
                                            }`}
                                    >
                                        {task.current >= task.target ? 'COLETAR' : task.reward}
                                    </button>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
};
