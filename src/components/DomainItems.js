import React, { useState } from "react";
import SkillsItems from "./SkillsItems";

const newSkillsItems = (props) => {
  return (
    <SkillsItems
      key={props.id}
      name={props.name}
      num={props.num}
      class={props.class}
    />
  );
};

const DomainItems = (props) => {
  let [selected, setSelected] = useState(false);
  return (
    <div>
      <div
        className={
          "skills__content " + (selected ? "skills__open" : "skills__close")
        }
      >
        <div
          className="skills__header"
          onClick={() => setSelected(selected ? false : true)}
        >
          <i className={props.class}></i>
          <div>
            <h1 className="skills__title">{props.title}</h1>
            <span className="skills__subtitle">{props.subtitle}</span>
          </div>
          <i className="uil uil-angle-down skills__arrow"></i>
        </div>
        <div className="skills__list grid">
          {props.dataset.map(newSkillsItems)}
        </div>
      </div>
    </div>
  );
};

export default DomainItems;
