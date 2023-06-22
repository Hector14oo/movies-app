import { MouseEventHandler } from 'react';
import { CloseSvg } from 'assets/icons';

import styles from '@styles/components/Buttons.module.css';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Close({ onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.Button} ${styles.MenuButton}`}
      onClick={onClick}
    >
      <CloseSvg
        width={36}
        height={36}
      />
    </button>
  );
}
