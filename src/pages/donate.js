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
        <script async src="https://js.stripe.com/v3/buy-button.js" />
      </Helmet>
      <div className="landing-container" data-testid="donate-container">
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
              <div style={{ marginTop: 35, display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center' }}>
                <p>e-transfer: Devin Alldrit donate@alldrit.ca</p>
                <strong>OR</strong>
                <stripe-buy-button
                  buy-button-id="buy_btn_1P8DikELLYfBs7aHXatUz63M"
                  publishable-key="pk_live_51Kv0leELLYfBs7aHXdIOJwd2pEC4vodIk4ToU7CAfF9OESWyu6zUWfJ8VQImWeosavGcldsfmD9yyY9GyQZVwsW300v6lGB8CQ"
                ></stripe-buy-button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
