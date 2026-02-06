import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  Star, 
  Award, 
  TrendingUp, 
  Users, 
  Gem,
  Quote,
  CheckCircle,
  ArrowUpRight,
  Target,
  Zap
} from 'lucide-react';
import Section from "./Section";
import Footers from "./Footers";

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

/* ================= MAIN COMPONENT ================= */

const RewardsRecognition = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      
      {/* --- HERO SECTION --- */}
      <Section>
        <div style={styles.hero}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={styles.heroTitle}
          >
            Recognizing What <br />
            <span style={styles.blueText}>Truly Matters.</span>
            <Underline color="#3b82f6" width="280px" />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            We don’t wait for annual reviews to celebrate contributions. At Jarvis Mode ON, 
            hard work shows up daily—and so does our recognition.
          </motion.p>
        </div>
      </Section>

      {/* --- RECOGNITION CRITERIA --- */}
      <Section>
        <div style={styles.sectionPadding}>
          <div style={styles.splitLayout}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={styles.textContent}
            >
              <h2 style={styles.sectionTitle}>
                Honoring Effort, <br />
                <span style={styles.blueText}>Inspiring Excellence</span>
              </h2>
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
                ].map((text, i) => (
                  <div key={i} style={styles.checkItem}>
                    <CheckCircle size={18} color="#3b82f6" /> <span>{text}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={styles.imageWrapper}
            >
              <img 
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" 
                alt="Team Success" 
                style={styles.mainImg} 
              />
              <div style={styles.imgLabel}>Jarvis Excellence Culture</div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* --- REWARDS TIERS --- */}
      <Section>
        <div style={styles.sectionPadding}>
          <div style={styles.centerHeader}>
            <h2 style={styles.sectionTitle}>
              Meaningful <span style={styles.blueText}>Rewards</span>
              <Underline color="#3b82f6" width="160px" />
            </h2>
            <p style={styles.sectionDesc}>Designed to motivate both emotionally and materially.</p>
          </div>
          
          <div style={styles.cardGrid}>
            <RewardCard 
              icon={<Gem />} 
              title="Performance Bonuses" 
              desc="Salary bonuses serve as a token of appreciation for those who consistently exceed targets." 
            />
            <RewardCard 
              icon={<Award />} 
              title="Appreciation Certificates" 
              desc="Personalized certificates that highlight impact and achievement—a lasting acknowledgment." 
            />
            <RewardCard 
              icon={<Star />} 
              title="Spotlight Honors" 
              desc="We spotlight top performers, giving them the recognition they’ve earned in front of peers." 
            />
          </div>
        </div>
      </Section>

      {/* --- TIMELINE --- */}
      <Section>
        <div style={styles.timelineWrapper}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>
            Consistency <span style={styles.blueText}>Matters</span>
            <Underline color="#3b82f6" width="140px" />
          </h2>
          
          <div style={styles.timelineGrid}>
            <TimelineItem label="Weekly" title="Shoutouts" desc="Peer-to-peer appreciation." />
            <TimelineItem label="Monthly" title="Wins Review" desc="Dedicated time for wins." />
            <TimelineItem label="Quarterly" title="Ceremonies" desc="Formal milestone events." />
            <TimelineItem label="Annual" title="Excellence" desc="Highest year-long honors." />
          </div>
        </div>
      </Section>

      {/* --- TESTIMONIAL --- */}
      <Section>
        <div style={styles.quoteSection}>
          <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            style={styles.quoteCard}
          >
            <Quote size={40} color="#3b82f6" style={{ marginBottom: 20 }} />
            <p style={styles.quoteText}>
              “Recognition makes hard work feel valued. It’s not just a bonus—it’s a reminder that my effort matters.”
            </p>
            <div style={styles.quoteAuthor}>— Team Member, Product Development</div>
          </motion.div>
        </div>
      </Section>

      {/* --- CULTURE GRID --- */}
      <Section>
        <div style={styles.sectionPadding}>
          <div style={styles.cultureGrid}>
            <CultureItem icon={<Target />} title="Valuing People" desc="Every employee feels seen and heard." />
            <CultureItem icon={<TrendingUp />} title="Boosting Motivation" desc="Fuels confidence and outcomes." />
            <CultureItem icon={<Zap />} title="Reinforcing Values" desc="Celebrating mission-aligned behaviors." />
            <CultureItem icon={<Users />} title="Open Appreciation" desc="Daily gratitude across all levels." />
          </div>
        </div>
      </Section>

      {/* --- CTA SECTION --- */}
      <Section>
        <div style={styles.ctaWrapper}>
          <div style={styles.ctaInner}>
            <h2 style={styles.ctaTitle}>
              Rewards & Recognition <span style={styles.blueText}>That Scales</span>
              <Underline color="#3b82f6" width="180px" />
            </h2>
            <div style={styles.footerPills}>
              <span style={styles.pill}>Fair Criteria</span>
              <span style={styles.pill}>Performance Dashboards</span>
              <span style={styles.pill}>Retention Growth</span>
            </div>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59,130,246,0.3)" }} 
              style={styles.primaryBtn}
              onClick={() => navigate("/ContactUs")}
            >
              Join the Excellence Culture <ArrowUpRight size={18} style={{ marginLeft: 8 }} />
            </motion.button>
          </div>
        </div>
      </Section>

      <Footers />
    </div>
  );
};

/* --- SUB COMPONENTS --- */

const RewardCard = ({ icon, title, desc }) => (
  <motion.div whileHover={{ y: -10 }} style={styles.goldCard}>
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardHeaderSmall}>{title}</h3>
    <p style={styles.cardText}>{desc}</p>
  </motion.div>
);

const TimelineItem = ({ label, title, desc }) => (
  <div style={styles.timelineItem}>
    <span style={styles.timeLabel}>{label}</span>
    <h4 style={{ fontSize: '1.2rem', margin: '8px 0' }}>{title}</h4>
    <p style={{ color: '#94a3b8', fontSize: '0.95rem' }}>{desc}</p>
  </div>
);

const CultureItem = ({ icon, title, desc }) => (
  <div style={styles.cultureItem}>
    <div style={{ color: '#3b82f6' }}>{icon}</div>
    <div>
      <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>{title}</h4>
      <p style={{ color: '#94a3b8', lineHeight: 1.6 }}>{desc}</p>
    </div>
  </div>
);

/* --- STYLES --- */

const styles = {
  page: { color: "#fff", fontFamily: "'Inter', sans-serif", overflowX: 'hidden' },
  hero: { padding: "140px 8% 80px", textAlign: "center" },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { maxWidth: 750, margin: "35px auto", fontSize: "1.2rem", color: "#94a3b8", lineHeight: 1.7 },

  sectionPadding: { padding: "80px 8%" },
  splitLayout: { display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' },
  textContent: { flex: 1.2, minWidth: 320 },
  sectionTitle: { fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: 24 },
  sectionDesc: { fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 25 },
  
  checkGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: 16 },
  checkItem: { display: 'flex', alignItems: 'center', gap: 12, color: '#cbd5e1' },

  imageWrapper: { flex: 1, minWidth: 320, position: 'relative' },
  mainImg: { width: '100%', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' },
  imgLabel: { position: 'absolute', bottom: 25, right: 25, background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.85rem' },

  centerHeader: { textAlign: 'center', maxWidth: 800, margin: '0 auto 60px' },
  cardGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 30 },
  goldCard: { padding: '50px 40px', background: 'rgba(30, 41, 59, 0.3)', border: '1px solid rgba(255,255,255,0.05)', borderRadius: '32px' },
  cardIcon: { width: 56, height: 56, background: 'rgba(59, 130, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#3b82f6', marginBottom: 24, borderRadius: '14px' },
  cardHeaderSmall: { fontSize: '1.4rem', fontWeight: 700, marginBottom: '15px' },
  cardText: { color: '#94a3b8', lineHeight: 1.6 },

  timelineWrapper: { padding: "80px 8%" },
  timelineGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 30, marginTop: 60 },
  timelineItem: { padding: '30px', background: 'rgba(255,255,255,0.02)', borderRadius: '24px', borderLeft: '4px solid #3b82f6' },
  timeLabel: { fontSize: '0.75rem', fontWeight: 800, color: '#3b82f6', textTransform: 'uppercase', letterSpacing: '1px' },

  quoteSection: { padding: "80px 8%", textAlign: 'center' },
  quoteCard: { maxWidth: '900px', margin: '0 auto', padding: '60px 40px', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.05)', background: 'rgba(30, 41, 59, 0.2)' },
  quoteText: { fontSize: '1.6rem', fontStyle: 'italic', marginBottom: 30, lineHeight: 1.4 },
  quoteAuthor: { color: '#3b82f6', fontWeight: 600 },

  cultureGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 40 },
  cultureItem: { display: 'flex', gap: 20 },

  ctaWrapper: { padding: "80px 8% 120px" },
  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "100px 40px",
    borderRadius: "50px",
    textAlign: 'center',
    border: "1px solid rgba(59, 130, 246, 0.2)",
    boxShadow: "0 40px 100px rgba(0,0,0,0.4)"
  },
  ctaTitle: { fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 900, marginBottom: 25 },
  footerPills: { display: 'flex', justifyContent: 'center', gap: 15, flexWrap: 'wrap', marginBottom: 40 },
  pill: { background: 'rgba(59, 130, 246, 0.1)', padding: '8px 20px', borderRadius: '30px', border: '1px solid rgba(59, 130, 246, 0.3)', fontSize: '0.9rem', color: '#93c5fd' },
  primaryBtn: { padding: '20px 45px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '16px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }
};

export default RewardsRecognition;