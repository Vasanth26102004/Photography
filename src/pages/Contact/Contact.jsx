import React, { useRef, useState } from "react";
import "./Contact.css";
import Navbar from "../Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import emailjs from "emailjs-com";

import formImage from "../../assets/page6/form-image.png";
import flower from "../../assets/page6/flower.png";
import contact from "../../assets/page6/contact.png";
import email from "../../assets/page6/email.png";
import location from "../../assets/page6/location.png";
const Contact = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jgj8f35", // Replace with your EmailJS Service ID
        "template_jtnk3ol", // Replace with your EmailJS Template ID
        formRef.current,
        "wBojfl7jb2dAos2se" // Replace with your EmailJS Public Key
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          console.log(result.text);
          e.target.reset(); // Reset the form after successful submission
        },
        (error) => {
          alert("An error occurred, please try again later.");
          console.error(error.text);
        }
      );
  };
  return (
    <div className="contact-container">
      <Navbar />
      <section className="header"></section>
      <section className="contact-form">
        <h5 className="home-header-5">CONTACT</h5>
        <h2 className="home-header-2">GET IN TOUCH</h2>
        <div>
          <form ref={formRef} onSubmit={sendEmail}>
            <label htmlFor="name">Your Name</label>
            <input name="user_name" type="text" required />
            <label htmlFor="event_type">Event Type</label>
            <input name="event_type" type="text" required />
            <label htmlFor="event_date">Wedding/Event Date&Time</label>
            <div>
              <input
                className="dateTime"
                name="event_date"
                type="date"
                required
              />
              <input
                className="dateTime"
                name="event_time"
                type="time"
                required
              />
            </div>
            <label htmlFor="event_location">Wedding/Event Location</label>
            <input name="event_location" type="text" required />
            <label htmlFor="message">Tell me About Yourself/Event Plans</label>
            <textarea name="event_plan" rows="5" cols="50" maxLength="400" />
            <label htmlFor="user_contact">Contact</label>
            <input
              name="user_contact"
              type="tel"
              maxLength="10"
              id="phone"
              required
            />
            <button type="submit">Submit</button>
          </form>
          <img src={formImage} alt="" />
        </div>
      </section>
      <section className="contact-info">
        <h1>Enguire Now!</h1>
        <h2>
          “YOU WILL NEVER KNOW THE VALUE OF A MOMENT UNTIL IT BECOMES A MEMORY.”
        </h2>
        <div>
          <card>
            <item>
              <img src={email} alt="" />
              <p>E-MAIL</p>
              <a href="">duraiphotography003@gmail.com</a>
            </item>
            <item>
              <img src={location} alt="" />
              <p>ADDRESS</p>
              <a href="">
                Durai Photography, Thayamangalam Vilakku, Ilayangudi, Sivagangai
                630-709
              </a>
            </item>
            <item>
              <img src={contact} alt="" />
              <p>CONTACT</p>
              <a href="">+91 12345 67890</a>
            </item>
          </card>
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Contact;
