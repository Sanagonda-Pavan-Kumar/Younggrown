import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Footers from "../Footers";

import hr2026 from "../../Assets/blg1.jpg";
import aihr from "../../Assets/blg2.jpg";
import hrsaas from "../../Assets/blg3.avif";

const Blogs = () => {
  return (
    <>
      <div style={styles.section}>
        <h2 style={styles.heading}>Insights & Resources</h2>

        <div style={styles.column}>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Link to="/bloghr2026" style={styles.card}>
              <img src={hr2026} alt="HR 2026" style={styles.image} />
              <div style={styles.cardContent}>
                <h3>HR in 2026</h3>
                <p>How People, Technology, and Work Have Truly Changed</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Link to="/blogaihr" style={styles.card}>
              <img src={aihr} alt="AI in HR" style={styles.image} />
              <div style={styles.cardContent}>
                <h3>AI in HR</h3>
                <p>Transforming Workforce Management with Intelligence</p>
              </div>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Link to="/bloghrsaas" style={styles.card}>
              <img src={hrsaas} alt="HR SaaS" style={styles.image} />
              <div style={styles.cardContent}>
                <h3>Growth of HR SaaS</h3>
                <p>Why HR Software Is Shaping the Future of Work</p>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>

      <Footers />
    </>
  );
};

const styles = {
  section: { padding: "80px 10%" },
  heading: { textAlign: "center", fontSize: "36px", marginBottom: "50px" },

  column: {
    display: "flex",
    flexDirection: "column",
    gap: "40px",
  },

  card: {
    display: "flex",
    alignItems: "center",
    gap: "30px",
    background: "#fff",
    borderRadius: "15px",
    textDecoration: "none",
    color: "#000",
    boxShadow: "0 8px 25px rgba(0,0,0,0.08)",
    overflow: "hidden",
    padding: "20px",
  },

  image: {
    width: "350px",
    height: "220px",
    objectFit: "cover",
    borderRadius: "10px",
  },

  cardContent: { flex: 1 },
};

export default Blogs;
