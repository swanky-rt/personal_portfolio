import React from "react";
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
  const handleScroll = (e, id) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#top" className="nav-logo" onClick={(e) => handleScroll(e, "top")}>
          <div className="nav-logo-circle">AK</div>
          <span className="nav-logo-text">{profile.name}</span>
        </a>

        <nav className="nav-links">
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
        </nav>

        <div className="nav-actions">
          <a className="btn-outline" href={`mailto:${profile.links.email}`}>
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
      </div>
    </header>
  );
}

export default Navbar;
