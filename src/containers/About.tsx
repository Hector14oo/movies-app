import Link from 'next/link';
import { GitHubSvg, LinkedinSvg, NextJsSvg, ReactSvg } from 'assets/icons';

import { TMDBLogo } from 'assets/figures';

import styles from '@styles/containers/About.module.css';

export function About() {
  return (
    <main className={styles.About}>
      <section>
        <figure>
          <Link
            href={'https://developer.themoviedb.org/docs'}
            target='blank'
          >
            <TMDBLogo />
          </Link>
        </figure>
        <p>
          Our application utilizes The Movie Database API, granting us access to
          a vast collection of movie data. This API is instrumental in enhancing
          the functionality of our application and enables us to provide a
          comprehensive cinematic experience to our users. With this
          integration, we can provide movie details, information on cast and
          crew, ratings, and more. The Movie Database API keeps us updated on
          the latest releases and trends in the world of cinema.
        </p>
      </section>

      <section>
        <p>
          The application was developed by Hector Davila, with the main
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
