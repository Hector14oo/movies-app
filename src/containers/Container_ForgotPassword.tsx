'use client';

import { MouseEvent } from 'react';
import { Button_Normal, Input_Email } from '@components';
import { ForgotPassword } from 'assets/figures';

import styles from '@styles/containers/ForgotPassword.module.css';

export function Container_ForgotPassword() {
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Email sent');
  };

  return (
    <main className={styles.ForgotPassword}>
      <ForgotPassword />
      <form action=''>
        <h1>Password Recovery</h1>
        <Input_Email placeholder='Email' />
        <Button_Normal
          text='Submit'
          onClick={handleClick}
        />
      </form>
    </main>
  );
}
