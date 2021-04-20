import React from 'react';
import NavBar from '../../components/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './Home.module.scss';

const Home = () => {
  return (
    <>
      <NavBar />
      <section className={styles.homeContainer}>
        <h1>Hi I'm <span className={styles.name}>Kinte</span></h1>
        <h2>Web Developer</h2>
        <div>
          <FontAwesomeIcon icon={["fab", "github-square"]} className= {styles.githubIcon} />
          <FontAwesomeIcon icon={["fab", "linkedin"]} className={styles.  linkedinIcon} />
        </div>
      </section>
    </>
  )
}

export default Home;