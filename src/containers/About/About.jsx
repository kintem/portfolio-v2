import React from 'react';
import Heading from '../../components/Heading';
import styles from './About.module.scss';
import { InlineIcon } from '@iconify/react-with-api';
import profileImg from '../../images/profile.jpg';

const About = () => {
  const skillsIcons = ['fa-html5', 'fa-brands:css3-alt', 'fa-brands:js-square', 'fa-brands:react', 'bx-bxl-sass', 'fa-brands:node', 'simple-icons:express'];

  const skillsJSX = skillsIcons.map(icon => <InlineIcon icon={icon} className={styles.skillsIcon} key={`about:${icon}`} />)

  return (
    <section className={styles.aboutContainer}>
      <div className={styles.headingContainer}>
        <Heading text={'About'}/>
        <hr/>
      </div>
        <div className={styles.aboutInfo}>
        <div className={styles.infoContainer} data-aos="zoom-in">
          <img src={profileImg} alt="Kinte Matulyte"/>
          <ul>
            <li>I'm a web developer from London.</li>
            <li>I have a degree in Psychology.</li>
            <li>I like to travel, learn new things and make things look good.</li>
            <li>I started learning to code to create a blog about my travels.</li>
            <li>I have been self-learning web development for several months.</li>
            <li>I have just finished a 12 week Software Developer Bootcamp with <a href="https://nology.io/" target="_blank" rel="noreferrer" className={styles.nology}>_nology</a>, where I gained a working knowledge of several front-end languages and tools, exposure to some back-end technologies and built an MVP for a client.</li>
          </ul>
        </div>
        <div className={styles.skillsContainer} data-aos="zoom-in">
          { skillsJSX}
        </div>
      </div>
    </section>
  )
}

export default About;