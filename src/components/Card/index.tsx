'use client';

import { useState } from 'react';
import { Play } from 'assets/icons';
import { Button, Rank } from '@components';
import styles from '@styles/components/Cards.module.css';

interface CardProps {
  rank?: string;
  title?: string;
  date?: string;
  type: 'POSTER' | 'TRAILER';
  newStyles?: object;
}

export function Card({
  rank = '7.0',
  title = 'Super Mario Bros',
  date = 'Apr 05, 2023',
  type,
  newStyles,
}: CardProps) {
  const [fav, setFav] = useState(false);
  if (type === 'POSTER')
    return (
      <article
        className={styles.Card}
        style={newStyles}
      >
        <header>
          <Button
            isFav={fav}
            handler={() => setFav(!fav)}
            type='FAV'
          />
          <Rank votes={rank} />
        </header>
        <footer>
          <h2>{title}</h2>
          <p>{date}</p>
        </footer>
      </article>
    );

  return (
    <article className={styles.TrailerCard}>
      <Play />
      <h2>{title} - Official Trailer</h2>
    </article>
  );
}
