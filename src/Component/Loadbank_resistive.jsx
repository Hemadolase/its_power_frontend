import React from "react";
import Application from "./Application";

function Loadbank_resistive() {
  return (
    <>
      {/* ----------------------------
          HERO SECTION
      ----------------------------- */}
    <section className="ups-hero resistive-hero">

        <div className="hero-left" data-aos="fade-right">
          <h1 className="ups-title">Resistive Load Bank</h1>

          <p className="ups-subtitle">
            High-performance AC resistive load bank designed for testing UPS,
            DG sets, transformers, and power equipment with precise load control
            and robust protection systems.
          </p>

          <div className="hero-buttons">
           
           
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
          <img
            src="/img/DC_load_bank.jpeg"
            alt="Resistive Load Bank"
            className="product-image"
          />
        </div>
      </section>

      {/* ----------------------------
          FEATURES SECTION
      ----------------------------- */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">
          <ul>
            <li>Available Load Range: 1 kW to 2000 kW.</li>
            <li>Resistive, Reactive, or Combined (R + L) load bank types.</li>
            <li>Heavy-duty forced-air cooling for long-duration testing.</li>
            <li>Highly accurate metering with Digital / LED displays.</li>
            <li>Precise load steps for progressive loading.</li>
            <li>Suitable for UPS, DG Sets, Transformers & Power Systems.</li>
          </ul>

          <ul>
            <li>Over-Temperature, Overload & Short Circuit protection.</li>
            <li>Emergency Stop button for safe shutdown.</li>
            <li>Powder-coated MS body with optional trolley wheels.</li>
            <li>Auto / Manual load control modes.</li>
            <li>Indicators for Power, Load, Fan & Faults.</li>
            <li>Optional RS485 / MODBUS / WiFi for remote monitoring.</li>
          </ul>
        </div>
      </section>

      {/* ----------------------------
          APPLICATION SECTION
      ----------------------------- */}
      <Application />
    </>
  );
}

export default Loadbank_resistive;
