
import { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";

import "./Home.css";

const roles = [
  "Java Developer",
  "Software Developer",
  "Full Stack Developer",
  "React Developer",
  "Problem Solver",
];

export default function Home() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = deleting ? 45 : 90;

    if (!deleting && text === currentRole) {
      delay = 1500;
    } else if (deleting && text === "") {
      delay = 350;
    }

    const timer = setTimeout(() => {
      if (!deleting && text === currentRole) {
        setDeleting(true);
      } else if (deleting && text === "") {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        setText(
          deleting
            ? currentRole.substring(0, text.length - 1)
            : currentRole.substring(0, text.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [text, deleting, roleIndex]);

  // Navigate to the Projects section/page
  const handleViewWork = () => {
  document.getElementById("projects")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
};

  return (
    <section className="home-section" id="home">
      <div className="home-container">
        {/* LEFT SIDE */}
        <div className="home-content">
          <p className="home-greeting">
            <span className="status-dot"></span>
            HI, WELCOME TO MY PORTFOLIO
          </p>

          <h1>
            Hi, I'm{" "}
            <span className="name-highlight">Mohanakannan L</span>
          </h1>

          <h2 className="home-role">
            I'm a <span>{text}</span>
            <span className="typing-cursor">|</span>
          </h2>

          <p className="home-description">
            I'm really interested in creating modern, responsive, and
            user-friendly software and websites. There's something special
            about turning ideas into reality with clean code and thoughtful
            design, while learning new skills along the way.
          </p>

          <div className="home-buttons">
            <button
              type="button"
              className="home-btn primary-btn"
              onClick={handleViewWork}
            >
              View My Work <FaArrowRight />
            </button>

            <a
  href={`${import.meta.env.BASE_URL}Resume.pdf`}
  target="_blank"
  rel="noopener noreferrer"
  className="home-btn secondary-btn"
>
              Resume
            </a>
          </div>

          <div className="home-socials">
            {/* Add your social links here when needed. */}
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="home-image-area">
          <div className="image-glow"></div>

          <div className="image-frame">
            <img
      src={`${import.meta.env.BASE_URL}images/Profile.png`}
      alt="Mohanakannan, Software Developer"
      className="developer-image"
    />
          </div>

          <div className="floating-card card-top">
            <span className="card-icon">{"</>"}</span>
            <div>
              <strong>OPEN TO WORK</strong>
              <small>Ready to build something great.</small>
            </div>
          </div>

          <div className="floating-card card-bottom">
            <span className="online-dot"></span>
            <div>
              <strong>Let's Connect</strong>
              <small>Ideas into reality</small>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
