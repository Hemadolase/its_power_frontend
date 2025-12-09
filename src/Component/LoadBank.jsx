import React from "react";
import { NavLink } from "react-router-dom";

function LoadBank() {
  return (
    <>
      {/* ------------------------- HERO SECTION ------------------------- */}
      <section className="loadbank-hero">

        <div className="hero-text" data-aos="fade-right">
          <h1>Load Bank</h1>
          <p>
            Precision load testing for generators, UPS systems,
            transformers & critical power equipment.
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
          <img src="/img/load_bank_BG.png" alt="Load Bank" />
        </div>

      </section>

      {/* -------------------- PRODUCT HISTORY SECTION -------------------- */}
     {/* ================== LOAD BANK ABOUT SECTION (LIKE ONLINE UPS) ================== */}
<section className="loadbank-about">

  {/* LEFT IMAGE */}
  <div className="about-left" data-aos="fade-right">
    <img src="/img/load_bank_BG.png" alt="Load Bank" />
  </div>

  {/* RIGHT TEXT */}
  <div className="about-right" data-aos="fade-left">
    <h2>Reliable Testing for Power Equipment</h2>

    <p>
      Load Banks are essential devices used to test the performance, efficiency,
      and stability of critical power equipment such as generators, UPS systems,
      transformers, and industrial batteries.
    </p>

    <p>
      They simulate real-world electrical loads in a controlled environment,
      ensuring the system operates reliably under peak demand and preventing
      unexpected failures.
    </p>

    <ul>
      <li>Accurate load testing capabilities</li>
      <li>Safe and controlled performance evaluation</li>
      <li>Improves equipment reliability</li>
      <li>Real-time operational monitoring</li>
    </ul>
  </div>

</section>

      {/* ------------------------- PRODUCT TYPES ------------------------- */}
      <section className="loadbank-types">

        <h2 className="section-title" data-aos="fade-up">
          Our Load Bank Range
        </h2>

        <div className="types-container">

          <NavLink to="/loadbank_resistive" data-aos="zoom-in">
            <div className="type-card b1">
              <img src="/img/loadBank_4th.jpeg" alt="Resistive Load Bank" />
              <h5>AC Load Bank</h5>
            </div>
          </NavLink>

          <NavLink to="/loadbank_inductive" data-aos="zoom-in" data-aos-delay="200">
            <div className="type-card b2">
              <img src="/img/LoadBank_5th.jpeg" alt="Inductive Load Bank" />
              <h5>DC Load Bank</h5>
            </div>
          </NavLink>

        </div>

      </section>
    </>
  );
}

export default LoadBank;
