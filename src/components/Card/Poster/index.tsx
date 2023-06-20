'use client';

import { useState } from 'react';
import Link from 'next/link';

import { ButtonFavorite, Rank } from '@components';
import styles from '@styles/components/Cards.module.css';

interface PosterProps {
  id: number;
  title: string;
  date: string;
  votes: number;
  overview: string;
  poster: string;
  cssVar?: object;
}

export function Poster(props: PosterProps) {
  const { id, title, date, votes, overview, poster, cssVar } = props;
  const [favorite, setFavorite] = useState(false);
  let img = `https://image.tmdb.org/t/p/w500${poster}`;

  if (!poster) img = 'assets/Images/BrokenImage.png';

  return (
    <Link
      href={`/movie-details/${id}`}
      className={styles.Card}
      style={{
        background: `var(--GRADIENT), url(${img}) no-repeat center/cover`,
        ...cssVar,
      }}
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
