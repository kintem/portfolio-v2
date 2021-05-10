import React from 'react';
import ProjectCard from '../../components/ProjectCard';
import Heading from '../../components/Heading';
import projectData from '../../data/projects';
import styles from './Projects.module.scss';

const Projects = () => {
  return (
    <section className={styles.projectsContainer}>
      <div className={styles.headingContainer}>
        <Heading text={'Projects'}/>
        <hr/>
      </div>
      <div className={styles.projectCardsContainer}>
        {projectData.map(project => <ProjectCard project={project} key={`project:${project.id}`}/>)}
      </div>
    </section>
  )
}

export default Projects;