import React, { useState, useEffect } from "react";
import SocialItems from "../components/SocialItems";
import { SocialData } from "../components/Data";
import aboutImg from "../assets/img/about.webp";

const newSocialItems = (props) => {
  return (
    <SocialItems
      key={props.id}
      link={props.link}
      class={props.class}
      aclass="home__social-icon"
    />
  );
};

const Home = () => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const toRotate = [
    "Full Stack Engineer",
    "Frontend Specialist",
    "Backend Developer",
    "AI Integrator"
  ];

  useEffect(() => {
    let timer = setTimeout(() => {
      handleType();
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [text, isDeleting, loopNum]);

  const handleType = () => {
    const i = loopNum % toRotate.length;
    const fullTxt = toRotate[i];

    if (!isDeleting) {
      setText(fullTxt.substring(0, text.length + 1));
      setTypingSpeed(100);

      if (text === fullTxt) {
        // Pause before starting deletion
        setTypingSpeed(2000);
        setIsDeleting(true);
      }
    } else {
      setText(fullTxt.substring(0, text.length - 1));
      setTypingSpeed(50);

      if (text === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(500); // Pause before typing next word
      }
    }
  };

  return (
    <section className="home section dotted-bg" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          
          {/* Social Links on Left Column */}
          <div data-reveal className="home__social delay-100">
            {SocialData.map(newSocialItems)}
          </div>

          {/* Profile Picture on Right Column (On Desktop) */}
          <div data-reveal className="home__img delay-200">
            <img
              src={aboutImg}
              alt="Sujal Lakhani Profile"
              className="home__blob"
            />
          </div>

          {/* Info and Description */}
          <div data-reveal className="home__data delay-300">
            <h1 className="home__title">
              Hi, I'm <span style={{ color: "var(--accent-color)" }}>Sujal Lakhani</span>
            </h1>
            <h3 className="home__subtitle" style={{ minHeight: "2.2rem" }}>
              <span>{text}</span>
              <span className="typewriter-cursor"></span>
            </h3>
            <p className="home__description">
              AI-driven developer with 2+ years of experience building and optimizing high-performance web applications using Angular, React.js, Node.js, and TypeScript.
            </p>
            <a href="mailto:sujallakhani98@gmail.com" className="button button--flex">
              Contact Me <i className="uil uil-message button__icon"></i>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Home;
