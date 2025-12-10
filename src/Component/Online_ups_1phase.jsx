import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import AOS from "aos";

import "aos/dist/aos.css";

function Online_ups_1phase() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ----------------------------
           SECTION 1 — PRODUCT HEADER
      ----------------------------- */}
      <section className="ups-hero">

        <div className="hero-left" data-aos="fade-right">
         <h1 className="ups-title">Online UPS 1Ph-1Ph</h1>

          <p className="ups-subtitle">
            High-performance online UPS for industrial, medical, IT and high-inrush applications.
            Built with advanced DSP technology for reliability and electrical protection.
          </p>

          <div className="hero-buttons">
            <NavLink to="#" className="btn-primary">Download Brochure</NavLink>
            <NavLink to="/technicalSpecification" className="btn-outline">Technical Specs</NavLink>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <div className="hero-img-wrapper">
            <img src="/img/onlie_UPS_1PH-1PH.jpeg" alt="Online UPS" />
          </div>
        </div>

      </section>


      {/* ----------------------------
           SECTION 2 — FEATURES GRID
      ----------------------------- */}
      {/* ----------------------------
     SECTION 2 — KEY FEATURES (INFO STYLE)
----------------------------- */}
<section className="ups-info-features">
  <h2 className="section-title">Key Features</h2>

  <div className="info-grid" data-aos="fade-up">

    <ul>
      <li>True Online Double Conversion Technology</li>
      <li>DSP Based Micro-controlled Design</li>
      <li>Low Noise (45 dB)</li>
      <li>Real Crest Factor 3:1</li>
      <li>High Surge Handling</li>
      <li>Stable Output on Inductive Loads</li>
    </ul>

    <ul>
      <li>Six Pulse Thyristor / PFC / IGBT Rectifier Options</li>
      <li>Isolation Transformer at Output</li>
      <li>Wide Input Voltage Range</li>
      <li>User-Friendly LCD Display</li>
      <li>High PWM Switching Frequency</li>
      <li>Easy Installation & Maintenance</li>
    </ul>

  </div>
</section>


      {/* ----------------------------
           SECTION 3 — APPLICATIONS
      ----------------------------- */}
      <section className="ups-applications">
  <h2 className="section-title">Applications</h2>

  <div className="apps-grid">

    {[
      { img: "/img/7.jpg", title: "Healthcare" },
      { img: "/img/Hotels.webp", title: "Hotels & Hospitality" },
      { img: "/img/It_sector.webp", title: "IT Sector" },
      { img: "/img/mall.jpg", title: "Shopping Malls" },
      { img: "/img/Office.jpg", title: "Corporate Offices" },
      { img: "/img/Small_industries.jpg", title: "Small Industries" }
    ].map((item, index) => (
      <div className="app-card hover-card" data-aos="zoom-in" key={index}>

        <div className="app-img-box">
          <img src={item.img} alt={item.title} />

          {/* 🔵 Hover Overlay */}
          <div className="hover-overlay">
            <NavLink to="/contact" className="know-btn">KNOW MORE</NavLink>
          </div>
        </div>

        <p className="app-text">{item.title}</p>
      </div>
    ))}

  </div>
</section>


      

    </>
  );
}

export default Online_ups_1phase;
