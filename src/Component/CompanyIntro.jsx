import React, { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import AOS from "aos";               // ✅ MUST import AOS
import "aos/dist/aos.css";           // ✅ MUST import AOS CSS

function CompanyIntro() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,   // animation repeats every scroll
      mirror: true,  // animate on scroll-up
    });

    AOS.refresh();
  }, []);

  return (
    <>
      <div className='section-3'>
        
        <div className='box1' data-aos="fade-right">
          <img src="/img/about-img.webp" alt="" />
        </div>

        <div className='box2' data-aos="fade-left">
          <h4><div className='line'></div> WHO WE ARE</h4>
          <h1>ITS POWER & INFRASTRUCTURE PVT.LTD</h1>
          <p>
            ITS Power & Infrastructure Pvt. Ltd. founded on 2nd Feb 2013.  
            We are one of the leading manufacturers of power products like  
            UPS, Solar Inverter, Solar UPS, Battery Charger, Stabilizer & Inverter.
          </p>

          <NavLink to='/about'>
            <button>Read More</button>
          </NavLink>
        </div>

      </div>
    </>
  );
}

export default CompanyIntro;
