export interface ResultType {
  id: number;
  release_date: string;
  title: string;
  overview?: string;
  vote_average: number;
  poster_path: string;
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

export interface VideoType {
  id: number;
  title: string;
  videoKey: string;
  backdrop_path?: string;
  type?: string;
}

export interface TrailerType extends VideoType {
  backdrop?: string;
}
