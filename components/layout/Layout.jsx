"use client";
import React from "react";
import styles from "./layout.module.scss";
import Link from "next/link";
import Image from "next/image";

const Layout = () => {
  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <div className={styles.sidebar}>
          <div className={styles.profile_container}>
            <div className={styles.profile}>
              <Image src="/profile.png" alt="profile" fill />
            </div>
            <div className={styles.desc}>
              <h3>JIEUN KIM</h3>
              <p>Frontend Developer</p>
            </div>
          </div>
          <nav>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
              <li>
                <Link href="/portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/blog">Blog</Link>
              </li>
              <li>
                <Link href="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
          <div className={styles.copyright}>
            © 2023 Jieun's portfolio <br />
            All rights reserved.
          </div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.pages}></div>
      </div>
    </div>
  );
};

export default Layout;
