import { MouseEventHandler } from 'react';
import { MenuSvg } from 'assets/icons';

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
      <MenuSvg
        width={16}
        height={16}
      />
    </button>
  );
}
