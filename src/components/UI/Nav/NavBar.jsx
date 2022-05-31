import React from 'react';
import styles from './NavBar.module.css';

function NavBar() {
  return (
    <nav className={styles.links}>
      <a className={`${styles.active} + ${styles['nav-link']}`} href="/">
        All
      </a>
      <a className={styles['nav-link']} href="/food">
        Food
      </a>
      <a className={styles['nav-link']} href="/work">
        Work
      </a>
      <a className={styles['nav-link']} href="/home">
        Home
      </a>
    </nav>
  );
}

export default NavBar;
