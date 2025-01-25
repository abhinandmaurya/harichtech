import React, { useState, useEffect } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { FaArrowDownLong } from "react-icons/fa6";
import search from "../../assets/searchicon.png";
const Navbar = () => {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) {
          currentSection = section.getAttribute("id");
        }
      });
      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <a href="/" className="logo">
          <img src={logo} alt="HARICH Technologies" />
        </a>
        <ul className="nav-links">
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#ourservice"
              className={activeSection === "ourservice" ? "active" : ""}
            >
              Services
            </a>
          </li>
          <li>
            <a
              href="#ourwork"
              className={activeSection === "ourwork" ? "active" : ""}
            >
              Our Work
            </a>
          </li>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About Us
            </a>
          </li>
          <li>
            <a
              href="#blog"
              className={activeSection === "blog" ? "active" : ""}
            >
              Blog
            </a>
          </li>
          <li>
            <a
              href="#careers"
              className={activeSection === "careers" ? "active" : ""}
            >
              Careers
            </a>
          </li>
        </ul>
        <div className="actions">
          <a href="/search" className="search-icon">
            <img src={search} alt="search-icon" />
          </a>
          <button className="get-in-touch-button">
            Get In Touch
            <FaArrowDownLong className="icon" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
