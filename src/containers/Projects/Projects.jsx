import React, { useEffect } from 'react';
import ProjectCard from '../../components/ProjectCard';
import Heading from '../../components/Heading';
import projectData from '../../data/projects';
import styles from './Projects.module.scss';

const Projects = ({setActivePage}) => {

  useEffect(() => {
    setActivePage('projects')
  })

  return (
    <section className={styles.projects}>
      <Heading text={'Projects'}/>
      <hr/>
      {projectData.map(project => <ProjectCard project={project}/>)}
    </section>
  )
}

export default Projects;