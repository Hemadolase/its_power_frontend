import React from 'react';
import { NavLink } from 'react-router-dom';

function Online_UPS() {
  return (
    <>
      {/* ====================== HERO SECTION ====================== */}
      <section className="hero-section">
  
        <div className="hero-left" data-aos="fade-right">
          <h1>Online UPS Solutions</h1>
          <p>
            Reliable, Regulated & Continuous Power for Critical Infrastructure
            
          </p>

          {/* ✔ Added Buttons (only change!) */}
          <div className="hero-btns">
            <NavLink to="/contact" className="hero-btn-primary">
              Get a Quote
            </NavLink>

            <a href="#ups_range" className="hero-btn-outline">
              Explore Range
            </a>
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <img src="img/Online_UPS_PG_1.png" alt="UPS" />
        </div>

      </section>


      {/* ====================== ABOUT SECTION ====================== */}
      <section className="about-section">

        <div className="about-left" data-aos="fade-right">
          <img src="/img/Online_UPS_PG_1.png" alt="UPS system" />
        </div>

        <div className="about-right" data-aos="fade-left">
          <h2>Continuous Power Protection for Critical Systems</h2>

          <p>
            The grid supply is often unstable—voltage fluctuations, harmonics, overload,
            and sudden spikes can damage sophisticated equipment like computers, CNC machines,
            medical systems, servers, industrial automation, and more.
          </p>

          <p>
            Our Online UPS ensures pure sine-wave output by converting AC to DC and back to AC,
            giving you a clean and uninterrupted power supply.
          </p>

          <ul>
            <li>Pure sine-wave regulated output</li>
            <li>Zero transfer time on battery mode</li>
            <li>Isolation from grid disturbances</li>
            <li>Ideal for IT, medical & industrial applications</li>
          </ul>
        </div>

      </section>


      {/* ====================== PRODUCT SECTION ====================== */}
      <section id="ups_range" className="product-section">
        <h2 className="section-title" data-aos="fade-up">Our Online UPS Range</h2>

        <div className="product-grid">

          <NavLink to="/online-ups-1ph" className="product-card b1" data-aos="zoom-in">
            <img src="/img/onlie_UPS_1PH-1PH.jpeg" alt="1Ph-1Ph UPS" />
            <h3>Online UPS 1Ph-1Ph</h3>
          </NavLink>

          <NavLink to="/online-ups-3ph" className="product-card b2" data-aos="zoom-in">
            <img src="/img/3ph-1ph(2).jpeg" alt="3Ph-1Ph UPS" />
            <h3>Online UPS 3Ph-1Ph</h3>
          </NavLink>

          <NavLink to="/online-ups-3-3ph" className="product-card b3" data-aos="zoom-in">
            <img src="/img/3ph-3ph(3).jpeg" alt="3Ph-3Ph UPS" />
            <h3>Online UPS 3Ph-3Ph</h3>
          </NavLink>

        </div>
      </section>
    </>
  );
}

export default Online_UPS;
