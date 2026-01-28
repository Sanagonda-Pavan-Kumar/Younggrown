import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footers";

export default function Services() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div>
    <section style={styles.page}>
      <h1 style={styles.pageTitle}>Our Services</h1>
      <p style={styles.pageSubtitle}>
        Flexible workforce and capability solutions designed to help
        organizations scale efficiently and operate with confidence.
      </p>

      {services.map((s, i) => (
        <div
          key={s.id}
          id={s.id}
          style={{
            ...styles.section,
            flexDirection: i % 2 === 0 ? "row" : "row-reverse",
          }}
        >
          <div style={styles.imageBox}>
            <span style={styles.icon}>{s.icon}</span>
            <p style={styles.imageLabel}>{s.label}</p>
          </div>

          <div style={styles.content}>
            <h2 style={styles.title}>{s.title}</h2>
            <p style={styles.text}>{s.description}</p>
          </div>
        </div>
       
      ))}
    </section>
     <Footer />
    </div>
  );
}


const services = [
  {
    id: "it-staffing",
    title: "IT Staffing",
    label: "Technology Talent Solutions",
    icon: "💻",
    description:
      "Our IT staffing services help organizations access skilled technology professionals based on their project and business requirements. We support short-term, long-term, and project-based hiring needs across various IT domains. Our approach focuses on understanding technical requirements, team structure, and delivery timelines to connect businesses with the right talent. Whether organizations need support for ongoing operations or specialized initiatives, we provide flexible staffing solutions aligned with business goals and scalability needs.",
  },
  {
    id: "non-it-staffing",
    title: "Non-IT Staffing",
    label: "Business & Operations Roles",
    icon: "🏢",
    description:
      "Our non-IT staffing services support businesses in sourcing qualified professionals across multiple functional areas including HR, finance, sales, operations, administration, and support roles. By understanding organizational culture and role expectations, we work toward placing candidates who align with both skills and work values. Our goal is to help organizations build dependable teams that strengthen daily operations and contribute to long-term growth.",
  },
  {
    id: "training-certification",
    title: "Training & Certification",
    label: "Skill Development & Growth",
    icon: "🎓",
    description:
      "Our training and certification programs are designed to support continuous learning and professional development. We provide structured, industry-relevant training that helps individuals and teams enhance skills, improve performance, and stay prepared for evolving roles. By aligning learning outcomes with business needs, we help organizations strengthen workforce capabilities while supporting career growth and long-term success.",
  },
  {
    id: "freelancing",
    title: "Freelancing",
    label: "Flexible Project Talent",
    icon: "🌍",
    description:
      "Our freelancing services connect organizations with experienced professionals for project-based and remote work opportunities across IT and non-IT domains. This flexible engagement model allows businesses to access specialized expertise when needed while optimizing costs and timelines. We focus on building a reliable talent network that benefits both organizations and professionals, ensuring quality delivery and efficient collaboration.",
  },
];


const styles = {
  page: {
    padding: "120px 20px",
    maxWidth: 1200,
    margin: "0 auto",
    color: "#e5e7eb",
  },
  pageTitle: {
    textAlign: "center",
    fontSize: "2.6rem",
    color: "#ffffff",
  },
  pageSubtitle: {
    textAlign: "center",
    maxWidth: 720,
    margin: "20px auto 90px",
    color: "#c7d2fe",
    lineHeight: 1.6,
  },
  section: {
    display: "flex",
    gap: 50,
    marginBottom: 100,
    alignItems: "center",
    flexWrap: "wrap",
    scrollMarginTop: 120,
  },
  imageBox: {
    flex: "1 1 320px",
    minHeight: 240,
    borderRadius: 22,
    background:
      "radial-gradient(circle at top, rgba(56,189,248,0.25), rgba(7,16,46,0.95))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 20px 40px rgba(0,0,0,0.35)",
  },
  icon: {
    fontSize: "3.2rem",
    marginBottom: 10,
  },
  imageLabel: {
    color: "#c7d2fe",
    fontSize: "0.95rem",
  },
  content: {
    flex: "1 1 440px",
  },
  title: {
    fontSize: "1.9rem",
    color: "#ffffff",
    marginBottom: 14,
  },
  text: {
    lineHeight: 1.75,
    color: "#cbd5f5",
    fontSize: "1rem",
  },
};
