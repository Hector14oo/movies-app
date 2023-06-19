import { CardArtist, Rank } from '@components';
import Image from 'next/image';

import styles from '@styles/containers/MovieDetails.module.css';

export function MovieDetails({ id }: { id: number }) {
  return (
    <main className={styles.MovieDetails}>
      <header>
        <Image
          src={
            'https://media.revistagq.com/photos/6422ba5a62f41558efce8cab/3:2/w_2736,h_1824,c_limit/MCDJOWI_LG042.jpeg'
          }
          fill
          alt='John Wick 4 image escene'
        />
      </header>
      <main>
        <Rank votes='7.2' />
        <h1>John Wick 4</h1>
        <p>action, suspense, crime</p>
        <p>2h 25min</p>

        <p>
          With the price on his head ever increasing, John Wick uncovers a path
          to defeating The High Table. But before he can earn his freedom, Wick
          must face off against a new enemy with powerful alliances across the
          globe and forces that turn old friends into foes.
        </p>

        <h2>Cast</h2>

        <section>
          <CardArtist
            name='Keanu Reeves'
            character='John Wick'
          />
          <CardArtist
            name='Keanu Reeves'
            character='John Wick'
          />
          <CardArtist
            name='Keanu Reeves'
            character='John Wick'
          />
          <CardArtist
            name='Keanu Reeves'
            character='John Wick'
          />
        </section>
      </main>
    </main>
  );
}
