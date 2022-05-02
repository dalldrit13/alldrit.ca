import React from "react";
import { Link } from 'gatsby'
// Functional Libraries

// Constants

// Components
import Wrapper from "../layouts";

// Images
import Galaxy from "../images/stars.jpeg";

// Stylesheets
import "../styles/home.css";

export default function Index() {
  return (
    <Wrapper>
      <div className="home-container">
        <div
          className="home-landing"
          style={{
            backgroundImage: "url(" + Galaxy + ")",
            backgroundSize: "cover",
          }}
        >
          <div className="title name">Page Not Found</div>
          <Link className="subtitle descriptors" to="/">
            Home
          </Link>
        </div>
      </div>
    </Wrapper>
  )
}
