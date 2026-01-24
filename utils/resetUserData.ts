
import telegram from './telegramUtils';
import { INITIAL_GAME_STATE } from '../constants';
import { GameState } from '../types';

/**
 * Reseta completamente os dados do usuário
 * Limpa CloudStorage do Telegram e LocalStorage
 */
export const resetUserData = async (userId: string | number): Promise<boolean> => {
  try {
    const key = `ceo_state_${userId}`;
    
    // Limpa CloudStorage do Telegram
    try {
      await telegram.cloudStorage.removeItem(key);
    } catch (e) {
      console.warn('Erro ao limpar CloudStorage:', e);
    }

    // Limpa LocalStorage
    try {
      localStorage.removeItem(key);
      localStorage.removeItem('ceo_game_state');
      localStorage.removeItem('ceo_streak');
      localStorage.removeItem('ceo_daily_tasks');
      localStorage.removeItem('ceo_task_date');
    } catch (e) {
      console.warn('Erro ao limpar LocalStorage:', e);
    }

    return true;
  } catch (error) {
    console.error('Erro ao resetar dados do usuário:', error);
    return false;
  }
};

/**
 * Reseta o estado do jogo para o estado inicial, mantendo apenas o usuário
 */
export const createFreshGameState = (user?: { id: string | number; name?: string; username?: string; type?: 'telegram' | 'visitor' }): GameState => {
  return {
    ...INITIAL_GAME_STATE,
    meta: {
      ...INITIAL_GAME_STATE.meta,
      user: user ? {
        id: user.id,
        name: user.name || 'Operador',
        username: user.username,
        type: user.type || 'telegram'
      } : undefined,
      start_time: Date.now()
    }
  };
};

/**
 * Salva um estado limpo para o usuário
 */
export const saveFreshState = async (userId: string | number, user?: { id: string | number; name?: string; username?: string; type?: 'telegram' | 'visitor' }): Promise<boolean> => {
  try {
    const freshState = createFreshGameState(user);
    const key = `ceo_state_${userId}`;
    const data = JSON.stringify(freshState);

    // Salva no CloudStorage
    try {
      await telegram.cloudStorage.setItem(key, data);
    } catch (e) {
      console.warn('Erro ao salvar no CloudStorage:', e);
    }

    // Salva no LocalStorage como backup
    try {
      localStorage.setItem(key, data);
      localStorage.setItem('ceo_game_state', data);
    } catch (e) {
      console.warn('Erro ao salvar no LocalStorage:', e);
    }

    return true;
  } catch (error) {
    console.error('Erro ao salvar estado limpo:', error);
    return false;
  }
};
