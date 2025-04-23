"use client";

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
  FaDownload,
} from "react-icons/fa";
import { FaXmark, FaBars, FaXTwitter } from "react-icons/fa6";
import { ReactTyped } from "react-typed";
import { Link, animateScroll as scroll } from "react-scroll";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  const [menu, toggleMenu] = useState(false);
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    // Initial check
    checkMobile();

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile);

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    AOS.init({
      once: true,
      duration: 800,
    });
  }, []);

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        toggleMenu(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  function handleNavLinkClick() {
    toggleMenu(false);
  }

  return (
    <>
      {isMobile && (
        <div className="hamburger-menu" onClick={() => toggleMenu(!menu)}>
          {menu ? <FaXmark /> : <FaBars />}
        </div>
      )}

      <section
        className="hero"
        id="home"
        style={{ backgroundImage: "url(/p21.png)" }} // Direct reference from public folder
      >
        <div className="container" style={{ paddingLeft: "0rem" }}>
          <h1
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
            // className="hover:text-blue-600 transition-colors duration-300"
          >
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
            <a
              href="https://github.com/HiwotBelay"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub />
            </a>
            <a
              href="https://x.com/belay_hiwo38480"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://t.me/Hiwi_ina"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTelegram />
            </a>
            <a
              href="https://www.linkedin.com/in/hiwot-belaym/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Download CV button positioned on the right side */}
        <div
  className="cv-download"
  data-aos="fade-left"
  data-aos-duration="1000"
  data-aos-delay="500"
>
  <a 
    href="/Hiwot_Belay CV.pdf" 
    download 
    className="download-btn group relative inline-flex items-center justify-between overflow-hidden rounded-full bg-gradient-to-br from-purple-600 to-blue-500 px-8 py-3 font-medium text-white shadow-lg transition-all duration-300 ease-out hover:from-purple-700 hover:to-blue-600 hover:shadow-xl hover:-translate-y-1"
  >
    <span className="absolute inset-0 h-full w-full bg-gradient-to-br from-white/10 via-white/30 to-white/10 opacity-0 transition-all duration-300 group-hover:opacity-100"></span>
    <span className="relative flex items-center space-x-2">
      <FaDownload className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
      <span>Get My CV</span>
    </span>
    <span className="absolute right-6 translate-x-3 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
      →
    </span>
  </a>
</div>
      </section>
    </>
  );
};

export default Home;
