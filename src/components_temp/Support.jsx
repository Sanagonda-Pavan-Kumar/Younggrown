import React from 'react';
import { motion } from 'framer-motion';
import { 
  Users, 
  ShieldCheck, 
  Zap, 
  Workflow, 
  MessageSquare, 
  CheckCircle2,
  ArrowRight,
  Handshake,
  HeartHandshake,
  Compass
} from 'lucide-react';

const Support = () => {
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
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
            We Support the <br />
            <span style={{color:'#3b82f1'}}>Companies & Talent</span> <br />
            Behind Every Great Project.
          </h1>
          <p style={styles.heroSubtitle}>
            Whether you are a staffing firm scaling your hiring purpose or a freelancer 
            delivering excellence, we provide the professional backing to ensure 
            no challenge is faced alone.
          </p>
        </motion.div>
      </section>

      {/* --- PILLAR 1: STAFFING COMPANIES --- */}
      <section style={styles.section}>
        <div style={styles.splitLayout}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            style={styles.textContent}
          >
            <div style={styles.iconBox}><Workflow size={24} /></div>
            <h2 style={styles.sectionTitle}>Strategic Support for Staffing Companies</h2>
            <p style={styles.sectionDesc}>
              For recruitment and staffing firms, the "hiring purpose" is the core of the business. 
              We act as an extension of your own team, stepping in to manage the logistical 
              and operational layers of the hiring process. 
            </p>
            <p style={styles.sectionDesc}>
              By absorbing the pressure of candidate management and client coordination, we 
              allow your staffing firm to focus on what it does best: connecting great 
              talent with the right opportunities.
            </p>
            <div style={styles.featureGrid}>
              <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Hiring Workflow Optimization</span></div>
              <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Client-Candidate Mediation</span></div>
              <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Direct Operational Backing</span></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.imageWrapper}
          >
            <img src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" alt="Staffing Team Support" style={styles.mainImg} />
            <div style={styles.imgLabel}>Support for Staffing Firms</div>
          </motion.div>
        </div>
      </section>

      {/* --- PILLAR 2: FREELANCE SUCCESS --- */}
      <section style={styles.sectionAlt}>
        <div style={styles.splitLayoutReverse}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInUp}
            style={styles.textContent}
          >
            <div style={styles.iconBox}><Handshake size={24} /></div>
            <h2 style={styles.sectionTitle}>Ensuring Freelancer Project Completion</h2>
            <p style={styles.sectionDesc}>
              Securing a client is only the beginning. For freelancers working through us, 
              we provide comprehensive backing from our side to see every project through 
              to successful completion. 
            </p>
            <p style={styles.sectionDesc}>
              We provide the professional infrastructure that independent workers often lack, 
              ensuring that client requirements are clear and that you have the support 
              necessary to deliver your best work on every project.
            </p>
            <div style={styles.featureGrid}>
              <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>End-to-End Project Stewardship</span></div>
              <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Client Management Support</span></div>
              <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Guaranteed Delivery Backing</span></div>
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            style={styles.imageWrapper}
          >
            <img src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" alt="Freelancer Support" style={styles.mainImg} />
          </motion.div>
        </div>
      </section>

      {/* --- PILLAR 3: ESCALATIONS --- */}
      <section style={styles.section}>
        <div style={styles.escalationCard}>
          <motion.div 
            initial="hidden"
            whileInView="visible"
            variants={fadeInUp}
            style={styles.centerBox}
          >
            <h2 style={{color:"white", fontSize: "3rem", fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em'}}> Responsive Assistance</h2>
            <h3 style={styles.sectionTitle}>Good Response for Every Escalation</h3>
            <p style={styles.sectionDesc}>
              Projects and hiring processes aren't always perfect, but our response to challenges is. 
              Our support team is built to handle escalations with a professional, solution-oriented approach. 
              We don't hide behind tickets—we provide a humanized, "good response" that restores 
              confidence and keeps the work moving.
            </p>
            
            <div style={styles.cardGrid}>
              <div style={styles.miniCard}>
                <ShieldCheck size={32} color="#3b82f6" />
                <h4>Ownership</h4>
                <p>We take responsibility for the issue until it is fully resolved.</p>
              </div>
              <div style={styles.miniCard}>
                <MessageSquare size={32} color="#3b82f6" />
                <h4>Clarity</h4>
                <p>Professional communication that keeps all parties aligned.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- FINAL PROMISE --- */}
      <section style={styles.finalSection}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          style={styles.glassFooter}
        >
          <h2 style={styles.finalTitle}>Our Support Promise</h2>
          <p style={styles.finalText}>
            Whether you are a company staffing the next big team or a freelancer 
            completing a vital project, we are here to support the process, the people, 
            and the final result.
          </p>
          <button style={styles.primaryBtn}>
            Speak to Our Support Team <ArrowRight size={18} style={{ marginLeft: 8 }} />
          </button>
        </motion.div>
      </section>
    </div>
  );
};

const styles = {
  page: { color: "#fff", fontFamily: "'Inter', sans-serif", overflowX: 'hidden' },
  hero: { padding: "180px 8% 100px", textAlign: "center", position: 'relative', background: "radial-gradient(circle at top, #1e3a8a33 0%, transparent 70%)" },
  badge: { display: 'inline-block', padding: '8px 16px', borderRadius: '30px', background: 'rgba(59, 130, 246, 0.1)', border: '1px solid #3b82f644', color: '#60a5fa', fontSize: '0.85rem', fontWeight: 700, marginBottom: 24, letterSpacing: '0.5px' },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4.8rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.03em' },
  gradientText: {  WebkitBackgroundClip: "text",  },
  heroSubtitle: { maxWidth: 750, margin: "30px auto", fontSize: "1.25rem", color: "#94a3b8", lineHeight: 1.6 },

  section: { padding: "120px 8%" },
  sectionAlt: { padding: "120px 8%", background: "rgba(255,255,255,0.02)" },
  splitLayout: { display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' },
  splitLayoutReverse: { display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: 80, flexWrap: 'wrap' },
  textContent: { flex: 1.2, minWidth: 350 },
  iconBox: { width: 52, height: 52, background: '#3b82f6', borderRadius: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 28, color: '#fff', boxShadow: '0 10px 20px rgba(59, 130, 246, 0.2)' },
  sectionTitle: { fontSize: "3rem", fontWeight: 800, marginBottom: 24, letterSpacing: '-0.02em' ,color:'#3b82f1'},
  sectionDesc: { fontSize: "1.15rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 20 },
  featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 15, marginTop: 30 },
  checkItem: { display: 'flex', alignItems: 'center', gap: 12, fontWeight: 500, color: '#cbd5e1' },
  
  imageWrapper: { flex: 1, minWidth: 350, position: 'relative' },
  mainImg: { width: '100%', borderRadius: '40px', boxShadow: '0 30px 60px rgba(0,0,0,0.6)', border: '1px solid rgba(255,255,255,0.1)' },
  imgLabel: { position: 'absolute', bottom: 30, right: 30, background: 'rgba(0,0,0,0.6)', backdropFilter: 'blur(10px)', padding: '10px 20px', borderRadius: '12px', border: '1px solid rgba(255,255,255,0.2)', fontWeight: 600 },

  escalationCard: { maxWidth: '1000px', margin: '0 auto', padding: '80px 40px', borderRadius: '50px', border: '1px solid #1a1a1a', textAlign: 'center' },
  centerBox: { maxWidth: 800, margin: '0 auto' },
  alertBadge: { display: 'inline-flex', alignItems: 'center', gap: 8, padding: '6px 14px', background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.2)', borderRadius: '20px', color: '#ef4444', fontSize: '0.85rem', fontWeight: 700, marginBottom: 20 },
  cardGrid: { display: 'flex', justifyContent: 'center', gap: 30, marginTop: 50, flexWrap: 'wrap' },
  miniCard: { flex: 1, minWidth: '250px', padding: '40px', background: 'rgba(255,255,255,0.03)', borderRadius: '24px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'center' },

  finalSection: { padding: "140px 8%", textAlign: 'center' },
  glassFooter: { padding: '100px 40px',  borderRadius: '60px', border: '1px solid #1e3a8a33', boxShadow: '0 40px 100px rgba(0,0,0,0.4)' },
  finalTitle: { fontSize: '3.5rem', fontWeight: 800, marginBottom: 20 },
  finalText: { fontSize: '1.4rem', color: '#94a3b8', marginBottom: 45, maxWidth: 800, margin: '0 auto 45px' },
  primaryBtn: { padding: '20px 48px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '18px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center', transition: '0.3s', boxShadow: '0 15px 30px rgba(59, 130, 246, 0.3)' }
};

export default Support;