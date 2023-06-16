import { CardPoster, CardTrailer } from '@components';
import styles from '@styles/containers/Home.module.css';

export function Home() {
  return (
    <main className={styles.Main}>
      <h1>Trending Movies Of The Week</h1>
      <section>
        <CardPoster
          id={1}
          title='John Wick 4'
          date='March 22, 2023'
          votes='7.2'
        />
        <CardPoster
          id={2}
          title='Spiderman: Across The Spider Verse'
          date='May 21, 2023'
          votes='5.0'
        />
      </section>
      <h2>Lastest Trailers</h2>
      <section>
        <CardTrailer title='Super Mario Bros' />
        <CardTrailer title='Super-Man' />
      </section>
    </main>
  );
}
