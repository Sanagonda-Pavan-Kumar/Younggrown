import React, { useEffect } from "react";
import Footers from './Footers'
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Added navigate hook
import { 
  HiOutlineCpuChip, HiOutlineUserGroup, HiOutlineEnvelope, 
  HiOutlineChartBar, HiOutlineShieldCheck, HiOutlineArrowRightCircle,
  HiOutlineAdjustmentsHorizontal, HiOutlineClipboardDocumentList,
  HiOutlineCheckBadge, HiOutlineIdentification
} from "react-icons/hi2";
import Section from "./Section";

export default function RecruitmentPlatform() {
  const navigate = useNavigate(); // Initialize navigation

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div>
    <motion.div style={styles.page} initial="hidden" animate="visible" variants={pageVariants}>
      
<Section>     <motion.section style={styles.hero} variants={fadeUp}>
        <h1 style={styles.heroTitle}>AI-Powered Hiring & <br/><span style={styles.blueText}>Recruitment Platform</span></h1>
        <p style={styles.heroSubtitle}>
          Hire faster with intelligence. Hire better with confidence. Build a faster, fairer, and fully automated hiring experience.
        </p>
        <div style={styles.heroBtns}>
          {/* Navigates to Home */}
          <button style={styles.primaryBtn} onClick={() => navigate("/")}>
            Get Started
          </button>
          {/* Navigates to Contact Us */}
          <button style={styles.secondaryBtn} onClick={() => navigate("/contactus")}>
            View Demo
          </button>
        </div>
      </motion.section></Section> 


<Section>
      <motion.div style={styles.wideCard} variants={fadeUp}>
        <div style={styles.cardRow}>
          <div style={styles.contentSide}>
            <h2 style={styles.sectionTitle}>Unified Hiring Pipeline</h2>
            <p style={styles.text}>
              Manage the entire recruitment lifecycle from a single, centralized platform. 
              From candidate application to final selection, every hiring stage is tracked, 
              structured, and optimized—eliminating fragmented tools and manual coordination.
            </p>
          </div>
          <div style={styles.visualSide}>
             <motion.img 
              src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" 
              alt="Hiring Pipeline Dashboard" 
              style={styles.responsiveImage}
              whileHover={{ scale: 1.05 }}
             />
          </div>
        </div>
      </motion.div>
</Section>

      <Section>
      <motion.div style={styles.trackerContainer} variants={fadeUp}>
        <h3 style={styles.trackerHeading}>The Hybrid Intelligence Flow</h3>
        <div style={styles.pipelineFlow}>
          <TrackerNode step="01" label="AI Screening" icon={<HiOutlineCpuChip/>} active />
          <div style={styles.arrow}>→</div>
          <TrackerNode step="02" label="Human Review" icon={<HiOutlineUserGroup/>} active />
          <div style={styles.arrow}>→</div>
          <TrackerNode step="03" label="Auto-Notify" icon={<HiOutlineEnvelope/>} active />
          <div style={styles.arrow}>→</div>
          <TrackerNode step="04" label="Onboarding" icon={<HiOutlineCheckBadge/>} />
        </div>
      </motion.div>
</Section>

     <Section>
      <div style={styles.grid}>
        <FeatureCard 
          icon={<HiOutlineCpuChip/>} title="AI-Powered ATS" 
          desc="Intelligent resume parsing and smart candidate matching using role relevance to generate match scores."
        />
        <FeatureCard 
          icon={<HiOutlineAdjustmentsHorizontal/>} title="Automated Shortlisting" 
          desc="Data-driven candidate ranking and role-specific filtering aligned fully with your hiring needs."
        />
        <FeatureCard 
          icon={<HiOutlineCheckBadge/>} title="Human Verification Layer" 
          desc="Recruiter review and approval ensures contextual accuracy and cultural fit before moving forward."
        />
        <FeatureCard 
          icon={<HiOutlineEnvelope/>} title="Automated Communication" 
          desc="Smart email workflows and personalized messaging triggered at each hiring stage automatically."
        />
        <FeatureCard 
          icon={<HiOutlineChartBar/>} title="Real-Time Insights" 
          desc="Recruitment dashboards and analytics to track volume, shortlist ratios, and time-to-hire."
        />
        <FeatureCard 
          icon={<HiOutlineShieldCheck/>} title="Secure & Compliant" 
          desc="Enterprise-grade data protection with encryption and full audit logs for regulatory compliance."
        />
      </div>
</Section>

     <Section>
      <motion.div style={styles.wideCard} variants={fadeUp}>
        <div style={styles.cardRow}>
          <div style={styles.visualSide}>
             <motion.img 
              src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
              alt="Seamless Onboarding Workflow" 
              style={styles.responsiveImage}
              whileHover={{ scale: 1.05 }}
             />
          </div>
          <div style={styles.contentSide}>
            <h2 style={styles.sectionTitle}>Seamless Handover to Onboarding</h2>
            <p style={styles.text}>
              Once selected, candidate data flows directly into the onboarding system. 
              Offer letters, document collection, and joining workflows begin automatically—no duplicate data entry.
            </p>
          </div>
        </div>
      </motion.div>
</Section>

   <Section>
      <motion.section style={styles.ctaBanner} variants={fadeUp}>
        <h2 style={styles.ctaTitle}>Recruit smarter with AI. <br/>Decide better with humans.</h2>
        <button style={styles.whiteBtn} onClick={() => navigate("/contactus")}>
            Build Your Faster Pipeline
        </button>
      </motion.section>
</Section>
    </motion.div>
    <Footers/>
    </div>
  );
}

// --- SUB-COMPONENTS ---
const TrackerNode = ({ step, label, icon, active }) => (
  <div style={{...styles.node, opacity: active ? 1 : 0.4}}>
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

// --- ANIMATIONS ---
const pageVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// --- STYLES ---
const styles = {
  page: {  color: "#fff", padding: "80px 8%", fontFamily: "'Inter', sans-serif" },
  hero: { textAlign: "center", marginBottom: "100px" },
  badge: { background: "rgba(59, 130, 246, 0.1)", color: "#3b82f6", padding: "6px 16px", borderRadius: "20px", fontSize: "0.8rem", fontWeight: 700, marginBottom: "20px", display: "inline-block" },
  heroTitle: { fontSize: "4rem", fontWeight: 900, lineHeight: 1.1, marginBottom: "25px" },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { fontSize: "1.25rem", color: "#94a3b8", maxWidth: "800px", margin: "0 auto 40px" },
  heroBtns: { display: "flex", justifyContent: "center", gap: "20px" },
  primaryBtn: { background: "#2563eb", color: "#fff", border: "none", padding: "16px 32px", borderRadius: "12px", fontWeight: 700, cursor: "pointer" },
  secondaryBtn: { background: "transparent", color: "#fff", border: "1px solid #1e293b", padding: "16px 32px", borderRadius: "12px", cursor: "pointer" },
  
  wideCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "40px", padding: "60px", marginBottom: "40px", overflow: "hidden" },
  cardRow: { display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" },
  contentSide: { flex: 1.5 },
  visualSide: { flex: 1, display: "flex", justifyContent: "center" },
  responsiveImage: { width: "100%", height: "auto", borderRadius: "24px", boxShadow: "0 20px 40px rgba(0,0,0,0.3)", transition: "transform 0.3s ease" },
  sectionTitle: { fontSize: "2.5rem", marginBottom: "20px", fontWeight: 700 },
  text: { fontSize: "1.1rem", color: "#cbd5e1", lineHeight: 1.8 },

  trackerContainer: { textAlign: "center", margin: "80px 0" },
  trackerHeading: { fontSize: "1.8rem", marginBottom: "40px", color: "#3b82f6" },
  pipelineFlow: { display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "20px" },
  node: { display: "flex", flexDirection: "column", alignItems: "center", gap: "10px" },
  nodeCircle: { width: "60px", height: "60px", borderRadius: "50%", background: "#1e293b", border: "2px solid #3b82f6", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "1.5rem" },
  nodeStep: { fontSize: "0.7rem", color: "#60a5fa", fontWeight: 800 },
  nodeLabel: { fontWeight: 600 },
  arrow: { fontSize: "2rem", color: "#1e293b" },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", margin: "60px 0" },
  card: { background: "rgba(255,255,255,0.03)", padding: "40px", borderRadius: "30px", border: "1px solid rgba(255,255,255,0.05)" },
  cardIcon: { fontSize: "2.5rem", color: "#3b82f6", marginBottom: "20px" },
  cardTitle: { fontSize: "1.4rem", marginBottom: "15px", fontWeight: 600 },
  cardDesc: { color: "#94a3b8", lineHeight: 1.6 },

  ctaBanner: { textAlign: "center", background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)", padding: "100px 40px", borderRadius: "50px" },
  ctaTitle: { fontSize: "3rem", fontWeight: 800, marginBottom: "30px" },
  whiteBtn: { background: "#fff", color: "#2563eb", border: "none", padding: "18px 45px", borderRadius: "15px", fontWeight: 800, fontSize: "1.1rem", cursor: "pointer" }
};