import React, { useEffect } from 'react';
import Heading from '../../components/Heading';
import { Icon, InlineIcon } from '@iconify/react-with-api';
import styles from './Contact.module.scss';

const Contact = ({setActivePage}) => {
  useEffect(() => {
    setActivePage('contact')
  }, [])

  return (
    <section className={styles.contactContainer}>
      <Heading text="Contact" />
      <hr/>
      <p>Feel free to say hello via any of these links!</p>
      <div className={styles.iconContainer}>
          <a href="https://github.com/kintem" target="_blank">
            <InlineIcon icon={"fa-brands:github-square"} className= {styles.githubIcon} />
          </a>
          <a href="https://www.linkedin.com/in/kinte-matulyte/" target="_blank">
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