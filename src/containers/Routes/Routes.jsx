import React from 'react';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import { Router } from '@reach/router';

const Routes = () => {
  return (
  <Router>
    <Home path="/" />
    <About path="about" />
    <Projects path="projects" />
  </Router>
  )
};

export default Routes;