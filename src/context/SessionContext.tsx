'use client';

import { useSession } from '@hooks/useSession';
import { userType } from '@interfaces';

import { createContext, useContext, ReactNode } from 'react';

export type ContextProps = {
  user?: userType;
  logOut: () => void;
};

export const SessionContext = createContext<ContextProps>({
  user: undefined,
  logOut: () => {},
});

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const { user, logOut } = useSession();

  return (
    <SessionContext.Provider value={{ user, logOut }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
