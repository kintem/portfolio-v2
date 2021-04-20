import React, {useState} from "react";
import { Link } from "@reach/router";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from "./NavBar.module.scss";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openStyles = isOpen ? `${styles.menuOpen}` : "";
  const menuIcon = isOpen ? "times" : "bars";
  const menu = isOpen ? (<nav className={styles.menu}><Link to="projects">Projects</Link><Link to="about">About</Link><Link to="contact">Contact</Link></nav>) : "";

  return (
    <div className={styles.navBar}>
      <FontAwesomeIcon icon="home" className={styles.homeIcon}/>
      {menu}
      <span onClick={() => setIsOpen(!isOpen)}>
        <FontAwesomeIcon icon={menuIcon} className={`${styles.menuIcon} ${openStyles}`} />
      </span>
    </div>
  );
};

export default NavBar;
