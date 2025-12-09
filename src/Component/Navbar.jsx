import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function Navbar() {

  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    AOS.init({
      duration: 600,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  // ⭐ SEARCH FUNCTION
  const handleSearch = (e) => {
    e.preventDefault();

    const text = query.toLowerCase().trim();
    if (!text) return;

    // MAIN PRODUCT PAGE
    if (text === "product" || text === "products") {
      navigate("/product");
      return;
    }

    // ONLINE UPS
    if (text.includes("online ups") || text.includes("ups")) {
      navigate("/onlineUPS");
      return;
    }

    // BATTERY CHARGER
    if (text.includes("battery") || text.includes("charger")) {
      navigate("/Battery_Charger");
      return;
    }

    // SERVO
    if (text.includes("servo") || text.includes("stabiliser") || text.includes("stabilizer")) {
      navigate("/ServoStabilizer");
      return;
    }

    // LOAD BANK
    if (text.includes("load")) {
      navigate("/LoadBank");
      return;
    }

    // INDUSTRIAL INVERTER
    if (text.includes("industrial") || text.includes("inverter")) {
      navigate("/IndustrialInverter");
      return;
    }

    // ISOLATION TRANSFORMER
    if (text.includes("isolation") || text.includes("transformer")) {
      navigate("/isolation_transformer");
      return;
    }

    // SOLAR OFF GRID INVERTER
    if (text.includes("solar") || text.includes("off grid") || text.includes("solar inverter")) {
      navigate("/solarOff-GridInverter");
      return;
    }

    // DEFAULT → Search Page
    navigate(`/search?q=${query}`);
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-light shadow-sm main-nav"
      data-aos="fade-down"
    >
      <div className="container">

        {/* LOGO */}
        <NavLink className="navbar-brand" to="/" data-aos="fade-right" data-aos-delay="100">
          <img
            src="/img/Untitled design (17)-Picsart-BackgroundRemover.png"
            width="110"
            alt="logo"
          />
        </NavLink>

        {/* MOBILE TOGGLE */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* MENU */}
        <div className="collapse navbar-collapse" id="navbarNav">

          <ul className="navbar-nav" data-aos="fade-left" data-aos-delay="200">

            <li className="nav-item">
              <NavLink className="nav-link" to="/">Home</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/about">About</NavLink>
            </li>

            {/* PRODUCT + ARROW */}
            <li className="nav-item dropdown">

              <NavLink className="nav-link" to="/product">Product</NavLink>

              <button
                className="dropdown-toggle bg-transparent border-0"
                data-bs-toggle="dropdown"
              ></button>

              <ul className="dropdown-menu">
                <li><NavLink className="dropdown-item" to="/onlineUPS">Online UPS</NavLink></li>
                <li><NavLink className="dropdown-item" to="/Battery_Charger">Battery Charger</NavLink></li>
                <li><NavLink className="dropdown-item" to="/ServoStabilizer">Servo Stabiliser</NavLink></li>
                <li><NavLink className="dropdown-item" to="/LoadBank">Load Bank</NavLink></li>
                <li><NavLink className="dropdown-item" to="/IndustrialInverter">Industrial Inverter</NavLink></li>
                <li><NavLink className="dropdown-item" to="/isolation_transformer">Isolation Transformer</NavLink></li>
                <li><NavLink className="dropdown-item" to="/solarOff-GridInverter">Solar Off-Grid Inverter</NavLink></li>
              </ul>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/career">Career</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/gellery">Gallery</NavLink>
            </li>

            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">Contact</NavLink>
            </li>

          </ul>

          {/* ⭐ SEARCH BOX WITH FUNCTIONALITY */}
          <form className="nav-search-box d-flex" onSubmit={handleSearch}>
            <input
              className="form-control me-2"
              placeholder="Search..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className="btn btn-outline-success">Search</button>
          </form>

        </div>
      </div>
    </nav>
  );
}

export default Navbar;
