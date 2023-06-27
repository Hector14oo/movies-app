import Link from 'next/link';
import {
  AboutUsSvg,
  GitHubSvg,
  LinkedinSvg,
  NextJsSvg,
  ReactSvg,
} from 'assets/icons';

import styles from '@styles/containers/About.module.css';

export function About() {
  return (
    <main className={styles.About}>
      <section>
        <figure>
          <AboutUsSvg />
        </figure>
        <p>
          This application was developed by Hector Davila, with the main
          objective of improving skills in new tools, styles and programming
          logic.
        </p>
      </section>

      <section>
        <nav>
          <h2>Social Media</h2>
          <ul>
            <li>
              <Link
                href={'https://github.com/Hector14oo'}
                target='blank'
              >
                <GitHubSvg />
              </Link>
            </li>
            <li>
              <Link
                href={'https://www.linkedin.com/in/hector14oo/'}
                target='blank'
              >
                <LinkedinSvg />
              </Link>
            </li>
          </ul>
        </nav>

        <nav>
          <h2>Used technology</h2>
          <ul>
            <li>
              <Link
                href={'https://nextjs.org/'}
                target='blank'
              >
                <NextJsSvg />
              </Link>
            </li>
            <li>
              <Link
                href={'https://es.react.dev/'}
                target='blank'
              >
                <ReactSvg />
              </Link>
            </li>
          </ul>
        </nav>
      </section>
    </main>
  );
}
