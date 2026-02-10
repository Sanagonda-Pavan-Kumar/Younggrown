import React, { useEffect } from "react";
import Footers from "../Footers";
import Section from "../Section";

export default function AIForHR() {
  useEffect(() => window.scrollTo(0, 0), []);

  return (
    <div style={styles.page}>
      <Section style={styles.hero}>
        <h1 style={styles.title}>
          AI for <span style={styles.blue}>Modern HR</span>
        </h1>
        <p style={styles.sub}>
          Smarter decisions, faster execution, and better employee experiences
          powered by AI.
        </p>
      </Section>

      <Section>
        <ul style={styles.list}>
          <li>AI-driven resume screening and candidate matching</li>
          <li>Predictive analytics for attrition and performance</li>
          <li>Chatbots for employee support and HR queries</li>
          <li>Data-backed workforce planning and insights</li>
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
