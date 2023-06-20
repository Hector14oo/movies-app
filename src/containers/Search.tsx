'use client';

import { useState, ChangeEvent } from 'react';
import { CardPoster, InputSearcher } from '@components';
import { useSearch } from '@hooks/useSearch';
import { Search as SearchFigure } from 'assets/figures';

import styles from '@styles/containers/Search.module.css';

export function Search() {
  const [value, setValue] = useState('');
  const { movies, error } = useSearch(value);
  const className = error ? 'FLEX' : movies.length ? 'GRID' : 'FLEX';

  const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const shorTitle = (title: string) => {
    if (title.length > 40) return title.substring(0, 40).concat('...');

    return title;
  };

  return (
    <main className={styles.Search}>
      <InputSearcher
        onChange={handleOnChange}
        value={value}
        reset={() => setValue('')}
      />
      <section className={styles[className]}>
        {error ? (
          <>
            <SearchFigure />
            <h1>No results found</h1>
          </>
        ) : (
          <>
            {movies.length ? (
              <>
                {movies.map(({ id, date, title, overview, rank, poster }) => (
                  <CardPoster
                    key={id}
                    id={id}
                    date={date || 'Unknown date'}
                    title={shorTitle(title)}
                    overview={overview}
                    votes={rank}
                    poster={poster}
                  />
                ))}
              </>
            ) : (
              <>
                <SearchFigure />
                <h1>The movies you search for will appear here.</h1>
              </>
            )}
          </>
        )}
      </section>
    </main>
  );
}
