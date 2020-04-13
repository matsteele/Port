import Email from "./email.svg";
import Twitter from "./twitter.svg";
import Github from "./github.svg";
import Facebook from "./facebook.svg";
import LinkedIn from "./linkedin.svg";
import Instagram from "./instagram.svg";
import Cell from "./cell.svg";


const contactMethods = {
  email: {
    image: Email,
    descr: `Email is always the best way to reach me. I try to respond within two days to brief emails. `,
    link: "mailto:abc@example.com?subject = Feedback&body = Message",
    sub_title: "matsteele@gmail.com"
  },
  cell: {
    image: Cell,
    descr: `I suggest you send a text, as voicemails are often backlogged. WhatsApp or Telegram would be even more effective`,
    sub_title: "206.920.4676"
  },
  github: {
    image: Github,
    descr: `My github is reflective of my non-private dashboards`,
    link: "https://www.linkedin.com/in/matsteele/",
    sub_title: "genus development partners"
  },
  facebook: {
    image: Facebook,
    descr: `Facebook is mostly for close friends`,
    link: "https://www.facebook.com/Matthew.Stephan.Steele",
    sub_title: "matthew.stephan.steele"
  },
  twitter: {
    image: Twitter,
    descr: `follow my ramblings`,
    link: "https://twitter.com/urbanagrapher",
    sub_title: "urbanagrapher"
  },
  instagram: {
    image: Instagram,
    descr: `see a manufactured glimpse into my life`,
    link: "https://www.instagram.com/matsteele/",
    sub_title: "matsteele"
  },
  linkedin: {
    image: LinkedIn,
    descr: `Reach out and connect if you are a developer or looking for one.`,
    link: "https://www.linkedin.com/in/matsteele/",
    sub_title: "matsteele"
  }
};

export default contactMethods;
