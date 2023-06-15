import Linker from 'next/link';
import styles from '@styles/components/Buttons.module.css';

export function Link({ href, text }: { href: string; text: string }) {
  return (
    <Linker
      href={href}
      className={`${styles.Button}`}
    >
      {text}
    </Linker>
  );
}
