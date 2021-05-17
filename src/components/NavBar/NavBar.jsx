import React, {useState} from 'react';
import { NavLink } from 'react-router-dom';
import { InlineIcon } from '@iconify/react-with-api';
import styles from './NavBar.module.scss';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const activeStyle = {
    color: '#F65C78',
    opacity: 1
  };

  const menu = isOpen ? (
      <nav className={styles.menu} data-aos="fade-left">
        <NavLink 
          exact to='projects' 
          key='nav:projects'
          activeStyle={activeStyle}
        >
          Projects
        </NavLink>
        <NavLink 
          exact to='about' 
          key='nav:about'
          activeStyle={activeStyle}
        >
          About
        </NavLink>
        <NavLink 
          exact to='contact' 
          key='nav:contact' 
          activeStyle={activeStyle}
        >
          Contact
        </NavLink>
      </nav>
  ) : '';

  let navStyles = isOpen ? `${styles.navBar} ${styles.open}`: `${styles.navBar}`;

  return (
    <section className={navStyles}>
      <span className={styles.iconContainer}>
        <NavLink 
          exact to='/' 
          key='nav:home' 
          className = {styles.default}
          activeStyle={activeStyle}
        >
          <InlineIcon 
            icon={'fa-solid:home'}
          />
        </NavLink>
      </span>
        {menu}
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