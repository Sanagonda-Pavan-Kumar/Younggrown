import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineUsers,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineArrowRight
} from "react-icons/hi2";

import Footers from "../Footers";
import Section from "../Section";
import reqImage from "../../Assets/req.jpg"; // ✅ FIXED IMAGE IMPORT

/* ---------- UNDERLINE ---------- */
const Underline = ({ color = "#3b82f6", width = "100%" }) => (
  <div style={{ width }}>
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "100%" }}
      transition={{ duration: 0.8 }}
      style={{
        height: 4,
        background: color,
        borderRadius: 10,
        marginTop: 8
      }}
    />
  </div>
);

const ITStaffing = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hiringStrategy = [
    { no: "01", title: "Role Analysis", desc: "Translating tech requirements into actionable plans.", icon: <HiOutlineDocumentText /> },
    { no: "02", title: "Profile Screening", desc: "Filtering the best talent through rigorous vetting.", icon: <HiOutlineMagnifyingGlassCircle /> },
    { no: "03", title: "Technical Interview", desc: "Validation by our expert internal panel.", icon: <HiOutlineCpuChip /> },
    { no: "04", title: "Client Round", desc: "Direct interaction with final shortlisted experts.", icon: <HiOutlineUsers /> },
    { no: "05", title: "Onboarding", desc: "End-to-end support for seamless joining.", icon: <HiOutlineRocketLaunch /> },
  ];

  return (
    <div style={styles.page}>

      {/* HERO */}
      <Section style={styles.heroSection}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <h1 style={styles.heroTitle}>
            We Deliver Talent <br />
            <span style={styles.gradientText}>On Your Deadline</span>
          </h1>

          <div style={{ width: 250, margin: "20px auto" }}>
            <Underline />
          </div>

          <div style={styles.heroBtns}>
            <button style={styles.primaryBtn} onClick={() => navigate("/")}>
              Explore
            </button>
            <button style={styles.secondaryBtn} onClick={() => navigate("/ContactUs")}>
              Demo Request
            </button>
          </div>
        </motion.div>
      </Section>

      {/* CLIENT REQUIREMENT */}
      <Section style={styles.wideCard}>
        <div style={styles.cardRow}>

          <div style={styles.contentSide}>
            <h2 style={styles.sectionTitle}>
              Client Hiring Requirements
              <Underline width="220px" />
            </h2>
            <p style={styles.text}>
              Clients approach us with clear expectations — technology stack,
              experience range, location, and delivery timelines.
              Our recruiters convert this into a structured hiring roadmap.
            </p>
          </div>

          <div style={styles.visualSide}>
            <img
              src={reqImage}   // ✅ FIXED
              alt="Hiring Requirements"
              style={styles.sideImage}
            />
          </div>

        </div>
      </Section>

      {/* PROCESS */}
      <Section style={{ padding: "80px 0" }}>
        <h2 style={styles.sectionTitleCenter}>
          Our Proven Staffing Process
        </h2>

        <div style={styles.gridProcess}>
          {hiringStrategy.map((s) => (
            <div key={s.no} style={styles.processCard}>
              <div style={styles.icon}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section style={{ padding: "100px 0" }}>
        <div style={styles.ctaBox}>
          <h2 style={styles.ctaTitle}>
            Need Roles <span style={{ color: "#3b82f6" }}>Closed Fast?</span>
          </h2>
          <p style={styles.ctaText}>
            Partner with us for transparent, fast and verified hiring.
          </p>

          <button
            style={styles.ctaBtn}
            onClick={() => navigate("/ContactUs")}
          >
            Start Hiring Today <HiOutlineArrowRight style={{ marginLeft: 10 }} />
          </button>
        </div>
      </Section>

      <Footers />
    </div>
  );
};

/* ---------- STYLES ---------- */

const styles = {
  page: { color: "#fff", fontFamily: "'Inter', sans-serif" },

  heroSection: {
    padding: "120px 0 80px",
    textAlign: "center"
  },

  heroTitle: {
    fontSize: "3.8rem",
    fontWeight: 900,
    lineHeight: 1.1
  },

  gradientText: {
    background: "linear-gradient(90deg,#3b82f6,#93c5fd)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent"
  },

  heroBtns: { display: "flex", justifyContent: "center", gap: 20 },

  primaryBtn: {
    background: "#2563eb",
    padding: "14px 32px",
    borderRadius: 12,
    border: "none",
    color: "#fff",
    cursor: "pointer",
    fontWeight: 700
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid #334155",
    padding: "14px 32px",
    borderRadius: 12,
    color: "#fff",
    cursor: "pointer"
  },

  wideCard: {
    background: "rgba(255,255,255,0.02)",
    padding: 60,
    borderRadius: 40,
    margin: "40px 0"
  },

  cardRow: {
    display: "flex",
    gap: 60,
    alignItems: "center",
    flexWrap: "wrap"
  },

  contentSide: { flex: 1.5 },
  visualSide: { flex: 1 },

  sideImage: {
    width: "100%",
    borderRadius: 20,
    boxShadow: "0 20px 40px rgba(0,0,0,0.4)"
  },

  sectionTitle: { fontSize: "2.4rem", fontWeight: 800 },
  sectionTitleCenter: { textAlign: "center", fontSize: "2.4rem", fontWeight: 800 },

  text: { color: "#94a3b8", lineHeight: 1.7 },

  gridProcess: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 30,
    marginTop: 50
  },

  processCard: {
    background: "rgba(255,255,255,0.03)",
    padding: 30,
    borderRadius: 24,
    textAlign: "center"
  },

  icon: { fontSize: 32, color: "#3b82f6", marginBottom: 10 },

  ctaBox: {
    background: "linear-gradient(145deg,#020617,#0b3b6f)",
    padding: 80,
    borderRadius: 40,
    textAlign: "center"
  },

  ctaTitle: { fontSize: "2.8rem", fontWeight: 800 },
  ctaText: { color: "#94a3b8", margin: "20px 0 40px" },

  ctaBtn: {
    padding: "16px 40px",
    background: "#3b82f6",
    border: "none",
    borderRadius: 12,
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center"
  }
};

export default ITStaffing;
