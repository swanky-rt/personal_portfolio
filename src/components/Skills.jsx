import React from "react";
import { profile } from "../data/profile";

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technical Toolkit</h2>
          <p className="section-subtitle">
            From backend and distributed systems to ML pipelines and observability, here are the
            tools I reach for most often.
          </p>
        </div>

        <div className="skills-grid">
          {profile.skills.map((s) => (
            <div key={s.category} className="card card-hover">
              <h3 className="card-title">{s.category}</h3>
              <p className="card-text">{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
