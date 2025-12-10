import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Application from "./Application";
import { NavLink } from "react-router-dom";

function Servo_1ph_1ph() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ⭐ HERO SECTION — Same layout as UPS pages */}
      <section className="ups-hero">

        <div className="hero-left" data-aos="fade-right">
          <h1 className="ups-title">Servo Stabilizer 1Ph–1Ph</h1>

          <p className="ups-subtitle">
            High-precision servo stabilizer designed for superior voltage regulation,
            fast correction speed, and reliable protection for sensitive equipment.
          </p>

          <div className="hero-buttons">
            <NavLink to="#" className="btn-primary">Download Brochure</NavLink>
            <NavLink to="/technicalspecification_servo_1ph" className="btn-outline">
              Technical Specs
            </NavLink>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <div className="hero-img-wrapper">
            <img src="/img/servo_stabilizer_2nd.jpeg" alt="Servo Stabilizer 1Ph" />
          </div>
        </div>

      </section>

      {/* ⭐ KEY FEATURES — (2-column clean layout) */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">

          <ul>
            <li>Available Ranges: 1 KVA to 2000 KVA</li>
            <li>Available in Air-Cool & Oil-Cool models</li>
            <li>Wide input voltage range options</li>
            <li>Fast correction speed: 35V per second</li>
            <li>High efficiency up to 97%</li>
            <li>Suitable for balanced & unbalanced loads</li>
          </ul>

          <ul>
            <li>Over-voltage & Under-voltage trip with contactor</li>
            <li>User-friendly indicators & metering on front panel</li>
            <li>Short-circuit & overload protection (MCB/MCCB/SFU)</li>
            <li>Output voltage adjustment ±5V from front panel</li>
            <li>Single phase / phase-reverse preventer built-in</li>
            <li>Auto / Manual mode selection available</li>
          </ul>

        </div>
      </section>

      {/* ⭐ APPLICATION SECTION */}
      <Application />

      {/* ⭐ TECH SPEC SECTION */}
      <h4 className="section-title" style={{ marginTop: "40px" }}>
        Technical Specifications
      </h4>

      <ul className="spec-list">
        <li>
          1 KVA – 2000 KVA (Single Phase)
          <NavLink to="/technicalspecification_servo_1ph"> Learn More ➜ </NavLink>
        </li>
      </ul>
    </>
  );
}

export default Servo_1ph_1ph;
