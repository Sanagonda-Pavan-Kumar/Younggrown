import React from 'react';
import { motion } from 'framer-motion';
import { 
  Trophy, 
  Target, 
  Star, 
  Zap, 
  Award, 
  TrendingUp, 
  Users, 
  Medal,
  Gem,
  Quote,
  CheckCircle,
  ArrowUpRight
} from 'lucide-react';

const RewardsRecognition = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const stagger = {
    visible: { transition: { staggerChildren: 0.15 } }
  };

  return (
    <div style={styles.page}>
      {/* --- HERO SECTION --- */}
      <section style={styles.hero}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={styles.heroBgGlow} />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          style={styles.heroContent}
        >
          <h1 style={styles.heroTitle}>
            Recognizing What <br />
            <span style={styles.gradientText}>Truly Matters.</span>
          </h1>
          <p style={styles.heroSubtitle}>
            We don’t wait for annual reviews to celebrate contributions. At Jarvis Mode ON, 
            hard work shows up daily—and so does our recognition.
          </p>
        </motion.div>
      </section>

      {/* --- RECOGNITION CRITERIA --- */}
      <section style={styles.section}>
        <div style={styles.splitLayout}>
          <motion.div 
            initial="hidden" whileInView="visible" viewport={{ once: true }}
            variants={fadeInUp} style={styles.textContent}
          >
            <h2 style={styles.sectionTitle}>Honoring Effort, Inspiring Excellence</h2>
            <p style={styles.sectionDesc}>
              Recognition takes many forms, but its purpose is always the same: 
              to celebrate those who uplift the entire organization through their drive and character.
            </p>
            <div style={styles.checkGrid}>
              {[
                "Exceeding performance expectations",
                "Delivering results under pressure",
                "Showing leadership and initiative",
                "Uplifting teammates' success",
                "Driving meaningful client impact"
              ].map((text, i) => (
                <div key={i} style={styles.checkItem}>
                  <CheckCircle size={18} color="#3b82f6" /> <span>{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }}
            style={styles.visualBox}
          >
            {/* Updated Image: Professional Team Celebration */}
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
              alt="Team Success at Jarvis Mode ON" 
              style={styles.heroImg} 
            />
          </motion.div>
        </div>
      </section>

      {/* --- REWARDS TIERS --- */}
      <section style={styles.sectionAlt}>
        <div style={styles.centerHeader}>
          <h2 style={styles.sectionTitle}>Meaningful Rewards</h2>
          <p style={styles.sectionDesc}>Designed to motivate both emotionally and materially.</p>
        </div>
        
        <motion.div variants={stagger} initial="hidden" whileInView="visible" style={styles.cardGrid}>
          <motion.div variants={fadeInUp} whileHover={{ y: -10 }} style={styles.goldCard}>
            <div style={styles.cardIcon}><Gem /></div>
            <h3>Performance Bonuses</h3>
            <p>We appreciate hard work with tangible rewards. Salary bonuses serve as a token of appreciation for those who consistently exceed targets.</p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -10 }} style={styles.goldCard}>
            <div style={styles.cardIcon}><Award /></div>
            <h3>Appreciation Certificates</h3>
            <p>Personalized certificates that highlight impact and achievement—a lasting acknowledgment our employees can be proud of.</p>
          </motion.div>

          <motion.div variants={fadeInUp} whileHover={{ y: -10 }} style={styles.goldCard}>
            <div style={styles.cardIcon}><Star /></div>
            <h3>Spotlight Honors</h3>
            <p>In team updates, we spotlight top performers, giving them the recognition they’ve earned in front of peers and leadership.</p>
          </motion.div>
        </motion.div>
      </section>

      {/* --- TOUCHPOINTS TIMELINE --- */}
      <section style={styles.section}>
        <div style={styles.timelineContainer}>
          <h2 style={styles.sectionTitle}>Consistency Matters</h2>
          <p style={styles.sectionDesc}>We integrate recognition into common workflows so appreciation is regular and visible.</p>
          
          <div style={styles.timelineGrid}>
            {[
              { label: 'Weekly', title: 'Shoutouts', desc: 'Peer-to-peer appreciation in digital channels.' },
              { label: 'Monthly', title: 'Performance Reviews', desc: 'Dedicated time to acknowledge monthly wins.' },
              { label: 'Quarterly', title: 'Achievement Ceremonies', desc: 'Formal events celebrating milestones.' },
              { label: 'Annual', title: 'Excellence Awards', desc: 'The highest honors for year-long impact.' }
            ].map((item, i) => (
              <div key={i} style={styles.timelineItem}>
                <span style={styles.timeLabel}>{item.label}</span>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- TESTIMONIAL --- */}
      <section style={styles.quoteSection}>
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} style={styles.quoteCard}>
          <Quote size={40} color="#3b82f6" style={{ marginBottom: 20 }} />
          <p style={styles.quoteText}>
            “Recognition makes hard work feel valued, and it motivates me to push further. 
            It’s not just a bonus—it’s a reminder that my effort matters.”
          </p>
          <div style={styles.quoteAuthor}>— Team Member, Product Development</div>
        </motion.div>
      </section>

      {/* --- CULTURE & GROWTH --- */}
      <section style={styles.sectionAlt}>
        <div style={styles.centerHeader}>
          <h2 style={styles.sectionTitle}>A Culture of Motivation</h2>
          <p style={styles.sectionDesc}>Our framework is built to scale and drive long-term growth.</p>
        </div>
        <div style={styles.cultureGrid}>
          <div style={styles.cultureItem}>
            <Target color="#3b82f6" />
            <div>
              <h4>Valuing People</h4>
              <p>Every employee feels seen, heard, and appreciated as a vital individual.</p>
            </div>
          </div>
          <div style={styles.cultureItem}>
            <TrendingUp color="#3b82f6" />
            <div>
              <h4>Boosting Motivation</h4>
              <p>Recognition fuels confidence, leading to higher engagement and outcomes.</p>
            </div>
          </div>
          <div style={styles.cultureItem}>
            <Zap color="#3b82f6" />
            <div>
              <h4>Reinforcing Values</h4>
              <p>We celebrate behaviors that align with our mission, inspiring others to follow.</p>
            </div>
          </div>
          <div style={styles.cultureItem}>
            <Users color="#3b82f6" />
            <div>
              <h4>Open Appreciation</h4>
              <p>Peers and leaders all participate in daily communication of gratitude.</p>
            </div>
          </div>
        </div>
      </section>

      {/* --- FOOTER CTA --- */}
      <section style={styles.ctaSection}>
        <motion.div whileHover={{ scale: 1.02 }} style={styles.footerCard}>
          <h2>Rewards & Recognition That Scales</h2>
          <div style={styles.footerPills}>
            <span>Fair & Transparent Criteria</span>
            <span>Performance Dashboards</span>
            <span>Retention Growth</span>
          </div>
          <button style={styles.primaryBtn}>
            Join the Excellence Culture <ArrowUpRight size={18} style={{ marginLeft: 8 }} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

const styles = {
  page: { color: "#fff", fontFamily: "'Inter', sans-serif", overflowX: 'hidden' },
  hero: { padding: "160px 8% 100px", textAlign: "center", position: 'relative' },
  heroBgGlow: { position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '100%', height: '500px', background: 'radial-gradient(circle, rgba(59, 130, 246, 0.08) 0%, transparent 70%)', zIndex: 0 },
  heroContent: { position: 'relative', zIndex: 1 },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 900, lineHeight: 1.1 },
  gradientText: { background: "linear-gradient(90deg, #3b82f6, #ffffff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" },
  heroSubtitle: { maxWidth: 750, margin: "24px auto", fontSize: "1.2rem", color: "#94a3b8", lineHeight: 1.6 },

  section: { padding: "100px 8%" },
  sectionAlt: { padding: "100px 8%", background: "rgba(255,255,255,0.02)" },
  splitLayout: { display: 'flex', alignItems: 'center', gap: 60, flexWrap: 'wrap' },
  textContent: { flex: 1.2, minWidth: 350 },
  sectionTitle: { fontSize: "2.8rem", fontWeight: 800, marginBottom: 20 },
  sectionDesc: { fontSize: "1.15rem", color: "#94a3b8", lineHeight: 1.7, marginBottom: 30 },
  checkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 15 },
  checkItem: { display: 'flex', alignItems: 'center', gap: 12, fontSize: '1.05rem', color: '#cbd5e1' },
  visualBox: { flex: 1, minWidth: 350 },
  heroImg: { width: '100%', borderRadius: '40px', boxShadow: '0 20px 40px rgba(0,0,0,0.5)', border: '1px solid #1e293b' },

  centerHeader: { textAlign: 'center', maxWidth: 800, margin: '0 auto 60px' },
  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 },
  goldCard: { padding: '50px 40px',  border: '1px solid #1a1a1a', borderRadius: '32px', position: 'relative', overflow: 'hidden' },
  cardIcon: { width: 60, height: 60, borderRadius: '16px', background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', marginBottom: 24 },

  timelineContainer: { maxWidth: '1100px', margin: '0 auto' },
  timelineGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30, marginTop: 50 },
  timelineItem: { padding: '30px',  borderRadius: '24px', borderLeft: '4px solid #3b82f6' },
  timeLabel: { fontSize: '0.8rem', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase' },

  quoteSection: { padding: "100px 8%", textAlign: 'center' },
  quoteCard: { maxWidth: '900px', margin: '0 auto', padding: '60px', borderRadius: '40px', border: '1px solid #1a1a1a' },
  quoteText: { fontSize: '1.8rem', fontStyle: 'italic', color: '#fff', marginBottom: 30, lineHeight: 1.4 },
  quoteAuthor: { color: '#3b82f6', fontWeight: 600 },

  cultureGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: 40 },
  cultureItem: { display: 'flex', gap: 20, alignItems: 'flex-start' },

  ctaSection: { padding: "140px 8%", textAlign: 'center' },
  footerCard: { padding: '80px 40px',borderRadius: '50px', border: '1px solid #1e3a8a44' },
  footerPills: { display: 'flex', justifyContent: 'center', gap: 15, flexWrap: 'wrap', margin: '24px 0 40px' },
  primaryBtn: { padding: '18px 40px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '15px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }
};

export default RewardsRecognition;