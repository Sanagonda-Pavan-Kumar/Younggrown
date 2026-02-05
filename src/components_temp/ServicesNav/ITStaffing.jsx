import React, { useEffect } from "react";
import { motion } from "framer-motion";
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
  HiOutlineClock
} from "react-icons/hi2";

export default function ITStaffing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Data for the new spinal design using your original content
  const hiringStrategy = [
    { no: "01", title: "Role Analysis", desc: "Translating tech requirements into actionable plans.", icon: <HiOutlineDocumentText /> },
    { no: "02", title: "Profile Screening", desc: "Filtering the best talent through rigorous vetting.", icon: <HiOutlineMagnifyingGlassCircle /> },
    { no: "03", title: "Technical Interview", desc: "Validation by our expert internal technical panel.", icon: <HiOutlineCpuChip /> },
    { no: "04", title: "Client Round", desc: "Direct interaction with the final short-listed experts.", icon: <HiOutlineUsers /> },
    { no: "05", title: "Onboarding", desc: "End-to-end support for a seamless joining experience.", icon: <HiOutlineRocketLaunch /> },
  ];

  return (
    <motion.div style={styles.page} initial="hidden" animate="visible" variants={pageVariants}>

      {/* HERO */}
      <motion.section style={styles.hero} variants={fadeUp}>
        <h1 style={styles.heroTitle}>
          We Deliver Talent <br />
          <span style={styles.blueText}>On Your Deadline</span>
        </h1>
        <div style={styles.heroBtns}>
          <button style={styles.primaryBtn}>Raise Hiring Request</button>
          <button style={styles.secondaryBtn}>See How It Works</button>
        </div>
      </motion.section>

      {/* CLIENT REQUIREMENT */}
      <motion.div style={styles.wideCard} variants={fadeUp}>
        <div style={styles.cardRow}>
          <div style={styles.contentSide}>
            <h2 style={styles.sectionTitle}>Client Hiring Requirements</h2>
            <p style={styles.text}>
              Clients approach us with clear expectations—technology stack,
              experience range, location, interview process, and delivery timelines.
              Our recruiters translate these requirements into an actionable hiring plan.
            </p>
          </div>
          <div style={styles.visualSide}>
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" 
              alt="Hiring Requirements Planning" 
              style={styles.sideImage}
            />
          </div>
        </div>
      </motion.div>

      {/* REDESIGNED PROCESS FLOW (SPINAL PATH) */}
      <motion.section style={styles.trackerContainer} variants={fadeUp}>
        <h2 style={styles.trackerHeading}>Our Proven Staffing Process</h2>
        
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
      </motion.section>

      {/* INTERVIEW OWNERSHIP */}
      <motion.div style={styles.wideCard} variants={fadeUp}>
        <div style={styles.cardRow}>
          <div style={styles.visualSide}>
            <img 
              src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=600&q=80" 
              alt="Technical Interview Process" 
              style={styles.sideImage}
            />
          </div>
          <div style={styles.contentSide}>
            <h2 style={styles.sectionTitle}>Flexible Interview Ownership</h2>
            <p style={styles.text}>
              Based on client preference, our technical panel conducts
              first-round interviews or coordinates directly with client interviewers.
              This ensures only technically validated candidates reach the final stage.
            </p>
          </div>
        </div>
      </motion.div>

      {/* FEATURES */}
      <div style={styles.grid}>
        <FeatureCard icon={<HiOutlineUsers />} title="Bulk Hiring Expertise" desc="Simultaneously manage multiple roles across teams, skills, and locations." />
        <FeatureCard icon={<HiOutlineClock />} title="4–5 Day SLA Hiring" desc="Time-bound execution with clear daily progress updates to clients." />
        <FeatureCard icon={<HiOutlineGlobeAlt />} title="Strong Local Talent Pool" desc="Access to city-focused candidates across Bangalore, Hyderabad, Pune & Chennai." />
        <FeatureCard icon={<HiOutlineShieldCheck />} title="Verified & Reliable Profiles" desc="Experience checks, skill validation, and document verification included." />
        <FeatureCard icon={<HiOutlinePresentationChartBar />} title="Hiring Visibility" desc="Clear visibility into pipeline status, interviews, and onboarding progress." />
        <FeatureCard icon={<HiOutlineUserPlus />} title="End-to-End Onboarding" desc="Offer rollout, joining coordination, and documentation handled by us." />
      </div>

      {/* SNAPSHOT METRICS */}
      <motion.div style={styles.snapshot} variants={fadeUp}>
        <div style={styles.snapshotCard}>
          <h3 style={styles.snapshotNumber}>4–5 Days</h3>
          <p style={styles.snapshotLabel}>Average Role Closure</p>
        </div>
        <div style={styles.snapshotCard}>
          <h3 style={styles.snapshotNumber}>95%</h3>
          <p style={styles.snapshotLabel}>Interview Success Rate</p>
        </div>
        <div style={styles.snapshotCard}>
          <h3 style={styles.snapshotNumber}>100%</h3>
          <p style={styles.snapshotLabel}>Client Transparency</p>
        </div>
      </motion.div>

      {/* CTA */}
      <motion.section style={styles.ctaBanner} variants={fadeUp}>
        <h2 style={styles.ctaTitle}>Need Roles Closed Fast?</h2>
        <button style={styles.whiteBtn}>Start Hiring Today</button>
      </motion.section>

    </motion.div>
  );
}

/* SUB COMPONENTS */
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div style={styles.card} whileHover={{ y: -10 }}>
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

/* ANIMATIONS */
const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

/* STYLES */
const styles = {
  page: { background: "#020617", color: "#fff", padding: "80px 8%", fontFamily: "Inter, sans-serif" },
  hero: { textAlign: "center", marginBottom: "100px" },
  heroTitle: { fontSize: "4.2rem", fontWeight: 900, margin: "20px 0" },
  blueText: { color: "#3b82f6" },
  heroBtns: { display: "flex", justifyContent: "center", gap: "20px" },
  primaryBtn: { background: "#2563eb", padding: "16px 32px", borderRadius: "12px", color: "#fff", border: "none", fontWeight: 700 },
  secondaryBtn: { background: "transparent", border: "1px solid #1e293b", color: "#fff", padding: "16px 32px", borderRadius: "12px" },

  wideCard: { background: "rgba(255,255,255,0.02)", borderRadius: "40px", padding: "60px", marginBottom: "60px" },
  cardRow: { display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" },
  contentSide: { flex: 1.5 },
  visualSide: { flex: 1, textAlign: "center" },
  sideImage: { width: "100%", borderRadius: "20px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" },

  sectionTitle: { fontSize: "2.6rem", marginBottom: "20px" },
  text: { color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.8 },

  // SPINAL PATH STYLES
  trackerContainer: { textAlign: "center", margin: "100px 0", position: "relative" },
  trackerHeading: { fontSize: "2.6rem", marginBottom: "60px" },
  pathContainer: { position: "relative", maxWidth: "1000px", margin: "0 auto" },
  spinalLine: { position: "absolute", left: "50%", top: 0, bottom: 0, width: "2px", background: "rgba(59,130,246,0.3)", transform: "translateX(-50%)" },
  pathItem: { display: "flex", alignItems: "center", marginBottom: "40px", width: "100%" },
  pathContentBox: { flex: 1, padding: "30px", background: "rgba(255,255,255,0.03)", borderRadius: "20px", textAlign: "left", border: "1px solid rgba(255,255,255,0.05)" },
  nodeIcon: { fontSize: "2rem", color: "#3b82f6", marginBottom: "10px" },
  nodeTitle: { fontSize: "1.4rem", marginBottom: "10px" },
  nodeDesc: { color: "#94a3b8", fontSize: "0.95rem" },
  nodePointWrapper: { width: "100px", display: "flex", justifyContent: "center", zIndex: 2 },
  nodePoint: { width: "40px", height: "40px", background: "#3b82f6", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 20px rgba(59,130,246,0.5)" },
  nodeNumber: { fontWeight: 800, fontSize: "0.9rem" },
  pathSpacer: { flex: 1 },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "30px", margin: "80px 0" },
  card: { background: "rgba(255,255,255,0.03)", padding: "40px", borderRadius: "30px" },
  cardIcon: { fontSize: "2.5rem", color: "#3b82f6" },
  cardTitle: { marginTop: "20px", fontSize: "1.4rem" },
  cardDesc: { color: "#94a3b8", marginTop: "10px" },

  snapshot: { display: "flex", justifyContent: "space-around", margin: "100px 0", flexWrap: "wrap" },
  snapshotCard: { textAlign: "center" },
  snapshotNumber: { fontSize: "3rem", color: "#3b82f6", fontWeight: 800 },
  snapshotLabel: { color: "#94a3b8" },

  ctaBanner: { background: "linear-gradient(135deg,#1e40af,#3b82f6)", padding: "100px 40px", textAlign: "center", borderRadius: "50px" },
  ctaTitle: { fontSize: "3.2rem", fontWeight: 800, marginBottom: "30px" },
  whiteBtn: { background: "#fff", color: "#2563eb", padding: "18px 45px", borderRadius: "15px", border: "none", fontWeight: 800 }
};