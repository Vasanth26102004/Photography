import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";

import ig from "../../assets/svg/instagram.svg";
import fb from "../../assets/svg/facebook.svg";
import yt from "../../assets/svg/youtube.svg";
import twt from "../../assets/svg/twitter.svg";

const Footer = () => {
  return (
    <div className="footer-container">
      <ul className="footer-navbars">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/service">Service</Link>
        </li>
        <p id="logo">
          DURAI
          <span>photography</span>
        </p>
        <li>
          <Link to="/portfolio">Portfolio</Link>
        </li>
        <li>
          <Link to="/gallery">Gallery</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <p className="phara">
        Lorem ipsum dolor sit amet consectetur. Morbi volut tempus posuere
        viverra massa fames sed. Dignissim urisus et ac egestas dignissim.
      </p>
      <div className="social-img">
        <a href="https://facctbook.com">
          <img src={fb} alt="" />
        </a>
        <a href="https://www.instagram.com">
          <img src={ig} alt="" />
        </a>
        <a href="https://www.youtube.com">
          <img src={yt} alt="" />
        </a>
        <a href="https://www.twitter.com">
          <img src={twt} alt="" />
        </a>
      </div>
      <p>Developed by Vasanth</p>
      <p>Copyright &copy; 2024 DURAI Photography. All rights reserved.</p>
    </div>
  );
};

export default Footer;
