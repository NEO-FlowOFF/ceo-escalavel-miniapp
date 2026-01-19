import { useState, useEffect } from 'react';
import { UserProfile, GameState } from '../types';
import telegram from '../utils/telegramUtils';

export const useAuth = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<Partial<GameState> | null>(null);

  useEffect(() => {
    const loadState = async (userId: string | number) => {
      try {
        const value = await telegram.cloudStorage.getItem(`ceo_state_${userId}`);
        if (value) {
          setInitialData(JSON.parse(value));
        } else {
          // Fallback para LocalStorage se não houver na nuvem (migração)
          const localSaved = localStorage.getItem(`ceo_state_${userId}`);
          if (localSaved) {
            setInitialData(JSON.parse(localSaved));
          }
        }
      } catch (e) {
        console.error("Erro ao carregar estado:", e);
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
      loadState(tgUser.id);
    } else {
      const savedId = localStorage.getItem('ceo_visitor_id') || `v_${Math.random().toString(36).substring(2, 9)}`;
      const savedName = localStorage.getItem('ceo_visitor_name') || `Visitante #${Math.floor(Math.random() * 9000) + 1000}`;

      localStorage.setItem('ceo_visitor_id', savedId);
      localStorage.setItem('ceo_visitor_name', savedName);

      setUser({ id: savedId, name: savedName, type: 'visitor' });
      loadState(savedId);
    }
  }, []);

  return { user, loading, initialData };
};
