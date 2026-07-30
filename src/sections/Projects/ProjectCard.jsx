import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion } from "framer-motion";

function ProjectCard({ project }) {
    return (
        <motion.div
    className="project-card"
    initial={{ opacity: 0, y: 60 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{
        duration: 0.6
    }}
>

            <div className="project-image">

    {project.image ? (

        <img
            src={project.image}
            alt={project.title}
        />

    ) : (

        <div className="project-placeholder">

            <span>Coming Soon</span>

        </div>

    )}

</div>

            <div className="project-content">

                <h3>{project.title}</h3>

                <h4>{project.category}</h4>

                <p>{project.description}</p>

<div className="tech-stack">

    {project.technologies.map((tech) => (

        <span
            key={tech}
            className="tech-badge"
        >
            {tech}
        </span>

    ))}

</div>
<div className="project-buttons">

    <a
        href={project.liveDemo}
        target="_blank"
        rel="noreferrer"
        className="demo-btn"
    >
        <HiOutlineExternalLink />
        Live Demo
    </a>

    <a
        href={project.github}
        target="_blank"
        rel="noreferrer"
        className="github-btn"
    >
        <FaGithub />
        GitHub
    </a>

</div>
            </div>

        </motion.div>
    );
}

export default ProjectCard;