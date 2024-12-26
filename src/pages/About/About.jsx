import React from "react";
import "./About.css";
import Navbar from ".././Navbar/Navbar.jsx";
import Footer from ".././Footer/Footer.jsx";
import { Link } from "react-router-dom";

import profile from "../../assets/page2/profile.png";
import image1 from "../../assets/page2/image1.png";
import image2 from "../../assets/page2/image2.png";
import image3 from "../../assets/page2/image3.png";
import image4 from "../../assets/page2/image4.png";
import fact1 from "../../assets/page2/fact1.png";
import fact2 from "../../assets/page2/fact2.png";
import fact3 from "../../assets/page2/fact3.png";
import bio_photo1 from "../../assets/page2/bio-photo1.png";
import bio_photo2 from "../../assets/page2/bio-photo2.png";
import vector from "../../assets/page2/vector.png";

const About = () => {
  return (
    <div className="about-container">
      <Navbar />
      <section className="header"></section>
      <section className="abt-story">
        <h5 className="home-header-5">About</h5>
        <h2 className="home-header-2">MY STORY</h2>
        <div>
          <img id="auther" src={profile} alt="Image" />
          <content>
            <p>
              Nostrud nulla non est ea ut mollit incididunt aliqua mollit ipsum.
              Nulla ullamco consectetur sint ad est. Anim nostrud excepteur in
              reprehenderit. Sit incididunt sit cillum mollit duis in.Velit qui
              ut cupidatat aliquip tempor tempor et minim aliquip reprehenderit
              occaecat labore aliquip aliqua. In proident non velit ex cupidatat
              cillum.
              <br />
              <br />
              Sit incididunt sit cillum mollit duis in.Velit qui ut cupidatat
              aliquip tempor tempor et minim aliquip reprehenderit occaecat
              labore aliquip aliqua. Sit incididunt sit cillum mollit duis
              in.Velit qui ut cupidatat aliquip tempor tempor et minim aliquip
              reprehenderit occaecat labore aliquip aliqua.
              <br />
              <br />
              Commodo nostrud cupidatat labore consequat tempor dolor anim irure
              ut ipsum elit sint. Ullamco ut eiusmod id cupidatat consectetur
              occaecat esse nostrud in laboris non. Sit incididunt sit cillum
              mollit duis in.Velit qui ut cupidatat aliquip tempor tempor et
              minim aliquip reprehenderit occaecat labore aliquip aliqua.
            </p>
            <img id="vector" width="100px" src={vector} alt="Image" />
            <Link to="/portfolio">
              <button>View Portfolio</button>
            </Link>
          </content>
        </div>
      </section>
      <section className="abt-images">
        <img src={image1} alt="Image" />
        <img src={image2} alt="Image" />
        <img src={image3} alt="Image" />
        <img src={image4} alt="Image" />
      </section>
      <section className="abt-facts">
        <h5 className="home-header-5">GET TO KNOW Me</h5>
        <h2 className="home-header-2">A Few Facts About Myself</h2>
        <div className="grids">
          <img width="250px" src={fact1} alt="Image" />
          <div>
            <h1>01</h1>
            <hr />
            <p>
              Do commodo eiusmod voluptate reprehenderit consequat nisi
              consectetur laborum aliqua. Duis proident nulla ipsum laboris do
              ipsum consequat excepteur elit. Do commodo eiusmod voluptate
              reprehenderit consequat nisi consectetur laborum aliqua.
            </p>
          </div>
          <img width="250px" src={fact2} alt="Image" />
          <div>
            <h1>02</h1>
            <hr />
            <p>
              Do commodo eiusmod voluptate reprehenderit consequat nisi
              consectetur laborum aliqua. Duis proident nulla ipsum laboris do
              ipsum consequat excepteur elit. Do commodo eiusmod voluptate
              reprehenderit consequat nisi consectetur laborum aliqua.
            </p>
          </div>
          <img width="250px" src={fact3} alt="Image" />
          <div>
            <h1>03</h1>
            <hr />
            <p>
              Do commodo eiusmod voluptate reprehenderit consequat nisi
              consectetur laborum aliqua. Duis proident nulla ipsum laboris do
              ipsum consequat excepteur elit. Do commodo eiusmod voluptate
              reprehenderit consequat nisi consectetur laborum aliqua.
            </p>
          </div>
        </div>
      </section>
      <section className="abt-memory">
        <div>
          <h5 className="home-header-5">crafting memories</h5>
          <h2 className="home-header-2">Your Story, My Lens</h2>
          <p>
            Your wedding day is a once-in-a-lifetime event, and choosing the
            right photographer is essential to preserving its magic for years to
            come. I would be honored to be a part of your special day.
          </p>
          <Link to="/contact">
            <button>Book Now</button>
          </Link>
        </div>
        <img id="image1" src={bio_photo1} alt="Image" />
        <img id="image2" src={bio_photo2} alt="Image" />
      </section>
      <Footer/>
    </div>
  );
};

export default About;
