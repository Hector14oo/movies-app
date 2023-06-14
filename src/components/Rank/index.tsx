import styles from '@styles/components/Rank.module.css';

export function Rank({ votes }: { votes: string }) {
  let color = 'var(--BAD)';
  if (parseInt(votes) > +4) color = 'var(--MEH)';
  if (parseInt(votes) >= 7) color = 'var(--GOOD)';
  return (
    <span
      className={styles.Span}
      style={{ backgroundColor: color }}
    >
      {votes}
    </span>
  );
}
