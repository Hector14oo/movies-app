import { MouseEventHandler } from 'react';

import styles from '@styles/components/Buttons.module.css';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
  text: string;
}

export function Normal({ onClick, text }: ButtonProps) {
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
