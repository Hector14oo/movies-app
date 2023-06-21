import { useEffect, useState } from 'react';
import { ResultType, MovieType } from '@interfaces';
import { searchEndPoint } from '@utils/constants';
import { fecthApi } from '@utils/fetchApi';

export function useSearch(value: string) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [error, setError] = useState(false);
  const [prevValue, setPrevValue] = useState('');

  useEffect(() => {
    setError(false);
    if (!value.length || value === prevValue) return;

    setPrevValue(value);

    const timer = setTimeout(() => {
      fecthApi(searchEndPoint(value)).then(({ results }) => {
        if (!results.length) {
          setError(true);
          return;
        }

        setMovies(
          results.map(
            (movie: ResultType): MovieType => ({
              id: movie.id,
              date: movie.release_date,
              title: movie.title,
              overview: movie.overview,
              votes: Number(movie.vote_average.toFixed(1)),
              poster: movie.poster_path,
            })
          )
        );
      });
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return { movies, error };
}
