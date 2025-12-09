import React from "react";
import Application from "./Application";

function Loadbank_inductive() {
  return (
    <>
      {/* ----------------------------
          HERO SECTION (UPS Style)
      ----------------------------- */}
      <section className="ups-hero">
        <div className="hero-left" data-aos="fade-right">
          <h1 className="ups-title">Inductive Load Bank</h1>

          <p className="ups-subtitle">
            High-performance inductive load bank designed for testing motors, UPS,
            DG sets, transformers, and industrial power equipment with precise
            reactive load control and advanced protection systems.
          </p>

          <div className="hero-buttons">
            <a href="#" className="btn-primary">Download Brochure</a>
           
          </div>
        </div>

        <div className="hero-right" data-aos="zoom-in">
         <img src="/img/LoadBank_5th.jpeg" alt="Inductive Load Bank" />
        </div>
      </section>

      {/* ----------------------------
          FEATURES SECTION (GRID STYLE)
      ----------------------------- */}
      <section className="ups-info-features">
        <h2 className="section-title">Key Features</h2>

        <div className="info-grid" data-aos="fade-up">
          <ul>
            <li>Load Range: 1 kW to 2000 kW.</li>
            <li>Available in Resistive, Reactive, or Combined (R + L) types.</li>
            <li>Strong forced-air cooling with heavy-duty ventilation system.</li>
            <li>Precise load steps for gradual loading and stability.</li>
            <li>High measurement accuracy with LED / Digital metering.</li>
            <li>Ideal for UPS, DG Sets, Motors & Transformers testing.</li>
          </ul>

          <ul>
            <li>Over-Temperature, Overload & Short Circuit protection.</li>
            <li>Emergency Stop button for safe shutdown.</li>
            <li>Powder-coated MS body with optional trolley wheels.</li>
            <li>Auto & Manual load control options.</li>
            <li>Status indicators for Load, Fan, Power & Fault.</li>
            <li>Optional RS485 / MODBUS / WiFi monitoring system.</li>
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

export default Loadbank_inductive;
