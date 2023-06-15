import { HeartFill, HeartOutLine } from 'assets/icons';

import styles from '@styles/components/Buttons.module.css';

export function Favorite({
  isFav,
  toggleFav,
}: {
  isFav: boolean;
  toggleFav: () => void;
}) {
  return (
    <button
      className={`${styles.Button} ${styles.SpecialButton}`}
      onClick={toggleFav}
    >
      {isFav ? <HeartFill /> : <HeartOutLine />}
    </button>
  );
}
