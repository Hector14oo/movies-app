'use client';
import { SyntheticEvent, useRef } from 'react';
import { Button_Back, Card_Poster } from '@components';
import styles from '@styles/containers/Trending.module.css';

interface handleClickTypes {
  e: SyntheticEvent;
  type: 'PREV' | 'NEXT';
}

export function Container_Trending() {
  const slider = useRef<HTMLDivElement>(null);

  const handleClick = ({ e, type }: handleClickTypes) => {
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
    <main className={styles.Trending}>
      <div className={styles.Buttons}>
        <Button_Back
          handleClick={(e: SyntheticEvent) => handleClick({ e, type: 'PREV' })}
        />
        <Button_Back
          handleClick={(e: SyntheticEvent) => handleClick({ e, type: 'NEXT' })}
        />
      </div>
      <div
        ref={slider}
        className={styles.Slider}
      >
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((_, i) => (
          <Card_Poster
            key={'POSTER-' + i}
            id={i}
            title='Super Mario Bros'
            date='Apr 05, 2023'
            votes='6.2'
            cssVar={{ '--id': i }}
          />
        ))}
      </div>
    </main>
  );
}
