import React from "react";
import { NavLink } from "react-router-dom";

function Industrial_Inverter() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="inverter-hero">
        <div className="hero-content" data-aos="fade-right">
          <h1>Industrial Inverter</h1>
          <p>High-efficiency power backup for homes, offices, industries & critical loads.</p>
           <div className="hero-btns">
                        <NavLink to="/contact" className="hero-btn-primary">
                          Get a Quote
                        </NavLink>
            
                        <a href="#battery-products" className="hero-btn-outline">
                          Explore Range
                        </a>
                      </div>
        </div>

        <div className="hero-image" >
          <img src="/img/Online_UPS_BG.png" alt="Industrial Inverter BG" data-aos="zoom-in" />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="inverter-about">

       
       

        {/* RIGHT TEXT */}
        <div className="about-right" data-aos="fade-left">
          <h2>Reliable Power Backup with Advanced Inverter Technology</h2>

          <p>
            Industrial inverters are a smarter alternative to traditional generators.
            They eliminate fuel wastage, noise, pollution, and long change-over delays.
            Inverters supply AC power during mains failure by converting stored DC battery
            energy using high-speed switching technology.
          </p>

          <h4>Available Ratings:</h4>
          <ul>
            <li>5 KVA – 10 KVA : 1Φ–1Φ</li>
            <li>6 KVA : 3Φ–3Φ</li>
          </ul>

          <h4>Features of Industrial Inverter:</h4>
          <ul>
            <li>Pure sine-wave output (Modified sine-wave also available)</li>
            <li>Micro-controller based smart system</li>
            <li>Short-circuit protection</li>
            <li>
              Suitable for domestic loads (fan, TV, computer, appliances) & as an Offline UPS
            </li>
            <li>
              Fold-Back Protection: System auto-checks load three times before tripping
            </li>
            <li>Overcharge protection</li>
            <li>No flickering or noise during battery operation</li>
            <li>Isolation transformer included</li>
            <li>Generator compatible</li>
            <li>Available ranges: 600 VA to 5 KVA</li>
          </ul>

          <h4>Applications:</h4>
          <ul>
            <li>Domestic Use</li>
            <li>Small Commercial Establishments</li>
          </ul>

          <h4>Technical Specifications:</h4>
          <ul>
            <li>
              3 KVA – 15 KVA (1Φ–1Φ)  
              <NavLink to="/industrial_inverter_1ph-1ph"> Learn More ↗</NavLink>
            </li>

            <li>
              5 KVA – 200 KVA (3Φ–3Φ)  
              <NavLink to="/industrial_inverter_3ph-3ph"> Learn More ↗</NavLink>
            </li>
          </ul>
        </div>

      </section>
    </>
  );
}

export default Industrial_Inverter;
