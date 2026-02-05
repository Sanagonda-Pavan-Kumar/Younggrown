import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineAcademicCap,
  HiOutlineClock,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineClipboardDocumentCheck,
  HiOutlineRocketLaunch,
  HiOutlineLightBulb,
  HiOutlineDevicePhoneMobile,
} from "react-icons/hi2";

export default function Training() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      {/* BACKGROUND DECORATION */}
      <div style={styles.bgGlow} />

      {/* HERO SECTION */}
      <motion.section
        style={styles.hero}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
      
        <h1 style={styles.heroTitle}>
          Workforce Training.
          <br />
          <span style={styles.blueText}>Built for the Future.</span>
        </h1>

        <p style={styles.heroSubtitle}>
          We are currently designing structured, industry-aligned training
          programs to upskill workforce talent and improve on-ground
          performance.
        </p>
      </motion.section>

      {/* VISION & IMAGE SECTION */}
      <motion.section
        style={styles.wideCard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={styles.flexRow}>
          <div style={styles.textSide}>
            <h2 style={styles.sectionTitle}>Why Training Matters</h2>
            <p style={styles.text}>
              Skill gaps directly impact productivity, quality, and retention. Our
              upcoming training modules are being built to bridge this gap through
              practical, role-based learning.
            </p>
            <p style={styles.text}>
              These programs will focus on real-world execution — not theory —
              enabling workers to perform confidently from day one.
            </p>
          </div>
          
          <div style={styles.imageSide}>
            <div style={styles.imagePerspective}>
               <img 
                src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80" 
                alt="Corporate Training Session" 
                style={styles.sideImage}
               />
               <div style={styles.imageOverlay} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* PLANNED MODULES GRID */}
      <section style={styles.gridContainer}>
        <h2 style={{ ...styles.sectionTitle, textAlign: "center", marginBottom: "50px" }}>
          Planned Training Modules
        </h2>

        <motion.div
          style={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeatureCard
            icon={<HiOutlineAcademicCap />}
            title="Onboarding & Induction"
            desc="Structured onboarding programs for smooth workforce integration."
          />
          <FeatureCard
            icon={<HiOutlineUserGroup />}
            title="Role-Based Skill Training"
            desc="Practical training aligned with specific job roles and industries."
          />
          <FeatureCard
            icon={<HiOutlineClipboardDocumentCheck />}
            title="Compliance & Safety"
            desc="Mandatory safety, compliance, and workplace behavior training."
          />
          <FeatureCard
            icon={<HiOutlineSparkles />}
            title="Soft Skills Development"
            desc="Communication, discipline, and professional conduct programs."
          />
        </motion.div>
      </section>

      {/* TRAINING METHODOLOGY (New Visual Section) */}
      <motion.section
        style={styles.wideCard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={{...styles.flexRow, flexDirection: 'row-reverse'}}>
          <div style={styles.textSide}>
            <h2 style={styles.sectionTitle}>Our Methodology</h2>
            <div style={styles.methodList}>
                <MethodItem 
                    icon={<HiOutlineLightBulb />} 
                    title="Case-Study Learning" 
                    desc="Learning through actual on-field scenarios." 
                />
                <MethodItem 
                    icon={<HiOutlineDevicePhoneMobile />} 
                    title="Hybrid Modules" 
                    desc="Mix of digital content and physical workshops." 
                />
                <MethodItem 
                    icon={<HiOutlineRocketLaunch />} 
                    title="Performance Tracking" 
                    desc="Post-training evaluation for continuous improvement." 
                />
            </div>
          </div>
          
          <div style={styles.imageSide}>
            <div style={{...styles.imagePerspective, transform: "rotateY(10deg) rotateX(5deg)"}}>
               <img 
                src="https://images.unsplash.com/photo-1531482615713-2afd69097998?auto=format&fit=crop&w=800&q=80" 
                alt="Collaborative Training" 
                style={styles.sideImage}
               />
               <div style={styles.imageOverlay} />
            </div>
          </div>
        </div>
      </motion.section>

      {/* STATUS & TIMELINE */}
      <motion.section
        style={styles.wideCard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 style={styles.sectionTitle}>Current Status</h2>

        <div style={styles.statusRow}>
          <StatusItem icon={<HiOutlineClock />} text="Curriculum Planning in Progress" />
          <StatusItem icon={<HiOutlineRocketLaunch />} text="Pilot Programs Launching Soon" />
        </div>

        <p style={{ ...styles.text, marginTop: "30px" }}>
          We are actively working with industry experts and operational teams to
          roll out these training initiatives in upcoming phases.
        </p>
      </motion.section>

      {/* CTA SECTION */}
      <motion.section
        style={styles.cta}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Training Programs Coming Soon</h2>
          <p style={styles.ctaSub}>
            Designed to upskill, retain, and empower the workforce of tomorrow.
          </p>
          <motion.button
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            whileTap={{ scale: 0.95 }}
            style={styles.whiteBtn}
          >
            Stay Updated
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

/* ---------- SUB COMPONENTS ---------- */

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    variants={fadeUp}
    whileHover={{ y: -12, backgroundColor: "rgba(30, 41, 59, 0.5)", borderColor: "rgba(59, 130, 246, 0.5)" }}
    style={styles.card}
  >
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
    <div style={styles.cardGlow} />
  </motion.div>
);

const StatusItem = ({ icon, text }) => (
  <motion.div
    whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.1)" }}
    style={styles.statusItem}
  >
    <div style={styles.statusIcon}>{icon}</div>
    <span style={{ fontWeight: 600 }}>{text}</span>
  </motion.div>
);

const MethodItem = ({ icon, title, desc }) => (
    <div style={styles.methodItem}>
        <div style={styles.methodIconBox}>{icon}</div>
        <div>
            <h4 style={{ margin: 0, fontSize: "18px", color: "#f8fafc" }}>{title}</h4>
            <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "14px" }}>{desc}</p>
        </div>
    </div>
);

/* ---------- ANIMATIONS ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ---------- STYLES ---------- */

const styles = {
  page: { background: "#020617", color: "#e5e7eb", overflowX: "hidden", position: "relative", fontFamily: "'Inter', sans-serif" },
  
  bgGlow: {
    position: "absolute",
    top: 0,
    left: "50%",
    transform: "translateX(-50%)",
    width: "100%",
    height: "800px",
    background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.1) 0%, transparent 70%)",
    pointerEvents: "none",
    zIndex: 0,
  },

  hero: { padding: "160px 8% 100px", textAlign: "center", position: "relative", zIndex: 1 },
  badge: {
    display: "inline-block",
    padding: "8px 16px",
    borderRadius: "20px",
    background: "rgba(30, 41, 59, 0.8)",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    marginBottom: "24px",
    fontSize: "14px",
    fontWeight: 600,
    color: "#60a5fa",
  },
  heroTitle: { fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.02em" },
  blueText: { background: "linear-gradient(90deg, #3b82f6, #60a5fa)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSubtitle: { maxWidth: "720px", margin: "30px auto 0", color: "#94a3b8", fontSize: "1.15rem", lineHeight: 1.7 },

  wideCard: {
    margin: "0 8% 100px",
    padding: "80px 60px",
    borderRadius: "40px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
    background: "rgba(15, 23, 42, 0.4)",
    backdropFilter: "blur(12px)",
  },

  flexRow: { display: "flex", gap: "60px", alignItems: "center", flexWrap: "wrap" },
  textSide: { flex: 1.2, minWidth: "320px" },
  imageSide: { flex: 0.8, minWidth: "320px", perspective: "1200px" },
  
  imagePerspective: { 
    transform: "rotateY(-10deg) rotateX(5deg)", 
    position: "relative",
    borderRadius: "24px",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.7)"
  },
  sideImage: { width: "100%", height: "450px", objectFit: "cover", borderRadius: "24px" },
  imageOverlay: { 
    position: "absolute", top: 0, left: 0, right: 0, bottom: 0, 
    background: "linear-gradient(to bottom right, rgba(59,130,246,0.1), transparent)",
    borderRadius: "24px"
  },

  sectionTitle: { fontSize: "clamp(28px, 4vw, 40px)", fontWeight: 700, marginBottom: "25px", color: "#f8fafc", letterSpacing: "-0.01em" },
  text: { color: "#94a3b8", lineHeight: 1.8, fontSize: "17px", marginBottom: "20px" },

  gridContainer: { padding: "40px 8% 120px" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" },
  
  card: {
    border: "1px solid rgba(255, 255, 255, 0.08)",
    borderRadius: "32px",
    padding: "45px 35px",
    background: "rgba(30, 41, 59, 0.25)",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)",
  },
  cardIcon: { fontSize: "42px", color: "#3b82f6", marginBottom: "20px" },
  cardTitle: { fontSize: "22px", fontWeight: 700, color: "#f1f5f9" },
  cardDesc: { color: "#94a3b8", marginTop: "12px", lineHeight: 1.6 },
  cardGlow: { position: "absolute", bottom: "-20px", right: "-20px", width: "100px", height: "100px", background: "rgba(59,130,246,0.05)", filter: "blur(30px)", borderRadius: "50%" },

  methodList: { display: "flex", flexDirection: "column", gap: "25px", marginTop: "30px" },
  methodItem: { display: "flex", gap: "20px", alignItems: "center" },
  methodIconBox: { width: "50px", height: "50px", borderRadius: "12px", background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6", fontSize: "24px" },

  statusRow: { display: "flex", gap: "25px", flexWrap: "wrap" },
  statusItem: {
    display: "flex",
    gap: "15px",
    alignItems: "center",
    border: "1px solid rgba(59, 130, 246, 0.25)",
    padding: "20px 30px",
    borderRadius: "20px",
    background: "rgba(2, 6, 23, 0.5)",
    transition: "all 0.3s ease",
  },
  statusIcon: { color: "#60a5fa", fontSize: "24px" },

  cta: { padding: "0 8% 120px" },
  ctaContent: {
    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    padding: "100px 40px",
    borderRadius: "50px",
    textAlign: "center",
    boxShadow: "0 30px 60px -15px rgba(37, 99, 235, 0.4)",
  },
  ctaTitle: { fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: "20px", letterSpacing: "-0.02em" },
  ctaSub: { color: "#bfdbfe", marginBottom: "40px", fontSize: "1.1rem" },
  whiteBtn: {
    background: "#fff",
    color: "#2563eb",
    padding: "20px 50px",
    borderRadius: "18px",
    border: "none",
    fontWeight: 700,
    fontSize: "18px",
    cursor: "pointer",
    transition: "all 0.3s ease",
  },
};