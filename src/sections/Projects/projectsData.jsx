import auraglyph from "../../assets/projects/auraglyph.png";
import lcers from "../../assets/projects/lcers.png";

export const projects = [
  {
    id: 1,
    title: "AURAGLYPH",
    image: auraglyph,
    category: "AI Inspired E-Commerce Platform",
    description: "AURAGLYPH is an AI-powered e-commerce platform that leverages machine learning algorithms to provide personalized product recommendations, enhancing the shopping experience for users.",
    technologies: [
        "React",
        "Django",
        "PostgreSQL",
        "Bootstrap"
    ],

    liveDemo: "#",
    github: "#"
},

  {
    id: 2,
    title: "Live Civilians Emergency Response System",
    image: lcers,
    category: "AI Disaster Management System",
    description:
      "A disaster management platform that provides emergency alerts, safe route guidance, and AI-assisted response support.",
    technologies: [
      "Python",
      "Django",
      "Machine Learning",
      "Firebase"
    ],
    liveDemo: "#",
    github: "#"
  },

  {
    id: 3,
    title: "AI Data Analyst",
    image: null,
    category: "Talk to Your Dataset",
    description:
      "An AI-powered application that allows users to interact with datasets using natural language queries.",
    technologies: [
      "Python",
      "Pandas",
      "LLM",
      "Streamlit"
    ],
    liveDemo: "#",
    github: "#"
  }
];