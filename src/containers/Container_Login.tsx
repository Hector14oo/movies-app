'use client';
import Link from 'next/link';
import { Button, Input } from '@components';
import { Login } from 'assets/figures';

import styles from '@styles/containers/Login.module.css';

export function Container_Login() {
  const handleClick = () => {
    alert('Login');
  };
  return (
    <main className={styles.Login}>
      <Login
        width={200}
        height={250}
      />
      <form action=''>
        <Input
          type='EMAIL'
          placeholder='Email'
        />
        <Input
          type='PASSWORD'
          placeholder='Password'
        />
        <Link href={'/account/forgot-password'}>Forgot Password?</Link>
        <Button
          type='NORMAL'
          text='Login'
          handler={handleClick}
        />
        <span>
          New here? <Link href={'/account/register'}>Register</Link>
        </span>
      </form>
    </main>
  );
}
