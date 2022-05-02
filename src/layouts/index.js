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
      </Helmet>
      <Navbar />
        {props.children}
      <Footer />
    </>
  );
} 
