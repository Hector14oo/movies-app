import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'assets/icons';
import styles from '@styles/components/Buttons.module.css';

export function Back() {
  const { back } = useRouter();
  return (
    <button
      className={`${styles.Button} ${styles.SpecialButton}`}
      onClick={back}
    >
      <i>
        <ArrowLeft />
      </i>
    </button>
  );
}
