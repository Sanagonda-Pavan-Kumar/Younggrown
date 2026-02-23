import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import {
  HiOutlineCpuChip,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineSparkles,
  HiOutlineShieldCheck,
} from "react-icons/hi2";

import Section from "../Section";
import Footers from "../Footers";
import aiImage from "../../Assets/aihr.avif";

export default function AIForHR() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.page}>
      
      {/* HERO SECTION WITH RIGHT IMAGE */}
      <Section>
        <motion.div style={styles.heroSplit} {...fadeUp}>
          
          <div style={styles.heroLeft}>
            <h1 style={styles.heroTitle}>
              AI & <span style={styles.blueText}>HR Tech Innovations</span>
            </h1>

            <p style={styles.heroSub}>
              Discover how AI, machine learning, and intelligent automation are
              shaping modern HR — from hiring to retention and workforce planning.
            </p>

            <div style={styles.buttonGroup}>
              <button style={styles.primaryBtn}  onClick={() => navigate("/ContactUs")}>Request Demo</button>
              <button style={styles.secondaryBtn}>Explore Platform</button>
            </div>
          </div>

          <div style={styles.heroRight}>
            <img src={aiImage} alt="AI for HR" style={styles.heroImage} />
          </div>

        </motion.div>
      </Section>

      <Section>
        <motion.div style={styles.grid} {...stagger}>
          <AICard
            icon={<HiOutlineSparkles />}
            title="AI-Driven Recruitment Intelligence"
            desc="Automate candidate screening, bias-free matching, and interview prioritization with intelligent algorithms."
          />

          <AICard
            icon={<HiOutlineUserGroup />}
            title="Smart HR Support for Employees"
            desc="AI-powered assistance provides instant answers about leave, attendance, payroll, and policies."
          />

          <AICard
            icon={<HiOutlineChartBar />}
            title="People Analytics & Predictive Insights"
            desc="Use workforce data to predict attrition and model future talent needs."
          />

          <AICard
            icon={<HiOutlineCpuChip />}
            title="Performance & Growth Intelligence"
            desc="Gain AI-backed performance insights to support development and fair evaluations."
          />

          <AICard
            icon={<HiOutlineShieldCheck />}
            title="Predictive & Secure HR Analytics"
            desc="Plan ahead with secure, compliant, and ethical AI systems."
          />
        </motion.div>
      </Section>

      <Footers />
    </div>
  );
}

/* CARD COMPONENT */
const AICard = ({ icon, title, desc }) => (
  <motion.div
    style={styles.card}
    variants={fadeUp}
    whileHover={{ y: -8 }}
  >
    <div style={styles.icon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

/* ANIMATIONS */
const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true },
};

/* STYLES */
const styles = {
  page: {
    color: "#fff",
    fontFamily: "Inter, sans-serif",
  },

  /* HERO SPLIT */
  heroSplit: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
    padding: "120px 8% 80px",
    flexWrap: "wrap",
  },

  heroLeft: {
    flex: 1,
    minWidth: "300px",
  },

  heroRight: {
    flex: 1,
    display: "flex",
    justifyContent: "center",
  },

  heroTitle: {
    fontSize: "clamp(40px, 6vw, 64px)",
    fontWeight: 900,
  },

  blueText: {
    color: "#3b82f6",
  },

  heroSub: {
    marginTop: "24px",
    color: "#94a3b8",
    fontSize: "18px",
    lineHeight: 1.6,
  },

  heroImage: {
    maxWidth: "500px",
    width: "100%",
    borderRadius: "24px",
  },

  buttonGroup: {
    marginTop: "32px",
    display: "flex",
    gap: "16px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "14px 28px",
    borderRadius: "12px",
    fontWeight: 600,
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    color: "#fff",
    border: "1px solid #3b82f6",
    padding: "14px 28px",
    borderRadius: "12px",
    fontWeight: 600,
    cursor: "pointer",
  },

  /* CARDS */
  grid: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: "30px",
  },

  card: {
    background: "rgba(15,23,42,0.6)",
    padding: "30px",
    borderRadius: "28px",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  icon: {
    fontSize: "32px",
    color: "#3b82f6",
    marginBottom: "18px",
  },

  cardTitle: {
    fontSize: "1.3rem",
    fontWeight: 700,
    marginBottom: "12px",
  },

  cardDesc: {
    color: "#94a3b8",
    lineHeight: 1.6,
    fontSize: "15px",
  },
};
