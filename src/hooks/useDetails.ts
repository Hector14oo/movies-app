import { CastMember, CreditsType, MovieType, ResultType } from '@interfaces';

import {
  MOVIE_CREDITS_ENDPOINT,
  MOVIE_DETAILS_ENDPOINT,
} from '@utils/constants';

import { fecthApi } from '@utils/fetchApi';

export async function useDetails(id: number) {
  let result, error;

  try {
    const response = await fecthApi<ResultType>(MOVIE_DETAILS_ENDPOINT(id));

    const { cast } = await fecthApi<CreditsType>(MOVIE_CREDITS_ENDPOINT(id));

    result = {
      movieDetails: response,
      cast: cast.map((person: CastMember) => ({
        id: person.id,
        name: person.original_name,
        picture: person.profile_path,
        character: person.character,
      })),
    };
  } catch (err) {
    error = err;
  }

  return { result, error };
}
