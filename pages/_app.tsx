
import '../app/globals.css';
import type { AppProps } from 'next/app';
import Header from '../components/header/Header';
import Footer from '@/components/footer/Footer';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}

export default MyApp;
