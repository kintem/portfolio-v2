import React from 'react';
import { Router } from '@reach/router';
import Home from '../Home';
import About from '../About';
import Projects from '../Projects';

const Routes = (props) => {
  const { setActivePage } = props;

  return (
    <Router>
      <Home path='/' setActivePage={setActivePage} />
      <About path='about' setActivePage={setActivePage} />
      <Projects path='projects' setActivePage={setActivePage} />
    </Router>
  )
};

export default Routes;