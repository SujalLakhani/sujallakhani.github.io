import React, { useState } from "react";
import ServicesDataItems from "./ServiceDataItems";

const newServicesDataItems = (props) => {
  return <ServicesDataItems key={props.id} data={props.line} />;
};

const ServicesItems = (props) => {
  let [selected, setSelected] = useState(false);

  return (
    <div className="services__container container">
      <div className="services__content">
        <h3 className="services__title">{props.name}</h3>
        <span className="services__subtitle">Position - {props.position}</span>
        <div className="services__calendar">
          <i className="uil uil-calendar-alt"></i>
          {props.duration}
        </div>
        <span
          className="button button--flex button--small button--link services__button"
          onClick={() => setSelected(true)}
        >
          View More <i className="uil uil-arrow-right button__icon"></i>
        </span>
        <div className={"services__modal " + (selected ? "active-modal" : "")}>
          <div className="services__modal-content">
            <h4 className="services__modal-title">{props.position}</h4>
            <h6 className="services__modal-subtitle">at {props.name}</h6>
            <i
              className="uil uil-times services__modal-close"
              onClick={() => setSelected(false)}
            ></i>
            <ul className="services__modal-services grid">
              {props.data.map(newServicesDataItems)}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesItems;
