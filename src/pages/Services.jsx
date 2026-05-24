import React from "react";
import Timeline from "../components/Timeline";

const Services = () => {
  return (
    <section className="services section" id="services">
      <h2 className="section__title">My Journey</h2>
      <span className="section__subtitle">Education & experience</span>
      <div className="container">
        <Timeline />
      </div>
    </section>
  );
};

export default Services;

