import Email from "./email.svg";
import Twitter from "./twitter.svg";
import Github from "./github.svg";
import Facebook from "./facebook.svg";
import LinkedIn from "./linkedin.svg";
import Instagram from "./instagram.svg";
import Cell from "./cell.svg";


const contactMethods = {
  'where I have been': {
    image: Email, // profile image
    descr: `  `, 
    // I celebrate my successes sure, but my failtures were more defining and probably more interesting. 
    // I fear I failed the network of idealistic motivated and highly capable individuals I built with CoFED and KCFC
    // as salaries and revenues weren't significant enough to sustain in the anti-captilist co-op world they existed in
    // I failed at helping move Indonesia toward a more liberal urban future. 
    // The more the World Bank pushed for more sustainable development, the stronger the country pushed back against western influence. 
    // I failed at building a start up. I learned more in these two years than in either of my graduate degrees doing so. 
    // 
    link: 'mailto:abc@example.com?subject = Feedback&body = Message', // / linked In link
    sub_title: 'matsteele@gmail.com',
  },
  'where I am going': {
    image: Github, // video circulating with a drone 
    descr: `My github is reflective of my non-private dashboards`, 
    // somewhere calm, full of thoughtful relationships, and ideally a view
    // 
    // I have failed a lot in life, and , living a lot of life, looking for substance / clear solutions grounded in pressing problems
    // keep this short 
    // passionate about the power of private networks,  (make everything you say paradoxical)
    code: 'https://github.com/matsteele/multifamily_analysis',// make link work twice link 1, and link 2
    link: 'https://www.linkedin.com/in/matsteele/', // github link
    sub_title: 'genus development partners',
  },
  contact: {
    image: Facebook,
    descr: `Facebook is mostly for close friends`,
    link: 'https://www.facebook.com/Matthew.Stephan.Steele',
    sub_title: 'matthew.stephan.steele',
  },
  twitter: {
    image: Twitter,
    descr: `follow my ramblings`,
    link: 'https://twitter.com/urbanagrapher',
    sub_title: 'urbanagrapher',
  },
  instagram: {
    image: Instagram,
    descr: `see a manufactured glimpse into my life`,
    link: 'https://www.instagram.com/matsteele/',
    sub_title: 'matsteele',
  },
  linkedin: {
    image: LinkedIn,
    descr: `Reach out and connect if you are a developer or looking for one.`,
    link: 'https://www.linkedin.com/in/matsteele/',
    sub_title: 'matsteele',
  },
};

export default contactMethods;
