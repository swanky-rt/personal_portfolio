import React from "react";
import { profile } from "../data/profile";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-text">
          © {year} {profile.name}. Crafted with React.
        </p>
        <p className="footer-text footer-muted">
          Deployed via GitHub / Netlify · Built from resume-powered content.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
