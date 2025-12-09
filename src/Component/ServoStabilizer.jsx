import React from "react";
import { NavLink } from "react-router-dom";

function ServoStabilizer() {
  return (
    <>
      {/* ------------------------- HERO SECTION ------------------------- */}
      <div className="servo-hero-container">

        <div className="servo-hero-content" data-aos="fade-right">
          <h1 data-aos="fade-down">Servo Stabilizer</h1>
          <p data-aos="fade-up">
            Precision voltage regulation for industrial, commercial <br />
            & sensitive electronic equipment.
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

        <div className="servo-hero-image" data-aos="zoom-in">
          <img src="/img/Servo_stabilizer_BG_2.png" alt="Servo BG" />
        </div>

      </div>

      {/* ------------------------- ABOUT SECTION ------------------------- */}
      <div className="servo-about-section">

        <div className="about-left" data-aos="fade-right">
          <img src="/img/Servo_stabilizer_BG_2.png" alt="Servo" />
        </div>

        <div className="about-right" data-aos="fade-left">
          <h2 data-aos="fade-down">Reliable Voltage Protection for Critical Equipment</h2>

          <p data-aos="fade-up">
            Servo stabilizers correct voltage fluctuations using Variac & Buck–Boost
            transformers controlled by advanced DSP technology. They ensure a stable,
            regulated output voltage even during heavy grid disturbances.
          </p>

          <p data-aos="fade-up">
            Ideal for CNC machines, medical equipment, industrial automation, IT
            infrastructure, motors, and sensitive electronics.
          </p>

          <ul data-aos="fade-up">
            <li>Pure regulated output voltage</li>
            <li>Fast correction speed</li>
            <li>DSP-based digital control system</li>
            <li>Ideal for industrial & medical applications</li>
          </ul>
        </div>
      </div>

      {/* ------------------------- PRODUCT RANGE ------------------------- */}
      <div className="servo-range-wrapper">
        <h2 className="range-title" data-aos="fade-up">Our Servo Stabilizer Range</h2>

        <div className="servo-cards-container">

          <NavLink to="/servo_1ph_1ph" data-aos="zoom-in">
            <div className="servo-card b1">
              <img src="/img/servo_stabilizer_2nd.jpeg" alt="" />
              <h3>Servo Stabilizer 1Ph – 1Ph</h3>
            </div>
          </NavLink>

          <NavLink to="/servo_3ph_3ph" data-aos="zoom-in" data-aos-delay="150">
            <div className="servo-card b2">
              <img src="/img/servo_stabilizer_3.jpeg" alt="" />
              <h3>Servo Stabilizer 3Ph – 3Ph</h3>
            </div>
          </NavLink>

          <NavLink to="/servo_3ph_oil" data-aos="zoom-in" data-aos-delay="300">
            <div className="servo-card b3">
              <img src="/img/servo_stabilizer_1st.jpeg" alt="" />
              <h3>Servo Stabilizer 3Ph – Oil Cooled</h3>
            </div>
          </NavLink>

        </div>
      </div>
    </>
  );
}

export default ServoStabilizer;
