'use client';

import { useState } from 'react';
import { TrailerType } from '@interfaces';
import { PlaySvg } from 'assets/icons';

import styles from '@styles/components/Cards.module.css';

export function Trailer({ id, videoKey, title, backdrop }: TrailerType) {
  const [isOpen, setIsOpen] = useState(false);

  let img = `https://image.tmdb.org/t/p/original${backdrop}`;

  if (backdrop === null || backdrop === undefined)
    img = 'assets/Images/BrokenImage.png';
  return (
    <article
      className={styles.TrailerCard}
      onClick={() => setIsOpen(!isOpen)}
      style={{
        background: `var(--GRADIENT), url(${img}) no-repeat top/cover`,
      }}
    >
      <PlaySvg
        width={26}
        height={30}
      />
      <h2>{title} | Official Trailer</h2>
      {isOpen && (
        <figure className={styles.TrailerModal}>
          <div>
            <iframe
              src={`https://www.youtube.com/embed/${videoKey}?disablekb=1&rel=0&autoplay=1`}
              title={title}
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
              allowFullScreen
            />
          </div>
        </figure>
      )}
    </article>
  );
}
