'use client';

import { useSessionContext } from '@context/SessionContext';
import { ButtonLink } from '@components';
import Image from 'next/image';

import { Cake, Location } from 'assets/icons';
import styles from '@styles/containers/Account.module.css';

export function Account() {
  const { setLoged } = useSessionContext();

  const handleClick = () => {
    setLoged(false);
  };
  return (
    <main className={styles.Account}>
      <figure>
        <Image
          src={
            'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
          }
          fill
          alt='Profile Image'
        />
      </figure>

      <article>
        <header>
          <h1>AIONY HAUST</h1>
          <p>Junior Frontend</p>
        </header>

        <main>
          <section>
            <span>GEN</span> Female
          </section>
          <section>
            <i>
              <Cake />
            </i>
            04/05/2002
          </section>
          <section>
            <span>AGE</span> 21
          </section>
          <section>
            <i>
              <Location />
            </i>
            Antioquia, Colombia
          </section>
        </main>

        <footer>
          <ButtonLink
            onClick={handleClick}
            text='Log Out'
            href={'/home'}
          />
        </footer>
      </article>
    </main>
  );
}
