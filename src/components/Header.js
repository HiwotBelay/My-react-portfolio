//import React from "react";
//import "./Header.css"; // Import CSS for this component

//const Header = () => {
  //return (
    //<nav className="navbar">
      //<ul>
        //<li><a href="#home">Home</a></li>
        //<li><a href="#about">About</a></li>
       // <li><a href="#portfolio">Portfolio</a></li>
        //<li><a href="#skills">Skills</a></li>
        //<li><a href="#resume">Resume</a></li>
        //<li><a href="#contact">Contact</a></li>
      //</ul>
    //</nav>
  //);
//};

//export default Header;
/*import React, { useState } from "react";
import "./Header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="header">
      <div
        className={`hamburger-menu ${toggleMenu ? "active" : ""}`}
        onClick={handleToggle}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
        </svg>
      </div>
      <nav className={`nav-menu ${toggleMenu ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#home" className="navlink active">
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="navlink">
              <span>About</span>
            </a>
          </li>
          <li>
            <a href="#resume" className="navlink">
              <span>Resume</span>
            </a>
          </li>
          <li>
            <a href="#portfolio" className="navlink">
              <span>Portfolio</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="navlink">
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

*/

import React, { useState } from "react";
import { FaHome, FaUser, FaFileAlt, FaBriefcase, FaEnvelope } from "react-icons/fa"; // Import the icons
import "./Header.css";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <header className="header">
      <div
        className={`hamburger-menu ${toggleMenu ? "active" : ""}`}
        onClick={handleToggle}
      >
        <svg
          stroke="currentColor"
          fill="currentColor"
          viewBox="0 0 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"></path>
        </svg>
      </div>
      <nav className={`nav-menu ${toggleMenu ? "show" : ""}`}>
        <ul>
          <li>
            <a href="#home" className="navlink active">
              <FaHome /> {/* Home Icon */}
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href="#about" className="navlink">
              <FaUser /> {/* About Icon */}
              <span>About</span>
            </a>
          </li>
      
          <li>
            <a href="#portfolio" className="navlink">
              <FaBriefcase /> {/* Portfolio Icon */}
              <span>Experience</span>
            </a>
          </li>
          <li>
            <a href="#contact" className="navlink">
              <FaEnvelope /> {/* Contact Icon */}
              <span>Contact</span>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
