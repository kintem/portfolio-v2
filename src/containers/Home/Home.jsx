import React from 'react';
import { InlineIcon } from '@iconify/react-with-api';
import styles from './Home.module.scss';

const Home = () => {
  
  return (
      <section className={styles.homeContainer}>
        <h1>Hi, I'm <span className={styles.name}>Kinte.</span></h1>
        <h2>A Web Developer.</h2>
        <div>
          <a href="https://github.com/kintem" target="_blank" rel="noreferrer">
            <InlineIcon icon={"fa-brands:github-square"} className= {styles.githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/kinte-matulyte/" target="_blank" rel="noreferrer">
            <InlineIcon icon={"fa-brands:linkedin"} className={styles.linkedinIcon} />
          </a>
        </div>
      </section>
  )
}

export default Home;