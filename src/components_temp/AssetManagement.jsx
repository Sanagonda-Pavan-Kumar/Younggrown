import { motion } from "framer-motion";
import { 
  HiOutlineCube, 
  HiOutlineUserGroup, 
  HiOutlineArrowPath, 
  HiOutlineShieldCheck, 
  HiOutlineTrash,
  HiOutlineChartBar,
  HiOutlineMagnifyingGlass,
  HiOutlineCpuChip
} from "react-icons/hi2";

export default function AssetManagement() {
  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <section style={styles.hero}>
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={styles.heroTitle}
        >
          Intelligent Asset Management Platform
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          style={styles.heroSubtitle}
        >
          Gain complete control over assets with real-time tracking, lifecycle
          visibility, and automated workflows — all in one unified system.
        </motion.p>

        <div style={styles.heroActions}>
          <motion.button whileHover={{ scale: 1.08 }} style={styles.primaryBtn}>
            Get Started
          </motion.button>
          <motion.button whileHover={{ scale: 1.08 }} style={styles.secondaryBtn}>
            View Demo
          </motion.button>
        </div>

        {/* Hero Image Added */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          style={styles.heroImageWrapper}
        >
          <img 
            src="https://images.unsplash.com/photo-1551288049-bb848a4f691f?auto=format&fit=crop&w=1200&q=80" 
            alt="Dashboard Preview" 
            style={styles.heroImage}
          />
        </motion.div>
      </section>

      {/* CENTRALIZED CONTROL */}
      <section style={styles.section}>
        <div style={styles.splitLayout}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            whileHover={{ y: -10 }}
            style={styles.glassCard}
          >
            <h2 style={styles.cardTitle}>Centralized Asset Control</h2>
            <p style={styles.cardText}>
              Manage IT assets, infrastructure, tools, equipment, and licenses
              from a single intelligent dashboard. Track ownership, location,
              utilization, and status with precision.
            </p>
          </motion.div>
          
          <motion.img 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" 
            style={styles.sideImage}
            alt="Hardware Tracking"
          />
        </div>
      </section>

      {/* ASSET LIFECYCLE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Complete Asset Lifecycle Management</h2>

        <div style={styles.lifecycle}>
          {[
            { label: "Procurement", icon: <HiOutlineCube /> },
            { label: "Assignment", icon: <HiOutlineUserGroup /> },
            { label: "Active Usage", icon: <HiOutlineCpuChip /> },
            { label: "Maintenance", icon: <HiOutlineArrowPath /> },
            { label: "Decommissioning", icon: <HiOutlineTrash /> },
          ].map((stage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -12, backgroundColor: "rgba(255,255,255,0.08)", borderColor: "#60a5fa" }}
              style={styles.lifecycleCard}
            >
              <div style={styles.iconBox}>{stage.icon}</div>
              <span style={styles.stepNumber}>0{index + 1}</span>
              <h4 style={styles.lifecycleTitle}>{stage.label}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Platform Capabilities</h2>

        <div style={styles.featureGrid}>
          {[
            { title: "Real-Time Tracking", icon: <HiOutlineMagnifyingGlass />, desc: "Live visibility into asset location and condition across departments." },
            { title: "Smart Assignments", icon: <HiOutlineUserGroup />, desc: "Allocate assets to employees or teams with complete accountability." },
            { title: "Maintenance Automation", icon: <HiOutlineArrowPath />, desc: "Schedule servicing and inspections to avoid downtime." },
            { title: "Cost & Depreciation", icon: <HiOutlineChartBar />, desc: "Monitor asset value, depreciation, and total cost of ownership." },
            { title: "Audit & Compliance", icon: <HiOutlineShieldCheck />, desc: "Maintain audit-ready records with full history and access logs." },
            { title: "Analytics Dashboard", icon: <HiOutlineChartBar />, desc: "Data-driven insights to optimize utilization and reduce losses." },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ rotateX: 8, rotateY: 8, boxShadow: "0 20px 40px rgba(37, 99, 235, 0.2)" }}
              transition={{ type: "spring", stiffness: 120 }}
              style={styles.featureCard}
            >
              <div style={styles.featureIconSmall}>{item.icon}</div>
              <h4 style={styles.featureTitle}>{item.title}</h4>
              <p style={styles.featureDesc}>{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={styles.ctaSection}>
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          style={styles.ctaTitle}
        >
          Simplify Asset Control. Maximize Efficiency.
        </motion.h2>

        <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }} style={styles.ctaBtn}>
          Start Managing Assets
        </motion.button>
      </section>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  page: {
    background: "radial-gradient(circle at top, #020617, #000)",
    color: "#fff",
    fontFamily: "Inter, sans-serif",
    perspective: "1200px",
    overflowX: "hidden"
  },

  hero: {
    padding: "120px 24px 60px",
    textAlign: "center",
  },

  heroTitle: {
    fontSize: "clamp(2.5rem, 6vw, 3.8rem)",
    fontWeight: 900,
    marginBottom: "20px",
  },

  heroSubtitle: {
    maxWidth: "720px",
    margin: "0 auto 40px",
    color: "#94a3b8",
    fontSize: "1.2rem",
    lineHeight: 1.6,
  },

  heroActions: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "80px"
  },

  primaryBtn: {
    background: "linear-gradient(135deg,#2563eb,#60a5fa)",
    color: "#fff",
    padding: "16px 36px",
    borderRadius: "14px",
    border: "none",
    fontWeight: 700,
    cursor: "pointer",
  },

  secondaryBtn: {
    background: "transparent",
    border: "1px solid #334155",
    color: "#fff",
    padding: "16px 36px",
    borderRadius: "14px",
    cursor: "pointer",
  },

  heroImageWrapper: {
    maxWidth: "1000px",
    margin: "0 auto",
    borderRadius: "24px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 50px 100px -20px rgba(0,0,0,0.5)"
  },

  heroImage: {
    width: "100%",
    display: "block"
  },

  section: {
    padding: "100px 8%",
    textAlign: "center",
  },

  splitLayout: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    flexWrap: "wrap",
    justifyContent: "center"
  },

  sideImage: {
    width: "100%",
    maxWidth: "500px",
    borderRadius: "24px",
    boxShadow: "0 20px 50px rgba(0,0,0,0.4)"
  },

  glassCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    borderRadius: "32px",
    padding: "60px",
    maxWidth: "600px",
    textAlign: "left",
    boxShadow: "0 30px 80px rgba(0,0,0,0.6)",
    transformStyle: "preserve-3d",
  },

  cardTitle: {
    fontSize: "2.4rem",
    marginBottom: "20px",
  },

  cardText: {
    color: "#cbd5f5",
    fontSize: "1.1rem",
    lineHeight: 1.8,
  },

  sectionTitle: {
    fontSize: "2.6rem",
    marginBottom: "60px",
  },

  lifecycle: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "20px",
  },

  lifecycleCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "30px",
    width: "200px",
    textAlign: "center",
    transition: "all 0.3s ease"
  },

  iconBox: {
    fontSize: "2.5rem",
    color: "#60a5fa",
    marginBottom: "15px"
  },

  stepNumber: {
    fontSize: "0.8rem",
    color: "#60a5fa",
    fontWeight: 800,
  },

  lifecycleTitle: {
    marginTop: "12px",
    fontSize: "1.1rem",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
    gap: "30px",
  },

  featureCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "26px",
    padding: "40px",
    textAlign: "left",
    transformStyle: "preserve-3d",
  },

  featureIconSmall: {
    fontSize: "2rem",
    color: "#60a5fa",
    marginBottom: "20px"
  },

  featureTitle: {
    fontSize: "1.3rem",
    marginBottom: "12px",
  },

  featureDesc: {
    color: "#94a3b8",
    lineHeight: 1.6,
  },

  ctaSection: {
    padding: "120px 24px",
    textAlign: "center",
    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
  },

  ctaTitle: {
    fontSize: "3rem",
    fontWeight: 800,
    marginBottom: "30px",
  },

  ctaBtn: {
    background: "#fff",
    color: "#1e3a8a",
    padding: "18px 48px",
    borderRadius: "16px",
    border: "none",
    fontWeight: 800,
    fontSize: "1.1rem",
    cursor: "pointer",
  },
};