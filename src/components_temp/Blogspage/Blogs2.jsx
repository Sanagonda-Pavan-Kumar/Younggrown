import { motion } from "framer-motion";
import Footers from "../Footers";
import aihr from "../../Assets/blg2.jpg";

const Blogs2 = () => {
  return (
    <>
      <div style={styles.pageWrapper}>
        <motion.div
          style={styles.container}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.img
            src={aihr}
            alt="AI in HR"
            style={styles.hero}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8 }}
            whileHover={{ scale: 1.03 }}
          />

          <motion.h1
            style={styles.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            AI in HR: Transforming Workforce Management
          </motion.h1>

          <motion.p
            style={styles.intro}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            AI is now an essential capability shaping how organizations manage
            people, performance, and growth.
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
              <h2>{section.title}</h2>
              <p>{section.content}</p>
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
    title: "From Administrative to Intelligent HR",
    content:
      "Automation handles routine tasks, allowing HR teams to focus on strategy, culture, and employee engagement.",
  },
  {
    title: "Smarter Decision-Making",
    content:
      "Real-time analytics help identify patterns in performance, productivity, and attrition — enabling proactive workforce planning.",
  },
  {
    title: "Enhancing Employee Experience",
    content:
      "AI-powered chatbots and self-service systems provide instant support, transparency, and personalized employee journeys.",
  },
  {
    title: "Trust & Responsible AI",
    content:
      "Ethical AI ensures fairness in hiring, compliance with regulations, and strong data security practices.",
  },
  {
    title: "Future of AI in HR",
    content:
      "AI strengthens HR — making it more strategic, predictive, and human-centric for the modern digital workplace.",
  },
];

const styles = {
  pageWrapper: {
    //  background: "linear-gradient(135deg, #eef2f7, #e3ebf6)",
    minHeight: "100vh",
    padding: "60px 0",
  },

  container: {
    width: "70%",
    margin: "auto",
    padding: "60px",
    lineHeight: "1.8",
    // backgroundColor: "#ffffff",
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
    color: "#1a1a1a",
  },

  intro: {
    fontSize: "18px",
    marginBottom: "30px",
    color: "#555",
  },

  section: {
    marginBottom: "30px",
  },
};

export default Blogs2;
