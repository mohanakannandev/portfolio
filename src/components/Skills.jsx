
import React from "react";
import { VscVscode } from "react-icons/vsc";
import {
  SiSpringboot,
  SiDocker,
  SiGithubactions,
  SiMongodb,
  SiExpress,
  SiTailwindcss,
  SiMysql,
  SiIntellijidea,
  SiPostman,
  SiNpm,
} from "react-icons/si";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaBootstrap,
  FaCode,
  FaDatabase,
  FaLaptopCode,
  FaJava,
  FaPython,
  FaAws,
  FaCloud,
} from "react-icons/fa";


import "./Skills.css";

const skillGroups = [
  {
    title: "Frontend Development",
    description: "Building modern and responsive user interfaces.",
    icon: <FaLaptopCode />,
    skills: [
      { name: "HTML5", icon: <FaHtml5 />, level: 90 },
      { name: "CSS3", icon: <FaCss3Alt />, level: 85 },
      { name: "JavaScript", icon: <FaJs />, level: 80 },
      { name: "React", icon: <FaReact />, level: 80 },
      { name: "Bootstrap", icon: <FaBootstrap />, level: 80 },
      { name: "Tailwind CSS", icon: <SiTailwindcss />, level: 70 },
    ],
  },
  {
    title: "Backend Development",
    description: "Creating application logic and server-side functionality.",
    icon: <FaCode />,
    skills: [
      { name: "Java", icon: <FaJava />, level: 75 },
      { name: "SpringBoot", icon: <SiSpringboot />, level: 70 },
      { name: "Python", icon: <FaPython />, level: 70 },
      { name: "Node.js", icon: <FaNodeJs />, level: 70 },
      { name: "Express.js", icon: <SiExpress />, level: 65 },
    ],
  },
  {
    title: "Databases",
    description: "Managing, storing, and retrieving application data.",
    icon: <FaDatabase />,
    skills: [
      { name: "MongoDB", icon: <SiMongodb />, level: 65 },
      { name: "MySQL", icon: <SiMysql />, level: 70 },
      { name: "SQL", icon: <FaDatabase />, level: 70 },
    ],
  },
  {
  title: "Cloud & DevOps",
  description: "Cloud services, deployment, and automation workflows.",
  icon: <FaCloud />,
  skills: [
    { name: "AWS", icon: <FaAws />, level: 65 },
    { name: "Docker", icon: <SiDocker />, level: 60 },
    { name: "GitHub Actions", icon: <SiGithubactions />, level: 65 },
  ],
  },
  {
  title: "Tools & Workflow",
  description: "Tools for development, collaboration, and productivity.",
  icon: <FaGitAlt />,
  skills: [
    { name: "Git", icon: <FaGitAlt />, level: 75 },
    { name: "GitHub", icon: <FaGithub />, level: 80 },
    { name: "VS Code", icon: <VscVscode />, level: 85 },
    { name: "IntelliJ IDEA", icon: <SiIntellijidea />, level: 70 },
    { name: "Postman", icon: <SiPostman />, level: 70 },
    { name: "npm", icon: <SiNpm />, level: 70 },
  ],
  },
];

export default function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <header className="skills-heading">
          <span className="skills-eyebrow">
            <span className="skills-status-dot" />
            WHAT I WORK WITH
          </span>

          <h2>
            My <span>Skills</span>
          </h2>

          <p>
            Technologies and tools I use to turn ideas into digital
            experiences.
          </p>
        </header>

        <div className="skills-grid">
          {skillGroups.map((group, index) => (
            <article
              className="skill-category-card"
              key={group.title}
              style={{ "--skill-index": index }}
            >
              <div className="skill-category-heading">
                <div className="skill-category-icon">{group.icon}</div>

                <div>
                  <h3>{group.title}</h3>
                  <p>{group.description}</p>
                </div>
              </div>

              <div className="skill-list">
                {group.skills.map((skill) => (
                  <div className="skill-item" key={skill.name}>
                    <div className="skill-info">
                      <span className="skill-name">
                        <span className="skill-tech-icon">
                          {skill.icon}
                        </span>
                        {skill.name}
                      </span>

                      <span className="skill-level">
                        {skill.level}%
                      </span>
                    </div>

                    <div
                      className="skill-progress-track"
                      role="progressbar"
                      aria-label={`${skill.name} proficiency`}
                      aria-valuemin={0}
                      aria-valuemax={100}
                      aria-valuenow={skill.level}
                    >
                      <span
                        className="skill-progress-fill"
                        style={{ "--skill-level": `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="skills-footer">
          <span className="skills-footer-icon">
            <FaCode />
          </span>
          <p>
            Always learning. Always building.{" "}
            <strong>Always improving.</strong>
          </p>
        </div>
      </div>
    </section>
  );
}