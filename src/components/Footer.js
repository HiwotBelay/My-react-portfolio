"use client"
import { useState, useEffect } from "react"
import { FaTelegram, FaLinkedin, FaGithub } from "react-icons/fa"
import { FaXTwitter } from "react-icons/fa6"

const Footer = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  // Mouse tracking for subtle glow effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { icon: <FaXTwitter />, link: "https://x.com/belay_hiwo38480", label: "Twitter" },
    { icon: <FaTelegram />, link: "https://t.me/Hiwi_ina", label: "Telegram" },
    { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hiwot-belaym/", label: "LinkedIn" },
    { icon: <FaGithub />, link: "https://github.com/HiwotBelay", label: "GitHub" },
  ]

  return (
    <footer className="relative w-full overflow-hidden bg-white border-t-[3px] border-transparent footer-border-gradient">
      {/* Clean Background Effects - NO FLOATING ITEMS */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-light" />
        <div className="dots" />
        <div className="paper" />
      </div>

      {/* Subtle Mouse Glow */}
      <div
        className="absolute inset-0 z-0 opacity-30 pointer-events-none"
        style={{
          background: `radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(-mousePosition.y + 1) * 50}%, rgba(236,72,153,0.15) 0%, rgba(20,184,166,0.1) 20%, transparent 40%)`,
          transition: "background 0.3s ease-out",
        }}
      />

      {/* Main Footer Content - HORIZONTAL LAYOUT */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left: Brand & Copyright */}
          <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
            <h2 className="text-xl md:text-2xl font-bold">
              <span className="bg-gradient-to-r from-fuchsia-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                Hiwot Belay
              </span>
            </h2>
            <div className="hidden md:block w-[2px] h-8 bg-gradient-to-b from-fuchsia-500 via-teal-400 to-emerald-500 rounded-full" />
            <div className="text-center md:text-left">
              <p className="text-slate-500 text-sm">© {currentYear} All Rights Reserved</p>
              <p className="text-slate-600 text-xs">
                Designed by{" "}
                <span className="bg-gradient-to-r from-fuchsia-600 to-teal-500 bg-clip-text text-transparent font-semibold">
                  Hiwot Belay
                </span>
              </p>
            </div>
          </div>

          {/* Center: Quick Links */}
          <div className="flex gap-6 text-sm">
            <a href="#home" className="footer-link">
              Home
            </a>
            <a href="#about" className="footer-link">
              About
            </a>
            <a href="#portfolio" className="footer-link">
              Experience
            </a>
            <a href="#contact" className="footer-link">
              Contact
            </a>
          </div>

          {/* Right: Social Icons */}
          <div className="flex gap-3">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                className="neon-card-light social-link-wrapper"
                aria-label={social.label}
              >
                <div className="neon-inner-light social-icon-inner">{social.icon}</div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Styles - CLEAN & PROFESSIONAL */}
      <style jsx>{`
        /* Footer Border Gradient */
        .footer-border-gradient {
          border-image: linear-gradient(to right, #ec4899, #14b8a6, #10b981) 1;
        }

        /* Clean Background Effects - NO FLOATING ITEMS */
        .aurora-light {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse at 50% 0%, rgba(236, 72, 153, 0.08), transparent 50%),
            radial-gradient(ellipse at 0% 100%, rgba(20, 184, 166, 0.08), transparent 50%),
            radial-gradient(ellipse at 100% 100%, rgba(16, 185, 129, 0.08), transparent 50%);
          filter: blur(40px);
          animation: auroraSubtle 10s ease-in-out infinite alternate;
        }

        @keyframes auroraSubtle {
          0% {
            opacity: 0.4;
          }
          100% {
            opacity: 0.6;
          }
        }

        .dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(15, 23, 42, 0.05) 1px, transparent 1px);
          background-size: 20px 20px;
          mask-image: linear-gradient(to bottom, transparent, black 20%, black 80%, transparent);
        }

        .paper {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.01'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
        }

        /* Card Styles - CONSISTENT */
        .neon-card-light {
          position: relative;
          border-radius: 12px;
          padding: 1px;
          background: conic-gradient(
            from 180deg at 50% 50%,
            rgba(236, 72, 153, 0.6),
            rgba(20, 184, 166, 0.6),
            rgba(16, 185, 129, 0.6),
            rgba(236, 72, 153, 0.6)
          );
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }

        .neon-card-light:hover {
          box-shadow: 0 8px 20px rgba(2, 6, 23, 0.08), 0 0 30px rgba(20, 184, 166, 0.12);
          transform: translateY(-3px);
        }

        .neon-inner-light {
          border-radius: 11px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.94));
          border: 1px solid rgba(2, 6, 23, 0.06);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 4px 10px rgba(2, 6, 23, 0.05);
        }

        /* Social Icons */
        .social-link-wrapper {
          display: block;
          text-decoration: none;
        }

        .social-icon-inner {
          width: 40px;
          height: 40px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.125rem;
          color: #ec4899;
          transition: color 0.25s ease, transform 0.25s ease;
        }

        .social-link-wrapper:hover .social-icon-inner {
          color: #14b8a6;
          transform: scale(1.1) rotate(5deg);
        }

        /* Footer Links */
        .footer-link {
          color: #64748b;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.25s ease, transform 0.25s ease;
          display: inline-block;
          position: relative;
        }

        .footer-link::after {
          content: "";
          position: absolute;
          bottom: -2px;
          left: 0;
          width: 0;
          height: 2px;
          background: linear-gradient(90deg, #ec4899, #14b8a6);
          transition: width 0.25s ease;
        }

        .footer-link:hover {
          color: #1e293b;
        }

        .footer-link:hover::after {
          width: 100%;
        }

        @media (max-width: 768px) {
          .social-icon-inner {
            width: 38px;
            height: 38px;
            font-size: 1rem;
          }
        }
      `}</style>
    </footer>
  )
}

export default Footer
