import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineUsers,
  HiOutlineBriefcase,
  HiOutlineClock,
  HiOutlineBuildingOffice2,
  HiOutlineCheckBadge,
  HiOutlineArrowTrendingUp,
  HiOutlineHandRaised,
} from "react-icons/hi2";

export default function NonTechStaffing() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      {/* HERO */}
      <motion.section
        style={styles.hero}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 style={styles.heroTitle}>
          Reliable Workforce.
          <br />
          <span style={styles.blueText}>Delivered at Scale.</span>
        </h1>

        <p style={styles.heroSubtitle}>
          From frontline staff to operational teams, we empower businesses with
          dependable, flexible, and execution-ready staffing solutions.
        </p>

        <div style={styles.heroBtns}>
          <motion.button whileHover={{ scale: 1.05 }} style={styles.primaryBtn}>
            Get a Quote
          </motion.button>
          <motion.button whileHover={{ scale: 1.05 }} style={styles.secondaryBtn}>
            Our Capability
          </motion.button>
        </div>
      </motion.section>

      {/* STRATEGIC CAPABILITY */}
      <motion.section
        style={styles.wideCard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={styles.cardRow}>
          <div style={styles.contentSide}>
            <h2 style={styles.sectionTitle}>Built for On-Ground Execution</h2>

            <p style={styles.text}>
              We operate where execution matters most. With{" "}
              <strong>30+ hiring projects</strong> delivered, our teams move
              fast, scale instantly, and ensure workforce continuity.
            </p>

            <p style={styles.text}>
              Our non-tech staffing model is designed for real-world conditions —
              tight deadlines, shifting demands, and zero tolerance for delays.
            </p>

            <div style={styles.checkList}>
              <Check text="4–7 Day Average Turnaround" />
              <Check text="Compliance-First Workforce Management" />
              <Check text="High-Fit, Verified Profiles" />
            </div>
          </div>

          <div style={styles.visualSide}>
            <div style={styles.imageWrapper}>
               {/* Image representing on-ground workforce and logistics */}
               
               <img 
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80" 
                alt="Operational Team" 
                style={styles.sideImage} 
              />
            </div>
          </div>
        </div>
      </motion.section>

      {/* STAFFING MODELS */}
      <section style={styles.gridContainer}>
        <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>
          Flexible Engagement Models
        </h2>

        <motion.div
          style={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeatureCard
            icon={<HiOutlineBuildingOffice2 />}
            title="Customized Staffing"
            desc="Tailored workforce models aligned to your operational structure."
          />
          <FeatureCard
            icon={<HiOutlineClock />}
            title="Temporary Staffing"
            desc="Rapid workforce deployment for seasonal or urgent needs."
          />
          <FeatureCard
            icon={<HiOutlineUsers />}
            title="Permanent Staffing"
            desc="Long-term talent solutions for business continuity."
          />
          <FeatureCard
            icon={<HiOutlineBriefcase />}
            title="Contract Staffing"
            desc="Flexible, compliance-managed contract hiring."
          />
        </motion.div>
      </section>

      {/* BUSINESS IMPACT */}
      <motion.section
        style={styles.wideCard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={{...styles.cardRow, flexDirection: 'row-reverse'}}>
            <div style={styles.contentSide}>
                <h2 style={styles.sectionTitle}>Real Business Impact</h2>

                <p style={styles.text}>
                Our staffing solutions help organizations reduce downtime, stabilize
                operations, and scale confidently — without compromising quality.
                </p>

                <p style={styles.text}>
                By supporting <strong>10+ clients</strong> across industries, executing{" "}
                <strong>30+ projects</strong>, and building{" "}
                <strong>20+ collaborations</strong>, we’ve proven our ability to
                deliver under pressure.
                </p>
            </div>
            <div style={styles.visualSide}>
                <div style={styles.imageWrapper}>
                    {/* Image representing business growth and corporate collaboration */}
                    
                    <img 
                        src="https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=800&q=80" 
                        alt="Business Collaboration" 
                        style={styles.sideImage} 
                    />
                </div>
            </div>
        </div>
      </motion.section>

      {/* METRICS */}
      <section style={styles.dashboard}>
        <h2 style={{...styles.sectionTitle, textAlign: 'center', marginBottom: '40px'}}>Hiring Impact at a Glance</h2>

        <motion.div
          style={styles.metricsGrid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <MetricCard icon={<HiOutlineBuildingOffice2 />} label="Clients" value="10+" />
          <MetricCard icon={<HiOutlineBriefcase />} label="Projects" value="30+" />
          <MetricCard icon={<HiOutlineHandRaised />} label="Collaborations" value="20+" />
          <MetricCard icon={<HiOutlineClock />} label="Turnaround" value="4–7 Days" />
        </motion.div>
      </section>

      {/* CTA */}
      <motion.section
        style={styles.cta}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Ready to Scale Your Workforce?</h2>
          <p style={styles.ctaSub}>
            Trusted by 10+ businesses. Delivered with speed and reliability.
          </p>
          <motion.button whileHover={{ scale: 1.08 }} style={styles.whiteBtn}>
            Partner With Us
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

/* ---------- SUB COMPONENTS ---------- */

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div
    variants={fadeUp}
    style={styles.card}
    whileHover={{ y: -12, borderColor: '#3b82f6', background: 'rgba(30, 41, 59, 0.5)' }}
  >
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

const MetricCard = ({ icon, label, value }) => (
  <motion.div variants={fadeUp} style={styles.metricCard}>
    <div style={styles.metricIcon}>{icon}</div>
    <div style={styles.metricValue}>{value}</div>
    <div style={styles.metricLabel}>{label}</div>
  </motion.div>
);

const Check = ({ text }) => (
  <div style={styles.checkItem}>
    <HiOutlineCheckBadge color="#60a5fa" size={20} />
    <span style={{color: '#cbd5e1'}}>{text}</span>
  </div>
);

/* ---------- ANIMATIONS ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

/* ---------- STYLES ---------- */

const styles = {
  page: {  color: "#e5e7eb", overflowX: "hidden", fontFamily: 'Inter, system-ui, sans-serif' },
  hero: { padding: "160px 8% 100px", textAlign: "center",  },
  heroTitle: { fontSize: "clamp(40px, 8vw, 72px)", fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.02em' },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { maxWidth: "720px", margin: "25px auto 40px", color: "#94a3b8", fontSize: '18px', lineHeight: 1.6 },
  heroBtns: { display: "flex", justifyContent: "center", gap: "15px" },
  primaryBtn: { background: "#2563eb", color: "#fff", padding: "16px 32px", borderRadius: "12px", border: "none", fontWeight: 600, cursor: 'pointer' },
  secondaryBtn: { background: "rgba(255,255,255,0.05)", border: "1px solid #1e293b", color: "#fff", padding: "16px 32px", borderRadius: "12px", fontWeight: 600, cursor: 'pointer' },

  wideCard: { margin: "0 8% 80px", padding: "60px", borderRadius: "40px", border: "1px solid #1e293b", background: 'rgba(15, 23, 42, 0.3)', backdropFilter: 'blur(10px)' },
  cardRow: { display: "flex", gap: "60px", flexWrap: "wrap", alignItems: 'center' },
  contentSide: { flex: 1.2, minWidth: '300px' },
  visualSide: { flex: 0.8, display: "flex", justifyContent: "center", minWidth: '300px' },
  
  imageWrapper: { position: 'relative', width: '100%', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' },
  sideImage: { width: '100%', height: '400px', objectFit: 'cover', display: 'block' },

  sectionTitle: { fontSize: "clamp(28px, 4vw, 36px)", fontWeight: 700, marginBottom: "20px", color: '#f8fafc' },
  text: { color: "#94a3b8", lineHeight: 1.8, fontSize: '17px', marginBottom: '20px' },

  checkList: { marginTop: "25px", display: "flex", flexDirection: "column", gap: "12px" },
  checkItem: { display: "flex", gap: "12px", alignItems: "center", fontSize: '16px', fontWeight: 500 },

  gridContainer: { padding: "80px 8%" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: "30px" },
  card: { border: "1px solid #1e293b", borderRadius: "32px", padding: "40px", background: 'rgba(30, 41, 59, 0.2)', transition: 'all 0.3s ease' },
  cardIcon: { fontSize: "42px", color: "#3b82f6", marginBottom: '20px' },
  cardTitle: { fontSize: '22px', fontWeight: 600, marginBottom: '15px' },
  cardDesc: { color: '#64748b', lineHeight: 1.6 },

  dashboard: { padding: "80px 8% 120px" },
  metricsGrid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "30px" },
  metricCard: { background: 'linear-gradient(to bottom right, #0f172a, #020617)', border: "1px solid #1e293b", borderRadius: "28px", padding: "40px", textAlign: "center", boxShadow: '0 10px 30px rgba(0,0,0,0.2)' },
  metricIcon: { fontSize: "32px", color: "#3b82f6", marginBottom: '15px' },
  metricValue: { fontSize: "40px", fontWeight: 800, color: '#fff', marginBottom: '5px' },
  metricLabel: { fontSize: "14px", color: "#64748b", textTransform: "uppercase", letterSpacing: '0.1em', fontWeight: 600 },

  cta: { padding: "0 8% 100px" },
  ctaContent: { background: "linear-gradient(135deg,#1e3a8a,#2563eb)", padding: "100px 40px", borderRadius: "50px", textAlign: "center", boxShadow: '0 30px 60px rgba(37, 99, 235, 0.2)' },
  ctaTitle: { fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, marginBottom: '20px' },
  ctaSub: { color: "#bfdbfe", marginBottom: "40px", fontSize: '18px' },
  whiteBtn: { background: "#fff", color: "#2563eb", padding: "18px 48px", borderRadius: "14px", border: "none", fontWeight: 700, fontSize: '18px', cursor: 'pointer' },
};