import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components_temp/Navbar";

import Product from "./components_temp/Product";
import HomePage from "./components_temp/HomePage";
import AboutUsPage from "./components_temp/AboutUs";
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

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />

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
      </Routes>
    </BrowserRouter>
  );
}
