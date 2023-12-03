import React from "react";
import { ServicesData } from "../components/Data";
import ServicesItems from "../components/ServicesItems";

const newServicesItems = (props) => {
  return (
    <ServicesItems
      key={props.id}
      name={props.name}
      position={props.position}
      duration={props.duration}
      data={props.data}
    />
  );
};

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">Experience</h2>
      <span className="section__subtitle">My work</span>
      {ServicesData.map(newServicesItems)}
    </section>
  );
};

export default Services;
