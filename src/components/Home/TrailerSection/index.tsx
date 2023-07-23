'use client';

import { TrailerType } from '@interfaces';
import { CardTrailer } from '@components';
import { useViewport } from '@hooks/useViewport';

interface TrailerSectionType {
  array?: TrailerType[];
}

export function TrailerSection({ array }: TrailerSectionType) {
  const { width } = useViewport();

  if (width >= 768) {
    return (
      <section>
        {array?.map(({ id, videoKey, backdrop, title }) => (
          <CardTrailer
            key={id.toString()}
            id={id}
            videoKey={videoKey}
            title={title}
            backdrop={backdrop}
          />
        ))}
      </section>
    );
  }

  return (
    <section>
      {array?.slice(0, 2).map(({ id, videoKey, backdrop, title }) => (
        <CardTrailer
          key={id.toString()}
          id={id}
          videoKey={videoKey}
          title={title}
          backdrop={backdrop}
        />
      ))}
    </section>
  );
}
