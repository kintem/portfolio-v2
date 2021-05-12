import React from 'react';
import { Router } from '@reach/router';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

const Routes = () => {
  return (
    <Router>
      <Home path='/portfolio-v2' />
      <About path='about' />
      <Projects path='projects' />
      <Contact path='contact' />
    </Router>
  )
};

export default Routes;