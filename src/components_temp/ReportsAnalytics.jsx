import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Section from "./Section";
import Footers from "./Footers";
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

/* ================= UTILS ================= */

const Underline = ({ color = "#3b82f6", width = "150px" }) => (
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: width }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3 }}
    style={{
      height: "4px",
      background: color,
      margin: "12px auto 0",
      borderRadius: "2px"
    }}
  />
);

/* ================= COMPONENT ================= */

export default function ReportsAnalytics() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      {/* HERO */}
      <Section>
        <div style={styles.hero}>
          <h1 style={styles.heroTitle}>
            Reports & <span style={styles.blue}>Analytics</span>
            <Underline color="#3b82f6" width="220px" />
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
        </div>
      </Section>

      {/* CORE ANALYTICS */}
      <Section>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Simple <span style={styles.blue}>Reporting</span> Tools
            <Underline color="#3b82f6" width="140px" />
          </h2>

          <motion.div style={styles.grid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
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
        </div>
      </Section>

      {/* UNIQUE & PROFESSIONAL ZIG-ZAG FLOW */}
      <Section>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Our Simple <span style={styles.blue}>Hiring Strategy</span>
            <Underline color="#3b82f6" width="180px" />
          </h2>
          <p style={styles.sectionText}>
            A clear, step-by-step path to finding and keeping the best talent for your team.
          </p>

          <div style={styles.pathContainer}>
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
                <div style={styles.pathContentBox}>
                  <div style={styles.nodeIcon}>{s.icon}</div>
                  <h3 style={styles.nodeTitle}>{s.title}</h3>
                  <p style={styles.nodeDesc}>{s.desc}</p>
                </div>

                <div style={styles.nodePointWrapper}>
                  <div style={styles.nodePoint}>
                    <span style={styles.nodeNumber}>{s.no}</span>
                  </div>
                </div>

                <div style={styles.pathSpacer}></div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* DAILY INSIGHTS */}
      <Section>
        <div style={styles.sectionAlt}>
          <h2 style={styles.sectionTitle}>
            Daily <span style={styles.blue}>Insights</span>
            <Underline color="#3b82f6" width="100px" />
          </h2>
          <motion.div style={styles.grid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
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
        </div>
      </Section>

      {/* CTA - REDESIGNED TO MATCH PERFORMANCE COMPONENT */}
      <Section>
        <div style={styles.ctaWrapper}>
          <div style={styles.ctaInner}>
            <h2 style={styles.ctaTitle}>
              Ready to <span style={styles.blue}>Decide</span> with Data?
              <Underline color="#3b82f6" width="120px" />
            </h2>
            <p style={styles.ctaSub}>
              Join hundreds of data-driven HR teams using our analytics to build better workplaces.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59,130,246,0.3)" }} 
              whileTap={{ scale: 0.95 }} 
              style={styles.ctaBtn}
              onClick={() => navigate("/ContactUs")}
            >
              Request a Simple Demo
            </motion.button>
          </div>
        </div>
      </Section>
      <Footers />
    </div>
  );
}

/* ================= COMPONENTS ================= */

const Card = ({ icon, title, text }) => (
  <motion.div 
    style={styles.card} 
    variants={fadeUp}
    whileHover={{ y: -10, borderColor: "#3b82f6" }}
  >
    <div style={styles.icon}>{icon}</div>
    <h3 style={styles.cardHeading}>{title}</h3>
    <p style={styles.cardPara}>{text}</p>
  </motion.div>
);

const InsightCard = ({ icon, title, desc }) => (
  <motion.div 
    style={styles.insightCard} 
    variants={fadeUp}
    whileHover={{ y: -10, borderColor: "#3b82f6" }}
  >
    <div style={styles.icon}>{icon}</div>
    <h3 style={styles.cardHeading}>{title}</h3>
    <p style={styles.cardPara}>{desc}</p>
  </motion.div>
);

/* ================= DATA ================= */

const hiringStrategy = [
  { no: "01", icon: <HiSearch />, title: "Finding Talent", desc: "We help you see which job boards are bringing in your best applicants." },
  { no: "02", icon: <HiChatAlt2 />, title: "Interview Journey", desc: "Track how smoothly candidates move from 'Hello' to a final job offer." },
  { no: "03", icon: <HiCurrencyDollar />, title: "Hiring Budget", desc: "A clear view of your spending so you can hire efficiently and stay on track." },
  { no: "04", icon: <HiCheckCircle />, title: "New Hire Success", desc: "We check in on how your new members are settling in and staying happy." },
];

/* ================= ANIMATIONS ================= */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ================= STYLES ================= */

const styles = {
  page: { color: "#f8fafc",  overflowX: "hidden" },
  hero: { padding: "120px 8% 60px", textAlign: "center" },
  heroTitle: { fontSize: "clamp(40px, 6vw, 64px)", fontWeight: 900, lineHeight: 1.1, color: "#fff" },
  blue: { color: "#3b82f6" },
  heroSub: { maxWidth: "760px", margin: "30px auto", color: "#94a3b8", fontSize: "1.2rem", lineHeight: 1.6 },
  heroImage: {
    marginTop: "50px",
    width: "100%",
    maxWidth: "900px",
    borderRadius: "28px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    border: "1px solid rgba(255,255,255,0.1)"
  },

  section: { padding: "100px 8%", textAlign: "center" },
  sectionAlt: { padding: "100px 8%", textAlign: "center" },
  sectionTitle: { fontSize: "clamp(30px, 4vw, 42px)", fontWeight: 800, marginBottom: "20px", color: "#fff" },
  sectionText: { maxWidth: "720px", margin: "0 auto 60px", color: "#94a3b8", fontSize: "1.1rem" },

  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "30px",
  },
  card: {
    padding: "40px",
    borderRadius: "24px",
    background: "rgba(30, 41, 59, 0.3)",
    border: "1px solid rgba(255,255,255,0.05)",
    textAlign: "left",
    backdropFilter: "blur(10px)",
    transition: "0.3s ease"
  },
  cardHeading: { fontSize: "22px", fontWeight: 700, marginBottom: "12px", color: "#fff" },
  cardPara: { color: "#94a3b8", lineHeight: "1.6" },

  insightCard: {
    padding: "40px",
    borderRadius: "24px",
    background: "rgba(30, 41, 59, 0.3)",
    border: "1px solid rgba(255,255,255,0.05)",
    textAlign: "left",
    transition: "0.3s ease"
  },
  icon: { fontSize: "40px", color: "#3b82f6", marginBottom: "20px" },

  pathContainer: { position: "relative", maxWidth: "1000px", margin: "0 auto", padding: "60px 0" },
  spinalLine: {
    position: "absolute",
    left: "50%",
    top: 0,
    bottom: 0,
    width: "2px",
    background: "linear-gradient(to bottom, transparent, #3b82f6, transparent)",
    transform: "translateX(-50%)",
  },
  pathItem: { display: "flex", alignItems: "center", marginBottom: "80px", width: "100%" },
  pathContentBox: {
    flex: 1,
    padding: "35px",
    background: "#0f172a",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    borderRadius: "30px",
    textAlign: "left",
    zIndex: 2,
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
  },
  nodeIcon: { fontSize: "32px", color: "#3b82f6", marginBottom: "15px" },
  nodeTitle: { fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#fff" },
  nodeDesc: { fontSize: "15px", color: "#94a3b8", lineHeight: "1.6" },
  nodePointWrapper: { width: "100px", display: "flex", justifyContent: "center", zIndex: 3 },
  nodePoint: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#020617",
    border: "3px solid #3b82f6",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 0 20px rgba(59,130,246,0.4)",
  },
  nodeNumber: { fontWeight: 900, fontSize: "16px", color: "#3b82f6" },
  pathSpacer: { flex: 1 },

  /* --- CTA SECTION --- */
  ctaWrapper: { padding: "60px 8% 120px" },
  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "80px 40px",
    borderRadius: "40px",
    textAlign: "center",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)"
  },
  ctaTitle: { fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 900, color: "#fff", marginBottom: "20px" },
  ctaSub: { color: "#94a3b8", margin: "0 auto 40px", fontSize: "1.1rem", maxWidth: "600px", lineHeight: 1.6 },
  ctaBtn: {
    background: "#3b82f6",
    color: "#fff",
    padding: "20px 50px",
    borderRadius: "16px",
    border: "none",
    fontWeight: 800,
    fontSize: "1.1rem",
    cursor: "pointer",
    transition: "0.3s ease"
  }
};