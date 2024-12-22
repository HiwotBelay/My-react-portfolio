import React, { useState, useEffect } from "react";
import { FaBehance, FaGithub } from "react-icons/fa";
import "./Portfolio.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-scroll";
import gcc from "./img/gcc.jpg";
import web from "./img/web.jpg";
import mern from "./img/mern.jpg";
import prog from "./img/prog.jpg";
import ala from "./img/ala.jpg";
import bit from "./img/bit.jpg";



const Portfolio = () => {
  const [filter, setFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  useEffect(() => {
    AOS.init();
  }, []);
  const closeLightbox = () => {
    setSelectedImage(null);
  };

  return (
    <section id="portfolio">
      <div className="about-container">
        <div className="title">
          <h1>Experience</h1>
          <p>
I’m a full-stack developer with a strong passion for creating interactive and visually striking web applications. 
From front-end design to back-end development, I thrive on building projects that are not only functional but also user-friendly.
 My experience spans working with technologies like React, Node.js, and MongoDB, and I’ve had the opportunity to apply these skills in a variety of projects that challenge me to learn and grow. 
 While I have gained knowledge through various courses and certifications, the real value comes from the hands-on experience I’ve gained over time. Currently, I’m focused on developing the Bit CDC website, which will allow me to showcase both my technical skills and my creative approach to web development. 
 I'm always up for new challenges and excited to continue growing in the ever-evolving world of software development.

          </p>
        </div>
      </div>
      <div className="filter-btn">
        <button
          className={filter === "all" || !filter ? "active" : "filter-button"}
          onClick={() => setFilter("all")}
        >
          All
        </button>
        <button
          className={filter === "design" ? "active" : "filter-button"}
          onClick={() => setFilter("design")}
        >
          Awards
        </button>
        <button
          className={filter === "illustration" ? "active" : "filter-button"}
          onClick={() => setFilter("illustration")}
        >
          Projects
        </button>
        <button
          className={filter === "videos" ? "active" : "filter-button"}
          onClick={() => setFilter("videos")}
        >
          venture
        </button>
      </div>
      
      <div className="portfolio-container">
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/gcc.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src={gcc}
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Certficate 1</h4>
              <p>Girls Can Code</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 12.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src={web}
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Certificate 2</h4>
              <p>Web Development</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 13.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src={mern}
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Certificate 3</h4>
              <p>MERN Stack Intro</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 11.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src={prog}
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Certificate 4</h4>
              <p>Programming </p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src={ala}
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Certficate 5</h4>
              <p>ALA Experience</p>
            </div>
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "design" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")
          }
        >
          <div className="portfolio-wrap">
            <img
              src={bit}
              className="img-fluid"
              alt=""
            />
            <div className="portfolio-info">
              <h4>Certficate 6</h4>
              <p>Bit Career Training</p>
            </div>
          </div>
        </div>

        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")
            
          }
        >
          <div className="portfolio-wrap">
          <p > 1. Habesha Clothing Website <br></br>
I designed and developed a fully responsive e-commerce website for a local clothing brand, showcasing traditional Habesha clothing. The site allows users to browse products, view details, and make purchases. I integrated a sleek UI with easy navigation and ensured the site was mobile-friendly, providing an enjoyable shopping experience across all devices.
<br></br>
<br></br>
<br></br>
2. React-Based Portfolio  <br></br>
I am currently building my own portfolio using React, with plans to showcase a variety of web development projects. This project emphasizes dynamic content loading and smooth transitions, and it’s designed to be highly interactive, with animations and user-friendly navigation. Although still a work in progress, this portfolio will serve as a central hub for my past and future projects, highlighting my skills in React and other technologies.
<br></br>
<br></br>
<br></br>


</p>
            
          </div>
        </div>
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")
          }
        >
          <div className="portfolio-wrap">
            <p>3. Personal Blog Website with CMS Integration <br></br>
For a personal project, I developed a blog website with a Content Management System (CMS), allowing users to easily create, edit, and publish blog posts. Built with HTML, CSS, JavaScript, and integrated with a backend CMS, this project aimed to offer an intuitive platform for content creators. The blog is fully responsive and includes features like a comment section, social media sharing, and an easy-to-use dashboard for managing content.
<br></br>
<br></br>
<br></br>
4. Bahir Dar University Project (Pending Approval)<br></br>
Currently, I’m awaiting approval for a new project from **Bahir Dar University**, which involves developing a platform to connect students with academic resources and university services. The website will feature a clean, responsive design with sections for academic resources, news, events, and more. This project will allow me to apply my full-stack development skills while creating something that benefits the university community.</p>
            
          </div>
        </div>
       
        <div
          className={
            filter === "all" || filter === "illustration" ? "portfolio-item" : "hide"
          }
          onClick={() =>
            setSelectedImage("/img/portfolio/portfolio-1_files/Full/Design 10.jpg")
          }
        >
          <div className="portfolio-wrap">
          Upcoming Project: Bit CDC Website <br></br>
I am also excited to announce that I’m working on the **Bit CDC website**, where I will combine my expertise in web development to build a modern platform. This project will showcase both technical proficiency and creative design, aiming for a user-friendly and highly functional website that meets the needs of the CDC community.

          </div>
        </div>


        {selectedImage && (
          <div className="lightbox-overlay" onClick={closeLightbox}>
            <div className="lightbox-content">
              <img src={selectedImage} className="img-fluid" alt=""  />
            </div>
          </div>
        )}
        
      </div>
      <div className="behance">
          <h3>For More Projects Check on my github profile </h3>
          <a href="https://github.com/HiwotBelay" className="be"><FaGithub /> </a>
        </div>
    </section>
  );
};

export default Portfolio;
