'use client';

import { useState } from 'react';
import { usePathname } from 'next/navigation';
import {
  ButtonBack,
  ButtonMenu,
  ButtonFavorite,
  FloatingMenu,
} from '@components';

import styles from '@styles/components/Header.module.css';

const routes: Record<string, string> = {
  '/': 'Home',
  '/search': 'Search Movies',
  '/trending': 'Trending',
  '/favorites': 'Favorites',
  '/profile': 'Profile',
};

const excludeRoutes: string[] = [
  '/login',
  '/register',
  '/forgot-password',
  '/setting-password',
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const path = usePathname();

  const toggleMenu = () => setIsOpen(!isOpen);

  const title = routes[path];
  const className = path === '/' ? styles['Hidden'] : '';

  return (
    <>
      {path !== '/choose-username' && (
        <header className={`${styles.Header} ${className}`}>
          <nav
            style={
              excludeRoutes.includes(path) || path.includes('/movie-details/')
                ? { backgroundColor: 'transparent' }
                : {}
            }
          >
            <ButtonBack />

            {!excludeRoutes.includes(path) && (
              <>
                <span>{title}</span>
                {path.includes('/movie-details/') ? (
                  <ButtonFavorite
                    isFav={favorite}
                    toggleFav={() => setFavorite(!favorite)}
                  />
                ) : (
                  <ButtonMenu onClick={toggleMenu} />
                )}
              </>
            )}
          </nav>
          {isOpen && <FloatingMenu toggleMenu={toggleMenu} />}
        </header>
      )}
    </>
  );
}
