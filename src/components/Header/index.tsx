'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  Button_Back,
  Button_Menu,
  Button_Favorite,
  FloatingMenu,
} from '@components';
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
  const [favorite, setFavorite] = useState(false);
  const path = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const title = routes[path];
  const className = path === '/' ? styles['Hidden'] : '';

  return (
    <header className={`${styles.Header} ${className}`}>
      <nav
        style={
          excludeRoutes.includes(path) || path.includes('/movie-details/')
            ? { backgroundColor: 'transparent' }
            : {}
        }
      >
        <Button_Back />

        {!excludeRoutes.includes(path) && (
          <>
            <span>{title}</span>
            {path.includes('/movie-details/') ? (
              <Button_Favorite
                isFav={favorite}
                toggleFav={() => setFavorite(!favorite)}
              />
            ) : (
              <Button_Menu onClick={toggleMenu} />
            )}
          </>
        )}
      </nav>
      {isOpen && <FloatingMenu toggleMenu={toggleMenu} />}
    </header>
  );
}
