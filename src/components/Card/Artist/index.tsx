import styles from '@styles/components/Cards.module.css';

export function Artist({
  name,
  character,
}: {
  name: string;
  character: string;
}) {
  return (
    <article className={styles.ArtistCard}>
      <main>
        <h2>{name}</h2>
        <p>{character}</p>
      </main>
    </article>
  );
}
