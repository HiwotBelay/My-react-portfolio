import React, { useEffect, useState, useRef } from "react";
import "./About.css";
import { FaAngleRight } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
import profileImage from "./img/profile-img.jpg";


const About = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  const [isVisible, setIsVisible] = useState(false);
  const progressRef = useRef(null);

  useEffect(() => {
    AOS.init();
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5, // Adjust this threshold value as needed
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
  }, [isVisible]);

  return (
    <section id="about">
      <div className="about-container">
        <div className="title">
          <h1>About</h1>
          <p>
          I'm a full-stack developer and software engineer with over 3 years of experience in building innovative and user-focused digital solutions. 
          I'm always eager to explore new technologies and deliver impactful projects that bridge creativity and functionality.
           With a strong foundation in programming, problem-solving, and the technical nuances of the development process,
          I can adapt to various frameworks and tools to meet project requirements! 
          This portfolio showcases some of my latest  projects.
          </p>
        </div>
        <div className="content">
          <img
            src={profileImage}
            alt=""
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="300"
          />
          <div
            className="details"
            data-aos="fade-left"
            data-aos-duration="1000"
            data-aos-delay="300"
          >
            <h1>Software Engineer | Full-Stack Developer</h1>
            <p>
            As a full-stack developer and software engineer, I possess a diverse range of technical skills that 
            enable me to deliver exceptional solutions. 
            I thrive on the challenges presented by the fast-evolving tech landscape and continuously strive for
             innovation and excellence in every project I undertake.
            </p>
            <div className="info">
              <ul>
                <li>
                  <FaAngleRight />
                  <strong>Email :</strong>hiwotbelay060@gmial.com
                </li>
                <li>
                  <FaAngleRight />
                  <strong>Phone : </strong>+2519 46561519
                </li>
                <li>
                  <FaAngleRight />
                  <strong>Address :</strong>Bahir Dar, Ethiopia{" "}
                </li>
              </ul>
            </div>
            <p>
              <br></br><br></br>
            I truly appreciate you visiting my portfolio. I'm excited to collaborate with you and turn your unique ideas into extraordinary results. 
            Reach out through the contact details provided, and let’s create something remarkable together!
            </p>
          </div>
        </div>
      </div>

      <section id="skill">
        <div className="about-container">
          <div className="title">
            <h1>Skills</h1>
            <p>
            As a full-stack developer, I bring a broad set of technical skills that allow me to deliver high-quality web applications. 
            I embrace the challenges of the fast-paced tech industry and consistently strive to improve and innovate in every project I work on.
            </p>
          </div>
          <div className="skill">
  <div className="skill-list">
    <div className="skill-item react">
      <div className="sktill-title">
        <h4>React</h4>
        <h4>90%</h4>
      </div>
      <div className="progressbar" ref={progressRef}>
        <div className={`percentage ${isVisible ? "react-bar" : ""}`}></div>
      </div>
    </div>
    <div className="skill-item mongodb">
      <div className="sktill-title">
        <h4>MongoDB & Postgress</h4>
        <h4>80%</h4>
      </div>
      <div className="progressbar" ref={progressRef}>
        <div className={`percentage ${isVisible ? "mongodb-bar" : ""}`}></div>
      </div>
    </div>
    <div className="skill-item tailwind">
      <div className="sktill-title">
        <h4>Tailwind CSS</h4>
        <h4>90%</h4>
      </div>
      <div className="progressbar" ref={progressRef}>
        <div className={`percentage ${isVisible ? "tailwind-bar" : ""}`}></div>
      </div>
    </div>
  </div>

  <div className="skill-list">
    <div className="skill-item javascript">
      <div className="sktill-title">
        <h4>JavaScript</h4>
        <h4>80%</h4>
      </div>
      <div className="progressbar" ref={progressRef}>
        <div className={`percentage ${isVisible ? "javascript-bar" : ""}`}></div>
      </div>
    </div>
    <div className="skill-item node">
      <div className="sktill-title">
        <h4>HTML5 & CSS3</h4>
        <h4>75%</h4>
      </div>
      <div className="progressbar" ref={progressRef}>
        <div className={`percentage ${isVisible ? "node-bar" : ""}`}></div>
      </div>
    </div>
    <div className="skill-item html-css">
      <div className="sktill-title">
        <h4>Node.js & Express.js</h4>
        <h4>80%</h4>
      </div>
      <div className="progressbar" ref={progressRef}>
        <div className={`percentage ${isVisible ? "html-css-bar" : ""}`}></div>
      </div>
    </div>
  </div>
</div>

        </div>
      </section>
    </section>
  );
};

export default About;
