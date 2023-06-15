import { Menu as MenuIcon } from 'assets/icons';
import styles from '@styles/components/Buttons.module.css';

export function Menu({ onClick }: { onClick: () => void }) {
  return (
    <button
      className={`${styles.Button} ${styles.SpecialButton}`}
      onClick={onClick}
    >
      <MenuIcon />
    </button>
  );
}
