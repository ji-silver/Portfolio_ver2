import Layout from "@/components/layout/Layout";
import React from "react";
import styles from "./aboutPage.module.scss";
import about from "@/public/about.jpg";
import Image from "next/image";
import { skillsData } from "@/lib/data";

const AboutPage = () => {
  return (
    <>
      <Layout />
      <div className="wrapper">
        <div className={styles.about}>
          <h2 className="title">about me</h2>
          <span className="miniTitle">- Nice to meet you!</span>
          <div className={styles.image_container}>
            <Image
              src={about}
              alt="about"
              fill
              placeholder="blur"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
            />
          </div>
          <p>
            안녕하세요, <span>김지은</span>입니다.
            <br />
            저는<span>소통과 협업</span>
            을 통해 주어진 업무에 대한 책임감을 가지고 동료들과 함께 지식을
            공유하고 배우는 것을 좋아합니다.
            <br />
            새로운 도전을 통해 끊임없이 성장하고
            <span>지속적인 학습과</span> <span>다양한 프로젝트 참여</span>를
            바탕으로 더 나은 개발자로 나아가고자 합니다.
            <br />
          </p>

          <span className="miniTitle">- Skills</span>
          <div className={styles.skills}>
            <ul>
              {skillsData.map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutPage;
