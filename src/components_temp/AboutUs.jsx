import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
          <h1 style={styles.title}>About <span style={styles.blueText}>Us</span></h1>
          <p style={styles.subtitle}>
            Helping organizations manage people more effectively through
            thoughtful HR technology.
          </p>
        </motion.div>

        {/* --- WHO WE ARE (WIDE CARD) --- */}
        <motion.div style={styles.wideCard} variants={fadeUp}>
          <div style={styles.cardRow}>
            <div style={styles.contentSide}>
              <h2 style={styles.sectionTitle}>Who We Are</h2>
              <p style={styles.text}>
                We are an emerging HR technology company dedicated to helping
                organizations manage their people more effectively.
                <br /><br />
                By combining practical HR knowledge with thoughtful technology,
                we support businesses as they grow and evolve.
              </p>
            </div>

            <div style={styles.visualSide}>
              <motion.div style={styles.imageFrame} whileHover={{ scale: 1.02 }}>
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1000&q=80" 
                  alt="Who We Are" 
                  style={styles.inlineImage}
                />
                <div style={styles.imageOverlay} />
                <div style={styles.captionContainer}>
                  <p style={styles.imageCaption}>People-first HR</p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* --- VISION & MISSION GRID --- */}
        <div style={styles.grid}>
          {[vision, mission].map((item, i) => (
            <motion.div
              key={item.title}
              style={styles.card}
              variants={fadeUp}
              whileHover={{ y: -10, borderColor: "rgba(59,130,246,0.4)" }}
            >
              <div style={styles.cardIcon}>{item.icon}</div>
              <h3 style={styles.cardTitle}>{item.title}</h3>
              <p style={styles.cardDesc}>{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* --- CORE VALUES SECTION --- */}
        <motion.h2 style={styles.sectionTitleCenter} variants={fadeUp}>
          Our Core <span style={styles.blueText}>Values</span>
        </motion.h2>

        <div style={styles.valuesGrid}>
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              style={styles.valueCard}
              variants={fadeUp}
              whileHover={{ y: -6, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
            >
              <span style={styles.valueIcon}>{v.icon}</span>
              <h4 style={styles.valueTitle}>{v.title}</h4>
              <p style={styles.valueText}>{v.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* --- OUR TEAM (WIDE CARD) --- */}
        <motion.div style={styles.wideCard} variants={fadeUp}>
          <div style={styles.cardRow}>
            <div style={styles.visualSide}>
              <motion.div style={styles.imageFrame} whileHover={{ scale: 1.02 }}>
                <img 
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=80" 
                  alt="Our Team" 
                  style={styles.inlineImage}
                />
                <div style={styles.imageOverlayBlue} />
                <div style={styles.captionContainer}>
                  <p style={styles.imageCaption}>Collaborative Team</p>
                </div>
              </motion.div>
            </div>
            
            <div style={styles.contentSide}>
              <h2 style={styles.sectionTitle}>Our Team</h2>
              <p style={styles.text}>
                Our team combines HR, technology, and business expertise to
                create sustainable workplace solutions.
              </p>
            </div>
          </div>
        </motion.div>
      </motion.section>
    </div>
  );
}

// --- DATA ---
const vision = { title: "Our Vision", text: "To make HR management simpler, clearer, and accessible for all.", icon: "👁️" };
const mission = { title: "Our Mission", text: "To build scalable and user-friendly HR solutions.", icon: "🚀" };
const values = [
  { title: "Integrity", desc: "Honesty and transparency.", icon: "🛡️" },
  { title: "Innovation", desc: "Smart HR technology.", icon: "💡" },
  { title: "Customer Focus", desc: "Real-world solutions.", icon: "🎯" },
  { title: "Excellence", desc: "Continuous improvement.", icon: "🏆" },
];

// --- ANIMATIONS ---
const pageVariants = { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.15 } } };
const fadeUp = { hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6 } } };

// --- STYLES ---
const styles = {
  wrapper: { minHeight: "100vh" },
  page: { padding: "80px 8%", color: "#fff", fontFamily: "'Inter', sans-serif", maxWidth: "1400px", margin: "0 auto" },
  hero: { textAlign: "center", marginBottom: "80px" },
  title: { fontSize: "4rem", fontWeight: 900, marginBottom: "20px" },
  blueText: { color: "#3b82f6" },
  subtitle: { fontSize: "1.25rem", color: "#94a3b8", maxWidth: "700px", margin: "0 auto" },

  wideCard: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "40px", padding: "60px", marginBottom: "40px" },
  cardRow: { display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap" },
  contentSide: { flex: 1.2 },
  visualSide: { flex: 1, minWidth: "300px" },
  sectionTitle: { fontSize: "2.5rem", marginBottom: "20px", fontWeight: 700 },
  sectionTitleCenter: { textAlign: "center", margin: "100px 0 50px", fontSize: "2.5rem", fontWeight: 700 },
  text: { fontSize: "1.1rem", color: "#cbd5e1", lineHeight: 1.8 },

  imageFrame: { width: "100%", height: "350px", borderRadius: "24px", overflow: "hidden", position: "relative", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 20px 40px rgba(0,0,0,0.3)" },
  inlineImage: { width: "100%", height: "100%", objectFit: "cover" },
  imageOverlay: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "linear-gradient(rgba(2,6,23,0), rgba(2,6,23,0.5))" },
  imageOverlayBlue: { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(37, 99, 235, 0.15)" },
  captionContainer: { position: "absolute", bottom: "20px", width: "100%", textAlign: "center" },
  imageCaption: { color: "#fff", fontWeight: 600, fontSize: "1rem", textShadow: "0 2px 4px rgba(0,0,0,0.5)" },

  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: "30px", margin: "60px 0" },
  card: { background: "rgba(255,255,255,0.03)", padding: "40px", borderRadius: "30px", border: "1px solid rgba(255,255,255,0.05)", textAlign: "center" },
  cardIcon: { fontSize: "3rem", marginBottom: "20px" },
  cardTitle: { fontSize: "1.6rem", marginBottom: "15px", fontWeight: 700 },
  cardDesc: { color: "#94a3b8", lineHeight: 1.6, fontSize: "1.05rem" },

  valuesGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "25px", marginBottom: "100px" },
  valueCard: { padding: "40px 30px", textAlign: "center", borderRadius: "24px", background: "rgba(15, 23, 42, 0.6)", border: "1px solid rgba(59,130,246,0.1)", transition: "0.3s" },
  valueIcon: { fontSize: "2.5rem", display: "block", marginBottom: "15px" },
  valueTitle: { fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px", color: "#fff" },
  valueText: { color: "#94a3b8", fontSize: "0.95rem" }
};