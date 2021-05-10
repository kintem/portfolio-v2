import sallysays1 from '../images/sallysays1.png';
import collegeThrifts from '../images/college-thrifts.png';
import ticketTracker from '../images/ticket-tracker.png';
import morse from '../images/morse.png';

const projects = [
  {
    id: 'pr1',
    name: 'College Thrifts',
    img: collegeThrifts,
    icons: ['fa-brands:react', 'bx-bxl-sass'],
    description: 'MVP built for a client in 4 weeks during the _nology bootcamp',
    githubURL: '',
    liveURL: 'https://college-thrifts.web.app/',
  },
  {
    id: 'pr2',
    name: 'Sally Says',
    img: sallysays1,
    icons: ['fa-html5', 'fa-brands:js-square', 'bx-bxl-sass'],
    description: 'JavaScript memory game based on Simon Says',
    githubURL: 'https://github.com/kintem/sally-says',
    liveURL: 'https://kintem.github.io/sally-says/',
  },
  {
    id: 'pr3',
    name: 'Punk API App',
    img: '',
    icons: ['fa-brands:react', 'bx-bxl-sass'],
    description: 'A front-end for Punk API built using React',
    githubURL: 'https://github.com/kintem/punkapi-app',
    liveURL: '',
  },
  {
    id: 'pr4',
    name: 'Morse Code Translator',
    img: morse,
    icons: ['fa-html5', 'fa-brands:js-square', 'fa-brands:css3-alt'],
    description: 'Simple Morse code translator built in 2.5 hours for one of the Tech Test challenges during the _nology bootcamp',
    githubURL: 'https://github.com/kintem/morse-code-translator',
    liveURL: 'https://kintem.github.io/morse-code-translator/',
  },
  {
    id: 'pr5',
    name: 'Ticket Tracker',
    img: ticketTracker,
    icons: ['fa-brands:react', 'bx-bxl-sass'],
    description: 'Ticket tracker app built using React and hosted with Firebase',
    githubURL: 'https://github.com/kintem/ticket-tracker',
    liveURL: 'https://ticket-tracker-9fe82.web.app/',
  },
]

export default projects;