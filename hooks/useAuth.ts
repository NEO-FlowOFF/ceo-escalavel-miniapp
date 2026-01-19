
import { useState, useEffect } from 'react';
import { UserProfile, GameState } from '../types';

export const useAuth = () => {
  const [user, setUser] = useState<UserProfile | null>(null);
  const [loading, setLoading] = useState(true);
  const [initialData, setInitialData] = useState<Partial<GameState> | null>(null);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;

    const loadState = (userId: string | number) => {
      // Tentar carregar do CloudStorage do Telegram primeiro
      if (tg?.cloudStorage) {
        tg.cloudStorage.getItem('ceo_game_state', (err: any, value: string) => {
          if (!err && value) {
            try {
              setInitialData(JSON.parse(value));
            } catch (e) {
              console.error("CloudStorage Parse Error", e);
            }
          }
          setLoading(false);
        });
      } else {
        // Fallback LocalStorage
        const saved = localStorage.getItem(`ceo_state_${userId}`);
        if (saved) {
          try {
            setInitialData(JSON.parse(saved));
          } catch (e) {}
        }
        setLoading(false);
      }
    };

    if (tg && tg.initDataUnsafe?.user) {
      const tgUser = tg.initDataUnsafe.user;
      const profile: UserProfile = {
        id: tgUser.id,
        name: tgUser.first_name || 'Operador',
        username: tgUser.username,
        type: 'telegram'
      };
      setUser(profile);
      tg.expand();
      tg.ready();
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
