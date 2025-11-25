import React from "react";
import { profile } from "../data/profile";

function Contact() {
  const { email, github, linkedin, website } = profile.links;

  return (
    <section id="contact" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-kicker">Contact</p>
          <h2 className="section-title">Let’s connect</h2>
          <p className="section-subtitle">
            I’m open to internships, research collaborations, and roles involving ML, backend
            systems, or data-intensive products.
          </p>
        </div>

        <div className="contact-grid">
          <div className="card contact-card card-hover">
            <h3 className="card-title">Reach out</h3>
            <p className="card-text">
              The fastest way to reach me is via email. I’m happy to chat about opportunities,
              projects, or just share notes on ML and systems.
            </p>
            <div className="contact-list">
              <a href={`mailto:${email}`} className="contact-item">
                <span className="contact-label">Email</span>
                <span className="contact-value">{email}</span>
              </a>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-label">LinkedIn</span>
                <span className="contact-value">View profile</span>
              </a>
              <a
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-label">GitHub</span>
                <span className="contact-value">{github}</span>
              </a>
              <a
                href={website}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-item"
              >
                <span className="contact-label">Website</span>
                <span className="contact-value">{website}</span>
              </a>
            </div>
          </div>

          <div className="card contact-card card-hover">
            <h3 className="card-title">Short message</h3>
            <p className="card-text">
              You can also pre-fill a quick email using this button:
            </p>
            <a
              className="btn-primary contact-button"
              href={`mailto:${email}?subject=Hi%20Aarti&body=Hi%20Aarti,%0D%0A%0D%0A`}
            >
              Compose Email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
