import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Carousel } from "bootstrap";   // <-- VERY IMPORTANT

function WhyChooseUs() {

  // AOS animation
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });

    const interval = setInterval(() => {
      AOS.refresh();
    }, 500);

    return () => clearInterval(interval);
  }, []);

  // Bootstrap Carousel autoplay
  useEffect(() => {
    const timer = setTimeout(() => {
      const myCarousel = document.querySelector("#myCarousel");
      if (myCarousel) {
        new Carousel(myCarousel, {
          interval: 3000,
          ride: "carousel",
          pause: false,
          wrap: true,
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="why_Choose_us">

      {/* LEFT SIDE */}
      <div className="b1" data-aos="fade-right">
        <h1>Why Choose US</h1>
        <h2>ITS POWER & INFRASTRUCTURE PVT.LTD ?</h2>
        <h5>UNWIND THE TREASURE OF POWER</h5>
      </div>

      {/* RIGHT SIDE — CAROUSEL */}
      <div className="b2">
        <div id="myCarousel" className="carousel slide slider_1">

          {/* Indicators */}
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="0" className="active"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="1"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="2"></button>
            <button type="button" data-bs-target="#myCarousel" data-bs-slide-to="3"></button>
          </div>

          {/* Slides */}
          <div className="carousel-inner">

            <div className="carousel-item active" data-bs-interval="3000">
              <div className="slide-content">
                <div className="slide-card">
                  <img src="/img/slider_1.png" className="slide-img" alt="" />
                  <h3 className="slide-title">Innovation</h3>
                  <p className="slide-text">
                    We bring you modern, cutting-edge DSP based solutions that incorporate the latest advancements.
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="slide-content">
                <div className="slide-card">
                  <img src="/img/24_support.png" className="slide-img" alt="" />
                  <h3 className="slide-title">24/7 Support</h3>
                  <p className="slide-text">
                    Our dedicated support team is available around the clock.
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="slide-content">
                <div className="slide-card">
                  <img src="/img/india.png" className="slide-img" alt="" />
                  <h3 className="slide-title">Made in India</h3>
                  <p className="slide-text">
                    Designed and built for India’s power conditions.
                  </p>
                </div>
              </div>
            </div>

            <div className="carousel-item" data-bs-interval="3000">
              <div className="slide-content">
                <div className="slide-card">
                  <img src="/img/quality.png" className="slide-img" alt="" />
                  <h3 className="slide-title">Affordable Quality</h3>
                  <p className="slide-text">
                    High-performance UPS solutions at a budget-friendly price.
                  </p>
                </div>
              </div>
            </div>

          </div>

          {/* Prev & Next */}
          <button className="carousel-control-prev" type="button" data-bs-target="#myCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon"></span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#myCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </div>
  );
}

export default WhyChooseUs;
