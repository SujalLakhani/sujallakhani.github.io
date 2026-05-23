import React, { useEffect, useState } from "react";
import { LinkData, SocialData } from "../components/Data";
import LinksItems from "../components/LinksItems";
import SocialItems from "../components/SocialItems";

const newSocialItems = (props) => {
  return (
    <SocialItems
      key={props.id}
      link={props.link}
      class={props.class}
      aclass="footer__social"
    />
  );
};

const newLinkItems = (props) => {
  return (
    <LinksItems key={props.liid} lihref={props.lihref} lidata={props.lidata} />
  );
};

const Footer = () => {
  let [selected, setSelected] = useState(false);
  useEffect(() => {
    const handleScrollVisibility = () => {
      window.pageYOffset > 300 ? setSelected(true) : setSelected(false);
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
            <ul className="footer__links">{LinkData.map(newLinkItems)}</ul>
            <div className="footer__socials">
              {SocialData.map(newSocialItems)}
            </div>
          </div>
          <p className="footer__copy">
            <span dangerouslySetInnerHTML={{ __html: "&copy;" }} />{" "}
            sujallakhani. All right reserved.
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
