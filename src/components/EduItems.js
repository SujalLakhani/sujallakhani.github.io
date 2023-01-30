import React from "react";

const EduItems = (props) => {
  return (
    <div className="qualification__data">
      <div>
        <span className={props.rounder}></span>
        <span className={props.line}></span>
      </div>
      <div>
        <h3 className="qualification__title">{props.title}</h3>
        <span className="qualification__subtitle">
          {props.subtitle}
          <br />
          {props.marks}
        </span>
        <div className="qualification__calendar">
          <i className="uil uil-calendar-alt"></i>
          {props.duration}
        </div>
      </div>
    </div>
  );
};

export default EduItems;
