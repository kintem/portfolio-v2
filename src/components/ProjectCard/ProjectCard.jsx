import React from 'react';
import { Icon, InlineIcon } from '@iconify/react-with-api';
import styles from './ProjectCard.module.scss';

const ProjectCard = (props) => {
  const { project } = props;

  const iconsJSX = project.icons.map(icon => <Icon icon={icon} className={styles.skillsIcon} />)

  return (
    <article className={styles.projectCard}>

      <div className={styles.left}>
        <img src={project.img} alt=""/>
        <h3>{project.name}</h3>
        <hr/>
        <p>{project.description}</p>
      </div>

      <div className={styles.iconContainer}>
        {iconsJSX}
        <a href="">
          <InlineIcon icon={"fa-brands:github"} className={styles.linkIcon}/>
        </a>
        <a href="">
          <InlineIcon icon={"dashicons-admin-site-alt3"} className={styles.linkIcon}/>
        </a>
      
      </div>
    </article>
  )
}

export default ProjectCard;