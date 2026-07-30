import "./About.css";

function About() {
  return (
    <section className="about" id="about">

      <div className="about-header">
        <p className="section-tag">WHO AM I</p>

        <h2>AI PROFILE</h2>

        <p className="section-description">
          Discover the engineer behind the intelligent systems.
        </p>
      </div>

      <div className="about-card">

        <div className="profile-left">

          <div className="status">
            <span className="status-dot"></span>
            Identity Verified
          </div>

          <div className="profile-row">
            <span>Name</span>
            <p>Dheeraj John J</p>
          </div>

          <div className="profile-row">
            <span>Role</span>
            <p>Machine Learning Engineer</p>
          </div>

          <div className="profile-row">
            <span>Education</span>
            <p>B.E. Computer Science Engineering</p>
          </div>

          <div className="profile-row">
            <span>Location</span>
            <p>Tamil Nadu, India</p>
          </div>

        </div>

        <div className="profile-right">

          <h3>AI Summary</h3>

          <p>
            Passionate Machine Learning Engineer focused on
            building intelligent AI systems, scalable Python
            applications, modern web platforms and data-driven
            software that solves real-world problems.
          </p>

        </div>

      </div>

      <div className="stats-grid">

  <div className="stat-card">
    <h3>🎓</h3>
    <h2>Graduate</h2>
    <p>B.E. Computer Science</p>
  </div>

  <div className="stat-card">
    <h3>💻</h3>
    <h2>8+</h2>
    <p>Projects Built</p>
  </div>

  <div className="stat-card">
    <h3>🧠</h3>
    <h2>20+</h2>
    <p>Technologies</p>
  </div>

  <div className="stat-card">
    <h3>🚀</h3>
    <h2>1 Year</h2>
    <p>Internship Experience</p>
  </div>

</div>


<div className="timeline-section">

  <h2 className="timeline-title">
    AI Journey
  </h2>

  <div className="timeline">

    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <span>2022</span>
        <h3>B.E. Computer Science Engineering</h3>
        <p>
          Started my engineering journey with a strong interest
          in programming and software development.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <span>2025</span>
        <h3>Python Full Stack + AI Internship</h3>
        <p>
          Worked on Python, Machine Learning, Django,
          Data Science and AI development.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <span>2026</span>
        <h3>AI Projects</h3>
        <p>
          Built intelligent web applications,
          machine learning models,
          and AI-powered software.
        </p>
      </div>
    </div>

    <div className="timeline-item">
      <div className="timeline-dot"></div>

      <div className="timeline-content">
        <span>Now</span>
        <h3>AI / ML Engineer</h3>
        <p>
          Continuously improving my skills while seeking
          opportunities to build impactful AI solutions.
        </p>
      </div>
    </div>

  </div>

</div>

    </section>
  );
}

export default About;