import React from 'react';
import { Router } from '@reach/router';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import Contact from '../Contact';

const Routes = ({projectData}) => {
  return (
    <Router>
      <Home path='/' />
      <About path='/about' />
      <Projects path='/projects' projectData={projectData} />
      <Contact path='/contact' />
    </Router>
  )
};

export default Routes;