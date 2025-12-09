import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Application from "./Application";

function BatteryCharger_1ph_FCBC() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ⭐ HERO SECTION (Same as Online UPS 1Ph–1Ph) */}
      <section className="ups-hero">
        <div className="hero-left" data-aos="fade-right">
          <h1 className="ups-title">Battery Charger 1Ph–FCBC</h1>

          <p className="ups-subtitle">
            High-performance FCBC battery charger with thyristor-based control,
            soft-start, overload protection and stable DC output for industrial applications.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-primary">Download Brochure</a>
           
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <div className="hero-img-wrapper">
            <img src="/img/1ph_FCBC-BatteryCharger.jpg" alt="Battery Charger FCBC" />
          </div>
        </div>
      </section>

      {/* ⭐ KEY FEATURES — SAME STYLE AS UPS PAGE */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">
          <ul>
            <li>Isolation transformer at input side</li>
            <li>Thyristor-based full wave rectifier design</li>
            <li>Soft-start at initial power ON</li>
            <li>Electronic overload protection</li>
            <li>DC undervoltage / overvoltage / short-circuit protection</li>
            <li>Controlled and regulated charging</li>
            <li>Low output ripple, high reliability</li>
          </ul>

          <ul>
            <li>Audible alarm for all fault conditions</li>
            <li>Fully indicated battery charge monitoring</li>
            <li>Easy installation and operation</li>
            <li>Available in 1-Phase / 3-Phase input</li>
            <li>Fast response to step load variations</li>
            <li>Standard DC Voltages: 24V / 48V / 110V / 220V</li>
            <li>Multiple charger configurations available</li>
          </ul>
        </div>
      </section>

      {/* ⭐ APPLICATION SECTION (Already consistent) */}
      <Application />
    </>
  );
}

export default BatteryCharger_1ph_FCBC;
