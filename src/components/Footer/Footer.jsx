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
            {/* LeetCode */}
            <a href="https://leetcode.com/jessicaagarwal/" className='home__social-icon' target="_blank" rel="noreferrer">
              <img src="/assets/leetcode.svg" alt="LeetCode" className="custom-icon" />
            </a>
      
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/jessica-agarwal-00b6b7225/" className='home__social-icon' target="_blank" rel="noreferrer">
              <img src="/assets/linkedin.svg" alt="LeetCode" className="custom-icon" />
            </a>
      
            {/* GitHub */}
            <a href="https://github.com/jessicaagarwal" className='home__social-icon' target="_blank" rel="noreferrer">
              <img src="/assets/githublogo.svg" alt="LeetCode" className="custom-icon" />
            </a>
      
            {/* Figma */}
            <a href="https://www.figma.com/@jessicaagarwal" className='home__social-icon' target="_blank" rel="noreferrer">
              <img src="/assets/figmalogo.svg" alt="Figma" className="custom-icon" />
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
