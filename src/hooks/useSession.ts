'use client';

import { useState, useEffect } from 'react';
import { auth, userExists, userRegister } from '@firebase/client';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { userType } from '@interfaces';

export function useSession() {
  const [user, setUser] = useState<userType>();

  const logOut = async () => {
    try {
      await signOut(auth);
      window.location.reload();
    } catch (error) {
      return console.error(error);
    }
  };

  useEffect(() => {
    onAuthStateChanged(auth, (userData) => {
      if (userData) {
        const newUserData = {
          id: userData.uid,
          name: userData.displayName,
          email: userData.email,
          profilePicture: userData.photoURL,
        };

        const checkingUser = async () => {
          const response = await userExists(userData.uid);

          if (!response) userRegister({ ...newUserData, favorites: [] });
        };

        checkingUser();
        setUser(newUserData);
      }
    });
  }, []);

  return {
    user,
    logOut,
  };
}
