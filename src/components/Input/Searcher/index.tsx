import { ChangeEvent } from 'react';
import { Glass, X } from 'assets/icons';

import styles from '@styles/components/Inputs.module.css';

interface SearcherType {
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
  reset: () => void;
}

export function Searcher({ onChange, value, reset }: SearcherType) {
  return (
    <label
      htmlFor='search'
      className={styles.Searcher}
    >
      <Glass
        width={26}
        height={26}
      />
      <input
        id='search'
        type='text'
        placeholder='Movie Name'
        onChange={onChange}
        value={value}
      />

      <button
        onClick={reset}
        style={{ opacity: `${value.length ? 1 : 0}` }}
      >
        <X
          width={16}
          height={16}
        />
      </button>
    </label>
  );
}
