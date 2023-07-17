import { MouseEventHandler } from 'react';
import { GoogleSvg } from 'assets/icons';

import styles from '@styles/components/Buttons.module.css';

interface ButtonProps {
  onClick: MouseEventHandler<HTMLButtonElement>;
}

export function Google({ onClick }: ButtonProps) {
  return (
    <button
      className={styles.Google}
      onClick={onClick}
    >
      <i>
        <GoogleSvg />
      </i>
      Login With Google
    </button>
  );
}
