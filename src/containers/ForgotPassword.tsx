'use client';

import { MouseEvent } from 'react';
import { ButtonNormal, InputEmail } from '@components';
import { ForgotPassword as ForgotPasswordFigure } from 'assets/figures';

import styles from '@styles/containers/ForgotPassword.module.css';

export function ForgotPassword() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Email sent');
  };

  return (
    <main className={styles.ForgotPassword}>
      <ForgotPasswordFigure />
      <form action=''>
        <h1>Password Recovery</h1>
        <InputEmail placeholder='Email' />
        <ButtonNormal
          text='Submit'
          onClick={handleClick}
        />
      </form>
    </main>
  );
}
