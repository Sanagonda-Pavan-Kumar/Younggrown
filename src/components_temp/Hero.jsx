import React from "react";
import "../styles/Hero.css";

function Hero() {
  return (
    <section className="hero">
      
      <div className="hero-content">
        <h1>
          <span>Simplify</span> HR.
          <br />
          <span>Empower</span> People.
          <br />
          <span>Scale</span> Faster.
        </h1>

        <p>
          An all-in-one HR SaaS platform to manage hiring,
          employees, payroll, and performance smarter and faster.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Start Free Trial</button>
          <button className="btn-outline">Book a Demo</button>
        </div>
      </div>

      
      <div className="hero-image">
        <img
          src="/banner.png"
          alt="HR SaaS Illustration"
        />
      </div>
    </section>
  );
}

export default Hero;
