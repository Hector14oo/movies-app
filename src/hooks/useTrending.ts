import { ResultType, MovieType } from '@interfaces';
import { trendingEndPoint } from '@utils/constants';
import { fecthApi } from '@utils/fetchApi';

export async function useTrending() {
  const { results } = await fecthApi(trendingEndPoint);
  const trending: Array<MovieType> = [];

  results.map((movie: ResultType) => {
    trending.push({
      id: movie.id,
      title: movie.title,
      date: movie.release_date,
      votes: Number(movie.vote_average.toFixed(1)),
      poster: movie.poster_path,
    });
  });

  return trending;
}
