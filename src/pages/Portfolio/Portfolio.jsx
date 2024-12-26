import React from "react";
import "./Portfolio.css";
import Navbar from ".././Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";

import wedding1 from "../../assets/page4/wedding1.png";
import wedding2 from "../../assets/page4/wedding2.png";
import wedding3 from "../../assets/page4/wedding3.png";
import engagement1 from "../../assets/page4/engagement1.png";
import engagement2 from "../../assets/page4/engagement2.png";
import engagement3 from "../../assets/page4/engagement3.png";
import portrait1 from "../../assets/page4/portrait1.png";
import portrait2 from "../../assets/page4/portrait2.png";
import portrait3 from "../../assets/page4/portrait3.png";
import perfect from "../../assets/page4/perfect.png";

const Portfolio = () => {
  return (
    <div className="portfolio-container">
      <Navbar />
      <section className="header"></section>
      <section className="pfo-highlight">
        <h5 className="home-header-5"> portfolio </h5>
        <h2 className="home-header-2"> HIGHLIGHTED WORKS</h2>
        <div className="grids">
          <card>
            <img src={wedding1} alt="" />
            <h4>Sarah & Luke</h4>
            <h3>wedding</h3>
          </card>
          <card>
            <img src={wedding2} alt="" />
            <h4>Richard & Jane</h4>
            <h3>wedding</h3>
          </card>
          <card>
            <img src={wedding3} alt="" />
            <h4>Gareth & Eva</h4>
            <h3>wedding</h3>
          </card>
          <card>
            <img src={engagement1} alt="" />
            <h4>Sarah & Luke</h4>
            <h3>engagement</h3>
          </card>
          <card>
            <img src={engagement2} alt="" />
            <h4>Richard & Jane</h4>
            <h3>engagement</h3>
          </card>
          <card>
            <img src={engagement3} alt="" />
            <h4>Gareth & Eva</h4>
            <h3>engagement</h3>
          </card>
          <card>
            <img src={portrait1} alt="" />
            <h4>Sarah</h4>
            <h3>portrait</h3>
          </card>
          <card>
            <img src={portrait2} alt="" />
            <h4>Jane</h4>
            <h3>portrait</h3>
          </card>
          <card>
            <img src={portrait3} alt="" />
            <h4>Angeline</h4>
            <h3>portrait</h3>
          </card>
        </div>
        <Link to="/contact">
          <button>Get In Touch</button>
        </Link>
      </section>
      <section className="pfo-promise">
        <div>
          <h2>My Promise</h2>
          <p>
            I guarantee breathtaking wedding photos that perfectly capture the
            magic of your special day, or your money back
          </p>
        </div>
      </section>
      <section className="pfo-perfect">
        <div>
          <h3>You're Perfect</h3>
          <h2>Stay Beautiful</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur. Ac in bibendum pharetra
            justo nullam est placerat. Eget tortor lacus porta pellentesque duis
            velit habitant nisl dignissim.{" "}
          </p>
          <button>Enquire Now</button>
        </div>
        <img width="400px" src={perfect} alt="" />
      </section>
      <Footer/>
    </div>
  );
};

export default Portfolio;
