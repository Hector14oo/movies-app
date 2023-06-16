'use client';

import { MouseEvent, useState } from 'react';
import { Button_Normal, Input_Password } from '@components';
import { SettingPassword } from 'assets/figures';
import { useRouter } from 'next/navigation';

import styles from '@styles/containers/SettingPasswor.module.css';

export function Container_SettingPasswor() {
  const [isBlind, setIsBlind] = useState(false);
  const { push } = useRouter();

  const toggleBlind = () => {
    setIsBlind(!isBlind);
  };

  const handleClick = (e: MouseEvent<HTMLButtonElement>) => {
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
        <Input_Password
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='New Password'
        />
        <Input_Password
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Confirm New Password'
        />
        <Button_Normal
          text='Submit'
          onClick={handleClick}
        />
      </form>
    </main>
  );
}
