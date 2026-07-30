import { skillIcons } from "./skillIcons";
import { FaBrain, FaTools } from "react-icons/fa";
import { MdOutlineScience } from "react-icons/md";

function SkillCard({ skill }) {

    const Icon = skillIcons[skill.name];

    const Fallback = () => {

        if (skill.name.includes("Learning"))
            return <FaBrain />;

        if (
            skill.name.includes("Notebook") ||
            skill.name.includes("Tensor") ||
            skill.name.includes("PyTorch") ||
            skill.name.includes("Keras")
        )
            return <MdOutlineScience />;

        return <FaTools />;
    };

    return (

        <div className="skill-card">

            <div className="skill-icon">

                {Icon ? <Icon /> : <Fallback />}

            </div>

            <h3>{skill.name}</h3>

<p className="skill-subtitle">
    {skill.subtitle}
</p>

<span className="skill-level">
    {skill.level}
</span>

        </div>

    );

}

export default SkillCard;