// import React, { useState, useRef, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Footers from "../Footers";

// // ✅ Import images properly (Vite safe)
// import blog1 from "../../Assets/blg1.jpg";
// import blog2 from "../../Assets/blg2.jpg";
// import blog3 from "../../Assets/blg3.avif";

// export default function Blogs() {
//   const [activeBlog, setActiveBlog] = useState(null);
//   const expandedRef = useRef(null);

//   const blogs = [
//     {
//       id: 1,
//       title: "HR in 2026: How People, Technology, and Work Have Truly Changed",
//       image: blog1,
//       excerpt:
//         "HR now sits at the center of business growth, employee experience, and digital transformation.",
//       content: `
// If someone had told HR professionals a few years ago what HR would look like in 2026, it might have sounded futuristic. Today, that future is real.

// HR has moved far beyond policies, payroll, and paperwork. It now drives workforce strategy, culture, and innovation.

// HR Has Become More Human, Not Less
// Automation has removed repetitive work, giving HR teams more time to focus on career growth and wellbeing.

// AI Is Now a Silent Partner
// AI helps shortlist candidates, detect skill gaps, and provide workforce insights — supporting HR decisions.

// Employee Experience Drives Everything
// Flexibility, purpose, and growth are now essential. HR designs personalized employee journeys.

// Final Thought:
// People-first organizations win the future.
// `
//     },
//     {
//       id: 2,
//       title: "AI in HR: From Automation to Intelligence",
//       image: blog2,
//       excerpt:
//         "Artificial Intelligence is transforming recruitment, engagement, and workforce planning.",
//       content: `
// AI is no longer experimental in HR. It is embedded into daily operations.

// Recruitment is faster with AI screening.
// Chatbots handle employee queries instantly.
// Analytics predicts attrition before it happens.

// But AI does not replace HR — it enhances human judgment.
// `
//     },
//     {
//       id: 3,
//       title: "Hybrid Work Strategy in 2026",
//       image: blog3,
//       excerpt:
//         "Hybrid work is structured, outcome-driven, and built for long-term sustainability.",
//       content: `
// Hybrid work is no longer temporary.

// Organizations now define:
// • Clear performance metrics
// • Fair evaluation systems
// • Digital collaboration tools

// Success is measured by results — not hours online.
// `
//     }
//   ];

//   useEffect(() => {
//     if (activeBlog && expandedRef.current) {
//       expandedRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [activeBlog]);

//   return (
//     <>
//       <div style={styles.section}>
//         <h2 style={styles.heading}>Insights & Blogs</h2>

//         <div style={styles.grid}>
//           {blogs.map((blog) => (
//             <motion.div
//               key={blog.id}
//               whileHover={{ scale: 1.03 }}
//               style={styles.card}
//               onClick={() =>
//                 setActiveBlog(activeBlog === blog.id ? null : blog.id)
//               }
//             >
//               <img src={blog.image} alt={blog.title} style={styles.image} />

//               <div style={styles.cardContent}>
//                 <h3 style={styles.title}>{blog.title}</h3>
//                 <p style={styles.excerpt}>{blog.excerpt}</p>
//                 <span style={styles.readMore}>
//                   {activeBlog === blog.id ? "Close Article" : "Read More →"}
//                 </span>
//               </div>
//             </motion.div>
//           ))}
//         </div>

//         <AnimatePresence>
//           {activeBlog && (
//             <motion.div
//               ref={expandedRef}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.5 }}
//               style={styles.expanded}
//             >
//               {blogs
//                 .filter((b) => b.id === activeBlog)
//                 .map((blog) => (
//                   <div key={blog.id}>
//                     <h2 style={styles.expandedTitle}>{blog.title}</h2>
//                     <img
//                       src={blog.image}
//                       alt={blog.title}
//                       style={styles.expandedImage}
//                     />
//                     <p style={styles.content}>{blog.content}</p>
//                   </div>
//                 ))}
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* ✅ Footer Component */}
//       <Footers />
//     </>
//   );
// }

// const styles = {
//   section: {
//     padding: "100px 8%",
//     background: "#0f172a",
//     color: "#fff"
//   },

//   heading: {
//     textAlign: "center",
//     fontSize: "2.8rem",
//     fontWeight: "800",
//     marginBottom: "60px"
//   },

//   grid: {
//     display: "grid",
//     gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
//     gap: "30px"
//   },

//   card: {
//     background: "rgba(255,255,255,0.05)",
//     borderRadius: "20px",
//     overflow: "hidden",
//     cursor: "pointer",
//     border: "1px solid rgba(255,255,255,0.1)",
//     transition: "0.3s"
//   },

//   image: {
//     width: "100%",
//     height: "200px",
//     objectFit: "cover"
//   },

//   cardContent: {
//     padding: "20px"
//   },

//   title: {
//     fontSize: "1.3rem",
//     fontWeight: "700",
//     marginBottom: "10px"
//   },

//   excerpt: {
//     color: "#94a3b8",
//     fontSize: "0.95rem",
//     marginBottom: "10px"
//   },

//   readMore: {
//     color: "#3b82f6",
//     fontWeight: "600",
//     fontSize: "0.9rem"
//   },

//   expanded: {
//     marginTop: "70px",
//     padding: "50px",
//     background: "rgba(255,255,255,0.05)",
//     borderRadius: "20px",
//     border: "1px solid rgba(255,255,255,0.1)"
//   },

//   expandedTitle: {
//     fontSize: "2rem",
//     fontWeight: "800",
//     marginBottom: "20px"
//   },

//   expandedImage: {
//     width: "100%",
//     maxHeight: "400px",
//     objectFit: "cover",
//     borderRadius: "15px",
//     marginBottom: "30px"
//   },

//   content: {
//     whiteSpace: "pre-line",
//     lineHeight: "1.8",
//     color: "#cbd5e1",
//     fontSize: "1.05rem"
//   }
// };
