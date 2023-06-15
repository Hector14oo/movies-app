import styles from '@styles/components/Buttons.module.css';
import { ArrowLeft } from 'assets/icons';

export function Back({ onClick }: { onClick: () => void }) {
  return (
    <button
      className={`${styles.Button} ${styles.SpecialButton}`}
      onClick={onClick}
    >
      <i>
        <ArrowLeft />
      </i>
    </button>
  );
}
