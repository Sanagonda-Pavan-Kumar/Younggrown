import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineAcademicCap,
  HiOutlineUserGroup,
  HiOutlineSparkles,
  HiOutlineClipboardDocumentCheck,
  HiOutlineRocketLaunch,
  HiOutlineLightBulb,
  HiOutlineDevicePhoneMobile,
  HiOutlineArrowRight,
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

export default function Training() {
  const navigate = useNavigate();

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800;900&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      <div style={styles.bgGlow} />

      {/* HERO SECTION */}
      <Section style={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
          <h1 style={styles.heroTitle}>
            Workforce Training. <br />
            <span style={styles.gradientText}>Built for the Future.</span>
          </h1>
          <div style={{ width: '280px', margin: '0 auto 30px' }}>
             <Underline width="100%" />
          </div>
          <p style={styles.heroSubtitle}>
            We are currently designing structured, industry-aligned training
            programs to upskill workforce talent and improve on-ground
            performance.
          </p>
        </motion.div>
      </Section>

      {/* WHY TRAINING MATTERS */}
      <Section style={styles.wideCard}>
        <div style={styles.flexRow}>
          <div style={styles.textSide}>
            <div style={styles.centeredHeader}>
              <h2 style={{ ...styles.sectionTitle, marginBottom: "0px" }}>
                Why Training Matters
              </h2>
              <div style={{ width: '220px' }}>
                <Underline width="100%" />
              </div>
            </div>
            
            <p style={{ ...styles.text, textAlign: 'center', marginTop: '30px' }}>
              Skill gaps directly impact productivity, quality, and retention. Our
              upcoming training modules are being built to bridge this gap through
              practical, role-based learning.
            </p>
            <p style={{ ...styles.text, textAlign: 'center' }}>
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
      </Section>

      {/* PLANNED MODULES GRID - CENTERED VERSION */}
      <Section style={styles.gridContainer}>
        <div style={styles.centeredHeader}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: "0px" }}>
            Planned Training Modules
          </h2>
          <div style={{ width: '240px' }}>
            <Underline width="100%" />
          </div>
        </div>

        <motion.div 
          style={styles.grid} 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={stagger}
        >
          <FeatureCard icon={<HiOutlineAcademicCap />} title="Onboarding & Induction" desc="Structured onboarding programs for smooth workforce integration." />
          <FeatureCard icon={<HiOutlineUserGroup />} title="Role-Based Skill Training" desc="Practical training aligned with specific job roles and industries." />
          <FeatureCard icon={<HiOutlineClipboardDocumentCheck />} title="Compliance & Safety" desc="Mandatory safety, compliance, and workplace behavior training." />
          <FeatureCard icon={<HiOutlineSparkles />} title="Soft Skills Development" desc="Communication, discipline, and professional conduct programs." />
        </motion.div>
      </Section>

      {/* METHODOLOGY SECTION */}
      <Section style={styles.wideCard}>
        <div style={{...styles.flexRow, flexDirection: 'row-reverse'}}>
          <div style={styles.textSide}>
            <div style={styles.centeredHeader}>
              <h2 style={{ ...styles.sectionTitle, marginBottom: "0px" }}>
                Our Methodology
              </h2>
              <div style={{ width: '180px' }}>
                <Underline width="100%" />
              </div>
            </div>
            
            

[Image of ADDIE instructional design model]


            <div style={{ ...styles.methodList, marginTop: '40px' }}>
                <MethodItem icon={<HiOutlineLightBulb />} title="Case-Study Learning" desc="Learning through actual on-field scenarios." />
                <MethodItem icon={<HiOutlineDevicePhoneMobile />} title="Hybrid Modules" desc="Mix of digital content and physical workshops." />
                <MethodItem icon={<HiOutlineRocketLaunch />} title="Performance Tracking" desc="Post-training evaluation for continuous improvement." />
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
      </Section>

      {/* CTA SECTION */}
      <Section style={{ padding: "80px 0 120px" }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            style={styles.ctaInner}
          >
            <h2 style={styles.ctaTitle}>
              Programs <span style={styles.blueText}>Coming Soon</span>
              <div style={{ width: '220px', margin: '10px auto 0' }}>
                <Underline width="100%" />
              </div>
            </h2>
            <p style={styles.ctaSub}>
              Designed to upskill, retain, and empower the workforce of tomorrow. 
              Be the first to know when we launch our pilot sessions.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} 
              whileTap={{ scale: 0.95 }}
              style={styles.ctaBtn} onClick={() => navigate("/ContactUs")}
            >
              Stay Updated <HiOutlineArrowRight size={20} style={{ marginLeft: 10 }} />
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
    <div style={styles.cardGlow} />
  </motion.div>
);

const MethodItem = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ background: "rgba(59, 130, 246, 0.05)" }}
    style={styles.methodItem}
  >
    <div style={styles.methodIconBox}>{icon}</div>
    <div>
      <h4 style={{ margin: 0, fontSize: "1.1rem", color: "#f8fafc", fontWeight: 700 }}>{title}</h4>
      <p style={{ margin: "4px 0 0", color: "#94a3b8", fontSize: "0.95rem", lineHeight: 1.5 }}>{desc}</p>
    </div>
  </motion.div>
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
  
  bgGlow: {
    position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
    width: "100%", height: "800px",
    background: "radial-gradient(circle at 50% 0%, rgba(59,130,246,0.12) 0%, transparent 70%)",
    pointerEvents: "none", zIndex: 0,
  },

  hero: { padding: "160px 0 100px", textAlign: "center", position: "relative", zIndex: 1 },
  heroTitle: { fontSize: "clamp(2.5rem, 8vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.04em', color: '#fff' },
  gradientText: { background: "linear-gradient(90deg, #3b82f6, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { maxWidth: "720px", margin: "25px auto 0", color: "#94a3b8", fontSize: '1.2rem', lineHeight: 1.6 },

  centeredHeader: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    width: '100%'
  },

  wideCard: { 
    background: "rgba(255,255,255,0.02)", borderRadius: "48px", padding: "80px 60px", 
    border: "1px solid rgba(255,255,255,0.05)", backdropFilter: 'blur(10px)'
  },
  flexRow: { display: "flex", gap: "80px", alignItems: "center", flexWrap: "wrap" },
  textSide: { flex: 1.2, minWidth: '320px' },
  imageSide: { flex: 0.8, minWidth: '320px', perspective: '1200px' },
  imagePerspective: { 
    transform: "rotateY(-10deg) rotateX(5deg)", borderRadius: '32px', overflow: 'hidden', 
    boxShadow: '0 30px 60px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)'
  },
  sideImage: { width: '100%', height: '450px', objectFit: 'cover' },
  imageOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(to bottom right, rgba(59,130,246,0.1), transparent)" },
  
  sectionTitle: { fontSize: "clamp(2.2rem, 5vw, 3rem)", fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' },
  text: { color: "#94a3b8", lineHeight: 1.8, fontSize: '1.15rem', marginBottom: '20px' },

  gridContainer: { 
    padding: "100px 8%",
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center' // Centers the title and grid
  },
  grid: { 
    display: "grid", 
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", 
    gap: "30px",
    width: '100%',
    maxWidth: '1200px', // Prevents cards from spreading too wide
    justifyContent: 'center', // Centers cards if row is not full
    marginTop: '50px'
  },
  card: { 
    border: "1px solid rgba(255,255,255,0.05)", borderRadius: "32px", padding: "50px 40px", 
    background: 'rgba(30, 41, 59, 0.2)', transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    position: 'relative', overflow: 'hidden',
    height: '100%' // Ensures equal height
  },
  cardIcon: { fontSize: "48px", color: "#3b82f6", marginBottom: '25px' },
  cardTitle: { fontSize: '1.5rem', fontWeight: 800, marginBottom: '12px', color: '#fff' },
  cardDesc: { color: '#64748b', lineHeight: 1.7, fontSize: '1rem' },
  cardGlow: { position: "absolute", bottom: "-20px", right: "-20px", width: "100px", height: "100px", background: "rgba(59,130,246,0.05)", filter: "blur(30px)", borderRadius: "50%" },

  methodList: { display: "flex", flexDirection: "column", gap: "10px" },
  methodItem: { 
    display: "flex", gap: "20px", alignItems: "center", 
    padding: "20px", borderRadius: "20px", transition: "all 0.3s ease" 
  },
  methodIconBox: { width: "60px", height: "60px", borderRadius: "16px", background: "rgba(59,130,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "#3b82f6", fontSize: "28px" },

  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "120px 40px", borderRadius: "56px", textAlign: 'center',
    border: "1px solid rgba(59, 130, 246, 0.3)", boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
    margin: '0 8%', position: 'relative'
  },
  ctaTitle: { fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 900, marginBottom: 20, color: '#fff', letterSpacing: '-0.03em' },
  ctaSub: { fontSize: '1.25rem', color: '#94a3b8', marginBottom: 50, maxWidth: '750px', margin: '0 auto 50px', lineHeight: 1.6 },
  ctaBtn: { padding: '22px 56px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '16px', fontWeight: 800, fontSize: '1.15rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }
};