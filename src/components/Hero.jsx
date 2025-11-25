import React from "react";
import { profile } from "../data/profile";

function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-kicker">ML • Data Science • Backend Engineering</p>
          <h1 className="hero-title">
            Hi, I’m <span className="accent">{profile.name}</span>
          </h1>
          <h2 className="hero-subtitle">{profile.tagline}</h2>
          <p className="hero-summary">
            I design and build reliable backend systems and ML-driven products. My work spans
            high-throughput payment systems, graph-based learning pipelines, and responsible AI
            experiments that balance privacy, safety, and real-world utility.
          </p>

          <div className="hero-meta">
            <span className="hero-location">📍 {profile.location}</span>
          </div>

          <div className="hero-cta">
            <a href="#projects" className="btn-primary">
              View Projects
            </a>
            <a
              href={profile.links.github}
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-orbit"></div>
          <div className="hero-avatar-circle">
            <img
              src="/aarti.jpeg"
              alt="Aarti Kumari"
              className="hero-avatar-img"
            />
          </div>
          <div className="hero-pill hero-pill-primary">
            <span className="pill-dot"></span>
            MS CS · Data Science @ UMass Amherst
          </div>
          <div className="hero-pill hero-pill-secondary">
            <span className="pill-dot"></span>
            Ex-PayPal · Altimetrik · Dell EMC
          </div>
          <div className="hero-pill hero-pill-tertiary">
            <span className="pill-dot"></span>
            Responsible AI · Temporal Graphs
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
