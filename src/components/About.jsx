
import React from "react";
import {
  FaCode,
  FaLaptopCode,
  FaLightbulb,
  FaArrowRight,
} from "react-icons/fa";
import "./About.css";
import devimg from "/images/Aboutprofile.png";

const highlights = [
  {
    icon: <FaCode />,
    title: "Software Development",
    description:
      "Developing reliable, efficient, and maintainable software solutions to solve real-world problems.",
  },
  {
    icon: <FaLaptopCode />,
    title: "Application Development",
    description:
      "Building responsive, user-friendly applications with clean code, intuitive design, and a focus on performance.",
  },
  {
    icon: <FaLightbulb />,
    title: "Problem Solving",
    description:
      "Applying logical thinking, creativity, and continuous learning to develop effective technical solutions.",
  },
];

export default function About() {
  

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-heading">
          <span className="about-eyebrow">
            <span className="about-status-dot" />
            GET TO KNOW ME
          </span>

          <h2>
            About <span>Me</span>
          </h2>

          <p className="about-subtitle">
            A little about who I am and what I love to build.
          </p>
        </div>

        <div className="about-main">
          <div className="about-visual">
            <div className="about-orbit about-orbit-one" />
            <div className="about-orbit about-orbit-two" />

            <div className="about-avatar">
              <img src={devimg} alt="Mohanakannan's profile" />
            </div>

            <div className="about-code-card">
              <span className="about-code-dot" />
              <span className="about-code-dot" />
              <span className="about-code-dot" />

              <pre>
                <code>
                  <span className="code-purple">const</span> developer = {"{"}
                  {"\n"}  role:{" "}
                  <span className="code-green">"Software Developer"</span>,
                  {"\n"}  status:{" "}
                  <span className="code-green">
                    "Open to Opportunities"
                  </span>
                  ,
                  {"\n"}  goal:{" "}
                  <span className="code-green">
                    "Building Real-World Solutions"
                  </span>
                  {"\n"}
                  {"}"};
                </code>
              </pre>
            </div>

            <div className="about-experience-badge">
              <span className="about-badge-icon">
                <FaCode />
              </span>

              <div>
                <strong>Developer</strong>
                <small>Creative problem solver</small>
              </div>
            </div>
          </div>

          <div className="about-content">
            <span className="about-small-title">WHO I AM</span>

            <h3>
              Building digital experiences with{" "}
              <span>code and creativity.</span>
            </h3>

            <p>
              Hi, I'm <strong>Mohanakannan</strong>, an Information
              Technology graduate with a strong interest in software
              development and web technologies.
            </p>

            <p>
              I enjoy building projects, learning new tools, and finding
              practical solutions to technical challenges. I believe in
              learning by doing and improving with every project I work on.
            </p>

            <p>
              I'm looking forward to starting my professional journey,
              applying my skills, and growing into a developer who creates
              reliable and useful software.
            </p>

            <button
              type="button"
              className="about-contact-btn"
              onClick={() => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}}
            >
              Let's Work Together
              <FaArrowRight />
            </button>
          </div>
        </div>

        <div className="about-highlights">
          {highlights.map((item, index) => (
            <article
              className="about-highlight-card"
              key={item.title}
              style={{ "--card-index": index }}
            >
              <div className="about-highlight-icon">{item.icon}</div>

              <h4>{item.title}</h4>

              <p>{item.description}</p>

              <span className="about-card-number">
                0{index + 1}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
