import React from "react";
import { motion } from "framer-motion";
import Footers from "./Footers";
import dashboardGif from "../assets/04.gif";

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
import Section from "./Section";

export default function AttendanceManagement() {
  return (

    <div style={{ fontFamily: "'Inter', sans-serif" }}>
      <Section>
      <motion.section
        style={styles.section}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9, ease: "easeOut" }}
      >
        <div style={styles.header}>
          <h2 style={styles.title}>
            Attendance <span style={styles.blueText}>Dashboard</span>
            <Underline color="#3b82f6" />
          </h2>
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
            <div style={styles.cardHeader}>TODAY'S SNAPSHOT</div>
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
            <motion.img 
              src={dashboardGif} 
              alt="Workforce Activity Monitoring" 
              style={styles.sideImage}
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}

            />
            <h3 style={styles.contentTitle}>
              Live Command <span style={styles.blueText}>Center</span>
            </h3>
            <p style={styles.text}>
              Track employee presence across locations, shifts, and work models in real time.
              Identify late logins, absentees, and overtime instantly.
            </p>
            <p style={styles.text}>
              Attendance data flows seamlessly into leave, payroll, and compliance modules.
            </p>
          </div>
        </div>
      </motion.section></Section>

      {/* ================= CAPABILITIES ================= */}
    <Section>  
    <motion.section
        style={styles.section}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div style={styles.header}>
          <h2 style={styles.title}>
            Workforce <span style={styles.blueText}>Capabilities</span>
            <Underline color="#3b82f6" width="200px" />
          </h2>
          <p style={styles.subtitle}>
            Intelligent workforce time tracking across devices, shifts, and locations.
          </p>
        </div>

        <div style={styles.featureGrid}>
          {capabilities.map((item, i) => (
            <motion.div
              key={i}
              style={styles.featureCard}
              whileHover={{ y: -10, borderColor: "#3b82f6", backgroundColor: "rgba(255,255,255,0.05)" }}
            >
              <div style={styles.iconCircle}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section></Section>

      {/* ================= SECURITY ================= */}
      <Section>
      <motion.section
        style={{ ...styles.section, paddingTop: 40 }}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div style={styles.securityBox}>
          <div style={styles.securityContentRow}>
            <div style={styles.securityTextSide}>
              <HiOutlineShieldCheck size={48} color="#3b82f6" />
              <h3 style={styles.securityTitle}>
                Secure & <span style={styles.blueText}>Compliant</span>
              </h3>
              <p style={styles.securityText}>
                Attendance data is protected with role-based access, device authentication,
                and audit logs—ensuring accuracy and trust.
              </p>
            </div>
            <div style={styles.securityVisualSide}>
              <img 
                src="/src/Assets/att sec.jpg" 
                alt="Security" 
                style={styles.securityImage}
              />
            </div>
          </div>
        </div>
      </motion.section>
</Section>
      {/* ================= CTA ================= */}
     <Section>
      <motion.section
        style={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        <h2 style={styles.ctaTitle}>
          Track time <span style={styles.lightBlueText}>Smarter.</span>
        </h2>
        <p style={styles.ctaText}>
          Build a transparent attendance system your workforce can trust.
        </p>
        <motion.button
          style={styles.ctaBtn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Request a Demo
        </motion.button>
      </motion.section></Section>
      <Footers />
    </div>
  );
}

/* ================= UTILS ================= */
const Underline = ({ color, width = "150px" }) => (
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: width }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.5 }}
    style={{
      height: "4px",
      background: color,
      margin: "10px auto 0",
      borderRadius: "2px"
    }}
  />
);

const Metric = ({ icon, label, value }) => (
  <div style={styles.metric}>
    <div style={styles.metricIcon}>{icon}</div>
    <div>
      <div style={styles.metricValue}>{value}</div>
      <div style={styles.metricLabel}>{label}</div>
    </div>
  </div>
);

/* ================= DATA ================= */
const capabilities = [
  { title: "Real-Time Tracking", text: "Capture punch-in/out across devices with instant sync.", icon: <HiOutlineClock /> },
  { title: "Automated Hours", text: "Calculate productive hours and breaks without manual effort.", icon: <HiOutlineArrowTrendingUp /> },
  { title: "Shift Monitoring", text: "Manage rotational shifts with real-time adherence tracking.", icon: <HiOutlineDevicePhoneMobile /> },
  { title: "Location Tagging", text: "Track attendance via office, remote, or field metadata.", icon: <HiOutlineMapPin /> },
];

/* ================= STYLES ================= */
const styles = {
  section: { padding: "100px 8%", color: "#fff", position: "relative" },
  header: { textAlign: "center", marginBottom: 70 },
  title: { fontSize: "3.5rem", fontWeight: 900, marginBottom: 15, color: "#fff" },
  blueText: { color: "#3b82f6" },
  lightBlueText: { color: "#dbeafe" },
  subtitle: { maxWidth: 720, margin: "20px auto 0", color: "#94a3b8", fontSize: "1.2rem", lineHeight: 1.6 },

  dashboardRow: { display: "flex", gap: 60, alignItems: "center", flexWrap: "wrap" },
  dashboardCard: { flex: 1, minWidth: 340, background: "rgba(255,255,255,0.02)", borderRadius: 30, padding: 40, border: "1px solid rgba(59,130,246,0.15)", backdropFilter: "blur(10px)" },
  cardHeader: { fontWeight: 800, marginBottom: 25, color: "#3b82f6", fontSize: "0.85rem", letterSpacing: "0.1em" },
  
  metricGrid: { display: "grid", gridTemplateColumns: "repeat(2,1fr)", gap: 25, marginBottom: 35 },
  metric: { display: "flex", gap: 15, alignItems: "center" },
  metricIcon: { fontSize: "2rem", color: "#3b82f6" },
  metricValue: { fontWeight: 800, fontSize: "1.6rem", color: "#fff" },
  metricLabel: { color: "#64748b", fontSize: "0.9rem" },

  chart: { display: "flex", gap: 16, height: 140, alignItems: "flex-end", paddingBottom: 20 },
  bar: { flex: 1, background: "linear-gradient(180deg,#3b82f6,#1e40af)", borderRadius: 8, position: "relative" },
  barLabel: { position: "absolute", bottom: -25, left: "50%", transform: "translateX(-50%)", fontSize: "0.75rem", color: "#64748b" },

  content: { flex: 1, minWidth: 320 },
  sideImage: { width: "100%", borderRadius: 24, marginBottom: 30, boxShadow: "0 20px 40px rgba(0,0,0,0.4)" },
  contentTitle: { fontSize: "2.5rem", fontWeight: 800, marginBottom: 20, color: "#fff" },
  text: { color: "#94a3b8", lineHeight: 1.8, marginBottom: 18, fontSize: "1.1rem" },

  featureGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))", gap: 30 },
  featureCard: { background: "rgba(255,255,255,0.02)", borderRadius: 25, padding: 40, border: "1px solid rgba(255,255,255,0.05)", transition: "0.3s" },
  iconCircle: { fontSize: "2.5rem", color: "#3b82f6", marginBottom: 20 },
  cardTitle: { fontSize: "1.5rem", fontWeight: 700, marginBottom: 12, color: "#fff" },
  cardText: { color: "#94a3b8", lineHeight: 1.7 },

  securityBox: { background: "rgba(59,130,246,0.05)", borderRadius: 40, padding: 60, border: "1px solid rgba(59,130,246,0.1)" },
  securityContentRow: { display: "flex", gap: 40, alignItems: "center", flexWrap: "wrap-reverse" },
  securityTextSide: { flex: 1.5 },
  securityTitle: { fontSize: "2.5rem", fontWeight: 800, margin: "20px 0", color: "#fff" },
  securityText: { color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.7 },
  securityVisualSide: { flex: 1 },
  securityImage: { width: "100%", borderRadius: 20, opacity: 0.8 },

  cta: { margin: "100px 8% 120px", textAlign: "center",     background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
 padding: "80px 40px", borderRadius: 40 },
  ctaTitle: { fontSize: "3.5rem", fontWeight: 900, color: "#fff" },
  ctaText: { marginTop: 20, fontSize: "1.2rem", color: "#dbeafe" },
  ctaBtn: { marginTop: 40, padding: "18px 45px", borderRadius: 12, fontWeight: 800, border: "none", cursor: "pointer", background: "#fff", color: "#1e40af" },


};
