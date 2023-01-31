import dashboards from "./dashboards";
import skills from "./skills";
import photos from "./photos";
import studies from "./studies";
import contact from "./contact";

// insights / quotes

const controller = {
  // this would be better as a nested json
  contact: {
    options: contact, // evaluate the sentiment and respond / short term, have some favorite quotes
    prompt0: "about/contact",
    // prompt1: {
    //   default: "I am not a robot",
    //   prompt: "promise you aren't a robot? for the most part",
    // },
  },
  message: {
    options: {}, // evaluate the sentiment and respond / short term, have some favorite quotes
    prompt0: "send me an anon message",
    prompt1: {
      default: "an anon message",
      prompt: "what's on your mind?",
    },
  },
  dashboards: { options: dashboards, prompt0: "dashboards I have built" },
  // skills: [skills, 'skills I have developed'],
  studies: { options: studies, prompt0: "studies I have conducted" },
  photos: {
    options: photos, // evaluate the sentiment and respond / short term, have some favorite quotes
    prompt0: "random photos",
  },
  "mat's terminal": { options: {}, prompt0: "back to main menu" },
};

export default controller;
