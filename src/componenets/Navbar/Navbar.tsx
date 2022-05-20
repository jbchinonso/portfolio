import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import JB from '../../images/JB.svg';
import './navbar.css'

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false)

  


  return (
    <div className="navbar">
      <div className="logo">
        <img src={JB} alt="JB logo" />
      </div>

      <div
        data-testid="hamburger"
        className={open ? "hamburger open" : "hamburger"}
        onClick={() => setOpen(!open)}
      >
        <span className="hamburger-bar"></span>
      </div>

      <nav className={open ? "nav-links show" : "nav-links"}>
        <ul data-testid="nav">
          <li>
            <Link to="/">
              <span className="nav-num"> 01.</span> About
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="nav-num"> 02. </span> Experience{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="nav-num"> 03. </span> Work{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              <span className="nav-num"> 04. </span> Contact{" "}
            </Link>
          </li>
          <li>
            <Link to="/">
              {" "}
              <span className="nav-num">Resume </span>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar