import React, { useState } from "react";
import "./Navbar.css";
import close from "../../assets/svg/close.svg";
import desc from "../../assets/svg/menu.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(close);

  const dropdown_toggle = () => {
    setDropdown(dropdown === desc ? close : desc);

    if (dropdown === close) {
      return document.querySelector(".openclose").classList.add("active");
    } else {
      return document.querySelector(".openclose").classList.remove("active");
    }
  };

  return (
    <>
      <div className="navbar-container">
        <ul>
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
      </div>
      <div className="navbar-container-mobile">
        <div className="openclose">
          <ul>
            <Link to="/">
              <li>Home</li>
            </Link>
            <Link to="/about">
              <li>About</li>
            </Link>
            <Link to="/service">
              <li>Service</li>
            </Link>
            <Link to="/portfolio">
              <li>Portfolio</li>
            </Link>
            <Link to="/gallery">
              <li>Gallery</li>
            </Link>
            <Link to="/contact">
              <li>Contact</li>
            </Link>
          </ul>
          <img src={dropdown} alt="" onClick={dropdown_toggle} />
        </div>
        <p id="logo">
          DURAI
          <span>photography</span>
        </p>
      </div>
    </>
  );
};

export default Navbar;
