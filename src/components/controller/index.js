import projects from "./projects";
import organizations from "./organizations";
import contact from "./contact";

const controller = {
  projects: [projects, 'projects I have built'],
  skills: [organizations, 'places I have worked'],
  contact: [
    contact,
    'ways to connect',
    'I am not a robot',
    "promise you aren't a robot? for the most part"
  ]
};

export default controller;
