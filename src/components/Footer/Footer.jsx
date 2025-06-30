import React from "react";
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Jessica</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>

          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>

          <li>
            <a href="#work" className="footer__link">
              Portfolio
            </a>
          </li>
        </ul>

        <div className="footer__social">
          <a href="https://www.instagram.com/jess.iiica_/" className="home__social-icon" target="blank">
            <i className="bx bxl-instagram"></i>
          </a>

          <a href="https://www.linkedin.com/in/jessica-agarwal-00b6b7225/" className="home__social-icon" target="blank">
            <i className="bx bxl-linkedin"></i>
          </a>

          <a
            href="https://github.com/jessicaagarwal"
            className="home__social-icon"
            target="blank"
          >
            <i className="bx bxl-github"></i>
          </a>
        </div>

        <span className="footer__copy">
            &#169; Jessica Agarwal. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
