import React from "react";

// Functional Libraries

// Constants

// Components
import Wrapper from "../layouts";

// Images
import Stars from "../images/stars2.jpeg";

// Stylesheets

export default function Contact() {
  return (
    <Wrapper>
     <div className="landing-container">
        <div
          className="landing"
          style={{ background: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${Stars})`, height: 'calc(100vh - 50px)' }}
        >
          <h1 className="title teal-glow">Contact Us</h1>
          <div className="subtitle" style={{ width: 'max(40vw, 300px)', borderRadius: 15, padding: 30, backgroundColor: '#0f0f0f' }}>
            Lets get your project in motion!
            <br/><br/>
            Email: devin@alldrit.ca
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
