'use client';

import {
  createContext,
  useContext,
  useState,
  Dispatch,
  ReactNode,
  SetStateAction,
} from 'react';

export type ContextProps = {
  trending: Array<Object>;
  setTrending: Dispatch<SetStateAction<Array<Object>>>;
};

export const TrendingContext = createContext<ContextProps>({
  trending: [],
  setTrending: () => {},
});

export const TrendingProvider = ({ children }: { children: ReactNode }) => {
  const [trending, setTrending] = useState<Array<Object>>([]);
  return (
    <TrendingContext.Provider
      value={{ trending: trending, setTrending: setTrending }}
    >
      {children}
    </TrendingContext.Provider>
  );
};

export const useSessionContext = () => useContext(TrendingContext);
