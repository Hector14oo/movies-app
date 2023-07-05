import {
  FetchTrailersType,
  FetchType,
  TrailerType,
  VideoResultType,
} from '@interfaces';
import { fecthApi } from '@utils/fetchApi';
import { UP_COMING_ENDPOINT, VIDEOS_ENDPOINT } from '@utils/constants';

export async function useTrailers() {
  let result, error;

  try {
    const response = await fecthApi<FetchType>(UP_COMING_ENDPOINT);

    const trailers: Array<TrailerType> = await Promise.all(
      response.results.map(async (video) => {
        const res = await fecthApi<FetchTrailersType>(
          VIDEOS_ENDPOINT(video.id)
        );

        const trailer = res.results.find(
          (video: VideoResultType) => video.type === 'Trailer'
        );

        return {
          id: video.id,
          title: video.title,
          videoKey: trailer?.key || '',
          backdrop: video.backdrop_path || '',
        };
      })
    );

    result = trailers;
  } catch (err) {
    error = err;
  }

  return { result, error };
}
