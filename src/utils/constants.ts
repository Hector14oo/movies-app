export const options = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyNzY1YThkMDY5NGZiZGEzNTE2NzhjMWYwZTNhYTMyYiIsInN1YiI6IjY0NzdkMmI2MGUyOWEyMDBhNjVlOWM1NyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Pksf8rkJTwMcQ0NFnTDgr8VaaMRULgwvHntrxIPN3V8',
  },
};

export const searchEndPoint = (value: string) =>
  `https://api.themoviedb.org/3/search/movie?query=${value}&page=1`;

export const trendingEndPoint = `https://api.themoviedb.org/3/trending/movie/week`;
