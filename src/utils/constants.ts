export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzY1YThkMDY5NGZiZGEzNTE2NzhjMWYwZTNhYTMyYiIsInN1YiI6IjY0NzdkMmI2MGUyOWEyMDBhNjVlOWM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pksf8rkJTwMcQ0NFnTDgr8VaaMRULgwvHntrxIPN3V8',
  },
};

export const SEARCH_ENDPOINT = (value: string) => `https://api.themoviedb.org/3/search/movie?query=${value}&page=1`;

export const TRENDING_ENDPOINT = 'https://api.themoviedb.org/3/trending/movie/week';

export const UP_COMING_ENDPOINT = 'https://api.themoviedb.org/3/movie/upcoming';

export const VIDEOS_ENDPOINT = (id: number) => `https://api.themoviedb.org/3/movie/${id}/videos`;

export const MOVIE_DETAILS_ENDPOINT = (id: number) => `https://api.themoviedb.org/3/movie/${id}`;

export const MOVIE_CREDITS_ENDPOINT = (id: number) => `https://api.themoviedb.org/3/movie/${id}/credits`;

