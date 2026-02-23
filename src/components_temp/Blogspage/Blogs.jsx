import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footers from "../Footers";

import hr2026 from "../../Assets/blg1.jpg";
import aihr from "../../Assets/blg2.jpg";
import hrsaas from "../../Assets/blg3.avif";

const Blogs = () => {
  return (
    <>
      <div style={styles.wrapper}>
        <motion.section
          style={styles.section}
          initial="hidden"
          animate="visible"
          variants={pageVariants}
        >
          <motion.h2 style={styles.heading} variants={fadeUp}>
            Insights & <span style={styles.blueText}>Resources</span>
          </motion.h2>

          <div style={styles.column}>

            {/* BLOG 1 */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }}>
              <Link to="/bloghr2026" style={styles.card}>
                <div style={styles.imageFrame}>
                  <img src={hr2026} alt="HR 2026" style={styles.image} />
                  <div style={styles.imageOverlay} />
                </div>

                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>HR in 2026</h3>
                  <p style={styles.cardDesc}>
                    How People, Technology, and Work Have Truly Changed
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* BLOG 2 */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }}>
              <Link to="/blogaihr" style={styles.card}>
                <div style={styles.imageFrame}>
                  <img src={aihr} alt="AI in HR" style={styles.image} />
                  <div style={styles.imageOverlay} />
                </div>

                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>AI in HR</h3>
                  <p style={styles.cardDesc}>
                    Transforming Workforce Management with Intelligence
                  </p>
                </div>
              </Link>
            </motion.div>

            {/* BLOG 3 */}
            <motion.div variants={fadeUp} whileHover={{ y: -8 }}>
              <Link to="/bloghrsaas" style={styles.card}>
                <div style={styles.imageFrame}>
                  <img src={hrsaas} alt="HR SaaS" style={styles.image} />
                  <div style={styles.imageOverlay} />
                </div>

                <div style={styles.cardContent}>
                  <h3 style={styles.cardTitle}>Growth of HR SaaS</h3>
                  <p style={styles.cardDesc}>
                    Why HR Software Is Shaping the Future of Work
                  </p>
                </div>
              </Link>
            </motion.div>

          </div>
        </motion.section>
      </div>

      <Footers />
    </>
  );
};

export default Blogs;

/* ---------------- ANIMATIONS ---------------- */

const pageVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

/* ---------------- STYLES ---------------- */

const styles = {
  wrapper: {
    minHeight: "100vh",
  },

  section: {
    padding: "80px 8%",
    color: "#fff",
    fontFamily: "'Inter', sans-serif",
    maxWidth: "1400px",
    margin: "0 auto",
  },

  heading: {
    textAlign: "center",
    fontSize: "2.8rem",
    fontWeight: 700,
    marginBottom: "60px",
  },

  blueText: {
    color: "#3b82f6",
  },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "40px",
    background: "rgba(255,255,255,0.03)", // SAME AS ABOUT PAGE
    border: "1px solid rgba(255,255,255,0.05)",
    borderRadius: "30px",
    textDecoration: "none",
    color: "#fff",
    padding: "40px",
    transition: "all 0.3s ease",
  },

  imageFrame: {
    width: "380px",
    height: "240px",
    borderRadius: "24px",
    overflow: "hidden",
    position: "relative",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },

  imageOverlay: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    background:
      "linear-gradient(rgba(2,6,23,0), rgba(2,6,23,0.4))",
  },

  cardContent: {
    flex: 1,
  },

  cardTitle: {
    fontSize: "1.8rem",
    fontWeight: 700,
    marginBottom: "12px",
  },

  cardDesc: {
    color: "#94a3b8",
    fontSize: "1.05rem",
    lineHeight: 1.6,
  },
};