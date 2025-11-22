"use client";
import { useEffect, useState, useRef } from "react";
import { FaAngleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "./img/profile-img.jpg";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    AOS.init();

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      });
    }, options);

    if (progressRef.current) {
      observer.observe(progressRef.current);
    }

    return () => {
      if (progressRef.current) {
        observer.unobserve(progressRef.current);
      }
    };
  }, []);

  const skills = [
    { name: "React", percentage: 90, delay: 0 },
    { name: "JavaScript/TypeScript", percentage: 90, delay: 100 },
    { name: "MongoDB & Postgres", percentage: 80, delay: 200 },
    { name: "AI Integration", percentage: 85, delay: 300 },
    { name: "Tailwind CSS", percentage: 90, delay: 400 },
    { name: "Node.js & Express.js & PHP", percentage: 80, delay: 500 },
  ];

  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-[#F5F5F0] py-16"
    >
      {/* Background Effects - SAME AS HOME */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-light" />
      </div>

      {/* Fixed Creative Background */}
      <div className="about-fixed-bg">
        <div className="about-blob blob-1"></div>
        <div className="about-blob blob-2"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4">
        {/* Title Section */}
        <div className="w-full md:w-[65%] text-center py-5">
          <h1 className="text-4xl font-bold uppercase mb-5 pb-5 relative">
            <span
              className="bg-gradient-to-r from-[#8B0000] to-[#111827] bg-clip-text text-transparent"
              style={{ fontWeight: 900 }}
            >
              About
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[1px] bg-gray-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40px] h-[3px] bg-gradient-to-r from-[#8B0000] to-[#111827]"></div>
          </h1>
          <p className="text-slate-600 leading-relaxed">
            I'm a full-stack developer and software engineer with over 3 years
            of experience in building innovative and user-focused digital
            solutions. I'm always eager to explore new technologies and deliver
            impactful projects that bridge creativity and functionality. With a
            strong foundation in programming, problem-solving, and the technical
            nuances of the development process, I can adapt to various
            frameworks and tools to meet project requirements! This portfolio
            showcases some of my latest projects.
          </p>
        </div>

        {/* Content Section */}
        <div className="w-full md:w-[65%] flex flex-col md:flex-row gap-12 py-12">
          {/* Profile Image with Card Effect */}
          <div
            className="portfolio-card-wrapper"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <div className="portfolio-card-inner">
              <img
                src={profileImage || "/placeholder.svg"}
                alt="Profile"
                className="w-full md:w-[250px] rounded-2xl object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div
            className="flex flex-col gap-6 flex-1"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h2 className="text-slate-600 text-2xl md:text-3xl font-semibold">
              Software Engineer | Full-Stack Developer
            </h2>
            <p className="text-slate-600 leading-relaxed">
              As a full-stack developer and software engineer, I possess a
              diverse range of technical skills that enable me to deliver
              exceptional solutions. I thrive on the challenges presented by the
              fast-evolving tech landscape and continuously strive for
              innovation and excellence in every project I undertake.
            </p>

            {/* Info List with Card Effects */}
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-slate-700">
                <FaAngleRight className="text-slate-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-slate-600">Email:</strong>{" "}
                  hiwotbelay060@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <FaAngleRight className="text-slate-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-slate-600">Phone:</strong> +251
                  946561519
                </span>
              </li>
              <li className="flex items-start gap-2 text-slate-700">
                <FaAngleRight className="text-slate-500 mt-1 flex-shrink-0" />
                <span>
                  <strong className="text-slate-600">Address:</strong> Bahir
                  Dar, Ethiopia
                </span>
              </li>
            </ul>

            <p className="text-slate-600 leading-relaxed mt-4">
              I truly appreciate you visiting my portfolio. I'm excited to
              collaborate with you and turn your unique ideas into extraordinary
              results. Reach out through the contact details provided, and let's
              create something remarkable together!
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4 py-16">
        <div className="w-full md:w-[65%]">
          {/* Skills Title */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold uppercase mb-5 pb-5 relative">
              <span
                className="bg-gradient-to-r from-[#8B0000] to-[#111827] bg-clip-text text-transparent"
                style={{ fontWeight: 900 }}
              >
                Skills
              </span>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[1px] bg-gray-300"></div>
              <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40px] h-[3px] bg-gradient-to-r from-[#8B0000] to-[#111827]"></div>
            </h1>
            <p className="text-slate-600 leading-relaxed max-w-4xl mx-auto">
              As a full-stack developer, I bring a broad set of technical skills
              that allow me to deliver high-quality web applications. I embrace
              the challenges of the fast-paced tech industry and consistently
              strive to improve and innovate in every project I work on.
            </p>
          </div>

          {/* Skills Grid */}
          <div
            className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16"
            ref={progressRef}
          >
            {skills.map((skill, index) => (
              <div key={skill.name} className="skill-item">
                <div className="flex justify-between mb-2">
                  <h4 className="font-medium text-slate-700">{skill.name}</h4>
                  <h4 className="text-slate-600">{skill.percentage}%</h4>
                </div>
                <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden relative">
                  <div
                    className="h-full rounded-full transition-all duration-1000 ease-out"
                    style={{
                      width: isVisible ? `${skill.percentage}%` : "0%",
                      background: "linear-gradient(90deg, #8B0000, #111827)",
                      transitionDelay: `${skill.delay}ms`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Styles - MATCHING HOME */}
      <style jsx>{`
        /* Aurora Light - SAME AS HOME */
        .aurora-light {
          position: absolute;
          inset: -15%;
          background: radial-gradient(
              60% 40% at 20% 30%,
              rgba(139, 0, 0, 0.25),
              transparent 60%
            ),
            radial-gradient(
              50% 35% at 80% 20%,
              rgba(17, 24, 39, 0.25),
              transparent 60%
            ),
            radial-gradient(
              45% 30% at 60% 70%,
              rgba(139, 0, 0, 0.2),
              transparent 60%
            ),
            radial-gradient(
              60% 40% at 20% 80%,
              rgba(139, 0, 0, 0.15),
              transparent 60%
            );
          filter: blur(30px) saturate(110%);
        }

        /* Dots - SAME AS HOME */

        /* Floating Code Particles - SAME AS HOME */
        .floating-code-particles {
          position: absolute;
          inset: 0;
          overflow: hidden;
          z-index: 2;
          pointer-events: none;
        }

        .code-particle {
          position: absolute;
          font-family: "Courier New", monospace;
          font-weight: bold;
          font-size: 14px;
          background: linear-gradient(45deg, #8b0000, #111827);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          opacity: 0.6;
          animation: floatCode 15s ease-in-out infinite;
          transition: all 0.3s ease;
        }

        .code-particle:hover {
          transform: scale(1.5) rotate(10deg) !important;
          opacity: 1 !important;
          filter: drop-shadow(0 0 20px rgba(139, 0, 0, 0.5));
        }

        .code-1 {
          top: 10%;
          right: 15%;
          animation-delay: 0s;
          animation-duration: 20s;
        }
        .code-2 {
          top: 25%;
          right: 8%;
          animation-delay: -2s;
          animation-duration: 18s;
        }
        .code-3 {
          top: 40%;
          right: 20%;
          animation-delay: -4s;
          animation-duration: 22s;
        }
        .code-4 {
          top: 55%;
          right: 12%;
          animation-delay: -6s;
          animation-duration: 16s;
        }
        .code-5 {
          top: 70%;
          right: 25%;
          animation-delay: -8s;
          animation-duration: 24s;
        }
        .code-6 {
          top: 15%;
          right: 35%;
          animation-delay: -1s;
          animation-duration: 19s;
        }
        .code-7 {
          top: 35%;
          right: 30%;
          animation-delay: -3s;
          animation-duration: 21s;
        }
        .code-8 {
          top: 50%;
          right: 5%;
          animation-delay: -5s;
          animation-duration: 17s;
        }
        .code-9 {
          top: 65%;
          right: 18%;
          animation-delay: -7s;
          animation-duration: 23s;
        }
        .code-10 {
          top: 80%;
          right: 10%;
          animation-delay: -9s;
          animation-duration: 15s;
        }
        .code-11 {
          top: 20%;
          right: 40%;
          animation-delay: -1.5s;
          animation-duration: 25s;
        }
        .code-12 {
          top: 45%;
          right: 35%;
          animation-delay: -3.5s;
          animation-duration: 20s;
        }
        .code-13 {
          top: 60%;
          right: 40%;
          animation-delay: -5.5s;
          animation-duration: 18s;
        }
        .code-14 {
          top: 75%;
          right: 35%;
          animation-delay: -7.5s;
          animation-duration: 22s;
        }
        .code-15 {
          top: 30%;
          right: 45%;
          animation-delay: -9.5s;
          animation-duration: 16s;
        }

        @keyframes floatCode {
          0%,
          100% {
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

        /* Mouse Trail - SAME AS HOME */
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
          0% {
            opacity: 0.8;
            transform: scale(1);
          }
          100% {
            opacity: 0;
            transform: scale(0.3);
          }
        }

        /* Cursor Ripple - SAME AS HOME */
        .cursor-ripple {
          position: fixed;
          width: 25px;
          height: 25px;
          border: 2px solid rgba(236, 72, 153, 0.3);
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

        /* Floating Shapes - SAME AS HOME */
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
          0%,
          100% {
            transform: translateY(0px) translateX(0px) rotate(0deg);
          }
          25% {
            transform: translateY(-20px) translateX(-10px) rotate(90deg);
          }
          50% {
            transform: translateY(-10px) translateX(10px) rotate(180deg);
          }
          75% {
            transform: translateY(-30px) translateX(-5px) rotate(270deg);
          }
        }

        /* Animated Grid - SAME AS HOME */

        /* Fixed Creative Background */
        .about-fixed-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .about-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.35;
        }

        .blob-1 {
          width: 500px;
          height: 500px;
          background: radial-gradient(
            circle,
            rgba(139, 0, 0, 0.35),
            transparent 70%
          );
          top: 10%;
          right: 10%;
        }

        .blob-2 {
          width: 450px;
          height: 450px;
          background: radial-gradient(
            circle,
            rgba(17, 24, 39, 0.35),
            transparent 70%
          );
          bottom: 15%;
          left: 12%;
        }

        /* Portfolio Card Effect - MATCHING HOME CARDS */
        .portfolio-card-wrapper {
          position: relative;
          border-radius: 18px;
          padding: 1px;
          background: conic-gradient(
            from 180deg at 50% 50%,
            rgba(139, 0, 0, 0.9),
            rgba(17, 24, 39, 0.9),
            rgba(139, 0, 0, 0.9),
            rgba(17, 24, 39, 0.9)
          );
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }

        .portfolio-card-wrapper:hover {
          box-shadow: 0 12px 26px rgba(2, 6, 23, 0.08),
            0 0 40px rgba(20, 184, 166, 0.16);
          transform: translateY(-2px);
        }

        .portfolio-card-inner {
          border-radius: 17px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.96),
            rgba(255, 255, 255, 0.94)
          );
          border: 1px solid rgba(2, 6, 23, 0.06);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset,
            0 10px 20px rgba(2, 6, 23, 0.05);
          overflow: hidden;
        }
      `}</style>
    </section>
  );
};

export default About;
