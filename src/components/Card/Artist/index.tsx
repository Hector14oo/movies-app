import { ArtistProps } from '@interfaces';
import styles from '@styles/components/Cards.module.css';
import Link from 'next/link';

export function Artist({ name, character, picture }: ArtistProps) {
  let imgCover = picture
    ? `https://image.tmdb.org/t/p/original${picture}`
    : '/assets/Images/BrokenImage.png';

  return (
    <Link
      href={`https://www.google.com/search?q=${name}`}
      target='_blank'
    >
      <article
        className={styles.ArtistCard}
        style={{
          background: `var(--GRADIENT), url(${imgCover}) no-repeat center/cover`,
        }}
      >
        <main>
          <h2>{name}</h2>
          <p>{character}</p>
        </main>
      </article>
    </Link>
  );
}
