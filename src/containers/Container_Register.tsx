'use client';
import { MouseEvent, useState } from 'react';
import { Button_Normal, Input_Email, Input_Password } from '@components';
import { Register } from 'assets/figures';
import Link from 'next/link';

import styles from '@styles/containers/Register.module.css';

export function Container_Register() {
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
      <Register
        width={200}
        height={250}
      />
      <form action=''>
        <h1>Register</h1>
        <Input_Email placeholder='Email' />
        <Input_Email placeholder='Confirm Email' />
        <Input_Password
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Password'
        />
        <Input_Password
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Confirm Password'
        />
        <Button_Normal
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
