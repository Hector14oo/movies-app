'use client';

import { useState, useEffect, useRef } from 'react';

import styles from '@styles/components/LoadingModal.module.css';

export function LoadingModal({ dependency }: any) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) return;
    const { current } = ref;

    current.style.transition = 'none';
    current.style.transform = 'translateX(100%)';

    setTimeout(() => {
      current.style.transitionProperty = 'transform, background-color';
      current.style.transitionDuration = '1s';
      current.style.transitionTimingFunction = 'var(--TRANSITION-1)';
      current.style.transform = 'translateX(0%)';
    }, 30);

    setTimeout(() => {
      current.style.backgroundColor = 'var(--C2)';
    }, 1000);

    setTimeout(() => {
      current.style.backgroundColor = 'var(--C1)';
    }, 2000);

    setTimeout(() => {
      current.style.transform = 'translateX(-100%)';
    }, 3000);
  }, [dependency]);

  return (
    <div
      ref={ref}
      className={styles.LoadingModal}
    />
  );
}
