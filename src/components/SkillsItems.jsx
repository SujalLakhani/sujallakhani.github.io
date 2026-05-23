import React from "react";

const SkillsItems = (props) => {
  return (
    <div className="skills__data">
      <div className="skills__title">
        <h3 className="skills_name">{props.name}</h3>
        <span className="skills__number">{props.num}%</span>
      </div>
      <div className="skills__bar">
        <span className={`skills__percentage w-${props.num}`}></span>
      </div>
    </div>
  );
};

export default SkillsItems;
