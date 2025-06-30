import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import MotionWrap from "../wrapper/MotionWrap.jsx";
import "./Testimonial.css";

const testimonialsData = [
  {
    feedback:
      "Jessica is a fantastic developer with a keen eye for detail. Her contributions to our project were invaluable.",
    name: "Sanjay Mehta",
    company: "Kalvium Mentor",
  },
  {
    feedback:
      "It’s rare to find someone so dedicated and passionate about building user-friendly applications.",
    name: "Ritika Sharma",
    company: "Teammate",
  },
  {
    feedback:
      "Her design sense combined with her technical skills makes her a true full-stack asset.",
    name: "Amit Verma",
    company: "Project Reviewer",
  },
];

const brandsData = [
  { imgUrl: "/brands/react.svg", name: "React" },
  { imgUrl: "/brands/figma.svg", name: "Figma" },
  { imgUrl: "/brands/firebase.svg", name: "Firebase" },
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <section className="testimonial container section" id="testimonial">
      <h2 className="section__title">Testimonials</h2>

      {testimonialsData.length > 0 && (
        <>
          <div className="app__testimonial-item app__flex">
            <div className="app__testimonial-content">
              <p className="p-text">{testimonialsData[currentIndex].feedback}</p>
              <div>
                <h4 className="bold-text">{testimonialsData[currentIndex].name}</h4>
                <h5 className="p-text">{testimonialsData[currentIndex].company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === 0
                    ? testimonialsData.length - 1
                    : currentIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  currentIndex === testimonialsData.length - 1
                    ? 0
                    : currentIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brandsData.map((brand, index) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={index}
          >
            <img src={brand.imgUrl} alt={brand.name} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MotionWrap(Testimonial, "app__testimonial");
