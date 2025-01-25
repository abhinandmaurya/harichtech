import React from "react";
import "./JoinCommunity.css";

const JoinCommunity = () => {
  return (
    <div className="join-container">
      <div className="join-content">
        <h1>Join Our Community</h1>
        <p>Connect with like-minded professionals</p>
      </div>
      <div className="join-form">
        <input type="email" placeholder="Enter your email" />
        <button>Send</button>
      </div>
    </div>
  );
};

export default JoinCommunity;
