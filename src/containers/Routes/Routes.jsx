import React from 'react';
import { Router } from '@reach/router';
import Home from '../Home';
import About from '../About';

const Routes = (props) => {
  const { setActivePage } = props;

  return (
    <Router>
      <Home path='/' setActivePage={setActivePage} />
      <About path="about" />
      {/* <Projects path="projects" />
      <NotFound default /> */}
    </Router>
  );
};

export default Routes;