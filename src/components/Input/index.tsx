import { ChangeEvent } from 'react';
import { Glass } from 'assets/icons';
import styles from '@styles/components/Inputs.module.css';

export function InputSearcher({
  handler,
  value,
}: {
  handler: (e: ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) {
  return (
    <div className={styles.Searcher}>
      <Glass width={25} height={25} />
      <div />
      <input
        type='text'
        placeholder='Movie Name'
        onChange={handler}
        value={value}
      />
    </div>
  );
}
