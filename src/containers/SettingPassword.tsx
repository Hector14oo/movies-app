'use client';

import { MouseEvent, useState } from 'react';
import { ButtonNormal, InputCode, InputPassword } from '@components';
import { SettingPasswordFigure } from 'assets/figures';
import { useRouter } from 'next/navigation';

import styles from '@styles/containers/SettingPasswor.module.css';
import { usePasswordRecovery } from '@hooks/usePasswordRecovery';

export function SettingPassword() {
  const { push } = useRouter();
  const [valid, setValid] = useState(false);
  const [isBlind, setIsBlind] = useState(false);

  const toggleBlind = () => {
    setIsBlind(!isBlind);
  };

  const handleConfirm = (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  if (valid)
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
            onClick={() => {}}
          />
        </form>
      </main>
    );

  return (
    <main className={styles.SettingPasswor}>
      <SettingPasswordFigure />
      <form onSubmit={handleConfirm}>
        <h1>Confirm Code</h1>
        <InputCode placeholder='Enter the Code' />
        <ButtonNormal
          text='Submit'
          onClick={() => {}}
        />
      </form>
    </main>
  );
}
