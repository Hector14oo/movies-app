'use client';

import { MovieType } from '@interfaces';
import { CardPoster } from '@components';
import { useViewport } from '@hooks/useViewport';

interface TrailerSectionType {
  array?: MovieType[];
}

export function PosterSection({ array }: TrailerSectionType) {
  const { width } = useViewport();

  if (width >= 768) {
    return (
      <section>
        {array?.map(({ id, title, date, votes, poster }) => (
          <CardPoster
            key={id}
            id={id}
            title={title}
            date={date}
            votes={votes}
            poster={poster}
          />
        ))}
      </section>
    );
  }

  return (
    <section>
      {array?.slice(0, 2).map(({ id, title, date, votes, poster }) => (
        <CardPoster
          key={id}
          id={id}
          title={title}
          date={date}
          votes={votes}
          poster={poster}
        />
      ))}
    </section>
  );
}
