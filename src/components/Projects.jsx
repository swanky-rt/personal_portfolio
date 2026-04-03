import React from "react";
import { profile } from "../data/profile";

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header reveal">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            A mix of research, hackathon, and systems projects that reflect how I
            design, build, and evaluate software.
          </p>
        </div>

        <div className="projects-grid">
          {profile.projects.map((proj, idx) => (
            <article
              key={proj.name}
              className="project-card reveal"
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="project-card-top">
                <div className="project-icon">
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path></svg>
                </div>
                {proj.link && (
                  <a
                    href={proj.link}
                    className="project-ext-link"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="View on GitHub"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                )}
              </div>
              <h3 className="project-title">{proj.name}</h3>
              <p className="project-summary">{proj.summary}</p>
              <div className="project-footer">
                <div className="chip-row">
                  {proj.tech.map((t) => (
                    <span key={t} className="chip chip-small">{t}</span>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
