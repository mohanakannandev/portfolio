
import React, { useState, useEffect } from "react";
import { Container, Navbar, Nav, Offcanvas } from "react-bootstrap";
import { FiArrowUpRight, FiMenu, FiX } from "react-icons/fi";
import "./PortfolioHeader.css";
import logo from "../assets/logo2.png";

const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Certifications", id: "certificates" },
  { label: "Contact", id: "contact" },
];

const PortfolioHeader = () => {
  const [show, setShow] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeMenu = () => setShow(false);

  const handleNavigation = (event, id) => {
    event.preventDefault();

    const target = document.getElementById(id);

    if (target) {
      setActiveSection(id);

      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }

    closeMenu();
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const nearBottom =
        window.innerHeight + scrollPosition >=
        document.documentElement.scrollHeight - 5;

      if (nearBottom) {
        setActiveSection("contact");
        return;
      }

      let currentSection = "home";

      navItems.forEach(({ id }) => {
        const section = document.getElementById(id);

        if (section && section.getBoundingClientRect().top <= 150) {
          currentSection = id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const renderNavItems = () =>
    navItems.map((item) => (
      <Nav.Link
        key={item.id}
        href={`#${item.id}`}
        className={activeSection === item.id ? "active" : ""}
        aria-current={
          activeSection === item.id ? "location" : undefined
        }
        onClick={(event) => handleNavigation(event, item.id)}
      >
        {item.label}
      </Nav.Link>
    ));

  return (
    <header className="pro-header">
      <Container>
        <Navbar expand="lg" className="pro-navbar">
          <Navbar.Brand
            href="#home"
            className="pro-brand"
            onClick={(event) => handleNavigation(event, "home")}
          >
            <img
              src={logo}
              alt="Mohanakannan logo"
              className="brand-logo"
            />

            <span className="brand-copy">
              <strong>MOHANAKANNAN</strong>
              <small>SOFTWARE DEVELOPER</small>
            </span>
          </Navbar.Brand>

          <Nav className="pro-nav d-none d-lg-flex">
            {renderNavItems()}
          </Nav>

          <a
            href="#contact"
            className="pro-cta d-none d-lg-inline-flex"
            onClick={(event) => handleNavigation(event, "contact")}
          >
            Hire me <FiArrowUpRight />
          </a>

          <button
            type="button"
            className="mobile-menu-btn d-lg-none"
            onClick={() => setShow((previous) => !previous)}
            aria-label={
              show ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={show}
          >
            {show ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </Navbar>
      </Container>

      <Offcanvas
        show={show}
        onHide={closeMenu}
        placement="end"
        className="pro-offcanvas"
      >
        <Offcanvas.Header>
          <Offcanvas.Title className="pro-brand">
            <img
              src={logo}
              alt="Mohanakannan logo"
              className="brand-logo"
            />

            <span className="brand-copy">
              <strong>MOHANAKANNAN</strong>
              <small>SOFTWARE DEVELOPER</small>
            </span>
          </Offcanvas.Title>

          <button
            type="button"
            className="mobile-menu-btn"
            onClick={closeMenu}
            aria-label="Close navigation menu"
          >
            <FiX size={24} />
          </button>
        </Offcanvas.Header>

        <Offcanvas.Body>
          <Nav className="flex-column mobile-nav">
            {renderNavItems()}
          </Nav>

          <a
            href="#contact"
            className="pro-cta mt-4"
            onClick={(event) => handleNavigation(event, "contact")}
          >
            Let's Talk <FiArrowUpRight />
          </a>
        </Offcanvas.Body>
      </Offcanvas>
    </header>
  );
};

export default PortfolioHeader;
