import React from "react";
import { EduData } from "../components/Data";
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
            src={require("../assets/img/about_me.jpg")}
            alt="about_me.jpg"
            className="about__img"
          />
          <div className="about__data">
            <p className="about__description">
              I have keen interest in problem solving and software development
              technologies. I consistently work on my technical skills and
              knowledge to give better contribution to the society and
              organization. also I have wide range of experience in app and web
              development.
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
                <span className="about__info-title">2</span>
                <span className="about__info-name"> Internship </span>
              </div>
            </div>
            <div className="about__buttons">
              <a
                download=""
                href={require("../assets/pdf/Sujal's Resume.pdf")}
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
