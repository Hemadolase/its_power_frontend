import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function AchiveMents() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <div className="achievements-section" data-aos="fade-up">

      {/* Title */}
      <h1 className="title" data-aos="fade-up" data-aos-delay="100">
        <span>Our</span> Achievements
      </h1>

      {/* Container */}
      <div className="achievement-container">

        {/* Box 1 */}
        <div className="achievement-box" data-aos="zoom-in" data-aos-delay="200">
          <div className="icon-bg" data-aos="fade-in" data-aos-delay="300">
            <img src="/img/customer-icon.svg" alt="experience" />
          </div>
          <h2 data-aos="fade-up" data-aos-delay="350">13 +</h2>
          <p data-aos="fade-up" data-aos-delay="400">Years of Experience</p>
        </div>

        {/* Box 2 */}
        <div className="achievement-box" data-aos="zoom-in" data-aos-delay="300">
          <div className="icon-bg" data-aos="fade-in" data-aos-delay="400">
            <img src="/img/dealers.svg" alt="customers" />
          </div>
          <h2 data-aos="fade-up" data-aos-delay="450">5000 +</h2>
          <p data-aos="fade-up" data-aos-delay="500">Active Customers</p>
        </div>

        {/* Box 3 */}
        <div className="achievement-box" data-aos="zoom-in" data-aos-delay="400">
          <div className="icon-bg" data-aos="fade-in" data-aos-delay="500">
            <img src="/img/products.svg" alt="units sold" />
          </div>
          <h2 data-aos="fade-up" data-aos-delay="550">500000 +</h2>
          <p data-aos="fade-up" data-aos-delay="600">Units Sold</p>
        </div>

      </div>
    </div>
  );
}

export default AchiveMents;
