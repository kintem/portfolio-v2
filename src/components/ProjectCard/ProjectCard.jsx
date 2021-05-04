import React from 'react';
import { Icon } from '@iconify/react-with-api';
import styles from './ProjectCard.module.scss';

const ProjectCard = (props) => {
  const { project } = props;

  // const iconsJSX = project.icons.map(icon => <Icon icon={icon} />)

  return (
    <article className={styles.projectCard}>
      <div className={styles.top}>
        <img src={project.img} alt=""/>
        <div className={styles.skillsIcons}>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.projectHeading}>
        <h3>{project.name}</h3>
        <a href="">github</a>
        <a href="">live page</a>
        </div>
        <p>{project.description}</p>
      </div>
    </article>
  )
}

export default ProjectCard;