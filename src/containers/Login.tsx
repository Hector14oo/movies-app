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

import { useGoogleAuth } from '@hooks/useGoogleAuth';
import { useEmailAuth } from '@hooks/useEmailAuth';
import { useSessionContext } from '@context/SessionContext';

import { LoginFigure } from 'assets/figures';

import styles from '@styles/containers/Login.module.css';

const message = [
  'Firebase: Error (auth/user-not-found)',
  'Firebase: Error (auth/wrong-password)',
  'User must login with Google.'
];

export function Login() {
  const { user } = useSessionContext();
  const { push } = useRouter();
  const { logInWithGoogle } = useGoogleAuth();
  const { logInWithEmail, error } = useEmailAuth();

  const [isBlind, setIsBlind] = useState(false);

  useEffect(() => {
    if (!user) return;
    push('/');
  }, [user, push]);

  const handleSubmit = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString();
    const password = formData.get('password')?.toString();

    if (!email || !password) return;

    logInWithEmail(email, password);
  };

  const handleButtonGoogle = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    logInWithGoogle();
  };

  const toggleBlind = () => {
    setIsBlind(!isBlind);
  };
  return (
    <main className={styles.Login}>
      <LoginFigure />
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <InputEmail placeholder='Email' />
        {error.includes(message[0]) && <span className={styles.Error}>The email is not registered.</span>}
        <InputPassword
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Password'
        />
        {error.includes(message[1]) && <span className={styles.Error}>The password is incorrect.</span>}
        <Link href={'/forgot-password'}>Forgot Password?</Link>
        {error.includes(message[2]) && <span className={styles.Error}>{message[2]}</span>}
        <ButtonNormal
          text='Login'
          onClick={() => {}}
        />
        <span>
          New here? <Link href={'/register'}>Register</Link>
        </span>
        <ButtonGoogle onClick={handleButtonGoogle} />
      </form>
    </main>
  );
}
