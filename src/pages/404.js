import React from "react";
import { Link } from 'gatsby'
// Functional Libraries

// Constants

// Components
import Wrapper from "../layouts";

// Images

// Stylesheets

export default function Index() {
  return (
    <Wrapper>
      <div className="landing-container">
        <div
          className="landing"
          style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(/images/stars4.jpeg)` }}
        >
          <div className="title teal-glow">Page Not Found</div>
          <Link className="subtitle blue-glow" to="/">
            Home
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
