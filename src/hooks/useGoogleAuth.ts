import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth } from '@firebase/client';

export function useGoogleAuth() {
  const googleProvider = new GoogleAuthProvider();

  const logInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      return console.error(error);
    }
  };

  return { logInWithGoogle };
}
