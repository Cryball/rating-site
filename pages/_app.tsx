import { AppProps } from 'next/dist/shared/lib/router/router';
import Head from 'next/head';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps): JSX.Element {

  return <>
    <Head>
      <title>Top Rating</title>
      <link rel="icon" href="/favicon.ico" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Noto+Sans&family=Noto+Sans+Mono:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
    </Head>
    <Component {...pageProps} /></>;
}

export default MyApp;
