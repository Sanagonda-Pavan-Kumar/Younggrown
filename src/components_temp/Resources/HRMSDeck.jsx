import React, { useEffect } from "react";
import Footers from "../Footers";
import Section from "../Section";

export default function HRMSDeck() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div style={styles.page}>
      <Section style={styles.hero}>
        <h1 style={styles.title}>
          Youngrown <span style={styles.blue}>HRMS Deck</span>
        </h1>
        <p style={styles.sub}>
          A complete overview of our HRMS capabilities — built for growing
          organizations.
        </p>
      </Section>

      <Section>
        <ul style={styles.list}>
          <li>Core HR & Employee Records</li>
          <li>Recruitment & Onboarding</li>
          <li>Attendance, Payroll & Compliance</li>
          <li>Performance & Analytics</li>
          <li>Employee Engagement Tools</li>
        </ul>
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
  list: {
    maxWidth: 800,
    margin: "0 auto",
    lineHeight: 2,
    fontSize: "1.1rem",
    color: "#cbd5e1",
  },
};
