import sallysays1 from '../images/sallysays1.png';
import planets from '../images/planets.png';
import collegeThrifts from '../images/college-thrifts.png';
import ticketTracker from '../images/ticket-tracker.png';
import morse from '../images/morse.png';
import punkapi from '../images/punkapi.png';

const projects = [
  {
    id: 1,
    name: 'College Thrifts',
    img: collegeThrifts,
    icons: ['fa-brands:react', 'bx-bxl-sass'],
    description: "MVP built for a client in 4 weeks during _nology's Software Developer bootcamp",
    githubURL: '',
    liveURL: 'https://college-thrifts.web.app/',
  },
  {
    id: 2,
    name: 'Sally Says',
    img: sallysays1,
    icons: ['fa-html5', 'fa-brands:js-square', 'bx-bxl-sass'],
    description: 'JavaScript memory game based on Simon Says',
    githubURL: 'https://github.com/kintem/sally-says',
    liveURL: 'https://kintem.github.io/sally-says/',
  },
  {
    id: 3,
    name: 'Planet API',
    img: planets,
    icons: ['fa-brands:react', 'bx-bxl-sass', 'fa-brands:node', 'simple-icons:express'],
    description: 'A front-end built for our own API hosted on Heroku',
    githubURL: 'https://github.com/kintem/planets',
    liveURL: ''
  },
  {
    id: 4,
    name: 'Punk API App',
    img: punkapi,
    icons: ['fa-brands:react', 'bx-bxl-sass'],
    description: 'A front-end built using React for the data provided by Punk API',
    githubURL: 'https://github.com/kintem/punkapi-app',
    liveURL: '',
  },
  {
    id: 5,
    name: 'Morse Code Translator',
    img: morse,
    icons: ['fa-html5', 'fa-brands:js-square', 'fa-brands:css3-alt'],
    description: 'Simple Morse code translator built in 2.5 hours for one of the Tech Test challenges during the _nology bootcamp',
    githubURL: 'https://github.com/kintem/morse-code-translator',
    liveURL: 'https://kintem.github.io/morse-code-translator/',
  },
  {
    id: 6,
    name: 'Ticket Tracker',
    img: ticketTracker,
    icons: ['fa-brands:react', 'bx-bxl-sass'],
    description: 'Ticket tracker built using React and hosted with Firebase',
    githubURL: 'https://github.com/kintem/ticket-tracker',
    liveURL: 'https://ticket-tracker-9fe82.web.app/',
  },
]

export default projects;