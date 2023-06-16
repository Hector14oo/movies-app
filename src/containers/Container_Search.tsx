'use client';

import { useState, ChangeEvent } from 'react';
import { Card_Poster, Input_Searcher } from '@components';
import { Search } from 'assets/figures';
import styles from '@styles/containers/Search.module.css';

export function Container_Search() {
  const [value, setValue] = useState('');
  const [condition, setCondition] = useState(false);
  const className = condition ? 'GRID' : 'FLEX';

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);

    if (e.target.value.length <= 0) {
      setCondition(false);
      return;
    }

    setCondition(true);
  };

  return (
    <main className={styles.Search}>
      <Input_Searcher
        onChange={handleOnChange}
        value={value}
      />
      <section className={styles[className]}>
        {condition ? (
          <>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((_, i) => (
              <Card_Poster
                key={i}
                id={i}
                title='Super Mario Bros'
                date='Apr 05, 2023'
                votes='6.2'
              />
            ))}
          </>
        ) : (
          <>
            <Search
              width={225}
              height={200}
            />
            <h1>The movies you search for will appear here.</h1>
          </>
        )}
      </section>
    </main>
  );
}
