import React from 'react';
import { Router } from '@reach/router';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';
import { Router } from '@reach/router';

const Routes = (props) => {
  const { setActivePage } = props;

  return (
    <Router>
      <Home path='/' setActivePage={setActivePage} />
      <About path="about" />
      <Projects path="projects" />
    </Router>
  )
};

export default Routes;