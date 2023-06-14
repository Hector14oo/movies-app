'use client';

import { Button, Card } from '@components';
import { useSessionContext } from '@context/SessionContext';
import { Empty, Login } from 'assets/figures';
import styles from '@styles/containers/Favorites.module.css';

export function Container_Favorites() {
  const { loged } = useSessionContext();
  const array: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  if (!loged)
    return (
      <main className={styles.Favorites}>
        <Login
          width={200}
          height={250}
        />
        <h1>Please login to add your favorite movies to this section</h1>
        <Button
          href={'/login'}
          type='LINK'
          text='Login'
        />
      </main>
    );

  if (loged && !array.length)
    return (
      <main className={styles.Favorites}>
        <Empty
          width={250}
          height={250}
        />
        <h1>This section is empty, go and add some movies!</h1>
      </main>
    );

  return (
    <main className={styles.FavoritesFilled}>
      {array.map((_, i) => (
        <Card
          key={i}
          type='POSTER'
        />
      ))}
    </main>
  );
}
