'use client';

import { MouseEvent, useState } from 'react';
import { ButtonNormal, InputPassword } from '@components';
import { SettingPasswordFigure } from 'assets/figures';
import { useRouter } from 'next/navigation';

import styles from '@styles/containers/SettingPasswor.module.css';

export function SettingPassword() {
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
      <SettingPasswordFigure />
      <form action=''>
        <h1>Set New Password</h1>
        <InputPassword
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='New Password'
        />
        <InputPassword
          isBlind={isBlind}
          toggleBlind={toggleBlind}
          placeholder='Confirm New Password'
        />
        <ButtonNormal
          text='Submit'
          onClick={handleClick}
        />
      </form>
    </main>
  );
}
