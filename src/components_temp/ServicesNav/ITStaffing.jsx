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
            <div style={styles.iconBox}>
              <HiOutlineBriefcase size={90} color="#3b82f6" />
            </div>
          </div>
        </div>
      </motion.div>

      {/* PROCESS FLOW */}
      <motion.div style={styles.trackerContainer} variants={fadeUp}>
        <h3 style={styles.trackerHeading}>Our Proven Staffing Process</h3>
        <div style={styles.pipelineFlow}>
          <TrackerNode step="01" label=" Role Analysis" icon={<HiOutlineDocumentText />} active />
          <div style={styles.arrow}>→</div>
          <TrackerNode step="02" label=" Profile Screening" icon={<HiOutlineMagnifyingGlassCircle />} active />
          <div style={styles.arrow}>→</div>
          <TrackerNode step="03" label=" Technical Interview" icon={<HiOutlineCpuChip />} active />
          <div style={styles.arrow}>→</div>
          <TrackerNode step="04" label=" Client Round" icon={<HiOutlineUsers />} active />
          <div style={styles.arrow}>→</div>
          <TrackerNode step="05" label=" Onboarding" icon={<HiOutlineRocketLaunch />} active />
        </div>
      </motion.div>

      {/* INTERVIEW OWNERSHIP */}
      <motion.div style={styles.wideCard} variants={fadeUp}>
        <div style={styles.cardRow}>
          <div style={styles.visualSide}>
            <HiOutlineCpuChip size={80} color="#60a5fa" />
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
        <FeatureCard
          icon={<HiOutlineUsers />}
          title="Bulk Hiring Expertise"
          desc="Simultaneously manage multiple roles across teams, skills, and locations."
        />
        <FeatureCard
          icon={<HiOutlineClock />}
          title="4–5 Day SLA Hiring"
          desc="Time-bound execution with clear daily progress updates to clients."
        />
        <FeatureCard
          icon={<HiOutlineGlobeAlt />}
          title="Strong Local Talent Pool"
          desc="Access to city-focused candidates across Bangalore, Hyderabad, Pune & Chennai."
        />
        <FeatureCard
          icon={<HiOutlineShieldCheck />}
          title="Verified & Reliable Profiles"
          desc="Experience checks, skill validation, and document verification included."
        />
        <FeatureCard
          icon={<HiOutlinePresentationChartBar />}
          title="Hiring Visibility"
          desc="Clear visibility into pipeline status, interviews, and onboarding progress."
        />
        <FeatureCard
          icon={<HiOutlineUserPlus />}
          title="End-to-End Onboarding"
          desc="Offer rollout, joining coordination, and documentation handled by us."
        />
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
        <h2 style={styles.ctaTitle}>
          Need Roles Closed Fast?
        </h2>
        <button style={styles.whiteBtn}>Start Hiring Today</button>
      </motion.section>

    </motion.div>
  );
}

/* SUB COMPONENTS */
const TrackerNode = ({ step, label, icon, active }) => (
  <div style={{ ...styles.node, opacity: active ? 1 : 0.4 }}>
    <div style={styles.nodeCircle}>{icon}</div>
    <span style={styles.nodeStep}>STEP {step}</span>
    <span style={styles.nodeLabel}>{label}</span>
  </div>
);

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
  badge: { background: "rgba(59,130,246,0.1)", color: "#3b82f6", padding: "6px 16px", borderRadius: "20px", fontWeight: 700 },
  heroTitle: { fontSize: "4.2rem", fontWeight: 900, margin: "20px 0" },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { color: "#94a3b8", maxWidth: "800px", margin: "0 auto 40px", fontSize: "1.2rem" },
  heroBtns: { display: "flex", justifyContent: "center", gap: "20px" },
  primaryBtn: { background: "#2563eb", padding: "16px 32px", borderRadius: "12px", color: "#fff", border: "none", fontWeight: 700 },
  secondaryBtn: { background: "transparent", border: "1px solid #1e293b", color: "#fff", padding: "16px 32px", borderRadius: "12px" },

  wideCard: { background: "rgba(255,255,255,0.02)", borderRadius: "40px", padding: "60px", marginBottom: "60px" },
  cardRow: { display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" },
  contentSide: { flex: 1.5 },
  visualSide: { flex: 0.5, textAlign: "center" },
  iconBox: { background: "rgba(59,130,246,0.1)", padding: "40px", borderRadius: "50%" },

  sectionTitle: { fontSize: "2.6rem", marginBottom: "20px" },
  text: { color: "#cbd5e1", fontSize: "1.1rem", lineHeight: 1.8 },

  trackerContainer: { textAlign: "center", margin: "100px 0" },
  trackerHeading: { color: "#3b82f6", fontSize: "1.8rem", marginBottom: "50px" },
  pipelineFlow: { display: "flex", justifyContent: "center", gap: "20px", flexWrap: "wrap" },
  node: { textAlign: "center" },
  nodeCircle: { width: 70, height: 70, borderRadius: "50%", border: "2px solid #3b82f6", display: "flex", alignItems: "center", justifyContent: "center" },
  nodeStep: { fontSize: "0.7rem", color: "#60a5fa", fontWeight: 800 },
  nodeLabel: { fontWeight: 600 },
  arrow: { fontSize: "2rem", color: "#1e293b" },

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
