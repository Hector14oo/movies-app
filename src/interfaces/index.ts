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

export interface IconProps {
  width: number;
  height: number;
}