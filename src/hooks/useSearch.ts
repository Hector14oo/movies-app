import { searchEndPoint } from '@utils/constants';
import { fecthApi } from '@utils/fetchApi';
import { useEffect, useState } from 'react';

interface ResultType {
  id: string;
  release_date: string;
  title: string;
  overview: string;
  vote_average: number;
  poster_path: string;
}

interface MovieType {
  id: number;
  date: string;
  title: string;
  overview: string;
  rank: number;
  poster: string;
}

export function useSearch(value: string) {
  const [prevValue, setPrevValue] = useState('');
  const [movies, setMovies] = useState<MovieType[]>([]);

  useEffect(() => {
    if (!value.length || value === prevValue) return;

    setPrevValue(value);

    const timer = setTimeout(() => {
      fecthApi(searchEndPoint(value)).then(({ results }) => {
        setMovies(
          results.map((movie: ResultType) => ({
            id: movie.id,
            date: movie.release_date,
            title: movie.title,
            overview: movie.overview,
            rank: movie.vote_average.toFixed(1),
            poster: movie.poster_path,
          }))
        );
      });
    }, 500);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return movies;
}
