import React from 'react';
import './Skills.css';

const skills = [
  // Core Languages
  { name: 'JavaScript', icon: '/assets/javaScript.svg' },
  { name: 'Java', icon: '/assets/java.svg' },
  { name: 'Python', icon: '/assets/python.svg' },
  { name: 'HTML5', icon: '/assets/html.svg' },
  { name: 'CSS3', icon: '/assets/css.svg' },

  // Frontend
  { name: 'React.js', icon: '/assets/react.svg' },
  { name: 'Redux Toolkit', icon: '/assets/redux.svg' },
  { name: 'Zustand', icon: '/assets/zustand.svg' },
  { name: 'TailwindCSS', icon: '/assets/tailwindcss.svg' },

  // Backend & Databases
  { name: 'Node.js', icon: '/assets/nodejs.svg' },
  { name: 'Express.js', icon: '/assets/express.svg' },
  { name: 'MongoDB', icon: '/assets/mongodb.svg' },
  { name: 'Firebase Auth', icon: '/assets/firebase.svg' },
  { name: 'Cloudinary', icon: '/assets/cloudinary.svg' },

  // Tools & Design
  { name: 'Docker', icon: '/assets/docker.svg' },
  { name: 'Git & GitHub', icon: '/assets/github.svg' },
  { name: 'Figma', icon: '/assets/figma.svg' },

  // AI & Integrations
  { name: 'LLM API', icon: '/assets/ai.svg' }, // Add ai.svg
];

const Skills = () => {
  return (
    <section className='skills section' id="skills">
      <h2 className="head-text section__title">Skills</h2>
      <div className="app__skills-container section">
        <div className="app__skills-list">
          {skills.map((skill) => (
            <div className="app__skills-item app__flex" key={skill.name}>
              <div className="skill-icon-bg">
                <img src={skill.icon} alt={skill.name} className="skill-icon" />
              </div>
              <p className="p-text skill-name">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
