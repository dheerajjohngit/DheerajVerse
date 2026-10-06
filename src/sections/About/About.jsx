import { motion } from "framer-motion";
import {
  FaCode,
  FaChartBar,
  FaBrain,
  FaLightbulb,
} from "react-icons/fa";
import portraitArtwork from "../../assets/images/portrait.png";
import "./About.css";

const features = [
  { icon: FaCode, title: "Full Stack\nDevelopment" },
  { icon: FaChartBar, title: "Data Science\n& AI" },
  { icon: FaBrain, title: "Machine Learning" },
  { icon: FaLightbulb, title: "Problem Solving" },
];

function About() {
  return (
    <section className="about" id="about">
      <motion.div
        className="about-shell about-shell--poster"
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
      >
        <div className="about-poster">
          <img
            src={portraitArtwork}
            alt="Illustrated portrait of Dheeraj John with blue artwork and handwritten details"
            className="about-poster-image"
          />
        </div>

        <div className="about-copy">
          <div className="about-kicker">
            <span className="kicker-line" />
            <span>ABOUT ME</span>
          </div>

          <h2>
            Curious by nature,
            <br />
            <span>driven to build.</span>
          </h2>

          <p>
            I&apos;m Dheeraj John, a Computer Science graduate who enjoys building
            web applications, working with data, and exploring AI. I turn ideas
            into useful products and keep improving through every project.
          </p>

          <div className="about-focus">
            {features.map(({ icon: Icon, title }) => (
              <div className="focus-item" key={title}>
                <span className="focus-icon"><Icon /></span>
                <span>{title.replace("\n", " ")}</span>
              </div>
            ))}
          </div>

          <button
            className="journey-button"
            onClick={() =>
              document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            View My Journey <span>→</span>
          </button>
        </div>
      </motion.div>
    </section>
  );
}

export default About;