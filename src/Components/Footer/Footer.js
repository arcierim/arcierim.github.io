import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-info">
        <h1>Mateo Arcieri</h1>
      </div>
      <div className="footer-contact">
        <h3>You can contact me on these links</h3>
      </div>
      <div className="footer-sns">
        <div className="design-by">Designed by Mateo Arcieri</div>
        <div className="sns-links">
          <a href="https://www.linkedin.com/in/mateo-arcieri-85082b22a" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin linkedin"></i>
          </a>
          <a href="https://twitter.com/MateoArcieri" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter twitter"></i>
          </a>
          <a href="https://github.com/arcierim" target="_blank" rel="noreferrer">
            <i className="fab fa-github github"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
