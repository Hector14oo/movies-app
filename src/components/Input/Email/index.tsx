import { AtSvg } from 'assets/icons';
import styles from '@styles/components/Inputs.module.css';

export function Email({
  placeholder,
}: {
  placeholder: 'Email' | 'Confirm Email';
}) {
  return (
    <label
      htmlFor={placeholder}
      className={styles.FormInput}
    >
      <i>
        <AtSvg />
      </i>
      <input
        type='email'
        id={placeholder}
        placeholder={placeholder}
        required
      />
    </label>
  );
}
