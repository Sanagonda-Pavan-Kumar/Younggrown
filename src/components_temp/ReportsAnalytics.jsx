import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Section from "./Section";
import {
  HiChartBar,
  HiPresentationChartLine,
  HiDocumentReport,
  HiAdjustments,
  HiUserGroup,
  HiTrendingUp,
  HiSearch,
  HiChatAlt2,
  HiCurrencyDollar,
  HiCheckCircle,
} from "react-icons/hi";

export default function ReportsAnalytics() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      {/* HERO */}
      <Section style={styles.hero} {...fadeUp}>
        <h1 style={styles.heroTitle}>
          Reports & Analytics
          <br />
          <span style={styles.blue}>Simple Insights for Your Team</span>
        </h1>

        <p style={styles.heroSub}>
          Understand your workforce without the complexity. We turn your daily HR
          data into easy-to-read reports and helpful summaries.
        </p>

        <img
          src="https://images.pexels.com/photos/669619/pexels-photo-669619.jpeg"
          alt="HR Analytics Dashboard"
          style={styles.heroImage}
        />
      </Section>

      {/* CORE ANALYTICS */}
      <Section style={styles.section} {...fadeUp}>
        <h2 style={styles.sectionTitle}>Simple Reporting Tools</h2>

        <motion.div style={styles.grid} {...stagger}>
          <Card
            icon={<HiChartBar />}
            title="Daily Dashboards"
            text="See a quick summary of attendance, team leave, and daily activity in one place."
          />
          <Card
            icon={<HiPresentationChartLine />}
            title="Ready-to-Use Reports"
            text="Download pre-made reports for your meetings without needing to build them from scratch."
          />
          <Card
            icon={<HiDocumentReport />}
            title="Attendance Checks"
            text="Easily track who is present and spot patterns in timing or absences across the team."
          />
          <Card
            icon={<HiAdjustments />}
            title="Quick View Filters"
            text="Look at your data by specific departments or locations with a single click."
          />
        </motion.div>
      </Section>

      {/* UNIQUE & PROFESSIONAL ZIG-ZAG FLOW */}
      <Section style={styles.section} {...fadeUp}>
        <h2 style={styles.sectionTitle}>Our Simple Hiring Strategy</h2>
        <p style={styles.sectionText}>
          A clear, step-by-step path to finding and keeping the best talent for
          your team.
        </p>

        <div style={styles.pathContainer}>
          {/* Vertical Line Background */}
          <div style={styles.spinalLine}></div>

          {hiringStrategy.map((s, i) => (
            <motion.div
              key={s.no}
              style={{
                ...styles.pathItem,
                flexDirection: i % 2 === 0 ? "row" : "row-reverse",
              }}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              {/* Content Side */}
              <div style={styles.pathContentBox}>
                <div style={styles.nodeIcon}>{s.icon}</div>
                <h3 style={styles.nodeTitle}>{s.title}</h3>
                <p style={styles.nodeDesc}>{s.desc}</p>
              </div>

              {/* Center Circle Side */}
              <div style={styles.nodePointWrapper}>
                <div style={styles.nodePoint}>
                  <span style={styles.nodeNumber}>{s.no}</span>
                </div>
              </div>

              {/* Spacer Side to keep balance */}
              <div style={styles.pathSpacer}></div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* DAILY INSIGHTS */}
      <Section style={styles.sectionAlt} {...fadeUp}>
        <h2 style={styles.sectionTitle}>Daily Insights</h2>
        <motion.div style={styles.grid} {...stagger}>
          <InsightCard
            icon={<HiTrendingUp />}
            title="Team Stability"
            desc="Identify when the team is most stable and when you might need extra support."
          />
          <InsightCard
            icon={<HiUserGroup />}
            title="Team Habits"
            desc="Learn about the working styles that make your best teams successful."
          />
          <InsightCard
            icon={<HiChartBar />}
            title="Budget Tracking"
            desc="Keep a simple eye on your hiring spend to stay within your monthly goals."
          />
        </motion.div>
      </Section>

      {/* CTA */}
      <Section style={styles.cta} {...fadeUp}>
        <h2 style={styles.ctaTitle}>Make Better Decisions with Data</h2>
        <p style={styles.ctaSub}>
          Start using simple analytics to grow your team today.
        </p>
        <button style={styles.ctaBtn}>Request a Simple Demo</button>
      </Section>
    </div>
  );
}

/* ================= COMPONENTS ================= */

const Card = ({ icon, title, text }) => (
  <motion.div style={styles.card} variants={fadeUp}>
    <div style={styles.icon}>{icon}</div>
    <h3 style={styles.cardHeading}>{title}</h3>
    <p style={styles.cardPara}>{text}</p>
  </motion.div>
);

const InsightCard = ({ icon, title, desc }) => (
  <motion.div style={styles.insightCard} variants={fadeUp}>
    <div style={styles.icon}>{icon}</div>
    <h3 style={styles.cardHeading}>{title}</h3>
    <p style={styles.cardPara}>{desc}</p>
  </motion.div>
);

/* ================= DATA (HUMANIZED) ================= */

const hiringStrategy = [
  {
    no: "01",
    icon: <HiSearch />,
    title: "Finding Talent",
    desc: "We help you see which job boards are bringing in your best applicants.",
  },
  {
    no: "02",
    icon: <HiChatAlt2 />,
    title: "Interview Journey",
    desc: "Track how smoothly candidates move from 'Hello' to a final job offer.",
  },
  {
    no: "03",
    icon: <HiCurrencyDollar />,
    title: "Hiring Budget",
    desc: "A clear view of your spending so you can hire efficiently and stay on track.",
  },
  {
    no: "04",
    icon: <HiCheckCircle />,
    title: "New Hire Success",
    desc: "We check in on how your new members are settling in and staying happy.",
  },
];

/* ================= ANIMATIONS ================= */

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 },
};

const stagger = {
  whileInView: { transition: { staggerChildren: 0.15 } },
  viewport: { once: true },
};

/* ================= STYLES ================= */

const styles = {
  page: { color: "#e5e7eb", overflowX: "hidden" },
  hero: { padding: "120px 8% 60px", textAlign: "center" },
  heroTitle: { fontSize: "clamp(36px, 6vw, 60px)", fontWeight: 800 },
  blue: { color: "#3b82f6" },
  heroSub: { maxWidth: "760px", margin: "20px auto", color: "#94a3b8" },
  heroImage: {
    marginTop: "40px",
    width: "100%",
    maxWidth: "800px",
    borderRadius: "22px",
  },

  section: { padding: "90px 8%", textAlign: "center" },
  sectionAlt: { padding: "90px 8%",  textAlign: "center" },
  sectionTitle: { fontSize: "32px", fontWeight: 700, marginBottom: "20px" },
  sectionText: { maxWidth: "720px", margin: "0 auto 60px", color: "#94a3b8" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
    gap: "26px",
  },
  card: {
    padding: "30px",
    borderRadius: "18px",
    border: "1px solid #1e293b",
    textAlign: "left",
  },
  cardHeading: { fontSize: "20px", fontWeight: 700, marginBottom: "10px" },
  cardPara: { color: "#94a3b8", lineHeight: "1.5" },

  insightCard: {
    padding: "28px",
    borderRadius: "18px",
    border: "1px solid #1e293b",
    textAlign: "left",
  },
  icon: { fontSize: "34px", color: "#3b82f6", marginBottom: "10px" },

  /* --- PROFESSIONAL ZIG-ZAG PATH --- */
  pathContainer: {
    position: "relative",
    maxWidth: "1000px",
    margin: "0 auto",
    padding: "40px 0",
  },
  spinalLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: "2px",
    background: "linear-gradient(to bottom, #1e293b, #3b82f6, #1e293b)",
    transform: "translateX(-50%)",
  },
  pathItem: {
    display: "flex",
    alignItems: "center",
    marginBottom: "60px",
    width: "100%",
  },
  pathContentBox: {
    flex: 1,
    padding: "30px",
    background: "#0f172a",
    border: "1px solid #1e293b",
    borderRadius: "24px",
    textAlign: "left",
    zIndex: 2,
  },
  nodeIcon: { fontSize: "28px", color: "#3b82f6", marginBottom: "10px" },
  nodeTitle: { fontSize: "19px", fontWeight: 700, marginBottom: "8px" },
  nodeDesc: { fontSize: "14px", color: "#94a3b8", lineHeight: "1.5" },
  nodePointWrapper: {
    width: "80px",
    display: "flex",
    justifyContent: "center",
    zIndex: 3,
  },
  nodePoint: {
    width: "40px",
    height: "40px",
    borderRadius: "50%",
    background: "#020617",
    border: "3px solid #3b82f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 15px rgba(59,130,246,0.5)",
  },
  nodeNumber: { fontWeight: 800, fontSize: "14px", color: "#3b82f6" },
  pathSpacer: { flex: 1 },

  cta: {
    padding: "100px 8%",
    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    textAlign: "center",
  },
  ctaTitle: { fontSize: "38px", color: "#fff", fontWeight: 800 },
  ctaSub: { color: "#bfdbfe", margin: "12px 0 28px" },
  ctaBtn: {
    padding: "16px 40px",
    borderRadius: "12px",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
    background: "#fff",
    color: "#2563eb",
  },
};