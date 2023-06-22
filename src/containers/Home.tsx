import { useTrending } from '@hooks/useTrending';
import { CardPoster, CardTrailer } from '@components';
import { ErrorFigure } from 'assets/figures';

import styles from '@styles/containers/Home.module.css';
import { useTrailers } from '@hooks/useTrailers';

export async function Home() {
<<<<<<< HEAD
  const trending = await useTrending();
  const trailers = await useTrailers();
=======
  const { result, error } = await useTrending();
>>>>>>> 6b33323a82ffb8c084393b8669367ef943b34879
  return (
    <>
      {error ? (
        <main className={styles.MainError}>
          <ErrorFigure
            width={300}
            height={250}
          />
<<<<<<< HEAD
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
=======
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
>>>>>>> 6b33323a82ffb8c084393b8669367ef943b34879
  );
}
