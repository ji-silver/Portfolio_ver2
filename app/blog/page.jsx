"use client";
import React, { useState, useEffect } from "react";
import Layout from "@/components/layout/Layout";
import styles from "./blogPage.module.scss";
import { HiCalendar } from "react-icons/hi";
import { CgArrowLongRight } from "react-icons/cg";

const BlogPage = () => {
  const [mounted, setMounted] = useState(false);
  const [blogData, setBlogData] = useState([]);
  const url = "https://jisilver-k.tistory.com/rss";

  useEffect(() => {
    setMounted(true);
  }, []);

  // 블로그 글 가져오기
  useEffect(() => {
    const fetchRss = async () => {
      try {
        const response = await fetch(
          "https://api.rss2json.com/v1/api.json?rss_url=" + url
        );
        const rss = await response.json();
        const data = rss.items || [];
        setBlogData(data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRss();
  }, []);

  return (
    <div>
      <Layout />
      <div className="wrapper">
        {mounted && (
          <div className={styles.blog}>
            <div className={styles.content}>
              <div className={styles.left}>
                <div>
                  <h2 className="title">my blog</h2>
                  <span className="miniTitle">- Latest blog posts</span>
                </div>
              </div>
              <div className={styles.right}>
                <ul>
                  {blogData.map((item, index) => (
                    <li
                      key={index}
                      className={
                        index === blogData.length - 1 ? styles.lastItem : ""
                      }
                    >
                      <a
                        href={item.link}
                        target="_blank"
                        className={styles.link}
                      >
                        <div className={styles.info}>
                          <p className={styles.date}>
                            <HiCalendar />
                            <span>{item.pubDate.split(" ")[0]}</span>
                          </p>
                          <h2>{item.title}</h2>
                        </div>
                        <div className={styles.button}>
                          <span>READ MORE</span>
                          <CgArrowLongRight />
                        </div>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogPage;
