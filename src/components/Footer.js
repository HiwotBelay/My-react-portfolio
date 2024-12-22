import React from "react";
import { FaInstagram, FaTelegram, FaLinkedin, FaBehance } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import "./Footer.css";

const Footer = () => {
  return (
    <section className="footer">
      <div className="title">
        <h1>Hiwot Belay</h1>
      </div>

      <div className="social">
     
        <a href="https://x.com/belay_hiwo38480">
          <FaXTwitter />
        </a>
        <a href="https://t.me/Hiwi_ina">
          <FaTelegram />
        </a>

        <a href="https://www.linkedin.com/in/hiwot-belaym/">
          <FaLinkedin />
        </a>
       
      </div>
      <p>© Copyright 2024 All Rights Reserved</p>
      <p>Designed by Hiwot Belay</p>
    </section>
  );
};

export default Footer;
