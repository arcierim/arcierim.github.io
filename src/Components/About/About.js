import React from "react";
import "./About.css";
import Image from "./about.jpg"

const About = () => {
  return (
    <div className="about-container">
      <div className="about-desc">
        <h3>Let me start by presenting myself</h3>
        <p>
          I'm a college student from the Universidad Del Norte on the system engineer career who has knowledge on React, javascript and Java
        </p>
      </div>
      <div className="about-img">
        <img
          src={Image}
          alt="about"
        />
      </div>
    </div>
  );
};

export default About;
