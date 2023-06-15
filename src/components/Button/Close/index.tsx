import { X } from 'assets/icons';
import styles from '@styles/components/Buttons.module.css';

export function Close({ onClick }: { onClick: () => void }) {
  return (
    <button
      className={`${styles.Button} ${styles.MenuButton}`}
      onClick={onClick}
    >
      <i>
        <X />
      </i>
    </button>
  );
}
