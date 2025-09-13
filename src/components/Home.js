"use client"
import { useState, useEffect, useRef } from "react"
import { Github, Send, Linkedin, Download, X, Menu } from "lucide-react"
import { ReactTyped } from "react-typed"

const Home = () => {
  const [menu, toggleMenu] = useState(false)
  const headerRef = useRef(null)
  const [isMobile, setIsMobile] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mouseTrail, setMouseTrail] = useState([])

  // Track mouse position for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
        clientX: e.clientX,
        clientY: e.clientY,
        timestamp: Date.now(),
      }

      setMousePosition(newPosition)

      // Create mouse trail effect
      setMouseTrail((prev) => {
        const newTrail = [...prev, newPosition].slice(-8) // Keep last 8 positions
        return newTrail.filter((pos) => Date.now() - pos.timestamp < 500) // Remove old positions
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991)
    }
    checkMobile()
    window.addEventListener("resize", checkMobile)
    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  useEffect(() => {
    function handleClickOutside(event) {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        toggleMenu(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  function handleNavLinkClick() {
    toggleMenu(false)
  }

  return (
    <>
      {isMobile && (
        <div
          className="absolute top-4 right-4 z-50 text-gray-800 text-3xl cursor-pointer"
          onClick={() => toggleMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </div>
      )}

      <section className="hero relative overflow-hidden flex items-center justify-start min-h-screen" id="home">
        {/* Special Creative Background Surprise */}
        <div className="absolute inset-0 -z-10 bg-white" />

        {/* 🎉 SURPRISE! Interactive Floating Code Particles */}
        <div className="floating-code-particles">
          <div className="code-particle code-1" data-code="&lt;/&gt;">
            &lt;/&gt;
          </div>
          <div className="code-particle code-2" data-code="{ }">{`{ }`}</div>
          <div className="code-particle code-3" data-code="=&gt;">
            =&gt;
          </div>
          <div className="code-particle code-4" data-code="const">
            const
          </div>
          <div className="code-particle code-5" data-code="React">
            React
          </div>
          <div className="code-particle code-6" data-code="[ ]">
            [ ]
          </div>
          <div className="code-particle code-7" data-code="npm">
            npm
          </div>
          <div className="code-particle code-8" data-code="git">
            git
          </div>
          <div className="code-particle code-9" data-code="API">
            API
          </div>
          <div className="code-particle code-10" data-code="CSS">
            CSS
          </div>
          <div className="code-particle code-11" data-code="JS">
            JS
          </div>
          <div className="code-particle code-12" data-code="( )">{`( )`}</div>
          <div className="code-particle code-13" data-code="async">
            async
          </div>
          <div className="code-particle code-14" data-code="await">
            await
          </div>
          <div className="code-particle code-15" data-code="function">
            function
          </div>
        </div>

        {/* Enhanced Mouse Trail Effect */}
        <div className="mouse-trail-container">
          {mouseTrail.map((pos, index) => (
            <div
              key={`${pos.timestamp}-${index}`}
              className="mouse-trail-dot"
              style={{
                left: pos.clientX,
                top: pos.clientY,
                opacity: ((index + 1) / mouseTrail.length) * 0.6,
                transform: `scale(${(index + 1) / mouseTrail.length})`,
              }}
            />
          ))}
        </div>

        {/* Floating Geometric Shapes */}
        <div className="floating-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
          <div className="shape shape-4"></div>
          <div className="shape shape-5"></div>
          <div className="shape shape-6"></div>
          <div className="shape shape-7"></div>
          <div className="shape shape-8"></div>
        </div>

        {/* Animated Grid Pattern */}
        <div className="animated-grid"></div>

        {/* Portfolio-style Aurora and Effects */}
        <div className="aurora-light -z-10" aria-hidden="true" />
        <div className="dots -z-10" aria-hidden="true" />
        <div className="paper -z-10" aria-hidden="true" />

        {/* ENHANCED Interactive Mouse Glow */}
        <div
          className="absolute inset-0 z-10 opacity-50"
          style={{
            background: `
              radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(-mousePosition.y + 1) * 50}%, rgba(236,72,153,0.25) 0%, rgba(20,184,166,0.15) 20%, transparent 45%),
              radial-gradient(circle at ${(mousePosition.x + 1) * 50 + 10}% ${(-mousePosition.y + 1) * 50 + 10}%, rgba(16,185,129,0.2) 0%, transparent 30%)
            `,
            transition: "background 0.2s ease-out",
          }}
        />

        {/* Cursor Ripple Effect */}
        <div
          className="cursor-ripple"
          style={{
            left: mousePosition.clientX,
            top: mousePosition.clientY,
          }}
        />

        {/* Main Content - EXACT same positioning as original */}
        <div className="container relative z-20 text-left p-4 md:p-8 pl-2 md:pl-4">
          <h1
            className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight"
            style={{
              textShadow: "0 0 15px rgba(0, 0, 0, 0.1), 0 0 30px rgba(236,72,153,0.1)",
              transform: `translateX(${mousePosition.x * 10}px) translateY(${mousePosition.y * 5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <span className="bg-gradient-to-r from-fuchsia-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Hiwot Belay
            </span>
          </h1>

          <p
            className="text-xl md:text-3xl font-medium mb-8 text-slate-700"
            style={{
              transform: `translateX(${mousePosition.x * 5}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            I'm{" "}
            <span className="relative inline-block">
              <ReactTyped
                strings={["Software Engineer", "Full-Stack Developer", "Accountant"]}
                typeSpeed={100}
                backSpeed={50}
                backDelay={2000}
                loop
              />
              <div className="absolute -inset-1 bg-gradient-to-r from-fuchsia-200 via-teal-200 to-emerald-200 rounded blur opacity-70 animate-pulse"></div>
            </span>
          </p>

          {/* Social Icons - EXACT same positioning */}
          <div
            className="social relative z-30 flex justify-start gap-4 mb-12"
            style={{
              transform: `translateY(${mousePosition.y * 3}px)`,
              transition: "transform 0.3s ease-out",
            }}
          >
            <a
              href="https://github.com/HiwotBelay"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-social-icon group"
            >
              <div className="portfolio-social-inner">
                <Github className="h-6 w-6" />
              </div>
            </a>
            <a
              href="https://x.com/belay_hiwo38480"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-social-icon group"
            >
              <div className="portfolio-social-inner">
                <X className="h-6 w-6" />
              </div>
            </a>
            <a
              href="https://t.me/Hiwi_ina"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-social-icon group"
            >
              <div className="portfolio-social-inner">
                <Send className="h-6 w-6" />
              </div>
            </a>
            <a
              href="https://www.linkedin.com/in/hiwot-belaym/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-social-icon group"
            >
              <div className="portfolio-social-inner">
                <Linkedin className="h-6 w-6" />
              </div>
            </a>
          </div>
        </div>

        {/* CV Download Button - EXACT same positioning */}
        <div className="cv-download absolute top-4 right-4 z-30">
          <a href="/Hiwot_Belay CV.pdf" download className="portfolio-cv-button group">
            <div className="portfolio-cv-inner">
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
              <span>Get My CV</span>
            </div>
          </a>
        </div>

        {/* Styles */}
        <style jsx>{`
          /* Portfolio Aurora Light Effect - EXACT MATCH */
          .aurora-light {
            position: absolute;
            inset: -15%;
            background: radial-gradient(60% 40% at 20% 30%, rgba(236, 72, 153, 0.1), transparent 60%),
              radial-gradient(50% 35% at 80% 20%, rgba(20, 184, 166, 0.1), transparent 60%),
              radial-gradient(45% 30% at 60% 70%, rgba(34, 197, 94, 0.1), transparent 60%),
              radial-gradient(60% 40% at 20% 80%, rgba(59, 130, 246, 0.06), transparent 60%);
            filter: blur(30px) saturate(110%);
            animation: auroraFloatLight 18s ease-in-out infinite alternate;
          }

          @keyframes auroraFloatLight {
            0% { transform: translateY(-1.5%) translateX(-1%) scale(1); }
            100% { transform: translateY(1.5%) translateX(1%) scale(1.03); }
          }

          /* Portfolio Dots - EXACT MATCH */
          .dots {
            position: absolute;
            inset: 0;
            background-image: radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px);
            background-size: 16px 16px;
            mask-image: radial-gradient(closest-side, rgba(0, 0, 0, 0.4), transparent 85%);
          }

          /* Portfolio Paper - EXACT MATCH */
          .paper {
            position: absolute;
            inset: 0;
            pointer-events: none;
            background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.015'/%3E%3C/svg%3E");
            mix-blend-mode: multiply;
          }

          /* 🎉 SURPRISE! Interactive Floating Code Particles */
          .floating-code-particles {
            position: absolute;
            inset: 0;
            overflow: hidden;
            z-index: 2;
            pointer-events: none;
          }

          .code-particle {
            position: absolute;
            font-family: 'Courier New', monospace;
            font-weight: bold;
            font-size: 14px;
            color: transparent;
            background: linear-gradient(45deg, #ec4899, #14b8a6, #10b981);
            background-clip: text;
            -webkit-background-clip: text;
            opacity: 0.6;
            animation: floatCode 15s ease-in-out infinite;
            transition: all 0.3s ease;
            cursor: default;
          }

          .code-particle:hover {
            transform: scale(1.5) rotate(10deg) !important;
            opacity: 1 !important;
            text-shadow: 0 0 20px rgba(236,72,153,0.5);
          }

          /* Individual code particle positions and animations */
          .code-1 { top: 10%; right: 15%; animation-delay: 0s; animation-duration: 20s; }
          .code-2 { top: 25%; right: 8%; animation-delay: -2s; animation-duration: 18s; }
          .code-3 { top: 40%; right: 20%; animation-delay: -4s; animation-duration: 22s; }
          .code-4 { top: 55%; right: 12%; animation-delay: -6s; animation-duration: 16s; }
          .code-5 { top: 70%; right: 25%; animation-delay: -8s; animation-duration: 24s; }
          .code-6 { top: 15%; right: 35%; animation-delay: -1s; animation-duration: 19s; }
          .code-7 { top: 35%; right: 30%; animation-delay: -3s; animation-duration: 21s; }
          .code-8 { top: 50%; right: 5%; animation-delay: -5s; animation-duration: 17s; }
          .code-9 { top: 65%; right: 18%; animation-delay: -7s; animation-duration: 23s; }
          .code-10 { top: 80%; right: 10%; animation-delay: -9s; animation-duration: 15s; }
          .code-11 { top: 20%; right: 40%; animation-delay: -1.5s; animation-duration: 25s; }
          .code-12 { top: 45%; right: 35%; animation-delay: -3.5s; animation-duration: 20s; }
          .code-13 { top: 60%; right: 40%; animation-delay: -5.5s; animation-duration: 18s; }
          .code-14 { top: 75%; right: 35%; animation-delay: -7.5s; animation-duration: 22s; }
          .code-15 { top: 30%; right: 45%; animation-delay: -9.5s; animation-duration: 16s; }

          @keyframes floatCode {
            0%, 100% { 
              transform: translateY(0px) translateX(0px) rotate(0deg); 
              opacity: 0.6; 
            }
            25% { 
              transform: translateY(-15px) translateX(-8px) rotate(5deg); 
              opacity: 0.8; 
            }
            50% { 
              transform: translateY(-8px) translateX(12px) rotate(-3deg); 
              opacity: 0.7; 
            }
            75% { 
              transform: translateY(-20px) translateX(-5px) rotate(8deg); 
              opacity: 0.9; 
            }
          }

          /* Enhanced Mouse Trail Effect */
          .mouse-trail-container {
            position: fixed;
            top: 0;
            left: 0;
            pointer-events: none;
            z-index: 15;
          }

          .mouse-trail-dot {
            position: absolute;
            width: 8px;
            height: 8px;
            background: linear-gradient(45deg, #ec4899, #14b8a6);
            border-radius: 50%;
            transform-origin: center;
            animation: trailFade 0.5s ease-out forwards;
            margin: -4px 0 0 -4px;
          }

          @keyframes trailFade {
            0% { opacity: 0.8; transform: scale(1); }
            100% { opacity: 0; transform: scale(0.3); }
          }

          /* Cursor Ripple Effect */
          .cursor-ripple {
            position: fixed;
            width: 25px;
            height: 25px;
            border: 2px solid rgba(236,72,153,0.3);
            border-radius: 50%;
            transform: translate(-50%, -50%);
            pointer-events: none;
            z-index: 16;
            animation: ripple 1.5s ease-out infinite;
          }

          @keyframes ripple {
            0% {
              transform: translate(-50%, -50%) scale(0.5);
              opacity: 1;
            }
            100% {
              transform: translate(-50%, -50%) scale(2);
              opacity: 0;
            }
          }

          /* SPECIAL CREATIVE BACKGROUND SURPRISE */
          .floating-shapes {
            position: absolute;
            inset: 0;
            overflow: hidden;
            z-index: 1;
          }

          .shape {
            position: absolute;
            border-radius: 50%;
            opacity: 0.12;
            animation: float 20s ease-in-out infinite;
          }

          .shape-1 {
            width: 200px;
            height: 200px;
            background: linear-gradient(45deg, #ec4899, #14b8a6);
            top: 10%;
            left: 80%;
            animation-delay: 0s;
            animation-duration: 25s;
          }

          .shape-2 {
            width: 150px;
            height: 150px;
            background: linear-gradient(135deg, #14b8a6, #10b981);
            top: 60%;
            left: 85%;
            animation-delay: -5s;
            animation-duration: 30s;
          }

          .shape-3 {
            width: 100px;
            height: 100px;
            background: linear-gradient(225deg, #10b981, #ec4899);
            top: 20%;
            left: 70%;
            animation-delay: -10s;
            animation-duration: 20s;
          }

          .shape-4 {
            width: 120px;
            height: 120px;
            background: linear-gradient(315deg, #ec4899, #14b8a6);
            top: 80%;
            left: 75%;
            animation-delay: -15s;
            animation-duration: 35s;
          }

          .shape-5 {
            width: 80px;
            height: 80px;
            background: linear-gradient(45deg, #14b8a6, #10b981);
            top: 40%;
            left: 90%;
            animation-delay: -8s;
            animation-duration: 22s;
          }

          .shape-6 {
            width: 180px;
            height: 180px;
            background: linear-gradient(135deg, #10b981, #ec4899);
            top: 5%;
            left: 60%;
            animation-delay: -12s;
            animation-duration: 28s;
          }

          .shape-7 {
            width: 90px;
            height: 90px;
            background: linear-gradient(225deg, #ec4899, #14b8a6);
            top: 70%;
            left: 95%;
            animation-delay: -3s;
            animation-duration: 24s;
          }

          .shape-8 {
            width: 110px;
            height: 110px;
            background: linear-gradient(315deg, #14b8a6, #10b981);
            top: 30%;
            left: 65%;
            animation-delay: -18s;
            animation-duration: 32s;
          }

          @keyframes float {
            0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
            25% { transform: translateY(-20px) translateX(-10px) rotate(90deg); }
            50% { transform: translateY(-10px) translateX(10px) rotate(180deg); }
            75% { transform: translateY(-30px) translateX(-5px) rotate(270deg); }
          }

          /* Animated Grid Pattern */
          .animated-grid {
            position: absolute;
            inset: 0;
            background-image: 
              linear-gradient(rgba(236,72,153,0.08) 1px, transparent 1px),
              linear-gradient(90deg, rgba(20,184,166,0.08) 1px, transparent 1px);
            background-size: 50px 50px;
            animation: gridMove 30s linear infinite;
            z-index: 1;
          }

          @keyframes gridMove {
            0% { transform: translate(0, 0); }
            100% { transform: translate(50px, 50px); }
          }

          /* Portfolio Social Icons - EXACT MATCH */
          .portfolio-social-icon {
            position: relative;
            border-radius: 18px;
            padding: 1px;
            background: conic-gradient(from 180deg at 50% 50%, rgba(236,72,153,0.6), rgba(20,184,166,0.6), rgba(16,185,129,0.6), rgba(236,72,153,0.6));
            transition: box-shadow .25s ease, transform .25s ease;
            text-decoration: none;
            display: block;
          }

          .portfolio-social-icon:hover {
            box-shadow: 0 12px 26px rgba(2,6,23,0.08), 0 0 40px rgba(20,184,166,0.16);
            transform: translateY(-8px) scale(1.1);
          }

          .portfolio-social-inner {
            border-radius: 17px;
            background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.94));
            border: 1px solid rgba(2,6,23,0.06);
            box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset, 0 10px 20px rgba(2,6,23,0.05);
            padding: 12px;
            color: #475569;
            transition: color 0.3s ease;
          }

          .portfolio-social-icon:hover .portfolio-social-inner {
            color: #1e293b;
          }

          /* Portfolio CV Button - EXACT MATCH */
          .portfolio-cv-button {
            position: relative;
            border-radius: 50px;
            padding: 1px;
            background: conic-gradient(from 180deg at 50% 50%, rgba(236,72,153,0.6), rgba(20,184,166,0.6), rgba(16,185,129,0.6), rgba(236,72,153,0.6));
            transition: box-shadow .25s ease, transform .25s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
          }

          .portfolio-cv-button:hover {
            box-shadow: 0 12px 26px rgba(2,6,23,0.08), 0 0 40px rgba(20,184,166,0.16);
            transform: translateY(-5px) scale(1.05);
          }

          .portfolio-cv-inner {
            border-radius: 49px;
            background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.94));
            border: 1px solid rgba(2,6,23,0.06);
            box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset, 0 10px 20px rgba(2,6,23,0.05);
            padding: 12px 24px;
            color: #334155;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
          }

          /* Additional Creative Elements */
          .floating-shapes::before {
            content: '';
            position: absolute;
            top: 15%;
            right: 10%;
            width: 300px;
            height: 300px;
            background: radial-gradient(circle, rgba(236,72,153,0.06) 0%, transparent 70%);
            border-radius: 50%;
            animation: pulse 8s ease-in-out infinite;
          }

          .floating-shapes::after {
            content: '';
            position: absolute;
            bottom: 20%;
            right: 15%;
            width: 250px;
            height: 250px;
            background: radial-gradient(circle, rgba(20,184,166,0.06) 0%, transparent 70%);
            border-radius: 50%;
            animation: pulse 10s ease-in-out infinite reverse;
          }

          @keyframes pulse {
            0%, 100% { transform: scale(1); opacity: 0.06; }
            50% { transform: scale(1.1); opacity: 0.12; }
          }
        `}</style>
      </section>
    </>
  )
}

export default Home
