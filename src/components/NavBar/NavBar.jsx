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
        color: isCurrent ? '#F65C78' : '#757575'
      }
    };
  }

  const menu = isOpen ? (
    <nav className={styles.menu}>
      <Link 
        to='projects' 
        key='1' 
        getProps={styleActiveLink}
      >
        Projects
      </Link>
      <Link 
        to='about' 
        key='2'
        getProps={styleActiveLink}
      >
        About
      </Link>
      <Link 
        to='contact' 
        key='3' 
        getProps={styleActiveLink}
      >
        Contact
      </Link>
    </nav>
  ) : '';

  return (
    <section className={styles.navBar}>
      <Link to='/portfolio-v2' key='0' getProps={styleActiveLink}>
       <InlineIcon 
          icon={'fa-solid:home'}
        />
      </Link>
      {/* <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}> */}
          {menu}
      {/* </CSSTransitionGroup> */}
      <span onClick={() => setIsOpen(!isOpen)}>
        <InlineIcon 
          icon={isOpen? 'heroicons-solid:x' : 'gg-menu'} 
          className={isOpen ? `${styles.active} ${styles.menuIcon}` : `${styles.menuIcon}`} 
        />
      </span>
    </section>
  );
};

export default NavBar;
