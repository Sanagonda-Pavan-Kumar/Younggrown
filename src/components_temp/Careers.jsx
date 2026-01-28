import React from "react";
import { motion } from "framer-motion";
import Footer from "./Footers";


const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};


export default function Careers() {
  return (
    <div>
    <section style={styles.page}>
     
      <motion.div
        style={styles.hero}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 style={styles.heroTitle}>Careers at Younggrown</h1>
        <p style={styles.heroText}>
          We’re building a friendly and growing team of people who care about
          technology, people, and creating better workplaces.
        </p>
      </motion.div>

      <motion.div
        style={styles.intro}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <p style={styles.introText}>
          Our Careers page shares current job openings and upcoming roles across
          both IT and non-IT domains. We also welcome freelancers interested in
          future project-based or remote work opportunities.
        </p>
      </motion.div>

      <motion.div
        style={styles.cardsGrid}
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

      <motion.div
        style={styles.whySection}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeUp}
      >
        <h2 style={styles.sectionTitle}>Why Work With Us</h2>

        <motion.div
          style={styles.whyGrid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <WhyItem icon="🤝" text="Supportive and people-first culture" />
          <WhyItem icon="📈" text="Continuous learning and growth" />
          <WhyItem icon="🧠" text="Exposure to diverse projects" />
          <WhyItem icon="⚖️" text="Flexible work environment" />
        </motion.div>
      </motion.div>

      <motion.div
        style={styles.cta}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2 style={styles.ctaTitle}>Stay Connected</h2>
        <p style={styles.ctaText}>
          We regularly update our platform with new job openings and freelance
          opportunities as we grow.
        </p>

        <motion.button
          style={styles.ctaButton}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.96 }}
        >
          Register Your Interest
        </motion.button>
      </motion.div>
    </section>
    <Footer/>
    </div>
  );
}


const CareerCard = ({ icon, title, text }) => (
  <motion.div
    style={styles.card}
    variants={fadeUp}
    whileHover={{ y: -8 }}
  >
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardText}>{text}</p>
  </motion.div>
);

const WhyItem = ({ icon, text }) => (
  <motion.div
    style={styles.whyItem}
    variants={fadeUp}
    whileHover={{ scale: 1.03 }}
  >
    <span style={styles.whyIcon}>{icon}</span>
    <span style={styles.whyText}>{text}</span>
  </motion.div>
);


const styles = {
  page: {
    padding: "120px 20px",
    maxWidth: 1200,
    margin: "0 auto",
    color: "#e5e7eb",
  },

  hero: {
    textAlign: "center",
    marginBottom: 60,
  },
  heroTitle: {
    fontSize: "2.8rem",
    color: "#ffffff",
    marginBottom: 14,
  },
  heroText: {
    maxWidth: 760,
    margin: "0 auto",
    color: "#c7d2fe",
    lineHeight: 1.6,
  },

  intro: {
    maxWidth: 900,
    margin: "0 auto 80px",
    textAlign: "center",
  },
  introText: {
    color: "#cbd5f5",
    lineHeight: 1.7,
    fontSize: "1.05rem",
  },

  cardsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: 28,
    marginBottom: 100,
  },
  card: {
    background:
      "linear-gradient(180deg, rgba(56,189,248,0.12), rgba(7,16,46,0.95))",
    borderRadius: 22,
    padding: 30,
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },
  cardIcon: {
    fontSize: "2.5rem",
    marginBottom: 14,
  },
  cardTitle: {
    fontSize: "1.4rem",
    color: "#ffffff",
    marginBottom: 10,
  },
  cardText: {
    color: "#cbd5f5",
    lineHeight: 1.65,
    fontSize: "0.95rem",
  },

  whySection: {
    marginBottom: 100,
  },
  sectionTitle: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#ffffff",
    marginBottom: 40,
  },
  whyGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: 24,
  },
  whyItem: {
    display: "flex",
    alignItems: "center",
    gap: 12,
    background: "rgba(7,16,46,0.8)",
    padding: 18,
    borderRadius: 16,
  },
  whyIcon: {
    fontSize: "1.6rem",
  },
  whyText: {
    color: "#cbd5f5",
    fontSize: "0.95rem",
  },

  cta: {
    textAlign: "center",
    background:
      "radial-gradient(circle at top, rgba(56,189,248,0.25), rgba(7,16,46,0.95))",
    borderRadius: 26,
    padding: "60px 30px",
  },
  ctaTitle: {
    fontSize: "2.1rem",
    color: "#ffffff",
    marginBottom: 16,
  },
  ctaText: {
    maxWidth: 700,
    margin: "0 auto 30px",
    color: "#c7d2fe",
    lineHeight: 1.6,
  },
  ctaButton: {
    padding: "14px 28px",
    borderRadius: 999,
    border: "none",
    background: "#38bdf8",
    color: "#020617",
    fontWeight: 600,
    cursor: "pointer",
    fontSize: "0.95rem",
  },
};
