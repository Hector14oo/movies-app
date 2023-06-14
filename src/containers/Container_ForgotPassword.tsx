'use client';

import { Button, Input } from '@components';
import { ForgotPassword } from 'assets/figures';

import styles from '@styles/containers/ForgotPassword.module.css';

export function Container_ForgotPassword() {
  const handleClick = (e: Event) => {
    e.preventDefault();
    alert('Email sent');
  };
  return (
    <main className={styles.ForgotPassword}>
      <ForgotPassword
        width={200}
        height={250}
      />
      <form action=''>
        <h1>Password Recovery</h1>
        <Input
          type='EMAIL'
          placeholder='Email'
        />
        <Button
          type='NORMAL'
          text='Submit'
          handler={handleClick}
        />
      </form>
    </main>
  );
}
