import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function OtherProducts() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const products = [
    { 
      img: "/img/Isolation_transformer_BG_1.png", 
      name: "Isolation Transformer",
      link: "/isolation_transformer"   // <-- your existing page
    },
    { 
      img: "/img/load_bank_BG.png", 
      name: "Load Bank",
      link: "/LoadBank"              // <-- your existing page
    },
    { 
      img: "/img/Online_UPS_BG.png", 
      name: "Inverter",
      link: "/IndustrialInverter"               // <-- your existing page
    },
  ];

  return (
    <section className="other-products-section">
      <h1 className="other-title" data-aos="fade-up">
        Other Products
      </h1>

      <div className="other-grid">
        {products.map((p, index) => (
          <NavLink to={p.link} className="other-card" key={index} data-aos="zoom-in">
            <div className="other-img-box">
              <img src={p.img} alt={p.name} />
            </div>
            <h3>{p.name}</h3>
          </NavLink>
        ))}
      </div>
    </section>
  );
}

export default OtherProducts;
