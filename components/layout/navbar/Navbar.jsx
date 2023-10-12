"use client";
import React from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";
import { usePathname } from "next/navigation";

const Navbar = ({ isOpen, toggleMenu }) => {
  const pathname = usePathname();
  return (
    <>
      <div className={styles.topbar}>
        <div className={styles.topbar_inner}>
          <Link href="/">
            <h2>JIEUN.</h2>
          </Link>
          <div className={styles.menu}>
            <div
              className={`${styles.hamburger} ${isOpen ? styles.open : ""}`}
              onClick={toggleMenu}
            >
              <div className={styles.hamburgerInner}></div>
            </div>
          </div>
        </div>
      </div>
      <div className={`${styles.mobile_sidebar} ${isOpen ? styles.open : ""}`}>
        <ul onClick={toggleMenu}>
          <li>
            <Link href="/" className={pathname === "/" ? styles.active : ""}>
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              className={pathname === "/about" ? styles.active : ""}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="/portfolio"
              className={pathname === "/portfolio" ? styles.active : ""}
            >
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              href="/blog"
              className={pathname === "/blog" ? styles.active : ""}
            >
              Blog
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              className={pathname === "/contact" ? styles.active : ""}
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
