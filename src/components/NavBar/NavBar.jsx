import React, {useState} from 'react';
// import { CSSTransition } from 'react-transition-group';
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openStyles = isOpen ? `${styles.menuOpen}` : "";
  const menuIcon = isOpen ? 'times' : 'bars';
  const menu = isOpen ? (<nav className={styles.menu}><Link to="projects" key="1">Projects</Link><Link to="about" key="2">About</Link><Link to="contact" key="3">Contact</Link></nav>) : "";

  return (
    <div className={styles.navBar}>
      <FontAwesomeIcon icon="home" className={styles.homeIcon}/>
      {/* <CSSTransition in={isOpen} timeout={200} classNames="fade-appear"> */}
        {/* <div> */}
        {menu}
        {/* </div> */}
      {/* </CSSTransition> */}
      <span onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={menuIcon} className={`${styles.menuIcon} ${openStyles}`} />
      </span>
    </div>
  );
};

export default NavBar;
