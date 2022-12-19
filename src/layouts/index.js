import React from 'react';
import { Helmet } from 'react-helmet';
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import '../styles/global.css';

export default function Wrapper(props) {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alldrit Tech | Make your dream a reality</title>
        <meta name="description" content="Hello World! My name is Devin and I'm a computer engineer, founder of a company, singer song writer and I'm trying to change the world one line of code at a time." />
        <link rel="icon" type="image/svg+xml" href="/images/logo.png" />
      </Helmet>
      <Navbar />
        <main>
         {props.children}
        </main>
        <a href="#nav"><img src="/images/rocket.gif" className="rocket" loading="lazy" /></a>
      <Footer />
    </>
  );
} 
