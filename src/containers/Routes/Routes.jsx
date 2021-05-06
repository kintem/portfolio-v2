import React from 'react';
import { Router } from '@reach/router';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

const Routes = (props) => {
  const { setActivePage } = props;

  return (
    <Router>
      <Home path='/portfolio-v2' setActivePage={setActivePage} />
      <About path='about' setActivePage={setActivePage} />
      <Projects path='projects' setActivePage={setActivePage} />
      <Contact path='contact' setActivePage={setActivePage} />
    </Router>
  )
};

export default Routes;