import { personal, experience, projects } from "../data/portfolio";

const bootSequence = [
  {
    type: "command",
    text: "Connecting Neural Core...",
  },

  {
    type: "success",
    text: "Connected",
  },

  {
    type: "command",
    text: "Reading Identity...",
  },

  {
    type: "success",
    text: personal.name,
  },

  {
    type: "command",
    text: "Loading Experience...",
  },

  ...experience.map((item) => ({
    type: "success",
    text: item,
  })),

  {
    type: "command",
    text: "Indexing Projects...",
  },

  ...projects.map((item) => ({
    type: "success",
    text: item,
  })),

  {
    type: "command",
    text: "Launching Interface...",
  },
];

export default bootSequence;