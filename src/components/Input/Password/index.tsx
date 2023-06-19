import { PadLock, BlindEye, Eye } from 'assets/icons';
import styles from '@styles/components/Inputs.module.css';

export function Password({
  placeholder,
  isBlind,
  toggleBlind,
}: {
  placeholder:
    | 'Password'
    | 'Confirm Password'
    | 'New Password'
    | 'Confirm New Password';
  isBlind: boolean;
  toggleBlind: () => void;
}) {
  return (
    <label
      htmlFor={placeholder}
      className={styles.FormInput}
    >
      <i>
        <PadLock />
      </i>
      <input
        type={isBlind ? 'text' : 'password'}
        id={placeholder}
        placeholder={placeholder}
      />
      <i onClick={toggleBlind}>{isBlind ? <BlindEye /> : <Eye />}</i>
    </label>
  );
}
