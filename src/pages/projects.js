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
      <div className="landing-container" data-testid="projects-container">
        <div
          className="landing"
          style={{
            background: `radial-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.3)), url(/images/stars3.jpeg)`,
          }}
        >
          <h1 className="title teal-glow">Projects</h1>
          <p className="subtitle blue-glow">See What We Can Do</p>
          <a href="#project1">
            <img
              className="arrow"
              src="/images/arrow.png"
              style={{ width: 30 }}
              alt="Scroll down"
            />
          </a>
        </div>
        <section id="project1" data-testid="projects-section1" className="landing sidebyside">
          <div>
            <div className="project-title">
              <h1 className="title">Toodoo</h1>
              <div className="project-status active">Active</div>
            </div>
            <p className="subtitle">
              Toodoo is a beautifully simple to-do list app that helps you focus on one task at a
              time. Inspired by the swipe gestures of dating apps, Toodoo turns your task list into
              a satisfying, game-like experience that actually motivates you to get things done.
            </p>
            <div className="chips">
              <a className="chip" href="https://toodoo.ca" target="_blank" rel="noreferrer">
                toodoo.ca
              </a>
              <a
                className="chip"
                href="https://apps.apple.com/ca/app/toodoo-list/id6745438335"
                target="_blank"
                rel="noreferrer"
              >
                iOS App Store
              </a>
              <a className="chip" rel="noreferrer">
                Android Coming Soon
              </a>
            </div>
          </div>
          <img src="/images/toodoo.png" alt="Toodoo feature page" loading="lazy" />
        </section>
        <section className="landing sidebyside reverse-stack">
          <img src="/images/mailday.png" alt="Mailday logo" loading="lazy" />
          <div>
            <div className="project-title">
              <h1 className="title">MailDay</h1>
              <div className="project-status active">Active</div>
            </div>
            <p className="subtitle">
              Mailday delivers a fully personalized email to your inbox every morning. Build your
              perfect daily digest with drag-and-drop widgets like weather, stock updates,
              calendars, birthdays, top news, and more—customized exactly how you want it.
            </p>
            <div className="chips">
              <a className="chip" href="https://mailday.ca" target="_blank" rel="noreferrer">
                mailday.ca
              </a>
            </div>
          </div>
        </section>
        <section className="landing sidebyside">
          <div>
            <div className="project-title">
              <h1 className="title">QRQR</h1>
              <div className="project-status active">Active</div>
            </div>
            <p className="subtitle">
              QRQR makes it effortless for businesses to manage facility maintenance requests from
              patrons. With QRQR, businesses can easily generate custom QR codes that are displayed
              in restrooms, break rooms, and other facility areas. Patrons can scan the QR code to
              quickly submit requests for cleaning, re-stocking, or any other maintenance needs, all
              through a simple online form.
            </p>
            <div className="chips">
              <a className="chip" href="https://qrqr.ca" target="_blank" rel="noreferrer">
                qrqr.ca
              </a>
            </div>
          </div>
          <img src="/images/qrqr.png" alt="QRQR landing page" loading="lazy" />
        </section>
        <section className="landing sidebyside reverse-stack">
          <div>
            <div className="project-title">
              <h1 className="title">Task Beaver</h1>
              <div className="project-status active">Active</div>
            </div>
            <p className="subtitle">
              Task Beaver is an in house project of Alldrit Technologies. It automates assigment of
              internal help requests within organizations for quicker response times, greater
              accountability, and improved tracking.
            </p>
            <div className="chips">
              <a className="chip" href="https://taskbeaver.ca" target="_blank" rel="noreferrer">
                taskbeaver.ca
              </a>
              {/*<a
                className="chip"
                href="https://slack.com/apps/A06HKTPSSQM-taskbeaver?tab=more_info"
                target="_blank"
                rel="noreferrer"
              >
                Slack Listing
              </a>*/}
            </div>
          </div>
          <img src="/images/taskbeaver.png" alt="Task Beaver landing page" loading="lazy" />
        </section>
        <section className="landing sidebyside">
          <img src="/images/afino.png" alt="Afino landing page" loading="lazy" />
          <div>
            <div className="project-title">
              <h1 className="title">Afino</h1>
              <div className="project-status active">Active</div>
            </div>
            <p className="subtitle">
              Afino was co-founded by Devin Alldrit, owner of Alldrit Tech, and was acquired in
              2022. It&apos;s main offering is a Slack app that helps bridge the gap between
              in-office and remote team members.
            </p>
            <div className="chips">
              <a className="chip" href="https://afino.io" target="_blank" rel="noreferrer">
                afino.io
              </a>
              <a
                className="chip"
                href="https://slack.com/apps/A0213G9H2E5-afino?tab=more_info"
                target="_blank"
                rel="noreferrer"
              >
                Slack Listing
              </a>
            </div>
          </div>
        </section>
        <div id="fardown">
          <section className="landing sidebyside reverse-stack">
            <div>
              <div className="project-title">
                <h1 className="title">Sisterverse</h1>
                <div className="project-status inactive">Inactive</div>
              </div>
              <p className="subtitle">
                The SolSisters is a popular female led NFT project on the Solana blockchain. The
                Sisterverse is an interactive 3D platform for holders to show off their collection
                and complete missions in the paired game.
              </p>
              <div className="chips">
                <a
                  className="chip"
                  href="https://alldrit.ca/project/sisterverse"
                  target="_blank"
                  rel="noreferrer"
                >
                  sisterverse.xyz (Demo)
                </a>
              </div>
            </div>
            <img src="/images/sisterverse.gif" alt="Sisterverse Game Screenshot" loading="lazy" />
          </section>
          <section className="landing sidebyside">
            <img
              src="/images/sisterverse_game.png"
              alt="Sisterverse Game Screenshot"
              loading="lazy"
            />
            <div>
              <div className="project-title">
                <h1 className="title">Sisterverse Game</h1>
                <div className="project-status inactive">Inactive</div>
              </div>
              <p className="subtitle">
                A 16bit style, object avoidance game with 5 different worlds tied to the
                Sisterverse. Players must hold a SolSister token in their wallet and can play as one
                of their SolSisters, earning boosts from different traits.
              </p>
              <div className="chips">
                <a
                  className="chip"
                  href="https://alldrit.ca/project/sisterverse_game"
                  target="_blank"
                  rel="noreferrer"
                >
                  game.sisterverse.xyz (Demo)
                </a>
              </div>
            </div>
          </section>
          <section className="landing sidebyside reverse-stack">
            <div>
              <div className="project-title">
                <h1 className="title">UpTrend</h1>
                <div className="project-status active">Active</div>
              </div>
              <p className="subtitle">
                UpTrend is a platform for Social Media Content Creators to grow and promote
                themselves, while simultaneously getting paid for sharing content.
              </p>
              <div className="chips">
                <a className="chip" href="https://uptrendapp.io" target="_blank" rel="noreferrer">
                  uptrendapp.io
                </a>
                <a
                  className="chip"
                  href="https://beta.uptrendapp.io"
                  target="_blank"
                  rel="noreferrer"
                >
                  beta.uptrendapp.io
                </a>
              </div>
            </div>
            <img src="/images/uptrend.png" alt="UpTrend screenshot" loading="lazy" />
          </section>
          <section className="landing sidebyside">
            <img src="/images/netcv.png" alt="NetCV landing page screenshot" loading="lazy" />
            <div>
              <div className="project-title">
                <h1 className="title">NetCV</h1>
                <div className="project-status inactive">Inactive</div>
              </div>
              <p className="subtitle">
                The quickest way for UI/UX specialists to create a digital resume online!
              </p>
            </div>
          </section>
          <section className="landing sidebyside reverse-stack">
            <div>
              <div className="project-title">
                <h1 className="title">Codey</h1>
                <div className="project-status inactive">Inactive</div>
              </div>
              <p className="subtitle">
                A platform for Social Media Content Creators to share all their promo codes and
                affiliate links in one spot for their audience.
              </p>
              <div className="chips">
                <a
                  className="chip"
                  href="https://codey-frontend-i6aq2sjt0-dalldrit13s-projects.vercel.app"
                  target="_blank"
                  rel="noreferrer"
                >
                  thecodey.com (Demo)
                </a>
              </div>
            </div>
            <img src="/images/codey.png" alt="Codey landing page screenshot" loading="lazy" />
          </section>
          <section className="landing sidebyside">
            <img src="/images/bet99.png" alt="Bet 99 affiliates site screenshot" loading="lazy" />
            <div>
              <div className="project-title">
                <h1 className="title">BET99</h1> <div className="project-status active">Active</div>
              </div>
              <p className="subtitle">A simple landing page for BET99&apos;s affiliate program.</p>
              <div className="chips">
                <a
                  className="chip"
                  href="https://bet99affiliates.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  bet99affiliates.com
                </a>
              </div>
            </div>
          </section>
          <section className="landing sidebyside reverse-stack">
            <div>
              <div className="project-title">
                <h1 className="title">Soldarity</h1>
                <div className="project-status active">Active</div>
              </div>
              <p className="subtitle">
                Soldarity is an in house hobby project bringing a new spin to P2E NFT collections.
                Each NFT will represent a playable character in our 16bit style game. Our in game
                currency will be earnable through gameplay and staking. We also plan to introduce
                the concept of semi-permanence with game item NFTs where metadata traits change with
                gameplay. Additionally, an open source tileset will be released so anyone can build
                upon the world.
              </p>
              <div className="chips">
                <a className="chip" href="https://soldarity.com" target="_blank" rel="noreferrer">
                  soldarity.com
                </a>
              </div>
            </div>
            <img src="/images/soldarity.gif" alt="Soldarity Coming Soon Page" loading="lazy" />
          </section>
          <section className="landing sidebyside">
            <div>
              <div className="project-title">
                <h1 className="title">Tümstone</h1>
                <div className="project-status active">Active</div>
              </div>
              <p className="subtitle">
                When we die what do we leave behind? Tombstones have been around for centuries but
                in todays digital age we can do better. Tümstone is another future in house project
                allowing users to signup and create a webpage to display videos, photos, notes to
                loved ones and much more. Powered by the permanent web, information is stored for
                future generations to view. Additionally, our vault feature, powered by the same
                cryptographic security powering blockchains, will allow you to encrpyt information
                for select individuals to access after your passing.
              </p>
            </div>
          </section>
        </div>
      </div>
    </Wrapper>
  )
}
