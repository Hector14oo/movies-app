'use client';
import { MouseEvent, useState } from 'react';
import { ButtonNormal, InputEmail, InputPassword } from '@components';
import { Login as LoginFigure } from 'assets/figures';
import Link from 'next/link';

import styles from '@styles/containers/Login.module.css';

export function Login() {
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
      <LoginFigure />
      <form action=''>
        <h1>Login</h1>
        <InputEmail placeholder='Email' />
        <InputPassword
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Password'
        />
        <Link href={'/account/forgot-password'}>Forgot Password?</Link>
        <ButtonNormal
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
