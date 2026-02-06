export default function Features() {
  return (
    <div
      style={{
        
       padding: "40px 20px 100px",
    
        textAlign: "center",
      }}
    
    >
     
      <div
        style={{
          letterSpacing: "4px",
          fontSize: "14px",
          color: "#9ca3af",
          marginBottom: "12px",
        }}
      >
        FEATURES
        <div
          style={{
            width: "60px",
            height: "3px",
            background: "#2563eb",
            margin: "10px auto 0",
          }}
        />
      </div>

     
      <h1
        style={{
          fontSize: "46px",
          fontWeight: "700",
          margin: "30px 0 20px",
        }}
      >
        Our <span style={{ color: "#22d3ee" }}>HR Solutions</span>
      </h1>

      
      <p
        style={{
          maxWidth: "900px",
          margin: "0 auto 90px",
          fontSize: "17px",
          lineHeight: "1.8",
          color: "#d1d5db",
        }}
      >
        We provide a complete suite of HR solutions designed to simplify
        workforce management and support business growth. Our platform covers
        the entire employee lifecycle—from hiring to exit—while ensuring
        accuracy, compliance, and efficiency. Built for startups, MSMEs, and
        enterprises, our services adapt to your organization’s size and needs.
      </p>

    
    
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))",
          gap: "40px",
          maxWidth: "1200px",
          margin: "0 auto",
          paddingLeft:'40px'
        }}
      >
        {[
          {
            icon: "👥",
            title: "Employee Management",
            text:
              "Centralize all employee information in one secure system. Manage profiles, documents, roles, and employment lifecycle with ease. Our platform ensures data accuracy, transparency, and easy access for HR teams and managers.",
          },
          {
            icon: "📄",
            title: "Recruitment & ATS",
            text:
              "Post jobs, track applicants, automate shortlisting, and collaborate with hiring managers seamlessly. Our ATS helps you reduce hiring time, improve candidate experience, and make better hiring decisions.",
          },
          {
            icon: "📊",
            title: "HR Analytics & Reports",
            text:
              "Access real-time dashboards and reports to gain actionable insights into hiring, attendance, payroll, and workforce trends. Make informed, data-driven HR decisions.",
          },
          {
            icon: "🎯",
            title: "Performance Management",
            text:
              "Set goals, track performance, conduct appraisals, and gather feedback. Empower employees and managers with structured performance reviews and improvement tools.",
          },
          {
            icon: "⏱️",
            title: "Attendance & Leave Management",
            text:
              "Track attendance through biometric, mobile, or web-based systems. Automate leave requests and approvals while maintaining accurate records for payroll and compliance.",
          },
          {
            icon: "💰",
            title: "Payroll & Compliance",
            text:
              "Process payroll accurately and on time with built-in statutory compliance, including PF, ESI, and TDS. Reduce errors, ensure transparency, and stay compliant with regulations.",
          },
        ].map((item, index) => (
          <div
            key={index}
            style={{
              padding: "35px 30px",
              borderRadius: "24px",
              background:
                "radial-gradient(circle at top, #0b2a4a 0%, #020617 70%)",
              border: "1px solid rgba(59,130,246,0.35)",
              boxShadow: "0 0 60px rgba(37,99,235,0.15)",
              textAlign: "left",
            }}
          >
            <div
              style={{
                fontSize: "28px",
                marginBottom: "14px",
                color: "#38bdf8",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                fontSize: "20px",
                marginBottom: "12px",
                fontWeight: "600",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                fontSize: "15px",
                lineHeight: "1.7",
                color: "#d1d5db",
              }}
            >
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
