import React, { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";
import MotionWrap from "../wrapper/MotionWrap.jsx";
import "./Testimonial.css";

const testimonialsData = [
  {
    feedback:
      "Jessica is not just a good candidate, but a great one for the SDE role. Her problem-solving skills are sharp, and she has a strong grasp over DSA concepts. I believe she has a bright future ahead in software development. She meets the expectations of the SDE role quite well — always willing to go the extra mile to ensure her tasks are completed, if not ahead of time, then with precision and accuracy. She is a bright individual with a well-rounded mindset and a solid technical foundation.",
    name: "Ayan Chowdhury",
    company: "Kalvium Mentor",
  },
  {
    feedback:
      "It has been a pleasure working with Jessica, who has consistently demonstrated strong skills and professionalism as a web developer. Her ability to understand project requirements, write clean and efficient code, and create visually appealing and responsive web interfaces is truly commendable.",
    name: "Keshav Khandelwal",
    company: "AWS Cloud Captain, Hackathon Team Lead",
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
