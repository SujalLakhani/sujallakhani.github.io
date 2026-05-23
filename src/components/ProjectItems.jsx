import React from "react";

const ProjectItems = (props) => {
  return (
    <div className="projects__content grid swiper-slide">
      <img src={props.src} alt="" className="projects__img" />
      <div className="projects__data">
        <h3 className="projects__title">{props.title}</h3>
        <p className="projects__description">{props.desc}</p>
        <a
          href={props.href}
          className="button button--flex button--small projects__button"
        >
          More Info
          <i className="uil uil-arrow-right button__icon"></i>
        </a>
      </div>
    </div>
  );
};

export default ProjectItems;
