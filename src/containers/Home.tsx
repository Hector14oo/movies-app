import { useTrending } from '@hooks/useTrending';
import { CardPoster, CardTrailer } from '@components';

import styles from '@styles/containers/Home.module.css';
import { useTrailers } from '@hooks/useTrailers';

export async function Home() {
  const trending = await useTrending();
  const trailers = await useTrailers();
  return (
    <main className={styles.Main}>
      <h1>Trending Movies Of The Week</h1>
      <section>
        {trending.splice(0, 2).map(({ id, title, date, votes, poster }) => (
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
        {trailers.splice(0, 2).map(({ id, videoKey, title, backdrop_path }) => (
          <CardTrailer
            key={id}
            id={id}
            videoKey={videoKey}
            title={title}
            backdrop={backdrop_path}
          />
        ))}
      </section>
    </main>
  );
}
