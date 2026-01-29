import React from "react";
import { motion } from "framer-motion";
import Footers from "./Footers";
import {
  HiOutlineChartBar,
  HiOutlineArrowPath,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineArrowsRightLeft,
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2
} from "react-icons/hi2";

/* ================= ANIMATIONS ================= */

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

/* ================= STYLES ================= */

const styles = {
  page: {
   
    color: "#f8fafc",
    padding: "90px 8%",
    fontFamily: "Inter, sans-serif"
  },
  section: { marginBottom: "100px" },
  header: { textAlign: "center", maxWidth: "900px", margin: "0 auto 60px" },
  badge: {
    display: "inline-block",
    padding: "6px 16px",
    borderRadius: "999px",
    background: "rgba(59,130,246,0.1)",
    color: "#60a5fa",
    fontWeight: 600,
    fontSize: "0.75rem",
    marginBottom: "20px",
    border: "1px solid rgba(59,130,246,0.2)"
  },
  title: {
    fontSize: "3.2rem",
    fontWeight: 900,
    lineHeight: 1.2,
    marginBottom: "20px"
  },
  blue: { color: "#3b82f6" },
  subtitle: {
    fontSize: "1.15rem",
    color: "#94a3b8",
    lineHeight: 1.7
  },

  goalFlow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
    marginTop: "50px"
  },
  goalBox: {
    padding: "22px 28px",
    borderRadius: "18px",
    fontWeight: 600,
    display: "flex",
    alignItems: "center",
    gap: "10px"
  },
  org: { background: "#1e3a8a" },
  team: { background: "#2563eb" },
  individual: { background: "#3b82f6" },

  dashboard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "32px",
    padding: "50px",
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px,1fr))",
    gap: "30px"
  },
  statCard: {
    background: "rgba(255,255,255,0.04)",
    padding: "30px",
    borderRadius: "24px"
  },
  statValue: { fontSize: "2.2rem", fontWeight: 800 },
  statLabel: { color: "#94a3b8", marginTop: "8px" },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
    gap: "28px"
  },
  featureCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    padding: "38px",
    borderRadius: "28px"
  },
  icon: { fontSize: "2.6rem", color: "#3b82f6", marginBottom: "20px" },
  cardTitle: { fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" },
  cardText: { color: "#94a3b8", lineHeight: 1.6 },

  outcomeGrid: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "50px"
  },
  
  outcomeCard: {
    background: "rgba(255,255,255,0.03)",
    padding: "36px",
    borderRadius: "28px",
    maxWidth: "320px",
    textAlign: "center"
  }
  
};

/* ================= DATA ================= */

const features = [
  {
    title: "Goal-Based Performance Tracking",
    text:
      "Define clear organizational, team, and individual goals. Automatically align daily work with long-term business outcomes.",
    icon: <HiOutlineChartBar />
  },
  {
    title: "Continuous Feedback Loop",
    text:
      "Enable managers and peers to share ongoing feedback instead of waiting for annual reviews.",
    icon: <HiOutlineArrowPath />
  },
  {
    title: "Smart Performance Reviews",
    text:
      "Run quarterly or annual reviews using real data — attendance, tasks, KPIs, and feedback combined.",
    icon: <HiOutlineCalendarDays />
  },
  {
    title: "Strength & Gap Identification",
    text:
      "Spot top performers, hidden strengths, and improvement areas with AI-driven insights.",
    icon: <HiOutlineLightBulb />
  },
  {
    title: "Manager Dashboards",
    text:
      "Give leaders a clear snapshot of team health, engagement, and delivery progress.",
    icon: <HiOutlineUserGroup />
  },
  {
    title: "Career Growth Mapping",
    text:
      "Link performance outcomes directly to promotions, learning plans, and succession paths.",
    icon: <HiOutlineRocketLaunch />
  }
];

/* ================= COMPONENT ================= */

export default function PerformanceManagement() {
  return (
    <div>
    <motion.div
      style={styles.page}
      variants={pageVariants}
      initial="hidden"
      animate="visible"
    >
      {/* HERO */}
      <motion.section style={styles.section} variants={fadeUp}>
        <div style={styles.header}>
          <h1 style={styles.title}>
            Performance <span style={styles.blue}>Management</span> That Drives
            Growth
          </h1>
          <p style={styles.subtitle}>
            Track progress, align goals, and continuously improve employee
            performance with a transparent, data-driven, and human-friendly
            system.
          </p>

          <div style={styles.goalFlow}>
            <div style={{ ...styles.goalBox, ...styles.org }}>
              <HiOutlineBuildingOffice2 /> Organization Goals
            </div>
            <HiOutlineArrowsRightLeft />
            <div style={{ ...styles.goalBox, ...styles.team }}>
              <HiOutlineBriefcase /> Team Goals
            </div>
            <HiOutlineArrowsRightLeft />
            <div style={{ ...styles.goalBox, ...styles.individual }}>
              <HiOutlineCheckCircle /> Individual Goals
            </div>
          </div>
        </div>
      </motion.section>

      {/* FEATURES */}
      <motion.section style={styles.section} variants={fadeUp}>
        <div style={styles.featureGrid}>
          {features.map((item, i) => (
            <div key={i} style={styles.featureCard}>
              <div style={styles.icon}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </div>
          ))}
        </div>
      </motion.section>

      {/* OUTCOMES */}
      <motion.section style={styles.section} variants={fadeUp}>
        <div style={styles.header}>
          <h2 className="text-3xl font-bold">
            Real Outcomes for Employees & Managers
          </h2>
        </div>
        <div style={styles.outcomeGrid}>
          <div style={styles.outcomeCard}>
            <HiOutlineUserGroup size={42} color="#3b82f6" />
            <h3>Stronger Teams</h3>
            <p>Clear expectations and continuous feedback improve collaboration.</p>
          </div>
          <div style={styles.outcomeCard}>
            <HiOutlineLightBulb size={42} color="#3b82f6" />
            <h3>Smarter Decisions</h3>
            <p>Performance data removes bias and supports fair evaluations.</p>
          </div>
          <div style={styles.outcomeCard}>
            <HiOutlineRocketLaunch size={42} color="#3b82f6" />
            <h3>Faster Growth</h3>
            <p>Employees understand where they stand and how to grow.</p>
          </div>
        </div>
      </motion.section>
    </motion.div>
    <Footers/>
    </div>
  );
}
