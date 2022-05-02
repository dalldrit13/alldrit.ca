import React from 'react';
import { Helmet } from 'react-helmet';
import Button from '@material-ui/core/Button';
import Wrapper from '../layouts';
import '../styles/home.css'

export default function FourOhFour() {
  return (
    <Wrapper active="index">
      <Helmet>
        <meta name="robots" content="noindex" />
      </Helmet>
      <div className="home-container">
        <div style={{ fontSize: 36, paddingTop: 140 }}>Sorry we couldn't find the page you're looking for</div>
        <Button className="learn-btn" variant="contained" color="primary" href="/">Home</Button>
      </div>
    </Wrapper>
  );
}
