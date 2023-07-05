import { useEffect, useState } from 'react';
import { MovieType, ErrorStateType, FetchType } from '@interfaces';
import { SEARCH_ENDPOINT } from '@utils/constants';
import { fecthApi } from '@utils/fetchApi';

export function useSearch(value: string) {
  const [movies, setMovies] = useState<MovieType[]>([]);
  const [noResults, setNoResults] = useState(false);
  const [error, setError] = useState<ErrorStateType>({
    state: false,
    error: null,
  });
  const [prevValue, setPrevValue] = useState('');

  useEffect(() => {
    setNoResults(false);
    setError({ state: false, error: null });
    if (!value.length || value === prevValue) return;

    setPrevValue(value);

    const timer = setTimeout(async () => {
      try {
        const response = await fecthApi<FetchType>(SEARCH_ENDPOINT(value));
        const { results } = response;

        if (!results.length) {
          setNoResults(true);
          return;
        }

        setMovies(
          results.map(
            (movie): MovieType => ({
              id: movie.id,
              date: movie.release_date,
              title: movie.title,
              overview: movie.overview,
              votes: Number(movie.vote_average.toFixed(1)),
              poster: movie.poster_path,
            })
          )
        );
      } catch (error: any) {
        setError({ state: true, error: error });
      }
    }, 500);

    return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return { movies, noResults, error };
}
