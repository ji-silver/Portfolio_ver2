"use client";
import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "./contactPage.module.scss";
import { FiMail, FiPhone } from "react-icons/fi";
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div>
      <Layout />
      <div className={`${styles.container} wrapper`}>
        <div className={styles.contact}>
          <motion.h2
            className="title"
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: true,
            }}
          >
            contact me
          </motion.h2>
          <div className={styles.desc}>
            <motion.p
              variants={fadeIn("right", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: true,
              }}
            >
              제 포트폴리오를 봐주셔서 감사합니다!
            </motion.p>
            <ul>
              <motion.li
                variants={fadeIn("right", 0.5)}
                initial="hidden"
                whileInView={"show"}
                viewport={{
                  once: true,
                }}
              >
                <span>
                  <FiMail />
                  Email
                  <a href="mailto:jisilver.kim@gmail.com">
                    jisilver.kim@gmail.com
                  </a>
                </span>
              </motion.li>
              <motion.li
                variants={fadeIn("right", 0.6)}
                initial="hidden"
                whileInView={"show"}
                viewport={{
                  once: true,
                }}
              >
                <span>
                  <FiPhone />
                  Phone <a href="#">+82 10-3724-9688</a>
                </span>
              </motion.li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
