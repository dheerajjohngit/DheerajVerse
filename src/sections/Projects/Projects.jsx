import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import "./Projects.css";
import { projects } from "./projectsData";

const getProjectCategory = (project) => {
  const details = `${project.title} ${project.subtitle} ${project.description} ${project.technologies.join(" ")}`.toLowerCase();

  if (/disaster|emergency|response/.test(details)) return "RESPONSE SYSTEM";
  if (/interview|candidate/.test(details)) return "AI INTERVIEW";
  if (/data|pandas|streamlit|dataset/.test(details)) return "DATA SCIENCE";
  if (/e-commerce|ecommerce|shopping|product recommendation/.test(details)) return "AI COMMERCE";
  if (/machine learning|\bai\b|\bllm\b|nlp/.test(details)) return "AI SYSTEM";
  if (/react/.test(details) && /python|django/.test(details)) return "FULL STACK";
  return "WEB APPLICATION";
};

function Projects() {
  const prefersReducedMotion = useReducedMotion();
  const [activeIndex, setActiveIndex] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const dragStartX = useRef(0);
  const dragStarted = useRef(false);
  const projectStageRef = useRef(null);
  const activeProject = projects[activeIndex];
  const activeCategory = getProjectCategory(activeProject);

  const goTo = useCallback((offset) => {
    setActiveIndex((currentIndex) => (currentIndex + offset + projects.length) % projects.length);
  }, []);

  const goNext = useCallback(() => goTo(1), [goTo]);
  const goPrev = useCallback(() => goTo(-1), [goTo]);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowRight") {
        event.preventDefault();
        goNext();
      }
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        goPrev();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [goNext, goPrev]);

  const handlePointerDown = (event) => {
    dragStarted.current = true;
    dragStartX.current = event.clientX;
    event.currentTarget.setPointerCapture?.(event.pointerId);
  };

  const handlePointerMove = (event) => {
    if (!dragStarted.current) {
      return;
    }

    const deltaX = event.clientX - dragStartX.current;
    setDragOffset(deltaX);
  };

  const handlePointerUp = () => {
    if (!dragStarted.current) {
      return;
    }

    const swipeThreshold = window.innerWidth < 768 ? 42 : 70;

    if (dragOffset < -swipeThreshold) {
      goNext();
    }

    if (dragOffset > swipeThreshold) {
      goPrev();
    }

    dragStarted.current = false;
    setDragOffset(0);
  };

  useEffect(() => {
    const stage = projectStageRef.current;

    if (!stage) {
      return undefined;
    }

    const handleWheel = (event) => {
      if (Math.abs(event.deltaY) < 10) {
        return;
      }

      event.preventDefault();

      if (event.deltaY > 0) {
        goNext();
      } else {
        goPrev();
      }
    };

    stage.addEventListener("wheel", handleWheel, { passive: false });
    return () => stage.removeEventListener("wheel", handleWheel);
  }, [goNext, goPrev]);

  return (
    <section className="projects" id="projects">
      <motion.div
        className="projects-header"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
      >
       
        <h2>Selected Work & Projects</h2>
        
      </motion.div>

      <div className="projects-showcase">
        <div className="project-atmosphere" aria-hidden="true">
          <span className="atmosphere-particle particle-one" />
          <span className="atmosphere-particle particle-two" />
          <span className="atmosphere-particle particle-three" />
          <span className="atmosphere-particle particle-four" />
          <span className="atmosphere-data-line" />
        </div>
        <div
          ref={projectStageRef}
          className="project-stage"
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
          aria-label="Project showcase carousel"
        >
          {projects.map((project, index) => {
            const offset = ((index - activeIndex + projects.length) % projects.length);
            const wrappedOffset = offset > projects.length / 2 ? offset - projects.length : offset;
            const absOffset = Math.abs(wrappedOffset);

            if (absOffset > 3) {
              return null;
            }

            const isActive = wrappedOffset === 0;
            const translateX = wrappedOffset * 120 + dragOffset * 0.14;
            const translateZ = -Math.abs(wrappedOffset) * 88;
            const rotateY = wrappedOffset * 17 + dragOffset * 0.03;
            const scale = isActive ? 1 : 1 - absOffset * 0.18;
            const opacity = isActive ? 1 : Math.max(0.18, 0.52 - absOffset * 0.12);

            return (
              <article
                key={project.id}
                className={`project-slide ${isActive ? "is-active" : ""}`}
                style={{
                  transform: `translate3d(${translateX}px, ${absOffset * 10}px, ${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`,
                  opacity,
                  zIndex: isActive ? 30 : 18 - absOffset,
                  transition: prefersReducedMotion
                    ? "none"
                    : "transform 0.72s cubic-bezier(0.22, 1, 0.36, 1), opacity 0.5s ease, filter 0.5s ease, box-shadow 0.5s ease",
                  filter: isActive ? "none" : "blur(0.2px) saturate(0.72)",
                  boxShadow: isActive
                    ? "0 26px 60px rgba(7, 7, 12, 0.72), 0 18px 32px rgba(120, 108, 255, 0.18)"
                    : "0 18px 38px rgba(7, 7, 12, 0.45)",
                  willChange: "transform, opacity, filter",
                }}
                aria-hidden={!isActive && absOffset > 1}
              >
                <div className="project-visual">
                  {project.image ? (
                    <img src={project.image} alt={project.title} className="project-image" />
                  ) : (
                    <div className="project-fallback" aria-label={`${project.title} preview`}>
                      <span>{project.title}</span>
                    </div>
                  )}
                  {isActive && (
                    <>
                      <span className="project-featured">Featured Project</span>
                      <span className="project-category">{getProjectCategory(project)}</span>
                    </>
                  )}
                </div>

                <div className="project-card-copy">
                  <div className="project-meta">
                    <div className="project-number">
                      {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
                    </div>
                    {isActive && project.liveDemo && project.liveDemo !== "#" && (
                      <span className="project-live"><span />Live Demo</span>
                    )}
                  </div>
                  <h3>{project.title}</h3>
                  <p className="project-subtitle">{project.subtitle}</p>
                  <p className="project-summary">{project.description}</p>

                  <div className="tech-stack" aria-label={`${project.title} technologies`}>
                    {project.technologies.map((tech) => (
                      <span key={`${project.id}-${tech}`} className="tech-badge">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="project-actions">
                    <a href={project.liveDemo} target="_blank" rel="noreferrer" aria-label={`View ${project.title} project`}>
                      View Project →
                    </a>
                    <a href={project.github} target="_blank" rel="noreferrer" aria-label={`Open ${project.title} GitHub`}>
                      GitHub ↗
                    </a>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <motion.aside
          key={activeProject.id}
          className="project-telemetry"
          aria-label={`${activeProject.title} project details`}
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={prefersReducedMotion ? { duration: 0 } : { duration: 0.4, ease: "easeOut" }}
        >
          <div className="telemetry-heading"><span className="telemetry-pulse" />Active System</div>
          <div className="telemetry-readout">
            <span>Project Class</span>
            <strong>{activeCategory}</strong>
          </div>
          <div className="telemetry-readout">
            <span>Core Stack</span>
            <strong>{activeProject.technologies.slice(0, 2).join(" / ")}</strong>
          </div>
          <div className="telemetry-readout telemetry-readout--last">
            <span>Modules</span>
            <strong>{String(activeProject.technologies.length).padStart(2, "0")} Connected</strong>
          </div>
          <div className="telemetry-spectrum" aria-hidden="true"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
        </motion.aside>

        <div className="project-nav project-nav--floating" aria-label="Project navigation">
          <button type="button" className="project-nav-button project-nav-button--prev" onClick={goPrev} aria-label="Previous project">
            <span aria-hidden="true">←</span>
          </button>

          <button type="button" className="project-nav-button project-nav-button--next" onClick={goNext} aria-label="Next project">
            <span aria-hidden="true">→</span>
          </button>
        </div>

        <div className="projects-progress" aria-label="Project progress indicator">
          <span className="progress-label">{String(activeIndex + 1).padStart(2, "0")}</span>
          <div className="progress-track" role="progressbar" aria-valuemin="1" aria-valuemax={projects.length} aria-valuenow={activeIndex + 1}>
            <span
              className="progress-fill"
              style={{
                width: `${((activeIndex + 1) / projects.length) * 100}%`,
              }}
            />
          </div>
          <span className="progress-label">{String(projects.length).padStart(2, "0")}</span>
        </div>
      </div>
    </section>
  );
}

export default Projects;
