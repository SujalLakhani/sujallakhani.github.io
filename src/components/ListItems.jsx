import React, { useState } from "react";

const ListItems = (props) => {
  return (
    <li className="nav__item">
      <a href={props.liHref} className={props.liClass}>
        <i className={props.iClass}></i> {props.name}
      </a>
    </li>
  );
};

export default ListItems;
