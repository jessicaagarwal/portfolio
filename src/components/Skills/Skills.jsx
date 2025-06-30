import React from 'react';
import './Skills.css';

const skills = [
  { name: 'JavaScript', icon: '/assests/javaScript.svg' },
  { name: 'Java', icon: '/assests/java.svg' },
  { name: 'Python', icon: '/assests/python.svg' },
  { name: 'HTML', icon: '/assests/html.svg' },
  { name: 'CSS', icon: '/assests/css.svg' },
  { name: 'React', icon: '/assests/react.svg' },
  { name: 'Node js', icon: '/assests/nodejs.svg' },
  { name: 'Express.js', icon: '/assests/express.svg' },
  { name: 'MongoDB', icon: '/assests/mongodb.svg' },
  { name: 'Firebase', icon: '/assests/firebase.svg' },
  { name: 'Figma', icon: '/assests/figma.svg' },
  { name: 'Github', icon: '/assests/github.svg' },
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
        {/* // EXPERIENCE SECTION COMMENTED OUT */}
        
        {/* <div className="app__skills-exp">
          {experiences.map((experience) => (
            <motion.div
              className="app__skills-exp-item"
              key={experience.year}
            >
              <div className="app__skills-exp-year">
                <p className="bold-text">{experience.year}</p>
              </div>
              <motion.div className="app__skills-exp-works">
                {experience.works.map((work) => (
                  <React.Fragment key={work.name + work.company}>
                    <motion.div
                      whileInView={{ opacity: [0, 1] }}
                      transition={{ duration: 0.5 }}
                      className="app__skills-exp-work"
                      data-tip
                      data-for={work.name}
                    >
                        <i className='bx bx-badge-check'></i>
                      <h4 className="bold-text">{work.name}</h4>
                      <p className="p-text">{work.company}</p>
                    </motion.div>
                    {/* <ReactTooltip
                      id={work.name}
                      effect="solid"
                      arrowColor="#fff"
                      className="skills-tooltip"
                    >
                      {work.desc}
                    </ReactTooltip> */}
                  {/* </React.Fragment> */}
                {/* ))} */}
              {/* </motion.div> */}
            {/* </motion.div> */}
          {/* // ))} */}
        {/* </div> */}
         {/* }
        // END EXPERIENCE SECTION */}
      </div>
    </section>
  );
};

export default Skills;
  
