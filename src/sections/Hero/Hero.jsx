import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import HeroPhoto from "../../components/HeroPhoto/HeroPhoto";
import "./Hero.css";


function Hero() {
  return (
    <section className="hero" id="hero">

      {/* LEFT SIDE */}
      <motion.div
        className="hero-left"
        initial={{ opacity: 0, x: -60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >

        <div className="hero-tag">
          AI • MACHINE LEARNING • FULL STACK
        </div>

        <h1 className="hero-title">
          DHEERAJ <span>JOHN</span>
        </h1>

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

        <p className="hero-description">
          I build intelligent AI systems 
          that solve <br /> real-world 
          problems through Data Science & AI,<br /> ML and
          Full Stack Development.
        </p>

        <div className="hero-buttons">

          <button
            className="primary-btn"
            onClick={() =>
              document
                .getElementById("projects")
                ?.scrollIntoView({
                  behavior: "smooth",
                })
            }
          >
            Explore My Work →
          </button>

          <button
            className="secondary-btn"
            onClick={() =>
              window.open("/resume.pdf", "_blank")
            }
          >
            Download Resume
          </button>

        </div>
        
        <div className="hero-stats">

  <div className="stat-item">
    <h2>12+</h2>
    <p>Projects</p>
  </div>

  <div className="stat-divider"></div>

  <div className="stat-item">
    <h2>20+</h2>
    <p>Technologies</p>
  </div>

  <div className="stat-divider"></div>

  <div className="stat-item">
    <h2>1+</h2>
    <p>Years Experience</p>
  </div>

</div>



      </motion.div>

      {/* RIGHT SIDE */}

      <motion.div
        className="hero-right"
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          delay: .4,
          duration: .8
        }}
      >

        <div className="hero-photo-wrapper">

    <div className="hero-circle"></div>

    <div className="hero-glow"></div>

    <div className="hero-link">
        <span>AI LINK</span>
        <div className="hero-line"></div>
    </div>

    <HeroPhoto />

</div>

      </motion.div>

    </section>
  );
}

export default Hero;