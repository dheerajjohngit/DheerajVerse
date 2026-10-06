import {
  FaBrain,
  FaChartBar,
  FaCode,
  FaDatabase,
  FaTools,
} from "react-icons/fa";
import { skillIcons } from "./skillIcons";

export { skillIcons };

export const ecosystems = [
  {
    id: "web",
    title: "WEB",
    description: "Designing modern, responsive experiences",
    icon: FaCode,
    skills: ["HTML5", "CSS3", "JavaScript", "React", "Bootstrap", "Django", "Flask", "REST API"],
  },
  {
    id: "ai",
    title: "AI / ML",
    description: "Turning data into intelligent solutions",
    icon: FaBrain,
    skills: ["Python", "Machine Learning", "Deep Learning", "TensorFlow", "PyTorch", "Scikit-learn", "Keras", "LLM"],
  },
  {
    id: "code",
    title: "CODE",
    description: "Languages that bring ideas to life",
    icon: FaCode,
    skills: ["Python", "JavaScript", "Java", "C / Basics"],
  },
  {
    id: "data",
    title: "DATA",
    description: "Exploring, analyzing and visualizing data",
    icon: FaChartBar,
    skills: ["NumPy", "Pandas", "Matplotlib", "Seaborn", "EDA", "Streamlit"],
  },
  {
    id: "tools",
    title: "TOOLS",
    description: "Tools that boost productivity",
    icon: FaTools,
    skills: ["Git", "GitHub", "VS Code", "Jupyter Notebook", "Postman"],
  },
  {
    id: "databases",
    title: "DATABASES",
    description: "Storing and managing data efficiently",
    icon: FaDatabase,
    skills: ["PostgreSQL", "SQLite", "Firebase", "MySQL"],
  },
];