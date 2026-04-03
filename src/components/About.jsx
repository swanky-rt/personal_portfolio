import React from "react";
import { profile } from "../data/profile";

function About() {
  return (
    <section id="about" className="section">
      <div className="container section-inner">
        <div className="section-header reveal">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Who I am</h2>
          <p className="section-subtitle">
            A systems-minded engineer who turns complex ML and backend problems
            into clean, safe, and scalable solutions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card reveal" style={{ animationDelay: "0.1s" }}>
            <div className="about-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <h3 className="about-heading">Background</h3>
            <p>
              Pursuing an M.S. in Computer Science at UMass Amherst, focusing on
              Machine Learning, Reinforcement Learning, Temporal Graphs, and
              Responsible AI. Before grad school, I spent 7+ years in industry building
              payment systems, risk & collections flows, and automation tooling at
              PayPal, Altimetrik, and Dell EMC.
            </p>
            <p>
              I thrive on problems where reliability, performance, and safety all
              matter at once.
            </p>
          </div>

          <div className="about-card reveal" style={{ animationDelay: "0.2s" }}>
            <div className="about-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5"></path></svg>
            </div>
            <h3 className="about-heading">Education</h3>
            <ul className="timeline">
              {profile.education.map((edu, idx) => (
                <li key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.school}</h4>
                    <p className="timeline-role">{edu.degree} &middot; GPA: {edu.gpa}</p>
                    <p className="timeline-meta">{edu.period}</p>
                    <p className="timeline-text">{edu.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-card reveal" style={{ animationDelay: "0.3s" }}>
            <div className="about-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
            </div>
            <h3 className="about-heading">What excites me</h3>
            <ul className="chip-list">
              <li className="chip">LLM Evaluation & Safety</li>
              <li className="chip">Temporal Graph Neural Networks</li>
              <li className="chip">High-throughput Backend Systems</li>
              <li className="chip">ML Systems & Data Pipelines</li>
              <li className="chip">Mentoring & Community</li>
              <li className="chip">AI for Healthcare</li>
            </ul>
            <p>
              Outside of work and research, I enjoy dance, badminton, and sharing
              what I've learned with peers and younger students. I'm the first woman
              in my family to pursue a master's degree.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
