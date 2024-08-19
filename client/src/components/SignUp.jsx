import React from "react";
import "../styles/SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup-box">
        <h1 className="title">QUIZZIE</h1>
        <div className="tabs">
          <button className="tab active">Sign Up</button>
          <button className="tab">Log In</button>
        </div>
        <form className="signup-form">
          <input type="text" placeholder="Name" className="input-field" />
          <input type="email" placeholder="Email" className="input-field" />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            className="input-field"
          />
          <button type="submit" className="signup-button">
            Sign-Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
