import Footers from "../Footers";
import hr2026 from "../../Assets/blg1.jpg";

const Blogs1 = () => {
  return (
    <>
      <div style={styles.container}>
        <img src={hr2026} alt="HR 2026" style={styles.hero} />

        <h1>HR in 2026: How People, Technology, and Work Have Truly Changed</h1>

        <p>
          HR has moved far beyond policies, payroll, and paperwork. It now sits
          at the heart of how organizations grow, adapt, and take care of their people.
        </p>

        <h2>HR Has Become More Human</h2>
        <p>
          Technology automation allows HR teams to focus on career growth,
          wellbeing, and meaningful engagement.
        </p>

        <h2>AI Is Now a Silent Partner</h2>
        <p>
          AI helps shortlist candidates, answer employee queries, detect burnout,
          and highlight skill gaps — supporting faster and smarter decisions.
        </p>

        <h2>Employee Experience Drives Everything</h2>
        <p>
          Employees expect flexibility, growth, and purpose. HR now designs
          personalized employee journeys from onboarding to exit.
        </p>

        <h2>Hybrid Work Is the New Normal</h2>
        <p>
          Success is measured by outcomes, not hours. Structured hybrid systems
          ensure fairness and performance clarity.
        </p>

        <h2>Final Thoughts</h2>
        <p>
          HR in 2026 is smarter, empathetic, and deeply connected to business success.
        </p>
      </div>

      <Footers />
    </>
  );
};

const styles = {
  container: { padding: "70px 15%", lineHeight: "1.8" },
  hero: {
    width: "100%",
    height: "400px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "40px",
  },
};

export default Blogs1;
