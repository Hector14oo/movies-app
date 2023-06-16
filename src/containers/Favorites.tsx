'use client';

import { ButtonLink, CardPoster } from '@components';
import { useSessionContext } from '@context/SessionContext';
import { Empty, Login } from 'assets/figures';
import styles from '@styles/containers/Favorites.module.css';

export function Favorites() {
  const { loged } = useSessionContext();
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (!loged)
    return (
      <main className={styles.Favorites}>
        <Login />
        <h1>Please login to add your favorite movies to this section</h1>
        <ButtonLink
          href={'/account/login'}
          text='Login'
        />
      </main>
    );

  if (loged && !array.length)
    return (
      <main className={styles.Favorites}>
        <Empty />
        <h1>This section is empty, go and add some movies!</h1>
      </main>
    );

  return (
    <main className={styles.FavoritesFilled}>
      {array.map((_, i) => (
        <CardPoster
          key={i}
          id={i}
          title='Super Mario Bros'
          date='Apr 05, 2023'
          votes='6.2'
        />
      ))}
    </main>
  );
}
