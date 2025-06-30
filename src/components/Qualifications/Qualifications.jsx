import React, { useState } from "react";
import "./Qualifications.css";
import MotionWrap from '../wrapper/MotionWrap.jsx';

const Qualifications = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="qualification section">
      <h2 className="title section__title">Qualification</h2>
      <span className="section__subtitle">My Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div
            className={
              toggleState === 1
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(1)}
          >
            <i className="uil uil-graduation-cap"></i> Education
          </div>

          <div
            className={
              toggleState === 2
                ? "qualification__button qualification__active button--flex"
                : "qualification__button button--flex"
            }
            onClick={() => toggleTab(2)}
          >
            <i className="uil uil-briefcase-alt"></i> Experience
          </div>
        </div>

        <div className="qualification__section">
          {/* Education */}
          <div
            className={
              toggleState === 1
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  B.Tech Computer Science Engineering with SPE (Kalvium)
                </h3>
                <span className="qualification__subtitle">
                  JECRC University, Jaipur
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 – Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Senior Secondary Schooling</h3>
                <span className="qualification__subtitle">
                  G.D. Goenka Public School, Kolkata
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2022-2024
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Junior Schooling
                </h3>
                <span className="qualification__subtitle">
                  Agrasain Balika Siksha Sadan, Kolkata
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2010-2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div
            className={
              toggleState === 2
                ? "qualification__content qualification__content-active"
                : "qualification__content"
            }
          >
            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">
                  Smart India Hackathon Prelims Finalist
                </h3>
                <span className="qualification__subtitle">
                  Virtual Herbal Garden Project
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <div className="qualification__line"></div>
              </div>
            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Personal Projects</h3>
                <span className="qualification__subtitle">
                  HRX, E-commerce App, more
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 – Present
                </div>
              </div>
            </div>

            <div className="qualification__data">
              <div>
                <h3 className="qualification__title">Open Source Contributions</h3>
                <span className="qualification__subtitle">
                  GitHub Projects
                </span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i> 2024 – Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                {/* No line here since it's the last item */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MotionWrap(Qualifications);
