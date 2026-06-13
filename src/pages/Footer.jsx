import React, { useEffect, useState } from "react";
import { ListData, SocialData } from "../components/Data";

const Footer = () => {
  let [selected, setSelected] = useState(false);
  useEffect(() => {
    const handleScrollVisibility = () => {
      window.scrollY > 300 ? setSelected(true) : setSelected(false);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);
  return (
    <>
      <footer className="footer">
        <div className="footer__bg">
          <div className="footer__container container grid">
            <div>
              <h1 className="footer__title">Sujal Lakhani</h1>
              <span className="footer__subtitle">Full Stack Developer</span>
            </div>
            <ul className="footer__links">
              {ListData.map((link) => (
                <li key={link.id}>
                  <a href={link.liHref} className="footer__link">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="footer__socials">
              {SocialData.map((social) => (
                <a
                  key={social.id}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer__social"
                >
                  <i className={social.class}></i>
                </a>
              ))}
            </div>
          </div>
          <p className="footer__copy">
            &copy; sujallakhani. All rights reserved.
          </p>
        </div>
      </footer>
      <a
        href="#home"
        className={"scrollup " + (selected ? "show-scroll" : "")}
        id="scroll-up"
      >
        <i className="uil uil-arrow-up scrollup__icon"></i>
      </a>
    </>
  );
};

export default Footer;
