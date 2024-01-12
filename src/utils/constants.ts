export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
  },
};

const AUTH = `api_key=${process.env.NEXT_PUBLIC_TMDB_API_KEY}`

export const SEARCH_ENDPOINT = (value: string) => `https://api.themoviedb.org/3/search/movie?api_key=711c3953b76ca0680b4475fae04db9d3&query=${value}&page=1`;

export const TRENDING_ENDPOINT = `https://api.themoviedb.org/3/trending/movie/week?${AUTH}`;

export const UP_COMING_ENDPOINT = `https://api.themoviedb.org/3/movie/upcoming?${AUTH}`;

export const VIDEOS_ENDPOINT = (id: number) => `https://api.themoviedb.org/3/movie/${id}/videos?${AUTH}`;

export const MOVIE_DETAILS_ENDPOINT = (id: number) => `https://api.themoviedb.org/3/movie/${id}?${AUTH}`;

export const MOVIE_CREDITS_ENDPOINT = (id: number) => `https://api.themoviedb.org/3/movie/${id}/credits?${AUTH}`;
