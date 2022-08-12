import dashboards from "./dashboards";
import skills from "./skills";
import photos from "./photos";
import studies from "./studies";
import contact from "./contact";

// insights / quotes 


const controller = {
  // this would be better as a nested json
  contact: [
    contact,
    "ways to connect",
    "I am not a robot",
    "promise you aren't a robot? for the most part",
  ],
  message: [
    {}, // evaluate the sentiment and respond / short term, have some favorite quotes 
    'send me an anon message',
    "an anon message",
    "what's on your mind?",
  ],
  dashboards: [dashboards, "dashboards I have built"],
  // skills: [skills, 'skills I have developed'],
  studies: [studies, "studies I have conducted"],
  photos: [photos, 'random photos'], //, 'any age', 'pick an age'],
  "mat's terminal": [{}, "back to main menu"],

};

export default controller;
