'use client';

import { useState } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Button, FloatingMenu } from '@components';
import styles from '@styles/components/Header.module.css';

const routes: Record<string, string> = {
  '/': 'Home',
  '/search': 'Search',
  '/trending': 'Treding',
  '/favorites': 'Favorites',
  '/profile': 'Profile',
  '/account': 'Account',
};

const excludeRoutes: string[] = [
  '/account',
  '/account/login',
  '/account/register',
  '/account/forgot-password',
  '/account/setting-password',
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const path = usePathname();
  const { back } = useRouter();

  const handleMenu = () => setIsOpen(!isOpen);

  const title: string | null = routes[path];
  const className = path === '/' ? styles['Hidden'] : '';

  return (
    <header className={`${styles.Header} ${className}`}>
      <nav
        style={excludeRoutes.includes(path) ? { backgroundColor: 'transparent' } : {}}
      >
        <Button
          handler={back}
          type='BACK'
        />
        {!excludeRoutes.includes(path) && (
          <>
            <span>{title}</span>
            <Button
              handler={handleMenu}
              type='MENU'
            />
          </>
        )}
      </nav>
      {isOpen && <FloatingMenu handler={handleMenu} />}
    </header>
  );
}
