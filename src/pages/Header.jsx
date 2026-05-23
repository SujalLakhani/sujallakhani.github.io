import React, { useEffect, useState } from "react";

const Header = () => {
  let [selected, setSelected] = useState(false);
  let [scrollHead, setScrollHead] = useState(false);
  useEffect(() => {
    const handleScrollVisibility = () => {
      window.pageYOffset > 80 ? setScrollHead(true) : setScrollHead(false);
    };
    window.addEventListener("scroll", handleScrollVisibility);
    return () => {
      window.removeEventListener("scroll", handleScrollVisibility);
    };
  }, []);

  const sections = document.querySelectorAll("section[id]");
  function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 50;
      let sectionId = current.getAttribute("id");

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.add("active-link");
      } else {
        document
          .querySelector(".nav__menu a[href*=" + sectionId + "]")
          .classList.remove("active-link");
      }
    });
  }
  window.addEventListener("scroll", scrollActive);

  return (
    <header
      className={"header " + (scrollHead ? "scroll-header" : "")}
      id="header"
    >
      <nav className="nav container">
        <a href="#" className="nav__logo">
          Sujal Lakhani
        </a>
        <div
          className={"nav__menu " + (selected ? "show-menu" : "")}
          id="nav-menu"
        >
          <ul className="nav__list grid">
            <li className="nav__item">
              <a
                href="#home"
                className="nav__link active-link"
                onClick={() => setSelected(false)}
              >
                <i className="uil uil-estate nav__icon"></i> Home
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#about"
                className="nav__link"
                onClick={() => setSelected(false)}
              >
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#skills"
                className="nav__link"
                onClick={() => setSelected(false)}
              >
                <i className="uil uil-file-alt nav__icon"></i> Skills
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#services"
                className="nav__link"
                onClick={() => setSelected(false)}
              >
                <i className="uil uil-briefcase-alt nav__icon"></i> Experience
              </a>
            </li>
            <li className="nav__item">
              <a
                href="#projects"
                className="nav__link"
                onClick={() => setSelected(false)}
              >
                <i className="uil uil-scenery nav__icon"></i> Projects
              </a>
            </li>
            {/* <li className="nav__item">
              <a
                href="#contact"
                className="nav__link"
                onClick={() => setSelected(false)}
              >
                <i className="uil uil-message nav__icon"></i> Contact me
              </a>
            </li> */}
          </ul>

          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={() => setSelected(false)}
          ></i>
        </div>
        <div className="nav__btns">
          <div
            className="nav__toggle"
            id="nav-toggle"
            onClick={() => setSelected(true)}
          >
            <i className="uil uil-apps"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
