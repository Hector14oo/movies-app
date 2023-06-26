'use client';

import { SyntheticEvent, useRef } from 'react';
import { ButtonBack, CardPoster } from '@components';
import { MovieType, sliderClickTypes } from '@interfaces';

import styles from '@styles/components/Slider.module.css';

export function Slider({ array }: { array: Array<MovieType> | [] }) {
  const slider = useRef<HTMLDivElement>(null);

  const handleClick = ({ e, type }: sliderClickTypes) => {
    if (!slider.current?.children.length) return;
    const button = e.target as HTMLButtonElement;
    const { current } = slider;
    button.disabled = true;

    setTimeout(() => (button.disabled = false), 1000);

    if (type === 'PREV') {
      current.insertBefore(
        current.children[current.children.length - 1],
        current.children[0]
      );
    } else {
      current.appendChild(current.children[0]);
    }

    for (let i = 0; i < current.children.length; i++) {
      const child = current.children[i] as HTMLElement;
      child.style.setProperty('--id', `${i}`);
    }
  };

  return (
    <>
      <div className={styles.Buttons}>
        <ButtonBack
          onClick={(e: SyntheticEvent) => handleClick({ e, type: 'PREV' })}
        />
        <ButtonBack
          onClick={(e: SyntheticEvent) => handleClick({ e, type: 'NEXT' })}
        />
      </div>
      <div
        ref={slider}
        className={styles.Slider}
      >
        {array?.map(({ id, title, date, votes, poster }, i) => (
          <CardPoster
            key={id}
            id={id}
            title={title}
            date={date}
            votes={votes}
            poster={poster}
            cssVar={{ '--id': i }}
          />
        ))}
      </div>
    </>
  );
}
