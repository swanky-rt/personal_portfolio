import React from "react";
import { profile } from "../data/profile";

function Hero() {
  return (
    <section id="top" className="section hero">
      <div className="hero-bg-shapes">
        <div className="hero-blob hero-blob-1"></div>
        <div className="hero-blob hero-blob-2"></div>
        <div className="hero-blob hero-blob-3"></div>
      </div>
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-kicker">ML &middot; AI Research &middot; Backend Engineering</p>
          <h1 className="hero-title">
            Hi, I'm <span className="accent">{profile.name}</span>
          </h1>
          <h2 className="hero-subtitle">{profile.tagline}</h2>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-stats">
            <div className="hero-stat">
              <span className="hero-stat-num">7+</span>
              <span className="hero-stat-label">Years Experience</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">3.95</span>
              <span className="hero-stat-label">GPA @ UMass</span>
            </div>
            <div className="hero-stat">
              <span className="hero-stat-num">436M+</span>
              <span className="hero-stat-label">Users Impacted</span>
            </div>
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
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
            <a
              href={profile.links.linkedin}
              className="btn-ghost"
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
              LinkedIn
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="hero-card-glow"></div>
          <div className="hero-avatar-wrap">
            <img
              src="/aarti.jpeg"
              alt="Aarti Kumari"
              className="hero-avatar-img"
            />
          </div>
          <div className="hero-pills">
            <div className="hero-pill hero-pill-1">
              <span className="pill-dot"></span>
              MS CS @ UMass Amherst | GSG Computer Science Senator
            </div>
            <div className="hero-pill hero-pill-2">
              <span className="pill-dot pill-dot-orange"></span>
              Ex-PayPal &middot; Altimetrik &middot; Dell EMC
            </div>
            <div className="hero-pill hero-pill-3">
              <span className="pill-dot pill-dot-teal"></span>
              Incoming AI Intern @ Dell
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
