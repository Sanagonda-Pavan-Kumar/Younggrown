import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components_temp/Navbar";

// Component Imports (Ensure casing matches your files)
import HomePage from "./components_temp/HomePage";
import AboutUsPage from "./components_temp/AboutUs";
import Product from "./components_temp/Product";
import Services from "./components_temp/Services";
import Careers from "./components_temp/Careers";
import ContactUs from "./components_temp/ContactUs";
import EmployeeManagement from "./components_temp/EmployeeManagement";
import Recruitment from "./components_temp/Recruitment";
import AttendanceManagement from "./components_temp/AttendanceManagement";
import Payroll from "./components_temp/Payroll";
import PerformanceManagement from "./components_temp/PerformanceManagement";
import ReportsAnalytics from "./components_temp/ReportsAnalytics";
import AssetManagement from "./components_temp/AssetManagement";
import Chat from "./components_temp/chat";
import Support from "./components_temp/Support";
import RewardsRecognition from "./components_temp/RewardsRecognition";
import ActivityTracker from "./components_temp/ActivityTracker";
import ITStaffing from "./components_temp/ServicesNav/ITStaffing";
import NonTechStaffing from "./components_temp/ServicesNav/NonTechStaffing";
import Training from "./components_temp/ServicesNav/Training";
import Freelancing from "./components_temp/ServicesNav/Freelancing";

// --- SCROLL TO TOP UTILITY ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Standard window scroll reset
    window.scrollTo(0, 0);
    // Backup for document element
    document.documentElement.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Navbar />
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/services" element={<Services />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contactus" element={<ContactUs />} />          
          
          <Route path="/employeemanagement" element={<EmployeeManagement />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/AttendanceManagement" element={<AttendanceManagement />} />
          <Route path="/payroll" element={<Payroll />} />
          <Route path="/performancemanagement" element={<PerformanceManagement />} />
          <Route path="/reportsanalytics" element={<ReportsAnalytics />} />
          <Route path="/Support" element={<Support />} />
          <Route path="/RewardsRecognition" element={<RewardsRecognition />} />
          <Route path="/assetManagement" element={<AssetManagement/>}/>
          <Route path="/chat" element={<Chat/>}/>
          <Route path="/activitytracker" element={<ActivityTracker/>}/>

          <Route path="/ITStaffing" element={<ITStaffing/>}/>
          <Route path="/NonTechStaffing" element={<NonTechStaffing/>}/>
          <Route path="/Training" element={<Training/>}/>
          <Route path="/Freelancing" element={<Freelancing/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  );
}