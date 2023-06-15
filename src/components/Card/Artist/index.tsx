import styles from '@styles/components/Buttons.module.css';

export function Artist({
  title, 
  character,
}: {
  title: string;
  character: string;
}) {
  return (
    <article className={styles.Card}>
      <main>
        <h2>{title}</h2>
        <p>{character}</p>
      </main>
    </article>
  );
}
