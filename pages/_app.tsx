import { useEffect } from 'react';
import type { AppProps } from 'next/app';
import { withRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.scss';
import '../styles/index.scss';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    typeof document !== undefined ? require('bootstrap/dist/js/bootstrap.bundle.min.js') : null;
  }, []);

  if (process.env.NODE_ENV !== 'development') {
    console.log = () => {};
  };

  return <Component {...pageProps} />;
};

export default withRouter(MyApp);
