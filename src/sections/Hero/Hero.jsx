import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

import AIEngine from "../../components/AIEngine/AIEngine";

import "./Hero.css";

function Hero() {
  return (
    <section className="hero" id="home">
      {/* LEFT SIDE */}
      <div className="hero-left">
        <motion.p
          className="hero-greeting"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          HELLO, I'M
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 0.3,
            duration: 0.7,
          }}
        >
          <span>DHEERAJ</span>
          <br />
          JOHN J
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 0.8,
            duration: 0.6,
          }}
        >
          <TypeAnimation
            sequence={[
              "Machine Learning Engineer",
              2000,
              "AI Engineer",
              2000,
              "Python Full Stack Developer",
              2000,
              "Data Science Enthusiast",
              2000,
            ]}
            wrapper="p"
            speed={55}
            repeat={Infinity}
            className="hero-role"
          />
        </motion.div>

        <motion.p
          className="hero-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.2,
            duration: 0.6,
          }}
        >
          Building intelligent AI systems, modern web applications,
          and data-driven solutions that solve real-world problems.
        </motion.p>

        <motion.div
          className="hero-buttons"
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            delay: 1.6,
            duration: 0.7,
          }}
        >
          <button
            className="primary-btn"
            onClick={() => {
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                });
            }}
          >
            <span>View Projects</span>
            <span className="btn-icon">→</span>
          </button>

          <button
            className="secondary-btn"
            onClick={() => {
              window.open("/resume.pdf", "_blank");
            }}
          >
            <span>Download Resume</span>
            <span className="btn-icon">↓</span>
          </button>
        </motion.div>
      </div>

      {/* RIGHT SIDE */}
      <motion.div
        className="hero-right"
        initial={{
          opacity: 0,
          scale: 0.85,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 1.8,
          duration: 0.8,
        }}
      >
        <AIEngine />
      </motion.div>
    </section>
  );
}

export default Hero;