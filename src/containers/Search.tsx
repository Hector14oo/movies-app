'use client';

import { useState, ChangeEvent } from 'react';
import { CardPoster, InputSearcher } from '@components';
import { useSearch } from '@hooks/useSearch';
import { ErrorFigure, SearchFigure } from 'assets/figures';

import styles from '@styles/containers/Search.module.css';

export function Search() {
  const [value, setValue] = useState('');
  const { movies, noResults, error } = useSearch(value);

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
      {error.state ? (
        <section className={styles.FLEX}>
          <ErrorFigure
            width={300}
            height={250}
          />
          <h1>{"We're sorry, an error has occurred :("}</h1>
          <p>{error.error?.toString()}, try again</p>
        </section>
      ) : (
        <>
          {movies.length === 0 && !noResults && (
            <section className={styles.FLEX}>
              <SearchFigure />
              <h1>The movies you search for will appear here.</h1>
            </section>
          )}

          {movies.length > 0 && !noResults && (
            <section className={styles.GRID}>
              {movies.map(({ id, date, title, overview, votes, poster }) => (
                <CardPoster
                  key={id}
                  id={id}
                  date={date || 'Unknown date'}
                  title={shorTitle(title)}
                  overview={overview}
                  votes={votes}
                  poster={poster}
                />
              ))}
            </section>
          )}

          {noResults && (
            <section className={styles.FLEX}>
              <SearchFigure />
              <h1>No results found</h1>
            </section>
          )}
        </>
      )}
    </main>
  );
}
