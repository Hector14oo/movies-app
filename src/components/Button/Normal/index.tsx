import styles from '@styles/components/Buttons.module.css';

export function Normal({
  onClick,
  text,
}: {
  onClick: () => void;
  text: string;
}) {
  return (
    <button
      className={`${styles.Button}`}
      onClick={onClick}
      style={text === 'Log Out' ? { backgroundColor: 'var(--BAD)' } : {}}
    >
      {text}
    </button>
  );
}
