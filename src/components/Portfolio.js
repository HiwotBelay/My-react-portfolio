"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import {
  FaGithub,
  FaExternalLinkAlt,
  FaPlay,
  FaPause,
  FaAward,
  FaCode,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

// Your assets
import gcc from "./img/gcc.jpg";
import web from "./img/web.jpg";
import mern from "./img/mern.jpg";
import prog from "./img/prog.jpg";
import hackathon from "./img/Hackathon.jpg";
import new1 from "./img/new1.jpg";
import new2 from "./img/new2.jpg";
import new3 from "./img/new3.jpg";
import helder from "./img/helder.jpg";
import kuraz from "./img/kuraz.jpg";
import code from "./img/code.jpg";
import ethioware from "./img/ethioware.png";

import petVideo from "./img/pet.mp4";
import ecommerceVideo from "./img/ecommerce.mp4";
import tenderVideo from "./img/tender.mp4";
import dentalVideo from "./img/dental.mp4";
import chatappVideo from "./img/chatapp.mp4";
import behavVideo from "./img/behav.mp4";
import ethiotel from "./img/ethiotel.mp4";

const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [playingVideo, setPlayingVideo] = useState(null);
  const [allViewTab, setAllViewTab] = useState("awards"); // NEW: for "all" filter creative view
  const [experienceTab, setExperienceTab] = useState("frontend"); // NEW: for experience tabs
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [mouseTrail, setMouseTrail] = useState([]);
  const [projectImageIndex, setProjectImageIndex] = useState({});

  const videoRefs = useRef({});
  const VIDEO_SPEED = 2;

  // Marquee (awards) refs / state
  const awardsRef = useRef(null);
  const [marqueePaused, setMarqueePaused] = useState(false);
  const MARQUEE_SPEED = 40; // px per second (adjust: larger = faster)

  // Mouse tracking - SAME AS HOME
  useEffect(() => {
    const handleMouseMove = (e) => {
      const newPosition = {
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: -(e.clientY / window.innerHeight) * 2 + 1,
        clientX: e.clientX,
        clientY: e.clientY,
        timestamp: Date.now(),
      };

      setMousePosition(newPosition);

      setMouseTrail((prev) => {
        const newTrail = [...prev, newPosition].slice(-8);
        return newTrail.filter((pos) => Date.now() - pos.timestamp < 500);
      });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const videos = Array.from(document.querySelectorAll("#portfolio video"));
    if (!videos.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const v = entry.target;
          if (entry.isIntersecting) {
            if (v.getAttribute("data-preloaded")) return;
            try {
              v.setAttribute("preload", "auto");
              v.load();
              v.setAttribute("data-preloaded", "1");
            } catch (e) {}
          } else {
            if (!v.getAttribute("data-preloaded")) return;
            try {
              v.setAttribute("preload", "metadata");
            } catch (e) {}
          }
        });
      },
      {
        root: null,
        rootMargin: "400px",
        threshold: 0.05,
      }
    );

    videos.forEach((v) => io.observe(v));
    return () => io.disconnect();
  }, [filter]);

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
      ethioware:
        "Recognition for successfully completing the Fullstack Development 3 Month internship program, I was my group team lead too and me as an individual and my team got 2 recognitions on the best top 10 performers. Had practical skills in software development and industry best practices.",
    }),
    []
  );

  const projects = useMemo(
    () => [
      {
        id: 0,
        title: "AI Recruitment System",
        subtitle: "Hackathon Winning Project",
        images: ["/a1.png", "/a2.png", "/a3.png"],
        category: "AI Solution",
        description:
          "An innovative AI-powered recruitment system designed to eliminate bias in hiring processes. Features an intelligent knowledge base that matches candidates based on skills and qualifications, ensuring fair and unbiased candidate evaluation.",
        technologies:
          "Next.js, TypeScript, AI/ML Integration, Prisma, PostgreSQL, Tailwind CSS",
        github: "https://github.com/hosanna1616/Airecruiter",
        demo: "#",
      },
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
        technologies:
          "Next.js, React, Node.js, Express, Firebase Realtime Database, PostgreSQL, Prisma",
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
        technologies:
          "Frontend: React, Tailwind CSS, Node.js, Express.js, MongoDB,JWT, OAuth",
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
        github:
          "https://github.com/HiwotBelay/Behavior-Driven-Interaction-System",
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
    []
  );

  const certificates = useMemo(
    () => [
      {
        img: hackathon,
        title: "Hackathon Winner",
        subtitle: "Innovation",
        desc: certificateDescriptions.hackathon,
      },
      {
        img: new1,
        title: "Hackathon Winner",
        subtitle: "AI Driven",
        desc: certificateDescriptions.new1,
      },
      {
        img: helder,
        title: "Paid Internship",
        subtitle: "Front-End Dev",
        desc: certificateDescriptions.helder,
      },
      {
        img: new2,
        title: "Event Organizer",
        subtitle: "Tech Exhibition",
        desc: certificateDescriptions.new2,
      },
      {
        img: ethioware,
        title: "Fullstack Development",
        subtitle: "Internship Program",
        desc: certificateDescriptions.ethioware,
      },
      {
        img: kuraz,
        title: "Backend Internship",
        subtitle: "PHP/MySQL",
        desc: certificateDescriptions.kuraz,
      },
      {
        img: new3,
        title: "Participation",
        subtitle: "Hackathon",
        desc: certificateDescriptions.new3,
      },
      {
        img: web,
        title: "Web Development",
        subtitle: "HTML/CSS/JS",
        desc: certificateDescriptions.web,
      },
      {
        img: gcc,
        title: "Girls Can Code",
        subtitle: "Programming",
        desc: certificateDescriptions.gcc,
      },
      {
        img: mern,
        title: "MERN Stack",
        subtitle: "Full-Stack",
        desc: certificateDescriptions.mern,
      },
      {
        img: prog,
        title: "Programming",
        subtitle: "Algorithms",
        desc: certificateDescriptions.prog,
      },
      {
        img: code,
        title: "DevQuest 2025",
        subtitle: "Problem Solving",
        desc: certificateDescriptions.code,
      },
    ],
    [certificateDescriptions]
  );

  useEffect(() => {
    AOS.init();
  }, []);

  const closeLightbox = () => setSelectedImage(null);

  const handleVideoPlay = (id) => {
    if (playingVideo && playingVideo !== id) {
      if (videoRefs.current[playingVideo])
        videoRefs.current[playingVideo].pause();
    }
    if (playingVideo === id) {
      if (videoRefs.current[id]) videoRefs.current[id].pause();
      setPlayingVideo(null);
    } else {
      if (videoRefs.current[id]) {
        try {
          videoRefs.current[id].playbackRate = VIDEO_SPEED;
        } catch (e) {}
        videoRefs.current[id].play();
      }
      setPlayingVideo(id);
    }
  };

  const setVideoRef = (id, element) => {
    if (element) videoRefs.current[id] = element;
  };

  useEffect(() => {
    Object.values(videoRefs.current || {}).forEach(
      (v) => v && v.pause && v.pause()
    );
    setPlayingVideo(null);
  }, [filter]);

  useEffect(() => {
    const items = Array.from(
      document.querySelectorAll("#portfolio .masonry-item")
    );
    const directions = ["left", "right", "top", "bottom"];

    items.forEach((el, i) => {
      el.style.setProperty("--i", String(i));
      const dir = directions[i % directions.length];
      if (dir === "left") {
        el.style.setProperty("--tx", "-35vw");
        el.style.setProperty("--ty", "8vh");
      } else if (dir === "right") {
        el.style.setProperty("--tx", "35vw");
        el.style.setProperty("--ty", "6vh");
      } else if (dir === "top") {
        el.style.setProperty("--tx", "0vw");
        el.style.setProperty("--ty", "-30vh");
      } else if (dir === "bottom") {
        el.style.setProperty("--tx", "0vw");
        el.style.setProperty("--ty", "28vh");
      }
      el.classList.remove("enter");
    });

    requestAnimationFrame(() => {
      items.forEach((el) => el.classList.add("enter"));
    });
  }, [filter, allViewTab]);

  const showAwards = filter === "design";
  const showProjects = filter === "illustration";
  const showVenture = filter === "videos";
  const showAll = filter === "all";

  const renderCertificateCard = (cert, index) => (
    <div
      key={index}
      className="masonry-item"
      onClick={() => setSelectedImage(cert.img)}
    >
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
            <p className="text-xs uppercase tracking-wide text-slate-500">
              {cert.subtitle}
            </p>
            <p className="desc-light">{cert.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );

  const renderProjectCard = (project) => {
    const currentImageIndex = projectImageIndex[project.id] || 0;
    const hasImages = project.images && project.images.length > 0;
    const currentImage = hasImages ? project.images[currentImageIndex] : null;
    const isHackathon = project.id === 0;

    const handleNextImage = (e) => {
      e.stopPropagation();
      if (hasImages && project.images.length > 1) {
        setProjectImageIndex((prev) => ({
          ...prev,
          [project.id]: (currentImageIndex + 1) % project.images.length,
        }));
      }
    };

    const handlePrevImage = (e) => {
      e.stopPropagation();
      if (hasImages && project.images.length > 1) {
        setProjectImageIndex((prev) => ({
          ...prev,
          [project.id]:
            currentImageIndex === 0
              ? project.images.length - 1
              : currentImageIndex - 1,
        }));
      }
    };

    return (
      <div
        key={project.id}
        className={`masonry-item ${isHackathon ? "hackathon-featured" : ""}`}
      >
        <div
          className={`neon-card-light group ${
            isHackathon ? "hackathon-card" : ""
          }`}
        >
          <div className="neon-inner-light tilt relative overflow-hidden">
            <div className="w-full bg-white relative overflow-hidden">
              {hasImages ? (
                <>
                  <img
                    src={currentImage}
                    alt={`${project.title} - Image ${currentImageIndex + 1}`}
                    className="w-full h-[260px] object-cover cursor-pointer"
                    onClick={() => setSelectedImage(currentImage)}
                  />
                  {project.images.length > 1 && (
                    <>
                      <button
                        className="absolute top-1/2 left-2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white bg-[#8B0000]/80 hover:bg-[#8B0000] shadow-lg transition-all z-10"
                        onClick={handlePrevImage}
                        aria-label="Previous image"
                      >
                        <FaChevronLeft className="text-sm" />
                      </button>
                      <button
                        className="absolute top-1/2 right-2 -translate-y-1/2 w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center text-white bg-[#8B0000]/80 hover:bg-[#8B0000] shadow-lg transition-all z-10"
                        onClick={handleNextImage}
                        aria-label="Next image"
                      >
                        <FaChevronRight className="text-sm" />
                      </button>
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                        {project.images.map((_, idx) => (
                          <div
                            key={idx}
                            className={`w-1.5 h-1.5 rounded-full transition-all ${
                              idx === currentImageIndex
                                ? "bg-[#8B0000] w-4"
                                : "bg-white/60"
                            }`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </>
              ) : (
                <>
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
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 md:w-14 md:h-14 rounded-full flex items-center justify-center text-white bg-[#8B0000] shadow-[0_0_30px_rgba(139,0,0,0.4)] group-hover:scale-105 transition-all"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleVideoPlay(project.id);
                    }}
                    aria-label={
                      playingVideo === project.id ? "Pause video" : "Play video"
                    }
                  >
                    {playingVideo === project.id ? <FaPause /> : <FaPlay />}
                  </button>
                </>
              )}
              <div className="absolute bottom-3 left-3 z-10">
                <span className="text-[11px] md:text-xs font-medium px-2.5 py-1 rounded-full bg-white/70 backdrop-blur border border-slate-200">
                  {project.category}
                </span>
              </div>
            </div>

            <div className="p-5 md:p-6">
              {project.subtitle && (
                <p className="text-xs uppercase tracking-wide text-[#8B0000] font-semibold mb-1">
                  {project.subtitle}
                </p>
              )}
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                {project.title}
              </h3>
              <p className="text-slate-600 text-sm mb-4 line-clamp-3">
                {project.description}
              </p>

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
                {project.demo !== "#" && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-fuchsia-600 hover:text-fuchsia-800 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <section
      id="portfolio"
      className="relative w-full overflow-hidden py-16 md:py-20"
    >
      {/* Simple Background - Matching Home & Contact */}
      <div className="absolute inset-0 -z-10 bg-[#F5F5F0]" />

      {/* Main Content */}
      <div className="relative z-20 w-full flex flex-col items-center justify-center px-4">
        {/* Heading */}
        <div className="w-full md:w-[65%] text-center py-5">
          <h1 className="text-4xl font-bold uppercase mb-5 pb-5 relative">
            <span style={{ color: "#8B0000" }}>Experience</span>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[120px] h-[1px] bg-gray-300"></div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[40px] h-[3px] bg-[#8B0000]"></div>
          </h1>
          <p
            className="text-slate-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            I'm a full-stack developer with a strong passion for creating
            interactive and visually striking web applications. From front-end
            design to back-end development, I thrive on building projects that
            are not only functional but also user-friendly. My experience spans
            working with technologies like React, Node.js, and MongoDB, and I've
            had the opportunity to apply these skills in a variety of projects
            that challenge me to learn and grow.
          </p>
        </div>

        {/* Work Experience Section - Tabbed Interface */}
        <div className="experience-tabbed-container w-full max-w-4xl mx-auto my-12 px-4">
          {/* Experience Tabs */}
          <div className="experience-tabs-wrapper mb-8" data-aos="fade-up">
            <div className="experience-tabs">
              <button
                className={`experience-tab ${
                  experienceTab === "frontend" ? "active" : ""
                }`}
                onClick={() => setExperienceTab("frontend")}
              >
                <span className="tab-label">Frontend Experience</span>
                <span className="tab-badge">3</span>
              </button>
              <button
                className={`experience-tab ${
                  experienceTab === "fullstack" ? "active" : ""
                }`}
                onClick={() => setExperienceTab("fullstack")}
              >
                <span className="tab-label">
                  Backend and Fullstack Experience
                </span>
                <span className="tab-badge">3</span>
              </button>
            </div>
          </div>

          {/* Experience Cards - Filtered by Tab */}
          <div className="experience-cards-container">
            {/* Frontend Experiences */}
            {experienceTab === "frontend" && (
              <div className="experience-frontend-grid">
                <div className="experience-frontend-column">
                  {/* BrainBite */}
                  <div
                    className="experience-clean-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                  >
                    <h3 className="company-name">
                      <a
                        href="https://www.brainbite.ai/en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        BrainBite
                        <FaExternalLinkAlt className="company-link-icon" />
                      </a>
                    </h3>
                    <p className="role-title">Frontend Developer Intern</p>
                    <p className="experience-works">
                      UI/UX and JavaScript & TypeScript focused frontend
                      development
                    </p>
                  </div>

                  {/* Bahir Dar University Career Center */}
                  <div
                    className="experience-clean-card experience-bdu-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="300"
                  >
                    <h3 className="company-name">
                      <a
                        href="https://www.bdu.edu.et/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        Bahir Dar University Career Center
                        <FaExternalLinkAlt className="company-link-icon" />
                      </a>
                    </h3>
                    <p className="role-title">
                      Frontend team lead, Website developer, Event organizer
                    </p>
                    <p className="experience-works">
                      Leading frontend development team and managing university
                      career center website projects
                    </p>
                    <div className="experience-images">
                      <div
                        className="experience-image-wrapper"
                        onClick={() => setSelectedImage("/bit1.jpg")}
                      >
                        <img
                          src="/bit1.jpg"
                          alt="Bahir Dar University Career Center Experience 1"
                          className="experience-image"
                        />
                      </div>
                      <div
                        className="experience-image-wrapper"
                        onClick={() => setSelectedImage("/bit2.jpg")}
                      >
                        <img
                          src="/bit2.jpg"
                          alt="Bahir Dar University Career Center Experience 2"
                          className="experience-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="experience-frontend-column">
                  {/* Helder Technologies */}
                  <div
                    className="experience-clean-card"
                    data-aos="fade-up"
                    data-aos-duration="600"
                    data-aos-delay="200"
                  >
                    <h3 className="company-name">
                      <a
                        href="https://heldertechnologies.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="company-link"
                      >
                        Helder Technologies
                        <FaExternalLinkAlt className="company-link-icon" />
                      </a>
                    </h3>
                    <p className="role-title">Frontend Developer</p>
                    <p className="experience-works">
                      Real Client Projects - UI/UX Design - Development &
                      Integration
                    </p>
                    <div className="experience-images">
                      <div
                        className="experience-image-wrapper"
                        onClick={() => setSelectedImage("/helder1.png")}
                      >
                        <img
                          src="/helder1.png"
                          alt="Helder Technologies Experience 1"
                          className="experience-image"
                        />
                      </div>
                      <div
                        className="experience-image-wrapper"
                        onClick={() => setSelectedImage("/helder2.png")}
                      >
                        <img
                          src="/helder2.png"
                          alt="Helder Technologies Experience 2"
                          className="experience-image"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Backend and Fullstack Experiences */}
            {experienceTab === "fullstack" && (
              <div className="experience-fullstack-grid">
                {/* Ethioware */}
                <div
                  className="experience-clean-card"
                  data-aos="fade-up"
                  data-aos-duration="600"
                >
                  <h3 className="company-name">
                    <a
                      href="https://ethioware.org/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      Ethioware - EdTech Initiative
                      <FaExternalLinkAlt className="company-link-icon" />
                    </a>
                  </h3>
                  <p className="role-title">
                    Fullstack Developer Intern and Team Lead
                  </p>
                  <p className="experience-works">
                    3 Months Internship Program - Team Lead - Top 10 Performers
                    Recognition
                  </p>
                  <div className="experience-images">
                    <div
                      className="experience-image-wrapper"
                      onClick={() => setSelectedImage("/ethioware1.png")}
                    >
                      <img
                        src="/ethioware1.png"
                        alt="Ethioware Experience 1"
                        className="experience-image"
                      />
                    </div>
                    <div
                      className="experience-image-wrapper"
                      onClick={() => setSelectedImage("/ethioware2.png")}
                    >
                      <img
                        src="/ethioware2.png"
                        alt="Ethioware Experience 2"
                        className="experience-image"
                      />
                    </div>
                  </div>
                </div>

                {/* SewAsset */}
                <div
                  className="experience-clean-card"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="200"
                >
                  <h3 className="company-name">
                    <a
                      href="https://www.sewasset.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      Sew Asset
                      <FaExternalLinkAlt className="company-link-icon" />
                    </a>
                  </h3>
                  <p className="role-title">
                    From UI/UX Designer to Full System Development
                  </p>
                  <p className="experience-works">
                    End-to-end development from design to full system
                    implementation and deployment
                  </p>
                  <div className="experience-images">
                    <div
                      className="experience-image-wrapper"
                      onClick={() => setSelectedImage("/sew1.png")}
                    >
                      <img
                        src="/sew1.png"
                        alt="Sew Asset Experience 1"
                        className="experience-image"
                      />
                    </div>
                    <div
                      className="experience-image-wrapper"
                      onClick={() => setSelectedImage("/sew2.png")}
                    >
                      <img
                        src="/sew2.png"
                        alt="Sew Asset Experience 2"
                        className="experience-image"
                      />
                    </div>
                  </div>
                </div>

                {/* Azemera Farms */}
                <div
                  className="experience-clean-card"
                  data-aos="fade-up"
                  data-aos-duration="600"
                  data-aos-delay="300"
                >
                  <h3 className="company-name">
                    <a
                      href="https://azemerafarms.com/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="company-link"
                    >
                      Azemera Farms
                      <FaExternalLinkAlt className="company-link-icon" />
                    </a>
                  </h3>
                  <p className="role-title">
                    Fullstack Developer, Agri E-learning system
                  </p>
                  <p className="experience-works">
                    Developing comprehensive e-learning platform for
                    agricultural education and training
                  </p>
                  <div className="experience-images">
                    <div
                      className="experience-image-wrapper"
                      onClick={() => setSelectedImage("/azmera1.png")}
                    >
                      <img
                        src="/azmera1.png"
                        alt="Azemera Farms Experience 1"
                        className="experience-image"
                      />
                    </div>
                    <div
                      className="experience-image-wrapper"
                      onClick={() => setSelectedImage("/azmera2.png")}
                    >
                      <img
                        src="/azmera2.png"
                        alt="Azemera Farms Experience 2"
                        className="experience-image"
                      />
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Filter Pills */}
        <div
          className="flex w-[360px] items-center justify-between my-6 rounded-3xl px-2 bg-white/80 backdrop-blur-md shadow-[inset_0_0_0_1px_rgba(2,6,23,0.06)]"
          data-aos="zoom-in"
        >
          <button
            className={`pill-light ${filter === "all" ? "active" : ""}`}
            onClick={() => setFilter("all")}
          >
            All
          </button>
          <button
            className={`pill-light ${filter === "design" ? "active" : ""}`}
            onClick={() => setFilter("design")}
          >
            Awards
          </button>
          <button
            className={`pill-light ${
              filter === "illustration" ? "active" : ""
            }`}
            onClick={() => setFilter("illustration")}
          >
            Projects
          </button>
          <button
            className={`pill-light ${filter === "videos" ? "active" : ""}`}
            onClick={() => setFilter("videos")}
          >
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
                  className={`creative-tab ${
                    allViewTab === "awards" ? "active" : ""
                  }`}
                  onClick={() => setAllViewTab("awards")}
                >
                  <div className="tab-icon-wrapper">
                    <FaAward className="tab-icon" />
                  </div>
                  <span className="tab-text">Awards & Certificates</span>
                  <span className="tab-count">{certificates.length}</span>
                </button>

                <button
                  className={`creative-tab ${
                    allViewTab === "projects" ? "active" : ""
                  }`}
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
                  onClick={() =>
                    setAllViewTab(
                      allViewTab === "awards" ? "projects" : "awards"
                    )
                  }
                  aria-label="Previous"
                >
                  <FaChevronLeft />
                </button>
                <button
                  className="nav-arrow"
                  onClick={() =>
                    setAllViewTab(
                      allViewTab === "awards" ? "projects" : "awards"
                    )
                  }
                  aria-label="Next"
                >
                  <FaChevronRight />
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Certificates Horizontal Carousel - Only for Awards */}
        {(showAwards || (showAll && allViewTab === "awards")) && (
          <div className="certificates-carousel-container w-full mt-8">
            <div
              className="certificates-carousel-track"
              onMouseEnter={() => setMarqueePaused(true)}
              onMouseLeave={() => setMarqueePaused(false)}
            >
              {/* Duplicate certificates for seamless loop */}
              {[...certificates, ...certificates].map((cert, i) => (
                <div key={`cert-${i}`} className="certificate-carousel-item">
                  <div
                    className="neon-card-light group"
                    onClick={() => setSelectedImage(cert.img)}
                  >
                    <div className="neon-inner-light tilt is-certificate relative overflow-hidden">
                      <img
                        src={cert.img || "/placeholder.svg"}
                        className="w-full h-auto object-contain"
                        alt={cert.title}
                        loading="lazy"
                        decoding="async"
                      />
                      <div className="glare pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300" />
                      <div className="card-overlay-light">
                        <h4 className="text-lg md:text-xl font-bold">
                          {cert.title}
                        </h4>
                        <p className="text-xs uppercase tracking-wide text-slate-500">
                          {cert.subtitle}
                        </p>
                        <p className="desc-light">{cert.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Projects Grid */}
        <div className="mt-8 w-[92%] max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-auto">
          {showAll &&
            allViewTab === "projects" &&
            projects.map((project) => renderProjectCard(project))}

          {showProjects &&
            projects.map((project) => renderProjectCard(project))}

          {showVenture && (
            <div className="masonry-item col-span-full">
              <div className="neon-card-light">
                <div className="neon-inner-light relative overflow-hidden p-8 md:p-10 text-center">
                  <h3
                    className="text-2xl md:text-3xl font-extrabold"
                    style={{ color: "#8B0000" }}
                  >
                    For More Projects Check on my github profile
                  </h3>
                  <p className="mt-3 text-slate-600">
                    Explore additional ventures, experiments, and
                    works-in-progress.
                  </p>
                  <a
                    href="https://github.com/HiwotBelay"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-full text-white font-semibold bg-[#8B0000] shadow-[0_12px_30px_rgba(139,0,0,0.3)] hover:scale-[1.015] transition-transform"
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
        <h3 className="text-slate-700 text-lg">
          For More Projects Check on my github profile
        </h3>
        <a
          href="https://github.com/HiwotBelay"
          className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#8B0000] text-white font-semibold hover:scale-[1.02] transition-transform"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub /> GitHub
        </a>
      </div>

      {/* Styles - MATCHING HOME + NEW CREATIVE TABS */}
      <style jsx>{`
        /* Experience Tabbed Interface */
        .experience-tabbed-container {
          position: relative;
          padding: 20px 0;
        }

        .experience-tabs-wrapper {
          display: flex;
          justify-content: center;
          margin-bottom: 32px;
        }

        .experience-tabs {
          display: flex;
          gap: 12px;
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          padding: 6px;
          border-radius: 16px;
          box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08),
            0 0 0 1px rgba(139, 0, 0, 0.1);
        }

        .experience-tab {
          position: relative;
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 24px;
          border: none;
          background: transparent;
          border-radius: 12px;
          cursor: pointer;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          font-weight: 600;
          font-size: 15px;
          color: #64748b;
        }

        .experience-tab:hover {
          color: #1e293b;
          background: rgba(139, 0, 0, 0.05);
        }

        .experience-tab.active {
          color: white;
          background: #8b0000;
          box-shadow: 0 8px 24px rgba(139, 0, 0, 0.3),
            0 0 40px rgba(17, 24, 39, 0.2);
          transform: translateY(-2px);
        }

        .tab-label {
          white-space: nowrap;
        }

        .tab-badge {
          display: flex;
          align-items: center;
          justify-content: center;
          min-width: 24px;
          height: 24px;
          padding: 0 8px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 700;
          background: rgba(255, 255, 255, 0.2);
          color: inherit;
        }

        .experience-tab.active .tab-badge {
          background: rgba(255, 255, 255, 0.3);
        }

        .experience-cards-container {
          min-height: 200px;
        }

        .experience-frontend-grid {
          display: flex;
          gap: 24px;
        }

        .experience-frontend-column {
          flex: 1;
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .experience-frontend-column .experience-clean-card {
          margin-bottom: 0;
          margin-top: 0;
          height: fit-content;
        }

        .experience-frontend-column .experience-clean-card:not(:first-child) {
          margin-top: 0;
        }

        .experience-fullstack-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          align-items: start;
        }

        .experience-fullstack-grid .experience-clean-card {
          margin-bottom: 0;
          height: fit-content;
        }

        /* Clean Experience Layout */
        .experience-clean-container {
          position: relative;
          padding: 20px 0;
        }

        .experience-clean-card {
          background: rgba(255, 255, 255, 0.95);
          border-radius: 12px;
          padding: 24px;
          margin-bottom: 24px;
          border-left: 4px solid #8b0000;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
          transition: all 0.3s ease;
        }

        .experience-clean-card:hover {
          transform: translateX(8px);
          box-shadow: 0 4px 16px rgba(139, 0, 0, 0.15);
          border-left-width: 6px;
        }

        .experience-clean-card:last-child {
          margin-bottom: 0;
        }

        .company-name {
          font-size: 20px;
          font-weight: 700;
          color: #8b0000;
          margin: 0 0 8px 0;
        }

        .company-link {
          color: #8b0000;
          text-decoration: none;
          transition: all 0.3s ease;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }

        .company-link:hover {
          color: #111827;
          text-decoration: underline;
          transform: translateX(4px);
        }

        .company-link-icon {
          width: 14px;
          height: 14px;
          opacity: 0.7;
          transition: all 0.3s ease;
        }

        .company-link:hover .company-link-icon {
          opacity: 1;
          transform: translate(2px, -2px);
        }

        .role-title {
          font-size: 15px;
          font-weight: 600;
          color: #111827;
          margin-bottom: 10px;
        }

        .experience-works {
          font-size: 14px;
          line-height: 1.6;
          color: #4b5563;
          margin-bottom: 18px;
        }

        .experience-clean-card:not(:has(.experience-images)) .experience-works {
          margin-bottom: 0;
        }

        .experience-images {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-top: 16px;
        }

        .experience-image-wrapper {
          width: 100%;
          height: 150px;
          border-radius: 8px;
          overflow: hidden;
          border: 2px solid rgba(139, 0, 0, 0.2);
          background: #f5f5f0;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .experience-image-wrapper:hover {
          border-color: #8b0000;
          box-shadow: 0 4px 12px rgba(139, 0, 0, 0.2);
        }

        .experience-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
          transition: transform 0.3s ease;
        }

        .experience-image-wrapper:hover .experience-image {
          transform: scale(1.05);
        }

        .experience-image-placeholder {
          width: 100%;
          height: 150px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: #8b0000;
          color: #f5f5f0;
          font-size: 14px;
          font-weight: 600;
          border-radius: 8px;
          border: 2px solid rgba(139, 0, 0, 0.2);
        }

        @media (max-width: 768px) {
          .experience-tabs {
            flex-direction: column;
            width: 100%;
            max-width: 400px;
          }

          .experience-tab {
            width: 100%;
            justify-content: center;
            padding: 14px 20px;
            font-size: 14px;
          }

          .tab-label {
            font-size: 14px;
          }

          .experience-frontend-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .experience-fullstack-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .experience-clean-card {
            padding: 20px;
            margin-bottom: 20px;
          }

          .company-name {
            font-size: 18px;
          }

          .role-title {
            font-size: 14px;
          }

          .experience-works {
            font-size: 13px;
          }
        }

        /* Certificates Horizontal Carousel */
        .certificates-carousel-container {
          overflow: hidden;
          padding: 20px 0;
          position: relative;
        }

        .certificates-carousel-track {
          display: flex;
          gap: 20px;
          animation: scrollCertificates 30s linear infinite;
          will-change: transform;
        }

        .certificates-carousel-container:hover .certificates-carousel-track {
          animation-play-state: paused;
        }

        @keyframes scrollCertificates {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        .certificate-carousel-item {
          flex: 0 0 320px;
          min-width: 320px;
          cursor: pointer;
          display: flex;
          align-items: flex-start;
        }

        .certificate-carousel-item .neon-card-light {
          width: 100%;
          display: flex;
          align-items: flex-start;
        }

        .certificate-carousel-item .neon-inner-light {
          width: 100%;
          display: flex;
          flex-direction: column;
          min-height: auto;
        }

        .certificate-carousel-item img {
          width: 100%;
          height: auto;
          object-fit: contain;
          display: block;
          max-width: 100%;
        }

        @media (max-width: 768px) {
          .experience-simple-grid {
            grid-template-columns: 1fr;
            gap: 20px;
          }

          .certificate-carousel-item {
            flex: 0 0 280px;
            min-width: 280px;
          }
        }

        /* Awards marquee */
        .awards-marquee {
          overflow: hidden;
          width: 100%;
          padding: 12px 6px;
          box-sizing: border-box;
        }

        .marquee-track {
          display: flex;
          gap: 18px;
          align-items: stretch;
          /* ensure the combined width is long enough; we duplicate the children for seamless loop */
        }

        .marquee-item {
          flex: 0 0 280px; /* card width — adjust as needed */
          display: flex;
          align-items: stretch;
          cursor: pointer;
          will-change: transform;
        }

        .marquee-card {
          width: 100%;
          transition: transform 0.18s ease, box-shadow 0.18s ease;
        }

        .marquee-card:hover {
          transform: translateY(-6px) scale(1.02);
          box-shadow: 0 18px 40px rgba(2, 6, 23, 0.08);
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
          background: #8b0000;
          box-shadow: 0 8px 24px rgba(139, 0, 0, 0.3);
        }

        /* Card Styles */
        .neon-card-light {
          position: relative;
          border-radius: 18px;
          padding: 1px;
          background: #8b0000;
          transition: box-shadow 0.25s ease, transform 0.25s ease;
        }

        .neon-card-light:hover {
          box-shadow: 0 12px 26px rgba(2, 6, 23, 0.08),
            0 0 40px rgba(139, 0, 0, 0.2);
          transform: translateY(-2px);
        }

        .neon-inner-light {
          border-radius: 17px;
          background: rgba(255, 255, 255, 0.96);
          border: 1px solid rgba(2, 6, 23, 0.06);
          box-shadow: 0 1px 0 rgba(255, 255, 255, 0.8) inset,
            0 10px 20px rgba(2, 6, 23, 0.05);
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
          background: rgba(255, 255, 255, 0.75);
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

        /* Hackathon Featured Project */
        .hackathon-featured {
          order: -1;
          position: relative;
        }

        .hackathon-featured::before {
          content: "🏆";
          position: absolute;
          top: -15px;
          right: -15px;
          font-size: 40px;
          z-index: 10;
          animation: float 3s ease-in-out infinite;
          filter: drop-shadow(0 4px 8px rgba(139, 0, 0, 0.4));
        }

        .hackathon-card {
          border: 3px solid #8b0000;
          box-shadow: 0 0 30px rgba(139, 0, 0, 0.4),
            0 10px 40px rgba(139, 0, 0, 0.2);
          position: relative;
          background: linear-gradient(
            135deg,
            rgba(139, 0, 0, 0.05) 0%,
            rgba(17, 24, 39, 0.05) 100%
          );
        }

        .hackathon-card::after {
          content: "";
          position: absolute;
          inset: -3px;
          border-radius: inherit;
          padding: 3px;
          background: linear-gradient(135deg, #8b0000, #111827, #8b0000);
          -webkit-mask: linear-gradient(#fff 0 0) content-box,
            linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          z-index: -1;
          animation: borderGlow 3s ease-in-out infinite;
        }

        .hackathon-card:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 0 50px rgba(139, 0, 0, 0.6),
            0 15px 50px rgba(139, 0, 0, 0.3);
        }

        @keyframes borderGlow {
          0%,
          100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        @keyframes float {
          0%,
          100% {
            transform: translateY(0px) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }

        /* Masonry Animation */
        .masonry-item {
          opacity: 0;
          transform: translate(var(--tx, 0), var(--ty, 25vh)) scale(0.96);
          transition: transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
            opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1);
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
          background: #8b0000;
          opacity: 0;
          transition: opacity 0.3s ease;
          z-index: -1;
        }

        .creative-tab:hover::before {
          opacity: 0.15;
        }

        .creative-tab.active {
          background: rgba(139, 0, 0, 0.1);
          border-color: rgba(139, 0, 0, 0.3);
          box-shadow: 0 12px 30px rgba(139, 0, 0, 0.2),
            0 0 40px rgba(17, 24, 39, 0.15);
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
          background: #8b0000;
          box-shadow: 0 4px 15px rgba(139, 0, 0, 0.4);
          transition: transform 0.3s ease;
        }

        .creative-tab:hover .tab-icon-wrapper {
          transform: rotate(10deg) scale(1.1);
        }

        .creative-tab.active .tab-icon-wrapper {
          animation: pulse-glow 2s ease-in-out infinite;
        }

        @keyframes pulse-glow {
          0%,
          100% {
            box-shadow: 0 4px 15px rgba(139, 0, 0, 0.4);
          }
          50% {
            box-shadow: 0 8px 30px rgba(139, 0, 0, 0.7);
          }
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
          background: #8b0000;
          color: white;
          font-size: 0.875rem;
          font-weight: 700;
          box-shadow: 0 2px 8px rgba(139, 0, 0, 0.4);
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
          background: #8b0000;
          color: white;
          transform: scale(1.1);
          box-shadow: 0 8px 20px rgba(139, 0, 0, 0.4);
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
  );
};

export default Portfolio;
