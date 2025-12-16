import React, { useState } from "react";
import Lightbox from "./Lightbox";

function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(null);
  const [activeCategory, setActiveCategory] = useState("All");

  // PRODUCT IMAGES WITH CATEGORY TAGS
  const productImages = [
    { src: "/img/Online_UPS_PG_1.png", category: "UPS" },
    { src: "/img/onlie_UPS_1PH-1PH.jpeg", category: "UPS" },
    { src: "/img/3ph-1ph(2).jpeg", category: "UPS" },
    { src: "/img/3ph-3ph(3).jpeg", category: "UPS" },

    { src: "/img/Battery_Chaerger.png", category: "Battery" },
    { src: "/img/1PH-BatteryCharger.jpeg", category: "Battery" },
    { src: "/img/battery_charger_1.jpeg", category: "Battery" },
    { src: "/img/battery_charger_2.png", category: "Battery" },
    { src: "/img/battery_charger_3.png", category: "Battery" },
    { src: "/img/battery_charger_4.png", category: "Battery" },
    { src: "/img/battery_charger_5.png", category: "Battery" },
    { src: "/img/battery_charger_6.png", category: "Battery" },
    { src: "/img/battery_charger_7.png", category: "Battery" },
    { src: "/img/battery_charger_8.png", category: "Battery" },

    { src: "/img/servo_stabilizer_1st.jpeg", category: "Servo" },
    { src: "/img/servo_stabilizer_2nd.jpeg", category: "Servo" },
    { src: "/img/servo_stabilizer_3.jpeg", category: "Servo" },

    {  src: "/img/load_bank_BG.png", category: "LoadBank" },
    {  src: "/img/LoadBank_5th.jpeg", category: "LoadBank" },
    {  src: "/img/loadBank_4th.jpeg", category: "LoadBank" },

    { src: "/img/Isolation_transformer_BG_1.png", category: "Transformer" },

    { src: "/img/online_2ed.jpeg", category: "Solar" },
  ];

  // FILTERED IMAGES
  const filteredImages =
    activeCategory === "All"
      ? productImages
      : productImages.filter((item) => item.category === activeCategory);

  const openLightbox = (index) => setCurrentIndex(index);
  const closeLightbox = () => setCurrentIndex(null);

  const nextImage = () =>
    setCurrentIndex((prev) => (prev + 1) % filteredImages.length);

  const prevImage = () =>
    setCurrentIndex((prev) =>
      prev === 0 ? filteredImages.length - 1 : prev - 1
    );

  return (
    <div className="gallery-page">

      <h1 className="gallery-title">Our Product Gallery</h1>
      <p className="gallery-subtitle">
        Explore our industrial-grade power solutions.
      </p>

      {/* CATEGORY FILTER BUTTONS */}
      <div className="gallery-filters">
        {["All", "UPS", "Battery", "Servo", "LoadBank", "Transformer", "Solar"].map(
          (cat) => (
            <button
              key={cat}
              className={`filter-btn ${
                activeCategory === cat ? "active-filter" : ""
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          )
        )}
      </div>

      {/* GRID GALLERY */}
      <div className="gallery-grid">
        {filteredImages.map((img, index) => (
          <div
            className="gallery-card"
            key={index}
            onClick={() => openLightbox(index)}
          >
            <img src={img.src} alt="Product" />
            <div className="view-overlay">View Image</div>
          </div>
        ))}
      </div>

      {/* LIGHTBOX VIEWER */}
      {currentIndex !== null && (
        <Lightbox
          image={filteredImages[currentIndex].src}
          onClose={closeLightbox}
          onNext={nextImage}
          onPrev={prevImage}
        />
      )}
    </div>
  );
}

export default Gallery;
