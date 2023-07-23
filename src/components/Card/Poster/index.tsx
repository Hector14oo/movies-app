'use client';

import { SyntheticEvent, useEffect, useState } from 'react';
import { useFavoritesContext } from '@context/FavoritesContext';
import { useSessionContext } from '@context/SessionContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

import { PosterProps } from '@interfaces';
import { ButtonFavorite, Rank } from '@components';

import styles from '@styles/components/Cards.module.css';

export function Poster(props: PosterProps) {
  const { id, title, date, votes, poster, className } = props;

  const { user } = useSessionContext();
  const { push } = useRouter();
  const { favList, setFavorite, delFavorite } = useFavoritesContext();
  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    setIsFav(favList.some((movie) => movie.id === id));
  }, [favList, id]);

  const handleClick = (e: SyntheticEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (!user) return push('/login');

    if (!isFav) setFavorite(props);
    if (isFav) delFavorite(props);
  };

  let imgCover = poster
    ? `https://image.tmdb.org/t/p/original${poster}`
    : 'assets/Images/BrokenImage.png';

  return (
    <Link
      href={`/movie-details/${id}`}
      className={`${styles.Card} ${className}`}
      style={{
        background: `var(--GRADIENT), url(${imgCover}) no-repeat center/cover`,
      }}
    >
      <article>
        <header>
          <ButtonFavorite
            isFav={isFav}
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
