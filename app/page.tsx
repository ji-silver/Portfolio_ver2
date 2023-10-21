'use client'
import styles from './page.module.scss'
import Layout from '@/components/layout/Layout'
import { fadeIn } from "@/lib/variants";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { SiTistory } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";

export default function Home() {
  return (
    <main>
      <Layout />
      <div className="wrapper">
        <div className={styles.hero}>
          <motion.h3
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: true,
            }}
          >
            지은이: 김지은
          </motion.h3>
          <motion.p
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{
              once: true,
            }}
          >
            안녕하세요! 프론트엔드 개발자를 꿈꾸는 김지은입니다.
          </motion.p>
          <div className={styles.social}>
            <motion.a
              href="https://github.com/ji-silver"
              target="_blank"
              aria-label="깃허브 프로필 바로 가기"
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: true,
              }}
            >
              <FaGithub />
            </motion.a>
            <motion.a
              href="https://jisilver-k.tistory.com/"
              target="_blank"
              aria-label="티스토리 블로그 바로 가기"
              variants={fadeIn("up", 0.4)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              <SiTistory />
            </motion.a>
            <motion.a
              href="https://www.instagram.com/jisilver.k/"
              target="_blank"
              aria-label="인스타그램 바로 가기"
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{
                once: true,
              }}
            >
              <GrInstagram />
            </motion.a>
          </div>
        </div>
      </div>
    </main>
  )
}
