import React, { useEffect, useState } from "react";
import { ListData } from "../components/Data";

const Header = () => {
  const [selected, setSelected] = useState(false);
  const [scrollHead, setScrollHead] = useState(false);
  const [theme, setTheme] = useState("light");

  // Sync theme switch
  const toggleTheme = () => {
    if (theme === "light") {
      document.body.classList.add("dark-theme");
      setTheme("dark");
    } else {
      document.body.classList.remove("dark-theme");
      setTheme("light");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      
      // Header sticky visual style
      scrollY > 80 ? setScrollHead(true) : setScrollHead(false);

      // Scroll active link mapping
      const sections = document.querySelectorAll("section[id]");
      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 65; // header padding offset
        const sectionId = current.getAttribute("id");
        const link = document.querySelector(`.nav__menu a[href*="${sectionId}"]`);

        if (link) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            link.classList.add("active-link");
          } else {
            link.classList.remove("active-link");
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
            {ListData.map((item) => (
              <li key={item.id} className="nav__item">
                <a
                  href={item.liHref}
                  className="nav__link"
                  onClick={() => setSelected(false)}
                >
                  <i className={`${item.iClass} nav__icon`}></i>
                  {item.name === "Services" ? "Experience" : item.name}
                </a>
              </li>
            ))}
          </ul>

          <i
            className="uil uil-times nav__close"
            id="nav-close"
            onClick={() => setSelected(false)}
          ></i>
        </div>
        
        <div className="nav__btns" style={{ display: "flex", alignItems: "center" }}>
          {/* Theme Toggle Button */}
          <div className="theme-toggle-btn" onClick={toggleTheme}>
            <i className={`uil ${theme === "light" ? "uil-moon" : "uil-sun"}`}></i>
          </div>

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

