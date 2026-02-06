import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Footers from "./Footers";
import {
  HiOutlineIdentification,
  HiOutlineDevicePhoneMobile,
  HiOutlineSquaresPlus,
  HiOutlineDocumentText,
  HiOutlineShieldCheck,
  HiOutlineCloudArrowUp,
  HiOutlineLockClosed,
  HiOutlineServerStack,
  HiOutlineChartBar,
} from "react-icons/hi2";
import Section from "./Section";

export default function EmployeeManagementSystem() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageTransition}
    >
      <motion.div
        style={styles.page}
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        {/* ================= HERO ================= */}
        <motion.section style={styles.heroSection} variants={fadeUp}>
          <h1 style={styles.heroTitle}>Employee Lifecycle Management</h1>
          <p style={styles.heroSubtitle}>
            Build a better employee experience—starting with a smarter HR
            foundation. Manage the complete employee journey with automation,
            compliance, and clarity.
          </p>

          <div style={styles.ctaGroup}>
            <motion.button
              style={styles.primaryBtn}
              onClick={() => navigate("/contactus")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 15px 30px rgba(37,99,235,0.4)",
              }}
              whileTap={{ scale: 0.95 }}
            >
              Request a Demo
            </motion.button>
            <motion.button 
              style={styles.secondaryBtn}
              onClick={() => navigate("/")}
              whileHover={{ backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
            >
              Explore Platform
            </motion.button>
          </div>
        </motion.section>

        {/* ============ LIFECYCLE SECTION ============ */}
        <Section>
          <motion.div style={styles.wideCard} variants={fadeUp}>
            <div style={styles.cardRow}>
              <div style={styles.contentSide}>
                <div style={styles.accentLine} />
                <h2 style={styles.sectionTitle}>End-to-End Employee Lifecycle</h2>
                <p style={styles.text}>
                  Manage the complete employee journey from onboarding to exit
                  with structured workflows. Automate employee creation, role
                  assignments, probation tracking, confirmations, and exit
                  formalities.
                </p>
              </div>

              <motion.div
                style={{...styles.threeDImageBox, overflow: 'hidden', padding: 0, background: 'none'}}
                whileHover={{ rotateY: -15, rotateX: 8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 120 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=800&q=80" 
                  alt="Employee Journey" 
                  style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: 32}}
                />
              </motion.div>
            </div>
          </motion.div>
        </Section>
<Section>
<motion.div style={styles.gridHeader} variants={fadeUp}>
  <h2 style={styles.gridTitle}>
    Modules for{" "}
    <span style={styles.underlineContainer}>
      <span style={styles.blueText}>Modern HR</span>
      <motion.svg
        width="220"
        height="12"
        viewBox="0 0 220 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={styles.underlineSvg}
      >
        <motion.path
          d="M3 9C40 3.5 180 3.5 217 9"
          stroke="#3b82f6"
          strokeWidth="4"
          strokeLinecap="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5, ease: "easeInOut" }}
        />
      </motion.svg>
    </span>
  </h2>
  <p style={styles.gridSubtitle}>
    Tailored solutions designed to scale with your growing workforce.
  </p>
</motion.div>
        {/* ============ FEATURES GRID ============ */}
        <div style={styles.featureGrid}>
          {moduleData.map((item, i) => (
            <motion.div
              key={i}
              style={styles.featureCard}
              variants={fadeUp}
              whileHover={{
                y: -12,
                backgroundColor: "rgba(255,255,255,0.06)",
                borderColor: "#3b82f6",
              }}
            >
              <div style={styles.iconCircle}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardText}>{item.text}</p>
            </motion.div>
          ))}
        </div>
</Section>
<Section>
        <motion.div
          style={{ ...styles.wideCard, background: "rgba(37,99,235,0.05)" }}
          variants={fadeUp}
        >
          <div style={styles.cardRow}>
            <motion.div
              style={{...styles.chartContainer, padding: '20px', background: 'rgba(15, 23, 42, 0.6)'}}
              whileHover={{ scale: 1.03 }}
            >
              <div style={{...styles.barGroup, alignItems: 'flex-end', height: '120px'}}>
                {[50, 80, 40, 90, 60].map((h, i) => (
                  <motion.div
                    key={i}
                    style={{ ...styles.bar, height: `${h}%`, width: '25px', background: i === 3 ? '#fff' : '#3b82f6' }}
                    animate={{ height: [`${h-5}%`, `${h+5}%`, `${h}%`] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  />
                ))}
              </div>
              <div style={{...styles.chartLabels, marginTop: 25}}>
                <div style={{display: 'flex', alignItems: 'center', gap: 8, color: '#fff'}}>
                  <HiOutlineChartBar /> Workforce Health: 92%
                </div>
              </div>
            </motion.div>

            <div style={styles.contentSide}>
              <h2 style={styles.sectionTitle}>Insights & Employee Analytics</h2>
              <p style={styles.text}>
                Gain visibility into workforce trends with real-time analytics.
                Track headcount, attrition, and tenure to make data-driven decisions.
              </p>
            </div>
          </div>
        </motion.div>
</Section>
<Section>       
        <motion.section style={styles.newCtaWrapper} variants={fadeUp}>
          <div style={styles.ctaGlowEffect}></div>
          <div style={styles.ctaContent}>
            <div style={styles.ctaLeft}>
              <h2 style={styles.newBannerTitle}>Secure & Scalable Architecture</h2>
              <p style={styles.newBannerSubtitle}>
                Built with enterprise-grade security, your employee data is protected
                using encryption, role-based access controls, and audit logs. 
              </p>
              <motion.button
                style={styles.newWhiteBtn}
                onClick={() => navigate("/contactus")}
                whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(59,130,246,0.3)" }}
                whileTap={{ scale: 0.98 }}
              >
                Let's Connect
              </motion.button>
            </div>

            <div style={styles.ctaRight}>
              <div style={styles.bannerIconGroup}>
                <motion.div 
                  animate={{ y: [0, -10, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                >
                  <HiOutlineLockClosed size={55} color="#60a5fa" />
                </motion.div>
                <motion.div 
                  animate={{ y: [0, 10, 0] }} 
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                >
                  <HiOutlineServerStack size={55} color="#3b82f6" />
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>
        </Section> 
      </motion.div>
      <Footers />
    </motion.div>
  );
}

const moduleData = [
  { title: "Centralized Employee Records", text: "Maintain a single source of truth for personal details and reporting structures.", icon: <HiOutlineIdentification /> },
  { title: "Smart Onboarding Experience", text: "Digital forms, document uploads, and checklists—completed before day one.", icon: <HiOutlineCloudArrowUp /> },
  { title: "Employee Self-Service Portal", text: "Employees can manage profiles, download payslips, and apply for leave independently.", icon: <HiOutlineDevicePhoneMobile /> },
  { title: "Role & Department Management", text: "Define departments, designations, and hierarchies with full audit history.", icon: <HiOutlineSquaresPlus /> },
  { title: "Document & Compliance", text: "Digitally manage contracts and policies with automated expiry tracking.", icon: <HiOutlineDocumentText /> },
  { title: "Leave & Policy Integration", text: "Seamlessly integrate leave rules and attendance policies for accurate enforcement.", icon: <HiOutlineShieldCheck /> },
];

const pageTransition = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5, ease: "easeOut" } },
  exit: { opacity: 0, scale: 1.02, transition: { duration: 0.3 } },
};

const pageVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

/* ================= STYLES ================= */
const styles = {
  page: { color: "#f8fafc", padding: "80px 8%", fontFamily: "'Inter', sans-serif", overflowX: "hidden" },
  heroSection: { textAlign: "center", marginBottom: 120 },
  heroTitle: { fontSize: "clamp(2.8rem, 6vw, 4.8rem)", fontWeight: 900, marginBottom: 25 },
  heroSubtitle: { fontSize: "1.35rem", color: "#94a3b8", maxWidth: 850, margin: "0 auto 45px", lineHeight: 1.7 },
  ctaGroup: { display: "flex", gap: 20, justifyContent: "center" },
  primaryBtn: { background: "#2563eb", color: "#fff", border: "none", padding: "18px 38px", borderRadius: 14, fontWeight: 800, cursor: "pointer" },
  secondaryBtn: { background: "transparent", color: "#fff", border: "1px solid #334155", padding: "18px 38px", borderRadius: 14, cursor: "pointer" },
  wideCard: { background: "rgba(255,255,255,0.03)", backdropFilter: "blur(12px)", borderRadius: 42, padding: 65, marginBottom: 60 },
  cardRow: { display: "flex", gap: 60, flexWrap: "wrap", alignItems: "center" },
  contentSide: { flex: 1.2 },
  accentLine: { width: 55, height: 4, background: "#3b82f6", marginBottom: 20, borderRadius: 2 },
  sectionTitle: { fontSize: "2.6rem", marginBottom: 25, fontWeight: 800 },
  text: { fontSize: "1.15rem", lineHeight: 1.85, color: "#cbd5e1" },
  threeDImageBox: { flex: 0.8, height: 360, borderRadius: 32, transformStyle: "preserve-3d", boxShadow: "0 30px 60px rgba(0,0,0,0.45)" },
  
  /* GRID HEADING STYLES */
  gridHeader: { textAlign: "center", marginBottom: 60 },
  gridTitle: { fontSize: "3rem", fontWeight: 800, marginBottom: 15 },
  blueText: { 
    background: "linear-gradient(to right, #3b82f6, #60a5fa)", 
    WebkitBackgroundClip: "text", 
    WebkitTextFillColor: "transparent" 
  },
  gridSubtitle: { fontSize: "1.2rem", color: "#94a3b8", maxWidth: 700, margin: "0 auto" },
  
  featureGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: 35, marginBottom: 120 },
  featureCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)", padding: 45, borderRadius: 32 },
  iconCircle: { fontSize: "2.9rem", color: "#3b82f6", marginBottom: 25 },
  cardTitle: { fontSize: "1.55rem", marginBottom: 14, fontWeight: 700 },
  cardText: { color: "#94a3b8", lineHeight: 1.7 },
  chartContainer: { flex: 1, height: 320, borderRadius: 32, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" },
  barGroup: { display: "flex", gap: 22, height: 150 },
  bar: { width: 36, borderRadius: "12px 12px 4px 4px" },
  chartLabels: { display: "flex", gap: 30, marginTop: 20, color: "#64748b", fontSize: "0.85rem" },

  /* SECURITY CTA - ICONS RIGHT */
  newCtaWrapper: {
    position: 'relative',
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "80px 70px",
    borderRadius: 48,
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 40px 100px rgba(0,0,0,0.4)",
    marginTop: 60,
  },
  ctaGlowEffect: {
    position: 'absolute',
    top: '-50%',
    right: '-10%',
    width: '400px',
    height: '400px',
    background: 'radial-gradient(circle, rgba(37,99,235,0.15) 0%, transparent 70%)',
    zIndex: 0,
  },
  ctaContent: { display: 'flex', alignItems: 'center', gap: 60, position: 'relative', zIndex: 1, flexWrap: 'nowrap' },
  ctaLeft: { flex: 1.5, textAlign: 'left' },
  ctaRight: { flex: 1, display: 'flex', justifyContent: 'center' },
  bannerIconGroup: { 
    display: "flex", 
    gap: 30, 
    background: "rgba(255,255,255,0.03)", 
    padding: "50px", 
    borderRadius: "100%", 
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "inset 0 0 20px rgba(255,255,255,0.05)"
  },
  newBannerTitle: { fontSize: "3rem", fontWeight: 900, marginBottom: 20, color: "#fff" },
  newBannerSubtitle: { fontSize: "1.25rem", maxWidth: 650, marginBottom: 40, color: "#94a3b8", lineHeight: 1.8 },
  newWhiteBtn: { background: "#fff", color: "#0f172a", border: "none", padding: "20px 45px", borderRadius: 18, fontWeight: 800, fontSize: "1.1rem", cursor: "pointer" },
};