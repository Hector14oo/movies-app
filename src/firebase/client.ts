import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

import {
  getStorage,
  ref,
  uploadBytes,
  getDownloadURL,
  getBytes,
} from 'firebase/storage';

import {
  getFirestore,
  collection,
  doc,
  addDoc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc,
  query,
  where,
} from 'firebase/firestore';

import { userType } from '@interfaces';

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_MESSAGIN_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_MEASUREMENT_ID,
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);

export async function userExists(uid: string) {
  try {
    const docRef = doc(db, 'users', uid);
    const res = await getDoc(docRef);
    return res.exists();
  } catch (error) {
    return console.log(error);
  }
}

export async function userRegister(user: userType) {
  try {
    const collectionRef = collection(db, 'users');
    const docRef = doc(collectionRef, user.uid);
    await setDoc(docRef, user);
  } catch (error) {
    return console.log(error);
  }
}
