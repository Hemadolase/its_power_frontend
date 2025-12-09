import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function CatalogueSection() {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  return (
    <div className="catalogue-section" data-aos="fade-up">
      <h2 className="catalogue-title">Download Catalogue</h2>
      <p className="catalogue-sub">Get product brochures in one click</p>

      <div className="catalogue-buttons">

        {/* FULL COMPANY CATALOGUE */}
        <a
          href="/catalogues/ITS_Full_Catalogue.pdf"
          download
          className="catalogue-btn"
          data-aos="zoom-in"
        >
          <i className="fa fa-file-pdf"></i> Full Catalogue
        </a>

        {/* UPS CATALOGUE */}
        <a
          href="/catalogues/UPS_Catalogue.pdf"
          download
          className="catalogue-btn"
          data-aos="zoom-in"
          data-aos-delay="150"
        >
          <i className="fa fa-file-pdf"></i> Online UPS Catalogue
        </a>

        {/* SERVO CATALOGUE */}
        <a
          href="/catalogues/Servo_Catalogue.pdf"
          download
          className="catalogue-btn"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <i className="fa fa-file-pdf"></i> Servo Stabilizer Catalogue
        </a>

         <a
          href="/catalogues/Servo_Catalogue.pdf"
          download
          className="catalogue-btn"
          data-aos="zoom-in"
          data-aos-delay="300"
        >
          <i className="fa fa-file-pdf"></i> Battery Charger 
        </a>

      </div>
    </div>
  );
}

export default CatalogueSection;
