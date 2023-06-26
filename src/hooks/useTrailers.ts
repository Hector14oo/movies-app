import {
  FetchTrailersType,
  FetchType,
  VideoResultType,
} from '@interfaces';
import { fecthApi } from '@utils/fetchApi';
import { upComingEndPoint, videosEndPoint } from '@utils/constants';

export async function useTrailers() {
  let result, error;

  try {
    const response = await fecthApi<FetchType>(upComingEndPoint);

    const trailers = await Promise.all(
      response.results.map(async (video) => {
        const res = await fecthApi<FetchTrailersType>(videosEndPoint(video.id));

        const trailer = res.results.find(
          (video: VideoResultType) => video.type === 'Trailer'
        );

        if (trailer === undefined) return;

        return {
          title: video.title,
          videoKey: trailer.key,
          backdrop_path: video.backdrop_path,
        };
      })
    );

    result = trailers;
  } catch (err) {
    error = err;
  }

  return { result, error };
}
