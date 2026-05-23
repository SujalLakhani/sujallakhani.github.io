import React from "react";
import Header from "./pages/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import "./assets/css/styles.css";

function App() {
  return (
    <>
      <Header />
      <main className="main">
        <Home />
        <About />
        <Skills />
        <Services />
        <Projects />
        {/* <Contact /> */}
      </main>
      <Footer />
    </>
  );
}

export default App;
