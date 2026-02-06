import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; 
import Footers from "./Footers";
import Section from "./Section";
import {
  HiOutlineChartBar,
  HiOutlineArrowPath,
  HiOutlineUserGroup,
  HiOutlineLightBulb,
  HiOutlineRocketLaunch,
  HiOutlineCalendarDays,
  HiOutlineCheckCircle,
  HiOutlineArrowsRightLeft,
  HiOutlineBriefcase,
  HiOutlineBuildingOffice2
} from "react-icons/hi2";

/* ================= ANIMATIONS ================= */

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7 } }
};

/* ================= UTILS ================= */

const Underline = ({ color, width = "150px" }) => (
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: width }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.5 }}
    style={{
      height: "4px",
      background: color,
      margin: "12px auto 0",
      borderRadius: "2px"
    }}
  />
);

/* ================= COMPONENT ================= */

export default function PerformanceManagement() {
  const navigate = useNavigate(); // Navigation hook

  const handleDemoClick = () => {
    navigate("/ContactUs");
  };

  return (
    <div>
      <motion.div
        style={styles.page}
        variants={pageVariants}
        initial="hidden"
        animate="visible"
      >
        {/* HERO */}
        <Section>
          <div style={styles.section}>
            <div style={styles.header}>
              <h1 style={styles.title}>
                Performance <span style={styles.blueText}>Management</span> That Drives Growth
                <Underline color="#3b82f6" width="220px" />
              </h1>
              <p style={styles.subtitle}>
                Track progress, align goals, and continuously improve employee
                performance with a transparent, data-driven, and human-friendly system.
              </p>

              <div style={styles.goalFlow}>
                <div style={{ ...styles.goalBox, ...styles.org }}>
                  <HiOutlineBuildingOffice2 /> Organization Goals
                </div>
                <HiOutlineArrowsRightLeft color="#3b82f6" />
                <div style={{ ...styles.goalBox, ...styles.team }}>
                  <HiOutlineBriefcase /> Team Goals
                </div>
                <HiOutlineArrowsRightLeft color="#3b82f6" />
                <div style={{ ...styles.goalBox, ...styles.individual }}>
                  <HiOutlineCheckCircle /> Individual Goals
                </div>
              </div>
            </div>
          </div>
        </Section>

        {/* IMAGE & INSIGHTS SECTION */}
        <Section>
          <div style={styles.section}>
            <div style={styles.insightsWrapper}>
              <div style={styles.insightsText}>
                <h2 style={{...styles.title, fontSize: '2.5rem', textAlign: 'left'}}>
                  Actionable <span style={styles.blueText}>Insights</span>
                </h2>
                <p style={styles.subtitle}>
                  Stop guessing and start growing. Our dashboard provides a real-time view of 
                  competency gaps and high-potential talent across your entire workforce.
                </p>
              </div>
              <div style={styles.imageContainer}>
                <img 
                  src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1000&auto=format&fit=crop" 
                  alt="Performance Analytics Dashboard" 
                  style={styles.image}
                />
              </div>
            </div>
          </div>
        </Section>

        {/* FEATURES */}
        <Section>
          <div style={styles.section}>
            <div style={styles.header}>
              <h2 style={{...styles.title, fontSize: '2.8rem'}}>
                Core <span style={styles.blueText}>Capabilities</span>
                <Underline color="#3b82f6" width="120px" />
              </h2>
            </div>
            <div style={styles.featureGrid}>
              {features.map((item, i) => (
                <motion.div 
                  key={i} 
                  style={styles.featureCard}
                  whileHover={{ y: -10, borderColor: "#3b82f6" }}
                >
                  <div style={styles.icon}>{item.icon}</div>
                  <h3 style={styles.cardTitle}>{item.title}</h3>
                  <p style={styles.cardText}>{item.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section> 

        {/* OUTCOMES */}
        <Section>
          <div style={styles.section}>
            <div style={styles.header}>
              <h2 style={{...styles.title, fontSize: '2.8rem'}}>
                Real <span style={styles.blueText}>Outcomes</span> for Everyone
                <Underline color="#3b82f6" width="100px" />
              </h2>
            </div>
            <div style={styles.outcomeGrid}>
              <OutcomeCard 
                icon={<HiOutlineUserGroup size={42} color="#3b82f6" />}
                title="Stronger Teams"
                text="Clear expectations and continuous feedback improve collaboration."
              />
              <OutcomeCard 
                icon={<HiOutlineLightBulb size={42} color="#3b82f6" />}
                title="Smarter Decisions"
                text="Performance data removes bias and supports fair evaluations."
              />
              <OutcomeCard 
                icon={<HiOutlineRocketLaunch size={42} color="#3b82f6" />}
                title="Faster Growth"
                text="Employees understand where they stand and how to grow."
              />
            </div>
          </div>
        </Section>

        {/* CTA SECTION */}
        <Section>
          <div style={styles.ctaWrapper}>
            <div style={styles.ctaInner}>
              <h2 style={styles.ctaTitle}>
                Ready to <span style={styles.blueText}>Elevate</span> Your Team?
                <Underline color="#3b82f6" width="120px" />
              </h2>
              <p style={styles.ctaSub}>
                Join hundreds of forward-thinking companies using our performance system to build better workplaces.
              </p>
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }} 
                style={styles.ctaBtn}
                onClick={handleDemoClick} // Navigation Trigger
              >
                Book a Performance Demo
              </motion.button>
            </div>
          </div>
        </Section>

      </motion.div>
      <Footers />
    </div>
  );
}

const OutcomeCard = ({icon, title, text}) => (
  <div style={styles.outcomeCard}>
    <div style={{marginBottom: '20px', display: 'flex', justifyContent: 'center'}}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardText}>{text}</p>
  </div>
);

/* ================= STYLES ================= */

const styles = {
  page: {
    color: "#f8fafc",
    padding: "90px 8% 40px",
    fontFamily: "Inter, sans-serif"
  },
  section: { marginBottom: "120px" },
  header: { textAlign: "center", maxWidth: "900px", margin: "0 auto 60px" },
  title: {
    fontSize: "3.2rem",
    fontWeight: 900,
    lineHeight: 1.2,
    marginBottom: "20px",
    color: "#fff"
  },
  blueText: { color: "#3b82f6" },
  subtitle: {
    fontSize: "1.15rem",
    color: "#94a3b8",
    lineHeight: 1.7,
    marginTop: "20px"
  },
  goalFlow: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "18px",
    flexWrap: "wrap",
    marginTop: "50px"
  },
  goalBox: {
    padding: "18px 24px",
    borderRadius: "14px",
    fontWeight: 700,
    display: "flex",
    alignItems: "center",
    gap: "12px",
    fontSize: "0.95rem",
    boxShadow: "0 10px 30px rgba(0,0,0,0.2)"
  },
  org: { background: "#1e3a8a", border: "1px solid #2563eb" },
  team: { background: "#1d4ed8", border: "1px solid #3b82f6" },
  individual: { background: "#2563eb", border: "1px solid #60a5fa" },

  insightsWrapper: {
    display: "flex",
    alignItems: "center",
    gap: "60px",
    flexWrap: "wrap",
    background: "rgba(255,255,255,0.02)",
    padding: "60px",
    borderRadius: "40px",
    border: "1px solid rgba(255,255,255,0.05)"
  },
  insightsText: { flex: "1 1 400px" },
  imageContainer: { flex: "1 1 400px" },
  image: { 
    width: "100%", 
    borderRadius: "24px", 
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
    border: "1px solid rgba(59,130,246,0.2)"
  },
  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px,1fr))",
    gap: "28px"
  },
  featureCard: {
    background: "rgba(30, 41, 59, 0.4)",
    border: "1px solid rgba(255,255,255,0.06)",
    padding: "38px",
    borderRadius: "28px",
    transition: "0.3s ease",
    backdropFilter: "blur(10px)"
  },
  icon: { fontSize: "2.6rem", color: "#3b82f6", marginBottom: "20px" },
  cardTitle: { fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px", color: "#fff" },
  cardText: { color: "#94a3b8", lineHeight: 1.6 },
  outcomeGrid: {
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
    marginTop: "50px"
  },
  outcomeCard: {
    background: "rgba(255,255,255,0.03)",
    padding: "40px",
    borderRadius: "28px",
    maxWidth: "340px",
    textAlign: "center",
    border: "1px solid rgba(255,255,255,0.05)"
  },
  ctaWrapper: { padding: "40px 0 100px" },
  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "80px 40px",
    borderRadius: "40px",
    textAlign: "center",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.3)"
  },
  ctaTitle: { fontSize: "3rem", fontWeight: 900, color: "#fff", marginBottom: "15px" },
  ctaSub: { color: "#94a3b8", margin: "0 auto 40px", fontSize: "1.1rem", maxWidth: "600px" },
  ctaBtn: {
    background: "#3b82f6",
    color: "#fff",
    padding: "18px 45px",
    borderRadius: "14px",
    border: "none",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(59,130,246,0.2)"
  }
};

const features = [
  {
    title: "Goal-Based Performance Tracking",
    text: "Define clear organizational, team, and individual goals. Automatically align daily work with long-term business outcomes.",
    icon: <HiOutlineChartBar />
  },
  {
    title: "Continuous Feedback Loop",
    text: "Enable managers and peers to share ongoing feedback instead of waiting for annual reviews.",
    icon: <HiOutlineArrowPath />
  },
  {
    title: "Smart Performance Reviews",
    text: "Run quarterly or annual reviews using real data — attendance, tasks, KPIs, and feedback combined.",
    icon: <HiOutlineCalendarDays />
  },
  {
    title: "Strength & Gap Identification",
    text: "Spot top performers, hidden strengths, and improvement areas with AI-driven insights.",
    icon: <HiOutlineLightBulb />
  },
  {
    title: "Manager Dashboards",
    text: "Give leaders a clear snapshot of team health, engagement, and delivery progress.",
    icon: <HiOutlineUserGroup />
  },
  {
    title: "Career Growth Mapping",
    text: "Link performance outcomes directly to promotions, learning plans, and succession paths.",
    icon: <HiOutlineRocketLaunch />
  }
];