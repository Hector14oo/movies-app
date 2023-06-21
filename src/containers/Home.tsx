import { useTrending } from '@hooks/useTrending';
import { CardPoster, CardTrailer } from '@components';
import { ErrorFigure } from 'assets/figures';

import styles from '@styles/containers/Home.module.css';

export async function Home() {
  const { result, error } = await useTrending();
  return (
    <>
      {error ? (
        <main className={styles.MainError}>
          <ErrorFigure
            width={300}
            height={250}
          />
          <h1>{"We're sorry, an error has occurred :("}</h1>
          <p>{error.toString()}, try again</p>
        </main>
      ) : (
        <main className={styles.Main}>
          <h1>Trending Movies Of The Week</h1>
          <section>
            {result?.splice(0, 2).map(({ id, title, date, votes, poster }) => (
              <CardPoster
                key={id}
                id={id}
                title={title}
                date={date}
                votes={votes}
                poster={poster}
              />
            ))}
          </section>
          <h2>Lastest Trailers</h2>
          <section>
            <CardTrailer title='Super Mario Bros' />
            <CardTrailer title='Super-Man' />
          </section>
        </main>
      )}
    </>
  );
}
