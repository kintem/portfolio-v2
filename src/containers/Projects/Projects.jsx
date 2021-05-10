import React, { useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import Heading from '../../components/Heading';
import projectData from '../../data/projects';
import styles from './Projects.module.scss';

const Projects = ({setActivePage}) => {

  useEffect(() => {
    setActivePage('projects');
    console.log('i have been changed');
  }, [])

  return (
    <section className={styles.projectsContainer}>
      <div className={styles.headingContainer}>
        <Heading text={'Projects'}/>
        <hr/>
      </div>
      <div className={styles.projectCardsContainer}>
        {projectData.map(project => <ProjectCard project={project} key={project.id}/>)}
      </div>
    </section>
  )
}

export default Projects;