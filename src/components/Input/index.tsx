'use client';

import { ChangeEvent, useState } from 'react';
import { Glass, At, PadLock, Eye, BlindEye } from 'assets/icons';
import styles from '@styles/components/Inputs.module.css';

export function Input({
  handler,
  value,
  type,
  placeholder,
}: {
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: 'SEARCH' | 'EMAIL' | 'PASSWORD';
  placeholder?: 'Email' | 'Confirm Email' | 'Password' | 'Confirm Password';
}) {
  const [blind, setBlind] = useState(false);

  switch (type) {
    case 'EMAIL':
      return (
        <label
          htmlFor='email'
          className={styles.FormInput}
        >
          <At
            width={20}
            height={20}
          />
          <input
            type='email'
            id='email'
            placeholder={placeholder}
          />
        </label>
      );
      break;
    case 'PASSWORD':
      return (
        <label
          htmlFor='password'
          className={styles.FormInput}
        >
          <i>
            <PadLock
              width={15}
              height={20}
            />
          </i>
          <input
            type={blind ? 'text' : 'password'}
            id='password'
            placeholder={placeholder}
          />
          <i onClick={() => setBlind(!blind)}>
            {blind ? (
              <BlindEye
                width={18}
                height={18}
              />
            ) : (
              <Eye />
            )}
          </i>
        </label>
      );
      break;
    default:
      return (
        <label
          htmlFor='search'
          className={styles.Searcher}
        >
          <Glass
            width={25}
            height={25}
          />
          <div />
          <input
            id='search'
            type='text'
            placeholder='Movie Name'
            onChange={handler}
            value={value}
          />
        </label>
      );
      break;
  }
}
