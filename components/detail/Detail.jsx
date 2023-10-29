"use client";
import React from "react";
import styles from "./detail.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { CgArrowLongRight } from "react-icons/cg";
import Image from "next/image";
import ChartComponents from "@/components/chart/ChartComponents";

const Detail = ({ project, onClose }) => {
  return (
    <div className={styles.modal_wrap}>
      <div className={styles.detail}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.modal_header}>
              <h2 className={styles.title}>{project.title}</h2>
              <button onClick={onClose}>
                <AiOutlineClose />
              </button>
            </div>
            <div className={styles.top}>
              <Image
                src={project.image}
                alt="project"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
              />
            </div>
            <div className={styles.bottom}>
              <div className={styles.left}>
                <h3>#About.</h3>
                {project.about}
                <br />
                <h3>#Detail.</h3>
                {project.data ? (
                  <ChartComponents chartData={project.data} />
                ) : null}
                {project.desc}
                <br />
                {project.trouble ? (
                  <>
                    <h3>#트러블 슈팅 & 배운 점.</h3>
                    <div className={styles.trouble}>{project.trouble}</div>
                  </>
                ) : null}
              </div>
              <div className={styles.right}>
                <ul>
                  <li className={styles.date}>
                    <h5>📅 Date</h5>
                    <span>{project.date}</span>
                  </li>
                  <li className={styles.skills}>
                    <h5>⚒️ Skills</h5>
                    <ul>
                      <li>FrontEnd:</li>
                      {project.skills[0].front.map((skill, index) => (
                        <span key={index}>{skill}</span>
                      ))}
                    </ul>
                    <ul>
                      <li>BackEnd:</li>
                      {project.skills[0].back.map((skill, index) => (
                        <span key={index}>{skill} </span>
                      ))}
                    </ul>
                  </li>
                  <div className={styles.button_container}>
                    {project.view ? (
                      <a href={project.view} target="_blank">
                        VIEW <CgArrowLongRight />
                      </a>
                    ) : null}
                    <a href={project.git} target="_blank">
                      README <CgArrowLongRight />
                    </a>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
