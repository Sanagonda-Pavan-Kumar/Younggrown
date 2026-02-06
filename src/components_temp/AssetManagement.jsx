import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import Section from "./Section";
import Footers from "./Footers";
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

export default function AssetManagement() {
  const navigate = useNavigate();

  return (
    <div style={styles.page}>
      {/* HERO SECTION */}
      <Section>
        <div style={styles.hero}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={styles.heroTitle}
          >
            Intelligent Asset <span style={styles.blueText}>Management</span>
            <Underline color="#3b82f6" width="260px" />
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            Gain complete control over assets with real-time tracking, lifecycle
            visibility, and automated workflows — all in one unified system.
          </motion.p>

          <div style={styles.heroActions}>
            {/* UPDATED: GET STARTED -> HOME */}
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              style={styles.primaryBtn}
              onClick={() => navigate("/")}
            >
              Get Started
            </motion.button>

            {/* UPDATED: VIEW DEMO -> CONTACT US */}
            <motion.button 
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)" }} 
              style={styles.secondaryBtn}
              onClick={() => navigate("/ContactUs")}
            >
              View Demo
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            style={styles.heroImageWrapper}
          >
            <img 
              src="https://images.unsplash.com/photo-1551288049-bb848a4f691f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Asset Analytics Dashboard" 
              style={styles.heroImage}
              onError={(e) => { e.target.src = "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg"; }}
            />
          </motion.div>
        </div>
      </Section>

      {/* CENTRALIZED CONTROL */}
      <Section>
        <div style={styles.splitLayout}>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={styles.glassCard}
          >
            <h2 style={styles.cardTitle}>Centralized Control</h2>
            <p style={styles.cardText}>
              Manage IT assets, infrastructure, and licenses
              from a single intelligent dashboard. Track ownership, location,
              utilization, and status with precision.
            </p>
          </motion.div>
          
          <motion.img 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=600&q=80" 
            style={styles.sideImage}
            alt="Hardware Tracking"
          />
        </div>
      </Section>

      {/* ASSET LIFECYCLE */}
      <Section>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Asset <span style={styles.blueText}>Lifecycle</span> Management
            <Underline color="#3b82f6" width="180px" />
          </h2>

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
                whileHover={{ y: -10, borderColor: "#3b82f6", background: "rgba(255,255,255,0.05)" }}
                style={styles.lifecycleCard}
              >
                <div style={styles.iconBox}>{stage.icon}</div>
                <span style={styles.stepNumber}>0{index + 1}</span>
                <h4 style={styles.lifecycleTitle}>{stage.label}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* PLATFORM CAPABILITIES */}
      <Section>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Platform <span style={styles.blueText}>Capabilities</span>
            <Underline color="#3b82f6" width="160px" />
          </h2>

          <div style={styles.featureGrid}>
            {features.map((item, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -8, borderColor: "#3b82f6" }}
                style={styles.featureCard}
              >
                <div style={styles.featureIconSmall}>{item.icon}</div>
                <h4 style={styles.featureTitle}>{item.title}</h4>
                <p style={styles.featureDesc}>{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section>
        <div style={styles.ctaWrapper}>
          <div style={styles.ctaInner}>
            <h2 style={styles.ctaTitle}>
              Simplify Your <span style={styles.blueText}>Asset</span> Control
              <Underline color="#3b82f6" width="150px" />
            </h2>
            <p style={styles.ctaSub}>
              Maximize efficiency and reduce losses with the world's most intuitive asset management platform.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59,130,246,0.3)" }} 
              whileTap={{ scale: 0.95 }} 
              style={styles.ctaBtn}
              onClick={() => navigate("/ContactUs")}
            >
              Start Managing Assets
            </motion.button>
          </div>
        </div>
      </Section>

      <Footers />
    </div>
  );
}

/* ---------------- DATA ---------------- */

const features = [
  { title: "Real-Time Tracking", icon: <HiOutlineMagnifyingGlass />, desc: "Live visibility into asset location and condition across departments." },
  { title: "Smart Assignments", icon: <HiOutlineUserGroup />, desc: "Allocate assets to employees or teams with complete accountability." },
  { title: "Cost & Depreciation", icon: <HiOutlineChartBar />, desc: "Monitor asset value, depreciation, and total cost of ownership." },
  { title: "Audit & Compliance", icon: <HiOutlineShieldCheck />, desc: "Maintain audit-ready records with full history and access logs." },
];

/* ---------------- STYLES ---------------- */

const styles = {
  page: {  color: "#fff", fontFamily: "Inter, sans-serif", overflowX: "hidden" },
  hero: { padding: "120px 8% 60px", textAlign: "center" },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, color: "#fff" },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { maxWidth: "700px", margin: "30px auto 40px", color: "#94a3b8", fontSize: "1.2rem", lineHeight: 1.6 },
  heroActions: { display: "flex", justifyContent: "center", gap: "20px", marginBottom: "80px" },
  
  primaryBtn: { background: "#3b82f6", color: "#fff", padding: "18px 36px", borderRadius: "14px", border: "none", fontWeight: 700, cursor: "pointer" },
  secondaryBtn: { background: "transparent", border: "1px solid #334155", color: "#fff", padding: "18px 36px", borderRadius: "14px", cursor: "pointer" },

  heroImageWrapper: {
    maxWidth: "1000px",
    margin: "0 auto",
    borderRadius: "30px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: "0 40px 100px -20px rgba(0,0,0,0.7)"
  },
  heroImage: { width: "100%", display: "block", objectFit: "cover" },

  section: { padding: "80px 8%", textAlign: "center" },
  splitLayout: { display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap", justifyContent: "center", padding: "80px 8%" },
  sideImage: { width: "100%", maxWidth: "500px", borderRadius: "24px", border: "1px solid rgba(255,255,255,0.1)" },
  glassCard: { background: "rgba(30, 41, 59, 0.4)", border: "1px solid rgba(255,255,255,0.1)", backdropFilter: "blur(12px)", borderRadius: "32px", padding: "50px", maxWidth: "550px", textAlign: "left" },
  cardTitle: { fontSize: "2.2rem", fontWeight: 800, marginBottom: "20px" },
  cardText: { color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.8 },

  sectionTitle: { fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: "60px" },
  lifecycle: { display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" },
  lifecycleCard: { background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: "24px", padding: "30px", width: "200px", textAlign: "center", transition: "0.3s ease" },
  iconBox: { fontSize: "2.5rem", color: "#3b82f6", marginBottom: "15px" },
  stepNumber: { fontSize: "0.8rem", color: "#3b82f6", fontWeight: 800 },
  lifecycleTitle: { marginTop: "12px", fontSize: "1.1rem", fontWeight: 600 },

  featureGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: "30px" },
  featureCard: { background: "rgba(30, 41, 59, 0.3)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "26px", padding: "40px", textAlign: "left", transition: "0.3s ease" },
  featureIconSmall: { fontSize: "2.5rem", color: "#3b82f6", marginBottom: "20px" },
  featureTitle: { fontSize: "1.4rem", fontWeight: 700, marginBottom: "12px" },
  featureDesc: { color: "#94a3b8", lineHeight: 1.6 },

  ctaWrapper: { padding: "80px 8% 120px" },
  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "80px 40px",
    borderRadius: "40px",
    textAlign: "center",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)"
  },
  ctaTitle: { fontSize: "clamp(2rem, 5vw, 3.5rem)", fontWeight: 900, color: "#fff", marginBottom: "20px" },
  ctaSub: { color: "#94a3b8", margin: "0 auto 40px", fontSize: "1.1rem", maxWidth: "600px", lineHeight: 1.6 },
  ctaBtn: { background: "#3b82f6", color: "#fff", padding: "20px 50px", borderRadius: "16px", border: "none", fontWeight: 800, fontSize: "1.1rem", cursor: "pointer" }
};