'use client';

import { SyntheticEvent, useState } from 'react';
import { TrailerType } from '@interfaces';
import { CloseSvg, PlaySvg } from 'assets/icons';

import styles from '@styles/components/Cards.module.css';

export function Trailer({ id, videoKey, title, backdrop }: TrailerType) {
  const [isOpen, setIsOpen] = useState(false);

  let img = `https://image.tmdb.org/t/p/original${backdrop}`;

  if (backdrop === null || backdrop === undefined)
    img = 'assets/Images/BrokenImage.png';

  const handleClick = (e: SyntheticEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };
  return (
    <article
      className={styles.TrailerCard}
      onClick={() => setIsOpen(true)}
      style={{
        background: `var(--GRADIENT), url(${img}) no-repeat center/cover`,
      }}
    >
      <PlaySvg
        width={26}
        height={30}
      />
      <h2>{title} | Official Trailer</h2>
      {isOpen && (
        <figure className={styles.TrailerModal}>
          <section>
            <div onClick={(e: SyntheticEvent) => handleClick(e)}>
              <CloseSvg
                width={40}
                height={40}
              />
            </div>
            <div>
              <iframe
                src={`https://www.youtube.com/embed/${videoKey}?autoplay=1&modestbranding=1&fs=1&autohide=1`}
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                title={title}
                frameBorder='0'
                allowFullScreen
              />
            </div>
          </section>
        </figure>
      )}
    </article>
  );
}
