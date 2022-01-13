import type { NextPage } from 'next';
import Head from 'next/head';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Simple Story</title>
        <meta name="description" content="Just a simple page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={`flex_center`}>Simple Story</main>
    </div>
  );
};

export default Home;
