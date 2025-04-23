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
        className={`fixed flex items-center justify-center w-10 h-10 rounded-full top-5 right-5 bg-[#0563bb] text-white cursor-pointer z-[2000] ${isMobile ? "flex" : "hidden"} ${toggleMenu ? "active" : ""}`}
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

      {/* Navigation Menu */}
      <nav
        className={`${isMobile && !toggleMenu ? "hidden" : "block"} ${isMobile && toggleMenu ? "fixed top-0 left-0 w-[300px] h-screen bg-white border-r border-[#e6e9ec] p-4 z-[2000] overflow-y-auto" : ""}`}
      >
        <ul>
          <li className="list-none py-2.5">
            <Link
              activeClass="!bg-[#0563bb] !text-white"
              to="home"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center h-14 w-14 rounded-full bg-[#f2f3f5] text-[#45505b] transition-all duration-300 z-[1000] overflow-hidden cursor-pointer hover:w-[150px] hover:bg-[#0563bb] hover:text-white"
              onClick={handleNavLinkClick}
            >
              <FaHome className="text-xl mx-[18px]" />
              <span className="hidden ml-2.5 hover:block">Home</span>
            </Link>
          </li>
          <li className="list-none py-2.5">
            <Link
              activeClass="!bg-[#0563bb] !text-white"
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center h-14 w-14 rounded-full bg-[#f2f3f5] text-[#45505b] transition-all duration-300 z-[1000] overflow-hidden cursor-pointer hover:w-[150px] hover:bg-[#0563bb] hover:text-white"
              onClick={handleNavLinkClick}
            >
              <FaUser className="text-xl mx-[18px]" />
              <span className="hidden ml-2.5 hover:block">About</span>
            </Link>
          </li>
          <li className="list-none py-2.5">
            <Link
              activeClass="!bg-[#0563bb] !text-white"
              to="portfolio"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center h-14 w-14 rounded-full bg-[#f2f3f5] text-[#45505b] transition-all duration-300 z-[1000] overflow-hidden cursor-pointer hover:w-[150px] hover:bg-[#0563bb] hover:text-white"
              onClick={handleNavLinkClick}
            >
              <FaBook className="text-xl mx-[18px]" />
              <span className="hidden ml-2.5 hover:block">Experience</span>
            </Link>
          </li>
          <li className="list-none py-2.5">
            <Link
              activeClass="!bg-[#0563bb] !text-white"
              to="contact"
              spy={true}
              smooth={true}
              duration={500}
              className="flex items-center h-14 w-14 rounded-full bg-[#f2f3f5] text-[#45505b] transition-all duration-300 z-[1000] overflow-hidden cursor-pointer hover:w-[150px] hover:bg-[#0563bb] hover:text-white"
              onClick={handleNavLinkClick}
            >
              <FaEnvelope className="text-xl mx-[18px]" />
              <span className="hidden ml-2.5 hover:block">Contact</span>
            </Link>
          </li>
        </ul>
      </nav>

      {/* Custom styles for hover effects */}
      <style jsx>{`
        nav a:hover span {
          display: block;
        }
      `}</style>
    </header>
  )
}

export default Header
