import React, { useState } from 'react';
import {
  HashRouter,
  Switch,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './containers/Home';
import About from './containers/About';
import Projects from './containers/Projects';
import Contact from './containers/Contact';
// import Routes from './containers/Routes';
import AOS from 'aos';
import projectData from './data/projects';
import 'aos/dist/aos.css';
import styles from './App.module.scss';

const App = () => {
  AOS.init();

  return (
    <div className={styles.App} data-aos="zoom-in">
      <HashRouter basename='/'>
        <NavBar />
      
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/projects">
            <Projects projectData={projectData} />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
