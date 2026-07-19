import { useEffect, useState } from 'react';
import { getUserRooms } from '../api/habboApi';
import { useHabboUser } from './useHabboUser';

export function useHabboRooms(nick) {
  const { status: userStatus, user } = useHabboUser(nick);
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    if (userStatus !== 'ready' || !user) return;

    let cancelled = false;
    getUserRooms(user.uniqueId)
      .then((data) => {
        if (!cancelled) setRooms([...(data ?? [])].sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0)));
      })
      .catch(() => {
        if (!cancelled) setRooms([]);
      });

    return () => {
      cancelled = true;
    };
  }, [userStatus, user]);

  if (userStatus === 'error') return { status: 'error', rooms: [] };
  if (userStatus === 'loading' || rooms === null) return { status: 'loading', rooms: [] };
  return { status: 'ready', rooms };
}
