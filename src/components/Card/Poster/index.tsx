'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ButtonFavorite, Rank } from '@components';
import styles from '@styles/components/Cards.module.css';

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
  cssVar?: object;
}) {
  const [favorite, setFavorite] = useState(false);
  return (
    <Link
      href={`/movie-details/${id}`}
      className={styles.Card}
      style={cssVar}
    >
      <article>
        <header>
          <ButtonFavorite
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
