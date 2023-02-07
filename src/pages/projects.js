import React from 'react'
import { Helmet } from 'react-helmet'

// Functional Libraries
import useRocket from '../hooks/useRocket'

// Constants

// Components
import Wrapper from '../layouts'

// Images

// Stylesheets

export default function Projects() {
  useRocket()

  return (
    <Wrapper>
      <Helmet>
        <title>Alldrit Tech | Our Projects</title>
        <meta name="og:title" content="Alldrit Tech | Our Projects" />
      </Helmet>
      <div className="landing-container">
        <div className="landing" style={{ background: `radial-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(/images/stars3.jpeg)` }}>
          <h1 className="title teal-glow">Projects</h1>
          <p className="subtitle blue-glow">See What We Can Do</p>
          <a href="#project1">
            <img className="arrow" src="/images/arrow.png" style={{ width: 30 }} />
          </a>
        </div>
        <section id="project1" className="landing sidebyside">
          <div>
            <h1 className="title">Afino</h1>
            <p className="subtitle">
              Afino was co-founded by Devin Alldrit, owner of Alldrit Tech, and was acquired in 2022. It's main offering is a Slack app that helps
              bridge the gap between in-office and remote team members.
            </p>
            <div className="chips">
              <a className="chip" href="https://afino.io" target="_blank" rel="noreferrer">
                afino.io
              </a>
              <a className="chip" href="https://slack.com/apps/A0213G9H2E5-afino?tab=more_info" target="_blank" rel="noreferrer">
                Slack Listing
              </a>
            </div>
          </div>
          <img src="/images/afino.png" alt="Afino landing page" loading="lazy" />
        </section>
        <div id="fardown">
          <section className="landing sidebyside reverse-stack">
            <img src="/images/sisterverse.gif" alt="Sisterverse Game Screenshot" loading="lazy" />
            <div>
              <h1 className="title">Sisterverse</h1>
              <p className="subtitle">
                The SolSisters is a popular female led NFT project on the Solana blockchain. The Sisterverse is an interactive 3D platform for holders
                to show off their collection and complete missions in the paired game.
              </p>
              <div className="chips">
                <a className="chip" href="https://solsisters.xyz" target="_blank" rel="noreferrer">
                  solsisters.xyz
                </a>
                <a className="chip" href="https://alldrit.ca/project/sisterverse" target="_blank" rel="noreferrer">
                  sisterverse.xyz
                </a>
              </div>
            </div>
          </section>
          <section className="landing sidebyside">
            <div>
              <h1 className="title">Sisterverse Game</h1>
              <p className="subtitle">
                A 16bit style, object avoidance game with 5 different worlds tied to the Sisterverse. Players must hold a SolSister token in their
                wallet and can play as one of their SolSisters, earning boosts from different traits.
              </p>
              <div className="chips">
                <a className="chip" href="https://alldrit.ca/project/sisterverse_game" target="_blank" rel="noreferrer">
                  game.sisterverse.xyz
                </a>
              </div>
            </div>
            <img src="/images/sisterverse_game.png" alt="Sisterverse Game Screenshot" loading="lazy" />
          </section>
          <section className="landing sidebyside reverse-stack">
            <img src="/images/uptrend.png" alt="" loading="lazy" />
            <div>
              <h1 className="title">UpTrend</h1>
              <p className="subtitle">
                UpTrend is a platform for Social Media Content Creators to grow and promote themselves, while simultaneously getting paid for sharing
                content.
              </p>
              <div className="chips">
                <a className="chip" href="https://uptrendapp.io" target="_blank" rel="noreferrer">
                  uptrendapp.io
                </a>
                <a className="chip" href="https://beta.uptrendapp.io" target="_blank" rel="noreferrer">
                  beta.uptrendapp.io
                </a>
              </div>
            </div>
          </section>
          <section className="landing sidebyside">
            <div>
              <h1 className="title">NetCV</h1>
              <p className="subtitle">The quickest way for UI/UX specialists to create a digital resume online!</p>
              <div className="chips">
                <a className="chip" href="https://netcv.io" target="_blank" rel="noreferrer">
                  netcv.io
                </a>
              </div>
            </div>
            <img src="/images/netcv.png" alt="Codey landing page screenshot" loading="lazy" />
          </section>
          <section className="landing sidebyside reverse-stack">
            <img src="/images/codey.png" alt="Codey landing page screenshot" loading="lazy" />
            <div>
              <h1 className="title">Codey</h1>
              <p className="subtitle">
                A platform for Social Media Content Creators to share all their promo codes and affiliate links in one spot for their audience.
              </p>
              <div className="chips">
                <a className="chip" href="https://thecodey.com" target="_blank" rel="noreferrer">
                  thecodey.com
                </a>
              </div>
            </div>
          </section>
          <section className="landing sidebyside">
            <div>
              <h1 className="title">BET99</h1>
              <p className="subtitle">A simple landing page for BET99's affiliate program.</p>
              <div className="chips">
                <a className="chip" href="https://bet99affiliates.com" target="_blank" rel="noreferrer">
                  bet99affiliates.com
                </a>
              </div>
            </div>
            <img src="/images/bet99.png" alt="Bet 99 affiliates site screenshot" loading="lazy" />
          </section>
          <section className="landing sidebyside reverse-stack">
            <img src="/images/soldarity.gif" alt="Soldarity Coming Soon Page" loading="lazy" />
            <div>
              <h1 className="title">Soldarity</h1>
              <p className="subtitle">
                Soldarity is an in house hobby project bringing a new spin to P2E NFT collections. Each NFT will represent a playable character in our
                16bit style game. Our in game currency will be earnable through gameplay and staking. We also plan to introduce the concept of
                semi-permanence with game item NFTs where metadata traits change with gameplay. Additionally, an open source tileset will be released
                so anyone can build upon the world.
              </p>
              <div className="chips">
                <a className="chip" href="https://soldarity.com" target="_blank" rel="noreferrer">
                  soldarity.com
                </a>
              </div>
            </div>
          </section>
          <section className="landing sidebyside">
            <div>
              <h1 className="title">QRQR</h1>
              <p className="subtitle">
                QRQR is a future in house project for allowing businesses to manage service requests. Businesses will be able to create unique
                printable QR codes that customers can scan to request service. The main target is facilities that might need maintenance or restocking
                based on use (e.g. bathrooms).
              </p>
            </div>
          </section>
          <section className="landing sidebyside">
            <div>
              <h1 className="title">Tümstone</h1>
              <p className="subtitle">
                When we die what do we leave behind? Tombstones have been around for centuries but in todays digital age we can do better. Tümstone is
                another future in house project allowing users to signup and create a webpage to display videos, photos, notes to loved ones and much
                more. Powered by the permanent web, information is stored for future generations to view. Additionally, our vault feature, powered by
                the same cryptographic security powering blockchains, will allow you to encrpyt information for select individuals to access after
                your passing.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  )
}
