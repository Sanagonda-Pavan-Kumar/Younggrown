import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  ShieldCheck, 
  Workflow, 
  MessageSquare, 
  CheckCircle2,
  ArrowRight,
  Handshake,
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

const Support = () => {
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
            We Support the <br />
            <span style={styles.blueText}>Companies & Talent</span> <br />
            Behind Every Great Project.
            <Underline color="#3b82f6" width="320px" />
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            Whether you are a staffing firm scaling your hiring purpose or a freelancer 
            delivering excellence, we provide the professional backing to ensure 
            no challenge is faced alone.
          </motion.p>
        </div>
      </Section>

      {/* --- PILLAR 1: STAFFING COMPANIES --- */}
      <Section>
        <div style={styles.sectionPadding}>
          <div style={styles.splitLayout}>
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={styles.textContent}
            >
              <div style={styles.iconBox}><Workflow size={24} /></div>
              <h2 style={styles.sectionTitle}>
                Strategic Support for <br />
                <span style={styles.blueText}>Staffing Companies</span>
              </h2>
              <p style={styles.sectionDesc}>
                We act as an extension of your own team, stepping in to manage the logistical 
                and operational layers of the hiring process. By absorbing the pressure of 
                candidate management, we allow you to focus on connecting talent with opportunity.
              </p>
              <div style={styles.featureGrid}>
                <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Hiring Workflow Optimization</span></div>
                <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Client-Candidate Mediation</span></div>
                <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Direct Operational Backing</span></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={styles.imageWrapper}
            >
              <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
                alt="Staffing Team Support" 
                style={styles.mainImg} 
              />
              <div style={styles.imgLabel}>Reliable Operational Core</div>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* --- PILLAR 2: FREELANCE SUCCESS --- */}
      <Section>
        <div style={styles.sectionPadding}>
          <div style={styles.splitLayoutReverse}>
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={styles.textContent}
            >
              <div style={styles.iconBox}><Handshake size={24} /></div>
              <h2 style={styles.sectionTitle}>
                Ensuring <span style={styles.blueText}>Freelancer</span> <br /> 
                Project Completion
              </h2>
              <p style={styles.sectionDesc}>
                We provide the professional infrastructure that independent workers often lack, 
                ensuring that client requirements are clear and that you have the support 
                necessary to deliver your best work on every project.
              </p>
              <div style={styles.featureGrid}>
                <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>End-to-End Stewardship</span></div>
                <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Client Relationship Support</span></div>
                <div style={styles.checkItem}><CheckCircle2 size={18} color="#3b82f6" /> <span>Guaranteed Delivery Backing</span></div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              style={styles.imageWrapper}
            >
              <img 
                src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&w=800&q=80" 
                alt="Freelancer Support" 
                style={styles.mainImg} 
              />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* --- PILLAR 3: ESCALATIONS --- */}
      <Section>
        <div style={styles.sectionPadding}>
          <h2 style={{...styles.sectionTitle, textAlign: 'center'}}>
            Responsive <span style={styles.blueText}>Assistance</span>
            <Underline color="#3b82f6" width="180px" />
          </h2>
          <p style={{...styles.sectionDesc, textAlign: 'center', maxWidth: '800px', margin: '20px auto 60px'}}>
             Projects aren't always perfect, but our response to challenges is. 
             We provide a humanized, "good response" that restores confidence.
          </p>

          <div style={styles.cardGrid}>
            <motion.div whileHover={{ y: -10 }} style={styles.miniCard}>
              <ShieldCheck size={40} color="#3b82f6" style={{ marginBottom: 20 }} />
              <h4 style={styles.cardHeader}>Full Ownership</h4>
              <p style={styles.cardText}>We take responsibility for the issue until it is fully resolved, keeping you updated at every step.</p>
            </motion.div>
            <motion.div whileHover={{ y: -10 }} style={styles.miniCard}>
              <MessageSquare size={40} color="#3b82f6" style={{ marginBottom: 20 }} />
              <h4 style={styles.cardHeader}>Radical Clarity</h4>
              <p style={styles.cardText}>Professional communication that removes ambiguity and keeps all stakeholders perfectly aligned.</p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* --- CTA SECTION --- */}
      <Section>
        <div style={styles.ctaWrapper}>
          <div style={styles.ctaInner}>
            <h2 style={styles.ctaTitle}>
              Our Support <span style={styles.blueText}>Promise</span>
              <Underline color="#3b82f6" width="160px" />
            </h2>
            <p style={styles.ctaSub}>
              Whether you are a company staffing the next big team or a freelancer completing a vital project, 
              we are here to support the process, the people, and the final result.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59,130,246,0.3)" }} 
              whileTap={{ scale: 0.95 }} 
              style={styles.primaryBtn}
              onClick={() => navigate("/ContactUs")}
            >
              Speak to Our Support Team <ArrowRight size={18} style={{ marginLeft: 8 }} />
            </motion.button>
          </div>
        </div>
      </Section>

      <Footers />
    </div>
  );
};

/* ---------------- STYLES ---------------- */

const styles = {
  page: { color: "#fff", fontFamily: "'Inter', sans-serif", overflowX: 'hidden' },
  hero: { padding: "140px 8% 80px", textAlign: "center" },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 4rem)", fontWeight: 900, lineHeight: 1.1, letterSpacing: '-0.02em' },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { maxWidth: 750, margin: "35px auto", fontSize: "1.2rem", color: "#94a3b8", lineHeight: 1.7 },

  sectionPadding: { padding: "100px 8%" },
  splitLayout: { display: 'flex', alignItems: 'center', gap: 80, flexWrap: 'wrap' },
  splitLayoutReverse: { display: 'flex', flexDirection: 'row-reverse', alignItems: 'center', gap: 80, flexWrap: 'wrap' },
  
  textContent: { flex: 1.2, minWidth: 320 },
  iconBox: { width: 56, height: 56, background: 'rgba(59, 130, 246, 0.15)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 25, color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.3)' },
  sectionTitle: { fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: 24, lineHeight: 1.2 },
  sectionDesc: { fontSize: "1.1rem", color: "#94a3b8", lineHeight: 1.8, marginBottom: 25 },
  
  featureGrid: { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: 16, marginTop: 35 },
  checkItem: { display: 'flex', alignItems: 'center', gap: 12, fontWeight: 500, color: '#cbd5e1' },
  
  imageWrapper: { flex: 1, minWidth: 320, position: 'relative' },
  mainImg: { width: '100%', borderRadius: '32px', boxShadow: '0 30px 60px rgba(0,0,0,0.5)', border: '1px solid rgba(255,255,255,0.05)' },
  imgLabel: { position: 'absolute', bottom: 25, right: 25, background: 'rgba(15, 23, 42, 0.8)', backdropFilter: 'blur(10px)', padding: '12px 24px', borderRadius: '14px', border: '1px solid rgba(255,255,255,0.1)', fontSize: '0.9rem', fontWeight: 600 },

  cardGrid: { display: 'flex', justifyContent: 'center', gap: 30, flexWrap: 'wrap' },
  miniCard: { flex: 1, minWidth: '300px', padding: '50px 40px', background: 'rgba(30, 41, 59, 0.3)', borderRadius: '32px', border: '1px solid rgba(255,255,255,0.05)', textAlign: 'left', transition: '0.3s' },
  cardHeader: { fontSize: '1.5rem', fontWeight: 700, marginBottom: '15px' },
  cardText: { color: '#94a3b8', lineHeight: 1.6 },

  /* --- CTA SECTION --- */
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
  ctaSub: { fontSize: '1.2rem', color: '#94a3b8', marginBottom: 45, maxWidth: 800, margin: '0 auto 45px', lineHeight: 1.6 },
  primaryBtn: { padding: '20px 45px', background: '#3b82f6', color: '#fff', border: 'none', borderRadius: '16px', fontWeight: 800, fontSize: '1.1rem', cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }
};

export default Support;