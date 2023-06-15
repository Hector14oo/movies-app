import { ChangeEvent } from 'react';
import { Glass } from 'assets/icons';

import styles from '@styles/components/Inputs.module.css';

export function Searcher({
  onChange,
  value,
}: {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  return (
    <label
      htmlFor='search'
      className={styles.Searcher}
    >
      <i>
        <Glass />
      </i>
      <input
        id='search'
        type='text'
        placeholder='Movie Name'
        onChange={onChange}
        value={value}
      />
    </label>
  );
}
