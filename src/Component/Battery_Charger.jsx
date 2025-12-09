import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Battery_Charger() {
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      mirror: false,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* ------------------------------------
          HERO BANNER
      ------------------------------------ */}
      <section className="battery-hero">
        <div className="hero-text" data-aos="fade-right">
          <h1>Battery Charger</h1>
          <p>
            Reliable, high-efficiency battery charging systems designed for Industrial,
            Medical, Telecom and Utility applications.
          </p>
          <div className="hero-btns">
                        <NavLink to="/contact" className="hero-btn-primary">
                          Get a Quote
                        </NavLink>
            
                        <a href="#battery-products" className="hero-btn-outline">
                          Explore Range
                        </a>
                      </div>
        </div>

        <div className="hero-image" data-aos="zoom-in">
          <img src="/img/Battery_Chaerger.png" alt="Battery Charger" />
        </div>
      </section>

      {/* ------------------------------------
          ABOUT SECTION (small box)
      ------------------------------------ */}
      <section className="about-battery">
        <div className="about-left" data-aos="fade-right">
          <img src="/img/Battery_Chaerger.png" alt="Battery Charger" />
        </div>

        <div className="about-right" data-aos="fade-left">
          <h2>Advanced Battery Charging Systems for Reliable DC Power</h2>

          <p>
            Battery charging is the conversion of AC (1ϕ or 3ϕ) into controlled DC voltage
            with required output current for industrial and utility applications.
          </p>

          <ul>
            <li>Isolation transformer at input</li>
            <li>Bridge rectifier with robust design</li>
            <li>Smooth DC output using L–C filter</li>
            <li>Variable DC power source</li>
            <li>FCBC / DC UPS functionality for uninterrupted DC load</li>
            <li>Zero-second changeover time</li>
            <li>Available in 1ϕ & 3ϕ input options</li>
            <li>DC voltage range: 24V–500V</li>
          </ul>
        </div>
      </section>

      {/* ------------------------------------
          PRODUCT CARDS
      ------------------------------------ */}
      <section id="battery-products" className="battery-products">
        <h2 className="section-title" data-aos="fade-up">
          Our Battery Charger Range
        </h2>

        <div className="battery-grid">

          <NavLink to="/batteryCharger_1ph" className="battery-card b4" data-aos="zoom-in">
            <img src="/img/1PH-BatteryCharger.jpeg" alt="" />
            <h3>1ph Battery Charger</h3>
          </NavLink>

          <NavLink to="/batteryCharger_1ph_FCBC" className="battery-card b5" data-aos="zoom-in">
            <img src="/img/1ph_FCBC-BatteryCharger.jpg" alt="" />
            <h3>1ph-FCBC Battery Charger</h3>
          </NavLink>

          <NavLink to="/batteryCharger_3ph_FCBC" className="battery-card b6" data-aos="zoom-in">
            <img src="/img/3PH-FCBC-BattryCharger.jpeg" alt="" />
            <h3>3ph-FCBC Battery Charger</h3>
          </NavLink>

        </div>
      </section>
    </>
  );
}

export default Battery_Charger;
