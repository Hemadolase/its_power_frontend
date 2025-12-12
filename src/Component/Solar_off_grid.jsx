import React from "react";
import { NavLink } from "react-router-dom";

function Solar_off_grid() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="solar-hero">
        <div className="solar-hero-content" data-aos="fade-up">
          <h1>Solar Off-Grid  <br />Inverter / Solar UPS</h1>
          <p>Reliable, renewable and independent power – anywhere, anytime.</p>
           <div className="hero-btns">
                        <NavLink to="/contact" className="hero-btn-primary">
                          Get a Quote
                        </NavLink>
            
                       
                      </div>
        </div>

        <div className="hero-image solar-hero-img" data-aos="zoom-in">
  <img  src="/img/online_2ed.jpeg" alt="Solar Products" />
</div>

      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="solar-about">

        {/* LEFT IMAGE */}
       
        {/* RIGHT CONTENT */}
        <div className="solar-about-right" data-aos="fade-left">
          <h2>Reliable Power Through Solar Independence</h2>

          <h4>Product History – Solar Off-Grid Inverter</h4>

          <p>
            A Solar Off-Grid inverter is designed for areas where the electricity
            grid is unavailable, unstable, or unreliable. It converts solar DC
            power into usable 230V AC output—offering complete energy independence.
          </p>

          <p>
            Solar panels generate DC power which is stored in batteries. The 
            inverter converts this DC power into AC to run appliances safely and 
            efficiently.
          </p>

          <p>
            Solar Off-Grid systems ensure uninterrupted power during:
          </p>

          <ul>
            <li>Power cuts</li>
            <li>Remote locations without electricity</li>
            <li>Fluctuating or highly unstable grid supply</li>
          </ul>

          <p>
            With proper charging, regulation, and battery management, an Off-Grid 
            inverter provides clean, renewable, and consistent energy for homes, 
            farms, shops, telecom towers, and remote applications.
          </p>
        </div>

      </section>
    </>
  );
}

export default Solar_off_grid;
