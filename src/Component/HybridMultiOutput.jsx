import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function HybridMultiOutput() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="ups-hero hybrid-multi-hero">

        <div className="hero-left" data-aos="fade-right">
          <h2 className="ups-title">Hybrid Solar Charge Controller <br /> Multiple DC Outputs</h2>

          <p className="ups-subtitle">
            Advanced hybrid solar charge controller with multiple DC outputs for versatile 
            domestic, commercial and industrial solar applications.
          </p>

          <div className="hero-buttons">
            <NavLink to="#" className="btn-primary">Download Brochure</NavLink>
            <NavLink to="/contact" className="btn-outline">Contact Us</NavLink>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <div className="hero-img-wrapper">
            <img src="/img/Hybdrid_2.jpeg" alt="Hybrid Multi Output Controller" />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">
          <ul>
            <li>Multiple DC Output Options (12V–12V–12V / 12V–12V–24V)</li>
            <li>MPPT Solar Charge Controller</li>
            <li>Inbuilt PV Reverse Protection</li>
            <li>SMPS Based Grid Charger</li>
            <li>High Charging Efficiency</li>
            <li>Suitable for Solar Home Systems & Industrial Loads</li>
          </ul>

          <ul>
            <li>LCD Status Display</li>
            <li>Overload & Reverse Polarity Protection</li>
            <li>Stable DC Output</li>
            <li>Pure Sinewave Support</li>
            <li>Easy Installation and Maintenance</li>
          </ul>
        </div>
      </section>

      {/* APPLICATIONS */}
     
    </>
  );
}

export default HybridMultiOutput;
