'use client';

import Link from 'next/link';
import { ArrowLeft, X, HeartFill, HeartOutLine, Menu } from 'assets/icons';
import styles from '@styles/components/Buttons.module.css';

interface Buttons {
  isFav?: boolean;
  handler?: (() => void) | ((...args: any[]) => void);
  href?: string;
  text?: string;
  type: 'BACK' | 'MENU' | 'CLOSE' | 'FAV' | 'NORMAL' | 'LINK';
}

const ICONS = {
  BACK: <ArrowLeft />,
  MENU: <Menu />,
  FAV: [<HeartFill key={0} />, <HeartOutLine key={1} />],
  CLOSE: <X />,
};

export function Button({ isFav, handler, href = '#', text, type }: Buttons) {
  switch (type) {
    case 'CLOSE':
      return (
        <button
          className={`${styles.Button} ${styles.MenuButton}`}
          onClick={handler}
        >
          {ICONS[type]}
        </button>
      );
      break;
    case 'FAV':
      return (
        <button
          className={`${styles.Button} ${styles.SpecialButton}`}
          onClick={handler}
        >
          {isFav ? ICONS[type][0] : ICONS[type][1]}
        </button>
      );
      break;
    case 'NORMAL':
      return (
        <button
          className={`${styles.Button}`}
          onClick={handler}
        >
          {text}
        </button>
      );
      break;
    case 'LINK':
      return (
        <Link
          href={href}
          className={`${styles.Button}`}
        >
          {text}
        </Link>
      );
      break;
    default:
      return (
        <button
          className={`${styles.Button} ${styles.SpecialButton}`}
          onClick={handler}
        >
          {ICONS[type]}
        </button>
      );
      break;
  }
}
