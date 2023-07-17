import { SyntheticEvent } from 'react';

export interface ResultType {
  id: number;
  release_date: string;
  title: string;
  overview?: string;
  vote_average: number;
  poster_path: string;
  backdrop_path?: string;
  runtime?: number;
  genres?: Array<{
    id: number;
    name: string;
  }>;
}

export interface VideoResultType {
  id: number;
  title: string;
  key?: string;
  backdrop_path?: string;
  type?: string;
}

export interface TrailerType extends VideoResultType {
  videoKey: string;
  backdrop: string;
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
  backdrop?: string;
}

export interface PosterProps extends MovieType {
  className?: string;
}

export interface ArtistProps {
  name: string;
  character: string;
  picture: string;
}

export interface IconProps {
  width?: number;
  height?: number;
}

export interface ErrorStateType {
  state: boolean;
  error: null | {};
}

export interface sliderClickTypes {
  e: SyntheticEvent;
  type: 'PREV' | 'NEXT';
}

export interface userType {
  id: string;
  name: string | null;
  email: string | null;
  profilePicture: string | null;
  favorites?: Array<MovieType>;
}

export interface PersonType {
  id: number;
  original_name: string;
  profile_path: string;
}

export interface CastMember extends PersonType {
  character: string;
}
export interface CrewMember extends PersonType {
  department: string;
  job: string;
}

export interface CreditsType {
  id: number;
  cast: Array<CastMember>;
  crew: Array<CrewMember>;
}

export interface MovieDetailsType {
  movieDetails: MovieType;
  cast: Array<{
    id: number;
    name: string;
    picture: string;
    character: string;
  }>;
}
