import React, { useEffect } from 'react';
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";

function Product_section_2() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,
      mirror: true,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      {/* Section Header */}
      <div className='Product_section_2' data-aos="fade-up">
        <p className='p' data-aos="fade-up" data-aos-delay="100">ITS Power Product Range</p>
        <h1 data-aos="fade-up" data-aos-delay="200">
          Comprehensive Power Solutions for Every Need
        </h1>
        <p data-aos="fade-up" data-aos-delay="300">
          ITS POWER & INFRASTRUCTURE offers a diverse and reliable range of power backup
          and management products designed for residential, commercial, and industrial needs.
        </p>
      </div>

      {/* Product Boxes */}
      <div className='Product_section_BOX1'>

        <div className="Product_section_b" data-aos="zoom-in" data-aos-delay="100">
          <div className='img1'>
            <img src="/img/online_3rd.jpeg" loading="lazy" alt="Online UPS" />
          </div>
          <p data-aos="fade-up" data-aos-delay="150">Online UPS</p>
          <NavLink to="/OnlineUPS" className="learn-more" data-aos="fade-up" data-aos-delay="200">
            Learn More →
          </NavLink>
        </div>

        <div className="Product_section_b" data-aos="zoom-in" data-aos-delay="200">
          <div className='img2'>
            <img src="/img/8th.jpeg" loading="lazy" alt="Battery Charger" />
          </div>
          <p data-aos="fade-up" data-aos-delay="250">Battery Charger</p>
          <NavLink to="/Battery_Charger" className="learn-more" data-aos="fade-up" data-aos-delay="300">
            Learn More →
          </NavLink>
        </div>

        <div className="Product_section_b" data-aos="zoom-in" data-aos-delay="300">
          <div className='img3'>
            <img src="/img/servo_stabilizer_4.jpeg" loading="lazy" alt="Servo Stabilizer" />
          </div>
          <p data-aos="fade-up" data-aos-delay="350">Servo Stabilizer</p>
          <NavLink to="/ServoStabilizer" className="learn-more" data-aos="fade-up" data-aos-delay="400">
            Learn More →
          </NavLink>
        </div>

        <div className="Product_section_b" data-aos="zoom-in" data-aos-delay="400">
          <div className='img4'>
            <img src="/img/online_3rd.jpeg" loading="lazy" alt="Industrial Inverter" />
          </div>
          <p data-aos="fade-up" data-aos-delay="450">Industrial Inverter</p>
          <NavLink to="/IndustrialInverter" className="learn-more" data-aos="fade-up" data-aos-delay="500">
            Learn More →
          </NavLink>
        </div>

        <div className="Product_section_b" data-aos="zoom-in" data-aos-delay="500">
          <div className='img5'>
            <img src="/img/loadBank_bg_img.jpeg" loading="lazy"  alt="Load Bank" />
          </div>
          <p data-aos="fade-up" data-aos-delay="550">Load Bank</p>
          <NavLink to="/LoadBank" className="learn-more" data-aos="fade-up" data-aos-delay="600">
            Learn More →
          </NavLink>
        </div>

        <div className="Product_section_b" data-aos="zoom-in" data-aos-delay="600">
         <div className='img6'>
           <img src="/img/online_2ed.jpeg" loading="lazy" alt="Solar Power Solutions" />
         </div>
         <p data-aos="fade-up" data-aos-delay="650">Solar Product</p>
         <NavLink
           to="/solarproduct"
           className="learn-more"
           data-aos="fade-up"
           data-aos-delay="700"
         >
           Learn More →
         </NavLink>
         </div>


      </div>
    </>
  );
}

export default Product_section_2;
