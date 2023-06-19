import { MouseEventHandler } from 'react';
import { HeartFill, HeartOutLine } from 'assets/icons';

import styles from '@styles/components/Buttons.module.css';

interface ButtonProps {
  isFav: boolean;
  toggleFav: MouseEventHandler<HTMLButtonElement>;
}

export function Favorite({ isFav, toggleFav }: ButtonProps) {
  return (
    <button
      className={`${styles.Button} ${styles.SpecialButton}`}
      onClick={toggleFav}
    >
      {isFav ? (
        <HeartFill
          width={16}
          height={16}
        />
      ) : (
        <HeartOutLine
          width={16}
          height={16}
        />
      )}
    </button>
  );
}
