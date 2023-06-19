import { MouseEventHandler } from 'react';
import Linker from 'next/link';

import styles from '@styles/components/Buttons.module.css';

interface ButtonProps {
  href: string;
  text: string;
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

export function Link({ href, text, onClick }: ButtonProps) {
  return (
    <Linker
      href={href}
      className={`${styles.Button}`}
      onClick={onClick}
      style={text === 'Log Out' ? { backgroundColor: 'var(--BAD)' } : {}}
    >
      {text}
    </Linker>
  );
}
