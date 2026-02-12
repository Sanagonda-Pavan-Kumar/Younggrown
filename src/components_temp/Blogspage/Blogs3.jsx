import { motion } from "framer-motion";
import Footers from "../Footers";
import hrsaas from "../../Assets/blg3.avif";

const Blogs3 = () => {
  return (
    <>
      <div style={styles.container}>
        
        {/* Hero Image */}
        <motion.img
          src={hrsaas}
          alt="HR SaaS"
          style={styles.hero}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />

        {/* Title */}
        <motion.h1
          style={styles.title}
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          The Growth of HR SaaS
        </motion.h1>

        <motion.p
          style={styles.intro}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          HR SaaS has transformed HR from a back-office function into a
          strategic growth partner. Modern organizations now rely on cloud
          platforms to drive performance, engagement, and workforce intelligence.
        </motion.p>

        {/* Section 1 */}
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>What Is HR SaaS?</h2>
          <p>
            HR SaaS (Software as a Service) refers to cloud-based HR systems
            that manage recruiting, payroll, performance, learning, and
            employee engagement — all in one integrated ecosystem.
          </p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Why It’s Growing Rapidly</h2>
          <ul>
            <li>Remote & Hybrid Workforce Support</li>
            <li>Real-Time Workforce Insights & Analytics</li>
            <li>Automation of Manual HR Processes</li>
            <li>Scalable & Secure Cloud Infrastructure</li>
          </ul>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Leading HR SaaS Platforms</h2>
          <p>
            Companies like <strong>Workday</strong>, 
            <strong> SAP SuccessFactors</strong>, 
            <strong> BambooHR</strong>, and 
            <strong> Zoho People</strong> are redefining how organizations 
            manage people, performance, and productivity globally.
          </p>
        </motion.div>

        {/* Section 4 */}
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Business Impact</h2>
          <ul>
            <li>Improved HR Efficiency & Cost Optimization</li>
            <li>Better Hiring & Retention Strategies</li>
            <li>Enhanced Employee Experience</li>
            <li>Data-Driven Leadership Decisions</li>
          </ul>
        </motion.div>

        {/* Final */}
        <motion.div
          style={styles.section}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2>Future of HR SaaS</h2>
          <p>
            AI-powered analytics, predictive workforce planning, mobile-first
            platforms, and seamless API integrations will define the next
            generation of HR technology.
          </p>
        </motion.div>

      </div>

      <Footers />
    </>
  );
};

const styles = {
  pageWrapper: {
    // background: "#3b82f6",
    minHeight: "100vh",
    paddingBottom: "40px"
  },

  container: {
    padding: "70px 15%",
    lineHeight: "1.8",
    // background: "#3b82f6",
    borderRadius: "20px",
    boxShadow: "0 10px 40px rgba(0,0,0,0.08)"
  },

  hero: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "40px",
  },
};
export default Blogs3;