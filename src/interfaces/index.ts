export interface ResultType {
  id: number;
  release_date: string;
  title: string;
  overview?: string;
  vote_average: number;
  poster_path: string;
  backdrop_path?: string;
}

export interface VideoResultType {
  id: number;
  title: string;
  key: string;
  backdrop_path?: string;
  type?: string;
}

export interface FetchType {
  results: Array<ResultType>;
}

export interface FetchTrailersType {
  results: Array<VideoResultType>;
}

export interface MovieType {
  id: number;
  title: string;
  date: string;
  overview?: string;
  votes: number;
  poster: string;
}

export interface PosterProps extends MovieType {
  cssVar?: object;
}

export interface TrailerType extends VideoResultType {
  videoKey?: string;
  backdrop?: string;
}

export interface IconProps {
  width?: number;
  height?: number;
}

export interface ErrorStateType {
  state: boolean;
  error: null | {};
}
