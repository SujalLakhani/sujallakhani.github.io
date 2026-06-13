import React, { useEffect, useState } from "react";
import { ListData } from "../components/Data";

const Header = () => {
  const [selected, setSelected] = useState(false);
  const [scrollHead, setScrollHead] = useState(false);
  const [theme, setTheme] = useState("light");
  const [activeSection, setActiveSection] = useState("home");

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
    // 1. Sticky header scroll check
    const handleScroll = () => {
      setScrollHead(window.scrollY > 80);
    };

    // 2. Active section highlight using IntersectionObserver
    const sections = document.querySelectorAll("section[id]");
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-25% 0px -55% 0px", // focus on middle area of viewport
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const sectionId = entry.target.getAttribute("id");
          setActiveSection(sectionId);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    sections.forEach((section) => observer.observe(section));

    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      sections.forEach((section) => observer.unobserve(section));
      observer.disconnect();
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
                  className={`nav__link ${
                    activeSection === item.liHref.substring(1) ? "active-link" : ""
                  }`}
                  onClick={() => setSelected(false)}
                >
                  <i className={`${item.iClass} nav__icon`}></i>
                  {item.name}
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

