import { Play } from 'assets/icons';

import styles from '@styles/components/Cards.module.css';

export function Trailer({ title }: { title: string }) {
  return (
    <article className={styles.TrailerCard}>
      <Play />
      <h2>{title} - Official Trailer</h2>
    </article>
  );
}
