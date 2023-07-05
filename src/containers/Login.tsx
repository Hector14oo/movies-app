'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import {
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '@firebase/client';

import { MouseEvent, useState } from 'react';
import { ButtonNormal, InputEmail, InputPassword } from '@components';
import { LoginFigure } from 'assets/figures';

import styles from '@styles/containers/Login.module.css';
import { useAuth } from '@hooks/useAuth';

export function Login() {
  const { userData } = useAuth();
  const [isBlind, setIsBlind] = useState(false);

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    singInWithGoogle();

    async function singInWithGoogle() {
      const googleProvider = new GoogleAuthProvider();

      try {
        await signInWithPopup(auth, googleProvider);
      } catch (error) {
        console.log(error);
      }
    }
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
