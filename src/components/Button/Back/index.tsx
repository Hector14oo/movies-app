'use client';

import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'assets/icons';
import styles from '@styles/components/Buttons.module.css';
import { SyntheticEvent } from 'react';

export function Back({
  handleClick,
}: {
  handleClick?: (e: SyntheticEvent) => void;
}) {
  const { back } = useRouter();
  return (
    <button
      className={`${styles.Button} ${styles.SpecialButton}`}
      onClick={handleClick ?? back}
    >
      <ArrowLeft
        width={16}
        height={18}
      />
    </button>
  );
}
