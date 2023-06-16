import { MouseEventHandler } from 'react';
import { Menu as MenuIcon } from 'assets/icons';

import styles from '@styles/components/Buttons.module.css';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Menu({ onClick }: ButtonProps) {
  return (
    <button
      className={`${styles.Button} ${styles.SpecialButton}`}
      onClick={onClick}
    >
      <MenuIcon
        width={16}
        height={16}
      />
    </button>
  );
}
