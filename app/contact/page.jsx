import React from "react";
import Layout from "@/components/layout/Layout";
import styles from "./contactPage.module.scss";
import { FiMail, FiPhone } from "react-icons/fi";

const ContactPage = () => {
  return (
    <div>
      <Layout />
      <div className={`${styles.container} wrapper`}>
        <div className={styles.contact}>
          <h2 className="title">contact me</h2>
          <div className={styles.desc}>
            <p>제 포트폴리오를 봐주셔서 감사합니다!</p>
            <ul>
              <li>
                <span>
                  <FiMail />
                  Email
                  <a href="mailto:jisilver.kim@gmail.com">
                    jisilver.kim@gmail.com
                  </a>
                </span>
              </li>
              <li>
                <span>
                  <FiPhone />
                  Phone <a href="#">+82 10-3724-9688</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
