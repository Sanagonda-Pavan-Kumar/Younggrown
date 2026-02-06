import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineBuildingOffice2,
  HiOutlineCheckBadge,
  HiOutlineArrowRight,
  HiOutlineHandRaised,
} from "react-icons/hi2";
import Footers from "../Footers"; 
import Section from "../Section";

/* --- HAND-DRAWN UNDERLINE EFFECT --- */
const Underline = ({ color = "#3b82f6", width = "100%" }) => (
  <div style={{ position: 'relative', width: width, marginTop: '4px' }}>
    <motion.svg
      width="100%" height="12" viewBox="0 0 300 12" fill="none"
      xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"
    >
      <motion.path
        d="M2 9.5C50 4.5 150 1.5 298 7.5"
        stroke={color} strokeWidth="6" strokeLinecap="round"
        initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }}
        viewport={{ once: true }} transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
    </motion.svg>
  </div>
);

export default function NonTechStaffing() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      
      {/* HERO SECTION */}
      <Section style={styles.heroSection}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 style={styles.heroTitle}>
            Reliable Workforce. <br />
            <span style={styles.gradientText}>Delivered at Scale.</span>
          </h1>
          <div style={{ width: '280px', margin: '0 auto 30px' }}>
             <Underline width="100%" />
          </div>

          <p style={styles.heroSubtitle}>
            From frontline staff to operational teams, we empower businesses with
            dependable, flexible, and execution-ready staffing solutions.
          </p>

          <div style={styles.heroBtns}>
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={styles.primaryBtn} onClick={() => navigate("/")}
            >
              Explore
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={styles.secondaryBtn} onClick={() => navigate("/ContactUs")}
            >
              Demo Request
            </motion.button>
          </div>
        </motion.div>
      </Section>

      {/* STRATEGIC CAPABILITY */}
      <Section style={styles.wideCard}>
        <div style={styles.cardRow}>
          <div style={styles.contentSide}>
            <h2 style={styles.sectionTitle}>
              Built for On-Ground Execution
              <Underline width="200px" />
            </h2>

            <p style={styles.text}>
              We operate where execution matters most. With{" "}
              <strong>30+ hiring projects</strong> delivered, our teams move
              fast, scale instantly, and ensure workforce continuity.
            </p>

            <div style={styles.checkList}>
              <Check text="4–7 Day Average Turnaround" />
              <Check text="Compliance-First Management" />
              <Check text="High-Fit, Verified Profiles" />
            </div>
          </div>

          <div style={styles.visualSide}>
            <div style={styles.imageWrapper}>
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
                alt="Operational Team" 
                style={styles.sideImage} 
              />
            </div>
          </div>
        </div>
      </Section>

      {/* STAFFING MODELS */}
      <Section style={styles.gridContainer}>
        <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>
          Flexible Engagement Models
          <div style={{ width: '220px', margin: '10px auto' }}>
            <Underline width="100%" />
          </div>
        </h2>

        <motion.div style={styles.grid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <FeatureCard icon={<HiOutlineBuildingOffice2 />} title="Customized Staffing" desc="Tailored workforce models aligned to your operational structure." />
          <FeatureCard icon={<HiOutlineClock />} title="Temporary Staffing" desc="Rapid workforce deployment for seasonal or urgent needs." />
          <FeatureCard icon={<HiOutlineUsers />} title="Permanent Staffing" desc="Long-term talent solutions for business continuity." />
          <FeatureCard icon={<HiOutlineBriefcase />} title="Contract Staffing" desc="Flexible, compliance-managed contract hiring." />
        </motion.div>
      </Section>

      {/* METRICS */}
      <Section style={styles.dashboard}>
        <h2 style={{...styles.sectionTitle, textAlign: 'center', marginBottom: '40px'}}>
            Hiring Impact
            <div style={{ width: '120px', margin: '5px auto' }}><Underline width="100%" /></div>
        </h2>

        <motion.div style={styles.metricsGrid} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger}>
          <MetricCard icon={<HiOutlineBuildingOffice2 />} label="Clients" value="10+" />
          <MetricCard icon={<HiOutlineBriefcase />} label="Projects" value="30+" />
          <MetricCard icon={<HiOutlineHandRaised />} label="Collaborations" value="20+" />
          <MetricCard icon={<HiOutlineClock />} label="Turnaround" value="4–7 Days" />
        </motion.div>
      </Section>

      {/* CTA SECTION - PREVIOUS COMPONENT STYLE */}
      <Section style={{ padding: "80px 0 120px" }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            style={styles.ctaInner}
          >
            <h2 style={styles.ctaTitle}>
              Ready to <span style={styles.blueText}>Scale?</span>
              <div style={{ width: '180px', margin: '10px auto 0' }}>
                <Underline width="100%" />
              </div>
            </h2>
            <p style={styles.ctaSub}>
              Trusted by 10+ businesses. Join the ranks of companies optimizing 
              their workforce with speed and reliability.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={styles.ctaBtn} onClick={() => navigate("/ContactUs")}
            >
              Start Partnering <HiOutlineArrowRight size={20} style={{ marginLeft: 10 }} />
            </motion.button>
          </motion.div>
      </Section>

      <Footers />
    </div>
  );
}

/* --- SUB COMPONENTS --- */
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    variants={fadeUp}
    style={styles.card}
    whileHover={{ y: -12, borderColor: '#3b82f6', background: 'rgba(30, 41, 59, 0.4)' }}
  >
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

const MetricCard = ({ icon, label, value }) => (
  <motion.div variants={fadeUp} style={styles.metricCard}>
    <div style={styles.metricIcon}>{icon}</div>
    <div style={styles.metricValue}>{value}</div>
    <div style={styles.metricLabel}>{label}</div>
  </motion.div>
);

const Check = ({ text }) => (
  <div style={styles.checkItem}>
    <HiOutlineCheckBadge color="#3b82f6" size={20} />
    <span style={{color: '#cbd5e1'}}>{text}</span>
  </div>
);

/* --- ANIMATIONS & STYLES --- */
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const styles = {
  page: {  color: "#e5e7eb", overflowX: "hidden", fontFamily: "'Inter', sans-serif" },
  heroSection: { padding: "140px 0 100px", textAlign: "center",},
  heroTitle: { fontSize: "clamp(2.5rem, 8vw, 4.5rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' },
  gradientText: { background: "linear-gradient(90deg, #3b82f6, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { maxWidth: "720px", margin: "25px auto 40px", color: "#94a3b8", fontSize: '1.1rem', lineHeight: 1.6 },
  heroBtns: { display: "flex", justifyContent: "center", gap: "20px" },
  primaryBtn: { background: "#2563eb", color: "#fff", padding: "16px 36px", borderRadius: "12px", border: "none", fontWeight: 700, cursor: 'pointer' },
  secondaryBtn: { background: "transparent", border: "1px solid #1e293b", color: "#fff", padding: "16px 36px", borderRadius: "12px", fontWeight: 700, cursor: 'pointer' },

  wideCard: { background: "rgba(255,255,255,0.02)", borderRadius: "40px", padding: "60px", margin: "40px 0", border: "1px solid rgba(255,255,255,0.05)" },
  cardRow: { display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" },
  contentSide: { flex: 1.2, minWidth: '300px' },
  visualSide: { flex: 0.8, minWidth: '300px' },
  imageWrapper: { borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' },
  sideImage: { width: '100%', height: '400px', objectFit: 'cover' },
  
  sectionTitle: { fontSize: "clamp(2rem, 4vw, 2.6rem)", fontWeight: 800, marginBottom: "20px", color: '#f8fafc' },
  text: { color: "#94a3b8", lineHeight: 1.8, fontSize: '1.1rem' },
  checkList: { marginTop: "25px", display: "flex", flexDirection: "column", gap: "12px" },
  checkItem: { display: "flex", gap: "12px", alignItems: "center", fontWeight: 500 },

  gridContainer: { padding: "80px 0" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" },
  card: { border: "1px solid rgba(255,255,255,0.05)", borderRadius: "32px", padding: "40px", background: 'rgba(30, 41, 59, 0.2)', transition: '0.3s' },
  cardIcon: { fontSize: "42px", color: "#3b82f6", marginBottom: '20px' },
  cardTitle: { fontSize: '1.4rem', fontWeight: 700, marginBottom: '10px' },
  cardDesc: { color: '#64748b', lineHeight: 1.6 },

  dashboard: { padding: "80px 0" },
  metricsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "30px" },
  metricCard: { background: 'rgba(255,255,255,0.02)', border: "1px solid rgba(255,255,255,0.05)", borderRadius: "28px", padding: "40px", textAlign: "center" },
  metricIcon: { fontSize: "32px", color: "#3b82f6", marginBottom: '15px' },
  metricValue: { fontSize: "2.5rem", fontWeight: 800, color: '#fff' },
  metricLabel: { fontSize: "0.9rem", color: "#64748b", textTransform: "uppercase", letterSpacing: '0.1em' },

  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "100px 40px", borderRadius: "48px", textAlign: 'center',
    border: "1px solid rgba(59, 130, 246, 0.25)", boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
  },
  ctaTitle: { fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 15 },
  ctaSub: { fontSize: '1.2rem', color: '#94a3b8', marginBottom: 40, maxWidth: '700px', margin: '0 auto 40px' },
  ctaBtn: { padding: '18px 48px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }
};