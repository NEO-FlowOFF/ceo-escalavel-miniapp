import { useState, useEffect } from 'react';
import { UserProfile, GameState } from '../types';
import telegram from '../utils/telegramUtils';
import { FORCE_RESET_VERSION } from '../constants';
import { createFreshGameState, saveFreshState } from '../utils/resetUserData';

export const useAuth = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<Partial<GameState> | null>(null);

  useEffect(() => {
    const parseState = (value: string): Partial<GameState> | null => {
      try {
        return JSON.parse(value);
      } catch (error) {
        console.error('Erro ao dar parse no estado salvo:', error);
        return null;
      }
    };

    const shouldForceReset = (state: Partial<GameState> | null): boolean => {
      if (!state) return false;
      const version = Number((state as GameState).meta?.state_version ?? 0);
      return version < FORCE_RESET_VERSION;
    };

    const loadState = async (profile: UserProfile) => {
      const userId = profile.id;
      const cloudKey = `ceo_state_${userId}`;

      try {
        const value = await telegram.cloudStorage.getItem(cloudKey);
        let parsed: Partial<GameState> | null = null;

        if (value) {
          parsed = parseState(value);
        } else {
          const localSaved = localStorage.getItem(cloudKey);
          if (localSaved) parsed = parseState(localSaved);
        }

        if (shouldForceReset(parsed)) {
          console.warn(`[StateMigration] Reset forçado aplicado para ${userId}. versão alvo=${FORCE_RESET_VERSION}`);
          const freshState = createFreshGameState(profile);
          setInitialData(freshState);
          await saveFreshState(userId, profile);
        } else if (parsed) {
          setInitialData(parsed);
        } else {
          const freshState = createFreshGameState(profile);
          setInitialData(freshState);
          await saveFreshState(userId, profile);
        }
      } catch (e) {
        console.warn('CloudStorage não disponível, tentando LocalStorage:', e);
        const localSaved = localStorage.getItem(cloudKey);
        const parsed = localSaved ? parseState(localSaved) : null;

        if (shouldForceReset(parsed)) {
          const freshState = createFreshGameState(profile);
          setInitialData(freshState);
          await saveFreshState(userId, profile);
        } else if (parsed) {
          setInitialData(parsed);
        } else {
          const freshState = createFreshGameState(profile);
          setInitialData(freshState);
          await saveFreshState(userId, profile);
        }
      } finally {
        setLoading(false);
      }
    };

    const tgUser = telegram.getUser();

    if (tgUser) {
      const profile: UserProfile = {
        id: tgUser.id,
        name: tgUser.first_name || 'Operador',
        username: tgUser.username,
        type: 'telegram'
      };
      setUser(profile);
      telegram.expand();
      telegram.ready();
      telegram.enableClosingConfirmation();
      loadState(profile);
    } else {
      const savedId = localStorage.getItem('ceo_visitor_id') || `v_${Math.random().toString(36).substring(2, 9)}`;
      const savedName = localStorage.getItem('ceo_visitor_name') || `Visitante #${Math.floor(Math.random() * 9000) + 1000}`;

      localStorage.setItem('ceo_visitor_id', savedId);
      localStorage.setItem('ceo_visitor_name', savedName);

      const profile: UserProfile = { id: savedId, name: savedName, type: 'visitor' };
      setUser(profile);
      loadState(profile);
    }
  }, []);

  return { user, loading, initialData };
};
