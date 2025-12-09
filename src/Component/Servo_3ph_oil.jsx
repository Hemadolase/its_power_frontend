import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Application from "./Application";

function Servo_3ph_oil() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ⭐ HERO SECTION — Same as UPS & BatteryCharger pages */}
      <section className="ups-hero">

        <div className="hero-left" data-aos="fade-right">
          <h1 className="ups-title">Servo Stabilizer <br />3Ph – Oil Cooled</h1>

          <p className="ups-subtitle">
            Heavy-duty industrial servo stabilizer designed for continuous operation, 
            high efficiency, wide input ranges, and precise voltage regulation using 
            oil-cooled technology for long service life.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-primary">Download Brochure</a>
            
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <div className="hero-img-wrapper">
            <img
              src="/img/servo_stabilizer_1st.jpeg"
              alt="Servo Stabilizer 3Ph Oil Cooled"
            />
          </div>
        </div>

      </section>

      {/* ⭐ KEY FEATURES — Same two-column layout */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">
          <ul>
            <li>Available ranges: 1 KVA to 2000 KVA</li>
            <li>Models available in Air-Cooled & Oil-Cooled types</li>
            <li>Wide input voltage ranges available</li>
            <li>Fast voltage correction: 35V/sec</li>
            <li>High efficiency up to 97%</li>
            <li>Suitable for balanced & unbalanced loads</li>
          </ul>

          <ul>
            <li>Over/Under voltage trip with contactor</li>
            <li>Front-panel indicators & metering</li>
            <li>Short-circuit & overload protection via MCB/MCCB/SFU</li>
            <li>Output adjustable by ±5V</li>
            <li>Single-phase & phase-reverse preventer</li>
            <li>Auto / Manual modes available</li>
          </ul>
        </div>
      </section>

      {/* ⭐ APPLICATION SECTION — Uses your shared Application component */}
      <Application />

      {/* ⭐ TECH SPECS (Optional if required) */}
      <h4 className="section-title" style={{ marginTop: "50px" }}>
        Technical Specifications
      </h4>

      <ul className="spec-list">
        <li>
          Available in Oil-Cooled Models  
          <a href="/technicalSpecification_servo_oil"> Learn More ➜ </a>
        </li>
      </ul>
    </>
  );
}

export default Servo_3ph_oil;
