import { PadLockSvg, BlindEyeSvg, EyeSvg } from 'assets/icons';
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
        <PadLockSvg  width={20} height={25}/>
      </i>
      <input
        type={isBlind ? 'text' : 'password'}
        id={placeholder}
        placeholder={placeholder}
        required
      />
      <i onClick={toggleBlind}>{isBlind ? <BlindEyeSvg width={20} height={20} /> : <EyeSvg width={20} height={20} />}</i>
    </label>
  );
}
