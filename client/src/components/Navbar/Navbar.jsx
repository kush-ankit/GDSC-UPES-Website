import React from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { HiMiniMoon } from "react-icons/hi2";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>GDSC UPES</div>
      <ul className={styles.navLinks}>
        <li >
          <Link className={styles.navLink} to="/">Home</Link>
        </li>
        <li >
          <Link className={styles.navLink} to="/events">Events</Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/team">Team</Link>
        </li>
        <li>
          <Link className={styles.navLink} to="/contact">Contact</Link>
        </li>
      </ul>
      <button className={styles.button}><HiMiniMoon /></button>
    </nav>
  );
};

export default Navbar;
