import React from "react";
import aboutMeMonoImg from "../assets/img/about_me_mono.png";
import resumePdf from "../assets/pdf/Resume of Sujal Lakhani.pdf";

const About = () => {
  return (
    <section className="about section" id="about">
      <h2 className="section__title">About Me</h2>
      <span className="section__subtitle">My introduction</span>

      <div className="about__container container grid">
        {/* Left Column - Monochromatic Work Workspace Illustration */}
        <div data-reveal className="grid" style={{ gap: "2.5rem", justifyItems: "center" }}>
          <div className="about__img-wrapper glass-card">
            <img
              src={aboutMeMonoImg}
              alt="Sujal Lakhani"
              className="about__img"
            />
          </div>
        </div>

        {/* Right Column - Core Profile Data */}
        <div data-reveal className="about__data delay-150">
          <p className="about__description">
            AI-driven Full Stack Software Engineer with 2 years of experience in developing and optimizing scalable web applications using
            Angular, React.js, Node.js, and TypeScript. Strong problem-solving skills demonstrated through solving 300+ coding challenges on
            LeetCode. Experienced in integrating AI tools to enhance workflows, achieving up to 80% reduction in code complexity and 10x
            faster load times.
          </p>

          <div className="about__info">
            <div className="about__info-card glass-card">
              <span className="about__info-title">5+</span>
              <span className="about__info-name">Projects Done</span>
            </div>
            
            <div className="about__info-card glass-card">
              <span className="about__info-title">10+</span>
              <span className="about__info-name">Certifications</span>
            </div>

            <div className="about__info-card glass-card">
              <span className="about__info-title">2+</span>
              <span className="about__info-name">Years Experience</span>
            </div>
          </div>

          <div className="about__buttons">
            <a
              download="Resume of Sujal Lakhani"
              href={resumePdf}
              className="button button--flex"
            >
              Download Resume
              <i className="uil uil-download-alt button__icon"></i>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
