import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineUserPlus,
  HiOutlineCpuChip,
  HiOutlineRocketLaunch,
  HiOutlineUsers,
  HiOutlineMagnifyingGlassCircle,
  HiOutlineBriefcase,
  HiOutlineGlobeAlt,
  HiOutlinePresentationChartBar,
  HiOutlineShieldCheck,
  HiOutlineDocumentText,
  HiOutlineClock,
  HiOutlineArrowRight
} from "react-icons/hi2";
import Footers from "../Footers"; 
import Section from "../Section";

/* --- HAND-DRAWN UNDERLINE COMPONENT --- */
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

const ITStaffing = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const hiringStrategy = [
    { no: "01", title: "Role Analysis", desc: "Translating tech requirements into actionable plans.", icon: <HiOutlineDocumentText /> },
    { no: "02", title: "Profile Screening", desc: "Filtering the best talent through rigorous vetting.", icon: <HiOutlineMagnifyingGlassCircle /> },
    { no: "03", title: "Technical Interview", desc: "Validation by our expert internal technical panel.", icon: <HiOutlineCpuChip /> },
    { no: "04", title: "Client Round", desc: "Direct interaction with the final short-listed experts.", icon: <HiOutlineUsers /> },
    { no: "05", title: "Onboarding", desc: "End-to-end support for a seamless joining experience.", icon: <HiOutlineRocketLaunch /> },
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div style={styles.page}>
      
      {/* HERO SECTION */}
      <Section style={styles.heroSection}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 style={styles.heroTitle}>
            We Deliver Talent <br />
            <span style={styles.gradientText}>On Your Deadline</span>
          </h1>
          <div style={{ width: '280px', margin: '0 auto 30px' }}>
             <Underline width="100%" />
          </div>
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

      {/* CLIENT REQUIREMENT SECTION */}
      <Section style={styles.wideCard}>
        <div style={styles.cardRow}>
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} style={styles.contentSide}>
            <h2 style={styles.sectionTitle}>
              Client Hiring Requirements
              <Underline width="200px" />
            </h2>
            <p style={styles.text}>
              Clients approach us with clear expectations—technology stack,
              experience range, location, and delivery timelines.
              Our recruiters translate these into an actionable plan.
            </p>
          </motion.div>
          <div style={styles.visualSide}>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" 
              alt="Hiring Requirements" style={styles.sideImage}
            />
          </div>
        </div>
      </Section>

      {/* PROCESS FLOW SECTION */}
      <Section style={styles.trackerContainer}>
        <h2 style={styles.trackerHeading}>
          Our Proven Staffing Process
          <div style={{ width: '220px', margin: '10px auto' }}>
            <Underline width="100%" />
          </div>
        </h2>
        
        <div style={styles.pathContainer}>
          <div style={styles.spinalLine}></div>
          {hiringStrategy.map((s, i) => (
            <motion.div
              key={s.no}
              style={{ ...styles.pathItem, flexDirection: i % 2 === 0 ? "row" : "row-reverse" }}
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
      </Section>

      {/* FEATURES GRID */}
      <Section>
        <div style={styles.grid}>
          <FeatureCard icon={<HiOutlineUsers />} title="Bulk Hiring Expertise" desc="Simultaneously manage multiple roles across teams, skills, and locations." />
          <FeatureCard icon={<HiOutlineClock />} title="4–5 Day SLA Hiring" desc="Time-bound execution with clear daily progress updates to clients." />
          <FeatureCard icon={<HiOutlineShieldCheck />} title="Verified Profiles" desc="Experience checks, skill validation, and document verification included." />
        </div>
      </Section>

      {/* METRICS SECTION */}
   

      {/* CTA SECTION - GRADIENT CARD */}
      <Section style={{ padding: "80px 0 120px" }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} style={styles.ctaInner}
          >
            <h2 style={styles.ctaTitle}>
              Need Roles <span style={styles.blueText}>Closed Fast?</span>
              <div style={{ width: '240px', margin: '10px auto 0' }}>
                <Underline width="100%" />
              </div>
            </h2>
            <p style={styles.ctaSub}>
              Ready to scale your technical team with verified experts? 
              Partner with us for a seamless, transparent hiring experience.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
              style={styles.ctaBtn} onClick={() => navigate("/ContactUs")}
            >
              Start Hiring Today <HiOutlineArrowRight size={20} style={{ marginLeft: 10 }} />
            </motion.button>
          </motion.div>
      </Section>

      <Footers />
    </div>
  );
};

/* --- FEATURE CARD COMPONENT --- */
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div style={styles.card} whileHover={{ y: -10, borderColor: 'rgba(59, 130, 246, 0.4)' }}>
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

/* --- STYLES --- */
const styles = {
  page: { color: "#fff", fontFamily: "'Inter', sans-serif", overflowX: 'hidden' },
  heroSection: { padding: "120px 0 80px", textAlign: "center", background: "radial-gradient(circle at 50% 0%, #1e3a8a33 0%, transparent 70%)" },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4.2rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em' },
  gradientText: { background: "linear-gradient(90deg, #3b82f6, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  blueText: { color: "#3b82f6" },
  heroBtns: { display: "flex", justifyContent: "center", gap: "20px" },
  primaryBtn: { background: "#2563eb", padding: "16px 36px", borderRadius: "12px", color: "#fff", border: "none", fontWeight: 700, cursor: "pointer" },
  secondaryBtn: { background: "transparent", border: "1px solid #1e293b", color: "#fff", padding: "16px 36px", borderRadius: "12px", cursor: "pointer" },

  wideCard: { background: "rgba(255,255,255,0.02)", borderRadius: "40px", padding: "60px", margin: "40px 0", border: "1px solid rgba(255,255,255,0.05)" },
  cardRow: { display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" },
  contentSide: { flex: 1.5 },
  visualSide: { flex: 1, textAlign: "center" },
  sideImage: { width: "100%", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" },

  sectionTitle: { fontSize: "clamp(2rem, 4vw, 2.6rem)", marginBottom: "15px", fontWeight: 800 },
  text: { color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.8 },

  trackerContainer: { textAlign: "center", padding: "80px 0" },
  trackerHeading: { fontSize: "clamp(2rem, 4vw, 2.6rem)", marginBottom: "60px", fontWeight: 800 },
  pathContainer: { position: "relative", maxWidth: "1000px", margin: "0 auto" },
  spinalLine: { position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", background: "rgba(59,130,246,0.3)", transform: "translateX(-50%)" },
  pathItem: { display: "flex", alignItems: "center", marginBottom: "40px", width: "100%" },
  pathContentBox: { flex: 1, padding: "30px", background: "rgba(255,255,255,0.03)", borderRadius: "24px", textAlign: "left", border: "1px solid rgba(255,255,255,0.05)" },
  nodeIcon: { fontSize: "2rem", color: "#3b82f6", marginBottom: "10px" },
  nodeTitle: { fontSize: "1.4rem", fontWeight: 700, marginBottom: "10px" },
  nodeDesc: { color: "#94a3b8", fontSize: "0.95rem" },
  nodePointWrapper: { width: "100px", display: "flex", justifyContent: "center", zIndex: 2 },
  nodePoint: { width: "40px", height: "40px", background: "#3b82f6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center" },
  nodeNumber: { fontWeight: 800, fontSize: "0.9rem" },
  pathSpacer: { flex: 1 },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))", gap: "30px", padding: "60px 0" },
  card: { background: "rgba(255,255,255,0.02)", padding: "40px", borderRadius: "32px", border: "1px solid rgba(255,255,255,0.05)" },
  cardIcon: { fontSize: "2.5rem", color: "#3b82f6" },
  cardTitle: { marginTop: "20px", fontSize: "1.4rem", fontWeight: 700 },
  cardDesc: { color: "#94a3b8", marginTop: "10px", lineHeight: 1.6 },

  snapshot: { display: "flex", justifyContent: "space-around", padding: "80px 0", flexWrap: "wrap", gap: '40px' },
  snapshotCard: { textAlign: "center" },
  snapshotNumber: { fontSize: "3.5rem", color: "#3b82f6", fontWeight: 900 },
  snapshotLabel: { color: "#94a3b8", fontSize: '1.1rem' },

  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "100px 40px", borderRadius: "48px", textAlign: 'center',
    border: "1px solid rgba(59, 130, 246, 0.25)", boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
  },
  ctaTitle: { fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 15 },
  ctaSub: { fontSize: '1.2rem', color: '#94a3b8', marginBottom: 40, maxWidth: '700px', margin: '0 auto 40px' },
  ctaBtn: { padding: '20px 48px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }
};

export default ITStaffing;