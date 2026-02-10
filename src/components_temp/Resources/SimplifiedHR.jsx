import React, { useEffect } from "react";
import Footers from "../Footers";
import Section from "../Section";

export default function SimplifiedHR() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div style={styles.page}>
      <Section style={styles.hero}>
        <h1 style={styles.title}>
          HR, <span style={styles.blue}>Without the Complexity</span>
        </h1>
        <p style={styles.sub}>
          Designed for teams that want clarity, speed, and control — without
          unnecessary tools or processes.
        </p>
      </Section>

      <Section>
        <div style={styles.grid}>
          <div style={styles.card}>Employee Lifecycle Management</div>
          <div style={styles.card}>Attendance & Leave Automation</div>
          <div style={styles.card}>Payroll & Compliance</div>
          <div style={styles.card}>Performance & Feedback</div>
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
  sub: { maxWidth: 720, margin: "20px auto", color: "#94a3b8", fontSize: "1.1rem" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(250px,1fr))",
    gap: 24,
  },
  card: {
    padding: 30,
    borderRadius: 20,
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.05)",
    textAlign: "center",
    fontWeight: 600,
  },
};
