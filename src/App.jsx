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
import Chat from "./components_temp/Chat";
import Support from "./components_temp/Support";
import RewardsRecognition from "./components_temp/RewardsRecognition";
import ActivityTracker from "./components_temp/ActivityTracker";
import ITStaffing from "./components_temp/ServicesNav/ITStaffing";
import NonTechStaffing from "./components_temp/ServicesNav/NonTechStaffing";
import Training from "./components_temp/ServicesNav/Training";
import Freelancing from "./components_temp/ServicesNav/Freelancing";
import FreelancerForm from "./components_temp/ServicesNav/Freelancerform";
// import Blogs from "./components_temp/Resources/Blogs";
// import CaseStudies from "./components_temp/Resources/CaseStudies";
import SimplifiedHR from "./components_temp/Resources/SimplifiedHR";
import AIforHR from "./components_temp/Resources/AIForHR";
import HRMSDeck from "./components_temp/Resources/HRMSdeck";

import Blogspage from "./components_temp/Blogspage/Blogs";
import Blogs1 from "./components_temp/Blogspage/Blogs1";
import Blogs2 from "./components_temp/Blogspage/Blogs2";
import Blogs3 from "./components_temp/Blogspage/Blogs3";







// --- SCROLL TO TOP UTILITY ---
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Disable browser scroll restoration
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    // Wait one frame so layout + animations mount
    requestAnimationFrame(() => {
      document.body.scrollTop = 0;
      document.documentElement.scrollTop = 0;
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    });

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
          <Route path="/FreelancerForm" element={<FreelancerForm />} />

         
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          {/* <Route path="/casestudies" element={<CaseStudies />} /> */}
          <Route path="/aiforhr" element={<AIforHR/>}/>
        <Route path="/simplifiedhr" element={<SimplifiedHR />} />
        <Route path="/hrmsdeck" element={<HRMSDeck/>}/>


       <Route path="/blogs" element={<Blogspage />} />
        <Route path="/bloghr2026" element={<Blogs1 />} />
        <Route path="/blogaihr" element={<Blogs2 />} />
        <Route path="/bloghrsaas" element={<Blogs3 />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}
