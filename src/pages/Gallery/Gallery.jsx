import React from "react";
import "./Gallery.css";
import Navbar from ".././Navbar/Navbar.jsx"

import gallery from "../../assets/page5/gallery.png";
import image1 from "../../assets/page5/image1.png";
import image2 from "../../assets/page5/image2.png";
import image3 from "../../assets/page5/image3.png";
import image4 from "../../assets/page5/image4.png";
import image5 from "../../assets/page5/image5.png";
import vector from "../../assets/page5/vector.png";
import work1 from "../../assets/page5/work1.png";
import work2 from "../../assets/page5/work2.png";
import work3 from "../../assets/page5/work3.png";
import work4 from "../../assets/page5/work4.png";

const Gallery = () => {
  return (
    <div className="gallery-container">
      <Navbar />
      <section className="header"></section>
      <section className="gallery-items">
        <h5 className="home-header-5"> gallery </h5>
        <div id="gallery-item1">
          <h2 className="home-header-2"> RACHEL & JONATHAN</h2>
          <div>
            <p>
              Date : <span> 28 July 2024</span>
            </p>
            <p>
              Category : <span> Wedding</span>
            </p>
          </div>
          <img id="gallery" src={gallery} alt="" />
          <h6>
            Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa
            mattis quam egestas egestas integer morbi. Lectus magnis accumsan
            nulla vulputate. Malesuada varius sagittis nec id tellus vitae
            adipiscing id. Et vitae sit urna aliquet sed arcu bibendum ut.
          </h6>
          <photos>
            <img src={image1} alt="139.33 x 200" />
            <img src={image2} alt="228.92 x 200" />
            <img src={image3} alt="228.92 x 200" />
            <img src={image4} alt="139.33 x 200" />
            <img src={image5} alt="400 x 200" />
          </photos>
        </div>
        <img id="vector" src={vector} alt=''/>
        <h1>More Works</h1>
      </section>
      <section className="gallery-work">
          <img src={work1} alt="" />
          <img src={work2} alt="" />
          <img src={work3} alt="" />
          <img src={work4} alt="" />
      </section>
    </div>
  );
};

export default Gallery;

/*
<div id="gallery-item1">
          <h2 className="home-header-2"> RACHEL & JONATHAN</h2>
          <div>
            <p>
              Date :<span>28 July 2024</span>
            </p>
            <p>
              Category :<span>Wedding</span>
            </p>
          </div>
          <img src={pic} alt="" />
          <p>
            Lorem ipsum dolor sit amet consectetur. Vitae nunc vitae massa
            mattis quam egestas egestas integer morbi. Lectus magnis accumsan
            nulla vulputate. Malesuada varius sagittis nec id tellus vitae
            adipiscing id. Et vitae sit urna aliquet sed arcu bibendum ut.
          </p>
          <photos>
          <img src={pic} alt="" />
          <img src={pic} alt="" />
          <img src={pic} alt="" />
          <img src={pic} alt="" />
          <img src={pic} alt="" />
          </photos>
        </div>
        */
