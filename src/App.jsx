
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import PortfolioHeader from "./components/PortfolioHeader";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Certificates from "./components/Certificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function Portfolio() {
  const [isOpen, setIsOpen] = useState(false);

  const handleExplore = () => {
    setIsOpen(true);
    window.setTimeout(() => {
    window.scrollBy({
      top: -40,
      behavior: "smooth",
    });
  }, 100);
  };

  return (
    <div className="page-container">
      <div className={isOpen ? "header-visible" : "header-hidden"}>
        <PortfolioHeader />
      </div>

      <main className="page-content">
        <Home />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Contact />
      </main>

      <Footer />

      <div
        className={`sheet sheet-left ${
          isOpen ? "sheet-left-open" : ""
        }`}
      >
        <div className="left-sheet-content">
          <p className="portfolio-label">PORTFOLIO • 2026</p>

          <h1>
            HELLO, I'M
            <br />
            <span>MOHANAKANNAN</span>
          </h1>

          <h2>Software Developer</h2>
        </div>
      </div>

      <div
        className={`sheet sheet-right ${
          isOpen ? "sheet-right-open" : ""
        }`}
      />

      {!isOpen && (
        <button
          type="button"
          className="btn btn-light open-btn explore-btn"
          onClick={handleExplore}
        >
          <span>EXPLORE MY WORK</span>
          <span className="explore-arrow">↗</span>
        </button>
      )}
    </div>
  );
}

export default function App() {
  return <Portfolio />;
}
