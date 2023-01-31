// import genusIcon from './logos/Genus.png';
// import progenyIcon from './logos/Progeny.png';
import worldbank28 from './worldbank28.jpeg';
import neice from './withNiece26.jpeg';
import atUW23 from './atUW23.jpeg';
import inNY29 from './inNY29.jpeg';
import withAdoptedSis from './withAdoptedSis33.jpg';
import agung from './agung26.jpeg';
import indo27 from './indo27.jpeg';
import indoSemUni27 from './indoSemUni27.jpeg';
import favelaVisit26 from './favelaVisit26.jpeg';
import inSaoPaulo26 from './inSaoPaulo26.jpg';

import inSingapore25 from './inSingapore25.jpeg';
import inThailand from './inThailand.jpeg';
import spain29 from './spain 29.jpeg';
import penn26 from './penn26.jpeg';
import wedding25 from './wedding25.jpeg';


// remove hover link effect
// square photos 
// put in random ones by age
// put in prompt to ask for age
// auto complete broken

const Photos = {
  "World Bank": {
    image: worldbank28,
    descr: `In the World Bank Jakarta Office.`,
    link: '',
    sub_title: '28',
    age: 28
  },
  "meeting my niece": {
    image: neice,
    descr: `When I met my baby niece`,
    link: '',
    sub_title: '26',
    age: 26
  },
  "graduating undergrad": {
    image: atUW23,
    descr: `Here with my step mother at my graduation from UW's urban planning program. She is a professor at UW. It was great to be able to go to school where she taught.`,
    link: '',
    sub_title: '22',
    age: 22
  },
  "meeting my niece": {
    image: neice,
    descr: `When I met my baby niece`,
    link: '',
    sub_title: '25',
    age: 25
  },
  "with adopted sis": {
    image: withAdoptedSis,
    descr: `My dad adopted the sweetest little girl `,
    link: '',
    sub_title: '33',
    age: 33
  },
  "climbed Mount Agung": {
    image: agung,
    descr: `My good friend from Penn came to visit me in Indonesia and we spent all night climbing Mount Agung in Bali`,
    link: '',
    sub_title: '27',
    age: 27
  },
  "Moved to NY": {
    image: inNY29,
    descr: `After finishing my second masters at Penn, I moved to NY to build my own start-up`,
    link: '',
    sub_title: '29',
    age: 29
  },
  "World Bank Excursion": {
    image: indo27,
    descr: `I worked closely with the Semarang City Government to help them cenralize and upgrade their data systems.`,
    link: '',
    sub_title: '28',
    age: 28
  },
  "Visit to local University": {
    image: indoSemUni27,
    descr: `I worked closely with local Universities in helping them streamline the develompent of large infrastructure studies.`,
    link: '',
    sub_title: '27',
    age: 27
  },
  "Sao Paulo Penn Studio": {
    image: inSaoPaulo26,
    descr: `I had an incredible experience with my interdisciplinary team working with the Sao Paulo's urban planning department to reconcieve a development plan for the most blighted corner for their historic downtown area.`,
    link: '',
    sub_title: '26',
    age: 26
  },
  "Favela Community Center": {
    image: favelaVisit26,
    descr: `While in Rio, our studio team was given the opportunity to meet local planners and community organizers developing the Favelas. We were given tours of many of their recent projects`,
    link: '',
    sub_title: '26',
    age: 26
  },
  "Singapore Subway": {
    image: inSingapore25,
    descr: `Spent the week visiting our parnter in developing our studies, the MIT City Form Lab, with an office in Singapore, `,
    link: '',
    sub_title: '26',
    age: 26
  },
  "Thailand Trip": {
    image: inThailand,
    descr: `Took an extended trip through South East Asia before starting graduate school at Penn `,
    link: '',
    sub_title: '24',
    age: 24
  },
  "Penn Graduation": {
    image: penn26,
    descr: `Here celebrating with my Sao Paulo studio team at the Design School's graduation Ball`,
    link: '',
    sub_title: '26',
    age: 26
  },
  "Madrid": {
    image: spain29,
    descr: `Took a two week trip to Madrid. It was the first time in ten years I had been back. I spent 8 months there while an undergraduate student at UW.`,
    link: '',
    sub_title: '30',
    age: 30
  },
  "San Juan Wedding": {
    image: wedding25,
    descr: `Attended the San Juan Island weeding of good friends whom I initially introduced.`,
    link: '',
    sub_title: '25',
    age: 25
  },
  "San Juan Wedding": {
    image: wedding25,
    descr: `Attended the San Juan Island weeding of good friends whom I initially introduced.`,
    link: '',
    sub_title: '25',
    age: 25
  },
};


const photoArray = Object.entries(Photos);
photoArray.sort((a, b) =>  b[1].age- a[1].age);
const sortedPhotos = Object.fromEntries(photoArray);

export default sortedPhotos;
