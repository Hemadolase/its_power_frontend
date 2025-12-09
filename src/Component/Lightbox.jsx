import React from "react";

function Lightbox({ image, onClose, onNext, onPrev }) {
  return (
    <div className="lightbox-overlay">
      <span className="close-btn" onClick={onClose}>×</span>

      <img src={image} alt="Preview" className="lightbox-image" />

      <button className="prev-btn" onClick={onPrev}>❮</button>
      <button className="next-btn" onClick={onNext}>❯</button>
    </div>
  );
}

export default Lightbox;
