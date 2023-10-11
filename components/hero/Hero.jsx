import React from "react";
import styles from "./hero.module.scss";
import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

const Hero = () => {
  return (
    <div className="wrapper">
      <div className={styles.hero}>
        <h3>지은이: 김지은</h3>
        <p>안녕하세요! 프론트엔드 개발자를 꿈꾸는 김지은입니다.</p>
        <div className={styles.social}>
          <a href="https://github.com/ji-silver" target="_blank">
            <FaGithub />
          </a>
          <a href="https://jisilver-k.tistory.com/" target="_blank">
            <SiTistory />
          </a>
          <a href="https://www.instagram.com/jisilver.k/" target="_blank">
            <GrInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
