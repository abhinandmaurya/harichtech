import React from "react";
import "./About.css";
import img1 from "../../assets/img1.png"; // Background image
import img2 from "../../assets/img2.png"; // Overlay image
import { FaArrowDownLong } from "react-icons/fa6";

const About = () => {
  return (
    <div>
      <div className="heading-top">
        <h2>Know More</h2>
        <h1>About Us</h1>
      </div>
      <div className="about-container" id="about">
        <div className="background-image">
          <img src={img1} alt="Background" />
        </div>
        <div className="content-wrapper">
          <div className="overlay-image">
            <img src={img2} alt="Overlay" />
          </div>
          <div className="text-content">
            <h2>Know More</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
              vulputate libero et velit interdum, ac aliquet odio mattis. Class
              aptent taciti sociosqu ad litora torquent per conubia nostra, per
              inceptos himenaeos.
            </p>
            <button>
              Learn More <FaArrowDownLong className="icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
