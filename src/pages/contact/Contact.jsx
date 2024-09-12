/**
 * Contact component for 3legant website
 * 
 * This component renders the contact page with a hero section, about us section, 
 * contact us section, and a form to send messages to the Telegram bot.
 * 
 * @returns {JSX.Element} The Contact component
 */

import "./Contact.scss";

import React, { Fragment, useEffect, useState } from "react";

import About from "../home/about/About";
import Cimg1 from "../../assets/Cart/cc1.svg";
import Cimg2 from "../../assets/Cart/cc2.svg";
import Cimg3 from "../../assets/Cart/cc3.svg";
import ContactImg from "../../assets/Cart/contact_a.jpg";
import { FaArrowRight } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

const Contact = () => {
  /**
   * useEffect hook to scroll to the top of the page on mount
   */
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  /**
   * Telegram bot token and chat ID
   */
  const BOT__TOKEN = "7468900185:AAH4z9uHj3Y9MTsaz2KcYlGW19zpWZK0llo";
  const CHAT__ID = "6366315724";

  /**
   * State variables for form fields
   */
  const [fname, setFname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  /**
   * Handle send message event
   * 
   * @param {Event} e The event object
   */
  const handleSendMessage = (e) => {
    e.preventDefault();
    let text = "User: %0A%0A";
    text += `FName: ${fname} %0A`;
    text += `Email: ${email} %0A`;
    text += `Message: ${message} %0A`;
    let url = `https://api.telegram.org/bot${BOT__TOKEN}/sendMessage?chat_id=${CHAT__ID}&text=${text}`;
    let api = new XMLHttpRequest();
    api.open("GET", url, true);
    api.send();

    // Clear the form fields
    setFname("");

    setEmail("");
    setMessage("");
  };

  return (
    <Fragment>
      <div className="contact container">
        <div className="contact__hero">
          <h2>
            We believe in sustainable decor. We’re passionate about life at
            home.
          </h2>
          <p>
            Our features timeless furniture, with natural fabrics, curved lines,
            plenty of mirrors and classic design, which can be incorporated into
            any decor project. The pieces enchant for their sobriety, to last
            for generations, faithful to the shapes of each period, with a touch
            of the present
          </p>
        </div>
        <div className="contact__about">
          <div className="contact__about__img">
            <img src={ContactImg} alt="contact.png" />
          </div>
          <div className="contact__about__desc">
            <h2>About Us</h2>
            <p>
              3legant is a gift & decorations store based in HCMC, India. Est
              since 2019. Our customer service is always prepared to support you
              24/7
            </p>
            <NavLink to={"/shop"}>
              Shop Now <FaArrowRight />
            </NavLink>
          </div>
        </div>
        <div className="contact__contact__us">
          <h2>Contact Us</h2>
          <div className="contact__contact__us__cards">
            <div className="contact__contact__us__cards__card">
              <img src={Cimg1} alt="c.img" />
              <span>Address</span>
              <p>India</p>
            </div>
            <div className="contact__contact__us__cards__card">
              <img src={Cimg2} alt="c.img" />
              <span> Contact Us</span>
              <p>+91-6372059288</p>
            </div>
            <div className="contact__contact__us__cards__card">
              <img src={Cimg3} alt="c.img" />
              <span>Email </span>
              <p>hello@3legant.com</p>
            </div>
          </div>
        </div>
        <div className="contact__main">
          <form onSubmit={handleSendMessage} className="contact__main__form">
            <div className="input__optional">
              <label htmlFor="">Full Name</label>
              <input
                value={fname}
                onChange={(e) => setFname(e.target.value)}
                name="fname"
                type="text"
                placeholder="Your Name"
              />
            </div>
            <div className="input__optional">
              <label htmlFor="">Email address</label>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                name="email"
                type="text"
                placeholder="Your Email"
              />
            </div>
            <div className="input__optional">
              <label htmlFor="">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                name="message"
                id=""
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
          <iframe
            className="contact__main__map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448194.82162352453!2d77.09323125!3d28.6440836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1726157745587!5m2!1sen!2sin"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
      <div className="contact__bottom">
        <About />
      </div>
    </Fragment>
  );
};

export default Contact;
