import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';

const Home = (props) => {
  const {setActivePage} = props;

  useEffect(()=> {
    setActivePage("home")
  }, [])

  return (
    <>
      <section className={styles.homeContainer}>
        <h1>Hi, I'm <span className={styles.name}>Kinte.</span></h1>
        <h2>A Web Developer.</h2>
        <div>
          <a href="https://github.com/kintem" target="_blank">
            <FontAwesomeIcon icon={["fab", "github-square"]} className= {styles.githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/kinte-matulyte/" target="_blank">
            <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.linkedinIcon} />
          </a>
        </div>
      </section>
    </>
  )
}

export default Home;