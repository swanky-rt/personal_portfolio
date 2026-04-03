import React, { useState, useEffect } from "react";
import { profile } from "../data/profile";

const sections = [
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "gallery", label: "Gallery" },
  { id: "contact", label: "Contact" }
];

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleScroll = (e, id) => {
    e.preventDefault();
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <header className={`nav ${scrolled ? "nav-scrolled" : ""}`}>
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={(e) => handleScroll(e, "top")}>
          <div className="nav-logo-circle">AK</div>
          <span className="nav-logo-text">{profile.name}</span>
        </a>

        <nav className={`nav-links ${mobileOpen ? "nav-links-open" : ""}`}>
          {sections.map((s) => (
            <a
              key={s.id}
              href={`#${s.id}`}
              onClick={(e) => handleScroll(e, s.id)}
              className="nav-link"
            >
              {s.label}
            </a>
          ))}
          <div className="nav-actions-mobile">
            <a className="btn-primary" href={profile.links.resume} target="_blank" rel="noopener noreferrer">
              Resume
            </a>
          </div>
        </nav>

        <div className="nav-actions">
          <a className="btn-outline-nav" href={`mailto:${profile.links.email}`}>
            Email
          </a>
          <a
            className="btn-primary nav-resume-btn"
            href={profile.links.resume}
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>

        <button
          className="nav-hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation"
        >
          <span className={`hamburger-line ${mobileOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${mobileOpen ? "open" : ""}`}></span>
          <span className={`hamburger-line ${mobileOpen ? "open" : ""}`}></span>
        </button>
      </div>
    </header>
  );
}

export default Navbar;
