import { ResultType, MovieType, FetchType } from '@interfaces';
import { TRENDING_ENDPOINT } from '@utils/constants';
import { fecthApi } from '@utils/fetchApi';

export async function useTrending() {
  let result, error;

  try {
    const response = await fecthApi<FetchType>(TRENDING_ENDPOINT);
    const trending: Array<MovieType> = [];

    response.results.map((movie: ResultType) => {
      trending.push({
        id: movie.id,
        title: movie.title,
        date: movie.release_date,
        votes: movie.vote_average,
        poster: movie.poster_path,
      });
    });

    result = trending;
  } catch (err) {
    error = err;
  }

  return { result, error };
}
