'use client';

import { MovieType } from '@interfaces';
import { useSession } from '@hooks/useSession';
import { useFavoritesContext } from '@context/FavoritesContext';

import { ButtonLink, CardPoster } from '@components';
import { EmptyFigure, LoginFigure } from 'assets/figures';

import styles from '@styles/containers/Favorites.module.css';

export function Favorites() {
  const { user } = useSession();
  const { favList } = useFavoritesContext();

  if (!user) {
    return (
      <main className={styles.Favorites}>
        <LoginFigure />
        <h1>Please login to add your favorite movies to this section</h1>
        <ButtonLink
          href={'/login'}
          text='Login'
        />
      </main>
    );
  }

  if (user && !favList.length) {
    return (
      <main className={styles.Favorites}>
        <EmptyFigure />
        <h1>This section is empty, go and add some movies!</h1>
      </main>
    );
  }

  return (
    <main className={styles.FavoritesFilled}>
      {favList.map(({ id, title, date, votes, poster }: MovieType) => (
        <CardPoster
          key={id}
          id={id}
          title={title}
          date={date}
          votes={votes}
          poster={poster}
        />
      ))}
    </main>
  );
}
