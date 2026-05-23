import React from "react";
import { DomainData } from "../components/Data";
import DomainItems from "../components/DomainItems";

const newDomainItems = (props) => {
  return (
    <DomainItems
      key={props.id}
      title={props.title}
      subtitle={props.subtitle}
      dataset={props.dataset}
      class={props.class}
    />
  );
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        {DomainData.map(newDomainItems)}
      </div>
    </section>
  );
};

export default Skills;
