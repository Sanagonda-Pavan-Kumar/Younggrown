import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineSparkles,
  HiOutlineShieldCheck,
  HiOutlineChartBar,
  HiOutlineUserGroup,
} from "react-icons/hi2";

import Section from "../Section";
import Footers from "../Footers";
import platformImage from "../../Assets/dashb.png";

export default function HRPlatform() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.page}>
      
      {/* HERO SPLIT SECTION */}
      <Section>
        <motion.div style={styles.heroSplit} {...fadeUp}>
          
          {/* LEFT SIDE TEXT */}
          <div style={styles.heroLeft}>
            <h1 style={styles.title}>
              One Platform. <span style={styles.blue}>All HR Needs.</span>
            </h1>

            <p style={styles.subtitle}>
              Manage your entire HR function with ease. Our AI-enabled HR platform
              brings all people processes into one place—so HR teams spend less
              time on manual work and more time supporting employees.
            </p>

            <div style={styles.buttonGroup}>
              <button style={styles.primaryBtn}>Request Demo</button>
              <button style={styles.secondaryBtn}>Explore Platform</button>
            </div>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div style={styles.heroRight}>
            <img
              src={platformImage}
              alt="HR Platform"
              style={styles.heroImage}
            />
          </div>

        </motion.div>
      </Section>

      {/* FEATURES GRID */}
      <Section>
        <motion.div style={styles.grid} {...stagger}>
          
          <FeatureCard
            icon={<HiOutlineSparkles />}
            title="AI That Makes HR Effortless"
            points={[
              "Automates routine HR activities",
              "Answers employee queries instantly",
              "Highlights trends and issues early",
              "Supports faster, smarter decisions",
            ]}
          />

          <FeatureCard
            icon={<HiOutlineUserGroup />}
            title="Better Experience for Employees"
            points={[
              "Easy self-service for leave & attendance",
              "Instant access to HR information",
              "Clear policies and timely updates",
              "A smoother experience builds engagement",
            ]}
          />

          <FeatureCard
            icon={<HiOutlineChartBar />}
            title="Clear Insights for HR & Leaders"
            points={[
              "Track attendance & performance trends",
              "Identify improvement areas early",
              "Plan workforce needs confidently",
              "No complex reports—just meaningful insights",
            ]}
          />

          <FeatureCard
            icon={<HiOutlineShieldCheck />}
            title="Secure, Scalable & Future-Ready"
            points={[
              "Secure employee data protection",
              "Compliance-ready workflows",
              "Scales as teams expand",
              "Built for modern growing businesses",
            ]}
          />
        </motion.div>
      </Section>

      {/* CTA SECTION */}
      <Section>
        <motion.div style={styles.ctaBox} {...fadeUp}>
          <h2 style={styles.ctaTitle}>
            HR stays human. AI handles the heavy work.
          </h2>
          <p style={styles.ctaText}>
            Simplify operations, empower employees, and gain clarity across
            your workforce—all from one intelligent platform.
          </p>
          <button style={styles.primaryBtn}>Get Started Today</button>
        </motion.div>
      </Section>

      <Footers />
    </div>
  );
}

/* FEATURE CARD */
const FeatureCard = ({ icon, title, points }) => (
  <motion.div style={styles.card} variants={fadeUp} whileHover={{ y: -8 }}>
    <div style={styles.icon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <ul style={styles.list}>
      {points.map((point, index) => (
        <li key={index}>{point}</li>
      ))}
    </ul>
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

  heroImage: {
    maxWidth: "500px",
    width: "100%",
    borderRadius: "24px",
  },

  title: {
    fontSize: "clamp(40px,6vw,60px)",
    fontWeight: 900,
  },

  blue: {
    color: "#3b82f6",
  },

  subtitle: {
    marginTop: "20px",
    color: "#94a3b8",
    fontSize: "18px",
    lineHeight: 1.6,
  },

  buttonGroup: {
    marginTop: "30px",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
  },

  primaryBtn: {
    background: "#3b82f6",
    color: "#fff",
    padding: "12px 26px",
    borderRadius: "8px",
    border: "none",
    fontWeight: 600,
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid #3b82f6",
    color: "#3b82f6",
    padding: "12px 26px",
    borderRadius: "8px",
    fontWeight: 600,
    cursor: "pointer",
  },

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
    borderRadius: "20px",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  icon: {
    fontSize: "32px",
    color: "#3b82f6",
    marginBottom: "15px",
  },

  cardTitle: {
    fontSize: "1.2rem",
    fontWeight: 700,
    marginBottom: "15px",
  },

  list: {
    color: "#94a3b8",
    lineHeight: 1.8,
    paddingLeft: "18px",
  },

  ctaBox: {
    maxWidth: "900px",
    margin: "80px auto",
    textAlign: "center",
    padding: "60px 30px",
    borderRadius: "24px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(59,130,246,0.2)",
  },

  ctaTitle: {
    fontSize: "28px",
    marginBottom: "15px",
  },

  ctaText: {
    color: "#94a3b8",
    marginBottom: "25px",
  },
};
