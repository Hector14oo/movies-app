import { useAuth } from './useAuth';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { auth, userRegister } from '@firebase/client';
import { useEffect } from 'react';

export function useGoogleAuth() {
  const { userData, isRegistered } = useAuth();
  const googleProvider = new GoogleAuthProvider();

  const logInWithGoogle = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    if (!userData) return;

    if (!isRegistered) {
      userRegister({
        displaName: userData.displayName,
        email: userData.email,
        profilePicture: userData.photoURL,
        uid: userData.uid,
        favorites: [],
      });
    }
  }, [userData, isRegistered]);

  return { logInWithGoogle };
}
