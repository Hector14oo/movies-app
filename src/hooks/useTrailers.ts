import { VideoType } from '@interfaces';
import { fecthApi } from '@utils/fetchApi';
import { upComingEndPoint, videosEndPoint } from '@utils/constants';

export async function useTrailers() {
  const { results } = await fecthApi(upComingEndPoint);
  const trailers: Array<VideoType> = await Promise.all(
    results.map(async (video: VideoType) => {
      const response = await fecthApi(videosEndPoint(video.id));
      const trailer = response.results.find(
        (video: VideoType) => video.type === 'Trailer'
      );

      if (trailer === undefined) return;

      return {
        id: video.id,
        videoKey: trailer.key,
        title: video.title,
        backdrop_path: video.backdrop_path,
      };
    })
  );

  return trailers;
}
