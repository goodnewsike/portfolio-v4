import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    require('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    console.log = () => {};
  }
  return <Component {...pageProps} />
}

export default MyApp
