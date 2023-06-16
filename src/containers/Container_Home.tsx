import { Card_Poster, Card_Trailer } from '@components';
import styles from '@styles/containers/Home.module.css';

export function Container_Home() {
  return (
    <main className={styles.Main}>
      <h1>Trending Movies Of The Week</h1>
      <section>
        <Card_Poster
          id={1}
          title='John Wick 4'
          date='March 22, 2023'
          votes='7.2'
        />
        <Card_Poster
          id={2}
          title='Spiderman: Across The Spider Verse'
          date='May 21, 2023'
          votes='5.0'
        />
      </section>
      <h2>Lastest Trailers</h2>
      <section>
        <Card_Trailer title='Super Mario Bros' />
        <Card_Trailer title='Super-Man'/>
      </section>
    </main>
  );
}
