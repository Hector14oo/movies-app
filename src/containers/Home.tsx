import { PosterSection, TrailerSection } from '@components/Home';
import { useTrending } from '@hooks/useTrending';
import { useTrailers } from '@hooks/useTrailers';

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
          <PosterSection array={trending.result?.slice(0, 3)} />
          <h2>Lastest Trailers</h2>
          <TrailerSection array={trailers.result?.slice(0, 3)} />
        </main>
      )}
    </>
  );
}

export const revalidate = 604800;
