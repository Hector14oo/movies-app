'use client';

import { SyntheticEvent, useRef } from 'react';
import { ButtonBack, CardPoster } from '@components';
import { MovieType, sliderClickTypes } from '@interfaces';

import styles from '@styles/components/Slider.module.css';

export function Slider({ array }: { array: Array<MovieType> | [] }) {
  const slider = useRef<HTMLDivElement>(null);

  const cardsResizer = (current: HTMLDivElement, targets: number[]) => {
    const targetNode1 = current.children[targets[0]] as HTMLAnchorElement;
    const targetNode2 = current.children[targets[1]] as HTMLAnchorElement;
    const targetNode3 = current.children[targets[2]] as HTMLAnchorElement;

    targetNode1.classList.remove(`${styles.onView}`);
    targetNode2.classList.add(`${styles.onView}`);
    targetNode3.classList.remove(`${styles.onView}`);
    targetNode1.style.transform = 'scale(.85)';
    targetNode2.style.transform = 'scale(1)';
    targetNode3.style.transform = 'scale(.85)';
  };

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

      cardsResizer(current, [0, 1, 2]);

      current.style.transition = 'none';
      current.style.transform = 'translateX(calc(-200vw + 40px)';

      setTimeout(() => {
        current.style.transition = 'all 700ms var(--TRANSITION-1)';
        current.style.transform = 'translateX(calc(-100vw + 20px)';
      }, 30);
    } else {
      cardsResizer(current, [1, 2, 3]);

      current.style.transition = 'all 700ms var(--TRANSITION-1)';
      current.style.transform = 'translateX(calc(-200vw + 40px)';

      setTimeout(() => {
        current.appendChild(current.children[0]);
        current.style.transition = 'none';
        current.style.transform = 'translateX(calc(-100vw + 20px)';
      }, 700);
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
            className={i === 1 ? styles.onView : ''}
          />
        ))}
      </div>
    </>
  );
}
