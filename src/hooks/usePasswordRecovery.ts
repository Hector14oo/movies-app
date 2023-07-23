'use client';

import { useState } from 'react';

import { fetchSignInMethodsForEmail, sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '@firebase/client';

export function usePasswordRecovery() {
  const [error, setError] = useState('');

  const sendConfirmation = async (email: string) => {
    setError('');

    try {
      const singMethod = await fetchSignInMethodsForEmail(auth, email);
      if(singMethod.includes('google.com')) return setError('User must login with Google.')
      await sendPasswordResetEmail(auth, email);
    } catch (err) {
      if (err instanceof Error) setError('The email does not exist or is not registered.');
    }
  };

  return { sendConfirmation, error };
}
