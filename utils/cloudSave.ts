import { GameState } from '../types';

const SYNC_INTERVAL_MS = 60 * 1000; // 1 Minute

interface CloudData {
    gameState: GameState;
    last_updated: number;
}

export const CloudSaveService = {

    async save(userId: string, gameState: GameState): Promise<boolean> {
        try {
            await fetch(`/api/sync?userId=${userId}`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    gameState,
                    timestamp: Date.now()
                })
            });
            console.log('[CloudSave] Saved successfully');
            return true;
        } catch (e) {
            console.warn('[CloudSave] Save failed', e);
            return false;
        }
    },

    async load(userId: string): Promise<CloudData | null> {
        try {
            const res = await fetch(`/api/sync?userId=${userId}`);
            if (!res.ok) return null;
            const data = await res.json();
            return data;
        } catch (e) {
            console.warn('[CloudSave] Load failed', e);
            return null;
        }
    },

    shouldSync(lastSyncTime: number): boolean {
        return Date.now() - lastSyncTime > SYNC_INTERVAL_MS;
    }
};
