'use client';

import React, { useState } from "react";
import styles from "@/style/navbar.module.scss";
import Link from "next/link";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.nav_container}>
      <nav className={`${styles.navbar} ${isOpen ? styles.open : ""}`}>
      <div className={styles.logo}>Blogify</div>
      <div className={styles.hamburger} onClick={toggleMenu}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
      <ul className={`${styles.navLinks} ${isOpen ? styles.show : ""}`}>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/blog">Blogs</Link>
        </li>
        <li>
          <Link href="/topBlogs">Top Blog</Link>
        </li>
        <li>
          <Link href="/about">About Us</Link>
        </li>
        <li className={styles.button}>
          <Link href="/" >Login</Link>
        </li>
        <li  className={styles.button}>
          <Link href="/">Register</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
