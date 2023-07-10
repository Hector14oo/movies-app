'use client';

import { useState, useEffect } from 'react';
import { useSessionContext } from '@context/SessionContext';

import { getFavs, updateFav } from '@firebase/client';
import { MovieType, userType } from '@interfaces';

export function useFavorites() {
  const { user } = useSessionContext();
  const [favList, setFavList] = useState<Array<MovieType>>([]);

  //GET FAVS

  useEffect(() => {
    const get = async () => {
      if (!user) return;

      try {
        const response = await getFavs(user.id);
        if (response) setFavList(response.favorites);
      } catch (error) {
        return console.error(error);
      }
    };

    get();
  }, [user, setFavList]);

  //SET FAV

  const setFavorite = async (movie: MovieType) => {
    if (!user) return;

    try {
      const response = await getFavs(user.id);
      if (response) {
        response.favorites.push(movie);

        updateFav(response as userType);
        setFavList(response.favorites);
      }
    } catch (error) {
      return console.error(error);
    }
  };

  //DELETE FAV

  const delFavorite = async (movie: MovieType) => {
    if (!user) return;

    try {
      const response = await getFavs(user.id);
      if (response) {
        response.favorites = response.favorites.filter(
          (m: MovieType) => m.id !== movie.id
        );

        updateFav(response as userType);
        setFavList(response.favorites);
      }
    } catch (error) {
      return console.error(error);
    }
  };

  return { favList, setFavorite, delFavorite };
}
