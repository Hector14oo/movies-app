import styles from '@styles/components/Inputs.module.css';

export function Code({ placeholder }: { placeholder: 'Enter the Code' }) {
  return (
    <label
      htmlFor={placeholder}
      className={styles.FormInput}
    >
      <input
        type='number'
        id={placeholder}
        name='code'
        placeholder={placeholder}
        required
      />
    </label>
  );
}
