
import React, { useState } from "react";
import {
  FaEnvelope,
  FaMapMarkerAlt,
  FaPaperPlane,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { SiLeetcode, SiHackerrank } from "react-icons/si";
import "./Contact.css";

const EMAIL = "mohanakannandev@gmail.com";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((previous) => ({
      ...previous,
      [name]: value,
    }));

    setError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const { name, email, subject, message } = form;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    const mailtoLink =
      `mailto:${EMAIL}` +
      `?subject=${encodeURIComponent(subject || "Portfolio Contact")}` +
      `&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
      )}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        <div className="contact-heading">
          <span className="contact-eyebrow">
            <span className="contact-heading-line" />
            GET IN TOUCH
            <span className="contact-heading-line" />
          </span>

          <h2>
            Let's <span>Connect</span>
          </h2>

          <p>
            Have a project idea, an opportunity, or just want to say hello?
            I'd love to hear from you.
          </p>
        </div>

        <div className="contact-layout">
          <div className="contact-info">
            <span className="contact-info-label">
              CONTACT INFORMATION
            </span>

            <h3>
              Let's build something <span>great.</span>
            </h3>

            <p className="contact-info-description">
              I'm always interested in discussing Software Development,
              web development, creative ideas, and opportunities to learn
              and collaborate.
            </p>

            <a className="contact-info-item" href={`mailto:${EMAIL}`}>
              <span className="contact-info-icon">
                <FaEnvelope />
              </span>
              <span className="contact-info-text">
                <small>Email me</small>
                <strong>{EMAIL}</strong>
              </span>
            </a>

            <div className="contact-info-item">
              <span className="contact-info-icon">
                <FaMapMarkerAlt />
              </span>
              <span className="contact-info-text">
                <small>Location</small>
                <strong>Coimbatore</strong>
              </span>
            </div>

            <div className="contact-socials">
              <span>FIND ME ONLINE</span>

              <div className="contact-social-links">
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
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form-heading">
              <h3>Send a Message</h3>
              <p>Fill out the form and let's start a conversation.</p>
            </div>

            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your Name *</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={form.name}
                  onChange={handleChange}
                  autoComplete="name"
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Your Email *</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={form.email}
                  onChange={handleChange}
                  autoComplete="email"
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">Subject</label>
              <input
                id="contact-subject"
                name="subject"
                type="text"
                placeholder="What would you like to discuss?"
                value={form.subject}
                onChange={handleChange}
              />
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your Message *</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Write your message here..."
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            {error && (
              <p className="contact-error" role="alert">
                {error}
              </p>
            )}

            <button className="contact-submit-btn" type="submit">
              <span>Send Message</span>
              <FaPaperPlane />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;
