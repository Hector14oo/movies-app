'use client'

import { useState } from 'react';
import Link from 'next/link';

import { Button_Favorite, Rank } from '@components';
import styles from '@styles/components/Buttons.module.css';

export function Poster({
  id,
  title,
  date,
  votes,
  cssVar,
}: {
  id: number;
  title: string;
  date: string;
  votes: string;
  cssVar: object;
}) {
  const [favorite, setFavorite] = useState(false);
  return (
    <Link href={`/movie-details/${id}`}>
      <article
        className={styles.Card}
        style={cssVar}
      >
        <header>
          <Button_Favorite
            isFav={favorite}
            toggleFav={() => setFavorite(!favorite)}
          />
          <Rank votes={votes} />
        </header>
        <footer>
          <h2>{title}</h2>
          <p>{date}</p>
        </footer>
      </article>
    </Link>
  );
}
