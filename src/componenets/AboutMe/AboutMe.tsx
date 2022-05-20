import React from 'react'
import Paragraph from '../Paragraph/Paragraph'
import './aboutme.css'

function AboutMe() {
  return (
    <div className="aboutme">
      <div className="aboutHeader">
        <span className="aboutNo">01.</span>
        <span className="aboutText">About Me</span>
      </div>

      <Paragraph
        text={
          "Hello! My name is Brittany and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML & CSS!"
        }
      />
    </div>
  );
}

export default AboutMe