import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { motion, useMotionValue, useTransform } from "framer-motion";
import { fadeUp, floatingImage } from "../../animations/animations";



function ProjectCard({ project }) {
    const x = useMotionValue(0);
const y = useMotionValue(0);
const mouseX = useMotionValue(0);
const mouseY = useMotionValue(0);

const rotateX = useTransform(y, [-50, 50], [8, -8]);
const rotateY = useTransform(x, [-50, 50], [-8, 8]);

const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const relativeX = e.clientX - rect.left;
const relativeY = e.clientY - rect.top;

mouseX.set(relativeX);
mouseY.set(relativeY);

x.set((e.clientX - centerX) / 4);
y.set((e.clientY - centerY) / 4);
};

const handleMouseLeave = () => {
    x.set(0);
    y.set(0);

    mouseX.set(0);
    mouseY.set(0);
};
    return (
        <motion.div
    className="project-card"
    variants={fadeUp}
    style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
    }}
    onMouseMove={handleMouseMove}
    onMouseLeave={handleMouseLeave}
>

        <motion.div
    className="card-spotlight"
    style={{
        left: mouseX,
        top: mouseY,
    }}
/>

            <div className="project-image">

    {project.image ? (

        <motion.img
    src={project.image}
    alt={project.title}
    variants={floatingImage}
    animate="animate"
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