import { motion } from "framer-motion";
import Footers from "../Footers";
import hr2026 from "../../Assets/blg1.jpg";

const Blogs1 = () => {
  return (
    <>
      <div style={styles.pageWrapper}>
        <motion.div
          style={styles.container}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Hero Image */}
          <motion.img
            src={hr2026}
            alt="HR 2026"
            style={styles.hero}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          />

          {/* Title */}
          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            HR in 2026: How People, Technology, and Work Have Truly Changed
          </motion.h1>

          {/* Intro */}
          <motion.p
            style={styles.paragraph}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            HR has moved far beyond policies, payroll, and paperwork. It now sits
            at the heart of how organizations grow, adapt, and take care of their people.
          </motion.p>

          {sections.map((section, index) => (
            <motion.section
              key={index}
              style={styles.section}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 style={styles.sectionTitle}>{section.title}</h2>
              <p style={styles.paragraph}>{section.content}</p>
            </motion.section>
          ))}
        </motion.div>
      </div>

      <Footers />
    </>
  );
};

const sections = [
  {
    title: "HR Has Become More Human",
    content:
      "Technology automation allows HR teams to focus on career growth, wellbeing, and meaningful engagement.",
  },
  {
    title: "AI Is Now a Silent Partner",
    content:
      "AI helps shortlist candidates, answer employee queries, detect burnout, and highlight skill gaps — supporting faster and smarter decisions.",
  },
  {
    title: "Employee Experience Drives Everything",
    content:
      "Employees expect flexibility, growth, and purpose. HR now designs personalized employee journeys from onboarding to exit.",
  },
  {
    title: "Hybrid Work Is the New Normal",
    content:
      "Success is measured by outcomes, not hours. Structured hybrid systems ensure fairness and performance clarity.",
  },
  {
    title: "Final Thoughts",
    content:
      "HR in 2026 is smarter, empathetic, and deeply connected to business success.",
  },
];

/* ===================== STYLES ===================== */

const styles = {
  pageWrapper: {
    minHeight: "100vh",
    padding: "60px 0",
  },

  container: {
    width: "70%",
    margin: "auto",
    padding: "60px",
    lineHeight: "1.8",
    borderRadius: "20px",
    boxShadow: "0 15px 40px rgba(0,0,0,0.08)",
  },

  hero: {
    width: "100%",
    height: "420px",
    objectFit: "cover",
    borderRadius: "18px",
    marginBottom: "40px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
    cursor: "pointer",
  },

  title: {
    fontSize: "36px",
    marginBottom: "20px",
    fontWeight: "700",
  },

  paragraph: {
    fontSize: "18px",
    marginBottom: "30px",
  },

  sectionTitle: {
    fontSize: "22px",
    fontWeight: "600",
    marginBottom: "10px",
  },

  section: {
    marginBottom: "30px",
  },
};

export default Blogs1;