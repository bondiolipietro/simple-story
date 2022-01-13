import type { AppProps } from 'next/app';
import Navbar from '../components/modules/Navbar';
import Footer from '../components/modules/Footer';

import '../styles/main.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar></Navbar>
      <Component {...pageProps} />
      <Footer></Footer>
    </>
  );
}

export default MyApp;
