import type { NextPage } from 'next';
import Head from 'next/head';
import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Hello world</title>
        <meta name="description" content="Just a simple page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>Hello world</main>
    </div>
  );
};

export default Home;
