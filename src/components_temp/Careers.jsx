import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footers";

// --- ANIMATIONS ---
const pageVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } } };
const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.15 } } };

export default function Careers() {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div style={styles.wrapper}>
      <motion.section 
        style={styles.page}
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        
        {/* --- HERO SECTION --- */}
        <motion.div style={styles.hero} variants={fadeUp}>
          <h1 style={styles.heroTitle}>Careers at <span style={styles.blueText}>Younggrown</span></h1>
          <p style={styles.heroSubtitle}>
            We’re building a friendly and growing team of people who care about
            technology, people, and creating better workplaces.
          </p>
        </motion.div>

        {/* --- IMAGE-TEXT INTRO SECTION --- */}
        <motion.div style={styles.wideCard} variants={fadeUp}>
          <div style={styles.cardRow}>
            <div style={styles.contentSide}>
              <p style={styles.text}>
                Our Careers page shares current job openings and upcoming roles across
                both IT and non-IT domains. We also welcome freelancers interested in
                future project-based or remote work opportunities.
              </p>
            </div>
            <div style={styles.visualSide}>
               <motion.div style={styles.imageFrame} whileHover={{scale: 1.02}}>
                  <img 
                    src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=80" 
                    alt="Team Collaboration" 
                    style={styles.inlineImage}
                  />
                  <div style={styles.imageOverlay} />
               </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- CAREER CATEGORIES GRID --- */}
        <motion.div
          style={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <CareerCard
            icon="💻"
            title="IT Careers"
            text="Opportunities in software development, engineering, QA, cloud, data, and other technology roles."
          />
          <CareerCard
            icon="🏢"
            title="Non-IT Careers"
            text="Roles across HR, operations, finance, sales, administration, and support functions."
          />
          <CareerCard
            icon="🌍"
            title="Freelance Opportunities"
            text="Project-based and remote opportunities for both IT and non-IT professionals."
          />
        </motion.div>

        {/* --- WHY WORK WITH US SECTION --- */}
        <motion.div
          style={styles.whySection}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
        >
          <h2 style={styles.sectionTitleCenter}>Why Work <span style={styles.blueText}>With Us</span></h2>

          <div style={styles.whyGrid}>
            <WhyItem icon="🤝" text="Supportive and people-first culture" />
            <WhyItem icon="📈" text="Continuous learning and growth" />
            <WhyItem icon="🧠" text="Exposure to diverse projects" />
            <WhyItem icon="⚖️" text="Flexible work environment" />
          </div>
        </motion.div>

        {/* --- CTA BANNER --- */}
        <motion.div
          style={styles.ctaBanner}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 style={styles.ctaTitle}>Stay Connected</h2>
          <p style={styles.ctaSubtitle}>
            We regularly update our platform with new job openings and freelance
            opportunities as we grow.
          </p>

          <motion.button
            style={styles.primaryBtn}
            whileHover={{ scale: 1.06 }}
            whileTap={{ scale: 0.96 }}
          >
            Register Your Interest
          </motion.button>
        </motion.div>
      </motion.section>
      <Footer/>
    </div>
  );
}

// --- SUB-COMPONENTS ---
const CareerCard = ({ icon, title, text }) => (
  <motion.div
    style={styles.card}
    variants={fadeUp}
    whileHover={{ y: -10, borderColor: "rgba(59,130,246,0.4)" }}
  >
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{text}</p>
  </motion.div>
);

const WhyItem = ({ icon, text }) => (
  <motion.div
    style={styles.whyItem}
    variants={fadeUp}
    whileHover={{ x: 5, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
  >
    <span style={styles.whyIcon}>{icon}</span>
    <span style={styles.whyLabel}>{text}</span>
  </motion.div>
);

// --- STYLES ---
const styles = {
  wrapper: {  minHeight: "100vh" },
  page: { padding: "80px 8%", color: "#fff", fontFamily: "'Inter', sans-serif", maxWidth: "1400px", margin: "0 auto" },
  
  hero: { textAlign: "center", marginBottom: "80px" },
  heroTitle: { fontSize: "4rem", fontWeight: 900, lineHeight: 1.1, marginBottom: "25px" },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { fontSize: "1.25rem", color: "#94a3b8", maxWidth: "800px", margin: "0 auto" },

  wideCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "40px", padding: "60px", marginBottom: "40px" },
  cardRow: { display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" },
  contentSide: { flex: 1.2 },
  visualSide: { flex: 1, minWidth: "300px" },
  text: { fontSize: "1.2rem", color: "#cbd5e1", lineHeight: 1.8 },

  imageFrame: { width: "100%", height: "350px", borderRadius: "24px", overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" },
  inlineImage: { width: "100%", height: "100%", objectFit: "cover" },
  imageOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(rgba(2,6,23,0), rgba(2,6,23,0.5))" },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", margin: "60px 0" },
  card: { background: "rgba(255,255,255,0.03)", padding: "40px", borderRadius: "30px", border: "1px solid rgba(255,255,255,0.05)", transition: "0.3s" },
  cardIcon: { fontSize: "3rem", marginBottom: "20px" },
  cardTitle: { fontSize: "1.6rem", marginBottom: "15px", fontWeight: 700 },
  cardDesc: { color: "#94a3b8", lineHeight: 1.6, fontSize: "1rem" },

  whySection: { margin: "100px 0" },
  sectionTitleCenter: { textAlign: "center", marginBottom: "50px", fontSize: "2.5rem", fontWeight: 700 },
  whyGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "20px" },
  whyItem: { display: "flex", alignItems: "center", gap: "15px", background: "rgba(15, 23, 42, 0.6)", padding: "20px 25px", borderRadius: "20px", border: "1px solid rgba(59,130,246,0.1)", transition: "0.3s" },
  whyIcon: { fontSize: "1.8rem" },
  whyLabel: { color: "#cbd5e1", fontWeight: 500, fontSize: "1rem" },

  ctaBanner: { textAlign: "center", background: "linear-gradient(135deg, #1e3a8a, #2563eb)", padding: "80px 40px", borderRadius: "50px", marginTop: "100px" },
  ctaTitle: { fontSize: "3rem", fontWeight: 800, marginBottom: "20px" },
  ctaSubtitle: { fontSize: "1.1rem", color: "#dbeafe", maxWidth: "600px", margin: "0 auto 40px", lineHeight: 1.6 },
  primaryBtn: { background: "#fff", color: "#2563eb", border: "none", padding: "16px 40px", borderRadius: "15px", fontWeight: 800, fontSize: "1.1rem", cursor: "pointer", boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }
};