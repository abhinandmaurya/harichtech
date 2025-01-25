import React from "react";
import "./Hero.css";
import website from "../../assets/website.png";
import app from "../../assets/app.png";
import { FaArrowDownLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="hero" id="hero">
      <h1> Thinking The High Quality</h1>
      <h1>
        <span>
          Websites
          <img src={website} alt="websiteimage" />
        </span>
        and{" "}
        <span>
          App <img src={app} alt="appimage" />
        </span>
      </h1>
      <p>
        Harich Tech is an all-new stylish Website and App For your services and
        <br />
        projects that can show you things, awareness, drive traffic, connect
        with <br /> customers.
      </p>
      <button className="hero-btn">
        Learn More <FaArrowDownLong className="icon" />
      </button>
    </div>
  );
};

export default Hero;
