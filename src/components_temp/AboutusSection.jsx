export default function AboutSection() {
  return (
    <div
      style={{
        
        paddingLeft:'240px',
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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
        ABOUT
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
          fontSize: "48px",
          fontWeight: "700",
          lineHeight: "1.2",
          margin: "30px 0 20px",
        }}
      >
        <span style={{ color: "#22d3ee" }}>People-first</span> HR.
        <br />
        Powered by Technology.
      </h1>

      
      <p
        style={{
          maxWidth: "850px",
          fontSize: "18px",
          lineHeight: "1.8",
          color: "#d1d5db",
          marginBottom: "80px",
        }}
      >
        We are a people-centric HR technology company focused on simplifying
        workforce management through smart automation and data-driven solutions.
        Our platform reduces repetitive HR work and helps organizations operate
        with greater clarity and efficiency.
      </p>

      
      <div
        style={{
          display: "flex",
          gap: "40px",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
       
        <div
          style={{
            width: "380px",
            padding: "40px 30px",
            borderRadius: "24px",
            background:
              "radial-gradient(circle at top, #0b2a4a 0%, #020617 70%)",
            border: "1px solid rgba(59,130,246,0.35)",
            boxShadow: "0 0 60px rgba(37,99,235,0.15)",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              marginBottom: "20px",
              color: "#38bdf8",
            }}
          >
            🚀
          </div>

          <h3
            style={{
              fontSize: "26px",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            Our <span style={{ color: "#38bdf8" }}>Mission</span>
          </h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#d1d5db",
            }}
          >
            To simplify HR operations using automation and intelligent insights
            – so HR teams can focus on people, culture and growth.
          </p>
        </div>

        
        <div
          style={{
            width: "380px",
            padding: "40px 30px",
            borderRadius: "24px",
            background:
              "radial-gradient(circle at top, #0b2a4a 0%, #020617 70%)",
            border: "1px solid rgba(59,130,246,0.35)",
            boxShadow: "0 0 60px rgba(37,99,235,0.15)",
          }}
        >
          <div
            style={{
              fontSize: "40px",
              marginBottom: "20px",
              color: "#38bdf8",
            }}
          >
            👁️
          </div>

          <h3
            style={{
              fontSize: "26px",
              marginBottom: "20px",
              fontWeight: "600",
            }}
          >
            Our <span style={{ color: "#38bdf8" }}>Vision</span>
          </h3>

          <p
            style={{
              fontSize: "16px",
              lineHeight: "1.8",
              color: "#d1d5db",
            }}
          >
            To become the most trusted HR SaaS platform for modern workplaces
            through secure, scalable, and user-friendly solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
