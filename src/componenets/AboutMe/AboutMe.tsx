import React, { useEffect, useRef } from "react";
import {useLocation} from 'react-router-dom'
import Paragraph from "../Paragraph/Paragraph";
import "./aboutme.css";
import photo from "../../images/me.jpg";

function AboutMe() {
  const aboutRef = useRef<HTMLElement>(null);
  const location = useLocation();
  useEffect(() => {
    if (location?.state) {
      aboutRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [location]);
  
  return (
    <section id= "aboutme" className="aboutme" ref={aboutRef}>
      <div className="aboutme__flex-container">
        <div className="aboutme__text_content">
          <div className="aboutHeader">About Me</div>
          <Paragraph
            text={
              "Hello! My name is Johnbosco, I am a fullstack software Engineer Based in Lagos Nigeria. My interest in web development started back in 2014 when I started Learning HTML, CSS and later PHP — turns out hacking editing wordpress themes taught me a lot about HTML & CSS!"
            }
          />

          <Paragraph
            text={
              "Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at Upstatement for a variety of clients."
            }
          />

          <Paragraph
            text={
              "Here are a few technologies I’ve been working with recently:"
            }
          />

          <div className="tech_skills">
            <span className="tech_skill"> Javascript </span>
            <span className="tech_skill"> Typescript </span>
            <span className="tech_skill"> Nodejs </span>
            <span className="tech_skill"> React </span>
            <span className="tech_skill"> PHP </span>
            <span className="tech_skill"> Wordpress </span>
          </div>
        </div>
        <div className="aboutme__img_container">
          {/* <img src={photo} alt="" /> */}
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
