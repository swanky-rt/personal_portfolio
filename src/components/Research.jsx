import React from "react";
import { profile } from "../data/profile";

function Research() {
  return (
    <section id="research" className="section">
      <div className="container section-inner">
        <div className="section-header reveal">
          <p className="section-kicker">Research & Learning</p>
          <h2 className="section-title">Research</h2>
          <p className="section-subtitle">
            Combining rigorous experimentation with practical questions about
            utility, privacy, and safety in ML systems.
          </p>
        </div>

        <div className="research-grid">
          {profile.research.map((r, idx) => (
            <article key={idx} className="research-card reveal" style={{ animationDelay: `${idx * 0.12}s` }}>
              <div className="research-card-header">
                <span className="research-period">{r.period}</span>
                {r.link && (
                  <a href={r.link} className="project-ext-link" target="_blank" rel="noopener noreferrer" aria-label="View on GitHub">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  </a>
                )}
              </div>
              <h3 className="research-title">{r.title}</h3>
              <p className="research-role">{r.role}</p>
              <p className="research-desc">{r.description}</p>
              {r.topics && (
                <div className="chip-row">
                  {r.topics.map((t) => (
                    <span key={t} className="chip chip-small">{t}</span>
                  ))}
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Research;
