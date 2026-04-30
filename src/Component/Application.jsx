import React from "react";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Application() {

  const applications = [
    { title: "Oil & Gas", img: "/img/1.jpg" },
    { title: "Power & Energy", img: "/img/2.jpg" },
    { title: "Automobile", img: "/img/3.jpg" },
    { title: "Metal Forming", img: "/img/4.jpg" },
    { title: "Plastic Moulding", img: "/img/5.jpg" },
    { title: "Aerospace", img: "/img/6.jpg" },
    { title: "Healthcare", img: "/img/7.jpg" },
    { title: "Chemical Industry", img: "/img/8.jpg" },
    { title: "IT & Data Centers", img: "img/It_sector.webp" },
    { title: "Factory Automation", img: "/img/Automation.webp" },
    { title: "Retail Stores", img: "/img/Retail_Store.jpg" },
    { title: "Banking & ATMs", img: "/img/Banking.jpg" },
    { title: "CNC Machines", img: "/img/CNC.png" },
    { title: "Packaging Units", img: "/img/Packing img.jpg" },
    { title: "Small Industries", img: "/img/Small_industries.jpg" },
  ];

  return (
    <section className="new-app-section">
      <h2 className="new-app-title" data-aos="fade-up">
        Applications We Serve
      </h2>

      <p className="new-app-subtitle" data-aos="fade-up" data-aos-delay="100">
        Our power solutions support a wide range of industries, ensuring
        reliability, efficiency, and operational excellence.
      </p>

      <div className="new-app-grid">
        {applications.map((app, index) => (
          <div className="new-app-card" key={index} data-aos="zoom-in" data-aos-delay={index * 80}>
            <div className="new-app-img">
              <img src={app.img} alt={app.title} />
            </div>

            <div className="new-app-overlay">
              <NavLink to="/contact" className="new-app-btn">
                Know More
              </NavLink>
            </div>

            <h3 className="new-app-name">{app.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Application;
