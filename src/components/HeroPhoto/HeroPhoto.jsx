import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import profile from "../../assets/images/profile.png";
import "./HeroPhoto.css";

function HeroPhoto() {

  /* -----------------------------
     One-time Scan Animation
  ----------------------------- */

  const [scanFinished, setScanFinished] = useState(false);
  const [step, setStep] = useState(0);

 useEffect(() => {

  const timers = [

    setTimeout(() => setStep(1), 700),

    setTimeout(() => setStep(2), 1400),

    setTimeout(() => setStep(3), 2100),

    setTimeout(() => setStep(4), 2900),

    setTimeout(() => setStep(5), 3600),

    setTimeout(() => setScanFinished(true), 5300)

  ];

  return () => timers.forEach(clearTimeout);

}, []);

  /* -----------------------------
     Mouse Tilt
  ----------------------------- */

  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const x = useTransform(rotateY, [-15, 15], [-15, 15]);
  const y = useTransform(rotateX, [-15, 15], [15, -15]);

  const handleMouseMove = (e) => {

    const rect = e.currentTarget.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    rotateY.set(((mouseX / width) - 0.5) * 8);
    rotateX.set(((mouseY / height) - 0.5) * -8);

  };

  const handleMouseLeave = () => {

    rotateX.set(0);
    rotateY.set(0);

  };

  return (

    <div className="hero-photo-container">

      <div className="status-badge">
        <span className="status-dot"></span>
        AVAILABLE FOR AI / ML ROLES
      </div>

      <motion.div
        className="hero-photo-card"

        style={{
          rotateX: y,
          rotateY: x,
          transformPerspective: 1200
        }}

        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}

        animate={{
          y: [0, -12, 0]
        }}

        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >

        {/* Glow */}
        <div className="photo-glow"></div>

        {/* Border */}
        <div className="photo-border"></div>

        {/* Scan Line */}
        {!scanFinished && (
          <div className="scan-line"></div>
        )}

        {/* Dark Overlay */}
        {!scanFinished && (
          <div className="scan-overlay"></div>
        )}

        {/* Verification */}
        {!scanFinished && (

          <motion.div
  className="scan-hud"
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
>

  <h4>AI PROFILE VERIFIED</h4>

  {step >= 1 && (
    <div className="hud-row">
      <span>✓ Initializing AI...</span>
    </div>
  )}

  {step >= 2 && (
    <div className="hud-row">
      <span>✓ Identity</span>
      <strong>Dheeraj John</strong>
    </div>
  )}

  {step >= 3 && (
    <div className="hud-row">
      <span>✓ Confidence</span>
      <strong>99.98%</strong>
    </div>
  )}

  {step >= 4 && (
    <div className="hud-row">
      <span>✓ Role</span>
      <strong>ML Engineer</strong>
    </div>
  )}

  {step >= 5 && (
    <div className="hud-row">
      <span>✓ Status</span>
      <strong>ONLINE</strong>
    </div>
  )}

</motion.div>

        )}

        <img
          src={profile}
          alt="Dheeraj John"
          className="hero-photo"
        />

        <div className="hero-info">

          <h3>Dheeraj John</h3>

          <p>AI/ML Engineer</p>

        </div>

      </motion.div>

    </div>

  );

}

export default HeroPhoto;