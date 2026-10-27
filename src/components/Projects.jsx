
import React from "react";
import {
  FaGithub,
  FaCode,
  FaLaptopCode,
} from "react-icons/fa";

import "./Projects.css";

const projects = [
  {
    number: "01",
    title: "Cyber-Threat-Intelligence-Auto-Defense-System",
    category: "Full-Stack Development",
    description:
      "Developed a Cyber Threat Intelligence and Auto-Defense System that integrates threat intelligence sources and AI-powered analysis to identify potential cyber threats, assess risks, and support automated defense actions. Built using React, Python, Flask, and SQLite, with API integration and JWT authentication to support secure access and threat monitoring.",
    technologies: [
      "Python",
      "React",
      "Flask",
      "SQLite",
      "AI Integration",
      "Cybersecurity",
    ],
    github:
      "https://github.com/mohanakannandev/Cyber-Threat-Intelligence-Auto-Defense-System",
    icon: <FaLaptopCode />,
  },
  {
    number: "02",
    title: "Hotel Management System",
    category: "Web Application",
    description:
      "Developed a Hotel Management System to streamline hotel operations, including room booking, customer information management, room availability tracking, and reservation handling. The project focuses on simplifying hotel administration, organizing booking records, and improving the overall management process through a user-friendly interface.",
    technologies: ["HTML", "JavaScript", "CSS3", "PHP", "MySQL"],
    github:
      "https://github.com/mohanakannandev/Hotel-Management-System",
    icon: <FaCode />,
  },
  {
    number: "03",
    title: "Multiple Disease Prediction System",
    category: "Machine Learning",
    description:
      "Developed a machine learning application to predict the likelihood of multiple diseases using patient health data. Implemented Logistic Regression and Random Forest algorithms, applying data preprocessing, feature engineering, model training, and evaluation to improve predictive performance. Integrated Python-based machine learning libraries with MySQL for data management.",
    technologies: [
      "Python",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "MySQL",
    ],
    github: "https://github.com/mohanakannandev",
    icon: <FaLaptopCode />,
  },
];

function Projects() {
  

  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">
        {/* Section heading */}
        <div className="projects-heading">
          <span className="projects-eyebrow">
            <span className="heading-line" />
            MY WORK
          </span>

          <h2>
            Featured <span>Projects</span>
          </h2>

          <p>
            A selection of projects where I turn ideas into practical,
            interactive, and user-friendly digital experiences.
          </p>
        </div>

        {/* Project cards */}
        <div className="projects-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-card-top">
                <span className="project-number">
                  {project.number}
                </span>

                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-icon">{project.icon}</div>

              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              <div className="project-tech-stack">
                {project.technologies.map((tech) => (
                  <span className="project-tech" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>

              <div className="project-card-footer">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  aria-label={`View ${project.title} source code on GitHub`}
                >
                  <FaGithub />
                  <span>Source Code</span>
                </a>
              </div>
            </article>
          ))}
        </div>

        {/* Contact call to action */}
        <div className="projects-bottom">
          <span>Have an idea in mind?</span>

          <button
            type="button"
            className="projects-contact-link"
            onClick={() => {
  document.getElementById("contact")?.scrollIntoView({
    behavior: "smooth",
    block: "start",
  });
}}
          >
            Let’s build it together{" "}
            <span aria-hidden="true">↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Projects;
