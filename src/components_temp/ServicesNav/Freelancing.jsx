import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import {
  HiOutlineBriefcase,
  HiOutlineRocketLaunch,
  HiOutlineUserGroup,
  HiOutlineClipboardDocumentCheck,
  HiOutlineArrowRight,
  HiOutlineClock,
} from "react-icons/hi2";
import Footers from "../Footers"; // Import Footers
import Section from "../Section"; // Import Section

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

export default function Freelancing() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      {/* BACKGROUND DECORATION */}
      <div style={styles.bgGlow} />

      {/* HERO */}
      <Section style={styles.hero}>
        <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h1 style={styles.heroTitle}>
            Freelancing <br />
            <span style={styles.gradientText}>Projects That Create Impact</span>
          </h1>
          <div style={{ width: '280px', margin: '0 auto 30px' }}>
             <Underline width="100%" />
          </div>

          <p style={styles.heroSubtitle}>
            We connect skilled freelancers with real-time client projects.
            Choose a project, apply instantly, and work with confidence.
          </p>
        </motion.div>
      </Section>

      {/* HOW IT WORKS */}
      <Section style={styles.section}>
        <div style={styles.centeredHeader}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: "0px" }}>How Our Freelancing Works</h2>
          <div style={{ width: '220px', marginBottom: '40px' }}>
            <Underline width="100%" />
          </div>
        </div>

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
            title="Profile Screening"
            text="Submit your expertise and get vetted by our technical team."
          />
          <Step
            icon={<HiOutlineUserGroup />}
            title="We Review & Connect"
            text="We evaluate profiles and connect suitable freelancers to clients."
          />
          <Step
            icon={<HiOutlineRocketLaunch />}
            title="Project Execution"
            text="Freelancer works, Younggrown manages coordination & delivery."
          />
        </div>
      </Section>

      {/* PROJECTS STATUS */}
      <Section style={styles.section}>
        <div style={styles.centeredHeader}>
          <h2 style={{ ...styles.sectionTitle, marginBottom: "0px" }}>Available Freelancing Projects</h2>
          <div style={{ width: '240px', marginBottom: '40px' }}>
            <Underline width="100%" />
          </div>
        </div>
        
        <motion.div style={styles.statusBox} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}>
          <HiOutlineClock style={{ fontSize: "48px", color: "#3b82f6", marginBottom: "16px" }} />
          <h3 style={{ color: "#fff", fontSize: "24px" }}>Currently Updating Pipeline</h3>
          <p style={{ color: "#94a3b8", maxWidth: "500px", margin: "10px auto", lineHeight: 1.6 }}>
            We are currently vetting new client requirements. Direct project listings are 
            temporarily unavailable, but you can still submit your profile to our talent pool.
          </p>
        </motion.div>
      </Section>

      {/* TRUST */}
      <Section style={styles.trust}>
        <div style={styles.centeredHeader}>
            <h2 style={{ ...styles.sectionTitle, marginBottom: "0px" }}>Why Freelancers Trust Us</h2>
            <div style={{ width: '260px', marginBottom: '30px' }}>
                <Underline width="100%" />
            </div>
        </div>

        <ul style={styles.trustList}>
          <li>✔ Verified client projects only</li>
          <li>✔ Transparent communication & tracking</li>
          <li>✔ Fair opportunity for skilled talent</li>
          <li>✔ Long-term collaboration mindset</li>
        </ul>
      </Section>

      {/* NEW CTA SECTION (Matches Training Component Style) */}
      <Section style={{ padding: "80px 0 120px" }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            style={styles.ctaInner}
          >
            <h2 style={styles.ctaTitle}>
              Join the <span style={styles.blueText}>Talent Pool</span>
              <div style={{ width: '220px', margin: '10px auto 0' }}>
                <Underline width="100%" />
              </div>
            </h2>
            <p style={styles.ctaSub}>
              Ready to start freelancing? Submit your details to join our talent pool 
              and be the first to get notified when new projects match your skill set.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(0,0,0,0.3)' }} 
              whileTap={{ scale: 0.95 }}
              style={styles.ctaBtn} 
              onClick={() => navigate("/FreelancerForm")} // Navigates to your custom form
            >
              Get Started Now <HiOutlineArrowRight size={20} style={{ marginLeft: 10 }} />
            </motion.button>
          </motion.div>
      </Section>

      <Footers />
    </div>
  );
}

/* ---------------- SUB COMPONENTS ---------------- */

const Step = ({ icon, title, text }) => (
  <motion.div
    whileHover={{ y: -10, borderColor: '#3b82f6', background: 'rgba(30, 41, 59, 0.4)' }}
    style={styles.step}
  >
    <div style={styles.icon}>{icon}</div>
    <h4 style={{ color: '#fff', fontSize: '1.3rem', margin: '15px 0 10px', fontWeight: 700 }}>{title}</h4>
    <p style={{ color: '#94a3b8', fontSize: '0.95rem', lineHeight: '1.6' }}>{text}</p>
  </motion.div>
);

/* ---------------- STYLES ---------------- */

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

  centeredHeader: { display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', width: '100%' },

  section: { padding: "40px 20%", display: 'flex', flexDirection: 'column', alignItems: 'center' },
  sectionTitle: { fontSize: "clamp(2.2rem, 5vw, 3rem)", fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' },

  imageWrapper: { 
    width: "100%", maxWidth: "1000px", marginBottom: "60px", 
    borderRadius: "32px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)",
    boxShadow: '0 30px 60px rgba(0,0,0,0.5)'
  },
  mainImage: { width: "100%", height: "450px", objectFit: "cover", opacity: 0.9 },

  steps: {
    display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px", width: '100%', maxWidth: '1200px', justifyContent: 'center'
  },

  step: {
    border: "1px solid rgba(255,255,255,0.05)", borderRadius: "32px", padding: "50px 30px",
    background: "rgba(15, 23, 42, 0.3)", textAlign: 'center', transition: '0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
  },

  icon: { fontSize: "48px", color: "#3b82f6" },

  statusBox: {
    textAlign: "center", padding: "80px 40px", background: "rgba(30, 41, 59, 0.2)",
    borderRadius: "40px", border: "1px dashed rgba(59, 130, 246, 0.4)", maxWidth: '900px', width: '100%'
  },

  trust: { padding: "80px 8%", textAlign: "center", display: 'flex', flexDirection: 'column', alignItems: 'center' },
  trustList: { listStyle: "none", color: "#94a3b8", lineHeight: "2.8", padding: 0, fontSize: '1.15rem' },

  /* --- CTA STYLES --- */
  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "120px 40px", borderRadius: "56px", textAlign: 'center',
    border: "1px solid rgba(59, 130, 246, 0.3)", boxShadow: "0 40px 100px rgba(0,0,0,0.5)",
    margin: '0 8%', position: 'relative'
  },
  ctaTitle: { fontSize: 'clamp(2.5rem, 6vw, 3.8rem)', fontWeight: 900, marginBottom: 20, color: '#fff', letterSpacing: '-0.03em' },
  ctaSub: { fontSize: '1.25rem', color: '#94a3b8', marginBottom: 50, maxWidth: '750px', margin: '0 auto 50px', lineHeight: 1.6 },
  ctaBtn: { 
    padding: '22px 56px', background: '#3b82f6', color: '#fff', border: 'none', 
    borderRadius: '16px', fontWeight: 800, fontSize: '1.15rem', cursor: 'pointer', 
    display: 'inline-flex', alignItems: 'center', transition: '0.3s' 
  }
};