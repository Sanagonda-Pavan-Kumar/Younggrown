import React from "react";
import { motion } from "framer-motion";
import Footers from "./Footers";
import {
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineExclamationTriangle,
  HiOutlineArrowTrendingUp,
  HiOutlineShieldCheck,
  HiOutlineDevicePhoneMobile,
  HiOutlineMapPin,
  HiOutlineBellAlert,
} from "react-icons/hi2";

export default function AttendanceManagement() {
  return (
    <>
    <div>
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div style={styles.header}>
          <h2 style={styles.title}>Attendance Dashboard</h2>
          <p style={styles.subtitle}>
            Real-time visibility into attendance, shifts, late logins, and workforce activity.
          </p>
        </div>

        <div style={styles.dashboardRow}>
          <motion.div
            style={styles.dashboardCard}
            whileHover={{ rotateY: -12, rotateX: 6, scale: 1.04 }}
            transition={{ type: "spring", stiffness: 120 }}
          >
            <div style={styles.cardHeader}>Today’s Snapshot</div>

            <div style={styles.metricGrid}>
              <Metric icon={<HiOutlineUserGroup />} label="Present" value="312" />
              <Metric icon={<HiOutlineClock />} label="Late Logins" value="18" />
              <Metric icon={<HiOutlineExclamationTriangle />} label="Absent" value="9" />
              <Metric icon={<HiOutlineArrowTrendingUp />} label="Overtime" value="42h" />
            </div>

            <div style={styles.chart}>
              {["Mon", "Tue", "Wed", "Thu", "Fri"].map((day, i) => (
                <motion.div
                  key={day}
                  style={styles.bar}
                  initial={{ height: "25%" }}
                  animate={{ height: `${45 + i * 8}%` }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "mirror",
                    delay: i * 0.15,
                  }}
                >
                  <span style={styles.barLabel}>{day}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <div style={styles.content}>
            <h3 style={styles.contentTitle}>A Live Command Center for Attendance</h3>
            <p style={styles.text}>
              Track employee presence across locations, shifts, and work models in real time.
              Identify late logins, absentees, and overtime instantly—without chasing reports.
            </p>
            <p style={styles.text}>
              Attendance data flows seamlessly into leave, payroll, and compliance modules,
              ensuring accuracy across the entire HR lifecycle.
            </p>
          </div>
        </div>
      </motion.section>

      {/* ================= ATTENDANCE MANAGEMENT CONTENT ================= */}
      <motion.section
        style={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div style={styles.header}>
          <h2 style={styles.title}>Attendance Management System</h2>
          <p style={styles.subtitle}>
            Intelligent workforce time tracking across devices, shifts, and locations—
            fully automated and policy-driven.
          </p>
        </div>

        <div style={styles.featureGrid}>
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              style={styles.featureCard}
              whileHover={{ y: -10, borderColor: "#3b82f6" }}
              transition={{ type: "spring", stiffness: 200 }}
            >
              <div style={styles.iconCircle}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* ================= SECURITY ================= */}
      <motion.section
        style={{ ...styles.section, paddingTop: 40 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div style={styles.securityBox}>
          <HiOutlineShieldCheck size={48} />
          <h3 style={styles.securityTitle}>Secure & Compliant by Design</h3>
          <p style={styles.securityText}>
            Attendance data is protected with role-based access, device authentication,
            audit logs, and compliance-ready architecture—ensuring accuracy and trust.
          </p>
        </div>
      </motion.section>

      {/* ================= CTA ================= */}
      <motion.section
        style={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={styles.ctaTitle}>Track time smarter. Pay accurately. Work better.</h2>
        <p style={styles.ctaText}>
          Build a transparent attendance system your workforce can trust—from startups to enterprises.
        </p>
        <motion.button
          style={styles.ctaBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Demo
        </motion.button>
      </motion.section>
      <Footers/>
      </div>
    </>
  );
}

/* ================= DATA ================= */
const capabilities = [
  {
    title: "Real-Time In & Out Monitoring",
    text: "Capture punch-in and punch-out across web, mobile, biometric, or kiosk devices with instant sync.",
    icon: <HiOutlineClock />,
  },
  {
    title: "Automated Working Hours",
    text: "Automatically calculate productive hours, breaks, late time, and early exits without manual effort.",
    icon: <HiOutlineArrowTrendingUp />,
  },
  {
    title: "Leave & Week-Off Integration",
    text: "Attendance adapts automatically to leave policies, holidays, and weekly offs.",
    icon: <HiOutlineUserGroup />,
  },
  {
    title: "Shift & Roster Monitoring",
    text: "Manage rotational shifts, night schedules, and flexible rosters with real-time adherence tracking.",
    icon: <HiOutlineDevicePhoneMobile />,
  },
  {
    title: "Working Location Tracking",
    text: "Track attendance by office, remote, or field locations using secure metadata and tagging.",
    icon: <HiOutlineMapPin />,
  },
  {
    title: "Late Login & Alerts",
    text: "Automatically detect exceptions and notify employees, managers, or HR instantly.",
    icon: <HiOutlineBellAlert />,
  },
];

/* ================= METRIC ================= */
const Metric = ({ icon, label, value }) => (
  <div style={styles.metric}>
    <div style={styles.metricIcon}>{icon}</div>
    <div>
      <div style={styles.metricValue}>{value}</div>
      <div style={styles.metricLabel}>{label}</div>
    </div>
  </div>
);

/* ================= STYLES ================= */
const styles = {
  section: { padding: "120px 8%", color: "#f8fafc" },
  header: { textAlign: "center", marginBottom: 70 },
  title: { fontSize: "3rem", fontWeight: 800, marginBottom: 15 },
  subtitle: { maxWidth: 720, margin: "0 auto", color: "#94a3b8", fontSize: "1.15rem", lineHeight: 1.6 },

  dashboardRow: { display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap" },
  dashboardCard: {
    flex: 1,
    minWidth: 340,
    background: "rgba(255,255,255,0.04)",
    borderRadius: 30,
    padding: 40,
    border: "1px solid rgba(59,130,246,0.25)",
  },

  cardHeader: { fontWeight: 700, marginBottom: 25, color: "#60a5fa" },
  metricGrid: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 25 },
  metric: { display: "flex", gap: 15, alignItems: "center" },
  metricIcon: { fontSize: "2rem", color: "#3b82f6" },
  metricValue: { fontWeight: 700, fontSize: "1.4rem" },
  metricLabel: { color: "#94a3b8", fontSize: "0.85rem" },

  chart: { display: "flex", gap: 16, height: 140, alignItems: "flex-end" },
  bar: { flex: 1, background: "linear-gradient(180deg,#3b82f6,#1e40af)", borderRadius: 10 },
  barLabel: { position: "absolute", bottom: -25, fontSize: "0.75rem", color: "#64748b" },

  content: { flex: 1, minWidth: 320 },
  contentTitle: { fontSize: "2.1rem", marginBottom: 20 },
  text: { color: "#cbd5e1", lineHeight: 1.8, marginBottom: 18 },

  featureGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: 30 },
  featureCard: {
    background: "rgba(255,255,255,0.03)",
    borderRadius: 25,
    padding: 35,
    border: "1px solid rgba(255,255,255,0.06)",
  },
  iconCircle: { fontSize: "2.4rem", color: "#3b82f6", marginBottom: 20 },
  cardTitle: { fontSize: "1.4rem", marginBottom: 12 },
  cardText: { color: "#94a3b8", lineHeight: 1.6 },

  securityBox: {
    textAlign: "center",
    background: "rgba(59,130,246,0.08)",
    borderRadius: 30,
    padding: 60,
  },
  securityTitle: { fontSize: "2rem", margin: "20px 0" },
  securityText: { maxWidth: 700, margin: "0 auto", color: "#cbd5e1", lineHeight: 1.7 },

  cta: {
    marginTop: 100,
    textAlign: "center",
    background: "linear-gradient(135deg,#1e3a8a,#1e40af)",
    padding: "100px 40px",
    borderRadius: 50,
  },
  ctaTitle: { fontSize: "3rem", fontWeight: 800 },
  ctaText: { marginTop: 20, fontSize: "1.2rem", opacity: 0.9 },
  ctaBtn: {
    marginTop: 40,
    padding: "18px 45px",
    borderRadius: 14,
    fontWeight: 800,
    border: "none",
    cursor: "pointer",
    background: "#fff",
    color: "#1e40af",
  },
};
