"use client"
import { useState, useEffect, useRef, useMemo } from "react"
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaPause,
  FaAward,
  FaCode,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"

// Your assets
import gcc from "./img/gcc.jpg"
import web from "./img/web.jpg"
import mern from "./img/mern.jpg"
import prog from "./img/prog.jpg"
import hackathon from "./img/Hackathon.jpg"
import new1 from "./img/new1.jpg"
import new2 from "./img/new2.jpg"
import new3 from "./img/new3.jpg"
import helder from "./img/helder.jpg"
import kuraz from "./img/kuraz.jpg"
import code from "./img/code.jpg"
import ethioware from "./img/ethioware.png"

import petVideo from "./img/pet.mp4"
import ecommerceVideo from "./img/ecommerce.mp4"
import tenderVideo from "./img/tender.mp4"
import dentalVideo from "./img/dental.mp4"
import chatappVideo from "./img/chatapp.mp4"
import behavVideo from "./img/behav.mp4"
import ethiotel from "./img/ethiotel.mp4"

const Portfolio = () => {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)
  const [playingVideo, setPlayingVideo] = useState(null)
  const [allViewTab, setAllViewTab] = useState("awards") // NEW: for "all" filter creative view
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [mouseTrail, setMouseTrail] = useState([])

  const videoRefs = useRef({})
  const VIDEO_SPEED = 2

  // Mouse tracking - SAME AS HOME
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

      setMouseTrail((prev) => {
        const newTrail = [...prev, newPosition].slice(-8)
        return newTrail.filter((pos) => Date.now() - pos.timestamp < 500)
      })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  useEffect(() => {
    if (typeof window === "undefined") return
    const videos = Array.from(document.querySelectorAll("#portfolio video"))
    if (!videos.length) return

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target
          if (entry.isIntersecting) {
            if (v.getAttribute("data-preloaded")) return
            try {
              v.setAttribute("preload", "auto")
              v.load()
              v.setAttribute("data-preloaded", "1")
            } catch (e) {}
          } else {
            if (!v.getAttribute("data-preloaded")) return
            try {
              v.setAttribute("preload", "metadata")
            } catch (e) {}
          }
        })
      },
      {
        root: null,
        rootMargin: "400px",
        threshold: 0.05,
      },
    )

    videos.forEach((v) => io.observe(v))
    return () => io.disconnect()
  }, [filter])

  const certificateDescriptions = useMemo(
    () => ({
      hackathon:
        "I won the SheCodes Hackathon with an Amazing AI Recruiter project that tackled a crucial need in my country, an amazing and impactful achievement!",
      gcc: "Recognition for completing the Girls Can Code program, mastering fundamental programming concepts and developing practical coding skills.",
      web: "Certification in Web Development fundamentals, covering HTML, CSS, JavaScript and responsive design principles.",
      mern: "Certification in MERN Stack development, covering MongoDB, Express.js, React, and Node.js for full-stack applications.",
      prog: "Advanced Programming certification covering algorithms, data structures, and software design patterns.",
      new1: "I won 1st place at the Gig Hackathon with an amazing AI-integrated Pet Twin System—my second big hackathon win, and another proud, impactful moment!",
      new2: "I was recognized for my communication, planning, and leadership skills while organizing a major event at Bahir Dar University.",
      new3: "This highlights my active participation in my second hackathon competition, demonstrating both my technical growth and collaborative experience.",
      helder:
        "This was my paid internship experience as a Front-End Developer. I had a chance to work on real client projects. I worked starting from UI/UX to developing and integration phase this has been amazing experience skill wise and other supportive skills career wise.",
      kuraz:
        "It was Backend Development Internship. I had a role on doing real projects. I worked on PHP and MySQL database management. It was great experience and I learned a lot from it.",
      code: "I have participated on DevQuest 2025, where me and my team had done a lot of real solving exam competitons.",
      ethioware: "Recognition for successfully completing the Fullstack Development 3 Month internship program, I was my group team lead too and me as an individual and my team got 2 recognitions on the best top 10 performers. Had practical skills in software development and industry best practices.",
    }),
    [],
  )

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Digital Pet Twin",
        video: petVideo,
        category: "Web Application/Website",
        description:
          "A fully interactive 3D digital pet that can 🐶 Express emotions,🎤 Talk and react to users,🌦 Show dynamic weather,🧢 Wear accessories,🧠 Remember interactions,🕹️ Even play games with you!",
        technologies:
          "Three.js, Blender, GLTF models, Web Speech API, ResponsiveVoice, CSS Keyframes, SVG Motion, LocalStorage, JavaScript, React, Next.js, Tailwind CSS",
        github: "https://github.com/HiwotBelay/hackathon-proj",
        demo: "#",
      },
      {
        id: 2,
        title: "E-commerce",
        video: ecommerceVideo,
        category: "Full Stack",
        description:
          "A powerful, scalable e-commerce web app inspired by Amazon – built using Next.js, React, Node.js, Express, Firebase Realtime Database, PostgreSQL, and Prisma.",
        technologies: "Next.js, React, Node.js, Express, Firebase Realtime Database, PostgreSQL, Prisma",
        github: "https://github.com/HiwotBelay/E-commerce",
        demo: "#",
      },
      {
        id: 3,
        title: "Tender Management System",
        video: tenderVideo,
        category: "Enterprise Solution",
        description:
          "A comprehensive system for managing the tendering process for government and private organizations. Features include tender posting, bid submission, evaluation, and award notification.",
        technologies: "Frontend: React, Tailwind CSS, Node.js, Express.js, MongoDB,JWT, OAuth",
        github: "https://github.com/HiwotBelay/Tender-Managment-System",
        demo: "#",
      },
      {
        id: 4,
        title: "Dental Clinic Management",
        video: dentalVideo,
        category: "Healthcare Solution",
        description:
          "A complete management system for dental clinics, featuring appointment scheduling, patient records, treatment plans, and billing. Designed with input from dental professionals.",
        technologies: "React, Firebase, Material UI",
        github: "https://github.com/HiwotBelay/dental-clinic",
        demo: "#",
      },
      {
        id: 5,
        title: "Real-time Chat Application",
        video: chatappVideo,
        category: "Communication Tool",
        description:
          "A feature-rich chat application with real-time messaging, file sharing, and group conversations. Includes user authentication, message encryption, and read receipts.",
        technologies: "React, Socket.io, Express, MongoDB",
        github: "https://github.com/HiwotBelay/Chat-App",
        demo: "#",
      },
      {
        id: 6,
        title: "Behavior-Driven-Interaction-System",
        video: behavVideo,
        category: "Logic and state management",
        description:
          "A dynamic simulation system that demonstrates behavior-driven interactions and state management through virtual agents with unique personalities.",
        technologies: "React, Next.js, API",
        github: "https://github.com/HiwotBelay/Behavior-Driven-Interaction-System",
        demo: "#",
      },
      {
        id: 7,
        title: "Cloning Ethiotelecom's Website ",
        video: ethiotel,
        category: "Cloning / Inspiration Projects",
        description:
          "This is a responsive, visually appealing clone of the Ethio Telecom official website, built for learning and design inspiration purposes.",
        technologies: "React, Next.js, TailwindCSS, API",
        github: "https://github.com/HiwotBelay/Cloning-Ethiotelecom-s-Website",
        demo: "#",
      },
    ],
    [],
  )

  const certificates = useMemo(
    () => [
      { img: hackathon, title: "Hackathon Winner", subtitle: "Innovation", desc: certificateDescriptions.hackathon },
      { img: new1, title: "Hackathon Winner", subtitle: "AI Driven", desc: certificateDescriptions.new1 },
      {
        img: helder,
        title: "Paid Internship",
        subtitle: "Front-End Dev",
        desc: certificateDescriptions.helder,
      },
      { img: new2, title: "Event Organizer", subtitle: "Tech Exhibition", desc: certificateDescriptions.new2 },
      { img: ethioware, title: "Fullstack Development", subtitle: "Internship Program", desc: certificateDescriptions.ethioware },
      { img: kuraz, title: "Backend Internship", subtitle: "PHP/MySQL", desc: certificateDescriptions.kuraz },
      { img: new3, title: "Participation", subtitle: "Hackathon", desc: certificateDescriptions.new3 },
      { img: web, title: "Web Development", subtitle: "HTML/CSS/JS", desc: certificateDescriptions.web },
      { img: gcc, title: "Girls Can Code", subtitle: "Programming", desc: certificateDescriptions.gcc },
      { img: mern, title: "MERN Stack", subtitle: "Full-Stack", desc: certificateDescriptions.mern },
      { img: prog, title: "Programming", subtitle: "Algorithms", desc: certificateDescriptions.prog },
      { img: code, title: "DevQuest 2025", subtitle: "Problem Solving", desc: certificateDescriptions.code },
    ],
    [certificateDescriptions],
  )

  useEffect(() => {
    AOS.init()
  }, [])

  const closeLightbox = () => setSelectedImage(null)

  const handleVideoPlay = (id) => {
    if (playingVideo && playingVideo !== id) {
      if (videoRefs.current[playingVideo]) videoRefs.current[playingVideo].pause()
    }
    if (playingVideo === id) {
      if (videoRefs.current[id]) videoRefs.current[id].pause()
      setPlayingVideo(null)
    } else {
      if (videoRefs.current[id]) {
        try {
          videoRefs.current[id].playbackRate = VIDEO_SPEED
        } catch (e) {}
        videoRefs.current[id].play()
      }
      setPlayingVideo(id)
    }
  }

  const setVideoRef = (id, element) => {
    if (element) videoRefs.current[id] = element
  }

  useEffect(() => {
    Object.values(videoRefs.current || {}).forEach((v) => v && v.pause && v.pause())
    setPlayingVideo(null)
  }, [filter])

  useEffect(() => {
    const items = Array.from(document.querySelectorAll("#portfolio .masonry-item"))
    const directions = ["left", "right", "top", "bottom"]

    items.forEach((el, i) => {
      el.style.setProperty("--i", String(i))
      const dir = directions[i % directions.length]
      if (dir === "left") {
        el.style.setProperty("--tx", "-35vw")
        el.style.setProperty("--ty", "8vh")
      } else if (dir === "right") {
        el.style.setProperty("--tx", "35vw")
        el.style.setProperty("--ty", "6vh")
      } else if (dir === "top") {
        el.style.setProperty("--tx", "0vw")
        el.style.setProperty("--ty", "-30vh")
      } else if (dir === "bottom") {
        el.style.setProperty("--tx", "0vw")
        el.style.setProperty("--ty", "28vh")
      }
      el.classList.remove("enter")
    })

    requestAnimationFrame(() => {
      items.forEach((el) => el.classList.add("enter"))
    })
  }, [filter, allViewTab])

  const showAwards = filter === "design"
  const showProjects = filter === "illustration"
  const showVenture = filter === "videos"
  const showAll = filter === "all"

  const renderCertificateCard = (cert, index) => (
    <div key={index} className="masonry-item" onClick={() => setSelectedImage(cert.img)}>
      <div className="neon-card-light group">
        <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
          <img
            src={cert.img || "/placeholder.svg"}
            className="w-full h-auto object-cover"
            alt={cert.title}
            loading="lazy"
            decoding="async"
          />
          <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
          <div className="card-overlay-light">
            <h4 className="text-lg md:text-xl font-bold">{cert.title}</h4>
            <p className="text-xs uppercase tracking-wide text-slate-500">{cert.subtitle}</p>
            <p className="desc-light">{cert.desc}</p>
          </div>
        </div>
      </div>
    </div>
  )

  const renderProjectCard = (project) => (
    <div key={project.id} className="masonry-item">
      <div className="neon-card-light group">
        <div className="neon-inner-light tilt relative overflow-hidden">
          <div className="w-full bg-white relative overflow-hidden">
            <video
              ref={(el) => setVideoRef(project.id, el)}
              src={project.video}
              className="w-full h-[260px] object-cover"
              muted
              loop
              playsInline
              preload="metadata"
              onClick={() => handleVideoPlay(project.id)}
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-white/35 to-white/0" />
            <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
            <button
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white bg-gradient-to-r from-fuchsia-500 to-teal-500 shadow-[0_0_30px_rgba(168,85,247,0.35)] group-hover:scale-105 transition-all"
              onClick={(e) => {
                e.stopPropagation()
                handleVideoPlay(project.id)
              }}
              aria-label={playingVideo === project.id ? "Pause video" : "Play video"}
            >
              {playingVideo === project.id ? <FaPause /> : <FaPlay />}
            </button>
            <div className="absolute bottom-3 left-3 z-10">
              <span className="text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-full bg-white/70 backdrop-blur border border-slate-200">
                {project.category}
              </span>
            </div>
          </div>

          <div className="p-5 md:p-6">
            <h3 className="text-xl font-semibold text-slate-900 mb-2">{project.title}</h3>
            <p className="text-slate-600 text-sm mb-4 line-clamp-3">{project.description}</p>

            <div className="flex flex-wrap gap-1.5 mb-5">
              {project.technologies.split(", ").map((tech, index) => (
                <span
                  key={index}
                  className="text-[11px] md:text-xs px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex justify-between items-center pt-3 border-t border-slate-200">
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-teal-600 hover:text-teal-800 transition-colors"
              >
                <FaGithub /> GitHub
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-sm text-fuchsia-600 hover:text-fuchsia-800 transition-colors"
              >
                <FaExternalLinkAlt /> Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <section id="portfolio" className="relative w-full overflow-hidden py-16 md:py-20">
      {/* Background Effects - SAME AS HOME */}
      <div className="absolute inset-0 -z-10 bg-white" />
      <div className="aurora-light -z-10" />
      <div className="dots -z-10" />
      <div className="paper -z-10" />

      {/* Floating Code Particles - SAME AS HOME */}
      <div className="floating-code-particles">
        <div className="code-particle code-1">&lt;/&gt;</div>
        <div className="code-particle code-2">{`{ }`}</div>
        <div className="code-particle code-3">=&gt;</div>
        <div className="code-particle code-4">const</div>
        <div className="code-particle code-5">React</div>
        <div className="code-particle code-6">[ ]</div>
        <div className="code-particle code-7">npm</div>
        <div className="code-particle code-8">git</div>
        <div className="code-particle code-9">API</div>
        <div className="code-particle code-10">CSS</div>
        <div className="code-particle code-11">JS</div>
        <div className="code-particle code-12">{`( )`}</div>
        <div className="code-particle code-13">async</div>
        <div className="code-particle code-14">await</div>
        <div className="code-particle code-15">function</div>
      </div>

      {/* Mouse Trail - SAME AS HOME */}
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

      {/* Floating Shapes - SAME AS HOME */}
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

      {/* Animated Grid - SAME AS HOME */}
      <div className="animated-grid"></div>

      {/* Mouse Glow - SAME AS HOME */}
      <div
        className="absolute inset-0 z-10 opacity-50 pointer-events-none"
        style={{
          background: `
            radial-gradient(circle at ${(mousePosition.x + 1) * 50}% ${(-mousePosition.y + 1) * 50}%, rgba(236,72,153,0.25) 0%, rgba(20,184,166,0.15) 20%, transparent 45%),
            radial-gradient(circle at ${(mousePosition.x + 1) * 50 + 10}% ${(-mousePosition.y + 1) * 50 + 10}%, rgba(16,185,129,0.2) 0%, transparent 30%)
          `,
          transition: "background 0.2s ease-out",
        }}
      />

      {/* Cursor Ripple - SAME AS HOME */}
      <div
        className="cursor-ripple"
        style={{
          left: mousePosition.clientX,
          top: mousePosition.clientY,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <div className="w-full md:w-[65%] text-center py-5">
         <h1 className="text-4xl font-bold uppercase mb-5 pb-5 relative">
             <span className="bg-gradient-to-r from-fuchsia-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Experience
            </span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[1px] bg-gray-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40px] h-[3px] bg-gradient-to-r from-fuchsia-600 via-teal-500 to-emerald-600"></div>
          </h1>
          <p className="text-slate-600 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            I'm a full-stack developer with a strong passion for creating interactive and visually striking web
            applications. From front-end design to back-end development, I thrive on building projects that are not only
            functional but also user-friendly. My experience spans working with technologies like React, Node.js, and
            MongoDB, and I've had the opportunity to apply these skills in a variety of projects that challenge me to
            learn and grow.
          </p>
        </div>

        {/* Filter Pills */}
        <div
          className="flex w-[360px] items-center justify-between my-6 rounded-3xl px-2 bg-white/80 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(2,6,23,0.06)]"
          data-aos="zoom-in"
        >
          <button className={`pill-light ${filter === "all" ? "active" : ""}`} onClick={() => setFilter("all")}>
            All
          </button>
          <button className={`pill-light ${filter === "design" ? "active" : ""}`} onClick={() => setFilter("design")}>
            Awards
          </button>
          <button
            className={`pill-light ${filter === "illustration" ? "active" : ""}`}
            onClick={() => setFilter("illustration")}
          >
            Projects
          </button>
          <button className={`pill-light ${filter === "videos" ? "active" : ""}`} onClick={() => setFilter("videos")}>
            Venture
          </button>
        </div>

        {/* 🎉 WOW CREATIVE "ALL" VIEW */}
        {showAll && (
          <div className="w-full max-w-7xl mx-auto mb-8">
            {/* Creative Tab Switcher */}
            <div className="creative-tab-wrapper">
              <div className="creative-tabs">
                <button
                  className={`creative-tab ${allViewTab === "awards" ? "active" : ""}`}
                  onClick={() => setAllViewTab("awards")}
                >
                  <div className="tab-icon-wrapper">
                    <FaAward className="tab-icon" />
                  </div>
                  <span className="tab-text">Awards & Certificates</span>
                  <span className="tab-count">{certificates.length}</span>
                </button>

                <button
                  className={`creative-tab ${allViewTab === "projects" ? "active" : ""}`}
                  onClick={() => setAllViewTab("projects")}
                >
                  <div className="tab-icon-wrapper">
                    <FaCode className="tab-icon" />
                  </div>
                  <span className="tab-text">Projects</span>
                  <span className="tab-count">{projects.length}</span>
                </button>
              </div>

              {/* Navigation Arrows */}
              <div className="creative-nav-arrows">
                <button
                  className="nav-arrow"
                  onClick={() => setAllViewTab(allViewTab === "awards" ? "projects" : "awards")}
                  aria-label="Previous"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="nav-arrow"
                  onClick={() => setAllViewTab(allViewTab === "awards" ? "projects" : "awards")}
                  aria-label="Next"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Grid */}
        <div className="mt-8 w-[92%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {/* Show content based on filter */}
          {showAll && allViewTab === "awards" && certificates.map((cert, i) => renderCertificateCard(cert, i))}
          {showAll && allViewTab === "projects" && projects.map((project) => renderProjectCard(project))}

          {showAwards && certificates.map((cert, i) => renderCertificateCard(cert, i))}
          {showProjects && projects.map((project) => renderProjectCard(project))}

          {showVenture && (
            <div className="masonry-item col-span-full">
              <div className="neon-card-light">
                <div className="neon-inner-light relative overflow-hidden p-8 md:p-10 text-center">
                  <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                    For More Projects Check on my github profile
                  </h3>
                  <p className="mt-3 text-slate-600">
                    Explore additional ventures, experiments, and works-in-progress.
                  </p>
                  <a
                    href="https://github.com/HiwotBelay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-fuchsia-500 to-teal-500 shadow-[0_12px_30px_rgba(16,185,129,0.25)] hover:scale-[1.015] transition-transform"
                  >
                    <FaGithub /> GitHub
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[9999] bg-black/50 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <img
              src={selectedImage || "/placeholder.svg"}
              className="max-w-[92%] max-h-[90%] object-contain rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-200 bg-white"
              alt="certificate"
              loading="lazy"
              decoding="async"
            />
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div
        className="relative z-20 w-[90%] max-w-4xl mx-auto flex flex-wrap items-center gap-3 justify-center mt-10 py-6 px-6 rounded-xl border border-slate-200 bg-white/80 backdrop-blur"
        data-aos="zoom-in-up"
      >
        <h3 className="text-slate-700 text-lg">For More Projects Check on my github profile</h3>
        <a
          href="https://github.com/HiwotBelay"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-fuchsia-500 to-teal-500 text-white font-semibold hover:scale-[1.02] transition-transform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>

      {/* Styles - MATCHING HOME + NEW CREATIVE TABS */}
      <style jsx>{`
        /* Background Effects - SAME AS HOME */
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
          0% {
            transform: translateY(-1.5%) translateX(-1%) scale(1);
          }
          100% {
            transform: translateY(1.5%) translateX(1%) scale(1.03);
          }
        }

        .dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(rgba(15, 23, 42, 0.06) 1px, transparent 1px);
          background-size: 16px 16px;
          mask-image: radial-gradient(closest-side, rgba(0, 0, 0, 0.4), transparent 85%);
        }

        .paper {
          position: absolute;
          inset: 0;
          pointer-events: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.015'/%3E%3C/svg%3E");
          mix-blend-mode: multiply;
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
          background: linear-gradient(45deg, #ec4899, #14b8a6, #10b981);
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
          filter: drop-shadow(0 0 20px rgba(236, 72, 153, 0.5));
        }

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
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); opacity: 0.6; }
          25% { transform: translateY(-15px) translateX(-8px) rotate(5deg); opacity: 0.8; }
          50% { transform: translateY(-8px) translateX(12px) rotate(-3deg); opacity: 0.7; }
          75% { transform: translateY(-20px) translateX(-5px) rotate(8deg); opacity: 0.9; }
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
          animation: trailFade 0.5s ease-out forwards;
          margin: -4px 0 0 -4px;
        }

        @keyframes trailFade {
          0% { opacity: 0.8; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.3); }
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
          0% { transform: translate(-50%, -50%) scale(0.5); opacity: 1; }
          100% { transform: translate(-50%, -50%) scale(2); opacity: 0; }
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

        .shape-1 { width: 200px; height: 200px; background: linear-gradient(45deg, #ec4899, #14b8a6); top: 10%; left: 80%; animation-delay: 0s; animation-duration: 25s; }
        .shape-2 { width: 150px; height: 150px; background: linear-gradient(135deg, #14b8a6, #10b981); top: 60%; left: 85%; animation-delay: -5s; animation-duration: 30s; }
        .shape-3 { width: 100px; height: 100px; background: linear-gradient(225deg, #10b981, #ec4899); top: 20%; left: 70%; animation-delay: -10s; animation-duration: 20s; }
        .shape-4 { width: 120px; height: 120px; background: linear-gradient(315deg, #ec4899, #14b8a6); top: 80%; left: 75%; animation-delay: -15s; animation-duration: 35s; }
        .shape-5 { width: 80px; height: 80px; background: linear-gradient(45deg, #14b8a6, #10b981); top: 40%; left: 90%; animation-delay: -8s; animation-duration: 22s; }
        .shape-6 { width: 180px; height: 180px; background: linear-gradient(135deg, #10b981, #ec4899); top: 5%; left: 60%; animation-delay: -12s; animation-duration: 28s; }
        .shape-7 { width: 90px; height: 90px; background: linear-gradient(225deg, #ec4899, #14b8a6); top: 70%; left: 95%; animation-delay: -3s; animation-duration: 24s; }
        .shape-8 { width: 110px; height: 110px; background: linear-gradient(315deg, #14b8a6, #10b981); top: 30%; left: 65%; animation-delay: -18s; animation-duration: 32s; }

        @keyframes float {
          0%, 100% { transform: translateY(0px) translateX(0px) rotate(0deg); }
          25% { transform: translateY(-20px) translateX(-10px) rotate(90deg); }
          50% { transform: translateY(-10px) translateX(10px) rotate(180deg); }
          75% { transform: translateY(-30px) translateX(-5px) rotate(270deg); }
        }

        /* Animated Grid - SAME AS HOME */
        .animated-grid {
          position: absolute;
          inset: 0;
          background-image: linear-gradient(rgba(236, 72, 153, 0.08) 1px, transparent 1px),
            linear-gradient(90deg, rgba(20, 184, 166, 0.08) 1px, transparent 1px);
          background-size: 50px 50px;
          animation: gridMove 30s linear infinite;
          z-index: 1;
        }

        @keyframes gridMove {
          0% { transform: translate(0, 0); }
          100% { transform: translate(50px, 50px); }
        }

        /* Filter Pills */
        .pill-light {
          border: none;
          background: none;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          color: #475569;
          padding: 10px 14px;
          border-radius: 999px;
          transition: color 0.15s, transform 0.15s;
        }

        .pill-light:hover {
          color: #1e293b;
          transform: translateY(-1px);
        }

        .pill-light.active {
          color: white;
          background: linear-gradient(135deg, #ec4899, #14b8a6);
          box-shadow: 0 8px 24px rgba(20, 184, 166, 0.2);
        }

        /* Card Styles */
        .neon-card-light {
          position: relative;
          border-radius: 18px;
          padding: 1px;
          background: conic-gradient(from 180deg at 50% 50%, rgba(236, 72, 153, 0.6), rgba(20, 184, 166, 0.6), rgba(16, 185, 129, 0.6), rgba(236, 72, 153, 0.6));
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }

        .neon-card-light:hover {
          box-shadow: 0 12px 26px rgba(2, 6, 23, 0.08), 0 0 40px rgba(20, 184, 166, 0.16);
          transform: translateY(-2px);
        }

        .neon-inner-light {
          border-radius: 17px;
          background: linear-gradient(180deg, rgba(255, 255, 255, 0.96), rgba(255, 255, 255, 0.94));
          border: 1px solid rgba(2, 6, 23, 0.06);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset, 0 10px 20px rgba(2, 6, 23, 0.05);
          transform-style: preserve-3d;
        }

        .card-overlay-light {
          position: absolute;
          inset: 0;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          padding: 18px;
          text-align: center;
          opacity: 0;
          gap: 6px;
          transition: opacity 0.25s ease, transform 0.25s ease;
          transform: scale(0.98);
          background: radial-gradient(60% 60% at 50% 50%, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.75));
        }

        .neon-card-light:hover .card-overlay-light {
          opacity: 1;
          transform: scale(1);
        }

        .is-certificate img {
          transition: opacity 0.25s ease, transform 0.25s ease;
        }

        .neon-card-light:hover .is-certificate img {
          opacity: 0;
          transform: scale(1.02);
        }

        .desc-light {
          display: none;
          font-size: 0.85rem;
          margin-top: 6px;
        }

        @media (min-width: 768px) {
          .neon-card-light:hover .desc-light {
            display: block;
          }
        }

        /* Masonry Animation */
        .masonry-item {
          opacity: 0;
          transform: translate(var(--tx, 0), var(--ty, 25vh)) scale(0.96);
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1);
          transition-delay: calc(var(--i, 0) * 60ms);
          will-change: transform, opacity;
        }

        .masonry-item.enter {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }

        /* 🎉 WOW CREATIVE TAB STYLES */
        .creative-tab-wrapper {
          position: relative;
          width: 100%;
          max-width: 900px;
          margin: 0 auto;
          padding: 0 1rem;
        }

        .creative-tabs {
          display: flex;
          gap: 1rem;
          justify-content: center;
          flex-wrap: wrap;
        }

        .creative-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 0.75rem;
          padding: 1.25rem 2rem;
          border-radius: 20px;
          background: rgba(255, 255, 255, 0.8);
          backdrop-filter: blur(10px);
          border: 2px solid rgba(2, 6, 23, 0.06);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          cursor: pointer;
          overflow: hidden;
        }

        .creative-tab::before {
          content: "";
          position: absolute;
          inset: 0;
          background: conic-gradient(from 180deg at 50% 50%, rgba(236, 72, 153, 0.6), rgba(20, 184, 166, 0.6), rgba(16, 185, 129, 0.6), rgba(236, 72, 153, 0.6));
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .creative-tab:hover::before {
          opacity: 0.15;
        }

        .creative-tab.active {
          background: linear-gradient(135deg, rgba(236, 72, 153, 0.1), rgba(20, 184, 166, 0.1));
          border-color: rgba(236, 72, 153, 0.3);
          box-shadow: 0 12px 30px rgba(236, 72, 153, 0.15), 0 0 40px rgba(20, 184, 166, 0.1);
          transform: translateY(-4px) scale(1.02);
        }

        .creative-tab:hover {
          transform: translateY(-2px) scale(1.01);
          box-shadow: 0 8px 20px rgba(2, 6, 23, 0.08);
        }

        .tab-icon-wrapper {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: linear-gradient(135deg, #ec4899, #14b8a6);
          box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3);
          transition: transform 0.3s ease;
        }

        .creative-tab:hover .tab-icon-wrapper {
          transform: rotate(10deg) scale(1.1);
        }

        .creative-tab.active .tab-icon-wrapper {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 4px 15px rgba(236, 72, 153, 0.3); }
          50% { box-shadow: 0 8px 30px rgba(236, 72, 153, 0.6); }
        }

        .tab-icon {
          color: white;
          font-size: 1.5rem;
        }

        .tab-text {
          font-size: 1.125rem;
          font-weight: 700;
          color: #1e293b;
        }

        .tab-count {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 32px;
          height: 32px;
          padding: 0 8px;
          border-radius: 999px;
          background: linear-gradient(135deg, #ec4899, #14b8a6);
          color: white;
          font-size: 0.875rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(236, 72, 153, 0.3);
        }

        .creative-nav-arrows {
          display: flex;
          gap: 0.5rem;
          justify-content: center;
          margin-top: 1.5rem;
        }

        .nav-arrow {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 48px;
          height: 48px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(2, 6, 23, 0.06);
          color: #475569;
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .nav-arrow:hover {
          background: linear-gradient(135deg, #ec4899, #14b8a6);
          color: white;
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(236, 72, 153, 0.3);
        }

        @media (max-width: 768px) {
          .creative-tab {
            flex-direction: column;
            padding: 1rem 1.5rem;
            text-align: center;
          }

          .tab-text {
            font-size: 0.95rem;
          }

          .tab-icon-wrapper {
            width: 40px;
            height: 40px;
          }

          .tab-icon {
            font-size: 1.25rem;
          }
        }
      `}</style>
    </section>
  )
}

export default Portfolio
