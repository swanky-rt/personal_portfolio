import React from "react";
import { profile } from "../data/profile";

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Industry Work</h2>
          <p className="section-subtitle">
            I’ve shipped production systems across payments, infrastructure, and data-intensive
            applications — working closely with engineering, product, and business stakeholders.
          </p>
        </div>

        <div className="experience-timeline">
          {profile.experience.map((exp, idx) => (
            <article key={idx} className="experience-card">
              <div className="experience-header">
                <h3>{exp.role}</h3>
                <p className="experience-company">{exp.company}</p>
                {exp.location && (
                  <p className="experience-location">
                    {exp.location} · {exp.period}
                  </p>
                )}
              </div>
              <ul className="experience-list">
                {exp.highlights.map((h, i) => (
                  <li key={i}>{h}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
