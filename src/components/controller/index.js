import dashboards from "./dashboards";
import skills from "./skills";
import blog from './blog';
import studies from "./studies";
import contact from "./contact";

const controller = {
  dashboards: [dashboards, 'dashboards I have built'],
  // skills: [skills, 'skills I have developed'],
  studies:[studies, 'studies I have conducted'],
  // blog: [blog, 'my blog posts'],
  contact: [
    contact,
    'ways to connect',
    'I am not a robot',
    "promise you aren't a robot? for the most part"
  ]
};

export default controller;
