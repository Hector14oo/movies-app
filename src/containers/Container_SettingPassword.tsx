'use client';

import { useState } from 'react';
import { Button, Input } from '@components';
import { SettingPassword } from 'assets/figures';
import { useRouter } from 'next/navigation';

import styles from '@styles/containers/SettingPasswor.module.css';

export function Container_SettingPasswor() {
  const [blind, setBlind] = useState(false);
  const { push } = useRouter();

  const handleBlind = () => {
    setBlind(!blind);
  };
  const handleClick = (e: Event) => {
    e.preventDefault();
    alert('Password Set');
    push('/');
  };
  return (
    <main className={styles.SettingPasswor}>
      <SettingPassword
        width={250}
        height={250}
      />
      <form action=''>
        <h1>Set New Password</h1>
        <Input
          blindState={blind}
          blindHandler={handleBlind}
          type='PASSWORD'
          placeholder='New Password'
        />
        <Input
          blindState={blind}
          blindHandler={handleBlind}
          type='PASSWORD'
          placeholder='Confirm New Password'
        />
        <Button
          type='NORMAL'
          text='Submit'
          handler={handleClick}
        />
      </form>
    </main>
  );
}
