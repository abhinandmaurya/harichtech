import React from "react";
import "./Testimonials.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const Testimonials = () => {
  return (
    <div className="testimonials-container">
      <h2>Testimonials</h2>
      <h3>What our client says</h3>
      <div className="testimonial-card">
        <div className="profile-image">
          <img
            src="https://s3-alpha-sig.figma.com/img/d84e/4fe6/d7fcea13ce45088b21bfe5428d1c2896?Expires=1738540800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cWO-ryxCm8YFnECye8geQTdBuY2oWnYlMGJ3bsAsH99BKlj7NKvG1qnqUicwfmhbbnk6bIQKrqlhlIJeTm7NXJOrnyfx9vb3eiiM5eVRHp4ZxwqVv6j0TK-l8M~eJ8ozydL0OHk-J4U9QrSrvPv5MaLTg3B2peP509exyDA0eAnbtan6AjD5jPkvhi~Pssxmg3OvC4VHl79px9fAzL7IKAWLdpiChOQ7sk-HsRejWcPWbGyOULk0DXYAP~WCqzvDbfAy1Mrlpl39KCBi0YNTdbzRzlKnBX9nB-3wf4fPOzmuS8AoRlEVBJFdel8HU0TTOPW4nriMhZgtIoJjT7TnZQ__"
            alt="Profile"
          />
        </div>
        <p className="testimonial-text">
          "Be genuine in your assessment, and provide constructive feedback to
          benefit both potential customers and the company providing the product
          or service."
        </p>
        <div className="author-info">
          <p className="author-name">Jacqueline Miller</p>
          <p className="author-title">CEO of an eduport</p>
        </div>
        <div className="service-footer">
          <button className="footer-button left-button">
            <FontAwesomeIcon icon={faChevronLeft} />
          </button>
          <button className="footer-button right-button">
            <FontAwesomeIcon icon={faChevronRight} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
