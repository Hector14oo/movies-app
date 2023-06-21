import { useTrending } from '@hooks/useTrending';
import { CardPoster, CardTrailer } from '@components';

import styles from '@styles/containers/Home.module.css';

export async function Home() {
  const trending = await useTrending();
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
        <CardTrailer title='Super Mario Bros' />
        <CardTrailer title='Super-Man' />
      </section>
    </main>
  );
}
