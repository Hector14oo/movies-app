'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import { MouseEvent, useEffect, useState } from 'react';
import {
  ButtonGoogle,
  ButtonNormal,
  InputEmail,
  InputPassword,
} from '@components';
import { LoginFigure } from 'assets/figures';

import { useGoogleAuth } from '@hooks/useGoogleAuth';

import styles from '@styles/containers/Login.module.css';
import { useSessionContext } from '@context/SessionContext';

export function Login() {
  const { user } = useSessionContext();
  const { push } = useRouter();
  const { logInWithGoogle } = useGoogleAuth();
  const [isBlind, setIsBlind] = useState(false);

  useEffect(() => {
    if (!user) return;
    push('/');
  }, [user, push]);

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
        <Link href={'/forgot-password'}>Forgot Password?</Link>
        <ButtonNormal
          text='Login'
          onClick={handleClick}
        />
        <span>
          New here? <Link href={'/register'}>Register</Link>
        </span>
        <ButtonGoogle onClick={handleClick} />
      </form>
    </main>
  );
}
