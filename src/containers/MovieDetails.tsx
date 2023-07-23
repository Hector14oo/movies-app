import { useDetails } from '@hooks/useDetails';
import { CardArtist, Rank } from '@components';
import { ErrorFigure } from 'assets/figures';

import styles from '@styles/containers/MovieDetails.module.css';

export async function MovieDetails({ movieId }: { movieId: number }) {
  const { result, error } = await useDetails(movieId);

  let backdropCover = result?.movieDetails.backdrop_path
    ? `https://image.tmdb.org/t/p/original${result.movieDetails.backdrop_path}`
    : '/assets/Images/BrokenImage.png';

  const formatHour = (duration: number) =>
    `${Math.floor(duration / 60)}h ${duration % 60}min`;

  return (
    <>
      {error ? (
        <main className={styles.MainError}>
          <ErrorFigure
            width={300}
            height={250}
          />
          <h1>{"We're sorry, an error has occurred :("}</h1>
          <p>{error?.toString()}, try again</p>
        </main>
      ) : (
        <main className={styles.MovieDetails}>
          <header
            style={{
              background: `var(--GRADIENT), url(${backdropCover}) no-repeat center/cover`,
            }}
          />
          <main>
            <section>
              <Rank
                votes={Number(result?.movieDetails?.vote_average?.toFixed(1))}
              />
              <h1>{result?.movieDetails.title}</h1>
              <p>
                {result?.movieDetails?.genres?.map(
                  (genre, index, arr) =>
                    `${genre.name}${index + 1 === arr.length ? '.' : ', '}`
                )}
              </p>
              <p>{formatHour(result?.movieDetails.runtime || 0)}</p>
              
              <p>{result?.movieDetails.overview}</p>
            </section>

            <section>
              <h2>Cast</h2>

              <div>
                {result?.cast.map((artist) => (
                  <CardArtist
                    key={artist.id}
                    name={artist.name}
                    character={artist.character}
                    picture={artist.picture}
                  />
                ))}
              </div>
            </section>
          </main>
        </main>
      )}
    </>
  );
}
