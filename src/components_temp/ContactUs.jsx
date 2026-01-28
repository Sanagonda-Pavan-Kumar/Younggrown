import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footers";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
    <section style={styles.page}>
    
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={styles.header}
      >
        <h1 style={styles.title}>
          Contact <span style={{ color: "#38bdf8" }}>Us</span>
        </h1>
        <p style={styles.subtitle}>
          We’d love to hear from you. Let’s talk about how we can help.
        </p>
      </motion.div>

   
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        style={styles.container}
      >
    
        <div style={styles.left}>
          <h2 style={styles.leftTitle}>We are here for you</h2>
          <p style={styles.leftText}>
            Our team will get in touch with you within 24 hours to understand
            your requirements and suggest the best solutions.
          </p>

          <div style={styles.infoCard}>
            <span style={styles.icon}>📧</span>
            <div>
              <strong>Email Us</strong>
              <p>hello@yourcompany.com</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <span style={styles.icon}>📞</span>
            <div>
              <strong>Contact</strong>
              <p>+91 78620 34603</p>
            </div>
          </div>

          <div style={styles.infoCard}>
            <span style={styles.icon}>📍</span>
            <div>
              <strong>Location</strong>
              <p>Hyderabad, India</p>
            </div>
          </div>
        </div>

        <motion.form
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={styles.form}
        >
          <div style={styles.row}>
            <input placeholder="First Name *" style={styles.input} />
            <input placeholder="Last Name *" style={styles.input} />
          </div>

          <input placeholder="Company *" style={styles.input} />
          <input placeholder="Email *" style={styles.input} />
          <input placeholder="Mobile *" style={styles.input} />

          <textarea
            placeholder="Describe your requirement *"
            rows={4}
            style={styles.textarea}
          />

          <button style={styles.button}>Submit</button>
        </motion.form>
      </motion.div>
    </section>
    <Footer/>
    </div>
  );
}


const styles = {
  page: {
    padding: "80px 24px",
    maxWidth: 1200,
    margin: "0 auto",
    color: "#e5e7eb",
  },

  header: {
    textAlign: "center",
    marginBottom: 70,
  },

  title: {
    fontSize: "2.8rem",
    color: "#fff",
  },

  subtitle: {
    maxWidth: 700,
    margin: "16px auto 0",
    color: "#bae6fd",
    lineHeight: 1.6,
  },

  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
    gap: 40,
    background: "rgba(0,0,0,0.45)",
    borderRadius: 28,
    padding: 40,
    border: "1px solid rgba(255,255,255,0.08)",
  },

  left: {
    background:
      "linear-gradient(180deg, rgba(14,165,233,0.95), rgba(2,132,199,0.95))",
    borderRadius: 24,
    padding: 36,
  },

  leftTitle: {
    fontSize: "1.9rem",
    color: "#fff",
    marginBottom: 16,
  },

  leftText: {
    color: "#e0f2fe",
    lineHeight: 1.7,
    marginBottom: 28,
  },

  infoCard: {
    display: "flex",
    gap: 14,
    alignItems: "center",
    background: "rgba(255,255,255,0.15)",
    padding: 16,
    borderRadius: 14,
    marginBottom: 16,
    color: "#fff",
  },

  icon: {
    fontSize: "1.5rem",
  },

  form: {
    background: "rgba(7,16,46,0.9)",
    borderRadius: 24,
    padding: 36,
    border: "1px solid #334155",
  },

  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 16,
  },

  input: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid #475569",
    color: "#fff",
    marginBottom: 16,
    outline: "none",
  },

  textarea: {
    width: "100%",
    padding: "14px 16px",
    borderRadius: 12,
    background: "rgba(255,255,255,0.05)",
    border: "1px solid #475569",
    color: "#fff",
    marginBottom: 22,
    outline: "none",
    resize: "none",
  },

  button: {
    width: "100%",
    padding: "14px",
    borderRadius: 14,
    border: "none",
    background: "#0ea5e9",
    color: "#fff",
    fontSize: "1rem",
    cursor: "pointer",
  },
};
