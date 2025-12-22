import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function Online_ups_3ph() {

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const apps = [
    { img: "/img/7.jpg", title: "Healthcare" },
    { img: "/img/Hotels.webp", title: "Hotels & Hospitality" },
    { img: "/img/It_sector.webp", title: "IT Sector" },
    { img: "/img/mall.jpg", title: "Shopping Malls" },
    { img: "/img/Office.jpg", title: "Corporate Offices" },
    { img: "/img/Small_industries.jpg", title: "Small Industries" }
  ];

  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="ups-hero">
        <div className="hero-left" data-aos="fade-right">
          <h1 className="ups-title">Online UPS 3Ph-1Ph</h1>

          <p className="ups-subtitle">
            High-performance online UPS designed for industrial, medical, IT, and
            high-inrush motor applications. Built using DSP technology for maximum
            reliability, clean power output & protection.
          </p>

          <div className="hero-buttons">
         
            <NavLink to="/technicalSpecification_3ph" className="btn-primary">Technical Specs</NavLink>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <img
            src="/img/3ph-1ph(2).jpeg"
            className="product-image"
            alt="UPS 3Ph–1Ph"
          />
        </div>
      </section>

      {/* ================= KEY FEATURES ================= */}
      <section id="features" className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">
          <ul>
            <li>True Online Double Conversion Technology</li>
            <li>DSP Based Micro-controlled Design</li>
            <li>Less Noise (45 dB)</li>
            <li>Real Crest Factor 3:1</li>
            <li>Stable Output on Inductive Loads</li>
            <li>High Surge Handling</li>
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

      {/* ================= APPLICATIONS ================= */}
      <section className="ups-applications">
        <h2 className="section-title">Applications</h2>

        <div className="apps-grid">
          {apps.map((item, index) => (
            <div className="hover-card" key={index} data-aos="zoom-in">
              <div className="app-img-box">
                <img src={item.img} alt={item.title} />

                <div className="hover-overlay">
                  <NavLink to="/contact" className="know-btn">KNOW MORE</NavLink>
                </div>
              </div>

              <p className="app-text">{item.title}</p>
            </div>
          ))}
        </div>

        {/* ================= SPECIFICATIONS ================= */}
        <h4 className="section-title" style={{ marginTop: "50px" }}>
          Technical Specifications
        </h4>

        <ul className="spec-list">
          <li>
            10 KVA – 30 KVA For 3 Phase – 1 Phase 
            <NavLink to="/technicalSpecification_3ph"> Learn More ➜ </NavLink>
          </li>
        </ul>
      </section>
    </>
  );
}

export default Online_ups_3ph;
