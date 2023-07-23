'use client';

import { MouseEvent, useState } from 'react';
import { ButtonLink, ButtonNormal, InputEmail } from '@components';
import { EmailSentFigure, ForgotPasswordFigure } from 'assets/figures';

import styles from '@styles/containers/ForgotPassword.module.css';
import { usePasswordRecovery } from '@hooks/usePasswordRecovery';

export function ForgotPassword() {
  const [view, setView] = useState(1);
  const { sendConfirmation, error } = usePasswordRecovery();

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get('email')?.toString();

    if (!email) return;

    await sendConfirmation(email);
    if (!error) setView(2);
  };

  if (view === 2)
    return (
      <main className={styles.ForgotPassword}>
        <EmailSentFigure />
        <h1>The email was sent successfully.</h1>
      </main>
    );

  return (
    <main className={styles.ForgotPassword}>
      <ForgotPasswordFigure />
      <form onSubmit={handleSubmit}>
        <h1>Forgot Password</h1>
        <InputEmail placeholder='Enter your Email' />
        {error && <span className={styles.Error}>{error}</span>}
        <ButtonNormal
          text='Submit'
          onClick={() => {}}
        />
      </form>
    </main>
  );
}
