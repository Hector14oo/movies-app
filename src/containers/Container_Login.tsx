'use client';
import { useState } from 'react';
import { Button, Input } from '@components';
import { Login } from 'assets/figures';
import Link from 'next/link';

import styles from '@styles/containers/Login.module.css';

export function Container_Login() {
  const [blind, setBlind] = useState(false);

  const handleBlind = () => {
    setBlind(!blind);
  };

  const handleClick = (e: Event) => {
    e.preventDefault();
    alert('Login');
  };
  return (
    <main className={styles.Login}>
      <Login
        width={200}
        height={250}
      />
      <form action=''>
        <h1>Login</h1>
        <Input
          type='EMAIL'
          placeholder='Email'
        />
        <Input
          blindState={blind}
          blindHandler={handleBlind}
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
