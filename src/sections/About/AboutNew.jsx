import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./AboutNew.css";

const tabConfig = [
  { id: "profile", title: "PROFILE", label: "CORE", state: "READY" },
  { id: "experience", title: "EXPERIENCE", label: "TIMELINE", state: "SYNCED" },
  { id: "skills", title: "SKILLS", label: "MATRIX", state: "SCANNED" },
  { id: "projects", title: "PROJECTS", label: "ARCHIVE", state: "LOADED" },
  { id: "contact", title: "CONTACT", label: "NODE", state: "ONLINE" },
];

function About() {
  const [tab, setTab] = useState("profile");
  const currentTab = tabConfig.find((item) => item.id === tab) || tabConfig[0];

  return (
    <section className="about" id="about">
      <div className="about-heading">
        <p className="section-tag">ABOUT ME</p>
        <h2>DHEERAJVERSE CONTROL</h2>
        <p>
          Welcome to the AI command center where my profile, experience,
          skills and projects are displayed as a futuristic interface.
        </p>
      </div>

      <div className="about-shell">
        <motion.aside
          className="about-panel"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45 }}
        >
          <div className="panel-intro">
            <div>
              <p className="panel-label">SYSTEM HUB</p>
              <h3>DHEERAJVERSE OS</h3>
            </div>
            <span className="panel-version">v2.0</span>
          </div>

          <p className="panel-copy">
            This dashboard transforms the classic portfolio into an AI-driven
            control experience, with a unique navigation flow and modular page
            states.
          </p>

          <div className="panel-tabs">
            {tabConfig.map((item, index) => (
              <button
                key={item.id}
                className={`panel-tab ${tab === item.id ? "active" : ""}`}
                onClick={() => setTab(item.id)}
              >
                <div>
                  <span>{item.title}</span>
                  <small>{item.label}</small>
                </div>
                <span className="panel-index">0{index + 1}</span>
              </button>
            ))}
          </div>

          <div className="panel-status">
            <div className="status-item">
              <span>NODE</span>
              <strong>{currentTab.state}</strong>
            </div>
            <div className="status-item">
              <span>MODULES</span>
              <strong>AI · ML · WEB</strong>
            </div>
          </div>
        </motion.aside>

        <motion.div
          className="about-display"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.08 }}
        >
          <div className="display-header">
            <div>
              <p className="display-label">LIVE PANEL</p>
              <h3>{currentTab.title}</h3>
            </div>
            <span className="display-state">{currentTab.state}</span>
          </div>

          <div className="display-body">
            <AnimatePresence mode="wait">
              <motion.div
                key={tab}
                initial={{ opacity: 0, x: 16 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -16 }}
                transition={{ duration: 0.35 }}
                className="tab-screen"
              >
                {tab === "profile" && (
                  <>
                    <div className="profile-card">
                      <div className="profile-avatar">
                        <span>DJ</span>
                      </div>
                      <div>
                        <h4>Identity Capsule</h4>
                        <p>
                          I am a Machine Learning Engineer building AI-first
                          systems and modern full-stack experiences for real-world
                          problems.
                        </p>
                      </div>
                    </div>

                    <div className="stats-grid">
                      {[
                        { title: "USER", value: "Dheeraj John" },
                        { title: "ROLE", value: "ML Engineer" },
                        { title: "LOCATION", value: "India" },
                        { title: "EXPERIENCE", value: "1+ Years" },
                      ].map((stat) => (
                        <div className="stat-card" key={stat.title}>
                          <span>{stat.title}</span>
                          <strong>{stat.value}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="log-panel">
                      <p>• Identity validated</p>
                      <p>• AI core online</p>
                      <p>• Command stack ready</p>
                    </div>
                  </>
                )}

                {tab === "experience" && (
                  <>
                    <div className="experience-stage">
                      <div>
                        <h4>Experience Stream</h4>
                        <p>Career milestones rendered as a smart audit trail.</p>
                      </div>
                      <span>2026</span>
                    </div>

                    <div className="timeline-list">
                      {[
                        {
                          year: "2025",
                          title: "Python Full Stack Internship",
                          label: "Django, React, PostgreSQL",
                        },
                        {
                          year: "2025",
                          title: "AI & Data Science Internship",
                          label: "TensorFlow, Scikit-learn",
                        },
                        {
                          year: "2026",
                          title: "LCERS Project",
                          label: "Disaster response AI platform",
                        },
                        {
                          year: "NOW",
                          title: "Open For AI / ML Roles",
                          label: "Building intelligent software",
                          active: true,
                        },
                      ].map((item) => (
                        <div
                          className={`timeline-item ${item.active ? "active" : ""}`}
                          key={item.title}
                        >
                          <strong>{item.title}</strong>
                          <p>{item.label}</p>
                          <span>{item.year}</span>
                        </div>
                      ))}
                    </div>

                    <div className="log-panel">
                      <p>• Timeline synced</p>
                      <p>• Records authenticated</p>
                      <p>• History ready</p>
                    </div>
                  </>
                )}

                {tab === "skills" && (
                  <>
                    <div className="skill-grid">
                      {[
                        { label: "Python", percent: 95 },
                        { label: "Machine Learning", percent: 92 },
                        { label: "Deep Learning", percent: 88 },
                        { label: "React", percent: 86 },
                        { label: "Django", percent: 90 },
                        { label: "TensorFlow", percent: 84 },
                      ].map((skill) => (
                        <div className="skill-item" key={skill.label}>
                          <div className="skill-head">
                            <span>{skill.label}</span>
                            <strong>{skill.percent}%</strong>
                          </div>
                          <div className="skill-bar">
                            <div style={{ width: `${skill.percent}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="log-panel">
                      <p>• Skill matrix mapped</p>
                      <p>• Confidence stable</p>
                      <p>• AI capability online</p>
                    </div>
                  </>
                )}

                {tab === "projects" && (
                  <>
                    <div className="project-grid">
                      {[
                        {
                          name: "LCERS",
                          desc: "Disaster response AI platform.",
                          status: "COMPLETED",
                        },
                        {
                          name: "AURAGLYPH",
                          desc: "AI ecommerce experience.",
                          status: "COMPLETED",
                        },
                        {
                          name: "AI Patient Prioritization",
                          desc: "Hospital triage AI system.",
                          status: "ACTIVE",
                        },
                        {
                          name: "DHEERAJVERSE",
                          desc: "Futuristic portfolio OS.",
                          status: "ACTIVE",
                        },
                      ].map((project) => (
                        <div className="project-card" key={project.name}>
                          <div className="project-head">
                            <strong>{project.name}</strong>
                            <span>{project.status}</span>
                          </div>
                          <p>{project.desc}</p>
                        </div>
                      ))}
                    </div>

                    <div className="log-panel">
                      <p>• Project index live</p>
                      <p>• Repository loaded</p>
                      <p>• Archive online</p>
                    </div>
                  </>
                )}

                {tab === "contact" && (
                  <>
                    <div className="contact-grid">
                      {[
                        { label: "EMAIL", value: "dheerajjohn@email.com" },
                        { label: "GITHUB", value: "github.com/dheerajjohn" },
                        { label: "LINKEDIN", value: "linkedin.com/in/dheerajjohn" },
                        { label: "STATUS", value: "Open To Work" },
                      ].map((item) => (
                        <div className="contact-card" key={item.label}>
                          <span>{item.label}</span>
                          <strong>{item.value}</strong>
                        </div>
                      ))}
                    </div>

                    <div className="log-panel">
                      <p>• Communication node active</p>
                      <p>• Connection endpoints ready</p>
                      <p>• Collaboration open</p>
                    </div>
                  </>
                )}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default About;
