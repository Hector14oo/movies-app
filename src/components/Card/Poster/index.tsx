'use client';

import { SyntheticEvent, useState } from 'react';
import Link from 'next/link';

import { PosterProps } from '@interfaces';
import { ButtonFavorite, Rank } from '@components';
import styles from '@styles/components/Cards.module.css';

export function Poster(props: PosterProps) {
  const { id, title, date, votes, overview, poster, className } = props;
  const [favorite, setFavorite] = useState(false);

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setFavorite(!favorite);
  };

  let imgCover = poster
    ? `https://image.tmdb.org/t/p/original${poster}`
    : 'assets/Images/BrokenImage.png';

  return (
    <Link
      href={`/movie-details/${id}`}
      className={`${styles.Card} ${className}`}
      style={{background: `var(--GRADIENT), url(${imgCover}) no-repeat center/cover`}}
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
