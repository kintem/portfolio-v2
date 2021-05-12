import React, {useState} from 'react';
// import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from '@reach/router';
import { InlineIcon } from '@iconify/react-with-api';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const styleActiveLink = ({ isCurrent }) => {

    return {
      className: isCurrent ? `${styles.active}` : `${styles.default}`,
      style: {
        color: isCurrent ? '#F65C78' : '#1b1b1b',
      }
    };
  }

  const menu = isOpen ? (
    <nav className={styles.menu} data-aos="fade-left">
      <Link 
        to='projects' 
        key='nav:projects' 
        getProps={styleActiveLink}
      >
        Projects
      </Link>
      <Link 
        to='about' 
        key='nav:about'
        getProps={styleActiveLink}
      >
        About
      </Link>
      <Link 
        to='contact' 
        key='nav:contact' 
        getProps={styleActiveLink}
      >
        Contact
      </Link>
    </nav>
  ) : '';

  let navStyles = isOpen ? `${styles.navBar} ${styles.open}`: `${styles.navBar}`;

  return (
    <section className={navStyles}>
      <span className={styles.iconContainer}>
        <Link to='/portfolio-v2' key='nav:home' getProps={styleActiveLink}>
          <InlineIcon 
            icon={'fa-solid:home'}
          />
        </Link>
      </span>
      {/* <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> */}
          {menu}
      {/* </CSSTransitionGroup> */}
      <span onClick={() => setIsOpen(!isOpen)} className={styles.iconContainer}>
        <InlineIcon 
          icon={isOpen? 'heroicons-solid:x' : 'gg-menu'} 
          className={isOpen ? `${styles.active} ${styles.menuIcon}` : `${styles.menuIcon}`} 
        />
      </span>
    </section>
  );
};

export default NavBar;
