'use client';

import { useState } from 'react';
import {
  createUserWithEmailAndPassword,
  fetchSignInMethodsForEmail,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { auth } from '@firebase/client';

export function useEmailAuth() {
  const [error, setError] = useState('');

  const logInWithEmail = async (email: string, password: string) => {
    setError('');

    try {
      const singMethod = await fetchSignInMethodsForEmail(auth, email);
      if(singMethod.includes('google.com')) return setError('User must login with Google.')
      await signInWithEmailAndPassword(auth, email, password)
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  const registerWithEmail = async (email: string, password: string) => {
    setError('');

    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      if (err instanceof Error) setError(err.message);
    }
  };

  return { logInWithEmail, registerWithEmail, error };
}
