"use client";
import { useEffect, useMemo, useState } from "react";
import { Link } from "react-scroll";
import { ArrowDown, Download } from "lucide-react";

const Home = () => {
  const [showcaseIndex, setShowcaseIndex] = useState(0);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [roleIndex, setRoleIndex] = useState(0);
  const [typedRole, setTypedRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const typingRoles = useMemo(
    () => [
      "Software Engineer",
      "Full-Stack Dev",
      "Sales Team",
      "Accountant",
      "Problem Solver",
    ],
    []
  );

  useEffect(() => {
    const timer = setInterval(() => {
      setShowcaseIndex((prev) => (prev + 1) % 8);
    }, 3400);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const currentRole = typingRoles[roleIndex];
    let timeoutMs = isDeleting ? 55 : 85;

    if (!isDeleting && typedRole === currentRole) {
      timeoutMs = 1200;
    }

    const timer = setTimeout(() => {
      if (!isDeleting) {
        if (typedRole.length < currentRole.length) {
          setTypedRole(currentRole.slice(0, typedRole.length + 1));
        } else {
          setIsDeleting(true);
        }
      } else if (typedRole.length > 0) {
        setTypedRole(currentRole.slice(0, typedRole.length - 1));
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % typingRoles.length);
      }
    }, timeoutMs);

    return () => clearTimeout(timer);
  }, [typedRole, isDeleting, roleIndex, typingRoles]);

  const trustIndicators = useMemo(
    () => ["4x Hackathon Winner 🏆", "Built AI Systems", "Full-Stack Developer"],
    []
  );

  const showcaseCards = useMemo(
    () => [
      {
        badge: "Project",
        title: "AI Recruiter System",
        description: "Smart matching and automation for hiring.",
        image: "/a1.png",
      },
      {
        badge: "Project",
        title: "Tender Management System",
        description: "End-to-end tender workflow platform.",
        image: "/t1.png",
      },
      {
        badge: "Project",
        title: "E-Commerce Platform",
        description: "Full-stack shopping experience with scale-ready backend.",
        image: "/e1.png",
      },
      {
        badge: "Experience",
        title: "A2SV - DSA Program",
        description: "Python and Java problem solving and algorithm training.",
        image: "/d1.png",
      },
      {
        badge: "Experience",
        title: "A2SV - Competitive Practice",
        description: "Advanced data structures and interview preparation.",
        image: "/d2.png",
      },
      {
        badge: "Experience",
        title: "Ethioware Internship",
        description: "Full-stack internship with team-lead contributions.",
        image: "/ethioware1.png",
      },
      {
        badge: "Experience",
        title: "Helder Technologies",
        description: "Frontend delivery on real client projects.",
        image: "/helder1.png",
      },
      {
        badge: "Impact",
        title: "Real Business Results",
        description: "Reduced manual work by 70% and handled 1M+ monthly records.",
        image: "/a2.png",
      },
    ],
    []
  );

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-orb orb-a" />
      <div className="hero-bg-orb orb-b" />
      <div className="hero-bg-orb orb-c" />

      <div className="hero-container">
        <div className="hero-left">
          <div className="availability-chip reveal delay-1">
            Available for Remote Work
          </div>

          <p className="hero-intro reveal delay-2">
            {typedRole}
            <span className="role-cursor">|</span>
          </p>

          <h2 className="hero-name reveal delay-3">Hiwot Belay Mekonnen</h2>

          <h1 className="hero-title reveal delay-4">
            I build scalable full-stack and AI-powered systems that solve
            real-world problems.
          </h1>

          <p className="hero-subtitle reveal delay-5">
            React, Next.js, Node.js, and AI-driven applications.
          </p>

          <div className="hero-cta-group reveal delay-6">
            <Link
              to="contact"
              spy
              smooth
              duration={500}
              className="hero-btn hero-btn-primary"
            >
              Hire Me
            </Link>
            <Link
              to="portfolio"
              spy
              smooth
              duration={500}
              className="hero-btn hero-btn-secondary"
            >
              View Projects
            </Link>
            <a href="/Hiwot_Belay CV.pdf" download className="hero-btn hero-btn-ghost">
              <Download size={16} />
              CV
            </a>
          </div>

          <div className="trust-row reveal delay-7">
            {trustIndicators.map((item) => (
              <span key={item} className="trust-pill">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="hero-right reveal delay-5">
          <div
            className="showcase-stage"
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const px = (e.clientX - rect.left) / rect.width;
              const py = (e.clientY - rect.top) / rect.height;
              setTilt({
                x: (0.5 - py) * 8,
                y: (px - 0.5) * 10,
              });
            }}
            onMouseLeave={() => setTilt({ x: 0, y: 0 })}
            style={{
              transform: `perspective(1200px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
            }}
          >
            <div className="device-frame-label">Portfolio Showcase</div>
            {showcaseCards.map((card, idx) => {
              const isActive = idx === showcaseIndex;
              const isPrev =
                idx === (showcaseIndex - 1 + showcaseCards.length) % showcaseCards.length;
              return (
                <div
                  key={card.title}
                  className={`showcase-card ${isActive ? "active" : ""} ${
                    isPrev ? "previous" : ""
                  }`}
                >
                  <div className="code-top">
                    <span className="dot dot-red" />
                    <span className="dot dot-amber" />
                    <span className="dot dot-green" />
                    <span className="code-title">{card.badge}</span>
                  </div>

                  <div className="showcase-content">
                    <img
                      src={card.image}
                      alt={card.title}
                      className="showcase-image"
                    />

                    <h3 className="showcase-title">{card.title}</h3>
                    <p className="showcase-description">{card.description}</p>
                  </div>
                </div>
              );
            })}

            <div className="showcase-dots">
              {showcaseCards.map((card, idx) => (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => setShowcaseIndex(idx)}
                  className={`showcase-dot ${idx === showcaseIndex ? "active" : ""}`}
                  aria-label={`View ${card.title}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="scroll-indicator">
        <ArrowDown size={16} />
        <span>Scroll</span>
      </div>

      <style jsx>{`
        .hero-section {
          position: relative;
          min-height: 100vh;
          background: #1e1e1e;
          color: #f5f7fa;
          overflow: hidden;
          padding: 100px 24px 44px 110px;
          display: flex;
          flex-direction: column;
          justify-content: center;
        }

        .hero-container {
          width: 100%;
          max-width: 1280px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          align-items: center;
          gap: 44px;
          animation: fadeUp 0.9s ease both;
        }

        .reveal {
          opacity: 0;
          animation: fadeUp 0.75s ease forwards;
        }
        .delay-1 {
          animation-delay: 0.08s;
        }
        .delay-2 {
          animation-delay: 0.14s;
        }
        .delay-3 {
          animation-delay: 0.2s;
        }
        .delay-4 {
          animation-delay: 0.28s;
        }
        .delay-5 {
          animation-delay: 0.35s;
        }
        .delay-6 { animation-delay: 0.42s; }
        .delay-7 { animation-delay: 0.5s; }

        .hero-bg-orb {
          position: absolute;
          border-radius: 999px;
          filter: blur(60px);
          opacity: 0.35;
          pointer-events: none;
          animation: floatOrb 8s ease-in-out infinite;
        }

        .orb-a {
          width: 360px;
          height: 360px;
          top: 8%;
          right: -80px;
          background: radial-gradient(circle, #fe5b03 0%, transparent 65%);
        }

        .orb-b {
          width: 300px;
          height: 300px;
          bottom: 5%;
          left: 15%;
          background: radial-gradient(circle, #f14f63 0%, transparent 65%);
          animation-delay: -3s;
        }

        .orb-c {
          width: 260px;
          height: 260px;
          top: 38%;
          right: 28%;
          background: radial-gradient(circle, rgba(254, 91, 3, 0.45) 0%, transparent 70%);
          animation-delay: -5s;
        }

        .hero-left {
          display: flex;
          flex-direction: column;
          gap: 12px;
          z-index: 2;
        }

        .hero-intro {
          margin: 0;
          color: #f6b998;
          font-size: 0.96rem;
          letter-spacing: 0.02em;
          font-weight: 600;
          min-height: 24px;
        }

        .role-cursor {
          color: #fe5b03;
          animation: blink 1s step-end infinite;
        }

        .hero-name {
          margin: 0;
          font-size: clamp(1.6rem, 2.2vw, 2.4rem);
          letter-spacing: -0.01em;
          font-weight: 800;
          background: linear-gradient(120deg, #fe5b03 10%, #f14f63 55%, #ffd8c2 100%);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
          text-shadow: 0 0 20px rgba(241, 79, 99, 0.2);
        }

        .availability-chip {
          width: fit-content;
          padding: 8px 14px;
          border-radius: 999px;
          border: 1px solid rgba(254, 91, 3, 0.5);
          background: rgba(254, 91, 3, 0.1);
          color: #ffe3d1;
          font-size: 12px;
          font-weight: 700;
          letter-spacing: 0.03em;
          animation: pulseChip 2.8s ease-in-out infinite;
        }

        .hero-title {
          margin: 0;
          font-size: clamp(1.9rem, 3.3vw, 3.5rem);
          line-height: 1.12;
          letter-spacing: -0.02em;
          font-weight: 800;
          max-width: 18ch;
        }

        .hero-subtitle {
          margin: 0;
          font-size: clamp(0.98rem, 1.1vw, 1.1rem);
          color: #c7ced8;
          max-width: 48ch;
          line-height: 1.6;
        }

        .hero-cta-group {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
          margin-top: 8px;
        }

        .hero-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          border-radius: 999px;
          padding: 12px 20px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          cursor: pointer;
          transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;
        }

        .hero-btn:hover {
          transform: translateY(-3px) scale(1.035);
        }

        .hero-btn-primary {
          background: linear-gradient(135deg, #fe5b03 0%, #f14f63 100%);
          color: #fff;
          box-shadow: 0 0 0 rgba(241, 79, 99, 0), 0 10px 25px rgba(241, 79, 99, 0.35);
          animation: glowBtn 2.6s ease-in-out infinite;
        }

        .hero-btn-secondary {
          border: 1px solid rgba(241, 79, 99, 0.55);
          color: #ffd6dd;
          background: rgba(241, 79, 99, 0.08);
        }

        .hero-btn-secondary:hover {
          box-shadow: 0 10px 24px rgba(241, 79, 99, 0.22);
        }

        .hero-btn-ghost {
          border: 1px solid rgba(255, 255, 255, 0.16);
          color: #e7ecf2;
          background: rgba(255, 255, 255, 0.03);
        }

        .hero-btn-ghost:hover {
          box-shadow: 0 8px 22px rgba(255, 255, 255, 0.14);
        }

        .trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
          margin-top: 4px;
        }

        .trust-pill {
          padding: 6px 10px;
          border-radius: 999px;
          font-size: 11px;
          color: #dde4ee;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
        }

        .hero-right {
          z-index: 2;
          display: flex;
          justify-content: center;
          perspective: 1200px;
        }

        .showcase-stage {
          width: min(500px, 100%);
          height: 380px;
          position: relative;
          transform-style: preserve-3d;
          transition: transform 0.22s ease;
          animation: floatStage 5.5s ease-in-out infinite;
          border-radius: 26px;
          border: 1px solid rgba(255, 255, 255, 0.15);
          padding: 8px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.02)
          );
          box-shadow: 0 26px 70px rgba(0, 0, 0, 0.45),
            0 0 42px rgba(241, 79, 99, 0.18);
        }

        .device-frame-label {
          position: absolute;
          top: -14px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 4;
          padding: 4px 12px;
          border-radius: 999px;
          font-size: 11px;
          font-weight: 700;
          color: #ffd9c3;
          border: 1px solid rgba(254, 91, 3, 0.4);
          background: rgba(30, 30, 30, 0.9);
        }

        .showcase-card {
          width: 100%;
          position: absolute;
          inset: 8px;
          border-radius: 18px;
          border: 1px solid rgba(255, 255, 255, 0.11);
          background: linear-gradient(160deg, rgba(255, 255, 255, 0.08), rgba(255, 255, 255, 0.02));
          box-shadow: 0 20px 34px rgba(0, 0, 0, 0.35);
          backdrop-filter: blur(8px);
          overflow: hidden;
          transform: translateZ(0);
          opacity: 0;
          transform: translateY(22px) scale(0.98);
          transition: opacity 0.55s ease, transform 0.55s ease;
          pointer-events: none;
        }

        .showcase-card.active {
          opacity: 1;
          transform: translateY(0) scale(1);
          pointer-events: auto;
          z-index: 2;
        }

        .showcase-card.previous {
          opacity: 0;
          transform: translateY(-16px) scale(0.97);
          z-index: 1;
        }

        .code-top {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 14px 16px;
          border-bottom: 1px solid rgba(255, 255, 255, 0.12);
          background: rgba(0, 0, 0, 0.15);
        }

        .dot {
          width: 10px;
          height: 10px;
          border-radius: 999px;
        }

        .dot-red {
          background: #ff5f56;
        }
        .dot-amber {
          background: #ffbd2e;
        }
        .dot-green {
          background: #27c93f;
        }

        .code-title {
          margin-left: 8px;
          color: #ced6e1;
          font-size: 13px;
          font-weight: 600;
        }

        .showcase-content {
          min-height: 290px;
          padding: 14px 16px 16px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .showcase-image {
          width: 100%;
          height: 175px;
          object-fit: cover;
          border-radius: 12px;
          border: 1px solid rgba(255, 255, 255, 0.12);
        }

        .showcase-title {
          margin: 0;
          font-size: 1.04rem;
          font-weight: 700;
          color: #f5f8fc;
        }

        .showcase-description {
          margin: 0;
          color: #c5cedb;
          line-height: 1.5;
          font-size: 0.88rem;
        }

        .showcase-dots {
          position: absolute;
          left: 50%;
          bottom: -14px;
          transform: translateX(-50%);
          display: flex;
          gap: 7px;
          z-index: 3;
        }

        .showcase-dot {
          width: 7px;
          height: 7px;
          border-radius: 999px;
          border: none;
          background: rgba(255, 255, 255, 0.25);
          cursor: pointer;
          transition: width 0.2s ease, background 0.2s ease;
        }

        .showcase-dot.active {
          width: 20px;
          background: linear-gradient(90deg, #fe5b03, #f14f63);
        }

        .cursor {
          color: #fe5b03;
          animation: blink 1s step-end infinite;
        }

        .scroll-indicator {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          bottom: 12px;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 4px;
          color: #dbe1ea;
          font-size: 12px;
          opacity: 0.85;
          animation: bounceHint 1.8s infinite;
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes glowBtn {
          0%,
          100% {
            box-shadow: 0 10px 25px rgba(241, 79, 99, 0.35), 0 0 0 rgba(241, 79, 99, 0.2);
          }
          50% {
            box-shadow: 0 14px 30px rgba(241, 79, 99, 0.42), 0 0 26px rgba(241, 79, 99, 0.45);
          }
        }

        @keyframes pulseChip {
          0%,
          100% {
            box-shadow: 0 0 0 0 rgba(254, 91, 3, 0.22);
          }
          50% {
            box-shadow: 0 0 0 12px rgba(254, 91, 3, 0);
          }
        }

        @keyframes floatOrb {
          0%,
          100% {
            transform: translate3d(0, 0, 0);
          }
          50% {
            transform: translate3d(0, -14px, 0);
          }
        }

        @keyframes floatStage {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }

        @keyframes blink {
          0%,
          50% {
            opacity: 1;
          }
          51%,
          100% {
            opacity: 0;
          }
        }

        @keyframes bounceHint {
          0%,
          100% {
            transform: translate(-50%, 0);
          }
          50% {
            transform: translate(-50%, -7px);
          }
        }

        @media (max-width: 991px) {
          .hero-section {
            padding: 100px 20px 50px 20px;
          }

          .hero-container {
            grid-template-columns: 1fr;
            gap: 24px;
          }

          .hero-title {
            max-width: 100%;
          }

          .showcase-stage {
            width: 100%;
            height: 340px;
          }

          .showcase-image {
            height: 145px;
          }
        }
      `}</style>
    </section>
  );
};

export default Home;
