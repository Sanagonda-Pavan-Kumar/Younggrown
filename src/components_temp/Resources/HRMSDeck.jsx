import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';
import {
  CheckCircle,
  TrendingUp,
  ShieldCheck,
  Users,
  Zap,
  BarChart3,
  ArrowUpRight,
} from "lucide-react";

import Section from "../Section";
import Footers from "../Footers";

import heroImg from "../../Assets/hrmsdeck.png";
import dashboardImg from "../../Assets/simpli.jpg";
import aiImg from "../../Assets/dashb.png";

/* ===== UNDERLINE ===== */
const Underline = ({ width = "200px" }) => (
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width }}
    viewport={{ once: true }}
    transition={{ duration: 0.8 }}
    style={{
      height: "4px",
      background: "#3b82f6",
      marginTop: "14px",
      borderRadius: "2px",
    }}
  />
);

const HRMSDeck = () => {
   const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      
      {/* ===== HERO ===== */}
      <Section>
        <div style={styles.heroWrapper}>
          <div style={styles.heroText}>
            <h1 style={styles.heroTitle}>
              HRMS That <br />
              <span style={styles.blueText}>Simplifies People Management</span>
            </h1>
            <Underline width="280px" />

            <p style={styles.heroSub}>
              An all-in-one HRMS platform designed to manage employees,
              automate HR operations, and deliver real-time insights—
              without complexity.
            </p>

            <button style={styles.primaryBtn} onClick={() => navigate("/ContactUs")} >
              Book a Demo <ArrowUpRight size={18} style={{ marginLeft: 8 }} />
            </button>
          </div>

          <div style={styles.heroImageWrap}>
            <img src={heroImg} alt="HRMS Platform" style={styles.mainImg} />
          </div>
        </div>
      </Section>

      {/* ===== CORE FEATURES (IMAGE LEFT) ===== */}
      <Section>
        <div style={styles.splitLayout}>
          <div style={styles.imageWrapper}>
            <img src={dashboardImg} alt="Dashboard" style={styles.mainImg} />
          </div>

          <div style={styles.textContent}>
            <h2 style={styles.sectionTitle}>
              Core <span style={styles.blueText}>HRMS Features</span>
            </h2>
            <Underline width="160px" />

            <div style={styles.checkGrid}>
              {[
                "Employee onboarding & records",
                "Attendance & leave management",
                "Approvals & policy workflows",
                "Role-based access control",
              ].map((item, i) => (
                <div key={i} style={styles.checkItem}>
                  <CheckCircle size={18} color="#3b82f6" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ===== AI SECTION (IMAGE RIGHT) ===== */}
      <Section>
        <div style={styles.splitLayout}>
          <div style={styles.textContent}>
            <h2 style={styles.sectionTitle}>
              AI-Powered <span style={styles.blueText}>HR Intelligence</span>
            </h2>
            <Underline width="180px" />

            <p style={styles.sectionDesc}>
              Make smarter decisions with built-in AI insights and predictive analytics.
            </p>

            <div style={styles.cardGrid}>
              <FeatureCard icon={<TrendingUp />} title="Trend Insights" />
              <FeatureCard icon={<Users />} title="Attrition Signals" />
              <FeatureCard icon={<BarChart3 />} title="Performance Analytics" />
              <FeatureCard icon={<Zap />} title="Instant HR Assistant" />
            </div>
          </div>

          <div style={styles.imageWrapper}>
            <img src={aiImg} alt="AI Insights" style={styles.mainImg} />
          </div>
        </div>
      </Section>

      {/* ===== CTA ===== */}
      <Section>
        <div style={styles.ctaWrapper}>
          <h2 style={styles.ctaTitle}>
            Simplify HR. <span style={styles.blueText}>Empower People.</span>
          </h2>
          <Underline width="200px" />

          <button style={styles.primaryBtn}>
            Get Started Today <ArrowUpRight size={18} style={{ marginLeft: 8 }} />
          </button>
        </div>
      </Section>

      <Footers />
    </div>
  );
};

/* ===== FEATURE CARD ===== */
const FeatureCard = ({ icon, title }) => (
  <motion.div whileHover={{ y: -8 }} style={styles.featureCard}>
    <div style={{ color: "#3b82f6" }}>{icon}</div>
    <h4>{title}</h4>
  </motion.div>
);

/* ===== STYLES ===== */
const styles = {
  page: { color: "#fff", fontFamily: "Inter, sans-serif" },

  heroWrapper: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 80,
    padding: "140px 8%",
    flexWrap: "wrap",
  },

  heroText: { flex: 1, minWidth: 320 },
  heroImageWrap: { flex: 1, minWidth: 320 },

  heroTitle: {
    fontSize: "clamp(2.5rem, 6vw, 4rem)",
    fontWeight: 900,
    lineHeight: 1.1,
  },

  heroSub: {
    marginTop: 30,
    fontSize: "1.2rem",
    color: "#94a3b8",
    lineHeight: 1.7,
  },

  blueText: { color: "#3b82f6" },

  mainImg: {
    width: "100%",
    borderRadius: 30,
    boxShadow: "0 30px 60px rgba(0,0,0,0.5)",
  },

  splitLayout: {
    display: "flex",
    alignItems: "center",
    gap: 80,
    padding: "100px 8%",
    flexWrap: "wrap",
  },

  textContent: { flex: 1.2, minWidth: 320 },
  imageWrapper: { flex: 1, minWidth: 320 },

  sectionTitle: {
    fontSize: "clamp(2rem, 4vw, 2.8rem)",
    fontWeight: 800,
  },

  sectionDesc: {
    marginTop: 20,
    color: "#94a3b8",
    lineHeight: 1.7,
  },

  checkGrid: { marginTop: 30, display: "grid", gap: 16 },

  checkItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    color: "#cbd5e1",
  },

  cardGrid: {
    marginTop: 40,
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
    gap: 20,
  },

  featureCard: {
    padding: 30,
    borderRadius: 24,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.05)",
  },

  ctaWrapper: {
    textAlign: "center",
    padding: "120px 8%",
  },

  ctaTitle: {
    fontSize: "clamp(2.5rem, 5vw, 3rem)",
    fontWeight: 900,
    marginBottom: 40,
  },

  primaryBtn: {
    padding: "18px 40px",
    background: "#3b82f6",
    border: "none",
    borderRadius: 16,
    color: "#fff",
    fontWeight: 700,
    cursor: "pointer",
    display: "inline-flex",
    alignItems: "center",
  },
};

export default HRMSDeck;
