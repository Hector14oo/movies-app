'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAuth } from '@hooks/useAuth';

import { Logo, ButtonClose, ButtonNormal, ButtonLink } from '@components';
import {
  HomeSvg,
  GlassSvg,
  StarSvg,
  HeartFillSvg,
  AboutUsSvg,
  ArrowLeftSvg,
} from 'assets/icons';

import styles from '@styles/components/FloatingMenu.module.css';

const Sizes = {
  width: 38,
  height: 38,
};

const PATHS = [
  { route: '/', name: 'Home', icon: <HomeSvg {...Sizes} /> },
  { route: '/search', name: 'Search', icon: <GlassSvg {...Sizes} /> },
  { route: '/trending', name: 'Trending', icon: <StarSvg {...Sizes} /> },
  { route: '/favorites', name: 'Favorites', icon: <HeartFillSvg {...Sizes} /> },
  { route: '/about', name: 'About Us', icon: <AboutUsSvg {...Sizes} /> },
];

export function FloatingMenu({ toggleMenu }: { toggleMenu: () => void }) {
  const { userData, logOut } = useAuth();
  const pathName = usePathname();

  const handleLink = (route?: string) => {
    if (pathName === route) return;
    toggleMenu();
  };

  let imgUser = userData?.photoURL
    ? userData.photoURL
    : 'assets/Images/BrokenImage.png';

  return (
    <nav className={styles.FloatingMenu}>
      <header>
        <Logo />
        <ButtonClose onClick={toggleMenu} />
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
                {route === pathName && (
                  <ArrowLeftSvg
                    width={16}
                    height={16}
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        {userData ? (
          <>
            <article>
              <figure
                style={{
                  background: `url(${imgUser}) no-repeat center/cover`,
                }}
              />
              <main>
                <section>
                  <h2>{userData.displayName}</h2>
                  <p>{userData.email}</p>
                </section>
              </main>
            </article>
            <ButtonNormal
              text='Log Out'
              onClick={logOut}
            />
          </>
        ) : (
          <ButtonLink
            href={'/login'}
            text='Login'
            onClick={toggleMenu}
          />
        )}
      </footer>
    </nav>
  );
}
