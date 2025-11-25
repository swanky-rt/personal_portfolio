import React from "react";
import { profile } from "../data/profile";

function Research() {
  return (
    <section id="research" className="section">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-kicker">Research & Learning</p>
          <h2 className="section-title">Research & Advanced Coursework</h2>
          <p className="section-subtitle">
            I enjoy combining rigorous experimentation with practical questions about utility,
            privacy, and safety in ML systems.
          </p>
        </div>

        <div className="research-grid">
          {profile.research.map((r, idx) => (
            <article key={idx} className="card card-hover">
              <h3 className="card-title">{r.title}</h3>
              <p className="research-role">{r.role}</p>
              <p className="card-text">{r.description}</p>
              {r.topics && (
                <div className="chip-row">
                  {r.topics.map((t) => (
                    <span key={t} className="chip chip-small">
                      {t}
                    </span>
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
