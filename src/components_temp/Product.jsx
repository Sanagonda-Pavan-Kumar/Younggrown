import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Footer from "./Footers";

export default function Product() {
  const { hash } = useLocation();

  
  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.replace("#", ""));
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: "smooth", block: "start" });
        }, 50);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [hash]);

  return (
   <div>
    
   </div>
  );
}


const sections = [
  {
    id: "employee-management",
    title: "Employee Management",
    label: "Centralized employee data",
    icon: "👥",
    description:
      "Employee Management helps you store and manage all employee information in one secure place. It includes personal details, roles, documents, and employment history. HR teams can update records easily while managers get instant access to accurate data.",
  },
  {
    id: "recruitment",
    title: "Recruitment & Applicant Tracking",
    label: "Smarter hiring",
    icon: "🧑‍💼",
    description:
      "Manage job postings, track applicants, schedule interviews, and collaborate with hiring teams in one place. This system improves hiring speed, transparency, and candidate experience.",
  },
  {
    id: "attendance",
    title: "Attendance & Leave Management",
    label: "Accurate tracking",
    icon: "🕒",
    description:
      "Track working hours, shifts, attendance, and leaves with ease. Employees can apply for leave online and managers can approve quickly with clear records and visibility.",
  },
  {
    id: "payroll",
    title: "Payroll & Compliance",
    label: "Error-free payroll",
    icon: "💰",
    description:
      "Automate salary calculations based on attendance and policies. Generate payslips, manage deductions, and ensure statutory compliance without manual effort.",
  },
  {
    id: "performance",
    title: "Performance Management",
    label: "Employee growth",
    icon: "📈",
    description:
      "Set goals, track progress, and conduct structured performance reviews. Encourage feedback, development, and continuous improvement across teams.",
  },
  {
    id: "lms",
    title: "Learning Management System (LMS)",
    label: "Skill development",
    icon: "🎓",
    description:
      "Create and assign training programs, track learning progress, and support employee growth through structured learning paths.",
  },
  {
    id: "analytics",
    title: "Reports & Analytics",
    label: "Actionable insights",
    icon: "📊",
    description:
      "Access real-time HR reports and dashboards for better decision-making. Analyze attendance, hiring, payroll, and workforce trends easily.",
  },
  {
    id: "assets",
    title: "Asset Management",
    label: "Track assets",
    icon: "💻",
    description:
      "Maintain accurate records of company assets assigned to employees. Track allocation, returns, and lifecycle to improve accountability.",
  },
  {
    id: "chat",
    title: "Internal Chat",
    label: "Team communication",
    icon: "💬",
    description:
      "Enable fast and seamless communication across teams with internal chat. Reduce email dependency and improve collaboration.",
  },
  {
    id: "support",
    title: "Support",
    label: "Employee assistance",
    icon: "🛠️",
    description:
      "Allow employees to raise tickets and track issues while support teams manage requests efficiently and transparently.",
  },
  {
    id: "rewards",
    title: "Rewards & Recognition",
    label: "Motivation",
    icon: "🏆",
    description:
      "Recognize achievements and reward performance to build engagement, motivation, and a positive work culture.",
  },
  {
    id: "activity",
    title: "Activity Tracker",
    label: "Work visibility",
    icon: "📌",
    description:
      "Track task activity and engagement insights to improve productivity while maintaining transparency and balance.",
  },
];


const styles = {
  page: {
    padding: "100px 20px",
    maxWidth: 1200,
    margin: "0 auto",
    color: "#e5e7eb",
  },

  pageTitle: {
    textAlign: "center",
    fontSize: "2.8rem",
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
    gap: 48,
    marginBottom: 100,
    alignItems: "center",
    flexWrap: "wrap",
    scrollMarginTop: 120, 
  },

  imageBox: {
    flex: "1 1 320px",
    minHeight: 230,
    borderRadius: 22,
    background:
      "radial-gradient(circle at top, rgba(56,189,248,0.25), rgba(7,16,46,0.95))",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "1px solid #334155",
    boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
  },

  icon: {
    fontSize: "3.2rem",
  },

  imageLabel: {
    marginTop: 10,
    color: "#c7d2fe",
    fontSize: "0.9rem",
  },

  content: {
    flex: "1 1 460px",
  },

  title: {
    fontSize: "1.9rem",
    color: "#ffffff",
    marginBottom: 14,
  },

  text: {
    lineHeight: 1.8,
    color: "#cbd5f5",
    fontSize: "1rem",
  },
};
