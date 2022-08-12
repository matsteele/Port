import PersonalIMG from "./personal.jpeg";
import ProfileIMG from "./profile.jpeg";

import ProjectsIMG from "./projects.jpeg";

const contactMethods = {
  LinkedIn: {
    image: ProfileIMG, // profile image
    descr: `I am a full stack data scientist. I arrived here after becoming increasingly capable at quantitative methods. While an urban economist I was pulled toward advanced ML techniques, initially using frameworks in R and then Python. Eventually I found that the presentation of data analysis was critical to its understanding and impact. I began to specialize in data visualization techniques using JavaScript. I took a hard vere into software development and startups after working at the World Bank. I was excited about the potential of web3, enabling investments in creative urban development ideas, and mobilizing private networks and so embarked on building a blockchain start-up focused on tokenizing the equity in real estate. In building this project I gained a foundation for blockchain engineering, data engineering, and backend development. When the start-up did not pan out for financial and legal reasons, I shifted to a well-financed analytics start-up, Elementus. There I developed dynamic and interactive analytical products and learned a lot more about the blockchain ecosystem.
    check out my LinkedIn for details
    or gmail matsteele 
    `,
    link: "https://www.linkedin.com/in/matsteele/", 
    sub_title: "Profile",
  },
  GitHub: {
    image: ProjectsIMG, 
    descr: `This page is intended to help position me for consulting work, exciting job prospects, and business proposals. Reach out to my LI to connect if you have something exciting to discuss. 

    Historically I have been keen on projects that solve systemic economic problems. I am curious about applications for web3, particularly in the context of the mobilization of private networks. I am also a big urban planning geek, so I would jump at an opportunity to work on projects that shape the built environment.  That said, my key priority is joining a company with a grounded business strategy and a stable, even if modest, revenue stream in rapidly evolving industries. Regardless of what I build and where I work, it’s critical that I am dealing with smart but humble personas passionate about the specific economic issues/problems they are grappling with, in an inclusive supportive work culture.     
    `,
    link: "https://github.com/matsteele/",
    sub_title: "Projects",
  },
  Twitter: {
    image: PersonalIMG, 
    descr: `
    In my personal time I spend an inordinate amount of time reading scientific studies and summaries for maximizing health outcomes. Lately I have been keen on dopamine fasting and other methods for streamlining dopamine for long periods of optimal focus and motivation.

    I do not have strong philosophical convictions but would consider myself a fan of stoicicism.
        
    I find solace in running and swimming.
        
    I spend my nights fighting back thoughts on implementation ideas for projects I will never likely get to and so I journal about them instead. 
    
    Check out my twitter to see my rants into the void.     
    `,
    link: "https://twitter.com/urbanagrapher", // github link
    sub_title: "personal",
  },
};

export default contactMethods;
