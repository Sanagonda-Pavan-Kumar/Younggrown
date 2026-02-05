import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineCalculator,
  HiOutlineClock,
  HiOutlineDocumentText,
  HiOutlineUserGroup,
  HiOutlineChartBar,
  HiShieldCheck,
  HiOutlineShieldCheck
} from "react-icons/hi2";
import Section from "./Section";

export default function Payroll() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      {/* HERO */}
      <Section style={styles.hero} {...fadeUp}>
        <h1 style={styles.heroTitle}>
          Smart Payroll
          <br />
          <span style={styles.blue}>Accurate · Secure · Scalable</span>
        </h1>
        <p style={styles.heroSub}>
          A modern payroll system built to automate salaries, ensure compliance,
          and deliver complete transparency across your organization.
        </p>
      </Section>

      {/* OVERVIEW */}
      <Section style={styles.section} {...fadeUp}>
        <h2 style={styles.sectionTitle}>End-to-End Payroll Management</h2>
        <p style={styles.sectionText}>
          Automate payroll processing, integrate attendance, generate payslips,
          and stay compliant — all from one intelligent platform.
        </p>
        <img
          style={styles.image}
          src="https://images.unsplash.com/photo-1554224155-6726b3ff858f"
          alt="Payroll dashboard"
        />
      </Section>

      {/* CORE FEATURES - UPGRADED CARDS */}
      <Section style={styles.sectionAlt} {...fadeUp}>
        <h2 style={styles.sectionTitle}>Core Payroll Capabilities</h2>
        <motion.div style={styles.grid} {...stagger}>
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
            desc="Payroll summaries, cost analytics, and compliance reports at your fingertips."
          />
        </motion.div>
      </Section>

      {/* COMPLIANCE & SECURITY - NEUMORPHIC ACCENT CARDS */}
      <Section style={styles.section} {...fadeUp}>
        <h2 style={styles.sectionTitle}>Compliance & Security First</h2>
        <p style={styles.sectionText}>
          Built with regulatory accuracy and enterprise-grade data protection at
          its core.
        </p>
        <motion.div style={styles.grid} {...stagger}>
          <ComplianceCard
            tag="STATUTORY"
            title="Regulatory-Ready"
            desc="PF, ESI, and TDS calculations auto-updated per government rules."
          />
          <ComplianceCard
            tag="SECURITY"
            title="Encrypted Salary Data"
            desc="Role-based access and encryption ensure sensitive data stays protected."
          />
          <ComplianceCard
            tag="AUDIT"
            title="Audit-Friendly Logs"
            desc="Complete payroll history and approvals available anytime for review."
          />
          <ComplianceCard
            tag="GOVERNANCE"
            title="Location-Aware Rules"
            desc="Automatically adapts payroll compliance across different states."
          />
        </motion.div>
      </Section>

      {/* BUSINESS IMPACT - GLOW CARDS */}
      <Section style={styles.sectionAlt} {...fadeUp}>
        <h2 style={styles.sectionTitle}>Business Impact</h2>
        <motion.div style={styles.grid} {...stagger}>
          <ImpactCard value="70%" title="Faster Cycles" desc="Automation eliminates manual delays." />
          <ImpactCard value="0%" title="Compliance Risk" desc="Validations reduce statutory violations." />
          <ImpactCard value="100%" title="Transparency" desc="Clear breakdowns improve employee trust." />
          <ImpactCard value="∞" title="Scalability" desc="Supports growth from startups to enterprises." />
        </motion.div>
      </Section>

      {/* CTA */}
      <Section style={styles.cta} {...fadeUp}>
        <h2 style={styles.ctaTitle}>Simplify Payroll. Empower HR.</h2>
        <p style={styles.ctaSub}>
          Experience stress-free payroll with automation and intelligence.
        </p>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} style={styles.ctaBtn}>
          Request Payroll Demo
        </motion.button>
      </Section>
    </div>
  );
}

/* ================================
   COMPONENTS (WITH IMPROVED UI)
================================ */

const Feature = ({ icon, title, desc }) => (
  <motion.div 
    style={styles.featureCard} 
    variants={fadeUp}
    whileHover={{ borderColor: "#3b82f6", backgroundColor: "rgba(30, 41, 59, 0.5)" }}
  >
    <div style={styles.iconCircle}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

const ComplianceCard = ({ tag, title, desc }) => (
  <motion.div style={styles.complianceCard} whileHover={{ y: -8 }}>
    <div style={styles.tagWrapper}>
      <HiOutlineShieldCheck style={{ marginRight: 5 }} />
      <span style={styles.tag}>{tag}</span>
    </div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

const ImpactCard = ({ value, title, desc }) => (
  <motion.div style={styles.impactCard} whileHover={{ scale: 1.04 }}>
    <div style={styles.impactValue}>{value}</div>
    <h3 style={{...styles.cardTitle, color: '#fff'}}>{title}</h3>
    <p style={{...styles.cardDesc, color: '#94a3b8'}}>{desc}</p>
    <div style={styles.glowEffect} />
  </motion.div>
);

/* ================================
   ANIMATIONS & STYLES
================================ */

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6, ease: "easeOut" },
};

const stagger = {
  initial: {},
  whileInView: { transition: { staggerChildren: 0.1 } },
  viewport: { once: true },
};

const styles = {
  page: {  color: "#e5e7eb", fontFamily: "Inter, sans-serif" },
  hero: { padding: "140px 8% 100px", textAlign: "center" },
  heroTitle: { fontSize: "clamp(40px, 8vw, 68px)", fontWeight: 800, letterSpacing: "-0.02em" },
  blue: { background: "linear-gradient(to right, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSub: { maxWidth: "700px", margin: "24px auto 0", color: "#94a3b8", fontSize: "19px", lineHeight: "1.6" },
  
  section: { padding: "100px 8%", textAlign: "center" },
  sectionAlt: { padding: "100px 8%",textAlign: "center", borderTop: "1px solid #1e293b" },
  sectionTitle: { fontSize: "36px", fontWeight: 700, marginBottom: "20px" },
  sectionText: { maxWidth: "720px", margin: "0 auto 40px", color: "#94a3b8", fontSize: "17px" },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "24px", marginTop: "40px" },

  /* IMPROVED FEATURE CARD */
  featureCard: {
    padding: "40px 30px",
    background: "rgba(15, 23, 42, 0.3)",
    borderRadius: "24px",
    border: "1px solid #1e293b",
    textAlign: "left",
    transition: "all 0.3s ease",
    backdropFilter: "blur(10px)",
  },
  iconCircle: {
    width: "60px",
    height: "60px",
    borderRadius: "16px",
    background: "rgba(59, 130, 246, 0.1)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "30px",
    color: "#3b82f6",
    marginBottom: "20px",
  },

  /* IMPROVED COMPLIANCE CARD */
  complianceCard: {
    padding: "35px",
    borderRadius: "24px",
    background: "#0f172a",
    border: "1px solid #1e293b",
    textAlign: "left",
    position: "relative",
    overflow: "hidden",
  },
  tagWrapper: {
    display: "flex",
    alignItems: "center",
    fontSize: "12px",
    color: "#3b82f6",
    fontWeight: 700,
    textTransform: "uppercase",
    letterSpacing: "1px",
    marginBottom: "15px",
  },

  /* IMPROVED IMPACT CARD */
  impactCard: {
    padding: "40px 30px",
    borderRadius: "24px",
    background: "#020617",
    border: "1px solid #1e293b",
    textAlign: "center",
    position: "relative",
    zIndex: 1,
  },
  impactValue: {
    fontSize: "52px",
    fontWeight: 900,
    background: "linear-gradient(135deg, #fff 0%, #3b82f6 100%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    marginBottom: "10px",
  },
  glowEffect: {
    position: "absolute",
    top: 0, left: 0, right: 0, bottom: 0,
    background: "radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 0%, transparent 70%)",
    zIndex: -1,
  },

  cardTitle: { fontSize: "20px", fontWeight: 700, color: "#f8fafc" },
  cardDesc: { color: "#94a3b8", marginTop: "12px", lineHeight: "1.6", fontSize: "15px" },

  image: { marginTop: "50px", width: "100%", maxWidth: "1000px", borderRadius: "24px", border: "1px solid #1e293b" },

  cta: { padding: "120px 8%", background: "linear-gradient(135deg, #1e40af 0%, #2563eb 100%)", textAlign: "center" },
  ctaTitle: { fontSize: "44px", fontWeight: 800, color: "#fff" },
  ctaSub: { color: "#dbeafe", margin: "20px 0 40px", fontSize: "18px" },
  ctaBtn: {
    background: "#fff",
    color: "#1e40af",
    padding: "18px 45px",
    borderRadius: "15px",
    border: "none",
    fontWeight: 700,
    fontSize: "16px",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
  },
};