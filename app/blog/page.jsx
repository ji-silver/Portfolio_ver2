"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./blogPage.module.scss";
import { HiCalendar } from "react-icons/hi";
import { CgArrowLongRight } from "react-icons/cg";
import { fadeIn, formatDate } from "@/lib/variants";
import { motion } from "framer-motion";

const BlogPage = () => {
  const [blogData, setBlogData] = useState([]);
  const [loading, setLoading] = useState(true);

  // 블로그 글 가져오기...
  useEffect(() => {
    const fetchRss = async () => {
      try {
        const response = await fetch("/api/blog/", { cache: "no-store" });
        const data = await response.json();
        setLoading(false);
        setBlogData(data);
      } catch (error) {
        console.error(error);
        setLoading(false);
      }
    };
    fetchRss();
  }, []);

  return (
    <div>
      <Layout />
      <div className="wrapper">
        <div className={styles.blog}>
          <div className={styles.content}>
            <div className={styles.left}>
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial="hidden"
                whileInView={"show"}
                viewport={{
                  once: true,
                }}
              >
                <h2 className="title">my blog</h2>
                <span className="miniTitle">- Latest blog posts</span>
              </motion.div>
            </div>
            <div className={styles.right}>
              {loading ? (
                <div className={styles.loading}>
                  {[...Array(6)].map((_, index) => (
                    <span key={index}></span>
                  ))}
                </div>
              ) : (
                <ul>
                  {blogData.map((item, index) => (
                    <li key={index}>
                      <a
                        href={item.link}
                        target="_blank"
                        className={styles.link}
                      >
                        <div className={styles.info}>
                          <p className={styles.date}>
                            <HiCalendar />
                            <span>{formatDate(item.pubDate)}</span>
                          </p>
                          <span className={styles.title}>{item.title}</span>
                        </div>
                        <div className={styles.button}>
                          <span>READ MORE</span>
                          <CgArrowLongRight />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
