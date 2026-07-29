import "./Hero.css";
import AIEngine from "../../components/AIEngine/AIEngine";

function Hero() {
  return (
    <section className="hero">

      <div className="hero-left">

        <p className="hero-greeting">
          HELLO.
        </p>

        <h1 className="hero-title">
          I'm
          <br />
          <span>DHEERAJ JOHN J</span>
        </h1>

        <p className="hero-role">
          AI Engineer
        </p>

        <div className="hero-buttons">

          <button className="primary-btn">
            View Projects
          </button>

          <button className="secondary-btn">
            Download Resume
          </button>

        </div>

      </div>

      <div className="hero-right">

  <AIEngine />

</div>

    </section>
  );
}

export default Hero;