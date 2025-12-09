import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Application from "./Application";

function Servo_3ph_3ph() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ⭐ HERO SECTION — Same design as UPS pages */}
      <section className="ups-hero">

        <div className="hero-left" data-aos="fade-right">
          <h1 className="ups-title">Servo Stabilizer 3Ph–3Ph</h1>

          <p className="ups-subtitle">
            Three-phase servo stabilizer designed for precise voltage correction, 
            high efficiency, and advanced protection for industrial and commercial loads.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-primary">Download Brochure</a>
            <a href="/technicalSpecification_servo_3ph" className="btn-outline">
              Technical Specs
            </a>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <div className="hero-img-wrapper">
            <img src="/img/servo_stabilizer_3.jpeg" alt="Servo Stabilizer 3Ph–3Ph" />
          </div>
        </div>

      </section>

      {/* ⭐ KEY FEATURES — Same two-column layout */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">

          <ul>
            <li>Available ranges from 1 KVA to 2000 KVA</li>
            <li>Air-cool & Oil-cool models available</li>
            <li>Wide input voltage ranges</li>
            <li>Fast correction speed: 35V/s</li>
            <li>High efficiency up to 97%</li>
            <li>Works for both balanced & unbalanced loads</li>
          </ul>

          <ul>
            <li>Over/Under voltage trip using contactor</li>
            <li>Front panel indicators & metering</li>
            <li>Short circuit & overload protection (MCB/MCCB/SFU)</li>
            <li>Output voltage adjustable by ±5V</li>
            <li>Single phase & phase-reverse preventer</li>
            <li>Auto / Manual operating modes available</li>
          </ul>

        </div>
      </section>

      {/* ⭐ APPLICATION SECTION */}
      <Application />

      {/* ⭐ TECHNICAL SPECIFICATION SECTION */}
      <h4 className="section-title" style={{ marginTop: "40px" }}>
        Technical Specifications
      </h4>

      <ul className="spec-list">
        <li>
          6 KVA – 500 KVA for 3 Phase – 3 Phase
          <a href="/technicalSpecification_servo_3ph"> Learn More ➜ </a>
        </li>
      </ul>
    </>
  );
}

export default Servo_3ph_3ph;
