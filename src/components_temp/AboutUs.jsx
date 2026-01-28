import React, { useEffect } from "react";
import { motion } from "framer-motion";

export default function AboutUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.section
      style={styles.page}
      initial="hidden"
      animate="visible"
      variants={pageVariants}
    >
      <motion.div variants={fadeUp}>
        <h1 style={styles.title}>About Us</h1>
        <p style={styles.subtitle}>
          Helping organizations manage people more effectively through
          thoughtful HR technology.
        </p>
      </motion.div>

      <motion.div style={styles.wideCard} variants={fadeUp}>
        <div style={styles.cardRow}>
          <div>
            <h2 style={styles.sectionTitle}>Who We Are</h2>
            <p style={styles.text}>
              We are an emerging HR technology company dedicated to helping
              organizations manage their people more effectively.
              <br /><br />
              By combining practical HR knowledge with thoughtful technology,
              we support businesses as they grow and evolve.
            </p>
          </div>

          <motion.div
            style={styles.imageBox}
            whileHover={{ scale: 1.05 }}
          >
            <span style={styles.emoji}>👥</span>
            <p style={styles.imageCaption}>People-first HR</p>
          </motion.div>
        </div>
      </motion.div>

      <div style={styles.twoGrid}>
        {[vision, mission].map((item, i) => (
          <motion.div
            key={item.title}
            style={styles.card}
            variants={fadeUp}
            transition={{ delay: i * 0.2 }}
          >
            <span style={styles.icon}>{item.icon}</span>
            <h3 style={styles.cardTitle}>{item.title}</h3>
            <p style={styles.text}>{item.text}</p>
          </motion.div>
        ))}
      </div>

      <motion.h2 style={styles.sectionTitleCenter} variants={fadeUp}>
        Our Core Values
      </motion.h2>

      <div style={styles.valuesGrid}>
        {values.map((v, i) => (
          <motion.div
            key={v.title}
            style={styles.valueCard}
            variants={fadeUp}
            transition={{ delay: i * 0.15 }}
            whileHover={{ y: -6 }}
          >
            <span style={styles.valueIcon}>{v.icon}</span>
            <h4 style={styles.valueTitle}>{v.title}</h4>
            <p style={styles.valueText}>{v.desc}</p>
          </motion.div>
        ))}
      </div>

      <motion.div style={styles.wideCard} variants={fadeUp}>
        <div style={styles.cardRow}>
          <motion.div style={styles.imageBox} whileHover={{ scale: 1.05 }}>
            <span style={styles.emoji}>🤝</span>
            <p style={styles.imageCaption}>Collaborative Team</p>
          </motion.div>

          <div>
            <h2 style={styles.sectionTitle}>Our Team</h2>
            <p style={styles.text}>
              Our team combines HR, technology, and business expertise to
              create sustainable workplace solutions.
            </p>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}


const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};


const vision = {
  title: "Our Vision",
  text: "To make HR management simpler, clearer, and accessible for all.",
  icon: "👁️",
};

const mission = {
  title: "Our Mission",
  text: "To build scalable and user-friendly HR solutions.",
  icon: "🚀",
};

const values = [
  { title: "Integrity", desc: "Honesty and transparency.", icon: "🛡️" },
  { title: "Innovation", desc: "Smart HR technology.", icon: "💡" },
  { title: "Customer Focus", desc: "Real-world solutions.", icon: "🎯" },
  { title: "Excellence", desc: "Continuous improvement.", icon: "🏆" },
];


const styles = {
  page: {
    paddingTop: 40,
    paddingInline: 24,
    paddingBottom: 80,
    maxWidth: 1200,
    margin: "0 auto",
    color: "#e5e7eb",
  },

  title: { fontSize: "2.8rem", color: "#fff", textAlign: "center" },

  subtitle: {
    textAlign: "center",
    marginTop: 12,
    maxWidth: 700,
    marginInline: "auto",
    color: "#c7d2fe",
  },

  wideCard: {
    marginTop: 70,
    background: "rgba(255,255,255,0.04)",
    padding: 40,
    borderRadius: 22,
    border: "1px solid rgba(255,255,255,0.08)",
  },

  cardRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 40,
    alignItems: "center",
  },

  sectionTitle: { fontSize: "1.8rem", marginBottom: 16, color: "#fff" },
  sectionTitleCenter: { textAlign: "center", margin: "80px 0 40px", fontSize: "1.8rem", color: "#fff" },
  text: { color: "#cbd5f5", lineHeight: 1.8 },

  imageBox: {
    height: 200,
    borderRadius: 20,
    background: "radial-gradient(circle at top, rgba(56,189,248,0.25), rgba(7,16,46,0.9))",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },

  emoji: { fontSize: "3rem" },
  imageCaption: { color: "#c7d2fe", marginTop: 8 },

  twoGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: 32,
    marginTop: 80,
  },

  card: {
    textAlign: "center",
    padding: 32,
    borderRadius: 20,
    background: "rgba(255,255,255,0.04)",
    border: "1px solid rgba(255,255,255,0.08)",
  },

  icon: { fontSize: "2rem" },
  cardTitle: { color: "#fff", marginBottom: 12 },

  valuesGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 24,
  },

  valueCard: {
    padding: 28,
    textAlign: "center",
    borderRadius: 18,
    background: "rgba(7,16,46,0.7)",
    border: "1px solid #334155",
  },

  valueIcon: { fontSize: "1.8rem" },
  valueTitle: { color: "#fff" },
  valueText: { color: "#c7d2fe" },
};
