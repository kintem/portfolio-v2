import React, { useEffect } from 'react';
import { Icon, InlineIcon } from '@iconify/react-with-api';
import styles from './Home.module.scss';

const Home = (props) => {
  const {setActivePage} = props;

  useEffect(()=> {
    setActivePage("home")
  }, [])

  return (
      <section className={styles.homeContainer}>
        <h1>Hi, I'm <span className={styles.name}>Kinte.</span></h1>
        <h2>A Web Developer.</h2>
        <div>
          <a href="https://github.com/kintem" target="_blank">
            <Icon icon={"fa-brands:github-square"} className= {styles.githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/kinte-matulyte/" target="_blank">
            <Icon icon={"fa-brands:linkedin"} className={styles.linkedinIcon} />
          </a>
        </div>
      </section>
  )
}

export default Home;