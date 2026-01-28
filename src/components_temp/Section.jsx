import { motion } from "framer-motion";

export default function Section({
  title,
  subtitle,
  children,
  style,
  titleSize = "55px",
}) {
  return (
    <section style={{ ...styles.section, ...style }}>
      <motion.div
        style={styles.content}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {children ? (
          children
        ) : (
          <>
            {title && <h1 style={{ ...styles.title, fontSize: titleSize }}>{title}</h1>}
            {subtitle && <p style={styles.subtitle}>{subtitle}</p>}
          </>
        )}
      </motion.div>
    </section>
  );
}


const styles = {
  section: {
    width: "100%",
    display: "flex",
    justifyContent: "center",  
    alignItems: "center",      
    padding: "100px 24px",
    boxSizing: "border-box",
  },
  content: {
    width: "100%",
       
    textAlign: "center",      
    margin: "0 auto",
  },
  title: {
    color: "#ffffff",
    fontWeight: 700,
    marginBottom: "12px",
  },
  subtitle: {
    color: "#c7d2fe",
    fontSize: "1.05rem",
    maxWidth: "640px",
    margin: "0 auto",
    lineHeight: 1.6,
  },
};
