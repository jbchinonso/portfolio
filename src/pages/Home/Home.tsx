import React from 'react'
import Navbar from '../../componenets/Navbar/Navbar';
import Banner from '../../componenets/Banner/Banner';
import Socials from '../../componenets/Socials/Socials';
import Email from '../../componenets/Email/Email';
import AboutMe from '../../componenets/AboutMe/AboutMe';
import {useHamburgerContext} from '../../context/hamburgerContext'
import './home.css'

function Home() {
  const {open, setOpen} = useHamburgerContext()
  return (
    <div className={open ? "homepage position" : "homepage"}>
      <Navbar />
      <div className="contentWrapper">
        <div className="container">
          <Socials />
          <div className="hero">
            <Banner />
          </div>
          <Email />
        </div>
        <AboutMe />
      </div>
      <div className={open?"overlay cover": "overlay"} onClick={() => setOpen(false)}></div>
    </div>
  );
}

export default Home;