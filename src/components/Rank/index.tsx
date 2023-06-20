import styles from '@styles/components/Rank.module.css';

export function Rank({ votes }: { votes: number }) {
  let color = 'var(--BAD)';
  if (votes > +4) color = 'var(--MEH)';
  if (votes >= 7) color = 'var(--GOOD)';
  return (
    <span
      className={styles.Span}
      style={{ backgroundColor: color }}
    >
      {votes}
    </span>
  );
}
