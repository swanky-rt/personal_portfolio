import React from "react";
import { profile } from "../data/profile";

const icons = {
  code: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
  ),
  brain: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2a4 4 0 0 1 4 4c0 1.1-.9 2-2 2h-4a2 2 0 0 1-2-2 4 4 0 0 1 4-4z"/><path d="M8 8v2a4 4 0 0 0 8 0V8"/><path d="M6 14a6 6 0 0 0 12 0"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>
  ),
  tools: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
  ),
  database: (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
  )
};

function Skills() {
  return (
    <section id="skills" className="section section-alt">
      <div className="container section-inner">
        <div className="section-header reveal">
          <p className="section-kicker">Skills</p>
          <h2 className="section-title">Technical Toolkit</h2>
          <p className="section-subtitle">
            From backend and distributed systems to ML pipelines and observability,
            here are the tools I reach for most often.
          </p>
        </div>

        <div className="skills-grid">
          {profile.skills.map((s, idx) => (
            <div key={s.category} className="skill-card reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="skill-card-icon">{icons[s.icon]}</div>
              <h3 className="skill-card-title">{s.category}</h3>
              <div className="chip-row">
                {s.items.map((item) => (
                  <span key={item} className="chip">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
