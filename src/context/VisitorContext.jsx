import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { searchUserByName, getUserProfile, HabboApiError } from '../api/habboApi';
import { site } from '../data/site';

const STORAGE_KEY = 'wiredhouse_visitor_nick';

const VisitorContext = createContext(null);

export function VisitorProvider({ children }) {
  const [player, setPlayer] = useState(null);
  const [isGroupMember, setIsGroupMember] = useState(null);
  const [status, setStatus] = useState('idle'); // idle | loading | found | notfound | error

  const connect = useCallback(async (nick) => {
    setStatus('loading');
    try {
      const basicUser = await searchUserByName(nick);
      setPlayer(basicUser);
      localStorage.setItem(STORAGE_KEY, basicUser.name);

      if (basicUser.profileVisible) {
        try {
          const profile = await getUserProfile(basicUser.uniqueId);
          const groups = profile.groups ?? [];
          setIsGroupMember(groups.some((group) => group.id === site.habboGroup.id));
        } catch {
          setIsGroupMember(null);
        }
      } else {
        setIsGroupMember(null);
      }

      setStatus('found');
    } catch (err) {
      setPlayer(null);
      setIsGroupMember(null);
      setStatus(err instanceof HabboApiError && err.notFound ? 'notfound' : 'error');
    }
  }, []);

  const disconnect = useCallback(() => {
    localStorage.removeItem(STORAGE_KEY);
    setPlayer(null);
    setIsGroupMember(null);
    setStatus('idle');
  }, []);

  useEffect(() => {
    const savedNick = localStorage.getItem(STORAGE_KEY);
    if (savedNick) connect(savedNick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <VisitorContext.Provider value={{ player, status, isGroupMember, connect, disconnect }}>
      {children}
    </VisitorContext.Provider>
  );
}

export function useVisitor() {
  const ctx = useContext(VisitorContext);
  if (!ctx) throw new Error('useVisitor must be used within a VisitorProvider');
  return ctx;
}
