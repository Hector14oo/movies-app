'use client';
import { MouseEvent, useState } from 'react';
import { Button_Normal, Input_Email, Input_Password } from '@components';
import { Login } from 'assets/figures';
import Link from 'next/link';

import styles from '@styles/containers/Login.module.css';

export function Container_Login() {
  const [isBlind, setIsBlind] = useState(false);

  const toggleBlind = () => {
    setIsBlind(!isBlind);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
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
        <Input_Email placeholder='Email' />
        <Input_Password
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Password'
        />
        <Link href={'/account/forgot-password'}>Forgot Password?</Link>
        <Button_Normal
          text='Login'
          onClick={handleClick}
        />
        <span>
          New here? <Link href={'/account/register'}>Register</Link>
        </span>
      </form>
    </main>
  );
}
