import React from "react";
import { Link } from "react-router-dom";
import { 
  FiMail, FiPhone, FiMapPin, FiLinkedin, FiTwitter, FiInstagram, 
  FiChevronRight, FiArrowUpCircle 
} from "react-icons/fi";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={styles.footer}>
      {/* Background Glow Effect */}
      <div style={styles.glow}></div>

      <div style={styles.container}>
        {/* Brand Section */}
        <div style={styles.brandSection}>
          <h2 style={styles.logo} onClick={scrollToTop}>Youngrown</h2>
          <p style={styles.brandText}>
            Elevating HR experiences through intelligent automation and 
            people-centric technology. Grow faster, manage better.
          </p>
          <div style={styles.socialLinks}>
            <a href="#" style={styles.socialIcon}><FiLinkedin /></a>
            <a href="https://x.com/YoungrownAi" style={styles.socialIcon}><FiTwitter /></a>
            <a href="#" style={styles.socialIcon}><FiInstagram /></a>
          </div>
        </div>

        {/* Links Grid */}
        <div style={styles.linksWrapper}>
          {/* Company */}
          <div style={styles.linkGroup}>
            <h4 style={styles.heading}>Company</h4>
            <ul style={styles.list}>
              <FooterLink to="/about">About Us</FooterLink>
              <FooterLink to="/careers">Careers</FooterLink>
              <FooterLink to="/contactus">Contact Us</FooterLink>
              <FooterLink to="/pricing">Pricing Plans</FooterLink>
            </ul>
          </div>

          {/* Products - From your Navbar */}
          <div style={styles.linkGroup}>
            <h4 style={styles.heading}>Products</h4>
            <div style={styles.doubleList}>
              <ul style={styles.list}>
                <FooterLink to="/employeemanagement">Employee Mgmt</FooterLink>
                <FooterLink to="/recruitment">Recruitment</FooterLink>
                <FooterLink to="/AttendanceManagement">Attendance</FooterLink>
                <FooterLink to="/payroll">Payroll</FooterLink>
                <FooterLink to="/performancemanagement">Performance</FooterLink>
                <FooterLink to="/reportsanalytics">Reports</FooterLink>
              </ul>
              <ul style={styles.list}>
                <FooterLink to="/assetManagement">Assets</FooterLink>
                <FooterLink to="/chat">Internal Chat</FooterLink>
                <FooterLink to="/Support">Help Desk</FooterLink>
                <FooterLink to="/RewardsRecognition">Rewards</FooterLink>
                <FooterLink to="/activitytracker">Activity</FooterLink>
              </ul>
            </div>
          </div>

          {/* Services - From your Navbar */}
          <div style={styles.linkGroup}>
            <h4 style={styles.heading}>Services</h4>
            <ul style={styles.list}>
              <FooterLink to="/ITStaffing">IT Staffing</FooterLink>
              <FooterLink to="/NonTechStaffing">Non-IT Staffing</FooterLink>
              <FooterLink to="/Training">Corporate Training</FooterLink>
              <FooterLink to="/Freelancing">Freelancing</FooterLink>
            </ul>
          </div>
        </div>

        {/* Contact Section */}
        <div style={styles.contactSection}>
          <h4 style={styles.heading}>Reach Us</h4>
          <div style={styles.contactCard}>
            <p style={styles.contactItem}><FiMail style={styles.icon}/> youngrownai@gmail.com</p>
            <p style={styles.contactItem}><FiPhone style={styles.icon}/> +91 7569751097</p>
            <p style={styles.contactItem}><FiMapPin style={styles.icon}/> Hyderabad, India</p>
          </div>
         
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={styles.bottomBar}>
        <div style={styles.bottomContent}>
          <span>© {new Date().getFullYear()} Younggrown. Built with ❤️ in India.</span>
          <div style={styles.legalLinks}>
            <Link to="/privacy" style={styles.legalLink}>Privacy Policy</Link>
            <Link to="/terms" style={styles.legalLink}>Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Helper component for Hover Effect
function FooterLink({ to, children }) {
  const [isHovered, setIsHovered] = React.useState(false);
  return (
    <li>
      <Link 
        to={to} 
        style={{
          ...styles.link,
          color: isHovered ? "#3b82f6" : "#94a3b8",
          transform: isHovered ? "translateX(5px)" : "translateX(0)"
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <FiChevronRight style={{fontSize: '0.8rem', opacity: isHovered ? 1 : 0, transition: '0.3s'}} />
        {children}
      </Link>
    </li>
  );
}

const styles = {
  footer: {
    marginTop: 100,
    backgroundColor: "#020617",
    position: "relative",
    overflow: "hidden",
    borderTop: "1px solid rgba(59, 130, 246, 0.2)",
  },
  glow: {
    position: "absolute",
    top: -150,
    right: -150,
    width: 300,
    height: 300,
    background: "rgba(59, 130, 246, 0.1)",
    filter: "blur(100px)",
    borderRadius: "50%",
    pointerEvents: "none",
  },
  container: {
    maxWidth: 1280,
    margin: "0 auto",
    padding: "80px 5%",
    display: "grid",
    gridTemplateColumns: "1fr 2fr 0.8fr",
    gap: "60px",
  },
  brandSection: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  logo: {
    color: "#fff",
    fontSize: "1.8rem",
    fontWeight: 800,
    cursor: "pointer",
    margin: 0,
    background: "linear-gradient(to right, #fff, #3b82f6)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
  },
  brandText: {
    color: "#94a3b8",
    fontSize: "0.95rem",
    lineHeight: 1.8,
  },
  socialLinks: {
    display: "flex",
    gap: "15px",
    marginTop: "10px",
  },
  socialIcon: {
    color: "#94a3b8",
    fontSize: "1.2rem",
    transition: "0.3s",
    "hover": { color: "#3b82f6" }
  },
  linksWrapper: {
    display: "grid",
    gridTemplateColumns: "0.6fr 1.4fr 0.8fr",
    gap: "40px",
  },
  linkGroup: {},
  heading: {
    color: "#fff",
    fontSize: "1rem",
    fontWeight: 600,
    marginBottom: "25px",
    textTransform: "uppercase",
    letterSpacing: "1px",
  },
  list: {
    listStyle: "none",
    padding: 0,
    margin: 0,
    display: "flex",
    flexDirection: "column",
    gap: "12px",
  },
  doubleList: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "20px",
  },
  link: {
    textDecoration: "none",
    fontSize: "0.9rem",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    transition: "0.3s all ease",
  },
  contactSection: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  contactCard: {
    backgroundColor: "rgba(255, 255, 255, 0.03)",
    padding: "20px",
    borderRadius: "16px",
    border: "1px solid rgba(255, 255, 255, 0.05)",
  },
  contactItem: {
    fontSize: "0.9rem",
    color: "#cbd5e1",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "15px",
  },
  icon: {
    color: "#3b82f6",
  },
  scrollBtn: {
    background: "none",
    border: "1px solid rgba(59, 130, 246, 0.3)",
    color: "#94a3b8",
    padding: "10px",
    borderRadius: "10px",
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    transition: "0.3s",
  },
  bottomBar: {
    borderTop: "1px solid rgba(255, 255, 255, 0.05)",
    padding: "30px 5%",
  },
  bottomContent: {
    maxWidth: 1280,
    margin: "0 auto",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    color: "#64748b",
    fontSize: "0.85rem",
  },
  legalLinks: {
    display: "flex",
    gap: "20px",
  },
  legalLink: {
    color: "#64748b",
    textDecoration: "none",
    transition: "0.3s",
  }
};