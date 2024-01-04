export const OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization:
      'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3MTFjMzk1M2I3NmNhMDY4MGI0NDc1ZmFlMDRkYjlkMyIsInN1YiI6IjY1MWQ5ZDIxZWE4NGM3MDEyZDY5N2FiYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7La3kjtqN9B2qOqWYCjI3beUC8OIFyIb6qUe5P7JpNk',
  },
};

export const SEARCH_ENDPOINT = (value: string) => `https://api.themoviedb.org/3/search/movie?query=${value}&page=1`;

export const TRENDING_ENDPOINT = 'https://api.themoviedb.org/3/trending/movie/week';

export const UP_COMING_ENDPOINT = 'https://api.themoviedb.org/3/movie/upcoming';

export const VIDEOS_ENDPOINT = (id: number) => `https://api.themoviedb.org/3/movie/${id}/videos`;

export const MOVIE_DETAILS_ENDPOINT = (id: number) => `https://api.themoviedb.org/3/movie/${id}`;

export const MOVIE_CREDITS_ENDPOINT = (id: number) => `https://api.themoviedb.org/3/movie/${id}/credits`;

