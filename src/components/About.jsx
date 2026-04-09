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
            I started my career as a Software Engineer at Dell EMC, taking end-to-end ownership of storage domain products, and progressively moved into more complex engineering challenges at Altimetrik and PayPal. After seven years in industry, I made a deliberate choice to pursue graduate studies - to deepen my expertise and transition into AI/ML engineering and data science.
I focus on building AI that is reliable, secured, grounded, and actually useful that remains reliable under real-world abuse, edge cases.
          </p>
        </div>

        <div className="about-grid">
          <div className="about-card reveal" style={{ animationDelay: "0.1s" }}>
            <div className="about-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            </div>
            <h3 className="about-heading">From Software Engineer to AI Engineer</h3>
            <p>
              My journey into AI is built on a strong foundation of real-world
              software engineering. Over 7 years at <strong>PayPal</strong>,{" "}
              <strong>Altimetrik</strong>, and <strong>Dell EMC</strong>, I designed
              and shipped high-throughput payment pipelines serving 436M+ users,
              built backend and ML-integrated risk systems with 96% accuracy, and engineered
              infrastructure automation that cut provisioning time by 92%.
            </p>
            <p>
              My hands on experience building distributed systems, applying concurrency, 
              fault tolerance, and production deployment at scale, directly translates 
              to building reliable AI applications. I know what it takes to engineer 
              systems that handle real world load, edge cases, and failure gracefully. 
              Having developed and shipped backend services across payment and storage domains, 
              I understand the full lifecycle from data infrastructure and model integration 
              to API design, monitoring, and production reliability. That same engineering rigor 
              is what I now bring to AI: designing and implementing pipelines that are accurate,robust, scalable, and safe for real users.
            </p>
            <p>
              Currently pursuing my <strong>M.S. in Computer Science at UMass
              Amherst (GPA 3.95)</strong>, I am focused on Machine Learning, AI, 
              Reinforcement Learning, LLMs, and Responsible AI. This summer, I join{" "}
              <strong>Dell Technologies as a Graduate AI Intern</strong>, working on
              next-generation AI-powered products.
            </p>
          </div>

          <div className="about-card reveal" style={{ animationDelay: "0.2s" }}>
            <div className="about-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 6 3 6 3s3 0 6-3v-5"></path></svg>
            </div>
            <h3 className="about-heading">Why Reinforcement Learning</h3>
            <p>
              What drew me to Reinforcement Learning is the idea that an agent can
              learn optimal behavior purely through interaction and feedback, no
              labeled dataset needed. RL sits at the intersection of decision-making,
              planning, and learning, and I find that deeply compelling.
            </p>
            <p>
              At UMass, I have studied RL extensively, from foundational algorithms
              like Q-learning and policy gradients to game-theoretic settings and
              multi-agent environments. For my AI course, I built and benchmarked
              multiple AI poker agents, including a Minimax + Alpha-Beta agent with
              opponent profiling, exploring how strategic reasoning and adaptation
              play out in imperfect-information games.
            </p>
            <p>
              I am particularly interested in how RL, ML and LLMs intersect, whether
              it is RLHF for aligning language models, reward modeling for safer AI,
              or using RL to optimize real-world decision systems like
              recommendation engines, autonomous agents, and adaptive data pipelines.
            </p>
            <h3 className="about-heading" style={{ marginTop: "1.2rem" }}>Education</h3>
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
              <li className="chip">Reinforcement Learning</li>
              <li className="chip">LLM Alignment & Safety</li>
              <li className="chip">Temporal Graph Neural Networks</li>
              <li className="chip">GenAI &amp; RAG Pipelines</li>
              <li className="chip">High-throughput Backend Systems</li>
              <li className="chip">ML Systems & Data Pipelines</li>
              <li className="chip">AI for Healthcare</li>
              <li className="chip">Mentoring & Community</li>
            </ul>
            <p>
              I'm driven by the challenge of building AI that works reliably
              in the real world, systems that combine the rigor of production
              engineering with the intelligence of modern ML. Whether it's grounding
              LLM outputs against SQL databases, training temporal graph models on
              24M+ row datasets, or designing RL agents that adapt to opponents in
              real time, I gravitate toward problems that demand both engineering
              depth and research creativity.
            </p>
            <p>
              Beyond tech, I serve as the <strong>CS Senator</strong> in UMass
              Amherst's Graduate Student Government, where I successfully passed a
              bill expanding TA/RA opportunities. I am the first woman in my family
              to pursue a master's degree, and I am passionate about making CS more
              accessible through mentoring and community building. Outside work, you will
              find me dancing, playing badminton, or discussing ideas using ML and AI.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
