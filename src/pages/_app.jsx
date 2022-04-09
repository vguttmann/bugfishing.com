import React from 'react';
import dynamic from 'next/dynamic';
// Syntax highlighting for posts
import Prism from 'prismjs';
// Global Components
import NavBar from '../components/NavBar';
import Page from '../components/Page';
const Footer = dynamic(() => import('../components/Footer'), { ssr: false });
// Global Styles and Stuff
import '../styles/globals.scss';

export default function App({ Component, pageProps }) {
  React.useEffect(() => {
    Prism.highlightAll();
  });

  return (
    <>
      <NavBar />
      <Page>
        <Component {...pageProps} />
      </Page>
      <Footer />
    </>
  );
}
