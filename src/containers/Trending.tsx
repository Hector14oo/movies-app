import { Slider } from '@components';
import { useTrending } from '@hooks/useTrending';
import styles from '@styles/containers/Trending.module.css';
import { ErrorFigure } from 'assets/figures';

export async function Trending() {
  const { result, error } = await useTrending();
  return (
    <main className={styles.Trending}>
      {error ? (
        <main className={styles.MainError}>
          <ErrorFigure
            width={300}
            height={250}
          />
          <h1>{"We're sorry, an error has occurred :("}</h1>
          <p>{error?.toString()}, try again</p>
        </main>
      ) : (
        <Slider array={result ?? []} />
      )}
    </main>
  );
}
