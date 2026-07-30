import "./Skills.css";
import { skillCategories } from "./skillsData";
import SkillCard from "./SkillCard";

function Skills() {
    return (
        <section className="skills" id="skills">

            <div className="skills-header">

                <span>TECHNICAL CAPABILITIES</span>

                <h2>Skills Matrix</h2>

                <p>
                    Core technologies, frameworks, and tools I use to build
                    intelligent, scalable, and user-focused applications.
                </p>

            </div>
            <div className="skills-divider"></div>

            {skillCategories.map((category) => (

                <div className="skills-category" key={category.title}>

                    <h3>{category.title}</h3>

                    <div className="skills-grid">

                        {category.skills.map((skill) => (

                            <SkillCard
                                key={skill.name}
                                skill={skill}
                            />

                        ))}

                    </div>

                </div>

            ))}

        </section>
    );
}

export default Skills;