import React from 'react';
import { motion } from 'framer-motion';
import { 
  Activity, 
  Clock, 
  Filter, 
  ShieldCheck, 
  MousePointerClick, 
  History, 
  Layers,
  Zap,
  EyeOff,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';

const ActivityTracker = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  };

  return (
    <div style={styles.page}>
      {/* --- HERO SECTION --- */}
      <section style={styles.hero}>
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
         
          <h1 style={styles.heroTitle}>
            See Work as it Happens. <br />
            <span style={styles.gradientText}>Understand as it Evolves.</span>
          </h1>
          <p style={styles.heroSubtitle}>
            A real-time activity timeline that brings clarity, accountability, and 
            alignment across hiring and delivery workflows—without the micromanagement.
          </p>
        </motion.div>
      </section>

      {/* --- AUTOMATIC TRACKING SECTION --- */}
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
            <h2 style={styles.sectionTitle}>Track Every Action, Automatically</h2>
            <p style={styles.sectionDesc}>
              Every interaction inside the platform is recorded in the background. From shortlisting 
              decisions to project submissions, every meaningful activity is captured and organized.
            </p>
            <p style={styles.sectionDesc}>
              <strong>No manual logs. No missed updates.</strong> Just a clear activity trail 
              that runs quietly while your team focuses on outcomes.
            </p>
            <div style={styles.taglineBox}>
              "Transparency that builds trust."
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            style={styles.visualContainer}
          >
            {/* Visual representation of a live activity feed */}
            <div style={styles.activityFeedMockup}>
              {[
                { label: 'Candidate Shortlisted', time: '2m ago', color: '#3b82f6' },
                { label: 'Project Milestone Approv...', time: '15m ago', color: '#10b981' },
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
      </section>

      {/* --- TIMELINE & FILTERS SECTION --- */}
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
            <h2 style={styles.sectionTitle}>Timeline-Based Intelligence</h2>
            <p style={styles.sectionDesc}>
              Activities are displayed in a clean, chronological view. Identify bottlenecks 
              instantly and review decision history with full context.
            </p>
            <p style={styles.sectionDesc}>
              Our <strong>Smart Filters</strong> reduce the noise, allowing you to filter by 
              Role, Project, Freelancer, or Status. See only what you need, when you need it.
            </p>
            <div style={styles.checkGrid}>
              <div style={styles.checkItem}><CheckCircle2 size={16} color="#3b82f6" /> <span>Hiring Actions</span></div>
              <div style={styles.checkItem}><CheckCircle2 size={16} color="#3b82f6" /> <span>Project Progress</span></div>
              <div style={styles.checkItem}><CheckCircle2 size={16} color="#3b82f6" /> <span>Decision History</span></div>
            </div>
          </motion.div>
          <div style={styles.imageBox}>
            <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="Data Timeline" style={styles.mainImg} />
          </div>
        </div>
      </section>

      {/* --- ACCOUNTABILITY PILLARS --- */}
      <section style={styles.section}>
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          style={styles.centerHeader}
        >
          <h2 style={styles.sectionTitle}>Accountability, Not Surveillance</h2>
          <p style={styles.sectionDesc}>Clarity without micromanagement. Everyone knows what’s happening and what’s expected.</p>
        </motion.div>

        <div style={styles.cardGrid}>
          <motion.div variants={fadeInUp} whileHover={{ y: -10 }} style={styles.featureCard}>
            <EyeOff size={32} color="#3b82f6" />
            <h3>No Micromanagement</h3>
            <p>Track progress, not people. We focus on transparency that builds team trust.</p>
          </motion.div>
          <motion.div variants={fadeInUp} whileHover={{ y: -10 }} style={styles.featureCard}>
            <History size={32} color="#3b82f6" />
            <h3>Source of Truth</h3>
            <p>When issues arise, use factual activity history to resolve escalations fairly.</p>
          </motion.div>
          <motion.div variants={fadeInUp} whileHover={{ y: -10 }} style={styles.featureCard}>
            <Zap size={32} color="#3b82f6" />
            <h3>Audit Ready</h3>
            <p>Trace decisions and handoffs with complete chronological accuracy.</p>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL CALL TO ACTION --- */}
      <section style={styles.ctaSection}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={styles.glassCta}
        >
          <h2 style={styles.ctaTitle}>Every Action, One Timeline.</h2>
          <p style={styles.ctaText}>
            Ready for a clearer view of your hiring and delivery workflows?
          </p>
          <button style={styles.primaryBtn}>
            Explore the Tracker <ArrowRight size={18} style={{ marginLeft: 8 }} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

const styles = {
  page: {    color: "#fff", fontFamily: "'Inter', sans-serif", overflowX: 'hidden' },
  hero: { padding: "180px 8% 100px", textAlign: "center", position: 'relative', background: "radial-gradient(circle at top, #1e3a8a33 0%, transparent 70%)" },
  badge: { display: 'inline-flex', alignItems: 'center', padding: '8px 16px', borderRadius: '30px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f644', color: '#60a5fa', fontSize: '0.85rem', fontWeight: 700, marginBottom: 24 },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em' },
  gradientText: { background: "linear-gradient(90deg, #60a5fa, #ffffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSubtitle: { maxWidth: 750, margin: "30px auto", fontSize: "1.25rem", color: "#94a3b8", lineHeight: 1.6 },

  section: { padding: "120px 8%" },
  sectionAlt: { padding: "120px 8%", background: "rgba(255,255,255,0.02)" },
  splitLayout: { display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' },
  splitLayoutReverse: { display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: 80, flexWrap: 'wrap' },
  textContent: { flex: 1.2, minWidth: 350 },
  iconBox: { width: 52, height: 52, background: '#3b82f6', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, color: '#fff' },
  sectionTitle: { fontSize: "3rem", fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em' },
  sectionDesc: { fontSize: "1.15rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 },
  taglineBox: { paddingLeft: '20px', borderLeft: '4px solid #3b82f6', fontSize: '1.2rem', fontWeight: 600, fontStyle: 'italic', color: '#fff', margin: '30px 0' },
  
  visualContainer: { flex: 1, minWidth: 350, display: 'flex', justifyContent: 'center' },
  activityFeedMockup: { width: '100%', maxWidth: '400px', borderRadius: '24px', padding: '30px', border: '1px solid #1a1a1a', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' },
  feedItem: { display: 'flex', gap: 15, padding: '20px 0', borderBottom: '1px solid #111' },
  feedDot: { width: 10, height: 10, borderRadius: '50%', marginTop: '6px', flexShrink: 0 },
  feedText: { display: 'flex', flexDirection: 'column' },
  feedLabel: { fontSize: '0.95rem', fontWeight: 600, color: '#fff' },
  feedTime: { fontSize: '0.8rem', color: '#666' },

  imageBox: { flex: 1, minWidth: 350 },
  mainImg: { width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.6)' },
  checkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: 15, marginTop: 25 },
  checkItem: { display: 'flex', alignItems: 'center', gap: 10, fontWeight: 500 },

  centerHeader: { textAlign: 'center', maxWidth: 800, margin: '0 auto 60px' },
  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 },
  featureCard: { padding: '50px 40px', border: '1px solid #1a1a1a', borderRadius: '32px', textAlign: 'center', transition: '0.3s' },

  ctaSection: { padding: "140px 8%", textAlign: 'center' },
  glassCta: { padding: '100px 40px', background: 'linear-gradient(135deg, #020617 0%, #1e3a8a22 100%)', borderRadius: '60px', border: '1px solid #1e3a8a44' },
  ctaTitle: { fontSize: '3rem', fontWeight: 800, marginBottom: 20 },
  ctaText: { fontSize: '1.3rem', color: '#94a3b8', marginBottom: 40 },
  primaryBtn: { padding: '18px 44px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '16px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }
};

export default ActivityTracker;