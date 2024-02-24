import React from "react";
import SocialItems from "../components/SocialItems";
import { SocialData } from "../components/Data";

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

const navMenu = document.getElementById("nav-menu"),
  navToggle = document.getElementById("nav-toggle"),
  navClose = document.getElementById("nav-close");

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
  navToggle.addEventListener("click", () => {
    navMenu.classList.add("show-menu");
  });
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
  navClose.addEventListener("click", () => {
    navMenu.classList.remove("show-menu");
  });
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll(".nav__link");

function linkAction() {
  navMenu.classList.remove("show-menu");
}
navLink.forEach((n) => n.addEventListener("click", linkAction));

const Home = (props) => {
  return (
    <section className="home section" id="home">
      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">{SocialData.map(newSocialItems)}</div>
          <div className="home__img">
            <img
              src={require("../assets/img/about.jpg")}
              alt="about.jpg"
              className="home__blob"
            />
          </div>
          <div className="home__data">
            <h1 className="home__title">Hi, I'm Sujal Lakhani</h1>
            <h3 className="home__subtitle">Full Stack Developer</h3>
            <p className="home__description">
              Wide range of experience in app and web design and development
              knowledge, producing quality work.
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
