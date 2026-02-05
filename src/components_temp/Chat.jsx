import React, { useEffect } from "react";
import { motion } from "framer-motion";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineUsers,
  HiOutlineDocumentArrowUp,
  HiOutlineClock,
  HiOutlineShieldCheck,
  HiOutlineSparkles,
} from "react-icons/hi2";
import Section from "./Section";

export default function InternalChat() {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      
      {/* HERO */}
      <Section
        style={styles.hero}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h1 style={styles.heroTitle}>
          Team Communication.
          <br />
          <span style={styles.blueText}>Fast. Secure. Organized.</span>
        </h1>

        <p style={styles.heroSubtitle}>
          A powerful internal chat system designed for real workplace
          collaboration — enabling instant communication, secure file sharing,
          and smarter team coordination.
        </p>
      </Section>

      {/* CORE COMMUNICATION */}
      <Section
        style={styles.wideCard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={styles.cardRow}>
          <div style={styles.contentSide}>
            <h2 style={styles.sectionTitle}>
              Built for Daily Team Communication
            </h2>

            <p style={styles.text}>
              Our internal chat system enables seamless communication between
              employees, teams, and managers — without relying on external tools.
            </p>

            <p style={styles.text}>
              Whether it’s quick updates, task-related discussions, or document
              sharing, everything stays inside your organization.
            </p>

            <div style={styles.checkList}>
              <Check text="1-to-1 & Team-Based Conversations" />
              <Check text="Instant File & Document Sharing" />
              <Check text="Role-Based Message Access" />
            </div>
          </div>

          <div style={styles.visualSide}>
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ repeat: Infinity, duration: 4 }}
            >
              <HiOutlineChatBubbleLeftRight size={120} color="#2563eb" />
            </motion.div>
          </div>
        </div>
      </Section>

      {/* FEATURES GRID */}
      <Section>
      <section style={styles.gridContainer}>
        <h2 style={{ ...styles.sectionTitle, textAlign: "center" }}>
          Core Chat Capabilities
        </h2>

        <motion.div
          style={styles.grid}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <FeatureCard
            icon={<HiOutlineUsers />}
            title="Team & Direct Chats"
            desc="Create team channels or communicate directly with individual members."
          />
          <FeatureCard
            icon={<HiOutlineDocumentArrowUp />}
            title="Secure File Sharing"
            desc="Share documents, images, and files within chats securely."
          />
          <FeatureCard
            icon={<HiOutlineClock />}
            title="Conversation History"
            desc="Access complete chat history for better context and continuity."
          />
          <FeatureCard
            icon={<HiOutlineShieldCheck />}
            title="Data Privacy & Control"
            desc="Internal-only communication with controlled access and permissions."
          />
        </motion.div>
      </section>
        </Section>
      {/* 🔁 REPLACED AI SNAPSHOT → CHAT SNAPSHOT */}

      <motion.section
        style={styles.dashboard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 style={styles.sectionTitle}>AI-Powered Chat Highlights</h2>

        <p style={styles.dashboardSub}>
          A real-time glimpse into how AI highlights priority conversations
          inside internal chats.
        </p>

        <motion.div
          style={styles.chatWindow}
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <ChatBubble
            side="left"
            user="HR Team"
            text="Reminder: Submit weekly reports before 6 PM."
          />

          <ChatBubble
            side="right"
            user="Arjun"
            text="Noted 👍 I’ll upload it shortly."
          />

          <ChatBubble
            side="left"
            highlight
            user="Manager"
            text="Please prioritize client onboarding today."
          />

         
        </motion.div>
      </motion.section>

      {/* FUTURE READY */}
      <motion.section
        style={styles.wideCard}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <h2 style={styles.sectionTitle}>Future-Ready Communication</h2>

        <p style={styles.text}>
          This module is built with scalability in mind. Upcoming AI-powered
          enhancements will include:
        </p>

        <div style={styles.checkList}>
          <Check text="Smart Conversation Summaries" />
          <Check text="Auto Task Detection from Chats" />
          <Check text="AI-Powered Message Prioritization" />
          <Check text="Language & Tone Analysis" />
        </div>
      </motion.section>

      {/* CTA */}
      <motion.section
        style={styles.cta}
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div style={styles.ctaContent}>
          <h2 style={styles.ctaTitle}>Smarter Conversations. Stronger Teams.</h2>
          <p style={styles.ctaSub}>
            Keep your communication internal, intelligent, and impactful.
          </p>
          <motion.button whileHover={{ scale: 1.08 }} style={styles.whiteBtn}>
            Enable Internal Chat
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

/* ---------- SUB COMPONENTS ---------- */

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div variants={fadeUp} style={styles.card} whileHover={{ y: -10 }}>
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.cardTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

const Check = ({ text }) => (
  <div style={styles.checkItem}>
    <HiOutlineShieldCheck color="#60a5fa" />
    {text}
  </div>
);

const ChatBubble = ({ side, user, text, highlight, system }) => {
  if (system) {
    return (
      <motion.div variants={fadeUp} style={styles.systemBubble}>
        🤖 {text}
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={fadeUp}
      style={{
        ...styles.chatBubble,
        alignSelf: side === "right" ? "flex-end" : "flex-start",
        background: highlight
          ? "linear-gradient(135deg,#2563eb,#1e40af)"
          : side === "right"
          ? "#1e293b"
          : "#0f172a",
        border: highlight ? "1px solid #60a5fa" : "1px solid #1e293b",
      }}
    >
      <div style={styles.chatUser}>{user}</div>
      {text}
    </motion.div>
  );
};

/* ---------- ANIMATIONS ---------- */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

/* ---------- STYLES ---------- */

const styles = {
  page: { background: "#020617", color: "#e5e7eb", overflowX: "hidden" },

  hero: { padding: "120px 8% 80px", textAlign: "center" },
  heroTitle: { fontSize: "64px", fontWeight: 800, lineHeight: 1.1 },
  blueText: { color: "#3b82f6" },
  heroSubtitle: {
    maxWidth: "760px",
    margin: "25px auto 40px",
    color: "#94a3b8",
    lineHeight: 1.6,
  },

  wideCard: {
    margin: "0 8% 80px",
    padding: "60px",
    borderRadius: "32px",
    border: "1px solid #1e293b",
  },

  cardRow: { display: "flex", gap: "60px", flexWrap: "wrap" },
  contentSide: { flex: 1 },
  visualSide: { flex: 0.4, display: "flex", justifyContent: "center" },

  sectionTitle: { fontSize: "32px", fontWeight: 700, marginBottom: "20px", textAlign:'center' },
  text: { color: "#94a3b8", lineHeight: 1.7 },

  checkList: {
    marginTop: "20px",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },

  checkItem: { display: "flex", gap: "10px", alignItems: "center" },

  gridContainer: { padding: "80px 8%" },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "25px",
  },

  card: {
    border: "1px solid #1e293b",
    borderRadius: "24px",
    padding: "35px",
  },

  cardIcon: { fontSize: "36px", color: "#3b82f6" },
  cardTitle: { fontSize: "20px", fontWeight: 600 },
  cardDesc: { color: "#94a3b8", marginTop: "10px" },

  dashboard: { padding: "80px 8%" },
  dashboardSub: {
    textAlign: "center",
    color: "#94a3b8",
    maxWidth: "700px",
    margin: "0 auto 40px",
  },

  chatWindow: {
    maxWidth: 720,
    margin: "0 auto",
    background: "rgba(255,255,255,0.03)",
    borderRadius: 28,
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 18,
    border: "1px solid rgba(59,130,246,0.25)",
  },

  chatBubble: {
    maxWidth: "75%",
    padding: "14px 18px",
    borderRadius: 18,
    fontSize: "0.95rem",
    lineHeight: 1.5,
  },

  chatUser: {
    fontSize: "0.75rem",
    color: "#93c5fd",
    marginBottom: 4,
    fontWeight: 600,
  },

  systemBubble: {
    alignSelf: "center",
    background: "rgba(59,130,246,0.12)",
    border: "1px dashed #3b82f6",
    padding: "12px 18px",
    borderRadius: 14,
    fontSize: "0.85rem",
    color: "#bfdbfe",
    maxWidth: "85%",
    textAlign: "center",
  },

  cta: { padding: "100px 8%" },
  ctaContent: {
    background: "linear-gradient(135deg,#1e3a8a,#2563eb)",
    padding: "80px",
    borderRadius: "40px",
    textAlign: "center",
  },

  ctaTitle: { fontSize: "40px", fontWeight: 800 },
  ctaSub: { color: "#386296", marginBottom: "30px" },

  whiteBtn: {
    background: "#fff",
    color: "#2563eb",
    padding: "16px 36px",
    borderRadius: "12px",
    border: "none",
    fontWeight: 700,
  },
};
