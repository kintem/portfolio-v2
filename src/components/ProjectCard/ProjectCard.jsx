import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styles from './ProjectCard.module.scss';

const ProjectCard = (props) => {
  const { project } = props;

  const iconsJSX = project.icons.map(icon => <FontAwesomeIcon icon={icon} />)

  return (
    <article className={styles.projectCard}>
      <img src={project.img} alt=""/>
      <h4>{project.name}</h4>
    </article>
  )
}

export default ProjectCard;