import { ArtistProps } from '@interfaces';
import styles from '@styles/components/Cards.module.css';

export function Artist({
  name,
  character,
  picture,
}: ArtistProps) {
  let imgCover = picture
    ? `https://image.tmdb.org/t/p/original${picture}`
    : '/assets/Images/BrokenImage.png';

  return (
    <article className={styles.ArtistCard} style={{background: `var(--GRADIENT), url(${imgCover}) no-repeat center/cover`}}>
      <main>
        <h2>{name}</h2>
        <p>{character}</p>
      </main>
    </article>
  );
}
