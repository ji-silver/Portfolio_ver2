"use client";
import React, { useEffect, useState } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./portfolioPage.module.scss";
import { projectsData } from "@/lib/data";
import Detail from "@/components/detail/Detail";
import Image from "next/image";
import { fadeIn, fadeInAnimation } from "@/lib/variants";
import { motion } from "framer-motion";

const PortfolioPage = () => {
  const [hoveredImage, setHoveredImage] = useState(null);
  const [textPosition, setTextPosition] = useState({ x: 0, y: 0 });
  const [selectedFilter, setSelectedFilter] = useState("전체");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    if (selectedProject) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedProject]);

  // 필터 데이터
  const filteredProjects = projectsData.filter((item) => {
    if (selectedFilter === "전체") {
      return true;
    } else if (selectedFilter === "팀" && item.filter === "팀") {
      return true;
    } else if (selectedFilter === "개인" && item.filter === "개인") {
      return true;
    }
    return false;
  });

  // 이미지 hover시 글자 마우스 따라가기
  const handleMouseEnter = (id) => {
    setHoveredImage(id);
  };

  const handleMouseLeave = () => {
    setHoveredImage(null);
  };

  const handleMouseMove = (e) => {
    if (hoveredImage !== null) {
      const x = e.clientX;
      const y = e.clientY;
      setTextPosition({ x, y });
    }
  };

  const openDetail = (id) => {
    const project = projectsData.find((item) => item.id === id);
    setSelectedProject(project);
  };

  // 상세 정보 닫기
  const closeDetail = () => {
    setSelectedProject(null);
  };

  return (
    <div>
      {selectedProject && (
        <div className="detail-modal-container">
          <Detail project={selectedProject} onClose={closeDetail} />
        </div>
      )}
      <Layout />
      <div className={`${styles.container} wrapper`}>
        <div className={styles.portfolio}>
          <div className={styles.title_container}>
            <motion.h2
              className="title"
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: true,
              }}
            >
              Portfolio
            </motion.h2>
            <motion.ul
              className={styles.filter}
              variants={fadeIn("right", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: true,
              }}
            >
              <li
                onClick={() => setSelectedFilter("전체")}
                className={selectedFilter === "전체" ? styles.select : ""}
              >
                전체
              </li>
              <li
                onClick={() => setSelectedFilter("팀")}
                className={selectedFilter === "팀" ? styles.select : ""}
              >
                팀
              </li>
              <li
                onClick={() => setSelectedFilter("개인")}
                className={selectedFilter === "개인" ? styles.select : ""}
              >
                개인
              </li>
            </motion.ul>
          </div>
          <div className={styles.list} onMouseMove={handleMouseMove}>
            <ul>
              {filteredProjects.map((item, index) => (
                <motion.li
                  key={item.id}
                  onMouseEnter={() => handleMouseEnter(item.id)}
                  onMouseLeave={handleMouseLeave}
                  onClick={() => openDetail(item.id)} // 클릭 시 상세 정보 열기
                  variants={fadeInAnimation}
                  initial="initial"
                  whileInView="animate"
                  viewport={{
                    once: true,
                  }}
                  custom={index}
                >
                  <div className={styles.image_container}>
                    <Image
                      src={item.image}
                      alt="project"
                      fill
                      priority
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw"
                      className={`${
                        filteredProjects.length > index + 1
                          ? styles.loading
                          : ""
                      }`}
                    />
                    {hoveredImage === item.id && (
                      <div
                        style={{ top: textPosition.y, left: textPosition.x }}
                        className={styles.desc}
                      >
                        <span className={styles.project_title}>
                          {item.title}
                        </span>
                        <br />
                        <span className={styles.project_filter}>
                          {item.filter} 프로젝트
                        </span>
                      </div>
                    )}
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioPage;
