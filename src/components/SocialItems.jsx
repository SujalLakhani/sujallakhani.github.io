import React from "react";

const SocialItems = (props) => {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" className={props.aclass}>
      <i className={props.class}></i>
    </a>
  );
};

export default SocialItems;
