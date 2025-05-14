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

   <section id="skill" className="py-16 bg-white-50">
  <div className="about-container max-w-5xl mx-auto px-4">
    <div className="title text-center mb-12">
  <h1 className="text-4xl font-bold uppercase mb-5 pb-5 relative text-gray-700 text-center after:content-[''] after:absolute after:block after:w-16 after:h-1 after:bg-blue-600 after:bottom-0 after:left-1/2 after:transform after:-translate-x-1/2">
  Skills
      </h1>
      <p className="max-w-4xl mx-auto">
        As a full-stack developer, I bring a broad set of technical skills that allow me to deliver high-quality web applications. 
        I embrace the challenges of the fast-paced tech industry and consistently strive to improve and innovate in every project I work on.
      </p>
    </div>

    <div className="skill-content w-full grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      {/* Left Column - First 3 Skills */}
      <div className="skill-column">
        <div className="skill-item mb-8">
          <div className="skill-title flex justify-between mb-2">
            <h4 className="font-medium">React</h4>
            <h4>90%</h4>
          </div>
          <div className="progressbar w-full h-2.5 bg-gray-300 rounded-full" ref={progressRef}>
            <div
              className="percentage h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: isVisible ? "90%" : "0%" }}
            ></div>
          </div>
        </div>

        <div className="skill-item mb-8">
          <div className="skill-title flex justify-between mb-2">
            <h4 className="font-medium">MongoDB & Postgres</h4>
            <h4>80%</h4>
          </div>
          <div className="progressbar w-full h-2.5 bg-gray-300 rounded-full" ref={progressRef}>
            <div
              className="percentage h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: isVisible ? "80%" : "0%", transitionDelay: "200ms" }}
            ></div>
          </div>
        </div>

        <div className="skill-item mb-8">
          <div className="skill-title flex justify-between mb-2">
            <h4 className="font-medium">Tailwind CSS</h4>
            <h4>90%</h4>
          </div>
          <div className="progressbar w-full h-2.5 bg-gray-300 rounded-full" ref={progressRef}>
            <div
              className="percentage h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: isVisible ? "90%" : "0%", transitionDelay: "400ms" }}
            ></div>
          </div>
        </div>
      </div>

      {/* Right Column - Next 3 Skills */}
      <div className="skill-column">
        <div className="skill-item mb-8">
          <div className="skill-title flex justify-between mb-2">
            <h4 className="font-medium">JavaScript</h4>
            <h4>80%</h4>
          </div>
          <div className="progressbar w-full h-2.5 bg-gray-300 rounded-full" ref={progressRef}>
            <div
              className="percentage h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: isVisible ? "80%" : "0%", transitionDelay: "100ms" }}
            ></div>
          </div>
        </div>

        <div className="skill-item mb-8">
          <div className="skill-title flex justify-between mb-2">
            <h4 className="font-medium">HTML5 & CSS3</h4>
            <h4>75%</h4>
          </div>
          <div className="progressbar w-full h-2.5 bg-gray-300 rounded-full" ref={progressRef}>
            <div
              className="percentage h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: isVisible ? "75%" : "0%", transitionDelay: "300ms" }}
            ></div>
          </div>
        </div>

        <div className="skill-item mb-8">
          <div className="skill-title flex justify-between mb-2">
            <h4 className="font-medium">Node.js & Express.js</h4>
            <h4>80%</h4>
          </div>
          <div className="progressbar w-full h-2.5 bg-gray-300 rounded-full" ref={progressRef}>
            <div
              className="percentage h-full bg-blue-600 rounded-full transition-all duration-1000 ease-out"
              style={{ width: isVisible ? "80%" : "0%", transitionDelay: "500ms" }}
            ></div>
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
