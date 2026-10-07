import { useState } from "react";
import { motion } from "framer-motion";
import { projects } from "../Projects/projectsData";
import { ecosystems, skillIcons } from "./skillsUniverseData";
import "./Skills.css";

const networkLinks = [
    { id: "web", path: "M 600 380 C 500 305, 405 165, 195 125" },
    { id: "ai", path: "M 600 380 C 700 305, 795 165, 1005 125" },
    { id: "code", path: "M 530 380 C 425 380, 325 380, 185 380" },
    { id: "data", path: "M 670 380 C 775 380, 875 380, 1015 380" },
    { id: "tools", path: "M 555 425 C 470 500, 385 595, 205 635" },
    { id: "databases", path: "M 645 425 C 730 500, 815 595, 995 635" },
];

const normalize = (value) => value.toLowerCase().replace(/[^a-z0-9]/g, "");

function projectsUsing(skillName) {
    const normalizedSkill = normalize(skillName);
    return projects.filter((project) =>
        project.technologies.some((technology) => normalize(technology) === normalizedSkill),
    );
}

function projectLabel(project) {
    return project.title === "Live Civilians Emergency Response System"
        ? "LCERS"
        : project.title;
}

function CurrentFocus() {
    return (
        <aside className="current-focus" aria-label="Current focus">
            <span className="focus-eyebrow">// CURRENT FOCUS</span>
            <p>Full Stack Development</p>
            <p>Data Science &amp; AI</p>
            <p>Building Real World Projects</p>
        </aside>
    );
}

function DeveloperCore({ activeSkill }) {
    return (
        <div className="developer-core" data-engaged={Boolean(activeSkill)}>
            <span className="core-orbit core-orbit--outer"><i /></span>
            <span className="core-orbit core-orbit--middle"><i /></span>
            <span className="core-orbit core-orbit--inner"><i /></span>
            <span className="core-particle core-particle--one" />
            <span className="core-particle core-particle--two" />
            <span className="core-particle core-particle--three" />
            <div className="core-glass">
                <span>DEVELOPER</span>
                <strong>DNA</strong>
                <small>BUILD <i /> LEARN <i /> GROW</small>
            </div>
        </div>
    );
}

function SkillNode({ name, category, activeSkill, onActivate }) {
    const Icon = skillIcons[name];
    const relatedProjects = projectsUsing(name);

    return (
        <button
            className="skill-node"
            type="button"
            data-active={activeSkill === name}
            data-related={activeSkill !== name && category.skills.includes(activeSkill)}
            aria-pressed={activeSkill === name}
            aria-label={`${name}. ${relatedProjects.length ? `Used in ${relatedProjects.map(projectLabel).join(", ")}` : "No featured project mapped yet"}`}
            onMouseEnter={() => onActivate(name)}
            onFocus={() => onActivate(name)}
            onClick={() => onActivate(name)}
        >
            <span className="skill-node-icon" aria-hidden="true">
                {Icon ? <Icon /> : name.slice(0, 2)}
            </span>
            <span className="skill-node-name">{name}</span>
        </button>
    );
}

function SkillEcosystem({ category, activeSkill, onActivate }) {
    const Icon = category.icon;

    return (
        <article
            className={`ecosystem ecosystem--${category.id}`}
            data-active={category.skills.includes(activeSkill)}
        >
            <header className="ecosystem-heading">
                <span className="ecosystem-orb" aria-hidden="true"><Icon /></span>
                <div>
                    <h3>{category.title}</h3>
                    <p>{category.description}</p>
                </div>
            </header>
            <div className="ecosystem-nodes" role="group" aria-label={`${category.title} technologies`}>
                {category.skills.map((name) => (
                    <SkillNode
                        key={name}
                        name={name}
                        category={category}
                        activeSkill={activeSkill}
                        onActivate={onActivate}
                    />
                ))}
            </div>
        </article>
    );
}

function Skills() {
    const [activeSkill, setActiveSkill] = useState("Python");
    const activeCategoryIds = ecosystems
        .filter((category) => category.skills.includes(activeSkill))
        .map((category) => category.id);

    return (
        <motion.section
            className="skills-universe"
            id="skills"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.12 }}
            transition={{ duration: 0.65, ease: "easeOut" }}
        >
            <div className="skills-universe-header">
                <div className="skills-title-block">
                    <span className="skills-eyebrow">// SKILLS UNIVERSE</span>
                    <h2>Developer <span>DNA</span></h2>
                    <p>A combination of technologies, creativity and problem solving that power everything I build.</p>
                </div>
                <CurrentFocus />
            </div>

            <div className="universe-map" aria-label="Interactive map of connected technologies">
                <svg className="universe-connections" viewBox="0 0 1200 760" preserveAspectRatio="none" aria-hidden="true">
                    {networkLinks.map(({ id, path }) => (
                        <path
                            className="connection-path"
                            data-id={id}
                            data-active={activeCategoryIds.includes(id)}
                            d={path}
                            key={id}
                        />
                    ))}
                    <circle className="connection-core" cx="600" cy="380" r="7" />
                </svg>

                {ecosystems.map((category) => (
                    <SkillEcosystem
                        key={category.id}
                        category={category}
                        activeSkill={activeSkill}
                        onActivate={setActiveSkill}
                    />
                ))}

                <div className="core-cell">
                    <DeveloperCore activeSkill={activeSkill} />
                </div>
            </div>

        </motion.section>
    );
}

export default Skills;