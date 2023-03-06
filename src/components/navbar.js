import React from 'react'
import { Link } from 'gatsby'
import { useLocation } from "@reach/router"

import "./styles/navbar.css"

export default function Navbar() {
  const location = useLocation()

  return (
    <div id="nav" className="nav-container">
      <div className="nav-interior">
        <Link to="/"><img src="/images/logo.png" className="logo" alt="Alldrit Tech Logo" /></Link>
        <div className="nav-links">
          <Link className={location.pathname.includes("/about") ? "blue-glow" : ""} to="/about">About</Link>
          <Link className={location.pathname.includes("/projects") ? "blue-glow" : ""} to="/projects">Projects</Link>
          <Link className={location.pathname.includes("/contact") ? "blue-glow" : ""} to="/contact">Contact</Link>
        </div>
      </div>
    </div>
  )
}
