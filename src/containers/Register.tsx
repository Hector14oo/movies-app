'use client';
import { MouseEvent, useState } from 'react';
import { ButtonNormal, InputEmail, InputPassword } from '@components';
import { Register as RegisterFigure } from 'assets/figures';
import Link from 'next/link';

import styles from '@styles/containers/Register.module.css';

export function Register() {
  const [isBlind, setIsBlind] = useState(false);

  const toggleBlind = () => {
    setIsBlind(!isBlind);
  };
  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    alert('Register');
  };

  return (
    <main className={styles.Register}>
      <RegisterFigure />
      <form action=''>
        <h1>Register</h1>
        <InputEmail placeholder='Email' />
        <InputEmail placeholder='Confirm Email' />
        <InputPassword
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Password'
        />
        <InputPassword
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Confirm Password'
        />
        <ButtonNormal
          text='Register'
          onClick={handleClick}
        />
        <span>
          Already have account? <Link href={'/account/login'}>Login</Link>
        </span>
      </form>
    </main>
  );
}
