import React from "react";

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
          <div className="title name">Alldrit Tech</div>
          <div className="subtitle descriptors">
            Making Dreams Reality
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
