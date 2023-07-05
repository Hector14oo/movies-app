'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { auth, userExists } from '@firebase/client';
import { User, onAuthStateChanged, signOut } from 'firebase/auth';

export function useAuth() {
  const [userData, setUserData] = useState<User>();
  const [isRegistered, setIsRegistered] = useState<boolean>(false);

  const { push } = useRouter();

  const logOut = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) setUserData(user);
    });
  }, []);

  useEffect(() => {
    const checkUser = async () => {
      if (!userData) return;

      const response = await userExists(userData.uid);

      if (typeof response === 'boolean') setIsRegistered(response);
    };

    checkUser();
  }, [userData]);

  useEffect(() => {
    if (!userData) return;
    if (isRegistered) push('/');
  }, [userData, isRegistered, push]);

  return { userData, isRegistered, logOut };
}
