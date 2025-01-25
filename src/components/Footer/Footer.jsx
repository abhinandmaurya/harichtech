import React from "react";
import "./Footer.css"; // Import your CSS file for styling
import logo from "../../assets/logo.png";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa"; // Icons for contact info
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa"; // Icons for social media

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <img src={logo} alt="logo" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            incaptos himenaeos.
          </p>
        </div>
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/services">Services</a>
            </li>
            <li>
              <a href="/our-work">Our Work</a>
            </li>
            <li>
              <a href="/about-us">About Us</a>
            </li>
            <li>
              <a href="/blogs">Blogs</a>
            </li>
            <li>
              <a href="/career">Career</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>
            <FaMapMarkerAlt className="icon" /> Shiip 3, 3rd Floor, Sindhu
            Bhavan Road,
          </p>
          <p>
            <span className="icon-space"></span> Shiip Circle, Above Bajarang
            Grocery,
          </p>
          <p>
            <span className="icon-space"></span> Bodsidee, Ahmedabad, Gujarat
            380054.
          </p>
          <p>
            <FaPhone className="icon" /> +91-8200 66 5684
          </p>
          <p>
            <FaEnvelope className="icon" /> info@harichtech.com
          </p>
        </div>
        <div className="footer-section">
          <h3>Social Media</h3>
          <div className="social-media">
            <a href="https://facebook.com">
              <FaFacebook className="social-icon" />
            </a>
            <a href="https://twitter.com">
              <FaTwitter className="social-icon" />
            </a>
            <a href="https://linkedin.com">
              <FaLinkedin className="social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright 2024 Harichtech | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
