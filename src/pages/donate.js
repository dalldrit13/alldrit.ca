import React from 'react'
import { Helmet } from 'react-helmet'

// Functional Libraries

// Constants

// Components
import Wrapper from '../layouts'

// Images

// Stylesheets

export default function Donate() {
  return (
    <Wrapper>
      <Helmet>
        <title>Alldrit Tech | Donate</title>
        <meta name="og:title" content="Alldrit Tech | Donate" />
      </Helmet>
      <div className="landing-container">
        <div
          className="landing"
          style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/stars2.jpeg)`, height: 'calc(100vh - 50px)' }}
        >
          <h1 className="title teal-glow">Donate</h1>
          <div className="subtitle" style={{ width: 'max(40vw, 300px)', borderRadius: 15, padding: 30, backgroundColor: '#0f0f0f' }}>
            Support development of our services such as our free to use&nbsp;
            <a href="https://www.npmjs.com/~alld_tech" target="_blank" rel="noreferrer" style={{ textDecoration: 'underline' }}>
              npm packages
            </a>
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <div style={{ marginTop: 35, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'flex-start' }}>
                <p>e-transfer: Devin Alldrit donate@alldrit.ca</p>
                <p>BTC: bc1qh7rjam39e3nay2u2rfq74tyaccfjh9rl55s0gm</p>
                <p>ETH: 0x689A662fbF3d59c806d76E0F519EEC634Fb81b18</p>
                <p>SOL: 8z41suyMDM3oJMpHyVvJKBvUQ6riVzk8U123Shqepsov</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
