import React from "react";

const LinksItems = (props) => {
  return (
    <li>
      <a href={props.lihref} className="footer__link">
        {props.lidata}
      </a>
    </li>
  );
};

export default LinksItems;
