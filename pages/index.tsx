import type { NextPage } from 'next';
import Head from 'next/head';
import Footer from '../components/base/footer';
import Header from '../components/base/header';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Next Template</title>
        <meta name="description" content="Next template" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <main></main>

      <Footer />
    </div>
  );
};

export default Home;
