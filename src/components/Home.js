
import { useState, useEffect, useRef } from "react";
import {
  FaHome,
  FaUser,
  FaFile,
  FaBook,
  FaEnvelope,
  FaGithub,
  FaTelegram,
  FaLinkedin,
  
  
  
} from "react-icons/fa";
import { FaXmark, FaBars, FaXTwitter } from "react-icons/fa6";
import "./Home.css";
import { ReactTyped } from "react-typed";
import { Link, animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [menu, togglemenu] = useState(false);
  const headerRef = useRef(null);
  useEffect(() => {
    AOS.init();
  }, []);
  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        togglemenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  function handleNavLinkClick() {
    togglemenu(false);
  }
  return (
    <>
      <header ref={headerRef} id="header" className={menu ? "toggle-header" : "header"}>
        <nav
          id="navbar"
          class="navbar nav-menu"
          data-aos="fade-right"
          data-aos-duration="1000"
          data-aos-delay="300"
        >
          <ul>
            <li>
              <Link
                activeClass="active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="navlink"
                onClick={handleNavLinkClick}

              >
                <FaHome />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="navlink"
                onClick={handleNavLinkClick}
              >
                <FaUser />
                <span>About</span>
              </Link>
            </li>
          
            <li>
              <Link
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="navlink"
                onClick={handleNavLinkClick}

              >
                <FaBook /> <span>Experience</span>
              </Link>
            </li>
            <li>
              <Link
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="navlink"
                onClick={handleNavLinkClick}

              >
                <FaEnvelope /> <span>Contact</span>
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <div className="hamburger-menu" onClick={() => togglemenu(!menu)}>
        {menu ? <FaXmark /> : <FaBars />}
      </div>

      <section className="hero" id="home">
        <div className="container">
          <h1 data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            Hiwot Belay
          </h1>
          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300">
            I'm
            <span>
              <ReactTyped
                strings={[
                  "Software Engineer",
                  "Full-Stack Developer",
                  "Accountant",
                ]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={2000}
                loop
              />
            </span>
          </p>
          <div
            className="social"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            <a href="https://github.com/HiwotBelay">
              <FaGithub/>
            </a>
            <a href="https://x.com/belay_hiwo38480">
              <FaXTwitter />
            </a>
            <a href="https://t.me/Hiwi_ina">
              <FaTelegram />
            </a>

            <a href="https://www.linkedin.com/in/hiwot-belaym/">
              <FaLinkedin />
            </a>
            
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
