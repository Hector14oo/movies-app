'use client';

import { MouseEventHandler } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowLeft } from 'assets/icons';

import styles from '@styles/components/Buttons.module.css';

interface ButtonProps {
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export function Back({ onClick }: ButtonProps) {
  const { back } = useRouter();
  return (
    <button
      className={`${styles.Button} ${styles.SpecialButton}`}
      onClick={onClick ?? back}
    >
      <ArrowLeft
        width={16}
        height={18}
      />
    </button>
  );
}
