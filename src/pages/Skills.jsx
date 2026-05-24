import React from "react";
import { DomainData } from "../components/Data";

const getSkillIcon = (name) => {
  const n = name.toLowerCase();
  if (n.includes("react")) return "devicon-react-original";
  if (n.includes("angular")) return "devicon-angular-plain";
  if (n.includes("javascript")) return "devicon-javascript-plain";
  if (n.includes("typescript")) return "devicon-typescript-plain";
  if (n.includes("html")) return "devicon-html5-plain";
  if (n.includes("css")) return "devicon-css3-plain";
  if (n.includes("node")) return "devicon-nodejs-plain";
  if (n.includes("spring")) return "devicon-spring-plain";
  if (n.includes("express")) return "devicon-express-original";
  if (n.includes("mongodb")) return "devicon-mongodb-plain";
  if (n.includes("mysql")) return "devicon-mysql-plain";
  if (n.includes("postgresql")) return "devicon-postgresql-plain";
  if (n.includes("java")) return "devicon-java-plain";
  if (n.includes("python")) return "devicon-python-plain";
  return "devicon-devicon-plain";
};

const getSkillLevel = (num) => {
  const pct = parseInt(num, 10);
  if (pct >= 90) return "Expert";
  if (pct >= 80) return "Advanced";
  return "Intermediate";
};

const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>

      <div className="skills__container container grid" style={{ rowGap: "3rem" }}>
        {DomainData.map((domain, index) => (
          <div
            key={domain.id}
            data-reveal
            style={{ transitionDelay: `${index * 150}ms` }}
          >
            <h3 className="skills__domain-title">{domain.title}</h3>
            <div className="advantage-grid">
              {domain.dataset.map((skill) => (
                <div key={skill.id} className="advantage-card glass-card">
                  <i className={`${getSkillIcon(skill.name)} advantage-card__icon`}></i>
                  <h4 className="advantage-card__title">{skill.name}</h4>
                  <span className="advantage-card__level">{getSkillLevel(skill.num)}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
