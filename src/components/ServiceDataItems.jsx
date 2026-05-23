import React from "react";

const ServicesDataItems = (props) => {
  return (
    <li className="services__modal-service">
      <i className="uil uil-check-circle services__modal-icon"></i>
      <p>{props.data}</p>
    </li>
  );
};

export default ServicesDataItems;
