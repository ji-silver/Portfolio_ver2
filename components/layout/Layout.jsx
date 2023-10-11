"use client";
import React, { useEffect, useState } from "react";
import styles from "./layout.module.scss";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Navbar from "./navbar/Navbar";

const Layout = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // 버튼, 메뉴 클릭 시 사이드바 닫기
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      <Navbar isOpen={isOpen} toggleMenu={toggleMenu} />
      <div className={styles.layout}>
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
                <Link
                  href="/"
                  className={pathname === "/" ? styles.active : ""}
                >
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
          </nav>
          <div className={styles.copyright}>
            © 2023 Jieun's portfolio <br />
            All rights reserved.
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
