import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footers from "../Footers";
import Section from "../Section";

export default function CaseStudies() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div style={styles.page}>
      <Section style={styles.hero}>
        <motion.h1 style={styles.title}>
          Real Results. <br />
          <span style={styles.blue}>Real Impact.</span>
        </motion.h1>
        <p style={styles.sub}>
          Explore how organizations use Younggrown to simplify HR, accelerate
          hiring, and improve workforce outcomes.
        </p>
      </Section>

      <Section>
        <div style={styles.card}>
          <h2>Mid-Size IT Firm – Faster Hiring</h2>
          <p>
            Reduced time-to-hire by <strong>42%</strong> using AI-powered screening
            and centralized recruitment workflows.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Manufacturing Company – Payroll Accuracy</h2>
          <p>
            Achieved <strong>100% payroll compliance</strong> with automated
            attendance and statutory calculations.
          </p>
        </div>

        <div style={styles.card}>
          <h2>Startup Scale-Up – HR Simplification</h2>
          <p>
            Replaced 5 disconnected tools with one unified HRMS, improving HR
            efficiency and employee satisfaction.
          </p>
        </div>
      </Section>

      <Footers />
    </div>
  );
}

const styles = {
  page: { color: "#e5e7eb", fontFamily: "'Inter', sans-serif" },
  hero: { padding: "140px 0 80px", textAlign: "center" },
  title: { fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 800 },
  blue: { color: "#3b82f6" },
  sub: { maxWidth: 700, margin: "20px auto", color: "#94a3b8", fontSize: "1.1rem" },
  card: {
    background: "rgba(255,255,255,0.03)",
    padding: 40,
    borderRadius: 24,
    marginBottom: 30,
    border: "1px solid rgba(255,255,255,0.05)",
  },
};

