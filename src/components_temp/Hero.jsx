import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom"; // Import the hook

function Hero() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <section style={styles.heroContainer}>
      <motion.div 
        style={styles.heroContent}
        initial="hidden"
        animate="visible"
        variants={fadeUp}
      >
        <h1 style={styles.title}>
          <span style={styles.blueText}>Great Culture.</span><br />
          Better Work.<br />
          <span style={styles.blueText}>Happy People.</span>
        </h1>

        <p style={styles.subtitle}>
          The easiest way to support your team, simplify your daily tasks, 
          and build a workplace where everyone thrives.
        </p>
        
        <div style={{ alignContent: 'center', paddingLeft: '80px' }}>
          <div style={styles.heroButtons}>
            <motion.button 
              style={styles.btnPrimary}
              whileHover={{ scale: 1.05, backgroundColor: "#2563eb" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/")} // Navigate to home
            >
              Get Started
            </motion.button>
            <motion.button 
              style={styles.btnOutline}
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => navigate("/ContactUs")} // Navigate to ContactUs
            >
              Book a Demo
            </motion.button>
          </div>
        </div>
      </motion.div>

      <motion.div 
        style={styles.heroImageContainer}
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <img
          src="/banner.png"
          alt="HR Success Illustration"
          style={styles.image}
        />
      </motion.div>
    </section>
  );
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const styles = {
  // heroContainer: {
  //   display: "flex",
  //   alignItems: "center",
  //   justifyContent: "space-between",
  //   padding: "120px 8%",
  //   minHeight: "80vh",
  //   gap: "60px",
  //   flexWrap: "wrap",
  //   fontFamily: "'Inter', sans-serif",
  //   overflow: "hidden",
  // },
  heroContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    minHeight: "auto",
padding: "40px 8% 40px",   
    gap: "60px",
    flexWrap: "wrap",
    fontFamily: "'Inter', sans-serif",
    overflow: "hidden",
   
  },
  heroContent: {
    flex: "1 1 500px",
  },
  title: {
    fontSize: "4.2rem",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#fff",
    marginBottom: "20px",
    letterSpacing: "-0.04em",
  },
  blueText: {
    color: "#3b82f6",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#94a3b8",
    lineHeight: 1.6,
    marginBottom: "40px",
    maxWidth: "500px",
  },
  heroButtons: {
    display: "flex",
    gap: "20px",
  },
  btnPrimary: {
    padding: "16px 36px",
    borderRadius: "12px",
    border: "none",
    background: "#3b82f6",
    color: "#fff",
    fontWeight: 700,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: "0 10px 20px rgba(59, 130, 246, 0.3)",
  },
  btnOutline: {
    padding: "16px 36px",
    borderRadius: "12px",
    border: "1px solid #1e293b",
    background: "transparent",
    color: "#fff",
    fontWeight: 600,
    fontSize: "1rem",
    cursor: "pointer",
    transition: "0.3s",
  },
  heroImageContainer: {
    flex: "1 1 450px",
    display: "flex",
    justifyContent: "center",
  },
  image: {
    width: "100%",
    maxWidth: "600px",
    height: "auto",
    filter: "drop-shadow(0 20px 50px rgba(0,0,0,0.5))",
  },
};

export default Hero;