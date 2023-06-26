import { useTrending } from '@hooks/useTrending';
import { useTrailers } from '@hooks/useTrailers';
import { CardPoster, CardTrailer } from '@components';
import { ErrorFigure } from 'assets/figures';

import styles from '@styles/containers/Home.module.css';

export async function Home() {
  const trending = await useTrending();
  const trailers = await useTrailers();
  return (
    <>
      {trending.error || trailers.error ? (
        <main className={styles.MainError}>
          <ErrorFigure
            width={300}
            height={250}
          />
          <h1>{"We're sorry, an error has occurred :("}</h1>
          <p>
            {trending.error?.toString() ?? trailers.error?.toString()}, try
            again
          </p>
        </main>
      ) : (
        <main className={styles.Main}>
          <h1>Trending Movies Of The Week</h1>
          <section>
            {trending.result
              ?.splice(0, 2)
              .map(({ id, title, date, votes, poster }) => (
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
            {trailers.result
              ?.splice(0, 2)
              .map(({ id, videoKey, backdrop, title }) => (
                <CardTrailer
                  key={id.toString()}
                  id={id}
                  videoKey={videoKey}
                  title={title}
                  backdrop={backdrop}
                />
              ))}
          </section>
        </main>
      )}
    </>
  );
}
