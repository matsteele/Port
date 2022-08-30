import PersonalIMG from "./personal.jpeg";
import ProfileIMG from "./profile.jpeg";

import ProjectsIMG from "./projects.jpeg";

const contactMethods = {
  LinkedIn: {
    image: ProfileIMG, // profile image
    descr: `While an urban economist I was pulled toward advanced ML techniques and data visualization. Eventually I took a hard vere into software development and startups. I became excited about the potential of web3, enabling investments in creative urban development strategies, and mobilizing private networks and so I embarked on building a blockchain start-up focused on tokenizing the equity in real estate. When the start-up did not pan out for financial and legal reasons, I shifted to a well-financed analytics start-up, Elementus. `,
    link: "https://www.linkedin.com/in/matsteele/", 
    sub_title: "Profile",
  },
  GitHub: {
    image: ProjectsIMG, 
    descr: `Historically I have been keen on projects that solve systemic economic problems. I am curious about applications for web3, particularly in the context of the mobilization of private networks. I am also a big urban planning and economics geek, so I would jump at the opportunity to work on projects that restructure how capital flows or that shape the built environment. 
    `,
    link: "https://github.com/matsteele/",
    sub_title: "Projects",
  },
  Twitter: {
    image: PersonalIMG, 
    descr: `
    In my free time I dabble on personal projects and coordinate intimate trips to serene places with friends. I spend my nights fighting back thoughts on implementation ideas for projects I will never likely get to and so I journal about them instead. 

    I structure fitness training and nutrition programs for myself and the people in my life. I spend an inordinate amount of time reading scientific studies and summaries for maximizing health outcomes. Lately I have been keen on dopamine fasting and other methods for streamlining dopamine for long periods of optimal focus and motivation.
    
    I do not have strong philosophical convictions but would consider myself a fan of stoicicism.
        
    I am a CrossFit enthusiast and find solace in running and swimming.
    
    Check out my twitter to see my rants into the void. 
        
    `,
    link: "https://twitter.com/urbanagrapher", // github link
    sub_title: "Personal",
  },
};

export default contactMethods;
