import React, { useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "./Footers";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div style={styles.wrapper}>
      <section style={styles.page}>
        
        {/* --- HEADER SECTION --- */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={styles.header}
        >
          <h1 style={styles.title}>
            Contact <span style={styles.blueText}>Us</span>
          </h1>
          <p style={styles.subtitle}>
            We’d love to hear from you. Let’s talk about how we can help 
            transform your HR operations with intelligence.
          </p>
        </motion.div>

        {/* --- MAIN CONTAINER --- */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={styles.container}
        >
          
          {/* --- LEFT SIDE: INFO --- */}
          <div style={styles.left}>
            <h2 style={styles.leftTitle}>We are here for you</h2>
            <p style={styles.leftText}>
              Our team will get in touch with you within 24 hours to understand
              your requirements and suggest the best solutions.
            </p>

            <div style={styles.infoList}>
              <div style={styles.infoCard}>
                <div style={styles.iconBox}><HiOutlineEnvelope /></div>
                <div>
                  <strong style={styles.infoLabel}>Email Us</strong>
                  <p style={styles.infoValue}>hello@yourcompany.com</p>
                </div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.iconBox}><HiOutlinePhone /></div>
                <div>
                  <strong style={styles.infoLabel}>Contact</strong>
                  <p style={styles.infoValue}>+91 78620 34603</p>
                </div>
              </div>

              <div style={styles.infoCard}>
                <div style={styles.iconBox}><HiOutlineMapPin /></div>
                <div>
                  <strong style={styles.infoLabel}>Location</strong>
                  <p style={styles.infoValue}>Hyderabad, India</p>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT SIDE: FORM --- */}
          <motion.form
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
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

            <motion.button 
              style={styles.button}
              whileHover={{ scale: 1.02, backgroundColor: "#0284c7" }}
              whileTap={{ scale: 0.98 }}
            >
              Submit Inquiry
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
      <Footer/>
    </div>
  );
}

const styles = {
  wrapper: {
    backgroundColor: "#020617",
    minHeight: "100vh",
  },
  page: {
    padding: "100px 8%",
    maxWidth: "1400px",
    margin: "0 auto",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
  },
  header: {
    textAlign: "center",
    marginBottom: 80,
  },
  title: {
    fontSize: "4rem",
    fontWeight: 900,
    marginBottom: "20px",
  },
  blueText: {
    color: "#3b82f6",
  },
  subtitle: {
    maxWidth: 700,
    margin: "0 auto",
    color: "#94a3b8",
    fontSize: "1.2rem",
    lineHeight: 1.8,
  },
  container: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
    gap: 0,
    background: "rgba(255,255,255,0.02)",
    borderRadius: "40px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.05)",
    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.5)",
  },
  left: {
    background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
    padding: "60px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
  leftTitle: {
    fontSize: "2.5rem",
    fontWeight: 800,
    marginBottom: "20px",
    lineHeight: 1.2,
  },
  leftText: {
    color: "#dbeafe",
    fontSize: "1.1rem",
    lineHeight: 1.7,
    marginBottom: "40px",
  },
  infoList: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  infoCard: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    background: "rgba(255,255,255,0.1)",
    padding: "20px",
    borderRadius: "20px",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(255,255,255,0.1)",
  },
  iconBox: {
    fontSize: "1.8rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#fff",
  },
  infoLabel: {
    display: "block",
    fontSize: "0.85rem",
    textTransform: "uppercase",
    letterSpacing: "1px",
    color: "#bfdbfe",
    marginBottom: "4px",
  },
  infoValue: {
    fontSize: "1.05rem",
    fontWeight: 600,
  },
  form: {
    padding: "60px",
    backgroundColor: "rgba(15, 23, 42, 0.3)",
  },
  row: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  input: {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    marginBottom: "20px",
    outline: "none",
    fontSize: "1rem",
    transition: "0.3s",
  },
  textarea: {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    marginBottom: "30px",
    outline: "none",
    fontSize: "1rem",
    resize: "none",
    transition: "0.3s",
  },
  button: {
    width: "100%",
    padding: "18px",
    borderRadius: "15px",
    border: "none",
    background: "#3b82f6",
    color: "#fff",
    fontSize: "1.1rem",
    fontWeight: 700,
    cursor: "pointer",
    boxShadow: "0 10px 15px -3px rgba(59, 130, 246, 0.3)",
  },
};