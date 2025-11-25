"use client";
import { useState, useEffect, useRef } from "react";
import {
  Github,
  Send,
  Linkedin,
  Download,
  X,
  Menu,
  Play,
  Terminal,
} from "lucide-react";
import { ReactTyped } from "react-typed";
import {
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiNextdotjs,
  SiPostgresql,
  SiLeetcode,
} from "react-icons/si";

// Code Editor Component
const CodeEditor = () => {
  const [currentCodeIndex, setCurrentCodeIndex] = useState(0);
  const [displayedCode, setDisplayedCode] = useState("");
  const [output, setOutput] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const [isExecuting, setIsExecuting] = useState(false);
  const typingTimeoutRef = useRef(null);
  const executeTimeoutRef = useRef(null);

  const codeExamples = [
    {
      code: `// React Component\nconst Portfolio = () => {\n  return (\n    <div className="app">\n      <h1>Hiwot Belay</h1>\n      <p>Full-Stack Developer</p>\n    </div>\n  );\n};`,
      output:
        "✓ Component rendered successfully\n✓ React 18.2.0\n✓ Build completed in 2.3s",
      icon: <SiReact className="code-icon" />,
      language: "javascript",
    },
    {
      code: `// Node.js API Server\nconst express = require('express');\nconst app = express();\n\napp.get('/api/portfolio', (req, res) => {\n  res.json({ \n    name: 'Hiwot Belay',\n    role: 'Full-Stack Developer'\n  });\n});\n\napp.listen(3000);`,
      output:
        "✓ Server started on port 3000\n✓ Express 4.18.2\n✓ API endpoint ready",
      icon: <SiNodedotjs className="code-icon" />,
      language: "javascript",
    },
    {
      code: `// Next.js Page\nimport { useState } from 'react';\n\nexport default function Home() {\n  const [count, setCount] = useState(0);\n  return (\n    <div>\n      <h1>Portfolio</h1>\n      <button onClick={() => setCount(count + 1)}>\n        Count: {count}\n      </button>\n    </div>\n  );\n}`,
      output: "✓ Next.js 14.0.0\n✓ Page compiled successfully\n✓ Ready in 1.8s",
      icon: <SiNextdotjs className="code-icon" />,
      language: "javascript",
    },
    {
      code: `<?php\n// PHP Backend\nclass Portfolio {\n  public function getInfo() {\n    return [\n      'name' => 'Hiwot Belay',\n      'skills' => ['PHP', 'MySQL', 'Laravel']\n    ];\n  }\n}\n\n$portfolio = new Portfolio();\necho json_encode($portfolio->getInfo());\n?>`,
      output: "✓ PHP 8.2.0\n✓ Script executed\n✓ JSON response generated",
      icon: <SiPhp className="code-icon" />,
      language: "php",
    },
    {
      code: `-- PostgreSQL Query\nSELECT \n  name,\n  role,\n  skills\nFROM developers\nWHERE name = 'Hiwot Belay';\n\n-- Result:\n-- name: Hiwot Belay\n-- role: Full-Stack Developer\n-- skills: [React, Node.js, PHP, Next.js]`,
      output: "✓ PostgreSQL 15.0\n✓ Query executed\n✓ 1 row returned",
      icon: <SiPostgresql className="code-icon" />,
      language: "sql",
    },
  ];

  useEffect(() => {
    const currentExample = codeExamples[currentCodeIndex];
    let charIndex = 0;
    setIsTyping(true);
    setDisplayedCode("");
    setOutput("");

    const typeCode = () => {
      if (charIndex < currentExample.code.length) {
        setDisplayedCode(currentExample.code.slice(0, charIndex + 1));
        charIndex++;
        typingTimeoutRef.current = setTimeout(typeCode, 30);
      } else {
        setIsTyping(false);
        setIsExecuting(true);
        // Show output after typing completes
        executeTimeoutRef.current = setTimeout(() => {
          setOutput(currentExample.output);
          setIsExecuting(false);
          // Move to next example after showing output
          setTimeout(() => {
            setCurrentCodeIndex((prev) => (prev + 1) % codeExamples.length);
          }, 3000);
        }, 500);
      }
    };

    typeCode();

    return () => {
      if (typingTimeoutRef.current) clearTimeout(typingTimeoutRef.current);
      if (executeTimeoutRef.current) clearTimeout(executeTimeoutRef.current);
    };
  }, [currentCodeIndex]);

  const currentExample = codeExamples[currentCodeIndex];

  return (
    <div className="code-editor-container">
      {/* Framework Icons Badge */}
      <div className="framework-badges">
        {codeExamples.map((example, index) => (
          <div
            key={index}
            className={`framework-badge ${
              index === currentCodeIndex ? "active" : ""
            }`}
          >
            {example.icon}
          </div>
        ))}
      </div>

      {/* Code Editor Window */}
      <div className="code-editor-window">
        {/* Editor Header */}
        <div className="editor-header">
          <div className="editor-dots">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="editor-title">
            <Terminal className="editor-icon" />
            <span>portfolio.{currentExample.language}</span>
          </div>
          <div className="editor-status">
            {isTyping ? (
              <span className="status-typing">Typing...</span>
            ) : isExecuting ? (
              <span className="status-executing">
                <Play className="play-icon" /> Executing...
              </span>
            ) : (
              <span className="status-ready">✓ Ready</span>
            )}
          </div>
        </div>

        {/* Code Content */}
        <div className="editor-content">
          <pre className="code-block">
            <code className={`language-${currentExample.language}`}>
              {displayedCode}
              {isTyping && <span className="cursor">|</span>}
            </code>
          </pre>
        </div>

        {/* Output Terminal */}
        {output && (
          <div className="editor-output">
            <div className="output-header">
              <span>Output</span>
            </div>
            <div className="output-content">
              <pre>{output}</pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const Home = () => {
  const [menu, toggleMenu] = useState(false);
  const headerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  // Check if screen is mobile size
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
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
        <div
          className="absolute top-4 right-4 z-50 text-gray-800 text-3xl cursor-pointer"
          onClick={() => toggleMenu(!menu)}
        >
          {menu ? <X /> : <Menu />}
        </div>
      )}

      <section
        className="hero relative overflow-hidden flex items-center min-h-screen"
        id="home"
      >
        {/* Simple Background */}
        <div className="absolute inset-0 -z-10 bg-[#F5F5F0]" />

        {/* Name Section - Independent, Close to Navbar */}
        <div
          className="home-name-section relative md:absolute left-0 md:top-1/2 md:-translate-y-1/2 z-20 text-left px-4 md:px-0"
          style={{ marginLeft: "435px" }}
        >
          <h1 className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight whitespace-nowrap">
            <span style={{ fontWeight: 900, color: "#8B0000" }}>
              Hiwot Belay
            </span>
          </h1>

          <p className="text-xl md:text-3xl font-medium mb-8 text-slate-700">
            I'm{" "}
            <span className="relative inline-block brand-color-text">
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

          {/* Social Icons */}
          <div className="social relative z-30 flex justify-start gap-4 mb-12">
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
              href="https://leetcode.com/u/Hiwot_Belay/"
              target="_blank"
              rel="noopener noreferrer"
              className="portfolio-social-icon group"
            >
              <div className="portfolio-social-inner">
                <SiLeetcode className="h-6 w-6" />
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

        {/* Interactive Code Editor - Independent, Right Side */}
        <div
          className="home-code-section relative md:absolute right-0 md:top-1/2 md:-translate-y-1/2 z-20 px-4 md:px-0 mt-8 md:mt-0 flex items-center justify-center"
          style={{ marginRight: "clamp(20px, 3vw, 60px)" }}
        >
          <CodeEditor />
        </div>

        {/* CV Download Button - EXACT same positioning */}
        <div className="cv-download absolute top-4 right-4 z-30">
          <a
            href="/Hiwot_Belay CV.pdf"
            download
            className="portfolio-cv-button group"
          >
            <div className="portfolio-cv-inner">
              <Download className="h-5 w-5 transition-transform duration-300 group-hover:scale-110 group-hover:-translate-y-0.5" />
              <span>Get My CV</span>
            </div>
          </a>
        </div>

        {/* Styles */}
        <style jsx>{`
          /* Portfolio Aurora Light Effect - EXACT MATCH */

          /* Fixed Creative Background */

          /* Brand Color Text */
          .brand-color-text {
            color: #8b0000;
            font-weight: 700;
          }

          /* Interactive Code Editor */
          .code-editor-container {
            position: relative;
            width: 100%;
            max-width: 550px;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }

          /* Framework Badges */
          .framework-badges {
            display: flex;
            justify-content: center;
            gap: 12px;
            flex-wrap: wrap;
          }

          .framework-badge {
            width: 50px;
            height: 50px;
            border-radius: 12px;
            background: rgba(255, 255, 255, 0.9);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2px solid rgba(139, 0, 0, 0.2);
            transition: all 0.3s ease;
            cursor: pointer;
          }

          .framework-badge.active {
            background: #8b0000;
            border-color: #8b0000;
            transform: scale(1.15);
            box-shadow: 0 8px 25px rgba(139, 0, 0, 0.4);
          }

          .framework-badge:hover {
            transform: scale(1.1);
            border-color: #8b0000;
          }

          .code-icon {
            width: 28px;
            height: 28px;
            color: #111827;
            transition: color 0.3s ease;
          }

          .framework-badge.active .code-icon {
            color: #f5f5f0;
          }

          /* Code Editor Window */
          .code-editor-window {
            background: rgba(255, 255, 255, 0.95);
            border-radius: 16px;
            overflow: hidden;
            box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15),
              0 0 0 1px rgba(139, 0, 0, 0.2);
            transition: box-shadow 0.3s ease;
            height: 450px;
            display: flex;
            flex-direction: column;
          }

          .code-editor-window:hover {
            box-shadow: 0 25px 70px rgba(139, 0, 0, 0.25),
              0 0 0 1px rgba(139, 0, 0, 0.3);
          }

          /* Editor Header */
          .editor-header {
            background: #8b0000;
            padding: 12px 16px;
            display: flex;
            align-items: center;
            gap: 12px;
            border-bottom: 1px solid rgba(139, 0, 0, 0.3);
            flex-shrink: 0;
          }

          .editor-dots {
            display: flex;
            gap: 6px;
          }

          .dot {
            width: 12px;
            height: 12px;
            border-radius: 50%;
          }

          .dot-red {
            background: #ff5f56;
          }

          .dot-yellow {
            background: #ffbd2e;
          }

          .dot-green {
            background: #27c93f;
          }

          .editor-title {
            flex: 1;
            display: flex;
            align-items: center;
            gap: 8px;
            color: #f5f5f0;
            font-size: 14px;
            font-weight: 600;
          }

          .editor-icon {
            width: 16px;
            height: 16px;
          }

          .editor-status {
            font-size: 12px;
            font-weight: 500;
          }

          .status-typing {
            color: #f5f5f0;
            animation: blink 1s infinite;
          }

          .status-executing {
            color: #8b0000;
            display: flex;
            align-items: center;
            gap: 4px;
          }

          .play-icon {
            width: 12px;
            height: 12px;
          }

          .status-ready {
            color: #8b0000;
          }

          @keyframes blink {
            0%,
            100% {
              opacity: 1;
            }
            50% {
              opacity: 0.5;
            }
          }

          /* Editor Content */
          .editor-content {
            background: rgba(245, 245, 240, 0.8);
            padding: 20px;
            flex: 1;
            overflow-y: auto;
            min-height: 0;
          }

          .code-block {
            margin: 0;
            font-family: "Courier New", "Monaco", "Menlo", monospace;
            font-size: 13px;
            line-height: 1.6;
            color: #111827;
          }

          .code-block code {
            color: inherit;
            white-space: pre-wrap;
            word-wrap: break-word;
          }

          /* Cursor */
          .cursor {
            display: inline-block;
            width: 2px;
            height: 18px;
            background: #8b0000;
            margin-left: 2px;
            animation: cursorBlink 1s infinite;
            vertical-align: middle;
          }

          @keyframes cursorBlink {
            0%,
            50% {
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }

          /* Output Terminal */
          .editor-output {
            background: rgba(245, 245, 240, 0.9);
            border-top: 1px solid rgba(139, 0, 0, 0.2);
            padding: 16px 20px;
            animation: slideUp 0.3s ease;
            flex-shrink: 0;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .output-header {
            color: #111827;
            font-size: 12px;
            font-weight: 600;
            margin-bottom: 8px;
            text-transform: uppercase;
            letter-spacing: 1px;
          }

          .output-content {
            font-family: "Courier New", "Monaco", "Menlo", monospace;
            font-size: 12px;
            color: #8b0000;
            line-height: 1.8;
          }

          .output-content pre {
            margin: 0;
            white-space: pre-wrap;
            word-wrap: break-word;
          }

          /* Responsive Design */
          @media (max-width: 768px) {
            .code-editor-container {
              max-width: 100%;
              padding: 0 10px;
            }

            .code-editor-window {
              height: 400px;
            }

            .editor-content {
              padding: 16px;
            }

            .code-block {
              font-size: 11px;
            }

            .framework-badge {
              width: 40px;
              height: 40px;
            }

            .code-icon {
              width: 22px;
              height: 22px;
            }

            /* Name Section Mobile */
            .home-name-section {
              position: relative !important;
              margin-left: 0 !important;
              margin-top: 2rem;
              margin-bottom: 2rem;
              text-align: center;
            }

            .home-name-section h1 {
              font-size: 2.5rem !important;
              white-space: normal !important;
            }

            .home-name-section p {
              font-size: 1.25rem !important;
            }

            /* Code Section Mobile */
            .home-code-section {
              position: relative !important;
              margin-left: 0 !important;
              margin-top: 1rem;
              margin-bottom: 2rem;
            }
          }

          /* Portfolio Social Icons - EXACT MATCH */
          .portfolio-social-icon {
            position: relative;
            border-radius: 18px;
            padding: 1px;
            background: #8b0000;
            transition: box-shadow 0.25s ease, transform 0.25s ease;
            text-decoration: none;
            display: block;
          }

          .portfolio-social-icon:hover {
            box-shadow: 0 12px 26px rgba(2, 6, 23, 0.08),
              0 0 40px rgba(139, 0, 0, 0.16);
            transform: translateY(-8px) scale(1.1);
          }

          .portfolio-social-inner {
            border-radius: 17px;
            background: rgba(255, 255, 255, 0.96);
            border: 1px solid rgba(2, 6, 23, 0.06);
            box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset,
              0 10px 20px rgba(2, 6, 23, 0.05);
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
            background: #8b0000;
            transition: box-shadow 0.25s ease, transform 0.25s ease;
            text-decoration: none;
            display: inline-flex;
            align-items: center;
          }

          .portfolio-cv-button:hover {
            box-shadow: 0 12px 26px rgba(2, 6, 23, 0.08),
              0 0 40px rgba(139, 0, 0, 0.16);
            transform: translateY(-5px) scale(1.05);
          }

          .portfolio-cv-inner {
            border-radius: 49px;
            background: rgba(255, 255, 255, 0.96);
            border: 1px solid rgba(2, 6, 23, 0.06);
            box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset,
              0 10px 20px rgba(2, 6, 23, 0.05);
            padding: 12px 24px;
            color: #334155;
            font-weight: 600;
            display: flex;
            align-items: center;
            gap: 8px;
          }
        `}</style>
      </section>
    </>
  );
};

export default Home;
