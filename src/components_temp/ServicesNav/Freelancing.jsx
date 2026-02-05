import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineBriefcase,
  HiOutlineRocketLaunch,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentCheck,
  HiOutlineArrowRight,
  HiOutlineClock,
} from "react-icons/hi2";

const FORM_LINK = "https://forms.gle/your-google-form-link";

export default function Freelancing() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      {/* HERO */}
      <motion.section
        style={styles.hero}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <h1 style={styles.heroTitle}>
          Freelancing
          <br />
          <span style={styles.blue}>Projects That Create Impact</span>
        </h1>

        <p style={styles.heroText}>
          We connect skilled freelancers with real-time client projects.
          Choose a project, apply instantly, and work with confidence.
        </p>
      </motion.section>

      {/* HOW IT WORKS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>How Our Freelancing Works</h2>

        {/* IMAGE INTEGRATION */}
        <div style={styles.imageWrapper}>
          <img 
            src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1200&q=80" 
            alt="Professional Workspace" 
            style={styles.mainImage}
          />
        </div>

        <div style={styles.steps}>
          <Step
            icon={<HiOutlineBriefcase />}
            title="Live Client Projects"
            text="We receive verified freelancing projects directly from clients."
          />
          <Step
            icon={<HiOutlineClipboardDocumentCheck />}
            title="Apply via Google Form"
            text="Click a project, fill the form, and submit your details."
          />
          <Step
            icon={<HiOutlineUserGroup />}
            title="We Review & Connect"
            text="We evaluate profiles and connect suitable freelancers."
          />
          <Step
            icon={<HiOutlineRocketLaunch />}
            title="Project Execution"
            text="Freelancer works, Younggrown manages coordination & delivery."
          />
        </div>
      </section>

      {/* PROJECTS STATUS */}
      <section style={styles.section}>
        <h2 style={styles.sectionTitle}>Available Freelancing Projects</h2>
        
        <motion.div 
          style={styles.statusBox}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <HiOutlineClock style={{ fontSize: "48px", color: "#3b82f6", marginBottom: "16px" }} />
          <h3>Currently Updating Pipeline</h3>
          <p style={{ color: "#94a3b8", maxWidth: "500px", margin: "10px auto" }}>
            We are currently vetting new client requirements. Direct project listings are 
            temporarily unavailable, but you can still submit your profile to our talent pool.
          </p>
        </motion.div>
      </section>

      {/* TRUST */}
      <motion.section
        style={styles.trust}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 style={styles.trustTitle}>Why Freelancers Trust Younggrown</h2>

        <ul style={styles.trustList}>
          <li>✔ Verified client projects only</li>
          <li>✔ Transparent communication</li>
          <li>✔ Fair opportunity for skilled talent</li>
          <li>✔ Long-term collaboration mindset</li>
        </ul>
      </motion.section>

      {/* CTA */}
      <motion.section
        style={styles.cta}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        <h2 style={styles.ctaTitle}>Ready to Start Freelancing?</h2>
        <p style={styles.ctaText}>
          Submit your details to join our talent pool and get notified of new projects.
        </p>

        <motion.a
          href={FORM_LINK}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
          style={styles.ctaBtn}
        >
          Join Talent Pool <HiOutlineArrowRight />
        </motion.a>
      </motion.section>
    </div>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

const Step = ({ icon, title, text }) => (
  <motion.div
    whileHover={{ y: -6 }}
    style={styles.step}
  >
    <div style={styles.icon}>{icon}</div>
    <h4>{title}</h4>
    <p>{text}</p>
  </motion.div>
);

/* ---------------- STYLES ---------------- */

const styles = {
  page: { background: "#020617", color: "#e5e7eb" },

  hero: { padding: "120px 8%", textAlign: "center" },
  heroTitle: { fontSize: "60px", fontWeight: 800 },
  blue: { color: "#3b82f6" },
  heroText: { maxWidth: "720px", margin: "20px auto", color: "#94a3b8" },

  section: { padding: "80px 8%" },
  sectionTitle: { fontSize: "32px", marginBottom: "40px" },

  imageWrapper: { width: "100%", marginBottom: "60px", borderRadius: "24px", overflow: "hidden" },
  mainImage: { width: "100%", height: "400px", objectFit: "cover", opacity: 0.8 },

  steps: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px,1fr))",
    gap: "24px",
  },

  step: {
    border: "1px solid #1e293b",
    borderRadius: "20px",
    padding: "30px",
    background: "rgba(15, 23, 42, 0.5)",
  },

  icon: { fontSize: "32px", color: "#3b82f6" },

  statusBox: {
    textAlign: "center",
    padding: "60px 40px",
    background: "rgba(30, 41, 59, 0.3)",
    borderRadius: "24px",
    border: "1px dashed #1e293b",
  },

  trust: {
    padding: "80px 8%",
    background: "#020617",
    textAlign: "center",
  },

  trustTitle: { fontSize: "34px", marginBottom: "20px" },
  trustList: {
    listStyle: "none",
    color: "#94a3b8",
    lineHeight: "2",
  },

  cta: {
    padding: "100px 8%",
    textAlign: "center",
    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
  },

  ctaTitle: { fontSize: "42px", fontWeight: 800 },
  ctaText: { color: "#bfdbfe", marginBottom: "30px" },
  ctaBtn: {
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    background: "#fff",
    color: "#2563eb",
    padding: "16px 36px",
    borderRadius: "12px",
    fontWeight: 700,
    textDecoration: "none",
  },
};