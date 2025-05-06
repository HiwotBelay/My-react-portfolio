"use client"

import { useState, useEffect, useRef } from "react"
import { FaGithub, FaExternalLinkAlt, FaPlay, FaPause } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"
import gcc from "./img/gcc.jpg"
import web from "./img/web.jpg"
import mern from "./img/mern.jpg"
import prog from "./img/prog.jpg"
import hackathon from "./img/Hackathon.jpg"
import new1 from "./img/new1.jpg"
import new2 from "./img/new2.jpg"
import new3 from "./img/new3.jpg"
// Import video files
import petVideo from "./img/pet.mp4"
import ecommerceVideo from "./img/ecommerce.mp4"
import tenderVideo from "./img/tender.mp4"
import dentalVideo from "./img/dental.mp4"
import chatappVideo from "./img/chatapp.mp4"
import behavVideo from "./img/behav.mp4"


const Portfolio = () => {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)
  const [playingVideo, setPlayingVideo] = useState(null)

  // Video refs
  const videoRefs = useRef({})

  // Certificate descriptions
  const certificateDescriptions = {
    hackathon: 
      "I won the SheCodes Hackathon with an Amazing AI Recruiter project that tackled a crucial need in my country, an amazing and impactful achievement!",
    gcc: "Recognition for completing the Girls Can Code program, mastering fundamental programming concepts and developing practical coding skills.",
    web: "Certification in Web Development fundamentals, covering HTML, CSS, JavaScript and responsive design principles.",
    mern: "Certification in MERN Stack development, covering MongoDB, Express.js, React, and Node.js for full-stack applications.",
    prog: "Advanced Programming certification covering algorithms, data structures, and software design patterns.",
    ala: "African Leadership Academy recognition for leadership and entrepreneurial excellence.",
    bit: "Bit Career Training certification for professional development in software engineering.",
    new1: "I won 1st place at the Gig Hackathon with an amazing AI-integrated Pet Twin System—my second big hackathon win, and another proud, impactful moment!",
    new2: "I was recognized for my communication, planning, and leadership skills while organizing a major event at Bahir Dar University.",
    new3: "This highlights my active participation in my second hackathon competition, demonstrating both my technical growth and collaborative experience.",
  }

  // Project data
  const projects = [
    {
      id: 1,
      title: "Digital Pet Twin",
      video: petVideo,
      category: "Web Application/Website",
      description:
        "A fully interactive 3D digital pet that can 🐶 Express emotions,🎤 Talk and react to users,🌦 Show dynamic weather,🧢 Wear accessories,🧠 Remember interactions,🕹️ Even play games with you!,From day to night, sun to snow, made it ALIVE, EMOTIONAL & FUN!",
      technologies: "Three.js, Blender, GLTF models, Web Speech API, ResponsiveVoice, CSS Keyframes, SVG Motion, LocalStorage, JavaScript, React, Next.js, Tailwind CSS",
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
  ]

  useEffect(() => {
    AOS.init()
  }, [])

  const closeLightbox = () => {
    setSelectedImage(null)
  }

  const handleVideoPlay = (id) => {
    // Pause any currently playing video
    if (playingVideo && playingVideo !== id) {
      if (videoRefs.current[playingVideo]) {
        videoRefs.current[playingVideo].pause()
      }
    }

    // Play or pause the clicked video
    if (playingVideo === id) {
      videoRefs.current[id].pause()
      setPlayingVideo(null)
    } else {
      videoRefs.current[id].play()
      setPlayingVideo(id)
    }
  }

  // Register video ref
  const setVideoRef = (id, element) => {
    if (element) {
      videoRefs.current[id] = element
    }
  }

  return (
    <section
      id="portfolio"
      className="w-full overflow-y-hidden bg-white py-12 flex flex-col items-center justify-center"
    >
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[65%] text-center py-5 md:w-[70%] sm:w-[90%]">
          <h1 className="text-3xl font-bold uppercase mb-5 pb-5 relative text-gray-700 after:content-[''] after:absolute after:block after:w-10 after:h-[3px] after:bg-blue-600 after:bottom-0 after:left-[calc(50%-20px)] before:content-[''] before:absolute before:block before:w-[120px] before:h-[1px] before:bg-gray-300 before:bottom-[1px] before:left-[calc(50%-60px)]">
            Experience
          </h1>
          <p>
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

      <div className="flex w-[300px] items-center justify-between my-4 bg-gray-200 rounded-3xl px-3 shadow-inner shadow-gray-400 md:w-[300px] sm:w-[300px]">
        <button
          className={
            filter === "all" || !filter
              ? "border-none bg-none text-base font-semibold cursor-pointer text-white py-2 px-5 bg-blue-600 rounded-2xl transition-colors duration-200"
              : "border-none bg-none text-base font-normal cursor-pointer py-2 px-3 transition-colors duration-200"
          }
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={
            filter === "design"
              ? "border-none bg-none text-base font-semibold cursor-pointer text-white py-2 px-5 bg-blue-600 rounded-2xl transition-colors duration-200"
              : "border-none bg-none text-base font-normal cursor-pointer py-2 px-3 transition-colors duration-200"
          }
          onClick={() => setFilter("design")}
        >
          Awards
        </button>
        <button
          className={
            filter === "illustration"
              ? "border-none bg-none text-base font-semibold cursor-pointer text-white py-2 px-5 bg-blue-600 rounded-2xl transition-colors duration-200"
              : "border-none bg-none text-base font-normal cursor-pointer py-2 px-3 transition-colors duration-200"
          }
          onClick={() => setFilter("illustration")}
        >
          Projects
        </button>
        <button
          className={
            filter === "videos"
              ? "border-none bg-none text-base font-semibold cursor-pointer text-white py-2 px-5 bg-blue-600 rounded-2xl transition-colors duration-200"
              : "border-none bg-none text-base font-normal cursor-pointer py-2 px-3 transition-colors duration-200"
          }
          onClick={() => setFilter("videos")}
        >
          Venture
        </button>
      </div>

    {/* Certificates Section */}
    <div className="mt-8 w-[80%] flex flex-wrap gap-6">
        {/* New Hackathon Certificate */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(50%-12px)] mb-6 cursor-pointer md:w-[calc(50%-12px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/Hackathon.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 group
                        before:content-[''] before:bg-white/70 before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={hackathon || "/placeholder.svg"} className="w-full h-[180px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center p-5
                          before:block before:content-[''] before:w-10 before:h-10 before:absolute before:top-4 before:left-4 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-10 after:h-10 after:absolute after:bottom-4 after:right-4 
                          after:border-b after:border-r after:border-gray-300 after:transition-all after:duration-500 after:ease-in-out after:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-2 group-hover:after:right-2 group-hover:before:top-2 group-hover:before:left-2"
            >
              <h4 className="text-xl text-gray-700 font-bold">Hackathon Winner Certificate</h4>
              <p className="text-gray-700 font-bold text-sm uppercase p-0 m-0">Innovation</p>
              <p className="text-gray-600 font-bold text-sm mt-2 hidden group-hover:block">{certificateDescriptions.hackathon}</p>
            </div>
          </div>
        </div>

        {/* 2nd Place Certificate - Using new1.jpg */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(50%-12px)] mb-6 cursor-pointer md:w-[calc(50%-12px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/new1.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 group
                        before:content-[''] before:bg-white/70 before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={new1 || "/placeholder.svg"} className="w-full h-[180px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center p-5
                          before:block before:content-[''] before:w-10 before:h-10 before:absolute before:top-4 before:left-4 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-10 after:h-10 after:absolute after:bottom-4 after:right-4 
                          after:border-b after:border-r after:border-gray-300 after:transition-all after:duration-500 after:ease-in-out after:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-2 group-hover:after:right-2 group-hover:before:top-2 group-hover:before:left-2"
            >
              <h4 className="text-xl text-gray-700 font-bold">Hackathon Winner Certificate</h4>
              <p className="text-gray-700 font-bold text-sm uppercase p-0 m-0">AI Driven Innovation</p>
              <p className="text-gray-600 font-bold text-sm mt-2 hidden group-hover:block">{certificateDescriptions.new1}</p>
            </div>
          </div>
        </div>

        {/* 3rd Place Certificate - Using new2.jpg */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(50%-12px)] mb-6 cursor-pointer md:w-[calc(50%-12px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/new2.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 group
                        before:content-[''] before:bg-white/70 before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={new2 || "/placeholder.svg"} className="w-full h-[180px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center p-5
                          before:block before:content-[''] before:w-10 before:h-10 before:absolute before:top-4 before:left-4 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-10 after:h-10 after:absolute after:bottom-4 after:right-4 
                          after:border-b after:border-r after:border-gray-300 after:transition-all after:duration-500 after:ease-in-out after:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-2 group-hover:after:right-2 group-hover:before:top-2 group-hover:before:left-2"
            >
              <h4 className="text-xl text-gray-700 font-bold">Event Organizer Recognition</h4>
              <p className="text-gray-700 font-bold text-sm uppercase p-0 m-0">organizing tech exhibition</p>
              <p className="text-gray-600 font-bold text-sm mt-2 hidden group-hover:block">{certificateDescriptions.new2}</p>
            </div>
          </div>
        </div>

        {/* 4th Place Certificate - Using new3.jpg */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(50%-12px)] mb-6 cursor-pointer md:w-[calc(50%-12px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/new3.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 group
                        before:content-[''] before:bg-white/70 before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={new3 || "/placeholder.svg"} className="w-full h-[180px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center p-5
                          before:block before:content-[''] before:w-10 before:h-10 before:absolute before:top-4 before:left-4 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-10 after:h-10 after:absolute after:bottom-4 after:right-4 
                          after:border-b after:border-r after:border-gray-300 after:transition-all after:duration-500 after:ease-in-out after:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-2 group-hover:after:right-2 group-hover:before:top-2 group-hover:before:left-2"
            >
              <h4 className="text-xl text-gray-700 font-bold">Participation Certificate</h4>
              <p className="text-gray-700 font-bold text-sm uppercase p-0 m-0">hackathon participant</p>
              <p className="text-gray-600 font-bold text-sm mt-2 hidden group-hover:block">{certificateDescriptions.new3}</p>
            </div>
          </div>
        </div>

        {/* Certificate 1 - GCC (made horizontal) */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(50%-12px)] mb-6 cursor-pointer md:w-[calc(50%-12px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/gcc.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 group
                        before:content-[''] before:bg-white/70 before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={gcc || "/placeholder.svg"} className="w-full h-[180px] object-contain sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center p-5
                          before:block before:content-[''] before:w-10 before:h-10 before:absolute before:top-4 before:left-4 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-10 after:h-10 after:absolute after:bottom-4 after:right-4 
                          after:border-b after:border-r after:border-gray-300 after:transition-all after:duration-500 after:ease-in-out after:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-2 group-hover:after:right-2 group-hover:before:top-2 group-hover:before:left-2"
            >
              <h4 className="text-xl text-gray-700 font-bold">Certificate 1</h4>
              <p className="text-gray-700 font-bold text-sm uppercase p-0 m-0">Girls Can Code</p>
              <p className="font-bold text-gray-600 text-sm mt-2 hidden group-hover:block">{certificateDescriptions.gcc}</p>
            </div>
          </div>
        </div>

        {/* Certificate 2 */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(50%-12px)] mb-6 cursor-pointer md:w-[calc(50%-12px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/web.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 group
                        before:content-[''] before:bg-white/70 before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={web || "/placeholder.svg"} className="w-full h-[180px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center p-5
                          before:block before:content-[''] before:w-10 before:h-10 before:absolute before:top-4 before:left-4 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-10 after:h-10 after:absolute after:bottom-4 after:right-4 
                          after:border-b after:border-r after:border-gray-300 after:transition-all after:duration-500 after:ease-in-out after:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-2 group-hover:after:right-2 group-hover:before:top-2 group-hover:before:left-2"
            >
              <h4 className="text-xl text-gray-700 font-bold">Certificate 2</h4>
              <p className="text-gray-700 font-bold text-sm uppercase p-0 m-0">Web Development</p>
              <p className="text-gray-600 font-bold text-sm mt-2 hidden group-hover:block">{certificateDescriptions.web}</p>
            </div>
          </div>
        </div>

        {/* Certificate 3 */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(50%-12px)] mb-6 cursor-pointer md:w-[calc(50%-12px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/mern.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 group
                        before:content-[''] before:bg-white/70 before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={mern || "/placeholder.svg"} className="w-full h-[180px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center p-5
                          before:block before:content-[''] before:w-10 before:h-10 before:absolute before:top-4 before:left-4 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-10 after:h-10 after:absolute after:bottom-4 after:right-4 
                          after:border-b after:border-r after:border-gray-300 after:transition-all after:duration-500 after:ease-in-out after:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-2 group-hover:after:right-2 group-hover:before:top-2 group-hover:before:left-2"
            >
              <h4 className="text-xl text-gray-700 font-bold">Certificate 3</h4>
              <p className="text-gray-700 font-bold text-sm uppercase p-0 m-0">MERN Stack Intro</p>
              <p className="text-gray-600 font-bold text-sm mt-2 hidden group-hover:block">{certificateDescriptions.mern}</p>
            </div>
          </div>
        </div>

        {/* Certificate 4 */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(50%-12px)] mb-6 cursor-pointer md:w-[calc(50%-12px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/prog.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 group
                        before:content-[''] before:bg-white/70 before:absolute before:left-4 before:right-4 before:top-4 before:bottom-4 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={prog || "/placeholder.svg"} className="w-full h-[180px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center p-5
                          before:block before:content-[''] before:w-10 before:h-10 before:absolute before:top-4 before:left-4 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-10 after:h-10 after:absolute after:bottom-4 after:right-4 
                          after:border-b after:border-r after:border-gray-300 after:transition-all after:duration-500 after:ease-in-out after:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-2 group-hover:after:right-2 group-hover:before:top-2 group-hover:before:left-2"
            >
              <h4 className="text-xl text-gray-700 font-bold">Certificate 4</h4>
              <p className="text-gray-700 font-bold text-sm uppercase p-0 m-0">Programming</p>
              <p className="text-gray-600 font-bold text-sm mt-2 hidden group-hover:block">{certificateDescriptions.prog}</p>
            </div>
          </div>
        </div>


        {/* Projects Section with Videos */}
        {projects.map((project) => (
          <div
            key={project.id}
            className={
              filter === "all" || filter === "illustration"
                ? "w-[calc(50%-12px)] mb-6 cursor-pointer md:w-[calc(50%-12px)] sm:w-full"
                : "hidden"
            }
          >
            <div className="w-full h-full bg-white rounded-lg shadow-sm overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-md">
              {/* Project Video */}
              <div className="w-full h-[220px] bg-gray-100 relative overflow-hidden">
                <video
                  ref={(el) => setVideoRef(project.id, el)}
                  src={project.video}
                  className="w-full h-full object-cover"
                  muted
                  loop
                  onClick={() => handleVideoPlay(project.id)}
                ></video>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-800/30"></div>

                {/* Play/Pause Button */}
                <button
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-blue-600/80 rounded-full flex items-center justify-center text-white z-10 hover:bg-blue-700/80 transition-colors"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleVideoPlay(project.id)
                  }}
                >
                  {playingVideo === project.id ? <FaPause /> : <FaPlay />}
                </button>

                <div className="absolute bottom-4 left-4 z-10">
                  <span className="text-xs font-medium bg-blue-600/90 text-white py-1 px-2 rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-5">
                <h3 className="text-xl font-semibold text-gray-700 mb-2">{project.title}</h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.technologies.split(", ").map((tech, index) => (
                    <span key={index} className="text-xs bg-gray-100 text-gray-600 py-1 px-2 rounded">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center pt-2 border-t border-gray-100">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaGithub /> GitHub
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-sm text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Lightbox */}
        {selectedImage && (
          <div
            className="fixed top-0 left-0 w-full h-screen flex justify-center items-center z-[9999] bg-black/80 cursor-pointer"
            onClick={closeLightbox}
          >
            <div className="w-full h-full flex items-center justify-center">
              <img
                src={selectedImage || "/placeholder.svg"}
                className="max-w-full max-h-[90%] object-contain object-center"
                alt=""
              />
            </div>
          </div>
        )}
      </div>

      <div className="w-[70%] flex items-center gap-2.5 justify-center py-5 px-12 border border-gray-200 rounded-lg">
        <h3 className="text-gray-700 font-normal">For More Projects Check on my github profile</h3>
        <a
          href="https://github.com/HiwotBelay"
          className="cursor-pointer text-xl py-1.5 px-5 rounded-2xl bg-blue-600 border-none text-white"
        >
          <FaGithub />
        </a>
      </div>
    </section>
  )
}

export default Portfolio
