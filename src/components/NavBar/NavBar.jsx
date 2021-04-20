import React from "react";
import { Link } from "@reach/router";
import styles from "./NavBar.module.scss";

const NavBar = () => {
  return (
    <nav className={styles.navBar}>
      <Link to="projects">Projects</Link>
      <Link to="about">About</Link>
      <Link to="contact">Contact</Link>
    </nav>
  );
};

export default NavBar;
