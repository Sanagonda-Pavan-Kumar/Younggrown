import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import {
  HiOutlineChatBubbleLeftRight,
  HiOutlineUsers,
  HiOutlineDocumentArrowUp,
  HiOutlineClock,
  HiOutlineShieldCheck,
} from "react-icons/hi2";
import Section from "./Section";
import Footers from "./Footers";

/* ================= UTILS ================= */

const Underline = ({ color = "#3b82f6", width = "150px" }) => (
  <motion.div
    initial={{ width: 0 }}
    whileInView={{ width: width }}
    viewport={{ once: true }}
    transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
    style={{
      height: "4px",
      background: color,
      margin: "12px auto 0",
      borderRadius: "2px"
    }}
  />
);

/* ================= COMPONENT ================= */

export default function InternalChat() {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <div style={styles.page}>
      
      {/* HERO SECTION */}
      <Section>
        <div style={styles.hero}>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            style={styles.heroTitle}
          >
            Team <span style={styles.blueText}>Communication.</span>
            <br />
            Fast. Secure. Organized.
            <Underline color="#3b82f6" width="280px" />
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            style={styles.heroSubtitle}
          >
            A powerful internal chat system designed for real workplace
            collaboration — enabling instant communication, secure file sharing,
            and smarter team coordination.
          </motion.p>

          <div style={styles.heroActions}>
            <motion.button 
              whileHover={{ scale: 1.05 }} 
              style={styles.primaryBtn}
              onClick={() => navigate("/")}
            >
              Get Started
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, background: "rgba(255,255,255,0.05)" }} 
              style={styles.secondaryBtn}
              onClick={() => navigate("/ContactUs")}
            >
              View Demo
            </motion.button>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={styles.heroImageWrapper}
          >
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=1200&q=80" 
              alt="Team Collaboration Dashboard" 
              style={styles.heroImage}
            />
          </motion.div>
        </div>
      </Section>

      {/* CORE COMMUNICATION */}
      <Section>
        <div style={styles.section}>
          <div style={styles.splitLayout}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={styles.glassCard}
            >
              <h2 style={{...styles.cardTitle, textAlign: 'left'}}>
                Built for <span style={styles.blueText}>Daily</span> Workflow
                <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: "100px" }}
                    viewport={{ once: true }}
                    style={{ height: "4px", background: "#3b82f6", marginTop: "10px", borderRadius: "2px" }}
                />
              </h2>
              <p style={styles.cardText}>
                Our internal chat system enables seamless communication between
                employees and managers without relying on external third-party tools.
              </p>
              <div style={styles.checkList}>
                <Check text="1-to-1 & Team-Based Channels" />
                <Check text="Instant File & Document Sharing" />
                <Check text="Role-Based Message Access" />
              </div>
            </motion.div>
            
            <motion.img 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=600&q=80" 
              style={styles.sideImage}
              alt="Team discussing in office"
            />
          </div>
        </div>
      </Section>

      {/* FEATURES GRID */}
      <Section>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Core Chat <span style={styles.blueText}>Capabilities</span>
            <Underline color="#3b82f6" width="180px" />
          </h2>

          <div style={styles.grid}>
            <FeatureCard
              icon={<HiOutlineUsers />}
              title="Team Channels"
              desc="Create focused channels for specific projects or departments."
            />
            <FeatureCard
              icon={<HiOutlineDocumentArrowUp />}
              title="Secure Sharing"
              desc="Share high-res documents and media within a protected network."
            />
            <FeatureCard
              icon={<HiOutlineClock />}
              title="Full History"
              desc="Never lose context with searchable archives and message history."
            />
            <FeatureCard
              icon={<HiOutlineShieldCheck />}
              title="End-to-End Privacy"
              desc="Keep all sensitive business discussions strictly internal."
            />
          </div>
        </div>
      </Section>

      {/* CHAT PREVIEW / AI HIGHLIGHTS */}
      <Section>
        <div style={styles.section}>
          <h2 style={styles.sectionTitle}>
            Smart <span style={styles.blueText}>Interaction</span> Highlights
            <Underline color="#3b82f6" width="160px" />
          </h2>

          <div style={styles.chatWindow}>
            <ChatBubble side="left" user="HR Team" text="Reminder: Submit weekly reports before 6 PM." />
            <ChatBubble side="right" user="Arjun" text="Noted 👍 I’ll upload it shortly." />
            <ChatBubble side="left" highlight user="Manager" text="Please prioritize client onboarding today." />
          </div>
        </div>
      </Section>

      {/* CTA SECTION */}
      <Section>
        <div style={styles.ctaWrapper}>
          <div style={styles.ctaInner}>
            <h2 style={styles.ctaTitle}>
              Smarter <span style={styles.blueText}>Conversations.</span> Stronger Teams.
              <Underline color="#3b82f6" width="140px" />
            </h2>
            <p style={styles.ctaSub}>
              Keep your communication internal, intelligent, and impactful.
            </p>
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(59,130,246,0.3)" }} 
              whileTap={{ scale: 0.95 }} 
              style={styles.ctaBtn}
              onClick={() => navigate("/ContactUs")}
            >
              Connect with Us
            </motion.button>
          </div>
        </div>
      </Section>

      <Footers />
    </div>
  );
}

/* ---------- SUB COMPONENTS ---------- */

const FeatureCard = ({ icon, title, desc }) => (
  <motion.div 
    whileHover={{ y: -10, borderColor: "#3b82f6", background: "rgba(30, 41, 59, 0.4)" }}
    style={styles.card}
  >
    <div style={styles.cardIcon}>{icon}</div>
    <h3 style={styles.featureTitle}>{title}</h3>
    <p style={styles.cardDesc}>{desc}</p>
  </motion.div>
);

const Check = ({ text }) => (
  <div style={styles.checkItem}>
    <HiOutlineShieldCheck size={20} color="#3b82f6" />
    <span style={{ color: "#94a3b8" }}>{text}</span>
  </div>
);

const ChatBubble = ({ side, user, text, highlight }) => (
  <motion.div
    initial={{ opacity: 0, x: side === "left" ? -20 : 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    style={{
      ...styles.chatBubble,
      alignSelf: side === "right" ? "flex-end" : "flex-start",
      background: highlight ? "linear-gradient(135deg,#2563eb,#1e40af)" : side === "right" ? "#1e293b" : "rgba(255,255,255,0.05)",
      border: highlight ? "1px solid #60a5fa" : "1px solid #1e293b",
    }}
  >
    <div style={styles.chatUser}>{user}</div>
    {text}
  </motion.div>
);

/* ---------- STYLES ---------- */

const styles = {
  page: { color: "#f8fafc", fontFamily: "Inter, sans-serif", overflowX: "hidden" },
  hero: { padding: "120px 8% 60px", textAlign: "center" },
  heroTitle: { fontSize: "clamp(2.5rem, 6vw, 3.8rem)", fontWeight: 900, marginBottom: "20px", color: "#fff", lineHeight: 1.2 },
  blueText: { color: "#3b82f6" },
  heroSubtitle: { maxWidth: "720px", margin: "30px auto 40px", color: "#94a3b8", fontSize: "1.2rem", lineHeight: 1.6 },
  heroActions: { display: "flex", justifyContent: "center", gap: "20px", marginBottom: "80px" },
  primaryBtn: { background: "#3b82f6", color: "#fff", padding: "18px 36px", borderRadius: "14px", border: "none", fontWeight: 700, cursor: "pointer" },
  secondaryBtn: { background: "transparent", border: "1px solid #334155", color: "#fff", padding: "18px 36px", borderRadius: "14px", cursor: "pointer" },
  
  heroImageWrapper: { maxWidth: "1000px", margin: "0 auto", borderRadius: "28px", overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", boxShadow: "0 50px 100px -20px rgba(0,0,0,0.6)" },
  heroImage: { width: "100%", display: "block" },

  section: { padding: "80px 8%", textAlign: "center" },
  splitLayout: { display: "flex", alignItems: "center", gap: "60px", flexWrap: "wrap", justifyContent: "center" },
  sideImage: { width: "100%", maxWidth: "500px", borderRadius: "24px", boxShadow: "0 25px 50px rgba(0,0,0,0.5)", border: "1px solid rgba(255,255,255,0.05)" },
  glassCard: { background: "rgba(30, 41, 59, 0.4)", border: "1px solid rgba(255,255,255,0.08)", backdropFilter: "blur(18px)", borderRadius: "32px", padding: "50px", maxWidth: "550px", textAlign: "left" },
  cardTitle: { fontSize: "2.4rem", fontWeight: 800, color: "#fff" },
  cardText: { color: "#94a3b8", fontSize: "1.1rem", lineHeight: 1.8, marginTop: "20px" },
  checkList: { marginTop: "25px", display: "flex", flexDirection: "column", gap: "12px" },
  checkItem: { display: "flex", gap: "10px", alignItems: "center" },

  sectionTitle: { fontSize: "clamp(2rem, 4vw, 2.8rem)", fontWeight: 800, marginBottom: "60px", color: "#fff" },
  grid: { display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "25px" },
  card: { background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", borderRadius: "24px", padding: "40px", textAlign: "left", transition: "0.3s ease" },
  cardIcon: { fontSize: "3rem", color: "#3b82f6", marginBottom: "20px" },
  featureTitle: { fontSize: "1.3rem", fontWeight: 700, marginBottom: "10px", color: "#fff" },
  cardDesc: { color: "#94a3b8", lineHeight: 1.6 },

  chatWindow: { maxWidth: 720, margin: "0 auto", background: "rgba(30, 41, 59, 0.2)", borderRadius: 32, padding: 40, display: "flex", flexDirection: "column", gap: 20, border: "1px solid rgba(59,130,246,0.2)" },
  chatBubble: { maxWidth: "75%", padding: "16px 20px", borderRadius: 20, fontSize: "0.95rem", lineHeight: 1.5, color: "#fff" },
  chatUser: { fontSize: "0.75rem", color: "#93c5fd", marginBottom: 6, fontWeight: 700 },

  ctaWrapper: { padding: "80px 8% 120px" },
  ctaInner: {
    background: "linear-gradient(145deg, #020617 0%, #0b3b6f 50%, #020617 100%)",
    padding: "80px 40px",
    borderRadius: "40px",
    textAlign: "center",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    boxShadow: "0 20px 50px rgba(0, 0, 0, 0.4)"
  },
  ctaTitle: { fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 900, color: "#fff", marginBottom: "20px" },
  ctaSub: { color: "#94a3b8", margin: "0 auto 40px", fontSize: "1.1rem", maxWidth: "600px" },
  ctaBtn: { background: "#3b82f6", color: "#fff", padding: "20px 50px", borderRadius: "16px", border: "none", fontWeight: 800, fontSize: "1.1rem", cursor: "pointer" }
};