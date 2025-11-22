"use client";
import { useState, useEffect } from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-[70vh] overflow-hidden py-16 md:py-20 bg-[#F5F5F0]"
    >
      {/* Background Effects - SAME AS HOME */}
      <div className="absolute inset-0 -z-10">
        <div className="aurora-light" />
      </div>

      {/* Fixed Creative Background */}
      <div className="contact-fixed-bg">
        <div className="contact-blob blob-1"></div>
        <div className="contact-blob blob-2"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-20 w-full max-w-7xl mx-auto px-4 flex items-center justify-center">
        <div className="neon-card-light w-full max-w-5xl">
          <div className="neon-inner-light p-8 md:p-12">
            <div className="flex flex-col lg:flex-row items-start gap-10">
              {/* Contact Info */}
              <div className="flex-1 w-full">
                <h2 className="text-3xl md:text-4xl font-extrabold mb-4">
                  <span
                    className="bg-gradient-to-r from-[#8B0000] to-[#111827] bg-clip-text text-transparent"
                    style={{ fontWeight: 900 }}
                  >
                    Get in Touch
                  </span>
                </h2>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  I'd love to hear from you! Reach out using the details below
                  or send me a quick message.
                </p>

                <div className="flex flex-col gap-6">
                  <div className="contact-item group">
                    <div className="neon-card-light contact-icon-wrapper">
                      <div className="neon-inner-light contact-icon-inner">
                        <FaMapMarkerAlt />
                      </div>
                    </div>
                    <div className="contact-text">
                      <h4 className="font-bold text-slate-700">Location</h4>
                      <p className="text-slate-600">Bahir Dar, Ethiopia</p>
                    </div>
                  </div>

                  <div className="contact-item group">
                    <div className="neon-card-light contact-icon-wrapper">
                      <div className="neon-inner-light contact-icon-inner">
                        <FaEnvelope />
                      </div>
                    </div>
                    <div className="contact-text">
                      <h4 className="font-bold text-slate-700">Email</h4>
                      <p className="text-slate-600 break-all">
                        hiwotbelay060@gmail.com
                      </p>
                    </div>
                  </div>

                  <div className="contact-item group">
                    <div className="neon-card-light contact-icon-wrapper">
                      <div className="neon-inner-light contact-icon-inner">
                        <FaPhone />
                      </div>
                    </div>
                    <div className="contact-text">
                      <h4 className="font-bold text-slate-700">Phone</h4>
                      <p className="text-slate-600">+251 946561519</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Contact Form */}
              <form className="flex-1 w-full flex flex-col gap-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="form-input"
                  required
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="form-input"
                  required
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="form-input"
                  required
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="form-textarea"
                  required
                />
                <button type="submit" className="btn-primary mt-2">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Styles - MATCHING HOME */}
      <style jsx>{`
        /* Background Effects - SAME AS HOME */
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
          background: linear-gradient(45deg, #8b0000, #111827);
          border-radius: 50%;
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
          border: 2px solid rgba(139, 0, 0, 0.3);
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
          background: linear-gradient(45deg, #8b0000, #111827);
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
        .contact-fixed-bg {
          position: absolute;
          inset: 0;
          z-index: 1;
          pointer-events: none;
          overflow: hidden;
        }

        .contact-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(75px);
          opacity: 0.3;
        }

        .blob-1 {
          width: 550px;
          height: 550px;
          background: radial-gradient(
            circle,
            rgba(139, 0, 0, 0.35),
            transparent 70%
          );
          top: -15%;
          right: -8%;
        }

        .blob-2 {
          width: 480px;
          height: 480px;
          background: radial-gradient(
            circle,
            rgba(17, 24, 39, 0.35),
            transparent 70%
          );
          bottom: -12%;
          left: -10%;
        }

        /* Card Styles - MATCHING PORTFOLIO */
        .neon-card-light {
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

        .neon-card-light:hover {
          box-shadow: 0 12px 26px rgba(2, 6, 23, 0.08),
            0 0 40px rgba(20, 184, 166, 0.16);
          transform: translateY(-2px);
        }

        .neon-inner-light {
          border-radius: 17px;
          background: linear-gradient(
            180deg,
            rgba(255, 255, 255, 0.96),
            rgba(255, 255, 255, 0.94)
          );
          border: 1px solid rgba(2, 6, 23, 0.06);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset,
            0 10px 20px rgba(2, 6, 23, 0.05);
        }

        /* Contact Items */
        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          transition: transform 0.25s ease;
        }

        .contact-item:hover {
          transform: translateX(8px);
        }

        .contact-icon-wrapper {
          flex-shrink: 0;
        }

        .contact-icon-inner {
          width: 48px;
          height: 48px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.25rem;
          color: #8b0000;
          transition: transform 0.25s ease, color 0.25s ease;
        }

        .contact-item:hover .contact-icon-inner {
          transform: scale(1.1) rotate(5deg);
          color: #111827;
        }

        .contact-text h4 {
          font-size: 1rem;
          font-weight: 700;
          margin-bottom: 0.25rem;
        }

        .contact-text p {
          font-size: 0.875rem;
        }

        /* Form Styles */
        .form-input,
        .form-textarea {
          width: 100%;
          padding: 0.75rem 1rem;
          border-radius: 12px;
          border: 1px solid rgba(2, 6, 23, 0.1);
          background: rgba(255, 255, 255, 0.8);
          font-family: var(--font-family);
          font-size: 1rem;
          color: #1e293b;
          transition: border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #8b0000;
          box-shadow: 0 0 0 3px rgba(139, 0, 0, 0.1);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 0.5rem;
          padding: 0.75rem 1.5rem;
          border-radius: 9999px;
          background: linear-gradient(135deg, #8b0000, #111827);
          box-shadow: 0 12px 30px rgba(139, 0, 0, 0.3),
            0 0 40px rgba(17, 24, 39, 0.2);
          color: white;
          font-weight: 600;
          font-size: 1rem;
          border: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: pointer;
        }

        .btn-primary:hover {
          transform: translateY(-2px) scale(1.02);
          box-shadow: 0 20px 40px rgba(139, 0, 0, 0.35);
        }
      `}</style>
    </section>
  );
};

export default Contact;
