import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Services() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* ---------- HERO BANNER ---------- */}
      <div className="services-hero">
        <div className="services-hero-content">
          <h1 data-aos="fade-up">Our Services</h1>
          <p data-aos="fade-up" data-aos-delay="200">
            Professional AMC Support & High-Frequency UPS Repair Solutions
          </p>
        </div>
      </div>

      {/* ---------- MAIN CONTENT ---------- */}
      <section className="services-wrapper">

        {/* AMC SECTION */}
        <div className="service-card" data-aos="fade-up">
          <h2>Annual Maintenance Contract (AMC)</h2>
          <p className="service-desc">
            Our AMC services ensure uninterrupted performance of your power equipment
            with regular maintenance, emergency support, and expert supervision.
          </p>

          <div className="service-subsection">
            <h3>✔ Comprehensive AMC</h3>
            <p>
              Full coverage including repair and replacement of faulty components.
              No additional charges for labor or parts.
            </p>
          </div>

          <div className="service-subsection">
            <h3>✔ Non-Comprehensive AMC</h3>
            <p>
              Covers all labor/repair work. Parts replacement is chargeable as per requirement.
            </p>
          </div>
        </div>

        {/* UPS REPAIR SECTION */}
        {/* We Do Ensure + Image Section */}
       <div className="service-card ensure-section" data-aos="fade-up">
       
         <div className="ensure-left">
           <h2>We Do Ensure:</h2>
           <ul>
             <li>Expert technician.</li>
             <li>Knowledgeable discernment and skillful reparation of the system.</li>
             <li>Deploying up-to-date apparatus.</li>
             <li>Organized services.</li>
             <li>Relevant storage provision.</li>
             <li>Endeavour Betterment.</li>
             <li>Thus alleviate problem and succor an efficient system.</li>
           </ul>
         </div>
       
         <div className="ensure-right">
           <img src="/img/amc.png" className="ensure-image" alt="AMC Illustration" />
         </div>
       
       </div>


      </section>
    </>
  );
}

export default Services;
