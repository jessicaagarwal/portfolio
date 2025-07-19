import React from 'react';

const Social = () => {
  return (
    <div className='home__social'>
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
  );
};

export default Social;
