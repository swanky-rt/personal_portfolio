import React from "react";
import { profile } from "../data/profile";

const companyColors = {
  "Dell Technologies": "#007DB8",
  "PayPal": "#003087",
  "Altimetrik": "#E85D26",
  "Dell EMC": "#0076CE"
};

function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container section-inner">
        <div className="section-header reveal">
          <p className="section-kicker">Experience</p>
          <h2 className="section-title">Industry Work</h2>
          <p className="section-subtitle">
            I've shipped production systems across payments, infrastructure, and
            data-intensive applications, working closely with engineering, product,
            and business stakeholders.
          </p>
        </div>

        <div className="experience-timeline">
          {profile.experience.map((exp, idx) => (
            <article
              key={idx}
              className="exp-card reveal"
              style={{ animationDelay: `${idx * 0.12}s` }}
            >
              <div className="exp-card-accent" style={{ background: companyColors[exp.company] || "#F59E0B" }}></div>
              <div className="exp-card-body">
                <div className="exp-header">
                  <div>
                    <h3 className="exp-role">{exp.role}</h3>
                    <p className="exp-company">{exp.company}</p>
                  </div>
                  <div className="exp-meta">
                    <span className="exp-period">{exp.period}</span>
                    <span className="exp-location">{exp.location}</span>
                  </div>
                </div>
                <ul className="exp-highlights">
                  {exp.highlights.map((h, i) => (
                    <li key={i}>{h}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
