import Linker from 'next/link';
import styles from '@styles/components/Buttons.module.css';

export function Link({
  href,
  text,
  onClick,
}: {
  href: string;
  text: string;
  onClick?: () => void;
}) {
  return (
    <Linker
      href={href}
      className={`${styles.Button}`}
      onClick={onClick}
    >
      {text}
    </Linker>
  );
}
