import React, {useState} from 'react';
// import { CSSTransition } from 'react-transition-group';
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
    <div className={styles.navBar}>
      <Link to="/" key="0">
        <FontAwesomeIcon 
          icon="home" 
          className={activePage === 'home' ? `${styles.active} ${styles.homeIcon}` : `${styles.homeIcon}`} 
        />
      </Link>
      {/* <CSSTransition in={isOpen} timeout={200} classNames="fade-appear"> */}
        {/* <div> */}
        {menu}
        {/* </div> */}
      {/* </CSSTransition> */}
      <span onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon 
          icon={menuIcon} 
          className={isOpen ? `${styles.active} ${styles.menuIcon}` : `${styles.menuIcon}`} />
      </span>
    </div>
  );
};

export default NavBar;
