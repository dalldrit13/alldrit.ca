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

export default function Index() {
  useRocket()

  return (
    <Wrapper>
      <Helmet>
        <title>Alldrit Tech | Make your dream a reality</title>
        <meta name="og:title" content="Alldrit Tech | Make your dream a reality" />
      </Helmet>
      <div className="landing-container" data-testid="landing-container">
        <section
          className="landing"
          style={{ background: `radial-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0)), url(/images/stars.jpeg)` }}
        >
          <h1 className="title teal-glow">Alldrit Tech</h1>
          <p className="subtitle  blue-glow">Making Dreams Reality</p>
          <a href="#overview">
            <img className="arrow" src="/images/arrow.png" style={{ width: 30 }} alt="scroll down" />
          </a>
        </section>
      </div>
      <section id="overview" className="landing sidebyside">
        <div id="firstEl">
          <h1 className="title">Overview</h1>
          <p className="subtitle">
            We are a Toronto based software development company making in house products and building out custom software solutions for large and
            small businesses alike
          </p>
          <Link to="/about">
            <button>Learn More</button>
          </Link>
        </div>
        <img src="/images/logo.gif" alt="Alldrit Technologies Gif" loading="lazy" />
      </section>
      <div id="fardown">
        <section className="landing sidebyside reverse-stack">
          <img src="/images/sisterverse.gif" alt="project example" loading="lazy" style={{ borderRadius: 15 }} />
          <div>
            <h1 className="title">Our Work</h1>
            <p className="subtitle">
              From interactive 3d blockchain platforms to corporate audit software to Slack apps, we do it all! Curious if we can build out your idea?
              Setup a free consultation by emailing info@alldrit.ca
            </p>
            <Link to="/projects">
              <button>Projects</button>
            </Link>
          </div>
        </section>
        <section className="landing sidebyside">
          <div style={{ alignItems: 'center' }}>
            <h1 className="title">Got A Project In Mind?</h1>
            <Link to="/contact">
              <button>Contact</button>
            </Link>
          </div>
        </section>
      </div>
    </Wrapper>
  )
}
