import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./About.css";

function About() {
  const [tab, setTab] = useState("profile");

  return (
    <section className="about" id="about">

    <div className="about-heading">

    <p className="section-tag">
        ABOUT ME
    </p>

    <h2>
        DHEERAJVERSE OS
    </h2>

    <p>
        Explore my profile, experience, skills and projects
        through an interactive AI interface.
    </p>

</div>

      <div className="os-window">

        {/* HEADER */}
        <div className="os-header">
          <div className="os-dots">
            <span className="dot red"></span>
            <span className="dot yellow"></span>
            <span className="dot green"></span>
          </div>

          <h3>DHEERAJVERSE OS</h3>

          <p>v2.0</p>
        </div>

        {/* BODY */}

        <div className="os-body">

          {/* SIDEBAR */}

          <div className="os-sidebar">

            <button
              className={tab === "profile" ? "active" : ""}
              onClick={() => setTab("profile")}
            >
              PROFILE
            </button>

            <button
              className={tab === "experience" ? "active" : ""}
              onClick={() => setTab("experience")}
            >
              EXPERIENCE
            </button>

            <button
              className={tab === "skills" ? "active" : ""}
              onClick={() => setTab("skills")}
            >
              SKILLS
            </button>

            <button
              className={tab === "projects" ? "active" : ""}
              onClick={() => setTab("projects")}
            >
              PROJECTS
            </button>

            <button
              className={tab === "contact" ? "active" : ""}
              onClick={() => setTab("contact")}
            >
              CONTACT
            </button>

          </div>

          {/* CONTENT */}

          <div className="os-content">

            <AnimatePresence mode="wait">

              <motion.div
                key={tab}
                initial={{ opacity: 0, x: 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.4 }}
              >

                {/* PROFILE */}

               {tab === "profile" && (

<>

<div className="profile-top">

    <div>

        <h2>
            PROFILE DATABASE
            <span className="cursor"></span>
        </h2>

        <p className="profile-subtitle">
            AI generated profile overview
        </p>

    </div>

    <div className="online-status">

        <span className="online-dot"></span>

        ONLINE

    </div>

</div>


<div className="dashboard-grid">

    <div className="dashboard-card">

        <span>USER</span>

        <h3>Dheeraj John</h3>

        <small>Identity Verified ✓</small>

    </div>

    <div className="dashboard-card">

        <span>ROLE</span>

        <h3>ML Engineer</h3>

        <small>AI & Full Stack</small>

    </div>

    <div className="dashboard-card">

        <span>LOCATION</span>

        <h3>India</h3>

        <small>Tamil Nadu</small>

    </div>

    <div className="dashboard-card">

        <span>EXPERIENCE</span>

        <h3>1+ Years</h3>

        <small>Industry Training</small>

    </div>

</div>


<div className="ai-core-section">

    <div className="ai-core">

        <div className="ring ring1"></div>
        <div className="ring ring2"></div>
        <div className="ring ring3"></div>

        <div className="core-center"></div>

        <span className="core-text">
            AI CORE
        </span>

    </div>

    <div className="analysis-info">

        <div className="analysis-header">

            <h3>AI CONFIDENCE</h3>

            <span>96%</span>

        </div>

        <div className="analysis-bar">

            <div></div>

        </div>

    </div>

</div>


<div className="system-terminal">

<p> Loading profile...</p>

<p>✓ Identity Verified</p>

<p>✓ AI Modules Loaded</p>

<p> Waiting for Recruiter...</p>

</div>

</>

)}


 {/* EXPERIENCE */}

                {tab === "experience" && (

<>

<div className="experience-header">

    <div>

        <h2>
            EXPERIENCE LOG
            <span className="cursor"></span>
        </h2>

        <p className="profile-subtitle">
            AI indexed career timeline
        </p>

    </div>

    <div className="online-status">

        <span className="online-dot"></span>

        RECORDS VERIFIED

    </div>

</div>


<div className="timeline-terminal">

    <div className="timeline-node">

        <div className="timeline-circle"></div>

        <div className="timeline-card">

            <span>2025</span>

            <h3>Python Full Stack Internship</h3>

            <p>
                Worked with Django, React,
                PostgreSQL and REST APIs.
            </p>

        </div>

    </div>


    <div className="timeline-node">

        <div className="timeline-circle"></div>

        <div className="timeline-card">

            <span>2025</span>

            <h3>AI & Data Science Internship</h3>

            <p>
                Machine Learning, Data Science,
                TensorFlow and Scikit Learn.
            </p>

        </div>

    </div>


    <div className="timeline-node">

        <div className="timeline-circle"></div>

        <div className="timeline-card">

            <span>2026</span>

            <h3>LCERS Project</h3>

            <p>
                AI based Disaster Response
                Management Platform.
            </p>

        </div>

    </div>


    <div className="timeline-node">

        <div className="timeline-circle active-node"></div>

        <div className="timeline-card active-card">

            <span>NOW</span>

            <h3>Available For AI / ML Roles</h3>

            <p>
                Building intelligent software
                and looking for opportunities.
            </p>

        </div>

    </div>

</div>


<div className="system-terminal">

<p>Loading career history...</p>

<p>✓ Timeline Indexed</p>

<p>✓ Internship Records Verified</p>

<p>Ready...</p>

</div>

</>

)}

                {/* SKILLS */}

                {tab === "skills" && (

<>

<div className="experience-header">

    <div>

        <h2>
            AI SKILL MATRIX
            <span className="cursor"></span>
        </h2>

        <p className="profile-subtitle">
            Real-time capability analysis
        </p>

    </div>

    <div className="online-status">

        <span className="online-dot"></span>

        AI ANALYZING

    </div>

</div>


<div className="skill-grid">

<div className="skill-box">

<h4>Python</h4>

<div className="skill-bar">

<div style={{width:"95%"}}></div>

</div>

<span>EXPERT • 95%</span>

</div>


<div className="skill-box">

<h4>Machine Learning</h4>

<div className="skill-bar">

<div style={{width:"92%"}}></div>

</div>

<span>ADVANCED • 92%</span>

</div>


<div className="skill-box">

<h4>Deep Learning</h4>

<div className="skill-bar">

<div style={{width:"88%"}}></div>

</div>

<span>ADVANCED • 88%</span>

</div>


<div className="skill-box">

<h4>React</h4>

<div className="skill-bar">

<div style={{width:"86%"}}></div>

</div>

<span>ADVANCED • 86%</span>

</div>


<div className="skill-box">

<h4>Django</h4>

<div className="skill-bar">

<div style={{width:"90%"}}></div>

</div>

<span>ADVANCED • 90%</span>

</div>


<div className="skill-box">

<h4>TensorFlow</h4>

<div className="skill-bar">

<div style={{width:"84%"}}></div>

</div>

<span>INTERMEDIATE • 84%</span>

</div>

</div>


<div className="system-terminal">

<p> Running AI capability scan...</p>

<p>✓ 20+ Technologies Indexed</p>

<p>✓ Skill Confidence: 96%</p>

<p> Matrix Ready...</p>

</div>

</>

)}

                {/* PROJECTS */}

                {tab === "projects" && (

<>

<div className="experience-header">

    <div>

        <h2>
            PROJECT DATABASE
            <span className="cursor"></span>
        </h2>

        <p className="profile-subtitle">
            AI indexed project repository
        </p>

    </div>

    <div className="online-status">

        <span className="online-dot"></span>

        DATABASE ONLINE

    </div>

</div>


<div className="project-grid">

    <div className="project-card">

        <div className="project-status complete">
            COMPLETED
        </div>

        <h3>LCERS</h3>

        <p>
            AI powered disaster management platform with
            emergency response system.
        </p>

        <div className="tech-tags">

            <span>Python</span>

            <span>Django</span>

            <span>ML</span>

            <span>Firebase</span>

        </div>

    </div>


    <div className="project-card">

        <div className="project-status complete">
            COMPLETED
        </div>

        <h3>AURAGLYPH</h3>

        <p>
            Premium AI inspired ecommerce platform
            built using React.
        </p>

        <div className="tech-tags">

            <span>React</span>

            <span>CSS</span>

            <span>JavaScript</span>

        </div>

    </div>


    <div className="project-card">

        <div className="project-status active">
            ACTIVE
        </div>

        <h3>AI Patient Prioritization</h3>

        <p>
            Emergency AI system for hospital
            patient prioritization.
        </p>

        <div className="tech-tags">

            <span>Python</span>

            <span>AI</span>

            <span>ML</span>

        </div>

    </div>


    <div className="project-card">

        <div className="project-status active">
            ACTIVE
        </div>

        <h3>DHEERAJVERSE</h3>

        <p>
            AI portfolio operating system with
            futuristic user interface.
        </p>

        <div className="tech-tags">

            <span>React</span>

            <span>Framer</span>

            <span>ThreeJS</span>

        </div>

    </div>

</div>


<div className="system-terminal">

<p> Connecting Project Database...</p>

<p>✓ 12 Projects Indexed</p>

<p>✓ AI Search Enabled</p>

<p> Database Ready...</p>

</div>

</>

)}

                {/* CONTACT */}

                {tab === "contact" && (

<>

<div className="experience-header">

    <div>

        <h2>
            COMMUNICATION NODE
            <span className="cursor"></span>
        </h2>

        <p className="profile-subtitle">
            Secure AI communication channel
        </p>

    </div>

    <div className="online-status">

        <span className="online-dot"></span>

        AVAILABLE

    </div>

</div>


<div className="contact-grid">

<div className="contact-card">

<h4>EMAIL</h4>

<p>dheerajjohn@email.com</p>

<small>Primary Communication</small>

</div>


<div className="contact-card">

<h4>GITHUB</h4>

<p>github.com/dheerajjohn</p>

<small>Repositories Available</small>

</div>


<div className="contact-card">

<h4>LINKEDIN</h4>

<p>linkedin.com/in/dheerajjohn</p>

<small>Professional Network</small>

</div>


<div className="contact-card">

<h4>STATUS</h4>

<p>Open To Work</p>

<small>AI / ML Opportunities</small>

</div>

</div>


<div className="system-terminal">

<p> Initializing Communication...</p>

<p>✓ Email Server Online</p>

<p>✓ LinkedIn Connected</p>

<p>✓ GitHub Synced</p>

<p> Waiting For Collaboration...</p>

</div>

</>

)}
              </motion.div>

            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;