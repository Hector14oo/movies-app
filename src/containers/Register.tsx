'use client';
import Link from 'next/link';

import { MouseEvent, useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useEmailAuth } from '@hooks/useEmailAuth';
import { useSessionContext } from '@context/SessionContext';

import { ButtonNormal, InputEmail, InputPassword } from '@components';
import { LoginFigure } from 'assets/figures';

import styles from '@styles/containers/Register.module.css';

const message = ['(auth/email-already-in-use)', '(auth/weak-password)'];

export function Register() {
  const { user } = useSessionContext();
  const { push } = useRouter();
  const { registerWithEmail, error } = useEmailAuth();

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

    registerWithEmail(email, password);
  };

  const toggleBlind = () => {
    setIsBlind(!isBlind);
  };
  return (
    <main className={styles.Register}>
      <LoginFigure />
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        <InputEmail placeholder='Email' />
        {error.includes(message[0]) && (
          <span className={styles.Error}>El correo ya está registrado</span>
        )}
        <InputPassword
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Password'
        />
        {error.includes(message[1]) && (
          <span className={styles.Error}>
            La contraseña debe ser mayor a 6 caracteres
          </span>
        )}
        <ButtonNormal
          text='Register'
          onClick={() => {}}
        />
        <span>
          Already have account? <Link href={'/login'}>Login</Link>
        </span>
      </form>
    </main>
  );
}
