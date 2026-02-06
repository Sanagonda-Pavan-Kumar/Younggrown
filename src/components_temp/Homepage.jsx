import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom"; // Import Link for navigation
import Hero from "./Hero";
import HomeSection from "./HomeSection";
import Features from "./Features";
import Footer from "./Footers";
import Section from "./Section";
export default function HomePage() {
  return (
    <main >
<Section>   <Hero /></Section>
   
<Section>   <HomeSection />
</Section>
    
      
<Section>    <Features />
</Section>
    

      {/* --- CTA SECTION --- */}
      <CTASection />

      <Footer />
    </main>
  );
}

// --- High-Impact CTA Component ---
const CTASection = () => {
  return (
    <section style={styles.ctaWrapper}>
      <motion.div 
        style={styles.ctaCard}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
      >
        <h2 style={styles.title}>
          Ready to try <span style={styles.blueText}>Younggrown?</span>
        </h2>
        <p style={styles.subtitle}>
          Start your free trial or book a personalized demo today. 
          Our team is ready to help you get started.
        </p>
        
        {/* Wrap button in Link to navigate to Contact Us */}
        <Link to="/contactUs" style={{ textDecoration: 'none' }}>
          <motion.button
            style={styles.bigButton}
            whileHover={{ 
              scale: 1.05, 
              backgroundColor: "#2563eb",
              boxShadow: "0 20px 40px rgba(59, 130, 246, 0.4)" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            Connect With Us
          </motion.button>
        </Link>
        
        <p style={styles.footerNote}>Typically responds within 24 hours.</p>
      </motion.div>
    </section>
  );
};

const styles = {
  ctaWrapper: {
    padding: "100px 8%",
   
    fontFamily: "'Inter', sans-serif",
  },
  ctaCard: {
    background: "linear-gradient(135deg, rgba(30, 58, 138, 0.2) 0%, rgba(15, 23, 42, 0.9) 100%)",
    borderRadius: "40px",
    padding: "80px 20px",
    textAlign: "center",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    maxWidth: "1200px",
    margin: "0 auto",
  },
  title: {
    fontSize: "3.5rem",
    fontWeight: 900,
    color: "#fff",
    marginBottom: "20px",
    letterSpacing: "-0.02em",
  },
  blueText: {
    color: "#3b82f6",
  },
  subtitle: {
    fontSize: "1.25rem",
    color: "#94a3b8",
    maxWidth: "600px",
    margin: "0 auto 40px",
    lineHeight: 1.6,
  },
  bigButton: {
    background: "#3b82f6",
    color: "#fff",
    border: "none",
    padding: "20px 60px",
    borderRadius: "16px",
    fontSize: "1.2rem",
    fontWeight: 800,
    cursor: "pointer",
    display: "inline-block",
  },
  footerNote: {
    marginTop: "25px",
    fontSize: "0.95rem",
    color: "#475569",
    fontWeight: 500,
  },
};