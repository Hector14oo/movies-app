import styles from '@styles/components/Buttons.module.css';

export function Artist({
  name,
  character,
}: {
  name: string;
  character: string;
}) {
  return (
    <article className={styles.Card}>
      <main>
        <h2>{name}</h2>
        <p>{character}</p>
      </main>
    </article>
  );
}
