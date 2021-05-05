import React, { useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import projects from '../../data/projects';
import styles from './Projects.module.scss';

const Projects = (props) => {
  const {setActivePage} = props;

  useEffect(() => {
    setActivePage('projects')
  }, [])

  return (
    <section className={styles.projects}>
      <h2>Projects</h2>
      <hr/>
      {projects.map(project => <ProjectCard project={project}/>)}
    </section>
  )
}

export default Projects;