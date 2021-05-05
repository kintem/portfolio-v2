import React, {useEffect} from 'react';
import Heading from '../../components/Heading';
import styles from './About.module.scss';
import { Icon, InlineIcon } from '@iconify/react-with-api';
import profileImg from '../../images/profile.jpg';

const About = ({setActivePage}) => {

  useEffect(() => {
    setActivePage('about')
  }, [])

  const skillsIcons = ['fa-html5', 'fa-brands:css3-alt', 'fa-brands:js-square', 'fa-brands:react', 'bx-bxl-sass', 'fa-brands:node', 'simple-icons:express'];

  const skillsJSX = skillsIcons.map(icon => <InlineIcon icon={icon} className={styles.skillsIcon} />)

  return (
    <section className={styles.about}>
      <Heading text={'About'}/>
      <hr/>
      <img src={profileImg} alt=""/>
      <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Commodi sapiente laborum quam provident, aliquid quaerat ad quibusdam dolore, distinctio maiores labore. Consectetur quisquam ducimus odio esse iste, inventore deserunt adipisci.</p>
      <div className={styles.skillsContainer}>
        {skillsJSX}
      </div>
    </section>
  )
}

export default About;