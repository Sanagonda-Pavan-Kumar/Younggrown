import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiChevronDown, FiMenu, FiX, FiUsers, FiUserPlus, FiClock,
  FiDollarSign, FiTrendingUp, FiBarChart2, FiBriefcase,
  FiCpu, FiAward, FiActivity, FiHeadphones, FiLayers, FiGlobe,
} from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [scrolled, setScrolled] = useState(false);

  // Ref to track the 5-second timer
  const timeoutRef = useRef(null);

  // Monitor screen size and scroll position
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 1024);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Logic to handle opening the dropdown
  const handleMouseEnter = (menuName) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current); // Cancel the 5s timer if user moves back in
    }
    setOpenDropdown(menuName);
  };

  // Logic to handle the 5-second delay before closing
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200); // 5000 milliseconds = 5 seconds
  };

  const goTo = (path) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    navigate(path);
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  // Dynamic Styles for Glassmorphism
  const navStyle = {
    ...styles.nav,
    backgroundColor: scrolled ? "rgba(2, 6, 23, 0.8)" : "transparent",
    backdropFilter: scrolled ? "blur(12px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255, 255, 255, 0.1)" : "1px solid transparent",
    padding: scrolled ? "12px 8%" : "20px 8%", 
    position: scrolled ? "fixed" : "sticky", // Fixed works best for scrolled states
    top: 0,
    width: "100%",
  };

  return (
    <nav style={navStyle}>
      <span style={styles.logo} onClick={() => goTo("/")}>
        youngrownai
      </span>

      {/* DESKTOP LINKS */}
      {!isMobile && (
        <div style={styles.links}>
          <span style={styles.link} onClick={() => goTo("/")}>Home</span>

          {/* Product Dropdown */}
          <div
            style={styles.dropdown}
            onMouseEnter={() => handleMouseEnter("product")}
            onMouseLeave={handleMouseLeave}
          >
            <span style={styles.link}>
              Product <FiChevronDown style={{transform: openDropdown === 'product' ? 'rotate(180deg)' : 'none', transition: '0.3s'}} />
            </span>

            {openDropdown === "product" && (
              <div style={styles.menu}>
                <div style={styles.menuGrid}>
                  {productItems.map((item) => (
                    <div
                      key={item.label}
                      style={styles.menuItem}
                      onClick={() => goTo(item.path)}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
                        e.currentTarget.style.color = "#FFFFFF";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.backgroundColor = "transparent";
                        e.currentTarget.style.color = "#94a3b8";
                      }}
                    >
                      <item.icon style={{ color: "#3b82f6" }} /> {item.label}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div
            style={styles.dropdown}
            onMouseEnter={() => handleMouseEnter("services")}
            onMouseLeave={handleMouseLeave}
          >
            <span style={styles.link}>
              Services <FiChevronDown style={{transform: openDropdown === 'services' ? 'rotate(180deg)' : 'none', transition: '0.3s'}} />
            </span>

            {openDropdown === "services" && (
              <div style={styles.menu}>
                {serviceItems.map((item) => (
                  <div
                    key={item.label}
                    style={styles.menuItem}
                    onClick={() => goTo(item.path)}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = "rgba(59, 130, 246, 0.1)";
                      e.currentTarget.style.color = "#FFFFFF";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = "transparent";
                      e.currentTarget.style.color = "#94a3b8";
                    }}
                  >
                    <item.icon style={{ color: "#3b82f6" }} /> {item.label}
                  </div>
                ))}
              </div>
            )}
          </div>



          {/* Resources Dropdown */}
<div
  style={styles.dropdown}
  onMouseEnter={() => handleMouseEnter("resources")}
  onMouseLeave={handleMouseLeave}
>
  <span style={styles.link}>
    Resources{" "}
    <FiChevronDown
      style={{
        transform: openDropdown === "resources" ? "rotate(180deg)" : "none",
        transition: "0.3s",
      }}
    />
  </span>

  {openDropdown === "resources" && (
    <div style={styles.menu}>
      {resourceItems.map((item) => (
        <div
          key={item.label}
          style={styles.menuItem}
          onClick={() => goTo(item.path)}
          onMouseEnter={(e) => {
            e.currentTarget.style.backgroundColor =
              "rgba(59, 130, 246, 0.1)";
            e.currentTarget.style.color = "#FFFFFF";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.backgroundColor = "transparent";
            e.currentTarget.style.color = "#94a3b8";
          }}
        >
          <item.icon style={{ color: "#3b82f6" }} /> {item.label}
        </div>
      ))}
    </div>
  )}
</div>


          <span style={styles.link} onClick={() => goTo("/about")}>About</span>
          <span style={styles.link} onClick={() => goTo("/careers")}>Careers</span>
          <span style={styles.link} onClick={() => goTo("/contactus")}>Contact</span>
        </div>
      )}

      {/* MOBILE TOGGLE */}
      {isMobile && (
        <button style={styles.menuBtn} onClick={() => setMobileOpen(true)}>
          <FiMenu size={24} />
        </button>
      )}

      {/* MOBILE OVERLAY */}
      {mobileOpen && (
        <div style={styles.mobileMenu}>
          <div style={styles.mobileHeader}>
            <span style={styles.logo}>Youngrown</span>
            <button style={styles.closeBtn} onClick={() => setMobileOpen(false)}>
              <FiX size={28} />
            </button>
          </div>

          <div style={styles.mobileLinks}>
            <span style={styles.mobileNavLink} onClick={() => goTo("/")}>Home</span>
            <span style={styles.mobileNavLabel}>Products</span>
            <div style={styles.mobileSubGrid}>
              {productItems.map((item) => (
                <span key={item.label} style={styles.mobileSubLink} onClick={() => goTo(item.path)}>{item.label}</span>
              ))}
            </div>
            <span style={styles.mobileNavLabel}>Services</span>
            <div style={styles.mobileSubGrid}>
              {serviceItems.map((item) => (
                <span key={item.label} style={styles.mobileSubLink} onClick={() => goTo(item.path)}>{item.label}</span>
              ))}
            </div>
            


            <span style={styles.mobileNavLabel}>Resources</span>
          <div style={styles.mobileSubGrid}>
          {resourceItems.map((item) => (
    <span
      key={item.label}
      style={styles.mobileSubLink}
      onClick={() => goTo(item.path)}
    >
      {item.label}
    </span>
  ))}
</div>

            <span style={styles.mobileNavLink} onClick={() => goTo("/about")}>About</span>
            <span style={styles.mobileNavLink} onClick={() => goTo("/careers")}>Careers</span>
            <span style={styles.mobileNavLink} onClick={() => goTo("/contactus")}>Contact</span>
          </div>
        </div>
      )}
    </nav>
  );
}

const productItems = [
  { label: "Employee Management", icon: FiUsers, path: "/EmployeeManagement" },
  { label: "Recruitment", icon: FiUserPlus, path: "/Recruitment" },
  { label: "Attendance", icon: FiClock, path: "/AttendanceManagement" },
  { label: "Payroll", icon: FiDollarSign, path: "/payroll" },
  { label: "Performance", icon: FiTrendingUp, path: "/PerformanceManagement" },
  { label: "Reports", icon: FiBarChart2, path: "/ReportsAnalytics" },
  { label: "Assets", icon: FiBriefcase, path: "/AssetManagement" },
  { label: "Chat", icon: FiCpu, path: "/chat" },
  { label: "Support", icon: FiHeadphones, path: "/Support" },
  { label: "Rewards", icon: FiAward, path: "/RewardsRecognition" },
  { label: "Activity", icon: FiActivity, path: "/ActivityTracker" },
];

const serviceItems = [
  { label: "IT Staffing", icon: FiCpu, path: "/ITStaffing" },
  { label: "Non-IT Staffing", icon: FiLayers, path: "/NonTechStaffing" },
  { label: "Training", icon: FiAward, path: "/Training" },
  { label: "Freelancing", icon: FiGlobe, path: "/Freelancing" },
];


const resourceItems = [
  { label: "Blogs", icon: FiBarChart2, path: "/blogs" },
  { label: "Case Studies", icon: FiBriefcase, path: "/casestudies" },
   { label: "AI For HR", icon: FiCpu, path: "/aiforhr" },
  { label: "Simplified HR", icon: FiLayers, path: "/simplifiedhr" },
   { label: "HRMS Deck", icon: FiAward, path: "/hrmsdeck" },
];

const styles = {
  nav: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    zIndex: 1000,
    transition: "all 0.3s ease",
    fontFamily: "'Inter', sans-serif",
    boxSizing: "border-box",
  },
  logo: {
    fontSize: "1.5rem",
    fontWeight: 900,
    cursor: "pointer",
    letterSpacing: "-0.02em",
    color: "#FFFFFF",
  },
  links: {
    display: "flex",
    gap: "32px",
    alignItems: "center",
  },
  link: {
    fontSize: "0.95rem",
    fontWeight: 500,
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: "6px",
    color: "#cbd5e1",
    transition: "0.2s color ease",
  },
  dropdown: {
    position: "relative",
    padding: "10px 0", // Buffer to prevent small gaps causing mouseLeave
  },
  menu: {
    position: "absolute",
    top: "100%",
    left: "-50px",
    backgroundColor: "rgba(15, 23, 42, 0.95)",
    backdropFilter: "blur(10px)",
    border: "1px solid rgba(59, 130, 246, 0.2)",
    borderRadius: "16px",
    minWidth: "280px",
    padding: "12px",
    zIndex: 100,
    boxShadow: "0 20px 50px rgba(0,0,0,0.5)",
  },
  menuGrid: {
    display: "grid",
    gridTemplateColumns: "1fr",
    gap: "2px",
  },
  menuItem: {
    padding: "10px 16px",
    display: "flex",
    alignItems: "center",
    gap: "12px",
    cursor: "pointer",
    borderRadius: "10px",
    fontSize: "0.9rem",
    color: "#94a3b8",
    transition: "0.2s all",
  },
  menuBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    cursor: "pointer",
  },
  mobileMenu: {
    position: "fixed",
    inset: 0,
    backgroundColor: "#020617",
    padding: "24px 8%",
    display: "flex",
    flexDirection: "column",
    zIndex: 2000,
    overflowY: "auto",
  },
  mobileHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "40px",
  },
  closeBtn: {
    background: "none",
    border: "none",
    color: "#fff",
  },
  mobileLinks: {
    display: "flex",
    flexDirection: "column",
    gap: "24px",
  },
  mobileNavLink: {
    fontSize: "1.5rem",
    fontWeight: 700,
    color: "#FFFFFF",
  },
  mobileNavLabel: {
    fontSize: "0.8rem",
    color: "#3b82f6",
    textTransform: "uppercase",
    letterSpacing: "2px",
    fontWeight: 800,
  },
  mobileSubGrid: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "12px",
    paddingBottom: "20px",
    borderBottom: "1px solid rgba(255,255,255,0.05)",
  },
  mobileSubLink: {
    fontSize: "0.9rem",
    color: "#94a3b8",
  },
};