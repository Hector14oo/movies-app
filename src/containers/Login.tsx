'use client';

import Link from 'next/link';

import { MouseEvent, useEffect, useState } from 'react';
import { ButtonNormal, InputEmail, InputPassword } from '@components';
import { LoginFigure } from 'assets/figures';

import { useGoogleAuth } from '@hooks/useGoogleAuth';

import styles from '@styles/containers/Login.module.css';

export function Login() {
  const { logInWithGoogle } = useGoogleAuth();
  const [isBlind, setIsBlind] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logInWithGoogle();
  };

  const toggleBlind = () => {
    setIsBlind(!isBlind);
  };
  return (
    <main className={styles.Login}>
      <LoginFigure />
      <form>
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
        <ButtonNormal
          text='Login With Google'
          onClick={handleClick}
        />
      </form>
    </main>
  );
}
