import React from 'react';
import NavBar from '../../components/NavBar';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <>
      <NavBar />
      <div className={styles.projects}></div>
    </>
  )
}

export default Projects;