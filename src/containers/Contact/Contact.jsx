import React from 'react';
import Heading from '../../components/Heading';
import { InlineIcon } from '@iconify/react-with-api';
import styles from './Contact.module.scss';

const Contact = () => {

  return (
    <section className={styles.contactContainer}>
      <Heading text="Contact" />
      <hr/>
      <p>Feel free to say hello via any of these links!</p>
      <div className={styles.iconContainer} data-aos="zoom-in">
          <a href="https://github.com/kintem" target="_blank" rel="noreferrer">
            <InlineIcon icon={"fa-brands:github-square"} className= {styles.githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/kinte-matulyte/" target="_blank" rel="noreferrer">
            <InlineIcon icon={"fa-brands:linkedin"} className={styles.linkedinIcon} />
          </a>
          <div className={styles.mailIconContainer}>
            <a href="mailto:kintemat@gmail.com">
              <InlineIcon icon={"fluent-mail-20-filled"} className={styles.mailIcon} />
            </a>
          </div>
        </div>

    </section>
  )
}

export default Contact;