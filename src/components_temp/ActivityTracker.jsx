import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Filter, 
  MousePointerClick, 
  History, 
  Zap,
  EyeOff,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Footers from "./Footers"; 
import Section from './Section';
/* --- ANIMATED UNDERLINE COMPONENT --- */
const Underline = ({ color = "#3b82f6", width = "100%" }) => (
  <div style={{ position: 'relative', width: width, marginTop: '4px' }}>
    <motion.svg
      width="100%"
      height="10"
      viewBox="0 0 300 10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <motion.path
        d="M0 5C50 2 150 2 300 8"
        stroke={color}
        strokeWidth="6"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      />
    </motion.svg>
  </div>
);

const ActivityTracker = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <div style={styles.page}>
      
      {/* --- HERO SECTION --- */}
      <Section>
      <section style={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 style={styles.heroTitle}>
            See Work as it Happens. <br />
            <span style={styles.gradientText}>Understand as it Evolves.</span>
          </h1>
          <div style={{ width: '320px', margin: '10px auto 0' }}>
            <Underline width="100%" />
          </div>
          <p style={styles.heroSubtitle}>
            A real-time activity timeline that brings clarity, accountability, and 
            alignment across hiring and delivery workflows—without the micromanagement.
          </p>
        </motion.div>
      </section></Section>

      {/* --- AUTOMATIC TRACKING SECTION --- */}
      <Section>
      <section style={styles.section}>
        <div style={styles.splitLayout}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={styles.textContent}
          >
            <div style={styles.iconBox}><MousePointerClick size={24} /></div>
            <h2 style={styles.sectionTitle}>
              Track Every Action, <br />
              <span style={{color: '#3b82f6'}}>Automatically</span>
              <Underline width="180px" />
            </h2>
            <p style={styles.sectionDesc}>
              Every interaction inside the platform is recorded in the background. From shortlisting 
              decisions to project submissions, every meaningful activity is captured and organized.
            </p>
            <div style={styles.taglineBox}>
              "Transparency that builds trust."
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={styles.visualContainer}
          >
            <div style={styles.activityFeedMockup}>
              <div style={styles.mockupHeader}>Live Activity Stream</div>
              {[
                { label: 'Candidate Shortlisted', time: '2m ago', color: '#3b82f6' },
                { label: 'Project Milestone Approved', time: '15m ago', color: '#10b981' },
                { label: 'Interview Scheduled', time: '1h ago', color: '#6366f1' }
              ].map((item, i) => (
                <div key={i} style={styles.feedItem}>
                  <div style={{ ...styles.feedDot, background: item.color }} />
                  <div style={styles.feedText}>
                    <span style={styles.feedLabel}>{item.label}</span>
                    <span style={styles.feedTime}>{item.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section></Section>

      {/* --- TIMELINE SECTION --- */}
      <Section>
      <section style={styles.sectionAlt}>
        <div style={styles.splitLayoutReverse}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            style={styles.textContent}
          >
            <div style={styles.iconBox}><Filter size={24} /></div>
            <h2 style={styles.sectionTitle}>
              Timeline-Based <br />
              Intelligence
              <Underline width="220px" />
            </h2>
            <p style={styles.sectionDesc}>
              Activities are displayed in a clean, chronological view. Identify bottlenecks 
              instantly and review decision history with full context.
            </p>
            <div style={styles.checkGrid}>
              <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Hiring Actions</span></div>
              <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Project Progress</span></div>
            </div>
          </motion.div>
          <div style={styles.imageBox}>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Data Timeline" style={styles.mainImg} />
          </div>
        </div>
      </section></Section>

      {/* --- PILLARS --- */}
      <Section>
      <section style={styles.section}>
        <div style={styles.cardGrid}>
          <FeatureCard icon={<EyeOff size={32} />} title="No Micromanagement" desc="Track progress, not people. We focus on transparency that builds team trust." />
          <FeatureCard icon={<History size={32} />} title="Source of Truth" desc="When issues arise, use factual activity history to resolve escalations fairly." />
          <FeatureCard icon={<Zap size={32} />} title="Audit Ready" desc="Trace decisions and handoffs with complete chronological accuracy." />
        </div>
      </section></Section>

      {/* --- CTA SECTION --- */}
     <Section> <section style={styles.ctaWrapper}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={styles.ctaInner}
        >
          <h2 style={styles.ctaTitle}>
            Every Action, <span style={styles.blueText}>One Timeline.</span>
            <div style={{ width: '240px', margin: '10px auto 0' }}>
              <Underline width="100%" />
            </div>
          </h2>
          <p style={styles.ctaSub}>
            Ready for a clearer view of your hiring and delivery workflows? 
            Connect with our team to start your journey.
          </p>
          <motion.button 
            whileHover={{ scale: 1.05 }} 
            whileTap={{ scale: 0.95 }}
            style={styles.primaryBtn}
            onClick={() => navigate("/ContactUs")}
          >
            Connect with Us <ArrowRight size={18} style={{ marginLeft: 8 }} />
          </motion.button>
        </motion.div>
      </section></Section>

      <Footers />
    </div>
  );
};

/* --- SUB COMPONENTS --- */
const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10, borderColor: '#3b82f655' }} 
    style={styles.featureCard}
  >
    <div style={{ color: '#3b82f6', marginBottom: 20 }}>{icon}</div>
    <h3 style={styles.cardHeaderSmall}>{title}</h3>
    <p style={styles.cardText}>{desc}</p>
  </motion.div>
);

/* --- STYLES --- */
const styles = {
  page: {  color: "#fff", fontFamily: "'Inter', sans-serif", overflowX: 'hidden' },
  hero: { padding: "160px 8% 100px", textAlign: "center",},
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4.2rem)", fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em' },
  gradientText: { background: "linear-gradient(90deg, #3b82f6, #93c5fd)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSubtitle: { maxWidth: 800, margin: "30px auto", fontSize: "1.2rem", color: "#94a3b8", lineHeight: 1.7, fontWeight: 400 },

  section: { padding: "100px 8%" },
  sectionAlt: { padding: "100px 8%", background: "rgba(255,255,255,0.02)" },
  splitLayout: { display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' },
  splitLayoutReverse: { display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: 80, flexWrap: 'wrap' },
  textContent: { flex: 1.2, minWidth: 350 },
  iconBox: { width: 56, height: 56, background: 'rgba(59, 130, 246, 0.1)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 24, color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.2)' },
  sectionTitle: { fontSize: "clamp(2.2rem, 4vw, 3rem)", fontWeight: 800, marginBottom: 12, letterSpacing: '-0.02em', lineHeight: 1.2 },
  sectionDesc: { fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 },
  taglineBox: { paddingLeft: '20px', borderLeft: '4px solid #3b82f6', fontSize: '1.25rem', fontWeight: 600, color: '#f8fafc', margin: '30px 0' },
  
  visualContainer: { flex: 1, minWidth: 350, display: 'flex', justifyContent: 'center' },
  activityFeedMockup: { width: '100%', maxWidth: '420px', background: '#0f172a', borderRadius: '24px', padding: '32px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 30px 60px rgba(0,0,0,0.4)' },
  mockupHeader: { fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', color: '#475569', letterSpacing: '0.1em', marginBottom: '20px' },
  feedItem: { display: 'flex', gap: 16, padding: '20px 0', borderBottom: '1px solid rgba(255,255,255,0.03)' },
  feedDot: { width: 10, height: 10, borderRadius: '50%', marginTop: '6px', flexShrink: 0 },
  feedText: { display: 'flex', flexDirection: 'column', gap: 4 },
  feedLabel: { fontSize: '1rem', fontWeight: 600, color: '#f1f5f9' },
  feedTime: { fontSize: '0.85rem', color: '#64748b' },

  imageBox: { flex: 1, minWidth: 350 },
  mainImg: { width: '100%', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', boxShadow: '0 20px 40px rgba(0,0,0,0.3)' },
  checkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: 16, marginTop: 20 },
  checkItem: { display: 'flex', alignItems: 'center', gap: 12, fontWeight: 500, color: '#cbd5e1' },

  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 },
  featureCard: { padding: '50px 40px', background: 'rgba(30, 41, 59, 0.2)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px', textAlign: 'center' },
  cardHeaderSmall: { fontSize: '1.4rem', fontWeight: 700, marginBottom: '16px', letterSpacing: '-0.01em' },
  cardText: { color: '#94a3b8', lineHeight: 1.6, fontSize: '0.95rem' },

  ctaWrapper: { padding: "100px 8% 120px" },
  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "100px 40px",
    borderRadius: "48px",
    textAlign: 'center',
    border: "1px solid rgba(59, 130, 246, 0.25)",
    boxShadow: "0 40px 100px rgba(0,0,0,0.5)"
  },
  ctaTitle: { fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 800, marginBottom: 15, letterSpacing: '-0.03em' },
  blueText: { color: "#3b82f6" },
  ctaSub: { fontSize: '1.2rem', color: '#94a3b8', marginBottom: 40, maxWidth: '700px', margin: '0 auto 40px', lineHeight: 1.6 },
  primaryBtn: { padding: '20px 48px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '14px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', transition: '0.3s' }
};

export default ActivityTracker;