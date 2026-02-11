import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCalculator,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiOutlineShieldCheck
} from "react-icons/hi2";
import Section from "./Section";
import Footers from "./Footers";
import payrollImg from "../Assets/pay.jpg";

export default function Payroll() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>

      {/* HERO */}
      <Section style={styles.hero}>
        <h1 style={styles.heroTitle}>
          Smart <span style={styles.blueText}>Payroll</span>
        </h1>
        <p style={styles.heroSub}>
          A modern payroll system built to automate salaries, ensure compliance,
          and deliver complete transparency across your organization.
        </p>
      </Section>

      {/* OVERVIEW WITH RIGHT IMAGE */}
      <Section style={styles.section}>
        <div style={styles.flexContainer}>

          {/* LEFT CONTENT */}
          <div style={styles.leftContent}>
            <h2 style={styles.sectionTitle}>
              End-to-End <span style={styles.blueText}>Management</span>
            </h2>
            <p style={styles.sectionText}>
              Automate payroll processing, integrate attendance, generate payslips,
              and stay compliant — all from one intelligent platform.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div style={styles.rightImage}>
            <img
              src={payrollImg}
              alt="Payroll Dashboard"
              style={styles.sideImage}
            />
          </div>

        </div>
      </Section>

      {/* CORE FEATURES */}
      <Section style={styles.sectionAlt}>
        <h2 style={styles.sectionTitle}>
          Core <span style={styles.blueText}>Capabilities</span>
        </h2>

        <div style={styles.grid}>
          <Feature
            icon={<HiOutlineCalculator />}
            title="Automated Salary Processing"
            desc="Auto-calculate earnings, deductions, overtime, incentives, and reimbursements."
          />
          <Feature
            icon={<HiOutlineClock />}
            title="Attendance Integration"
            desc="Real-time sync with attendance and leave systems for accurate payouts."
          />
          <Feature
            icon={<HiOutlineDocumentText />}
            title="Payslip & Tax Statements"
            desc="Instant generation of digital payslips and yearly tax documents."
          />
          <Feature
            icon={<HiOutlineUserGroup />}
            title="Employee Self-Service"
            desc="Employees can access payslips, salary history, and tax breakdowns securely."
          />
          <Feature
            icon={<HiOutlineChartBar />}
            title="Reports & Insights"
            desc="Payroll summaries, cost analytics, and compliance reports."
          />
        </div>
      </Section>

      {/* CTA */}
      <Section style={styles.ctaContainer}>
        <div style={styles.ctaInner}>
          <h2 style={styles.ctaTitle}>
            Simplify <span style={styles.blueText}>Payroll.</span> Empower HR.
          </h2>
          <p style={styles.ctaSub}>
            Experience stress-free payroll with automation and intelligence.
          </p>
          <button style={styles.ctaBtn}>
            Request Payroll Demo
          </button>
        </div>
      </Section>

      <Footers />
    </div>
  );
}

/* ================= COMPONENTS ================= */

const Feature = ({ icon, title, desc }) => (
  <motion.div style={styles.featureCard} whileHover={{ scale: 1.05 }}>
    <div style={styles.iconCircle}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

/* ================= STYLES ================= */

const styles = {

  page: { color: "#e5e7eb", fontFamily: "Inter, sans-serif" },

  hero: {
    padding: "140px 8% 100px",
    textAlign: "center"
  },

  heroTitle: {
    fontSize: "60px",
    fontWeight: 800,
    color: "#fff"
  },

  blueText: { color: "#3b82f6" },

  heroSub: {
    maxWidth: "700px",
    margin: "20px auto 0",
    color: "#94a3b8",
    fontSize: "18px"
  },

  section: {
    padding: "100px 8%"
  },

  sectionAlt: {
    padding: "100px 8%",
    borderTop: "1px solid #1e293b"
  },

  sectionTitle: {
    fontSize: "40px",
    fontWeight: 800,
    marginBottom: "20px",
    color: "#fff"
  },

  sectionText: {
    color: "#94a3b8",
    fontSize: "16px",
    lineHeight: "1.6"
  },

  /* FLEX IMAGE LAYOUT */
  flexContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "60px",
    flexWrap: "wrap"
  },

  leftContent: {
    flex: 1,
    minWidth: "300px"
  },

  rightImage: {
    flex: 1,
    minWidth: "300px",
    textAlign: "right"
  },

  sideImage: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "20px",
    border: "1px solid #1e293b"
  },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "24px",
    marginTop: "40px"
  },

  featureCard: {
    padding: "40px 30px",
    background: "rgba(15, 23, 42, 0.3)",
    borderRadius: "24px",
    border: "1px solid #1e293b",
    textAlign: "left"
  },

  iconCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    background: "rgba(59, 130, 246, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "28px",
    color: "#3b82f6",
    marginBottom: "20px"
  },

  cardTitle: {
    fontSize: "18px",
    fontWeight: 700,
    color: "#f8fafc"
  },

  cardDesc: {
    color: "#94a3b8",
    marginTop: "10px",
    fontSize: "14px"
  },

  /* CTA */
  ctaContainer: {
    padding: "100px 8%",
    textAlign: "center"
  },

  ctaInner: {
    background: "rgba(255,255,255,0.02)",
    padding: "60px",
    borderRadius: "30px",
    border: "1px solid rgba(59,130,246,0.3)"
  },

  ctaTitle: {
    fontSize: "40px",
    fontWeight: 800,
    color: "#fff"
  },

  ctaSub: {
    color: "#94a3b8",
    margin: "20px auto 30px"
  },

  ctaBtn: {
    background: "#3b82f6",
    color: "#fff",
    padding: "15px 40px",
    borderRadius: "10px",
    border: "none",
    fontWeight: 700,
    cursor: "pointer"
  }

};
