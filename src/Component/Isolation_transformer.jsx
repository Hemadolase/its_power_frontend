import React from "react";
import { NavLink } from "react-router-dom";

function Isolation_transformer() {
  return (
    <>
      {/* ================= HERO SECTION ================= */}
      <section className="iso-hero">
        <div className="iso-hero-content" data-aos="fade-right">
          <h1>Isolation Transformer</h1>
          <p>
            Protecting sensitive equipment from noise, surges & voltage disturbances.
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

        <div className="iso-hero-image" >
          <img
            src="/img/Isolation_transformer_BG_1.png"
            alt="Isolation Transformer Banner"
            data-aos="zoom-in"
          />
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="iso-about">
        {/* Left Image */}


        {/* Right Content */}
        <div className="iso-about-right" data-aos="fade-left">
          <h2>Safe, Stable & Noise-Free Power</h2>

          <h4>Product History – Isolation Transformer</h4>

          <p>
            An Isolation Transformer is designed to provide electrical isolation 
            between the input and output supply, making it extremely useful for 
            sensitive electronic and industrial equipment. It eliminates direct 
            electrical connection and protects devices from voltage disturbances, 
            electrical noise, and surges.
          </p>

          <p>
            In normal grid supply, voltage may contain variations, harmonics, spikes, 
            and noise created by heavy loads and industrial machinery. Sensitive 
            systems like medical equipment, CNC machines, laboratory instruments, 
            IT servers, and audio devices cannot tolerate these disturbances.
          </p>

          <p>
            Using the principle of galvanic isolation, the primary and secondary 
            windings are magnetically coupled but electrically separated. This 
            prevents ground loops, filters noise, and ensures stable and clean 
            power for connected devices.
          </p>

          <p>
            Therefore, Isolation Transformers are widely used in hospitals, labs, 
            industries, test benches, communication equipment, and other setups where 
            power stability and equipment safety are critical.
          </p>
        </div>
      </section>
    </>
  );
}

export default Isolation_transformer;
