import React from "react";

function Home_Slider() {
  return (
    <>
      <div
        id="heroCarousel"
        className="carousel slide carousel-fade"
        data-bs-ride="carousel"
        data-bs-interval="3000"
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="0" className="active"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="1"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="2"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="3"></button>
          <button type="button" data-bs-target="#heroCarousel" data-bs-slide-to="4"></button>
        </div>

        <div className="carousel-inner">

          {/* Slide 1 – Industrial Solution */}
          <div className="carousel-item active">
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url('/img/header-bg.jpg')",
              }}
            >
              <div className="hero-content">
                <h6  data-aos="fade-up">DON’T LOOK FURTHER, HERE IS THE KEY</h6>
                <h1  data-aos="fade-up">We’re Industrial Solution</h1>
                <p>
                  Providing advanced power & infrastructure solutions with modern technology.
                </p>
                <button className="btn btn-warning hero-btn">GET STARTED</button>
              </div>
            </div>
          </div>

          {/* Slide 2 – Online UPS */}
          <div className="carousel-item">
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url('/img/Slider_bg_5.png')",
              }}
            >
              <div className="hero-content">
                <h1  data-aos="fade-up">Online UPS</h1>
                <p  data-aos="fade-up">Uninterruptible Power Supply for all Industrial Needs.</p>
                <button className="btn btn-warning hero-btn">VIEW PRODUCT</button>
              </div>
            </div>
          </div>

          {/* Slide 3 – Servo Stabilizer */}
          <div className="carousel-item">
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url('/img/Slider_bg_5.png')",
              }}
            >
              <div className="hero-content">
                <h1  data-aos="fade-up">Servo Controlled Stabilizer</h1>
                <p  data-aos="fade-up">High accuracy voltage control with reliable performance.</p>
                <button className="btn btn-warning hero-btn">VIEW PRODUCT</button>
              </div>
            </div>
          </div>

          {/* Slide 4 – Battery Charger */}
          <div className="carousel-item">
            <div
              className="hero-slide"
              style={{
                backgroundImage: "url('/img/Slider_bg_5.png')",
              }}
            >
              <div className="hero-content">
                <h1  data-aos="fade-up">Battery Charger</h1>
                <p  data-aos="fade-up">Reliable charging performance for all industrial systems.</p>
                <button className="btn btn-warning hero-btn">VIEW PRODUCT</button>
              </div>
            </div>
          </div>

          {/* Slide 5 – Load Bank */}
          <div className="carousel-item">
            <div
              className="hero-slide"
              style={{
               backgroundImage: "url('/img/Slider_bg_5.png')",
              }}
            >
              <div className="hero-content">
                <h1  data-aos="fade-up">Load Bank</h1>
                <p  data-aos="fade-up">Accurate load testing with high efficiency and safety.</p>
                <button className="btn btn-warning hero-btn">VIEW PRODUCT</button>
              </div>
            </div>
          </div>

        </div>

        {/* Controls */}
        <button className="carousel-control-prev" type="button" data-bs-target="#heroCarousel" data-bs-slide="prev">
          <span className="carousel-control-prev-icon"></span>
        </button>

        <button className="carousel-control-next" type="button" data-bs-target="#heroCarousel" data-bs-slide="next">
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
    </>
  );
}

export default Home_Slider;
