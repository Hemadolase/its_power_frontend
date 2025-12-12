import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function SolarProduct() {
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
     <section className="solar-hero">
  <div className="solar-hero-text" data-aos="fade-right">
    <h1 className="fw-bold">Solar Products</h1>
    <p>High-efficiency solar-powered solutions designed for homes, industries and commercial applications.</p>

    <div className="solar-hero-btns">
      <NavLink to="/contact" className="solar-btn-primary">Get a Quote</NavLink>
      <a href="#solar-products" className="solar-btn-outline">Explore Range</a>
    </div>
  </div>

  <div className="solar-hero-img" data-aos="zoom-in">
    <img src="/img/online_2ed.jpeg" alt="Solar Products" />
  </div>
</section>

{/* ABOUT SECTION */}
{/* ABOUT SECTION */}
<section className="solar-about">
  <div className="solar-about-right" data-aos="fade-left">
    <h2>Reliable Solar Solutions for Every Application</h2>
    <p>
      We offer Off-Grid and Hybrid solar solutions suitable for domestic, commercial,
      industrial and utility applications.
    </p>

    {/* OFF-GRID INVERTER FEATURES */}
    <h3 className="mt-4 fw-bold">Off-Grid Solar Inverter – Key Features</h3>

    <section className="ups-info-features">
      <div className="info-grid" data-aos="fade-up">
        <ul>
          <li>DSP-based high-efficiency microcontroller design</li>
          <li>MPPT solar charge controller with high charging efficiency</li>
          <li>All parameters displayed on LCD screen</li>
          <li>Very low changeover time – system stays in sync with grid</li>
          <li>Bidirectional operation (DC→AC inverter & AC→DC charger)</li>
        </ul>

        <ul>
          <li>Charging current adjustable without replacing system components</li>
          <li>High-efficiency isolation transformer design</li>
          <li>Operates even without battery using direct solar power</li>
          <li>Available in 1KW to 15KW with multiple DC voltage options</li>
          <li>Supports multiple operating configurations</li>
        </ul>
      </div>
    </section>

    {/* HYBRID CONTROLLER FEATURES */}
    <h3 className="mt-4 fw-bold">Hybrid Solar Charge Controller – Features</h3>

    <section className="ups-info-features">
      <div className="info-grid" data-aos="fade-up">
        <ul>
          <li>MPPT based solar charge controller</li>
          <li>Inbuilt solar PV reverse protection</li>
          <li>SMPS based grid charger with solar charging</li>
          <li>Pure sinewave 230VAC OLP with isolation transformer</li>
          <li>12V or 24V DC output options</li>
        </ul>

        <ul>
          <li>Auto start facility after battery charging</li>
          <li>Easy operation & installation</li>
          <li>Multiple DC output options (12V–12V–12V / 12V–12V–24V)</li>
          <li>230VAC + DC output controller available</li>
          <li>Custom solutions available</li>
        </ul>
      </div>
    </section>

  </div>
</section>

{/* PRODUCT CARDS */}
<section id="solar-products" className="solar-products">
  <h2 className="solar-title" data-aos="fade-up">Solar Product Range</h2>

  <div className="solar-grid">

    <NavLink to="/solarOff-GridInverter" className="solar-card b1" data-aos="zoom-in">
      <img src="/img/online_2ed.jpeg" alt="Solar Off-Grid" />
      <h3>Solar Off-Grid 1Ø–1Ø Inverter</h3>
    </NavLink>

    <NavLink to="/solarOff-GridInverter" className="solar-card b2" data-aos="zoom-in">
      <img src="/img/online_2ed.jpeg" alt="Solar UPS" />
      <h3>Solar UPS</h3>
    </NavLink>

    <NavLink to="/hybrid-multi-output" className="solar-card b3" data-aos="zoom-in">
      <img src="/img/Hybdrid_2.jpeg" alt="Hybrid Multi Output" />
      <h3>Hybrid Controller – Multiple DC Outputs</h3>
    </NavLink>

    <NavLink to="/hybrid-acdc" className="solar-card b4" data-aos="zoom-in">
      <img src="/img/Hybrid_1.jpeg" alt="Hybrid AC DC" />
      <h3>Hybrid Controller (230VAC + DC Output)</h3>
    </NavLink>

  </div>
</section>

       </>
  );
}

export default SolarProduct;
