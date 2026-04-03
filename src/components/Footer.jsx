import React from "react";
import { profile } from "../data/profile";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-left">
          <div className="nav-logo-circle footer-logo">AK</div>
          <p className="footer-text">
            &copy; {year} {profile.name}. Crafted with React + Vite.
          </p>
        </div>
        <div className="footer-links">
          <a href={profile.links.github} target="_blank" rel="noopener noreferrer" className="footer-link">GitHub</a>
          <a href={profile.links.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">LinkedIn</a>
          <a href={`mailto:${profile.links.email}`} className="footer-link">Email</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
