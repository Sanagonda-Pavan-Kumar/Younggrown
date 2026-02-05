import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Footer from "./Footers";
import { HiOutlineEnvelope, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import { supabase } from "../lib/supabase"; // <-- Supabase client import

export default function ContactUs() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    email: "",
    mobile: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await supabase
      .from("YG_Connections")
      .insert([formData]);

    if (error) {
      alert("Something went wrong ❌");
      console.error(error);
    } else {
      alert("Thank you! We’ll contact you soon ✅");
      setFormData({
        first_name: "",
        last_name: "",
        company: "",
        email: "",
        mobile: "",
        message: "",
      });
    }

    setLoading(false);
  };

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

          {/* --- LEFT SIDE --- */}
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
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={styles.form}
          >
            <div style={styles.row}>
              <input
                name="first_name"
                placeholder="First Name *"
                style={styles.input}
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <input
                name="last_name"
                placeholder="Last Name *"
                style={styles.input}
                value={formData.last_name}
                onChange={handleChange}
                required
              />
            </div>

            <input
              name="company"
              placeholder="Company *"
              style={styles.input}
              value={formData.company}
              onChange={handleChange}
              required
            />
            <input
              name="email"
              type="email"
              placeholder="Email *"
              style={styles.input}
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              name="mobile"
              placeholder="Mobile *"
              style={styles.input}
              value={formData.mobile}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Describe your requirement *"
              rows={4}
              style={styles.textarea}
              value={formData.message}
              onChange={handleChange}
              required
            />

            <motion.button
              type="submit"
              style={styles.button}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
            >
              {loading ? "Submitting..." : "Submit Inquiry"}
            </motion.button>
          </motion.form>
        </motion.div>
      </section>
      <Footer />
    </div>
  );
}

/* ---------------- STYLES (UNCHANGED) ---------------- */

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
  blueText: { color: "#3b82f6" },
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
    background: "rgba(255,255,255,0.02)",
    borderRadius: "40px",
    overflow: "hidden",
    border: "1px solid rgba(255,255,255,0.05)",
  },
  left: {
    background: "linear-gradient(135deg, #1e3a8a 0%, #2563eb 100%)",
    padding: "60px",
  },
  leftTitle: { fontSize: "2.5rem", fontWeight: 800 },
  leftText: { color: "#dbeafe", marginBottom: "40px" },
  infoList: { display: "flex", flexDirection: "column", gap: "20px" },
  infoCard: {
    display: "flex",
    gap: "20px",
    alignItems: "center",
    background: "rgba(255,255,255,0.1)",
    padding: "20px",
    borderRadius: "20px",
  },
  iconBox: { fontSize: "1.8rem", color: "#fff" },
  infoLabel: { fontSize: "0.85rem", color: "#bfdbfe" },
  infoValue: { fontSize: "1.05rem", fontWeight: 600 },
  form: { padding: "60px", backgroundColor: "rgba(15,23,42,0.3)" },
  row: { display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" },
  input: {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    marginBottom: "20px",
  },
  textarea: {
    width: "100%",
    padding: "16px 20px",
    borderRadius: "15px",
    background: "rgba(255,255,255,0.03)",
    border: "1px solid rgba(255,255,255,0.1)",
    color: "#fff",
    marginBottom: "30px",
    resize: "none",
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
  },
};
