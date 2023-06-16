import styles from '@styles/components/Buttons.module.css';
import { MouseEventHandler } from 'react';

export function Normal({
  onClick,
  text,
}: {
  onClick: MouseEventHandler<HTMLButtonElement> | (() => void);
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
