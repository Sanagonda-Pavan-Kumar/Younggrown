import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footers from "./Footers";
import {
  HiOutlineIdentification,
  HiOutlineRocketLaunch,
  HiOutlineDevicePhoneMobile,
  HiOutlineSquaresPlus,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlinePresentationChartLine,
  HiOutlineCloudArrowUp,
  HiOutlineLockClosed,
  HiOutlineServerStack,
} from "react-icons/hi2";

export default function EmployeeManagementSystem() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <motion.div
        style={styles.page}
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        {/* ================= HERO ================= */}
        <motion.section style={styles.heroSection} variants={fadeUp}>
          <h1 style={styles.heroTitle}>Employee Lifecycle Management</h1>
          <p style={styles.heroSubtitle}>
            Build a better employee experience—starting with a smarter HR
            foundation. Manage the complete employee journey with automation,
            compliance, and clarity.
          </p>

          <div style={styles.ctaGroup}>
            <motion.button
              style={styles.primaryBtn}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(37,99,235,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Demo
            </motion.button>
            <button style={styles.secondaryBtn}>Explore Platform</button>
          </div>
        </motion.section>

        {/* ============ LIFECYCLE SECTION ============ */}
        <motion.div style={styles.wideCard} variants={fadeUp}>
          <div style={styles.cardRow}>
            <div style={styles.contentSide}>
              <div style={styles.accentLine} />
              <h2 style={styles.sectionTitle}>End-to-End Employee Lifecycle</h2>
              <p style={styles.text}>
                Manage the complete employee journey from onboarding to exit
                with structured workflows. Automate employee creation, role
                assignments, probation tracking, confirmations, and exit
                formalities. Every stage remains consistent, compliant, and
                fully documented—without manual follow-ups.
              </p>
            </div>

            <motion.div
              style={styles.threeDImageBox}
              whileHover={{ rotateY: -15, rotateX: 8, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 120 }}
            >
              <HiOutlineRocketLaunch style={styles.mainIcon} />
            </motion.div>
          </div>
        </motion.div>

        {/* ============ FEATURES GRID ============ */}
        <div style={styles.featureGrid}>
          {moduleData.map((item, i) => (
            <motion.div
              key={i}
              style={styles.featureCard}
              variants={fadeUp}
              whileHover={{
                y: -12,
                backgroundColor: "rgba(255,255,255,0.06)",
                borderColor: "#3b82f6",
              }}
            >
              <div style={styles.iconCircle}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* ============ ANALYTICS SECTION ============ */}
        <motion.div
          style={{ ...styles.wideCard, background: "rgba(37,99,235,0.05)" }}
          variants={fadeUp}
        >
          <div style={styles.cardRow}>
            <motion.div
              style={styles.chartContainer}
              whileHover={{ scale: 1.03 }}
            >
              <div style={styles.barGroup}>
                <motion.div
                  style={{ ...styles.bar, height: "60%" }}
                  animate={{ height: ["40%", "70%", "60%"] }}
                  transition={{ duration: 3, repeat: Infinity }}
                />
                <motion.div
                  style={{ ...styles.bar, height: "90%", background: "#fff" }}
                  animate={{ height: ["65%", "95%", "85%"] }}
                  transition={{ duration: 2.5, repeat: Infinity }}
                />
                <motion.div
                  style={{ ...styles.bar, height: "45%" }}
                  animate={{ height: ["30%", "55%", "45%"] }}
                  transition={{ duration: 3.5, repeat: Infinity }}
                />
              </div>
              <div style={styles.chartLabels}>
                <span>Headcount</span>
                <span>Attrition</span>
                <span>Tenure</span>
              </div>
            </motion.div>

            <div style={styles.contentSide}>
              <h2 style={styles.sectionTitle}>Insights & Employee Analytics</h2>
              <p style={styles.text}>
                Gain visibility into workforce trends with real-time analytics.
                Track headcount, attrition, tenure, demographics, and
                department-wise distribution. These insights empower leadership
                to make data-driven decisions for workforce planning and growth.
              </p>
            </div>
          </div>
        </motion.div>

        {/* ============ SECURITY CTA ============ */}
        <motion.section style={styles.ctaBanner} variants={fadeUp}>
          <div style={styles.bannerIconGroup}>
            <HiOutlineLockClosed size={42} />
            <HiOutlineServerStack size={42} />
          </div>
          <h2 style={styles.bannerTitle}>Secure & Scalable Architecture</h2>
          <p style={styles.bannerSubtitle}>
            Built with enterprise-grade security, your employee data is protected
            using encryption, role-based access controls, and audit logs. Designed
            to scale effortlessly from startups to large enterprises.
          </p>
          <motion.button
            style={styles.whiteBtn}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 12px 25px rgba(0,0,0,0.25)",
            }}
            whileTap={{ scale: 0.95 }}
          >
            Book a Demo
          </motion.button>
        </motion.section>
      </motion.div>

      <Footers />
    </div>
  );
}

/* ================= CONTENT DATA ================= */
const moduleData = [
  {
    title: "Centralized Employee Records",
    text:
      "Maintain a single source of truth for personal details, job information, reporting structures, documents, and historical records with role-based access.",
    icon: <HiOutlineIdentification />,
  },
  {
    title: "Smart Onboarding Experience",
    text:
      "Digital forms, document uploads, policy acknowledgements, and onboarding checklists—completed before day one or in real time.",
    icon: <HiOutlineCloudArrowUp />,
  },
  {
    title: "Employee Self-Service Portal",
    text:
      "Employees can manage profiles, download payslips, view attendance, apply leave, and raise queries independently.",
    icon: <HiOutlineDevicePhoneMobile />,
  },
  {
    title: "Role & Department Management",
    text:
      "Define departments, designations, reporting hierarchies, and track promotions, transfers, and role changes with audit history.",
    icon: <HiOutlineSquaresPlus />,
  },
  {
    title: "Document & Compliance Management",
    text:
      "Digitally manage contracts, ID proofs, certificates, and policies with automated expiry tracking and compliance alerts.",
    icon: <HiOutlineDocumentText />,
  },
  {
    title: "Leave & Policy Integration",
    text:
      "Seamlessly integrate leave rules, attendance policies, and payroll configurations for accurate and consistent enforcement.",
    icon: <HiOutlineShieldCheck />,
  },
];

/* ================= ANIMATIONS ================= */
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.9 } },
};

/* ================= STYLES ================= */
const styles = {
  page: {
    color: "#f8fafc",
    padding: "80px 8%",
    fontFamily: "'Inter', sans-serif",
    overflowX: "hidden",
  },
  heroSection: { textAlign: "center", marginBottom: 120 },
  heroTitle: {
    fontSize: "clamp(2.8rem, 6vw, 4.8rem)",
    fontWeight: 900,
    marginBottom: 25,
  },
  heroSubtitle: {
    fontSize: "1.35rem",
    color: "#94a3b8",
    maxWidth: 850,
    margin: "0 auto 45px",
    lineHeight: 1.7,
  },
  ctaGroup: { display: "flex", gap: 20, justifyContent: "center" },
  primaryBtn: {
    background: "#2563eb",
    color: "#fff",
    border: "none",
    padding: "18px 38px",
    borderRadius: 14,
    fontWeight: 800,
    cursor: "pointer",
  },
  secondaryBtn: {
    background: "transparent",
    color: "#fff",
    border: "1px solid #334155",
    padding: "18px 38px",
    borderRadius: 14,
    cursor: "pointer",
  },
  wideCard: {
    background: "rgba(255,255,255,0.03)",
    backdropFilter: "blur(12px)",
    borderRadius: 42,
    padding: 65,
    marginBottom: 60,
  },
  cardRow: { display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" },
  contentSide: { flex: 1.2 },
  accentLine: {
    width: 55,
    height: 4,
    background: "#3b82f6",
    marginBottom: 20,
    borderRadius: 2,
  },
  sectionTitle: { fontSize: "2.6rem", marginBottom: 25, fontWeight: 800 },
  text: { fontSize: "1.15rem", lineHeight: 1.85, color: "#cbd5e1" },
  threeDImageBox: {
    flex: 0.8,
    height: 360,
    borderRadius: 32,
    background: "linear-gradient(135deg,#1d4ed8,#3b82f6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    transformStyle: "preserve-3d",
    boxShadow: "0 30px 60px rgba(0,0,0,0.45)",
  },
  mainIcon: { fontSize: "7.5rem", color: "#fff" },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
    gap: 35,
    marginBottom: 120,
  },
  featureCard: {
    background: "rgba(255,255,255,0.02)",
    border: "1px solid rgba(255,255,255,0.06)",
    padding: 45,
    borderRadius: 32,
  },
  iconCircle: { fontSize: "2.9rem", color: "#3b82f6", marginBottom: 25 },
  cardTitle: { fontSize: "1.55rem", marginBottom: 14, fontWeight: 700 },
  cardText: { color: "#94a3b8", lineHeight: 1.7 },
  chartContainer: {
    flex: 1,
    height: 320,
    borderRadius: 32,
    background: "rgba(255,255,255,0.04)",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  barGroup: { display: "flex", gap: 22, height: 150 },
  bar: {
    width: 36,
    background: "#3b82f6",
    borderRadius: "12px 12px 4px 4px",
  },
  chartLabels: {
    display: "flex",
    gap: 30,
    marginTop: 20,
    color: "#64748b",
    fontSize: "0.85rem",
  },
  ctaBanner: {
    background: "linear-gradient(135deg,#1e3a8a,#1e40af)",
    padding: "110px 55px",
    borderRadius: 55,
    textAlign: "center",
  },
  bannerIconGroup: {
    display: "flex",
    justifyContent: "center",
    gap: 35,
    marginBottom: 35,
    opacity: 0.7,
  },
  bannerTitle: { fontSize: "3.1rem", fontWeight: 900, marginBottom: 22 },
  bannerSubtitle: {
    fontSize: "1.25rem",
    maxWidth: 820,
    margin: "0 auto 45px",
    opacity: 0.85,
    lineHeight: 1.7,
  },
  whiteBtn: {
    background: "#fff",
    color: "#1e40af",
    border: "none",
    padding: "20px 48px",
    borderRadius: 16,
    fontWeight: 900,
    cursor: "pointer",
  },
};
