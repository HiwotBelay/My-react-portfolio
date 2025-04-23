"use client"

import { useState, useEffect } from "react"
import { FaGithub } from "react-icons/fa"
import AOS from "aos"
import "aos/dist/aos.css"
import gcc from "./img/gcc.jpg"
import web from "./img/web.jpg"
import mern from "./img/mern.jpg"
import prog from "./img/prog.jpg"
import ala from "./img/ala.jpg"
import bit from "./img/bit.jpg"
import hackathon from "./img/Hackathon.jpg" // Import the new Hackathon image

const Portfolio = () => {
  const [filter, setFilter] = useState("all")
  const [selectedImage, setSelectedImage] = useState(null)

  useEffect(() => {
    AOS.init()
  }, [])

  const closeLightbox = () => {
    setSelectedImage(null)
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

      <div className="mt-8 w-[85%] flex flex-wrap gap-4">
        {/* New Hackathon Certificate */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/Hackathon.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 
                        before:content-[''] before:bg-white/70 before:absolute before:left-8 before:right-8 before:top-8 before:bottom-8 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={hackathon || "/placeholder.svg"} className="w-full h-[150px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center
                          before:block before:content-[''] before:w-12 before:h-12 before:absolute before:top-9 before:left-9 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-12 after:h-12 after:absolute after:bottom-9 after:right-9 
                          after:border-b after:border-r after:border-gray-300 after:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-4 group-hover:after:right-4 group-hover:before:top-4 group-hover:before:left-4"
            >
              <h4 className="text-xl text-gray-700 font-semibold">Hackathon Certificate</h4>
              <p className="text-gray-700 text-sm uppercase p-0 m-0">Coding Competition</p>
            </div>
          </div>
        </div>

        {/* Certificate 1 - GCC (made horizontal) */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/gcc.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 
                        before:content-[''] before:bg-white/70 before:absolute before:left-8 before:right-8 before:top-8 before:bottom-8 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={gcc || "/placeholder.svg"} className="w-full h-[150px] object-contain sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center
                          before:block before:content-[''] before:w-12 before:h-12 before:absolute before:top-9 before:left-9 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-12 after:h-12 after:absolute after:bottom-9 after:right-9 
                          after:border-b after:border-r after:border-gray-300 after:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-4 group-hover:after:right-4 group-hover:before:top-4 group-hover:before:left-4"
            >
              <h4 className="text-xl text-gray-700 font-semibold">Certificate 1</h4>
              <p className="text-gray-700 text-sm uppercase p-0 m-0">Girls Can Code</p>
            </div>
          </div>
        </div>

        {/* Certificate 2 */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 12.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 
                        before:content-[''] before:bg-white/70 before:absolute before:left-8 before:right-8 before:top-8 before:bottom-8 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={web || "/placeholder.svg"} className="w-full h-[150px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center
                          before:block before:content-[''] before:w-12 before:h-12 before:absolute before:top-9 before:left-9 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-12 after:h-12 after:absolute after:bottom-9 after:right-9 
                          after:border-b after:border-r after:border-gray-300 after:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-4 group-hover:after:right-4 group-hover:before:top-4 group-hover:before:left-4"
            >
              <h4 className="text-xl text-gray-700 font-semibold">Certificate 2</h4>
              <p className="text-gray-700 text-sm uppercase p-0 m-0">Web Development</p>
            </div>
          </div>
        </div>

        {/* Certificate 3 */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 13.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 
                        before:content-[''] before:bg-white/70 before:absolute before:left-8 before:right-8 before:top-8 before:bottom-8 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={mern || "/placeholder.svg"} className="w-full h-[150px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center
                          before:block before:content-[''] before:w-12 before:h-12 before:absolute before:top-9 before:left-9 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-12 after:h-12 after:absolute after:bottom-9 after:right-9 
                          after:border-b after:border-r after:border-gray-300 after:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-4 group-hover:after:right-4 group-hover:before:top-4 group-hover:before:left-4"
            >
              <h4 className="text-xl text-gray-700 font-semibold">Certificate 3</h4>
              <p className="text-gray-700 text-sm uppercase p-0 m-0">MERN Stack Intro</p>
            </div>
          </div>
        </div>

        {/* Certificate 4 */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 11.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 
                        before:content-[''] before:bg-white/70 before:absolute before:left-8 before:right-8 before:top-8 before:bottom-8 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={prog || "/placeholder.svg"} className="w-full h-[150px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center
                          before:block before:content-[''] before:w-12 before:h-12 before:absolute before:top-9 before:left-9 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-12 after:h-12 after:absolute after:bottom-9 after:right-9 
                          after:border-b after:border-r after:border-gray-300 after:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-4 group-hover:after:right-4 group-hover:before:top-4 group-hover:before:left-4"
            >
              <h4 className="text-xl text-gray-700 font-semibold">Certificate 4</h4>
              <p className="text-gray-700 text-sm uppercase p-0 m-0">Programming</p>
            </div>
          </div>
        </div>

        {/* Certificate 5 */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 
                        before:content-[''] before:bg-white/70 before:absolute before:left-8 before:right-8 before:top-8 before:bottom-8 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={ala || "/placeholder.svg"} className="w-full h-[150px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center
                          before:block before:content-[''] before:w-12 before:h-12 before:absolute before:top-9 before:left-9 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-12 after:h-12 after:absolute after:bottom-9 after:right-9 
                          after:border-b after:border-r after:border-gray-300 after:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-4 group-hover:after:right-4 group-hover:before:top-4 group-hover:before:left-4"
            >
              <h4 className="text-xl text-gray-700 font-semibold">Certificate 5</h4>
              <p className="text-gray-700 text-sm uppercase p-0 m-0">ALA Experience</p>
            </div>
          </div>
        </div>

        {/* Certificate 6 */}
        <div
          className={
            filter === "all" || filter === "design"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")}
        >
          <div
            className="w-full transition-all duration-300 relative overflow-hidden z-10 
                        before:content-[''] before:bg-white/70 before:absolute before:left-8 before:right-8 before:top-8 before:bottom-8 
                        before:transition-all before:duration-300 before:ease-in-out before:z-20 before:opacity-0 
                        hover:before:top-0 hover:before:left-0 hover:before:right-0 hover:before:bottom-0 hover:before:opacity-100"
          >
            <img src={bit || "/placeholder.svg"} className="w-full h-[150px] object-cover sm:h-auto" alt="" />
            <div
              className="opacity-0 absolute top-0 left-0 right-0 bottom-0 text-center z-30 transition-all duration-300 ease-in-out 
                          flex flex-col justify-center items-center
                          before:block before:content-[''] before:w-12 before:h-12 before:absolute before:top-9 before:left-9 
                          before:border-t before:border-l before:border-gray-300 before:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          after:block after:content-[''] after:w-12 after:h-12 after:absolute after:bottom-9 after:right-9 
                          after:border-b after:border-r after:border-gray-300 after:transition-all before:duration-500 before:ease-in-out before:z-[9994]
                          group-hover:opacity-100 group-hover:after:bottom-4 group-hover:after:right-4 group-hover:before:top-4 group-hover:before:left-4"
            >
              <h4 className="text-xl text-gray-700 font-semibold">Certificate 6</h4>
              <p className="text-gray-700 text-sm uppercase p-0 m-0">Bit Career Training</p>
            </div>
          </div>
        </div>

        {/* Project 1 */}
        <div
          className={
            filter === "all" || filter === "illustration"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")}
        >
          <div className="w-full transition-all duration-300 relative overflow-hidden z-10 p-3">
            <p className="text-gray-700 text-sm leading-tight">
              1. Habesha Clothing Website <br></br>I designed and developed a fully responsive e-commerce website for a
              local clothing brand, showcasing traditional Habesha clothing. The site allows users to browse products,
              view details, and make purchases. I integrated a sleek UI with easy navigation and ensured the site was
              mobile-friendly, providing an enjoyable shopping experience across all devices.
              <br></br>
              <br></br>
              <br></br>
              2. React-Based Portfolio <br></br>I am currently building my own portfolio using React, with plans to
              showcase a variety of web development projects. This project emphasizes dynamic content loading and smooth
              transitions, and it's designed to be highly interactive, with animations and user-friendly navigation.
              Although still a work in progress, this portfolio will serve as a central hub for my past and future
              projects, highlighting my skills in React and other technologies.
              <br></br>
              <br></br>
              <br></br>
            </p>
          </div>
        </div>

        {/* Project 2 */}
        <div
          className={
            filter === "all" || filter === "illustration"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")}
        >
          <div className="w-full transition-all duration-300 relative overflow-hidden z-10 p-3">
            <p className="text-gray-700 text-sm leading-tight">
              3. Personal Blog Website with CMS Integration <br></br>
              For a personal project, I developed a blog website with a Content Management System (CMS), allowing users
              to easily create, edit, and publish blog posts. Built with HTML, CSS, JavaScript, and integrated with a
              backend CMS, this project aimed to offer an intuitive platform for content creators. The blog is fully
              responsive and includes features like a comment section, social media sharing, and an easy-to-use
              dashboard for managing content.
              <br></br>
              <br></br>
              <br></br>
              4. Bahir Dar University Project (Pending Approval)<br></br>
              Currently, I'm awaiting approval for a new project from **Bahir Dar University**, which involves
              developing a platform to connect students with academic resources and university services. The website
              will feature a clean, responsive design with sections for academic resources, news, events, and more. This
              project will allow me to apply my full-stack development skills while creating something that benefits the
              university community.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div
          className={
            filter === "all" || filter === "illustration"
              ? "w-[calc(33.33%-16px)] mb-6 cursor-pointer md:w-[calc(50%-16px)] sm:w-full"
              : "hidden"
          }
          onClick={() => setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")}
        >
          <div className="w-full transition-all duration-300 relative overflow-hidden z-10 p-3">
            <p className="text-gray-700 text-sm leading-tight">
              Upcoming Project: Bit CDC Website <br></br>I am also excited to announce that I'm working on the **Bit CDC
              website**, where I will combine my expertise in web development to build a modern platform. This project
              will showcase both technical proficiency and creative design, aiming for a user-friendly and highly
              functional website that meets the needs of the CDC community.
            </p>
          </div>
        </div>

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

