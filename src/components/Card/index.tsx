'use client';

import { useState } from 'react';
import { Play } from 'assets/icons';
import { Button, Rank } from '@components';
import styles from '@styles/components/Cards.module.css';
import Link from 'next/link';

interface CardProps {
  rank?: string;
  title?: string;
  date?: string;
  type: 'POSTER' | 'TRAILER';
  newStyles?: object;
  id?: number;
}

export function Card({
  rank = '7.0',
  title = 'Super Mario Bros',
  date = 'Apr 05, 2023',
  type,
  newStyles,
  id,
}: CardProps) {
  const [fav, setFav] = useState(false);
  if (type === 'POSTER')
    return (
      <Link href={`/movie-details/${id}`}>
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
      </Link>
    );

  return (
    <article className={styles.TrailerCard}>
      <Play />
      <h2>{title} - Official Trailer</h2>
    </article>
  );
}
