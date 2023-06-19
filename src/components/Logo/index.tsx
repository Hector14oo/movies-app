import { PopCorn } from 'assets/icons';
import styles from '@styles/components/Logo.module.css';

export function Logo() {
  return (
    <span className={styles.Logo}>
      {'<'}
      <PopCorn
        width={36}
        height={36}
      />
      {'/>'}
    </span>
  );
}
