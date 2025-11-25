import React from "react";
import { profile } from "../data/profile";

function About() {
  return (
    <section id="about" className="section">
      <div className="container section-inner">
        <div className="section-header">
          <p className="section-kicker">About</p>
          <h2 className="section-title">Who I am</h2>
          <p className="section-subtitle">
            A systems-minded engineer who enjoys turning complex ML and backend problems
            into clean, safe, and scalable solutions.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card">
            <h3 className="about-heading">Background</h3>
            <p>
              I’m currently pursuing an{" "}
              <strong>M.S. in Computer Science (Data Science concentration) at UMass Amherst</strong>,
              where I focus on Machine Learning, Reinforcement Learning, Temporal Graphs, and
              Responsible AI. Before grad school, I spent several years in industry building
              payment systems, risk & collections flows, and automation tooling at PayPal,
              Altimetrik, and Dell EMC.
            </p>
            <p>
              I like working on problems where <strong>reliability</strong>,{" "}
              <strong>performance</strong>, and <strong>safety</strong> all matter at once — whether
              that’s optimizing a wallet microservice or hardening an ML pipeline against privacy
              and misalignment risks.
            </p>
          </div>

          <div className="about-card">
            <h3 className="about-heading">Education</h3>
            <ul className="timeline">
              {profile.education.map((edu, idx) => (
                <li key={idx} className="timeline-item">
                  <div className="timeline-dot"></div>
                  <div className="timeline-content">
                    <h4>{edu.school}</h4>
                    <p className="timeline-role">{edu.degree}</p>
                    <p className="timeline-meta">{edu.period}</p>
                    <p className="timeline-text">{edu.details}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="about-card">
            <h3 className="about-heading">What I’m excited about</h3>
            <ul className="chip-list">
              <li className="chip">LLM evaluation & safety</li>
              <li className="chip">Temporal graph neural networks</li>
              <li className="chip">High-throughput backend systems</li>
              <li className="chip">ML systems & data pipelines</li>
              <li className="chip">Mentoring & community building</li>
            </ul>
            <p>
              Outside of work and research, I enjoy dance, badminton, and sharing what I’ve learned
              with peers and younger students.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
