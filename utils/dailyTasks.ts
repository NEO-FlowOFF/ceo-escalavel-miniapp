export interface DailyTask {
    id: string;
    description: string;
    reward: string;
    completed: boolean;
    target: number;
    current: number;
    type: 'click' | 'buy' | 'login';
}

export interface DayStreak {
    current: number;
    lastLoginDate: number; // Timestamp
}

export const DAILY_TASKS: DailyTask[] = [
    {
        id: 'task_login',
        description: 'Login Diário',
        reward: '+10% Capital',
        completed: false,
        target: 1,
        current: 0,
        type: 'login'
    },
    {
        id: 'task_clicks',
        description: '50 Ações Manuais',
        reward: '-20 Stress',
        completed: false,
        target: 50,
        current: 0,
        type: 'click'
    },
    {
        id: 'task_agent',
        description: 'Contratar 1 Agente',
        reward: '+500 Capital',
        completed: false,
        target: 1,
        current: 0,
        type: 'buy'
    }
];

export const calculateStreak = (lastLogin: number): number => {
    const now = Date.now();
    const oneDay = 24 * 60 * 60 * 1000;
    const diff = now - lastLogin;

    if (diff < oneDay) return 0; // Same day (should not happen if checked correctly)
    if (diff < 2 * oneDay) return 1; // Consecutive day
    return -1; // Streak broken
};

export const getStreakBonus = (streak: number): string => {
    if (streak >= 7) return "MULTIPLIER x2.0";
    if (streak >= 3) return "MULTIPLIER x1.5";
    return "MULTIPLIER x1.0";
};
