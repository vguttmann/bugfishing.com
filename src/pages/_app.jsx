import React from 'react';
import dynamic from 'next/dynamic';
import Head from 'next/head';
// Syntax highlighting for posts
import Prism from 'prismjs';
// Twemoji for continuity
import twemoji from 'twemoji';
// Global Components
import NavBar from '../components/NavBar';
import Page from '../components/Page';
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
// Global Styles and Stuff
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    Prism.highlightAll();
    document.body = twemoji.parse(document.body, { folder: 'svg', ext: '.svg' });
  }, [Prism, twemoji]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <NavBar />
      <Page>
        <Component {...pageProps} />
      </Page>
      <Footer />
    </>
  );
}
