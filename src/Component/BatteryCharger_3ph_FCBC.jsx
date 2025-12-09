import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Application from "./Application";

function BatteryCharger_3ph_FCBC() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ⭐ HERO SECTION — Same layout as all UPS pages */}
      <section className="ups-hero">

        <div className="hero-left" data-aos="fade-right">
          <h1 className="ups-title">Battery Charger 3Ph – FCBC</h1>

          <p className="ups-subtitle">
            Industrial-grade thyristor controlled battery charger designed for stable DC output, 
            smooth charging, advanced protections, and long battery life. Ideal for critical 
            industrial and utility applications.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-primary">Download Brochure</a>
            
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <div className="hero-img-wrapper">
            <img
              src="/img/3PH-FCBC-BattryCharger.jpeg"
              alt="Battery Charger 3Ph FCBC"
            />
          </div>
        </div>

      </section>

      {/* ⭐ KEY FEATURES — 2-column layout like UPS pages */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">

          <ul>
            <li>Isolation transformer at input side</li>
            <li>Thyristor-based power control</li>
            <li>Soft start during power-on</li>
            <li>Electronic overload protection</li>
            <li>DC undervoltage, overvoltage & short-circuit protection</li>
            <li>Controlled charging for extended battery life</li>
            <li>Low output voltage ripple</li>
          </ul>

          <ul>
            <li>Audible alarms for all protections</li>
            <li>Clear indications for charge monitoring</li>
            <li>Easy installation & user-friendly operation</li>
            <li>Available in 1-phase or 3-phase AC input</li>
            <li>Thyristor-based full wave rectifier</li>
            <li>Excellent response for step loads</li>
            <li>Standard DC voltages: 24V / 48V / 110V / 220V</li>
          </ul>

        </div>
      </section>

      {/* ⭐ GLOBAL APPLICATIONS SECTION */}
      <Application />
    </>
  );
}

export default BatteryCharger_3ph_FCBC;
