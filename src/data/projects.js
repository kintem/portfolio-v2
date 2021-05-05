import sallysays1 from '../images/sallysays1.png';
import sallysays2 from '../images/sallysays2.png';
import morse from '../images/morse.png';

const projects = [
  {
    name: 'College Thrifts',
    img: sallysays1,
    icons: ['fa-brands:react', 'bx-bxl-sass'],
    description: 'MVP built for a client in 4 weeks during the _nology bootcamp'
  },
  {
    name: 'Sally Says',
    img: sallysays2,
    icons: ['fa-html5', 'fa-brands:js-square', 'bx-bxl-sass'],
    description: 'JavaScript memory game based on Simon Says'
  },
  {
    name: 'Punk API App',
    img: morse,
    icons: ['fa-brands:react', 'bx-bxl-sass'],
    description: 'React app built for Punk API'
  },
  {
    name: 'Morse Code Translator',
    img: morse,
    icons: ['fa-html5', 'fa-brands:js-square', 'fa-brands:css3-alt'],
    description: 'Simple Morse code translator built in 2.5 hours for one of the Tech Test challenges during the _nology bootcamp'
  },
]

export default projects;