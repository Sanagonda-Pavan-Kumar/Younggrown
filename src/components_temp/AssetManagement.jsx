import { motion } from "framer-motion";

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
      </section>

      {/* CENTRALIZED CONTROL */}
      <section style={styles.section}>
        <motion.div
          whileHover={{ rotateX: 6, rotateY: -6 }}
          transition={{ type: "spring", stiffness: 120 }}
          style={styles.glassCard}
        >
          <h2 style={styles.cardTitle}>Centralized Asset Control</h2>
          <p style={styles.cardText}>
            Manage IT assets, infrastructure, tools, equipment, and licenses
            from a single intelligent dashboard. Track ownership, location,
            utilization, and status with precision.
          </p>
        </motion.div>
      </section>

      {/* ASSET LIFECYCLE */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Complete Asset Lifecycle Management</h2>

        <div style={styles.lifecycle}>
          {[
            "Procurement",
            "Assignment",
            "Active Usage",
            "Maintenance",
            "Decommissioning",
          ].map((stage, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -12 }}
              transition={{ type: "spring", stiffness: 160 }}
              style={styles.lifecycleCard}
            >
              <span style={styles.stepNumber}>0{index + 1}</span>
              <h4 style={styles.lifecycleTitle}>{stage}</h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Platform Capabilities</h2>

        <div style={styles.featureGrid}>
          {[
            {
              title: "Real-Time Tracking",
              desc: "Live visibility into asset location, usage, and condition across departments.",
            },
            {
              title: "Smart Assignments",
              desc: "Allocate assets to employees or teams with complete accountability.",
            },
            {
              title: "Maintenance Automation",
              desc: "Schedule servicing, repairs, and inspections to avoid downtime.",
            },
            {
              title: "Cost & Depreciation",
              desc: "Monitor asset value, depreciation, and total cost of ownership.",
            },
            {
              title: "Audit & Compliance",
              desc: "Maintain audit-ready records with full history and access logs.",
            },
            {
              title: "Analytics Dashboard",
              desc: "Data-driven insights to optimize utilization and reduce losses.",
            },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ rotateX: 8, rotateY: 8 }}
              transition={{ type: "spring", stiffness: 120 }}
              style={styles.featureCard}
            >
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

        <motion.button whileHover={{ scale: 1.1 }} style={styles.ctaBtn}>
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
  },

  hero: {
    padding: "120px 24px",
    textAlign: "center",
  },

  heroTitle: {
    fontSize: "3.8rem",
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

  section: {
    padding: "100px 8%",
    textAlign: "center",
  },

  glassCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    backdropFilter: "blur(18px)",
    borderRadius: "32px",
    padding: "60px",
    maxWidth: "900px",
    margin: "0 auto",
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
    gap: "30px",
  },

  lifecycleCard: {
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "22px",
    padding: "40px",
    width: "220px",
  },

  stepNumber: {
    fontSize: "0.8rem",
    color: "#60a5fa",
    fontWeight: 800,
  },

  lifecycleTitle: {
    marginTop: "12px",
    fontSize: "1.2rem",
  },

  featureGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "30px",
  },

  featureCard: {
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
    borderRadius: "26px",
    padding: "40px",
    transformStyle: "preserve-3d",
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
