import { useEffect, useState } from 'react';
import { searchUserByName } from '../api/habboApi';

export function useHabboUser(nick) {
  const [state, setState] = useState({ status: 'loading', user: null });

  useEffect(() => {
    let cancelled = false;
    setState({ status: 'loading', user: null });

    searchUserByName(nick)
      .then((user) => {
        if (!cancelled) setState({ status: 'ready', user });
      })
      .catch(() => {
        if (!cancelled) setState({ status: 'error', user: null });
      });

    return () => {
      cancelled = true;
    };
  }, [nick]);

  return state;
}
