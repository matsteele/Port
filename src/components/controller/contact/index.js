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
    descr: `Leave a voicemail and I might get back to you. I prefer WhatsApp or Telegram`,
    sub_title: "206.920.4676"
  },
  github: {
    image: Github,
    descr: `This was built as a prototype of a blockchain portal for managing equity tailored to real estate developers. The portal consisted of a dashboard for tracking the performance of the token, as well as an interface for showcasing existing and proposed projects. Each project had detailed information available, including a 3d rendering, cashflows, and a spatial analysis.`,
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
    descr: `I am always excited to connect to someone with similar professional interests`,
    link: "https://www.linkedin.com/in/matsteele/",
    sub_title: "matsteele"
  }
};

export default contactMethods;
