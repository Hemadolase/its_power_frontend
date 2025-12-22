import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Application from "./Application";

function BatteryCharger_1ph() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ⭐ HERO SECTION — Same as Online UPS 1Ph–1Ph */}
    <section className="ups-hero battery1ph-hero">


        <div className="hero-left" data-aos="fade-right">
          <h1 className="ups-title">Battery Charger 1Ph</h1>

          <p className="ups-subtitle">
            Thyristor-based battery charger designed for stable DC output, fast response,
            electrical protection and reliable operation for industrial battery systems.
          </p>

          <div className="hero-buttons">
           
           
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <div className="hero-img-wrapper">
            <img src="/img/1PH-BatteryCharger.jpeg" alt="Battery Charger 1Ph" />
          </div>
        </div>

      </section>

      {/* ⭐ KEY FEATURES — SAME TWO-COLUMN DESIGN */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">

          <ul>
            <li>Isolation transformer at input side</li>
            <li>Thyristor-based control design</li>
            <li>Soft-start at initial power on</li>
            <li>Electronic overload protection</li>
            <li>DC undervoltage, overvoltage & short-circuit protection</li>
            <li>Controlled battery charging for long life</li>
            <li>Low ripple & high reliability output</li>
          </ul>

          <ul>
            <li>Audible alarms for all safety protections</li>
            <li>Clear indications for battery charging status</li>
            <li>Simple installation & easy operation</li>
            <li>Available in 1-Phase / 3-Phase AC input</li>
            <li>Thyristor-based full-wave rectifier</li>
            <li>Excellent time response for step load</li>
            <li>Available DC voltages: 24V / 48V / 110V / 220V</li>
          </ul>

        </div>
      </section>

      {/* ⭐ APPLICATION SECTION — Already same globally */}
      <Application />

    </>
  );
}

export default BatteryCharger_1ph;
