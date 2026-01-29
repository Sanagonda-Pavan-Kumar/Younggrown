import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  FiChevronDown,
  FiMenu,
  FiX,
  FiUsers,
  FiUserPlus,
  FiClock,
  FiDollarSign,
  FiTrendingUp,
  FiBarChart2,
  FiBriefcase,
  FiCpu,
  FiAward,
  FiActivity,
  FiHeadphones,
  FiLayers,
  FiGlobe,
} from "react-icons/fi";

export default function Navbar() {
  const navigate = useNavigate();
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const goTo = (path) => {
    navigate(path);
    setOpenDropdown(null);
    setMobileOpen(false);
  };

  return (
    <nav style={styles.nav}>
      <span style={styles.logo} onClick={() => goTo("/")}>
        Younggrown
      </span>

    
      <div style={styles.links}>
        <span style={styles.link} onClick={() => goTo("/")}>Home</span>

        {/* PRODUCT */}
        <div
          style={styles.dropdown}
          onMouseEnter={() => setOpenDropdown("product")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span style={styles.link}>
            Product <FiChevronDown />
          </span>

          {openDropdown === "product" && (
            <div style={styles.menu}>
              {productItems.map((item) => (
                <div
                  key={item.label}
                  style={styles.menuItem}
                  onClick={() => goTo(item.path)}
                >
                  <item.icon /> {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* SERVICES */}
        <div
          style={styles.dropdown}
          onMouseEnter={() => setOpenDropdown("services")}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          <span style={styles.link}>
            Services <FiChevronDown />
          </span>

          {openDropdown === "services" && (
            <div style={styles.menu}>
              {serviceItems.map((item) => (
                <div
                  key={item.label}
                  style={styles.menuItem}
                  onClick={() => goTo(item.path)}
                >
                  <item.icon /> {item.label}
                </div>
              ))}
            </div>
          )}
        </div>

        <span style={styles.link} onClick={() => goTo("/about")}>About</span>
        <span style={styles.link} onClick={() => goTo("/careers")}>Careers</span>
        <span style={styles.link} onClick={() => goTo("/contactus")}>Contact</span>
      </div>

      {/* MOBILE */}
      <button style={styles.menuBtn} onClick={() => setMobileOpen(true)}>
        <FiMenu size={22} />
      </button>

      {mobileOpen && (
        <div style={styles.mobileMenu}>
          <button style={styles.closeBtn} onClick={() => setMobileOpen(false)}>
            <FiX size={22} />
          </button>

          <span onClick={() => goTo("/")}>Home</span>
          <span onClick={() => goTo("/about")}>About</span>
          <span onClick={() => goTo("/careers")}>Careers</span>
          <span onClick={() => goTo("/contactus")}>Contact</span>
        </div>
      )}
    </nav>
  );
}

/* ---------------- DATA ---------------- */

const productItems = [
  { label: "Employee Management", icon: FiUsers, path: "./EmployeeManagement" },
  { label: "Recruitment", icon: FiUserPlus, path: "./Recruitment" },
  { label: "AttendanceManagement", icon: FiClock, path: "./AttendanceManagement" },
  { label: "Payroll", icon: FiDollarSign, path: "./payroll" },
  { label: "Performance", icon: FiTrendingUp, path: "./PerformanceManagement" },
  { label: "Reports & Analytics", icon: FiBarChart2, path: "./ReportsAnalytics" },
  { label: "Assets", icon: FiBriefcase, path: "./AssetManagement" },
  { label: "Chat", icon: FiCpu, path: "./chat" },
  { label: "Support", icon: FiHeadphones, path: "./Support" },
  { label: "Rewards", icon: FiAward, path: "./RewardsRecognition" },
  { label: "Activity Tracker", icon: FiActivity, path: "./ActivityTracker" },
];

const serviceItems = [
  { label: "IT Staffing", icon: FiCpu, path: "/services/it-staffing" },
  { label: "Non-IT Staffing", icon: FiLayers, path: "/services/non-it-staffing" },
  { label: "Training", icon: FiAward, path: "/services/training" },
  { label: "Freelancing", icon: FiGlobe, path: "/services/freelancing" },
];

/* ---------------- STYLES ---------------- */

const styles = {
  nav: {
    background: "#020617",
    padding: "16px 28px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    color: "#fff",
    position: "relative",
  },
  logo: {
    fontWeight: 700,
    cursor: "pointer",
  },
  links: {
    display: "flex",
    gap: 24,
    alignItems: "center",
  },
  link: {
    cursor: "pointer",
    display: "flex",
    alignItems: "center",
    gap: 4,
  },
  dropdown: {
    position: "relative",
  },
  menu: {
    position: "absolute",
    top: "120%",
    left: 0,
    background: "#020617",
    border: "1px solid #334155",
    borderRadius: 8,
    minWidth: 240,
    padding: 8,
    zIndex: 100,
  },
  menuItem: {
    padding: "10px 12px",
    display: "flex",
    gap: 10,
    cursor: "pointer",
    borderRadius: 6,
  },
  menuBtn: {
    background: "none",
    border: "none",
    color: "#fff",
    display: "none",
  },
  mobileMenu: {
    position: "fixed",
    inset: 0,
    background: "#020617",
    padding: 30,
    display: "flex",
    flexDirection: "column",
    gap: 20,
    zIndex: 200,
  },
  closeBtn: {
    alignSelf: "flex-end",
    background: "none",
    border: "none",
    color: "#fff",
  },
};
