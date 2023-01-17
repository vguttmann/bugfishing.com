import React from 'react';
import Head from 'next/head';
import NextApp from 'next/app';
// Syntax highlighting for posts
import Prism from 'prismjs';
// Global Components
import NavBar from '../components/NavBar';
import Page from '../components/Page';
import Footer from '../components/Footer';
// Global Styles and Stuff
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    Prism.highlightAll();
  }, [Prism]);

  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.png" />
        <a rel="me" href="https://twitter.com/bugfish03"></a>
      </Head>
      <NavBar />
      <Page>
        <Component {...pageProps} />
      </Page>
      <Footer />
    </>
  );
}
