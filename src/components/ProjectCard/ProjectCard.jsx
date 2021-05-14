import React from 'react';
import { Icon, InlineIcon } from '@iconify/react-with-api';
import styles from './ProjectCard.module.scss';

const ProjectCard = (props) => {
  const { project } = props;

  const iconsJSX = project.icons.map(icon => <Icon icon={icon} className={styles.skillsIcon} key={`pr-card:${icon}`}/>)

  let cardStyles = `${styles.projectCard}`;

  // if (project.id % 2 === 0) {
  //   cardStyles += ` ${styles.left}`;
  // } else {
  //   cardStyles += ` ${styles.right}`;
  // }

  //"flip-up" OR "fade-left"
  return (
    <article className={cardStyles} data-aos={project.id % 2 === 0 ? "fade-left" : "fade-right"}>

      <div className={styles.left}>
        <img src={project.img} alt=""/>
        <h3>{project.name}</h3>
        <hr/>
        <p>{project.description}</p>
      </div>

      <div className={styles.iconContainer}>
        {iconsJSX}

        {project.githubURL ?
          <a href={project.githubURL} target='_blank' rel='noreferrer'>
            <InlineIcon icon={"fa-brands:github"} className={styles.linkIcon}/>
          </a> 
          : null }

        {project.liveURL ?
          <a href={project.liveURL} target='_blank' rel='noreferrer'>
            <InlineIcon icon={"dashicons-admin-site-alt3"} className={styles.linkIcon}/>
          </a> 
          : null }
      </div>
    </article>
  )
}

export default ProjectCard;