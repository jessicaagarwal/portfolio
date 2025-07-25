import React, { useState } from "react";
import { AiFillEye, AiFillGithub } from "react-icons/ai";
import { motion } from "framer-motion";
import MotionWrap from '../wrapper/MotionWrap.jsx';
import './Work.css';

const Work = () => {
  const works = [
    {
      title: "HRX – Flexi Workforce Hub",
      description:
        "Full-stack workforce & HR platform: role-based access, JWT + Google OAuth auth, employee records, leave & payroll modules, Cloudinary uploads.",
      projectLink: "https://hr-hrx.netlify.app/",
      codeLink: "https://github.com/jessicaagarwal/S64_Jessica_Capstone_HRX",
      imgUrl: "/projects/hrx.png",
      tags: ["Web App", "React JS", "UI/UX"],
    },
    {
      title: "AI Assistant Suite",
      description:
        "Multi-tool build: Chatbot, Summarizer, JSON Extractor. Built in React + Node; LLM API integration; packaged for fast demos and portfolio use.",
      projectLink: "https://ai-assistant-suite.streamlit.app/", 
      codeLink: "https://github.com/jessicaagarwal/ai-assistant-suite",
      imgUrl: "/projects/ai-suite.png",
      tags: ["Web App", "React JS"],
    },
    {
      title: "E‑Commerce Application",
      description:
        "MERN e‑commerce app with PayPal flow, product catalog, cart, order flow, protected routes, and responsive UI with Redux state management.",
      projectLink: "https://github.com/jessicaagarwal/e-commerce-application",
      codeLink: "https://github.com/jessicaagarwal/e-commerce-application",
      imgUrl: "/projects/ecommerce.png",
      tags: ["Web App", "React JS"],
    },
    {
      title: "Personal Portfolio Website",
      description:
        "This site! Built with React, Framer Motion, and custom cursor interactions. Deployed on Vercel; designed to be fast + recruiter friendly.",
      projectLink: "https://portfolio-alpha-topaz-66.vercel.app/",
      codeLink: "https://github.com/jessicaagarwal/portfolio",
      imgUrl: "/projects/portfolio.png",
      tags: ["UI/UX", "React JS"],
    },
    {
      title: "Conspiracy Theory Generator",
      description:
        "Fun hackathon-style mini app that spins out random conspiracy prompts using API calls. Quick build to test creative UX and form handling.",
      projectLink: "https://s64-conspiracy-theoryy.pages.dev/",
      codeLink: "https://github.com/jessicaagarwal/S64_Conspiracy_Theory",
      imgUrl: "/projects/conspiracy.png",
      tags: ["Web App", "React JS"],
    },
  ];

  const [filterWork, setFilterWork] = useState(works);
  const [activeFilter, setActiveFilter] = useState("All");
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 });

  const handleWorkFilter = (item) => {
    setActiveFilter(item);
    setAnimateCard({ y: 100, opacity: 0 }); // fade out

    setTimeout(() => {
      setAnimateCard({ y: 0, opacity: 1 }); // fade in

      if (item === "All") {
        setFilterWork(works);
      } else {
        setFilterWork(works.filter((work) => work.tags.includes(item)));
      }
    }, 500);
  };

  return (
    <>
      <section className="work section" id="work">
        <h2 className="head-text">
          My Creative
          <span> Portfolio </span>
          Section
        </h2>

        <div className="app__work-filter">
          {["UI/UX", "Web App", "React JS", "All"].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${
                activeFilter === item ? "item-active" : ""
              }`}
            >
              {item}
            </div>
          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5 }}
          className="app__work-portfolio"
        >
          {filterWork.map((work, index) => (
            <div className="app__work-item app__flex" key={index}>
              <div className="app__work-img app__flex">
                <img src={work.imgUrl} alt={work.title} />

                <motion.div
                  whileHover={{ opacity: [0, 1] }}
                  transition={{
                    duration: 0.25,
                    ease: "easeInOut",
                    staggerChildren: 0.5,
                  }}
                  className="app__work-hover app__flex"
                >
                  <a href={work.projectLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>

                  <a href={work.codeLink} target="_blank" rel="noreferrer">
                    <motion.div
                      whileInView={{ scale: [0, 1] }}
                      whileHover={{ scale: [1, 0.9] }}
                      transition={{ duration: 0.25 }}
                      className="app__flex"
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </motion.div>
              </div>

              <div className="app__work-content app__flex">
                <h4 className="bold-text">{work.title}</h4>
                <p className="p-text" style={{ marginTop: 10 }}>
                  {work.description}
                </p>

                <div className="app__work-tag app__flex">
                  <p className="p-text">{work.tags[0]}</p>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </section>
    </>
  );
};

export default MotionWrap(Work, "app__works");
