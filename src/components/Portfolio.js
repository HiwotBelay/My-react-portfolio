"use client"
import { useState, useEffect, useRef, useMemo } from "react"
import { FaGithub, FaExternalLinkAlt, FaPlay, FaPause } from "react-icons/fa"
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

  // Refs
  const videoRefs = useRef({})

  const certificateDescriptions = useMemo(
    () => ({
      hackathon:
        "I won the SheCodes Hackathon with an Amazing AI Recruiter project that tackled a crucial need in my country, an amazing and impactful achievement!",
      gcc: "Recognition for completing the Girls Can Code program, mastering fundamental programming concepts and developing practical coding skills.",
      web: "Certification in Web Development fundamentals, covering HTML, CSS, JavaScript and responsive design principles.",
      mern: "Certification in MERN Stack development, covering MongoDB, Express.js, React, and Node.js for full-stack applications.",
      prog: "Advanced Programming certification covering algorithms, data structures, and software design patterns.",
      ala: "African Leadership Academy recognition for leadership and entrepreneurial excellence.",
      bit: "Bit Career Training certification for professional development in software engineering.",
      new1:
        "I won 1st place at the Gig Hackathon with an amazing AI-integrated Pet Twin System—my second big hackathon win, and another proud, impactful moment!",
      new2:
        "I was recognized for my communication, planning, and leadership skills while organizing a major event at Bahir Dar University.",
      new3:
        "This highlights my active participation in my second hackathon competition, demonstrating both my technical growth and collaborative experience.",
    }),
    []
  )

  const projects = useMemo(
    () => [
      {
        id: 1,
        title: "Digital Pet Twin",
        video: petVideo,
        category: "Web Application/Website",
        description:
          "A fully interactive 3D digital pet that can 🐶 Express emotions,🎤 Talk and react to users,🌦 Show dynamic weather,🧢 Wear accessories,🧠 Remember interactions,🕹️ Even play games with you!,From day to night, sun to snow, made it ALIVE, EMOTIONAL & FUN!",
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
          "A dynamic simulation system that demonstrates behavior-driven interactions and state management through virtual agents with unique personalities. This project showcases the complexities of reactive logic and real-time user interaction in a compact, engaging interface.",
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
          "Ethio Telecom Website Clone This is a responsive, visually appealing clone of the Ethio Telecom official website, built for learning and design inspiration purposes. I recreated it using Next.js, React, and Tailwind CSS  focusing on layout structure, responsiveness, and UI/UX consistency.",
        technologies: "React, Next.js, TailwindCSS, API",
        github: "https://github.com/HiwotBelay/Cloning-Ethiotelecom-s-Website",
        demo: "#",
      },
    ],
    []
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
      if (videoRefs.current[id]) videoRefs.current[id].play()
      setPlayingVideo(id)
    }
  }

  const setVideoRef = (id, element) => {
    if (element) videoRefs.current[id] = element
  }

  // Pause videos and clear playing state on category change (speed + avoid jank)
  useEffect(() => {
    Object.values(videoRefs.current || {}).forEach((v) => v && v.pause && v.pause())
    setPlayingVideo(null)
  }, [filter])

  // 3D tilt (optimized: pointer: fine only, rAF throttled, attach listeners only for visible items)
  useEffect(() => {
    if (typeof window === "undefined") return
    const supportsFine = window.matchMedia && window.matchMedia("(pointer: fine)").matches
    if (!supportsFine) return

    const cards = document.querySelectorAll("#portfolio .tilt")
    const boundsMap = new WeakMap()
    const rafMap = new WeakMap()

    const onEnter = (el) => {
      el.style.willChange = "transform"
    }
    const onLeave = (el) => {
      el.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg) translateZ(0)"
      el.style.willChange = "auto"
      const glare = el.querySelector(".glare")
      if (glare) glare.style.opacity = "0"
    }
    const onMove = (el, e) => {
      if (rafMap.get(el)) return
      const rafId = requestAnimationFrame(() => {
        let rect = boundsMap.get(el)
        if (!rect) {
          rect = el.getBoundingClientRect()
          boundsMap.set(el, rect)
        }
        const px = (e.clientX - rect.left) / rect.width
        const py = (e.clientY - rect.top) / rect.height
        const rotX = (0.5 - py) * 10
        const rotY = (px - 0.5) * 14
        el.style.transform = `perspective(1000px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateZ(8px)`
        const glare = el.querySelector(".glare")
        if (glare) {
          const gx = (px * 100).toFixed(1)
          const gy = (py * 100).toFixed(1)
          glare.style.opacity = "1"
          glare.style.background = `radial-gradient(circle at ${gx}% ${gy}%, rgba(255,255,255,0.45), rgba(255,255,255,0))`
        }
        rafMap.set(el, null)
      })
      rafMap.set(el, rafId)
    }

    const listeners = []
    cards.forEach((el) => {
      const enter = () => onEnter(el)
      const leave = () => onLeave(el)
      const move = (e) => onMove(el, e)

      el.addEventListener("mouseenter", enter, { passive: true })
      el.addEventListener("mouseleave", leave, { passive: true })
      el.addEventListener("mousemove", move, { passive: true })

      listeners.push(() => {
        el.removeEventListener("mouseenter", enter)
        el.removeEventListener("mouseleave", leave)
        el.removeEventListener("mousemove", move)
      })
    })

    return () => {
      listeners.forEach((off) => off())
      cards.forEach((el) => {
        const id = rafMap.get(el)
        if (id) cancelAnimationFrame(id)
      })
    }
  }, [filter])

  // Entrance animation (optimized & fast) for only currently rendered items
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

    // Use a single rAF to trigger enter state (faster than IO for instant category switch)
    requestAnimationFrame(() => {
      items.forEach((el) => el.classList.add("enter"))
    })
  }, [filter])

  const showAwards = filter === "all" || filter === "design"
  const showProjects = filter === "all" || filter === "illustration"
  const showVenture = filter === "videos"

  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden py-16 md:py-20 flex flex-col items-center justify-center text-slate-900"
    >
      {/* Bright background */}
      <div className="absolute inset-0 -z-10 bg-white" aria-hidden="true" />
      <div className="aurora-light -z-10" aria-hidden="true" />
      <div className="dots -z-10" aria-hidden="true" />
      <div className="paper -z-10" aria-hidden="true" />

      {/* Heading */}
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[65%] text-center py-5 md:w-[70%] sm:w-[90%]">
          <h1
            className="wow-title text-4xl md:text-5xl font-extrabold tracking-tight uppercase mb-6 pb-6 relative"
            data-aos="fade-up"
          >
            <span className="bg-gradient-to-r from-fuchsia-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
              Experience
            </span>
            <span className="title-underline-light" />
          </h1>
          <p className="text-slate-600 leading-relaxed" data-aos="fade-up" data-aos-delay="100">
            I'm a full-stack developer with a strong passion for creating interactive and visually striking web
            applications. From front-end design to back-end development, I thrive on building projects that are not only
            functional but also user-friendly. My experience spans working with technologies like React, Node.js, and
            MongoDB, and I've had the opportunity to apply these skills in a variety of projects that challenge me to
            learn and grow. While I have gained knowledge through various courses and certifications, the real value
            comes from the hands-on experience I've gained over time. Currently, I'm focused on developing the Bit CDC
            website, which will allow me to showcase both my technical skills and my creative approach to web
            development. I'm always up for new challenges and excited to continue growing in the ever-evolving world of
            software development.
          </p>
        </div>
      </div>

      {/* Filter pills */}
      <div
        className="glass-pills-light flex w-[360px] items-center justify-between my-6 rounded-3xl px-2 shadow-[inset_0_0_0_1px_rgba(2,6,23,0.06)] md:w-[360px] sm:w-[320px]"
        data-aos="zoom-in"
      >
        <button className={filter === "all" ? "pill-light active" : "pill-light"} onClick={() => setFilter("all")}>
          All
        </button>
        <button className={filter === "design" ? "pill-light active" : "pill-light"} onClick={() => setFilter("design")}>
          Awards
        </button>
        <button
          className={filter === "illustration" ? "pill-light active" : "pill-light"}
          onClick={() => setFilter("illustration")}
        >
          Projects
        </button>
        <button className={filter === "videos" ? "pill-light active" : "pill-light"} onClick={() => setFilter("videos")}>
          Venture
        </button>
      </div>

      {/* Masonry Grid */}
      <div className="mt-8 w-[92%] max-w-7xl mx-auto columns-1 sm:columns-1 md:columns-2 lg:columns-3 gap-6">
        {/* Certificates (render only when needed for speed) */}
        {showAwards && (
          <>
            {/* Hackathon */}
            <div
              className="masonry-item inline-block w-full mb-6 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage("/img/Hackathon.jpg")}
            >
              <div className="neon-card-light group">
                <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
                  <img
                    src={
                      hackathon ||
                      "/placeholder.svg?height=220&width=400&query=hackathon-winner-certificate"
                     || "/placeholder.svg"}
                    className="w-full h-[220px] object-cover sm:h-auto"
                    alt="Hackathon Winner Certificate"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
                  <div className="card-overlay-light">
                    <h4 className="text-lg md:text-xl font-bold">Hackathon Winner Certificate</h4>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Innovation</p>
                    <p className="desc-light">{certificateDescriptions.hackathon}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* new1 */}
            <div
              className="masonry-item inline-block w-full mb-6 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage("/img/new1.jpg")}
            >
              <div className="neon-card-light group">
                <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
                  <img
                    src={new1 || "/placeholder.svg?height=240&width=400&query=gig-hackathon-winner"}
                    className="w-full h-[240px] object-cover sm:h-auto"
                    alt="Hackathon Winner Certificate"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
                  <div className="card-overlay-light">
                    <h4 className="text-lg md:text-xl font-bold">Hackathon Winner Certificate</h4>
                    <p className="text-xs uppercase tracking-wide text-slate-500">AI Driven Innovation</p>
                    <p className="desc-light">{certificateDescriptions.new1}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* new2 */}
            <div
              className="masonry-item inline-block w-full mb-6 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage("/img/new2.jpg")}
            >
              <div className="neon-card-light group">
                <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
                  <img
                    src={
                      new2 ||
                      "/placeholder.svg?height=260&width=400&query=event-organizer-recognition"
                     || "/placeholder.svg"}
                    className="w-full h-[260px] object-cover sm:h-auto"
                    alt="Event Organizer Recognition"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
                  <div className="card-overlay-light">
                    <h4 className="text-lg md:text-xl font-bold">Event Organizer Recognition</h4>
                    <p className="text-xs uppercase tracking-wide text-slate-500">organizing tech exhibition</p>
                    <p className="desc-light">{certificateDescriptions.new2}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* new3 */}
            <div
              className="masonry-item inline-block w-full mb-6 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage("/img/new3.jpg")}
            >
              <div className="neon-card-light group">
                <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
                  <img
                    src={new3 || "/placeholder.svg?height=210&width=400&query=hackathon-participation"}
                    className="w-full h-[210px] object-cover sm:h-auto"
                    alt="Participation Certificate"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
                  <div className="card-overlay-light">
                    <h4 className="text-lg md:text-xl font-bold">Participation Certificate</h4>
                    <p className="text-xs uppercase tracking-wide text-slate-500">hackathon participant</p>
                    <p className="desc-light">{certificateDescriptions.new3}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* GCC */}
            <div
              className="masonry-item inline-block w-full mb-6 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage("/img/gcc.jpg")}
            >
              <div className="neon-card-light group">
                <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
                  <img
                    src={
                      gcc || "/placeholder.svg?height=220&width=400&query=girls-can-code-certificate"
                    }
                    className="w-full h-[220px] object-contain sm:h-auto bg-white"
                    alt="Girls Can Code Certificate"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
                  <div className="card-overlay-light">
                    <h4 className="text-lg md:text-xl font-bold">Certificate 1</h4>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Girls Can Code</p>
                    <p className="desc-light">{certificateDescriptions.gcc}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Web */}
            <div
              className="masonry-item inline-block w-full mb-6 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage("/img/web.jpg")}
            >
              <div className="neon-card-light group">
                <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
                  <img
                    src={
                      web || "/placeholder.svg?height=230&width=400&query=web-development-certificate"
                    }
                    className="w-full h-[230px] object-cover sm:h-auto"
                    alt="Web Development Certificate"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
                  <div className="card-overlay-light">
                    <h4 className="text-lg md:text-xl font-bold">Certificate 2</h4>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Web Development</p>
                    <p className="desc-light">{certificateDescriptions.web}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* MERN */}
            <div
              className="masonry-item inline-block w-full mb-6 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage("/img/mern.jpg")}
            >
              <div className="neon-card-light group">
                <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
                  <img
                    src={
                      mern || "/placeholder.svg?height=215&width=400&query=mern-stack-certificate"
                    }
                    className="w-full h-[215px] object-cover sm:h-auto"
                    alt="MERN Stack Intro"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
                  <div className="card-overlay-light">
                    <h4 className="text-lg md:text-xl font-bold">Certificate 3</h4>
                    <p className="text-xs uppercase tracking-wide text-slate-500">MERN Stack Intro</p>
                    <p className="desc-light">{certificateDescriptions.mern}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Programming */}
            <div
              className="masonry-item inline-block w-full mb-6 break-inside-avoid cursor-pointer"
              onClick={() => setSelectedImage("/img/prog.jpg")}
            >
              <div className="neon-card-light group">
                <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
                  <img
                    src={prog || "/placeholder.svg?height=230&width=400&query=programming-certificate"}
                    className="w-full h-[230px] object-cover sm:h-auto"
                    alt="Programming Certificate"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
                  <div className="card-overlay-light">
                    <h4 className="text-lg md:text-xl font-bold">Certificate 4</h4>
                    <p className="text-xs uppercase tracking-wide text-slate-500">Programming</p>
                    <p className="desc-light">{certificateDescriptions.prog}</p>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}

        {/* Projects (render only when needed) */}
        {showProjects &&
          projects.map((project, idx) => (
            <div key={project.id} className="masonry-item inline-block w-full mb-6 break-inside-avoid">
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
                      title={playingVideo === project.id ? "Pause video" : "Play video"}
                    >
                      {playingVideo === project.id ? <FaPause /> : <FaPlay />}
                    </button>
                    <div className="absolute bottom-3 left-3 z-10">
                      <span className="text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-full bg-white/70 backdrop-blur border border-slate-200 shadow-[0_0_12px_rgba(2,6,23,0.06)]">
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
                          className="text-[11px] md:text-xs px-2.5 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-700 shadow-[0_0_0_1px_rgba(2,6,23,0.03)_inset]"
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
          ))}

        {/* Venture CTA (render only when needed) */}
        {showVenture && (
          <div className="masonry-item inline-block w-full mb-6 break-inside-avoid">
            <div className="neon-card-light">
              <div className="neon-inner-light relative overflow-hidden p-8 md:p-10 text-center">
                <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(60%_50%_at_50%_0%,rgba(236,72,153,0.12),transparent)]" />
                <h3 className="text-2xl md:text-3xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent">
                  For More Projects Check on my github profile
                </h3>
                <p className="mt-3 text-slate-600">Explore additional ventures, experiments, and works-in-progress.</p>
                <a
                  href="https://github.com/HiwotBelay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-semibold bg-gradient-to-r from-fuchsia-500 to-teal-500 shadow-[0_12px_30px_rgba(16,185,129,0.25)] hover:scale-[1.015] transition-transform"
                  aria-label="Open GitHub profile"
                >
                  <FaGithub /> GitHub
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[9999] bg-black/50 backdrop-blur-sm cursor-pointer"
            onClick={closeLightbox}
          >
            <div className="w-full h-full flex items-center justify-center p-4">
              <img
                src={selectedImage || "/placeholder.svg?height=800&width=1200&query=certificate-full"}
                className="max-w-[92%] max-h-[90%] object-contain object-center rounded-xl shadow-[0_20px_60px_rgba(0,0,0,0.25)] border border-slate-200 bg-white"
                alt="certificate"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        )}
      </div>

      {/* Bottom CTA */}
      <div
        className="w-[90%] max-w-4xl flex flex-wrap items-center gap-3 justify-center mt-10 py-6 px-6 rounded-xl border border-slate-200 bg-white/80 backdrop-blur shadow-[0_10px_30px_rgba(2,6,23,0.06)]"
        data-aos="zoom-in-up"
      >
        <h3 className="text-slate-700">For More Projects Check on my github profile</h3>
        <a
          href="https://github.com/HiwotBelay"
          className="cursor-pointer text-base md:text-lg py-2 px-5 rounded-full bg-gradient-to-r from-fuchsia-500 to-teal-500 text-white font-semibold shadow-[0_0_28px_rgba(16,185,129,0.25)] hover:scale-[1.02] transition-transform"
          aria-label="Open GitHub profile"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inline-flex items-center gap-2"><FaGithub /> GitHub</span>
        </a>
      </div>

      {/* Scoped styles (unchanged visuals, tuned for speed) */}
      <style>{`
        #portfolio .title-underline-light {
          position: absolute; left: 50%; bottom: 0; transform: translateX(-50%);
          width: 180px; height: 3px; background: linear-gradient(90deg, transparent, rgba(16,185,129,0.6), rgba(236,72,153,0.6), transparent);
          border-radius: 999px;
        }

        #portfolio .aurora-light {
          position: absolute; inset: -15%;
          background:
            radial-gradient(60% 40% at 20% 30%, rgba(236,72,153,0.10), transparent 60%),
            radial-gradient(50% 35% at 80% 20%, rgba(20,184,166,0.10), transparent 60%),
            radial-gradient(45% 30% at 60% 70%, rgba(34,197,94,0.10), transparent 60%),
            radial-gradient(60% 40% at 20% 80%, rgba(59,130,246,0.06), transparent 60%);
          filter: blur(30px) saturate(110%); animation: auroraFloatLight 18s ease-in-out infinite alternate;
        }
        @keyframes auroraFloatLight { 0% { transform: translateY(-1.5%) translateX(-1%) scale(1); } 100% { transform: translateY(1.5%) translateX(1%) scale(1.03); } }

        #portfolio .dots { position: absolute; inset: 0; background-image: radial-gradient(rgba(15,23,42,0.06) 1px, transparent 1px); background-size: 16px 16px; mask-image: radial-gradient(closest-side, rgba(0,0,0,0.4), transparent 85%); }
        #portfolio .paper { position: absolute; inset: 0; pointer-events: none; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140' viewBox='0 0 140 140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='2' stitchTiles='stitch'/%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.015'/%3E%3C/svg%3E"); mix-blend-mode: multiply; }

        #portfolio .glass-pills-light { background: rgba(255,255,255,0.8); backdrop-filter: blur(10px); }
        #portfolio .pill-light { border: none; background: none; font-size: .95rem; font-weight: 700; letter-spacing: .2px; cursor: pointer; color: rgba(15,23,42,0.7); padding: 10px 14px; border-radius: 999px; transition: color .15s, transform .15s; }
        #portfolio .pill-light:hover { color: rgba(15,23,42,0.95); transform: translateY(-1px); }
        #portfolio .pill-light.active { color: #fff; background: linear-gradient(135deg, #ec4899 0%, #14b8a6 100%); box-shadow: 0 8px 24px rgba(20,184,166,0.2); }

        #portfolio .neon-card-light { position: relative; border-radius: 18px; padding: 1px; background: conic-gradient(from 180deg at 50% 50%, rgba(236,72,153,0.6), rgba(20,184,166,0.6), rgba(16,185,129,0.6), rgba(236,72,153,0.6)); transition: box-shadow .25s ease, transform .25s ease; }
        #portfolio .neon-card-light:hover { animation-play-state: running; box-shadow: 0 12px 26px rgba(2,6,23,0.08), 0 0 40px rgba(20,184,166,0.16); transform: translateY(-2px); }
        @keyframes spin { to { transform: rotate(1turn); } }

        #portfolio .neon-inner-light { border-radius: 17px; background: linear-gradient(180deg, rgba(255,255,255,0.96), rgba(255,255,255,0.94)); border: 1px solid rgba(2,6,23,0.06); box-shadow: 0 1px 0 rgba(255,255,255,0.8) inset, 0 10px 20px rgba(2,6,23,0.05); transform-style: preserve-3d; }

        #portfolio .card-overlay-light { position: absolute; inset: 0; display: flex; flex-direction: column; justify-content: center; align-items: center; padding: 18px; text-align: center; opacity: 0; gap: 6px; color: #0f172a; transition: opacity .25s ease, transform .25s ease; transform: translateZ(30px) scale(0.98); background: radial-gradient(60% 60% at 50% 50%, rgba(255,255,255,0.4), rgba(255,255,255,0.75)); }
        #portfolio .neon-card-light:hover .card-overlay-light, #portfolio .neon-card-light:focus-within .card-overlay-light, #portfolio .group:hover .card-overlay-light { opacity: 1; transform: translateZ(30px) scale(1); }

        /* Hide certificate image on hover to reveal overlay only */
        #portfolio .is-certificate img { transition: opacity .25s ease, transform .25s ease, filter .25s ease; }
        #portfolio .neon-card-light:hover .is-certificate img, #portfolio .group:hover .is-certificate img { opacity: 0; transform: scale(1.02); filter: blur(2px); }

        /* Show longer desc on larger screens only on hover */
        #portfolio .card-overlay-light .desc-light { display: none; font-size: .85rem; color: rgba(15,23,42,0.8); margin-top: 6px; }
        @media (min-width: 768px) { #portfolio .group:hover .desc-light { display: block; } }

        /* Tilt target */
        #portfolio .tilt { transform: perspective(1000px) translateZ(0); transition: transform .14s ease; }

          /* Masonry entrance animation */
        #portfolio .masonry-item {
          opacity: 0;
          transform: translate(var(--tx, 0), var(--ty, 25vh)) scale(0.96);
          transition:
            transform .9s cubic-bezier(.22,1,.36,1),
            opacity .9s cubic-bezier(.22,1,.36,1);
          transition-delay: calc(var(--i, 0) * 60ms);
          will-change: transform, opacity;
        }
        #portfolio .masonry-item.enter {
          opacity: 1;
          transform: translate(0, 0) scale(1);
        }
      `}</style>
    </section>
  )
}

export default Portfolio