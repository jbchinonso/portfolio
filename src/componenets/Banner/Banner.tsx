import React from 'react'
import './banner.css'

function Banner() {
  return (
    <section id="bannerSection">
      <div className="bannerStatement">
        <div className="greeting">Hi, my name is</div>
        <h1>Johnbosco Nweke.</h1>
        <span className="skill">Fullstack Software Engineer.</span>
        <div className="skill-description">
          A lifelong learner and committed team Player working with the best of
          my ability to ensure improvement in the Establishment while enjoying
          self-development and job satisfaction.
        </div>
        <button className="button">
          Checkout my blogs
        </button>
      </div>
    </section>
  );
}

export default Banner