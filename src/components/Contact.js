import React from "react";
import "./Contact.css";
import { FaMapMarker, FaEnvelope, FaPhone } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <div className="about-container">
        <div className="title">
          <h1>Contact</h1>
        </div>
        <div className="contact-row">
          <div className="contact-info">
            <div className="location">
              <div className="location-icon">
                <FaMapMarker />
              </div>
              <div className="location-details">
                <h1>Location</h1>
                <p>Bahir Dar, Ethiopia</p>
              </div>
            </div>

            <div className="location">
              <div className="location-icon">
                <FaEnvelope />
              </div>
              <div className="location-details">
                <h1>Email</h1>
                <p>hiwotbelay060@gmail.com</p>
              </div>
            </div>

            <div className="location">
              <div className="location-icon">
                <FaPhone />
              </div>
              <div className="location-details">
                <h1>Phone</h1>
                <p>+251946561519</p>
              </div>
            </div>
          </div>
          <div className="contact-form">
            <form>
              <div className="form-row">
                <div className="group-form">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div className="group-form">
                  <input
                    type="email"
                    name="Email"
                    id="Email"
                    placeholder="Your Email"
                    required
                  />
                </div>
              </div>

              <div className="subject">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>
              <textarea
                class="form-control"
                name="message"
                rows="8"
                placeholder="Message"
                required
              ></textarea>
              <button className="send" type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
