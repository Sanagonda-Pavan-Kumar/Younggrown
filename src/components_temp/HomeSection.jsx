import React from "react";
import { motion } from "framer-motion";

const HomeSection = () => {
  return (
    <section style={styles.wrapper}>
      <motion.div 
        style={styles.container}
        initial="hidden"
        animate="visible"
        variants={pageVariants}
      >
        <div style={styles.contentSide}>
          <motion.h1 style={styles.title} variants={fadeUp}>
            <span style={styles.blueText}>One platform</span> <br />
            to run all of HR
          </motion.h1>

          <motion.p style={styles.subtitle} variants={fadeUp}>
            Our cloud-based HR platform is designed to help businesses streamline
            their entire HR operation from a single dashboard. From recruitment
            and onboarding to attendance, payroll, compliance, and performance
            management, we bring everything together in one secure and scalable
            solution.
          </motion.p>

          <motion.div style={styles.pointsContainer} variants={stagger}>
            <PointItem 
              text="Built for startups, MSMEs, and growing enterprises, our platform reduces manual work, minimizes errors, and improves productivity." 
            />
            <PointItem 
              text="With easy onboarding, role-based access, and real-time analytics, HR teams gain complete visibility and control over their workforce." 
            />
            <PointItem 
              text="Whether you are hiring rapidly or managing a large team, our HR software adapts to your needs and grows with your business—so you can focus on people, not paperwork." 
            />
          </motion.div>
        </div>

        <motion.div 
          style={styles.visualSide}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img
            src="/imgg.png"  
            alt="HRMS Platform Illustration"
            style={styles.heroImage}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

const PointItem = ({ text }) => (
  <motion.div style={styles.pointRow} variants={fadeUp}>
    <div style={styles.pointDot} />
    <p style={styles.pointText}>{text}</p>
  </motion.div>
);

const pageVariants = { 
  hidden: { opacity: 0 }, 
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } } 
};
const fadeUp = { 
  hidden: { opacity: 0, y: 20 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } 
};
const stagger = { 
  hidden: {}, 
  visible: { transition: { staggerChildren: 0.1 } } 
};


const styles = {
  wrapper: {
   
    padding: "100px 6%",
    fontFamily: "'Inter', sans-serif",
  
    display: "flex",
    alignItems: "center",
    overflow: "hidden",
  },
  container: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "90px",
    flexWrap: "wrap",
   
    margin: "0 auto",
  },
  contentSide: {
    flex: "1 1 500px",
  },
  title: {
    fontSize: "3.8rem",
    fontWeight: 900,
    lineHeight: 1.1,
    color: "#fff",
    marginBottom: "24px",
    letterSpacing: "-0.03em",
  },
  blueText: {
    color: "#3b82f6",
  },
  subtitle: {
    fontSize: "1.2rem",
    color: "#cbd5e1",
    lineHeight: 1.7,
    marginBottom: "40px",
    maxWidth: "680px",
    fontWeight: 400,
  },
  pointsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "28px",
  },
  pointRow: {
    display: "flex",
    gap: "20px",
    alignItems: "flex-start",
  },
  pointDot: {
    width: "12px",
    height: "12px",
    borderRadius: "50%",
    backgroundColor: "#3b82f6",
    marginTop: "8px",
    flexShrink: 0,
    boxShadow: "0 0 15px rgba(59, 130, 246, 0.7)",
  },
  pointText: {
    color: "#94a3b8",
    fontSize: "1.1rem",
    lineHeight: 1.6,
    margin: 0,
    fontWeight: 500,
  },
  visualSide: {
    flex: "1 1 450px",
    display: "flex",
    justifyContent: "center",
    paddingRight: "50px", 
  },
  heroImage: {
    width: "100%",
    maxWidth: "650px",
    height: "auto",
  
  },
};

export default HomeSection;