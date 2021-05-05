import React from 'react';
import styles from './Heading.module.scss';

const Heading = ({text}) => {
  return (
    <>
      <h2 className={styles.heading}>{text}</h2>
    </>
  )
}

export default Heading;