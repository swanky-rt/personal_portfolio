import React from "react";
import { profile } from "../data/profile";

function Projects() {
  return (
    <section id="projects" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-kicker">Projects</p>
          <h2 className="section-title">Selected Work</h2>
          <p className="section-subtitle">
            A mix of research, hackathon, and systems projects that reflect how I like to design,
            build, and evaluate software.
          </p>
        </div>

        <div className="projects-grid">
          {profile.projects.map((proj) => (
            <article key={proj.name} className="card card-hover project-card">
              <div className="card-header">
                <h3 className="card-title">{proj.name}</h3>
              </div>
              <p className="card-text">{proj.summary}</p>
              <div className="project-meta">
                <div className="chip-row">
                  {proj.tech.map((t) => (
                    <span key={t} className="chip chip-small">
                      {t}
                    </span>
                  ))}
                </div>
                {proj.link && (
                  <a
                    href={proj.link}
                    className="project-link"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View on GitHub →
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
