import React, { useEffect } from 'react';
import {NavLink} from  'react-router-dom'
import AOS from "aos";
import "aos/dist/aos.css";

function Footer() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      once: false,   // animations repeat
      mirror: true,  // animate when scroll up
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className='footer' data-aos="fade-up">

        <div className='box1' data-aos="fade-right">
          <div className='logo'>
            <img src="/img/its_logo.png" alt="" />
          </div>

          <div className='adress ad-1' data-aos="fade-up" data-aos-delay="100">
            <div className='icon'> <i className="fas fa-map-marker-alt"></i></div>
            <div className=' location'> 
              <p>77/1/2/3 Vishnu Malti Ind, <br />Estate, Shivane, Pune 411 023</p>
            </div>
          </div>

          <div className='adress' data-aos="fade-up" data-aos-delay="200">
            <div className='icon'> <i className="fas fa-phone-alt"></i></div>
            <div className=' location'>8805523535</div>
          </div>

          <div className='adress' data-aos="fade-up" data-aos-delay="300">
            <div className='icon'><i className="fas fa-envelope"></i></div>
            <div className=' location'>sales@itspowerinfra.com</div>
          </div>

          <NavLink data-aos="zoom-in" data-aos-delay="400"
            to="https://www.facebook.com/suresh.iramani.9"
            className="text-dark me-2 icon1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </NavLink>

          <NavLink data-aos="zoom-in" data-aos-delay="450"
            to="https://www.google.com"
            className="text-dark me-2 icon1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </NavLink>

          <NavLink data-aos="zoom-in" data-aos-delay="500"
            to="https://www.linkedin.com/company/its-power-&-infrastructure-pvt-ltd/posts/?feedView=all"
            className="text-dark icon1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </NavLink>
        </div>

        <div className='box2'>

          <div className='b1'>
            <h2 data-aos="fade-right">Product</h2>

           
            <NavLink data-aos="fade-right" data-aos-delay="150" to="/onlineUPS">Online UPS</NavLink><br />
            <NavLink data-aos="fade-right" data-aos-delay="100" to="/IndustrialInverter">Industry Inverter</NavLink><br />
            <NavLink data-aos="fade-right" data-aos-delay="200" to="/ServoStabilizer">Servo Stabilizer</NavLink><br />
            <NavLink data-aos="fade-right" data-aos-delay="250" to="/Battery_Charger">Battery Charger</NavLink><br />
            <NavLink data-aos="fade-right" data-aos-delay="300" to="/LoadBank">Load Bank</NavLink><br />
            <NavLink data-aos="fade-right" data-aos-delay="350" to="/isolation_transformer">Isoloation transformer</NavLink><br />
            <NavLink data-aos="fade-right" data-aos-delay="400" to="/solarOff-GridInverter">Solar off-grid</NavLink><br />
          </div>

          <div className='b2'>
            <h2 data-aos="fade-left">Company</h2>

            <NavLink data-aos="fade-left" data-aos-delay="100" to="/">Home</NavLink><br />
            <NavLink data-aos="fade-left" data-aos-delay="150" to="/about">About</NavLink><br />
            <NavLink data-aos="fade-left" data-aos-delay="200" to="/product">Product</NavLink><br />
            <NavLink data-aos="fade-left" data-aos-delay="250" to="/gellery">Gallery</NavLink><br />
            <NavLink data-aos="fade-left" data-aos-delay="300" to="/career">Careers</NavLink><br />
            <NavLink data-aos="fade-left" data-aos-delay="350" to="/contact">Contact</NavLink><br />
          </div>

        </div>

      </div>
    </>
  );
}

export default Footer;
