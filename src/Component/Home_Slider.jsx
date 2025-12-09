import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";

import AOS from "aos";
import "aos/dist/aos.css";

function Home_Slider() {

  useEffect(() => {
   
    AOS.init({
      duration: 800,
      once: false,   
      mirror: true,  
    });

    AOS.refresh();

 
    const timer = setTimeout(() => {
      const myCarousel = document.querySelector('#heroCarousel');
      if (myCarousel) {
        const carousel = new window.bootstrap.Carousel(myCarousel, {
          interval: 3000,
          ride: "carousel"
        });
      }
    }, 300);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >

        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3"></button>
        </div>

        {/* Slides */}
        <div className="carousel-inner">

          {/* ⭐ SLIDE 1 */}
          <div className="carousel-item active">
            <div className="flex-wrap justify-content-center container-1">

              <div className="containt">
                <h1 data-aos="fade-up">
                  Online UPS <br />
                  <span style={{ fontSize: "24px", fontWeight: "400" }}>
                    (Uninterruptible Power Supply)
                  </span>
                </h1>

                <NavLink
                  to="/product"
                  className="btn btn-primary"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  View Product
                </NavLink>
              </div>

              <img
                src="/img/Online_ups.png"
                className="carousel-img img-1"
                alt="Online UPS"
                data-aos="fade-left"
                data-aos-delay="500"
              />
            </div>
          </div>

          {/* ⭐ SLIDE 2 */}
          <div className="carousel-item">
            <div className="flex-wrap justify-content-center container-1">

              <div className="containt">
                <h1 data-aos="fade-up">Servo Controlled Voltage Stabilizer</h1>

                <NavLink
                  to="/product"
                  className="btn btn-primary"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  View Product
                </NavLink>
              </div>

              <img
                src="/img/servo_stabilizer_2.png"
                className="carousel-img img-1"
                alt="Servo Stabilizer"
                data-aos="fade-right"
                data-aos-delay="500"
              />
            </div>
          </div>

          {/* ⭐ SLIDE 3 */}
          <div className="carousel-item">
            <div className="flex-wrap justify-content-center container-1">

              <div className="containt">
                <h1 data-aos="zoom-in">Battery Charger</h1>

                <NavLink
                  to="/product"
                  className="btn btn-primary"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  View Product
                </NavLink>
              </div>

              <img
                src="/img/Battery_charger.png"
                className="carousel-img img-1"
                alt="Battery Charger"
                data-aos="fade-left"
                data-aos-delay="500"
              />
            </div>
          </div>

          {/* ⭐ SLIDE 4 */}
          <div className="carousel-item">
            <div className="flex-wrap justify-content-center container-1">

              <div className="containt">
                <h1 data-aos="fade-down">Load Bank</h1>

                <NavLink
                  to="/product"
                  className="btn btn-primary"
                  data-aos="fade-up"
                  data-aos-delay="300"
                >
                  View Product
                </NavLink>
              </div>

              <img
                src="/img/Load_bank.png"
                className="carousel-img img-1"
                alt="Load Bank"
                data-aos="zoom-in-left"
                data-aos-delay="500"
              />
            </div>
          </div>

        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>

      </div>
    </>
  );
}

export default Home_Slider;
