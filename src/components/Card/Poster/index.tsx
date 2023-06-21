'use client';

import { SyntheticEvent, useState } from 'react';
import Link from 'next/link';

import { PosterProps } from '@interfaces';
import { ButtonFavorite, Rank } from '@components';
import styles from '@styles/components/Cards.module.css';

export function Poster(props: PosterProps) {
  const { id, title, date, votes, overview, poster, cssVar } = props;
  const [favorite, setFavorite] = useState(false);

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFavorite(!favorite);
  };

  let img = `https://image.tmdb.org/t/p/original${poster}`;

  if (poster === null || poster === undefined)
    img = 'assets/Images/BrokenImage.png';

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
            toggleFav={(e: SyntheticEvent<HTMLButtonElement>) => handleClick(e)}
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
