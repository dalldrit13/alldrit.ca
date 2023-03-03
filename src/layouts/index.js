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
        <meta name="description" content="Alldrit Tech is a Canadian company that provides web and app development, consulting, and hosting services to help businesses succeed. Contact us to learn more about how we can support your business." />
        <meta name="og:description" content="Alldrit Tech is a Canadian company that provides web and app development, consulting, and hosting services to help businesses succeed. Contact us to learn more about how we can support your business." />
        <meta name="og:type" content="website" />
        <meta name="og:image" content="/images/stars.jpeg" />
        <link rel="icon" type="image/svg+xml" href="/images/logo.png" />
        <link rel="canonical" />
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-SD0KB8V7DW" />
        <script src="/gtag.js" />
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
