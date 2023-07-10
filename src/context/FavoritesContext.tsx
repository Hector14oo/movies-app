'use client';

import { useFavorites } from '@hooks/useFavorites';
import { MovieType } from '@interfaces';

import { createContext, useContext, ReactNode } from 'react';

export type ContextProps = {
  favList: Array<MovieType>;
  setFavorite: (movie: MovieType) => void;
  delFavorite: (movie: MovieType) => void;
};

export const FavoritesContext = createContext<ContextProps>({
  favList: [],
  setFavorite: () => {},
  delFavorite: () => {},
});

export const FavoritesProvider = ({ children }: { children: ReactNode }) => {
  const { favList, setFavorite, delFavorite } = useFavorites();

  return (
    <FavoritesContext.Provider value={{ favList, setFavorite, delFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
};

export const useFavoritesContext = () => useContext(FavoritesContext);
