import React from "react";
import "./Service.css";
import Navbar from ".././Navbar/Navbar.jsx";
import Footer from "../Footer/Footer.jsx";
import { Link } from "react-router-dom";

import wedding from "../../assets/page3/wedding.png";
import engagement from "../../assets/page3/engagement.png";
import reception from "../../assets/page3/reception.png";
import vector from "../../assets/page2/vector.png";
import process1 from "../../assets/page3/process1.png";
import process2 from "../../assets/page3/process2.png";
import process3 from "../../assets/page3/process3.png";
import process4 from "../../assets/page3/process4.png";
import process5 from "../../assets/page3/process5.png";
import plus from "../../assets/page3/plus.png";
import quality1 from "../../assets/page3/quality1.png";
import quality2 from "../../assets/page3/quality2.png";

const Service = () => {
  return (
    <div className="services-container">
      <Navbar />
      <section className="header"> </section>
      <section className="svc-cards">
        <h5 className="home-header-5"> FAQ </h5>
        <h2 className="home-header-2"> Any Queries ? </h2>
        <div>
          <hr />
          <card>
            <img src={wedding} alt="Image" />
            <h4> Wedding </h4>
            <ul>
              <li> 500 + High Quality Photos </li> <li> 6 Hours HD Footage </li>
              <li> * Additional Photographer subject to Charge </li>
              <li> * Videographer subject to Charge </li>
            </ul>
            <p>
              per session <span> $799 </span>
            </p>
          </card>
          <hr />
          <card>
            <img src={engagement} alt="Image" />
            <h4> Reception </h4>
            <ul>
              <li> 500 + High Quality Photos </li> <li> 6 Hours HD Footage </li>
              <li> * Additional Photographer subject to Charge </li>
              <li> * Videographer subject to Charge </li>
            </ul>
            <p>
              per session <span> $799 </span>
            </p>
          </card>
          <hr />
          <card>
            <img src={reception} alt="Image" />
            <h4> Engagement </h4>
            <ul>
              <li> 300 High Quality Photos </li> <li> 3 Hours HD Footage </li>
              <li> * Additional Photographer subject to Charge </li>
              <li> * Videographer subject to Charge </li>
            </ul>
            <p>
              per session <span> $799 </span>
            </p>
          </card>
          <hr />
        </div>
        <Link to="/contact">
          <button> Get in Touch </button>
        </Link>
      </section>
      <section className="svc-celebrate">
        <img src={vector} alt="Image" />
        <h2 className="home-header-2">
          Celebrate your love with stunning images that will be cherished for a
          lifetime
        </h2>
      </section>
      <section className="svc-process">
        <h5 className="home-header-5"> PROCESS </h5>
        <h2 className="home-header-2"> What to Expect ? </h2>
        <div className="grids">
          <img width="250px" src={process1} alt="Image" />
          <text>
            <h1> 01 </h1> <hr />
            <h6> Breacking the Ice </h6>
            <p>
              Do commodo eiusmod voluptate reprehenderit consequat nisi
              consectetur laborum aliqua.Duis proident nulla ipsum laboris do
              ipsum consequat excepteur elit.
            </p>
          </text>
          <img width="250px" src={process2} alt="Image" />
          <text>
            <h1> 02 </h1> <hr />
            <h6> Breacking the Ice </h6>
            <p>
              Do commodo eiusmod voluptate reprehenderit consequat nisi
              consectetur laborum aliqua.Duis proident nulla ipsum laboris do
              ipsum consequat excepteur elit.
            </p>
          </text>
          <img width="250px" src={process3} alt="Image" />
          <text>
            <h1> 03 </h1> <hr />
            <h6> Breacking the Ice </h6>
            <p>
              Do commodo eiusmod voluptate reprehenderit consequat nisi
              consectetur laborum aliqua.Duis proident nulla ipsum laboris do
              ipsum consequat excepteur elit.
            </p>
          </text>
          <img width="250px" src={process4} alt="Image" />
          <text>
            <h1> 04 </h1> <hr />
            <h6> Breacking the Ice </h6>
            <p>
              Do commodo eiusmod voluptate reprehenderit consequat nisi
              consectetur laborum aliqua.Duis proident nulla ipsum laboris do
              ipsum consequat excepteur elit.
            </p>
          </text>
          <img width="250px" src={process5} alt="Image" />
        </div>
      </section>
      <section className="svc-faq">
        <h5 className="home-header-5"> FAQ </h5>
        <h2 className="home-header-2"> Any Queries ? </h2>
        <div className="svc-qst">
          <p>
            <img src={plus} alt="" />
            What is your photography style ?
          </p>
          <hr />
          <p>
            <img src={plus} alt="" />
            how far in advance can should we boo your services ?
          </p>
          <hr />
          <p>
            <img src={plus} alt="" />
            do you require a deposit, and what are your payment terms ?
          </p>
          <hr />
          <p>
            <img src={plus} alt="" />
            can we customize a photography package to fit your needs ?
          </p>
          <hr />
          <p>
            <img src={plus} alt="" />
            how soon after the event will i recieve your photos ?
          </p>
          <hr />
        </div>
      </section>
      <section className="svc-quality">
        <img id="outer" width="200px" src={quality1} alt="" />
        <div>
          <h2> Quality Service </h2>
          <p>
            On your big day, you can count on me to turnfleeting momonts into
            timeless treasures you will cherish for generations.
          </p>
          <button> Enquire Now </button>
          <img height="220px" src={quality2} alt="" />
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Service;
