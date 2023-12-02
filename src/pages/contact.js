import React from 'react'
import { Helmet } from 'react-helmet'

// Functional Libraries

// Constants

// Components
import Wrapper from '../layouts'

// Images

// Stylesheets

export default function Contact() {
  return (
    <Wrapper>
      <Helmet>
        <title>Alldrit Tech | Contact Us</title>
        <meta name="og:title" content="Alldrit Tech | Contact Us" />
      </Helmet>
      <div className="landing-container" data-testid="contact-container">
        <div
          className="landing"
          style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/stars2.jpeg)`, height: 'calc(100vh - 50px)' }}
        >
          <h1 className="title teal-glow">Contact Us</h1>
          <div className="subtitle" style={{ width: 'max(40vw, 300px)', borderRadius: 15, padding: 30, backgroundColor: '#0f0f0f' }}>
            Lets get your project in motion!
            <br />
            <br />
            Email: info@alldrit.ca
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
