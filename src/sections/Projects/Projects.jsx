import "./Projects.css";
import { projects } from "./projectsData";
import ProjectCard from "./ProjectCard";
import { motion } from "framer-motion";

function Projects() {
    return (
        <section className="projects" id="projects">

            <motion.div
    className="projects-header"
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.3 }}
    transition={{ duration: 0.7 }}
>

                <span>FEATURED PROJECTS</span>

                <h2>Project Showcase</h2>

                <p>
                    A collection of projects that showcase my expertise in
                    Artificial Intelligence, Machine Learning, Full Stack
                    Development, and modern web technologies.
                </p>

            </motion.div>

            <div className="projects-grid">

                {projects.map((project) => (

                    <ProjectCard
                        key={project.id}
                        project={project}
                    />

                ))}

            </div>

        </section>
    );
}

export default Projects;