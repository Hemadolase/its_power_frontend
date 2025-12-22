import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavLink } from "react-router-dom";

function CatalogueSection() {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="catalogue-section" data-aos="fade-up">
      <h2 className="catalogue-title">Our Product Range</h2>
      <p className="catalogue-sub">
        Explore our reliable power solutions and industrial products
      </p>

      <div className="catalogue-buttons">

        <NavLink to="/onlineUPS" className="catalogue-btn" data-aos="zoom-in">
          <i className="fa fa-bolt"></i> Online UPS
        </NavLink>

        <NavLink
          to="/ServoStabilizer"
          className="catalogue-btn"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <i className="fa fa-sliders"></i> Servo Stabilizer
        </NavLink>

        <NavLink
          to="/Battery_Charger"
          className="catalogue-btn"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <i className="fa fa-battery-full"></i> Battery Charger
        </NavLink>

        <NavLink
          to="/contact"
          className="catalogue-btn"
          data-aos="zoom-in"
          data-aos-delay="450"
        >
          <i className="fa fa-envelope"></i> Request Product Details
        </NavLink>

      </div>
    </div>
  );
}

export default CatalogueSection;
