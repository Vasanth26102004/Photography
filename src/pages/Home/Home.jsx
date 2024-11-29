import React, { useRef, useState } from "react";
import "./Home.css";
import { Link } from "react-router-dom";
import Navbar from ".././Navbar/Navbar.jsx";
import emailjs from "emailjs-com";

import header from "../../assets/header.png";
import auther from "../../assets/page1/auther.png";
import comma from "../../assets/page1/comma.png";
import bottom from "../../assets/page1/bottom.png";
import vector from "../../assets/page1/vector.png";
import award from "../../assets/page1/award.png";
import obj1 from "../../assets/page1/obj1.png";
import obj2 from "../../assets/page1/obj2.png";
import obj3 from "../../assets/page1/obj3.png";
import hero from "../../assets/page1/hero.png";
import slider from "../../assets/page1/slider.png";
import portfolio1 from "../../assets/page1/portfolio1.png";
import portfolio2 from "../../assets/page1/portfolio2.png";
import client from "../../assets/page1/client.png";
import contact from "../../assets/page1/contact.png";

const Home = () => {
  const formRef = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jgj8f35", // Replace with your EmailJS Service ID
        "template_bje8xaw", // Replace with your EmailJS Template ID
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
    <div className="home-container">
      <Navbar />
      <section className="header">
        <h3 id="cursive" className="dark-brown">
          Your Dream Wedding Awaits
        </h3>
        <h2>Artistic Wedding Photography</h2>
      </section>
      <section className="home-award">
        <img width="50px" src={award} alt="" />
        <h5>AWARD WINNING PHOTOGRAPHY</h5>
        <h1>Showcasing your big day in a memorable and unforgettable way</h1>
      </section>
      <section className="home-about">
        <img id="auther" width="40%" src={auther} alt="" />
        <div className="intro">
          <img id="comma" width="50px" src={comma} alt="" />
          <h2>Hello, My Name is Durai</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
            id sit interdum lacus turpis ac. Integer malesuada sagittis placerat
            eget.
            <br />
            <br />
            Lorem ipsum dolor sit amet consectetur. Dignissim consectetur
            tristique purus vehicula felis velit ac. Tempus velit morbi accumsan
            id sit interdum lacus turpis ac. Integer malesuada sagittis
            placerat.
          </p>
          <img id="design" width="40%" src={bottom} alt="" />
          <h3 id="auther">Durai.M</h3>
          <button>Learn More</button>
        </div>
      </section>
      <section className="home-service">
        <h5 className="home-header-5">SERVICES</h5>
        <h2 className="home-header-2">What I Offer</h2>
        <div className="home-service-cards">
          <div className="home-service-card">
            <img src={obj1} alt="" />
            <h4>Wedding</h4>
            <p>
              Per Session <span> $2999</span>
            </p>
            <button>More Details</button>
          </div>
          <div className="home-service-card">
            <img src={obj2} alt="" />
            <h4>Engagemnt</h4>
            <p>
              Per Session <span> $2999</span>
            </p>
            <button>More Details</button>
          </div>
          <div className="home-service-card">
            <img src={obj3} alt="" />
            <h4>Reseption</h4>
            <p>
              Per Session <span> $2999</span>
            </p>
            <button>More Details</button>
          </div>
        </div>
      </section>
      <section className="home-image">
        <img className="hero-image" src={hero} alt="" />
        <div className="home-image-card">
          <img width="50px" src={vector} alt="" />
          <h3>Creative, Passionate, Artistic</h3>
          <p>
            Sit dolore velit aute nostrud eiusmod ut veniam id do ipsum. Commodo
            amet elit laboris cupidatat deserunt voluptate sint cillum anim
            quis. Eiusmod dolor in tempor cupidatat excepteur eu ullamco aute
            sint esse aute excepteur. Lorem laboris aute anim.
          </p>
        </div>
      </section>
      <section className="home-portfolio">
        <h5 className="home-header-5">Portfolo</h5>
        <h2 className="home-header-2">Featured Story</h2>
        <div>
          <content>
            <h1>01</h1>
            <h4>Richardo & Michelle</h4>
            <p>
              Eiusmod dolor in tempor cupidatat excepteur eu ullamco aute sint
              esse aute excepteur. Lorem laboris aute anim. Ex irure amet Lorem
              exercitation mollit eu esse.
            </p>
          </content>
          <img src={portfolio1} alt="" />
          <img src={portfolio2} alt="" />
        </div>
        <Link to="/gallery">
          <button>View Gallery</button>
        </Link>
      </section>
      <section className="home-client">
        <h2>Client Testimonial</h2>
        <div className="home-client-card">
          <img id="reverse" className="slider" src={slider} alt="" />
          <section>
            <img width="50px" src={comma} alt="" />
            <p>
              Eiusmod dolor in tempor cupidatat excepteur eu ullamco aute sint
              esse aute excepteur.
            </p>
            <h4>SARAH & LUKE</h4>
          </section>
          <img id="image" src={client} alt="" />
          <img className="slider" src={slider} alt="" />
        </div>
      </section>
      <section className="home-experience">
        <h2>HELPING COUPLES BRING TO LIFE THEIR WEDDING DREAMS</h2>
        <div>
          <h6>
            <span>12</span>
            <br />
            Years Experience
          </h6>
          <h6>
            <span>
              10<k>K</k>
            </span>
            <br />
            Photos Delivered
          </h6>
          <h6>
            <span>300</span>
            <br />
            Events Captured
          </h6>
        </div>
      </section>
      <section className="home-contact">
        <div className="contact-form">
          <h5 className="home-header-5">CONTACT</h5>
          <h2 className="home-header-2">Get in Touch</h2>
          <form ref={formRef} onSubmit={sendEmail}>
            <label htmlFor="name">
              <p>Name</p>
              <input type="text" name="user_name" />
            </label>
            <hr />
            <label htmlFor="email">
              <p>E-Mail</p>
              <input type="email" name="user_email" />
            </label>
            <hr />
            <label htmlFor="message">
              <p>Message</p>
              <textarea rows="5" cols="40" maxlength="200" name="message" />
            </label>
            <hr />
            <button type="submit">Send</button>
          </form>
        </div>
        <img src={contact} alt="" />
      </section>
    </div>
  );
};

export default Home;
