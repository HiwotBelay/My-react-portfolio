import React from "react";
import { FaTelegram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
//

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-br from-fuchsia-50 via-white to-teal-50 overflow-hidden border-t-[3px] border-transparent bg-clip-padding [border-image:linear-gradient(to_right,#ec4899,#14b8a6,#10b981)1]">
      {/* Subtle Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-[30rem] h-[30rem] bg-gradient-to-tr from-fuchsia-200 via-teal-200 to-transparent opacity-20 blur-3xl" />

      <div className="relative z-10 flex flex-col items-center gap-5 py-8 px-4">
        {/* Name */}
        <h1 className="text-2xl font-bold bg-gradient-to-r from-fuchsia-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent tracking-wide">
          Hiwot Belay
        </h1>

        {/* Social Icons */}
        <div className="flex gap-5">
          {[
            { icon: <FaXTwitter />, link: "https://x.com/belay_hiwo38480" },
            { icon: <FaTelegram />, link: "https://t.me/Hiwi_ina" },
            { icon: <FaLinkedin />, link: "https://www.linkedin.com/in/hiwot-belaym/" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 flex items-center justify-center rounded-full bg-white/80 backdrop-blur-md shadow-md border border-white/50 text-fuchsia-600 text-lg transform transition-all duration-300 hover:scale-110 hover:shadow-lg hover:bg-gradient-to-br hover:from-fuchsia-500 hover:via-teal-400 hover:to-emerald-500 hover:text-white"
            >
              {item.icon}
            </a>
          ))}
        </div>

        {/* Divider */}
        <div className="w-16 h-[2px] bg-gradient-to-r from-fuchsia-500 via-teal-400 to-emerald-500 rounded-full" />

        {/* Copyright */}
        <div className="text-center text-sm text-slate-500">
          <p>© 2024 All Rights Reserved</p>
          <p className="text-slate-600">Designed by Hiwot Belay</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
