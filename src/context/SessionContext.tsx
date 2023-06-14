'use client';

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';

export type ContextProps = {
  loged: boolean;
  setLoged: Dispatch<SetStateAction<boolean>>;
};

export const SessionContext = createContext<ContextProps>({
  loged: false,
  setLoged: () => {},
});

export const SessionProvider = ({ children }: { children: ReactNode }) => {
  const [session, setSession] = useState(false);
  return (
    <SessionContext.Provider value={{ loged: session, setLoged: setSession }}>
      {children}
    </SessionContext.Provider>
  );
};

export const useSessionContext = () => useContext(SessionContext);
