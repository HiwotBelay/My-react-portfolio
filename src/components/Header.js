"use client"

import { useState, useEffect, useRef } from "react"
import { Link } from "react-scroll"
import { FaHome, FaUser, FaBook, FaEnvelope } from "react-icons/fa"

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const headerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991)
    }

    // Initial check
    checkMobile()

    // Add event listener for window resize
    window.addEventListener("resize", checkMobile)

    // Cleanup
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Close menu when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setToggleMenu(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleToggle = () => {
    setToggleMenu(!toggleMenu)
  }

  const handleNavLinkClick = () => {
    setToggleMenu(false)
  }

  return (
    <header
      ref={headerRef}
      className="fixed top-0 left-0 bottom-0 z-[9997] transition-all duration-500 py-4 px-3 overflow-y-auto flex flex-col items-center justify-center"
    >
      {/* Hamburger Menu Button - Only visible on mobile */}
      <div
        className={`fixed flex items-center justify-center w-10 h-10 rounded-full top-5 right-5 cursor-pointer z-[2000] ${isMobile ? "flex" : "hidden"} ${toggleMenu ? "active" : ""}`}
        onClick={handleToggle}
        style={{
          background: "linear-gradient(135deg, #ec4899, #14b8a6)",
          color: "white",
        }}
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

      {/* Navigation Menu */}
      <nav
        className={`${isMobile && !toggleMenu ? "hidden" : "block"} ${isMobile && toggleMenu ? "fixed top-0 left-0 w-[300px] h-screen bg-white border-r border-[#e6e9ec] p-4 z-[2000] overflow-y-auto" : ""}`}
      >
        <ul>
          <li className="list-none py-2.5">
            <div className="portfolio-nav-border">
              <Link
                activeClass="portfolio-nav-active"
                to="home"
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center h-14 w-14 rounded-full bg-[#f2f3f5] text-[#45505b] transition-all duration-300 z-[1000] overflow-hidden cursor-pointer portfolio-nav-link"
                onClick={handleNavLinkClick}
              >
                <FaHome className="text-xl mx-[18px]" />
                <span className="hidden ml-2.5">Home</span>
              </Link>
            </div>
          </li>
          <li className="list-none py-2.5">
            <div className="portfolio-nav-border">
              <Link
                activeClass="portfolio-nav-active"
                to="about"
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center h-14 w-14 rounded-full bg-[#f2f3f5] text-[#45505b] transition-all duration-300 z-[1000] overflow-hidden cursor-pointer portfolio-nav-link"
                onClick={handleNavLinkClick}
              >
                <FaUser className="text-xl mx-[18px]" />
                <span className="hidden ml-2.5">About</span>
              </Link>
            </div>
          </li>
          <li className="list-none py-2.5">
            <div className="portfolio-nav-border">
              <Link
                activeClass="portfolio-nav-active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center h-14 w-14 rounded-full bg-[#f2f3f5] text-[#45505b] transition-all duration-300 z-[1000] overflow-hidden cursor-pointer portfolio-nav-link"
                onClick={handleNavLinkClick}
              >
                <FaBook className="text-xl mx-[18px]" />
                <span className="hidden ml-2.5">Experience</span>
              </Link>
            </div>
          </li>
          <li className="list-none py-2.5">
            <div className="portfolio-nav-border">
              <Link
                activeClass="portfolio-nav-active"
                to="contact"
                spy={true}
                smooth={true}
                duration={500}
                className="flex items-center h-14 w-14 rounded-full bg-[#f2f3f5] text-[#45505b] transition-all duration-300 z-[1000] overflow-hidden cursor-pointer portfolio-nav-link"
                onClick={handleNavLinkClick}
              >
                <FaEnvelope className="text-xl mx-[18px]" />
                <span className="hidden ml-2.5">Contact</span>
              </Link>
            </div>
          </li>
        </ul>
      </nav>

      {/* Fixed styles - Active state = colored circle, Hover state = expanded */}
      <style jsx>{`
        /* Border styling for all nav items */
        .portfolio-nav-border {
          position: relative;
          border-radius: 50px;
          padding: 1px;
          background: conic-gradient(from 180deg at 50% 50%, rgba(236,72,153,0.6), rgba(20,184,166,0.6), rgba(16,185,129,0.6), rgba(236,72,153,0.6));
          transition: box-shadow .25s ease, transform .25s ease;
          display: inline-block;
        }

        .portfolio-nav-border:hover {
          box-shadow: 0 12px 26px rgba(2,6,23,0.08), 0 0 40px rgba(20,184,166,0.16);
          transform: translateY(-2px);
        }
        
        /* HOVER state - expands with text (like your original hover) */
        .portfolio-nav-link:hover {
          width: 150px !important;
          background: linear-gradient(135deg, #ec4899, #14b8a6) !important;
          color: white !important;
        }
        
        .portfolio-nav-link:hover span {
          display: block !important;
        }
        
        /* ACTIVE STATE - Just colored circle, same size (like your screenshots) */
        .portfolio-nav-active {
          width: 56px !important; /* Keep same size as normal */
          background: linear-gradient(135deg, #ec4899, #14b8a6) !important;
          color: white !important;
        }
        
        .portfolio-nav-active span {
          display: none !important; /* Hide text in active state */
        }

        /* Enhanced border for active state */
        .portfolio-nav-border:has(.portfolio-nav-active) {
          border-radius: 50px;
          background: conic-gradient(from 180deg at 50% 50%, rgba(236,72,153,0.8), rgba(20,184,166,0.8), rgba(16,185,129,0.8), rgba(236,72,153,0.8)) !important;
          box-shadow: 0 8px 20px rgba(2,6,23,0.08), 0 0 30px rgba(20,184,166,0.2) !important;
        }
      `}</style>
    </header>
  )
}

export default Header
