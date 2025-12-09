import React, { useEffect } from 'react';
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

          <a data-aos="zoom-in" data-aos-delay="400"
            href="https://www.facebook.com"
            className="text-dark me-2 icon1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-facebook"></i>
          </a>

          <a data-aos="zoom-in" data-aos-delay="450"
            href="https://www.google.com"
            className="text-dark me-2 icon1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-google"></i>
          </a>

          <a data-aos="zoom-in" data-aos-delay="500"
            href="https://www.linkedin.com"
            className="text-dark icon1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </div>

        <div className='box2'>

          <div className='b1'>
            <h2 data-aos="fade-right">Product</h2>

            <a data-aos="fade-right" data-aos-delay="100" href="">Industry Inverter</a><br />
            <a data-aos="fade-right" data-aos-delay="150" href="">Online UPS</a><br />
            <a data-aos="fade-right" data-aos-delay="200" href="">Servo Stabilizer</a><br />
            <a data-aos="fade-right" data-aos-delay="250" href="">Battery Charger</a><br />
            <a data-aos="fade-right" data-aos-delay="300" href="">Load Bank</a><br />
            <a data-aos="fade-right" data-aos-delay="350" href="">Isoloation transformer</a><br />
            <a data-aos="fade-right" data-aos-delay="400" href="">Solar off-grid</a><br />
          </div>

          <div className='b2'>
            <h2 data-aos="fade-left">Company</h2>

            <a data-aos="fade-left" data-aos-delay="100" href="">Home</a><br />
            <a data-aos="fade-left" data-aos-delay="150" href="">About</a><br />
            <a data-aos="fade-left" data-aos-delay="200" href="">Product</a><br />
            <a data-aos="fade-left" data-aos-delay="250" href="">Partner</a><br />
            <a data-aos="fade-left" data-aos-delay="300" href="">Careers</a><br />
            <a data-aos="fade-left" data-aos-delay="350" href="">Contact</a><br />
          </div>

        </div>

      </div>
    </>
  );
}

export default Footer;
