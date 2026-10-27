
import React from "react";
import {
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaHeart,
  FaCode,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";

import "./Footer.css";
import logo from "../assets/logo2.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Home", id: "home" },
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Projects", id: "projects" },
    { label: "Certificates", id: "certificates" },
    { label: "Contact", id: "contact" },
  ];

  const handleNavigation = (event, sectionId) => {
    event.preventDefault();

    document.getElementById(sectionId)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <footer className="portfolio-footer">
      <div className="footer-container">
        <div className="footer-main">
          {/* Brand */}
          <div className="footer-brand">
            <a
              className="footer-logo"
              href="#home"
              aria-label="Back to home"
              onClick={(event) => handleNavigation(event, "home")}
            >
              <img
                src={logo}
                alt="Mohanakannan logo"
                className="brand-logo"
              />

              <span className="footer-logo-text">
                MOHANAKANNAN
                <small>SOFTWARE DEVELOPER</small>
              </span>
            </a>

            <p className="footer-description">
              Building modern digital experiences with clean code,
              creative ideas, and a passion for technology.
            </p>

            {/* Social links */}
            <div className="footer-socials">
              <a
                href="https://github.com/mohanakannandev"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub profile"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/mohanakannan-l/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn profile"
              >
                <FaLinkedin />
              </a>

              <a
                href="https://leetcode.com/u/Mohanakannan_01/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LeetCode profile"
              >
                <SiLeetcode />
              </a>

              <a
                href="https://www.hackerrank.com/profile/mohanakannan275"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="HackerRank profile"
              >
                <SiHackerrank />
              </a>
            </div>
          </div>

          {/* Quick navigation */}
          <div className="footer-navigation">
            <h3>Quick Links</h3>

            <ul>
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <a
                    href={`#${link.id}`}
                    onClick={(event) =>
                      handleNavigation(event, link.id)
                    }
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact CTA */}
          <div className="footer-cta">
            <span className="footer-cta-label">HAVE A PROJECT?</span>

            <h3>
              Let's create something <span>amazing.</span>
            </h3>

            <p>
              Have an idea or opportunity? Let's connect and make it happen.
            </p>

            <a
              className="footer-contact-link"
              href="#contact"
              onClick={(event) => handleNavigation(event, "contact")}
            >
              Get in Touch <span aria-hidden="true">↗</span>
            </a>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            © {currentYear} Mohanakannan. All rights reserved.
          </p>

          <p className="footer-made-with">
            Designed &amp; Developed with{" "}
            <FaHeart className="footer-heart" /> and{" "}
            <FaCode className="footer-code-icon" /> React
          </p>

          <a
            className="footer-back-top"
            href="#home"
            aria-label="Back to top"
            onClick={(event) => handleNavigation(event, "home")}
          >
            <FaArrowUp />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
