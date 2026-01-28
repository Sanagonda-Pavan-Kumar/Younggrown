import React from "react";
const HomeSection = () => {
  return (
    <section className="hero" >
     
      <div className="hero-content">
        <h1>
          <span>One platform</span> to run all of HR
        </h1>

        <p style={{color:'#fff'}}>
          Our cloud-based HR platform is designed to help businesses streamline
          their entire HR operation from a single dashboard. From recruitment
          and onboarding to attendance, payroll, compliance, and performance
          management, we bring everything together in one secure and scalable
          solution.
        </p>

       
        <ul className="about-points">
          <li>
            Built for startups, MSMEs, and growing enterprises, our platform
            reduces manual work, minimizes errors, and improves productivity.
          </li>

          <li>
            With easy onboarding, role-based access, and real-time analytics,
            HR teams gain complete visibility and control over their workforce.
          </li>

          <li>
            Whether you are hiring rapidly or managing a large team, our HR
            software adapts to your needs and grows with your business—so you
            can focus on people, not paperwork.
          </li>
        </ul>

        <div className="hero-buttons">
          <button className="btn-outline">Learn More</button>
        </div>
      </div>

     
      <div className="hero-image" style={{paddingRight:'50px'}}>
        <img
          src="/imgg.png"  
          alt="HRMS Platform Illustration"
        />
      </div>
    </section>
  );
};

export default HomeSection;
