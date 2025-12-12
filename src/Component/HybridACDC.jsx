import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function HybridACDC() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* HERO */}
     <section className="ups-hero hybrid-acdc-hero">

        <div className="hero-left" data-aos="fade-right">
          <h2 className="ups-title">Hybrid Solar Charge Controller <br /> (230VAC + DC Output)</h2>

          <p className="ups-subtitle">
            High-efficiency hybrid solar controller delivering both 230VAC and DC output 
            for versatile energy requirements.
          </p>

          <div className="hero-buttons">
            <NavLink to="#" className="btn-primary">Download Brochure</NavLink>
            <NavLink to="/contact" className="btn-outline">Contact Us</NavLink>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <div className="hero-img-wrapper">
            <img src="/img/Hybrid_1.jpeg" alt="Hybrid Controller 230VAC" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid">
          <ul>
            <li>Supports 230VAC + 12/24V DC Output</li>
            <li>MPPT Solar Charge Controller</li>
            <li>Transformer-Based Protection</li>
            <li>Reverse Polarity Protection</li>
            <li>Overload & Low Battery Protection</li>
          </ul>

          <ul>
            <li>High Efficiency Charging</li>
            <li>Pure Sinewave Output</li>
            <li>Supports Industrial & Commercial Loads</li>
            <li>LCD Display for Monitoring</li>
            <li>Robust Build Quality</li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
     
    </>
  );
}

export default HybridACDC;
