import { ChangeEvent } from 'react';
import { Glass, At, PadLock, Eye, BlindEye } from 'assets/icons';
import styles from '@styles/components/Inputs.module.css';

export function Input({
  handler,
  value,
  type,
  placeholder,
  blindState,
  blindHandler,
}: {
  handler?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  type?: 'SEARCH' | 'EMAIL' | 'PASSWORD';
  placeholder?:
    | 'Email'
    | 'Confirm Email'
    | 'Password'
    | 'Confirm Password'
    | 'New Password'
    | 'Confirm New Password';
  blindState?: boolean;
  blindHandler?: () => void;
}) {
  switch (type) {
    case 'EMAIL':
      return (
        <label
          htmlFor={placeholder}
          className={styles.FormInput}
        >
          <At
            width={20}
            height={20}
          />
          <input
            type='email'
            id={placeholder}
            placeholder={placeholder}
          />
        </label>
      );
      break;
    case 'PASSWORD':
      return (
        <label
          htmlFor={placeholder}
          className={styles.FormInput}
        >
          <i>
            <PadLock
              width={15}
              height={20}
            />
          </i>
          <input
            type={blindState ? 'text' : 'password'}
            id={placeholder}
            placeholder={placeholder}
          />
          <i onClick={blindHandler}>
            {blindState ? (
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
