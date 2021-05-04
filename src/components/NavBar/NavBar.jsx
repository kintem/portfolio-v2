import React, {useState} from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import { Link } from "@reach/router";
import { Icon, InlineIcon } from '@iconify/react-with-api';
import styles from './NavBar.module.scss';

const NavBar = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { activePage } = props;

  const menuIcon = isOpen ? 'times' : 'bars';
  const menu = isOpen ? (
    <nav className={styles.menu}>
      <Link 
        to="projects" 
        key="1" 
        className={activePage === 'projects' ? styles.active : ''}
      >
        Projects
      </Link>
      <Link 
        to="about" 
        key="2" 
        className={activePage === 'about' ? styles.active : ''}
      >
        About
      </Link>
      <Link 
        to="contact" 
        key="3" 
        className={activePage === 'contact' ? styles.active : ''}
      >
        Contact
      </Link>
    </nav>
  ) : "";

  return (
    <section className={styles.navBar}>
      <Link to="/" key="0">
       <Icon 
          icon={"fa-solid:home"}
          className={activePage === 'home' ? `${styles.active} ${styles.homeIcon}` : `${styles.homeIcon}`} 
        />
      </Link>
      <CSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}>
          {menu}
      </CSSTransitionGroup>
      <span onClick={() => setIsOpen(!isOpen)}>
        <Icon 
          icon={menuIcon} 
          className={isOpen ? `${styles.active} ${styles.menuIcon}` : `${styles.menuIcon}`} 
        />
      </span>
    </section>
  );
};

export default NavBar;
