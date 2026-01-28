import React from "react";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        
        <div style={styles.brand}>
          <h2 style={styles.logo}>Younggrown</h2>
          <p style={styles.brandText}>
            Building thoughtful HR technology to help organizations manage
            people better, grow faster, and work smarter.
          </p>
        </div>

      
        <div style={styles.linksGrid}>
        
          <div>
            <h4 style={styles.heading}>Company</h4>
            <ul style={styles.list}>
              <li><Link to="/about" style={styles.link}>About Us</Link></li>
              <li><Link to="/careers" style={styles.link}>Careers</Link></li>
              <li><Link to="/contactus" style={styles.link}>Contact</Link></li>
              <li><Link to="/pricing" style={styles.link}>Pricing</Link></li>
            </ul>
          </div>

          
          <div>
            <h4 style={styles.heading}>Product</h4>
            <ul style={styles.list}>
              <li><Link to="/product#employee-management" style={styles.link}>Employee Management</Link></li>
              <li><Link to="/product#recruitment" style={styles.link}>Recruitment & ATS</Link></li>
              <li><Link to="/product#attendance" style={styles.link}>Attendance Management</Link></li>
              <li><Link to="/product#payroll" style={styles.link}>Payroll & Compliance</Link></li>
              <li><Link to="/product#performance" style={styles.link}>Performance Management</Link></li>
              <li><Link to="/product#lms" style={styles.link}>Learning Management (LMS)</Link></li>
              <li><Link to="/product#analytics" style={styles.link}>Reports & Analytics</Link></li>
              <li><Link to="/product#assets" style={styles.link}>Asset Management</Link></li>
              <li><Link to="/product#chat" style={styles.link}>Chat</Link></li>
              <li><Link to="/product#support" style={styles.link}>Support</Link></li>
              <li><Link to="/product#rewards" style={styles.link}>Rewards & Recognition</Link></li>
              <li><Link to="/product#activity" style={styles.link}>Activity Tracker</Link></li>
            </ul>
          </div>

         
          <div>
            <h4 style={styles.heading}>Services</h4>
            <ul style={styles.list}>
              <li><Link to="/services#it-staffing" style={styles.link}>IT Staffing</Link></li>
              <li><Link to="/services#non-it-staffing" style={styles.link}>Non-IT Staffing</Link></li>
              <li><Link to="/services#training-certification" style={styles.link}>Training & Certification</Link></li>
              <li><Link to="/services#freelancing" style={styles.link}>Freelancing</Link></li>
            </ul>
          </div>
        </div>

       
        <div style={styles.contact}>
          <h4 style={styles.heading}>Get in Touch</h4>
          <p style={styles.contactItem}>📧 hello@younggrown.com</p>
          <p style={styles.contactItem}>📞 +91 78620 34603</p>
          <p style={styles.contactItem}>📍 Hyderabad, India</p>
        </div>
      </div>

    
      <div style={styles.bottom}>
        © {new Date().getFullYear()} Younggrown. All rights reserved.
      </div>
    </footer>
  );
}



const styles = {
  footer: {
    marginTop: 120,
    background:
      "linear-gradient(180deg, rgba(7,16,46,0.98), rgba(2,6,23,1))",
    borderTop: "1px solid rgba(255,255,255,0.08)",
    color: "#cbd5f5",
  },

  container: {
    maxWidth: 1200,
    margin: "0 auto",
    padding: "70px 24px",
    display: "grid",
    gridTemplateColumns: "1.2fr 2fr 1fr",
    gap: 40,
  },

  brand: {},

  logo: {
    color: "#fff",
    fontSize: "1.6rem",
    marginBottom: 12,
  },

  brandText: {
    fontSize: "0.95rem",
    lineHeight: 1.7,
    color: "#94a3b8",
  },

  linksGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: 30,
  },

  heading: {
    color: "#fff",
    fontSize: "1rem",
    marginBottom: 14,
  },

  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: 10,
    fontSize: "0.9rem",
  },

  link: {
    textDecoration: "none",
    color: "#cbd5f5",
    transition: "color 0.2s ease",
  },

  contact: {},

  contactItem: {
    fontSize: "0.9rem",
    marginBottom: 10,
  },

  bottom: {
    borderTop: "1px solid rgba(255,255,255,0.08)",
    textAlign: "center",
    padding: "18px 12px",
    fontSize: "0.85rem",
    color: "#94a3b8",
  },
};
