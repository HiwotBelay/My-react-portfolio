import React from "react";
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="relative w-full min-h-[70vh] flex items-center justify-center py-12 bg-gradient-to-br from-fuchsia-50 via-white to-teal-50 overflow-hidden"
    >
      {/* Glow + particles */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[40rem] h-[40rem] bg-gradient-to-tr from-fuchsia-200 via-teal-200 to-transparent opacity-40 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-br from-fuchsia-300 to-teal-300 opacity-30 rounded-full blur-2xl animate-bounce" />
      </div>

      {/* 3D Glass Card */}
      <div className="relative w-[90%] max-w-5xl bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl border border-white/50 p-8 flex flex-col lg:flex-row items-center gap-10 hover:shadow-[0_25px_50px_rgba(0,0,0,0.3)] transition-all duration-500 hover:scale-[1.02]">
        
        {/* Contact Info */}
        <div className="flex flex-col gap-6 w-full lg:w-1/2">
          <h2 className="text-3xl font-extrabold bg-gradient-to-r from-fuchsia-600 via-teal-500 to-emerald-600 bg-clip-text text-transparent drop-shadow-lg">
            Get in Touch
          </h2>
          <p className="text-slate-600">
            I’d love to hear from you! Reach out using the details below or send me a quick message.
          </p>

          <div className="flex flex-col gap-5 mt-4">
            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-xl bg-gradient-to-br from-fuchsia-100 via-teal-100 to-emerald-100 shadow-md text-fuchsia-600 text-xl group-hover:rotate-6 transition-transform duration-300">
                <FaMapMarkerAlt />
              </div>
              <div>
                <h4 className="font-bold text-slate-700">Location</h4>
                <p className="text-slate-500">Addis Ababa, Ethiopia</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-xl bg-gradient-to-br from-fuchsia-100 via-teal-100 to-emerald-100 shadow-md text-fuchsia-600 text-xl group-hover:-rotate-6 transition-transform duration-300">
                <FaEnvelope />
              </div>
              <div>
                <h4 className="font-bold text-slate-700">Email</h4>
                <p className="text-slate-500 break-all">your.email@example.com</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="p-4 rounded-xl bg-gradient-to-br from-fuchsia-100 via-teal-100 to-emerald-100 shadow-md text-fuchsia-600 text-xl group-hover:rotate-3 transition-transform duration-300">
                <FaPhone />
              </div>
              <div>
                <h4 className="font-bold text-slate-700">Phone</h4>
                <p className="text-slate-500">+251 900 000 000</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <form className="w-full lg:w-1/2 flex flex-col gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="h-12 px-4 rounded-lg border border-slate-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-fuchsia-300 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="h-12 px-4 rounded-lg border border-slate-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-teal-300 transition"
          />
          <input
            type="text"
            placeholder="Subject"
            className="h-12 px-4 rounded-lg border border-slate-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-emerald-300 transition"
          />
          <textarea
            placeholder="Your Message"
            rows={4}
            className="px-4 py-3 rounded-lg border border-slate-300 bg-white/80 focus:outline-none focus:ring-2 focus:ring-fuchsia-200 resize-none transition"
          />
          <button
            type="submit"
            className="mt-2 px-8 py-3 rounded-full bg-gradient-to-r from-fuchsia-500 via-teal-400 to-emerald-500 text-white font-bold shadow-lg hover:scale-105 hover:shadow-2xl transition-all duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
