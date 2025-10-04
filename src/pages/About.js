import React from "react";
import { EduData, ServicesData } from "../components/Data";
import EduItems from "../components/EduItems";

const newEduItems = (props) => {
  return (
    <EduItems
      key={props.id}
      title={props.title}
      subtitle={props.subtitle}
      marks={props.marks}
      duration={props.duration}
      rounder={props.rounder}
      line={props.line}
    />
  );
};

const About = () => {
  return (
    <>
      <section className="about section" id="about">
        <h2 className="section__title">About Me</h2>
        <span className="section__subtitle">My introduction</span>

        <div className="about__container container grid">
          <img
            src={require("../assets/img/about_me.webp")}
            alt="about_me.webp"
            className="about__img"
          />
          <div className="about__data">
            <p className="about__description">
              AI-driven Full Stack Software Engineer with 2 years of experience in developing and optimizing scalable web applications using
              Angular, React.js, Node.js, and TypeScript. Strong problem-solving skills demonstrated through solving 300+ coding challenges on
              LeetCode. Experienced in integrating AI tools to enhance workflows, achieving up to 80% reduction in code complexity and 10x
              faster load times. 
            </p>
            <div className="about__info">
              <div>
                <span className="about__info-title">5+</span>
                <span className="about__info-name"> Projects </span>
              </div>
              <div>
                <span className="about__info-title">10+</span>
                <span className="about__info-name"> Certifications </span>
              </div>
              <div>
                <span className="about__info-title">2 Years</span>
                <span className="about__info-name"> Experience </span>
              </div>
            </div>
            <div className="about__buttons">
              <a
                download="Resume of Sujal Lakhani"
                href={require("../assets/pdf/Resume of Sujal Lakhani.pdf")}
                className="button button--flex"
              >
                Download Resume
                <i className="uil uil-download-alt button__icon"></i>
              </a>
            </div>
          </div>
        </div>

        <section className="qualification section">
          <h2 className="section__title">Educational Qualification</h2>
          <span className="section__subtitle">My personal journey</span>
          <div className="qualification__container container">
            <div className="qualification__sections">
              <div className="qualification__content">
                {EduData.map(newEduItems)}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
};

export default About;
