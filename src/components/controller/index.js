import projects from "./projects";
import skills from "./skills";
import contact from "./contact";

const controller = {
  projects: [projects, 'projects I have built'],
  skills: [skills, 'skills I have built'],
  contact: [
    contact,
    'ways to connect',
    'I am not a robot',
    "promise you aren't a robot? for the most part"
  ]
};

export default controller;
