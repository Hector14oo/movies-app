'use client';

import { useSessionContext } from '@context/SessionContext';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

import {
  Logo,
  Button_Close,
  Button_Normal,
} from '@components';
import { Home, Glass, Star, HeartFill, AboutUs, ArrowLeft } from 'assets/icons';

import styles from '@styles/components/FloatingMenu.module.css';

const Sizes = {
  width: 38,
  height: 38,
};

const PATHS = [
  { route: '/', name: 'Home', icon: <Home {...Sizes} /> },
  { route: '/search', name: 'Search', icon: <Glass {...Sizes} /> },
  { route: '/trending', name: 'Trending', icon: <Star {...Sizes} /> },
  { route: '/favorites', name: 'Favorites', icon: <HeartFill {...Sizes} /> },
  { route: '/about', name: 'About Us', icon: <AboutUs {...Sizes} /> },
];

export function FloatingMenu({ toggleMenu }: { toggleMenu: () => void }) {
  const { loged, setLoged } = useSessionContext();
  const pathName = usePathname();

  const handleLink = (route?: string) => {
    if (pathName === route) return;
    toggleMenu();
  };

  return (
    <nav className={styles.FloatingMenu}>
      <header>
        <Logo />
        <Button_Close onClick={toggleMenu} />
      </header>

      <main>
        <h1>Explore</h1>

        <ul>
          {PATHS.map(({ route, name, icon }) => (
            <li key={route}>
              <Link
                href={route}
                onClick={() => handleLink(route)}
                style={{
                  backgroundColor: `${route === pathName && 'var(--C2)'}`,
                }}
              >
                <span>
                  {icon}
                  {name}
                </span>
                {route === pathName && <ArrowLeft />}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        {loged ? (
          <>
            <article>
              <figure>
                <Image
                  src='https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
                  fill={true}
                  alt='User Img'
                />
              </figure>
              <main>
                <section>
                  <h2>Aiony Haust</h2>
                  <p>Junior Frontend</p>
                </section>
                <Link
                  onClick={() => handleLink()}
                  href={'/account'}
                >
                  Go to profile
                </Link>
              </main>
            </article>

            <Button_Normal
              text='Log Out'
              onClick={() => setLoged(false)}
            />
          </>
        ) : (
          <Button_Normal
            text='Login'
            onClick={() => setLoged(true)}
          />
        )}
      </footer>
    </nav>
  );
}
