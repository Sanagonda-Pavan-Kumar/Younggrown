export default function CaseStudies() {
  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Case Studies</h1>
      <p style={styles.subtitle}>
        Real-world examples of how organizations improved HR efficiency,
        compliance, and employee experience using modern HR solutions.
      </p>

      <div style={styles.container}>
        {/* Card 1 */}
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1581093448798-9bafb14524f9"
            alt="IT Company"
            style={styles.image}
          />
          <h3>IT Services Company</h3>
          <p>
            Streamlined recruitment and onboarding processes, reducing
            time-to-hire by <strong>45%</strong> and improving candidate quality.
          </p>
        </div>

        {/* Card 2 */}
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1560264418-81f01e5cfb28"
            alt="Manufacturing"
            style={styles.image}
          />
          <h3>Manufacturing Enterprise</h3>
          <p>
            Automated payroll and compliance workflows, achieving
            <strong> 99% payroll accuracy</strong> and zero statutory delays.
          </p>
        </div>

        {/* Card 3 */}
        <div style={styles.card}>
          <img
            src="https://images.unsplash.com/photo-1580910051073-5c3685f7be95"
            alt="Healthcare"
            style={styles.image}
          />
          <h3>Healthcare Organization</h3>
          <p>
            Improved employee engagement and retention by
            <strong> 22%</strong> through performance analytics and feedback tools.
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  page: {
    padding: "120px 20px 60px",
    color: "#fff",
    textAlign: "center",
  },
  title: {
    fontSize: "2.6rem",
    fontWeight: 700,
  },
  subtitle: {
    maxWidth: "700px",
    margin: "16px auto 40px",
    color: "#cbd5e1",
  },

  /* ⭐ KEY PART – NOT FULL WIDTH */
  container: {
    maxWidth: "1100px",
    margin: "0 auto",
    display: "flex",
    gap: "30px",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  card: {
    width: "320px",
    background: "rgba(15,23,42,0.75)",
    borderRadius: "16px",
    padding: "20px",
    textAlign: "left",
    border: "1px solid rgba(255,255,255,0.1)",
  },

  image: {
    width: "100%",
    borderRadius: "12px",
    marginBottom: "14px",
  },
};
