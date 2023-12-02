import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'

// Functional Libraries
import useRocket from '../hooks/useRocket'

// Constants

// Components
import Wrapper from '../layouts'

// Images

// Stylesheets

export default function About() {
  useRocket()

  return (
    <Wrapper>
      <Helmet>
        <title>Alldrit Tech | About Us</title>
        <meta name="og:title" content="Alldrit Tech | About Us" />
      </Helmet>
      <div className="landing-container" data-testid="about-container">
        <div className="landing" style={{ background: `radial-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.1)), url(/images/stars5.jpeg)` }}>
          <h1 className="title teal-glow">About</h1>
          <p className="subtitle blue-glow">Software Simplified</p>
          <a href="#about">
            <img className="arrow" src="/images/arrow.png" style={{ width: 30 }} alt="scroll down" />
          </a>
        </div>
        <section id="about" className="landing sidebyside">
          <div>
            <h1 className="title">We Do It All</h1>
            <p className="subtitle">
              Alldrit Technologies is owned by Devin Alldrit, ex-founder/CTO of a recently acquired tech startup:&nbsp;
              <a href="https://afino.io" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
                Afino.io
              </a>
              .
              <br />
              <br />
              With over 4 years of experience and 15+ projects launched we have the expertise to make your project a reality
            </p>
            <Link to="/projects">
              <button>Our Work</button>
            </Link>
          </div>
        </section>
        <div id="fardown">
          <section className="landing sidebyside">
            <div>
              <h1 className="title">Free Consultation</h1>
              <p className="subtitle">
                Reach out with a brief summary of what your looking for and we&apos;ll setup a quick call to see if it&apos;s something we can do
              </p>
              <Link to="/contact">
                <button>Contact</button>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  )
}
