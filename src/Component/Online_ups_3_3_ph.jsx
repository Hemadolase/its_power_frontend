import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Online_ups_3_3_ph() {

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
          <h1 className="ups-title">Online UPS 3Ph-3Ph</h1>

          <p className="ups-subtitle">
            High-performance industrial-grade online UPS built for heavy loads,
            high-inrush motors, IT systems, CNC machines, and mission-critical environments.
            Designed using DSP technology for maximum reliability and clean power output.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-primary">Download Brochure</a>
            <a href="/technicalSpecification_3_3ph" className="btn-outline">Technical Specs</a>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <img
            src="/img/3ph-3ph(3).jpeg"
            alt="Online UPS 3Ph–3Ph"
            className="product-image"
          />
        </div>

      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section id="features" className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">
          <ul>
            <li>True Online Double Conversion Technology</li>
            <li>DSP Based Micro-controlled Design</li>
            <li>Low Noise Operation</li>
            <li>High Surge Handling Capability</li>
            <li>Excellent Output Waveform on Inductive Load</li>
            <li>High Regulation on Step Load</li>
          </ul>

          <ul>
            <li>IGBT Rectifier / PFC Based Design</li>
            <li>Inbuilt Isolation Transformer at Output</li>
            <li>Wide Input Voltage Range</li>
            <li>User-Friendly Digital Display</li>
            <li>High PWM Switching Frequency</li>
            <li>Easy Installation & Maintenance</li>
          </ul>
        </div>
      </section>

      {/* ================= APPLICATIONS ================= */}
      <section className="ups-applications">
        <h2 className="section-title">Applications</h2>

        <div className="apps-grid">
          {apps.map((item, i) => (
            <div className="hover-card" key={i} data-aos="zoom-in">
              <div className="app-img-box">
                <img src={item.img} alt={item.title} />
                <div className="hover-overlay">
                  <a href="/contact" className="know-btn">KNOW MORE</a>
                </div>
              </div>
              <p className="app-text">{item.title}</p>
            </div>
          ))}
        </div>

        <h4 className="section-title" style={{ marginTop: "50px" }}>
          Technical Specifications
        </h4>

        <ul className="spec-list">
          <li>
            30 KVA – 200 KVA For 3 Phase – 3 Phase 
            <a href="/technicalSpecification_3_3ph"> Learn More ➜ </a>
          </li>
        </ul>

      </section>

    </>
  );
}

export default Online_ups_3_3_ph;
