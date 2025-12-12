import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "@fortawesome/fontawesome-free/css/all.min.css"; // Font Awesome
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 80,
    });
  }, []);

  return (
  
    <div className="container-fluid header py-2" data-aos="fade-down">
  
  {/* ======== MOBILE VIEW ======== */}
  <div className="d-flex d-md-none flex-column mobile-topbar">

    <div className="d-flex justify-content-between align-items-center px-2">

      {/* Phone Link */}
      <a href="tel:8805523535" className="top-link mb-0">
        <i className="fas fa-phone-alt me-1"></i> 8805523535
      </a>

      {/* Social Icons */}
      <div className="social-icons-mobile">
        <a href="https://www.facebook.com/suresh.iramani.9" target="_blank" className="top-icon me-3"><i className="fab fa-facebook-f"></i></a>
      <a href="https://www.google.com"  target="_blank" className="top-icon me-3"><i className="fab fa-google"></i></a>
      <a href="https://www.linkedin.com/company/its-power-&-infrastructure-pvt-ltd/posts/?feedView=all" target="_blank" className="top-icon"><i className="fab fa-linkedin"></i></a>

      </div>
    </div>

    {/* Email link */}
    <a href="mailto:sales@itspowerinfra.com" className="email-mobile px-2 mt-1 mb-2 top-link">
      <i className="fas fa-envelope me-1"></i> sales@itspowerinfra.com
    </a>

  </div>

  {/* ======== DESKTOP VIEW ======== */}
  <div className="row align-items-center desktop-header d-none d-md-flex">

    <div className="col-md-6 m-auto">
      <h6 className="mb-0 text-center">
        Welcome to ITS Power & Infrastructure Pvt. Ltd.
      </h6>
    </div>

    <div className="col-md-6 text-end">

      <a href="mailto:sales@itspowerinfra.com" className="top-link me-4">
        <i className="fas fa-envelope me-1"></i> sales@itspowerinfra.com
      </a>

      <a href="tel:8805523535" className="top-link me-4">
        <i className="fas fa-phone-alt me-1"></i> 8805523535
      </a>

      <a href="https://www.facebook.com/suresh.iramani.9" target="_blank" className="top-icon me-3"><i className="fab fa-facebook-f"></i></a>
      <a href="https://www.google.com"  target="_blank" className="top-icon me-3"><i className="fab fa-google"></i></a>
      <a href="https://www.linkedin.com/company/its-power-&-infrastructure-pvt-ltd/posts/?feedView=all" target="_blank" className="top-icon"><i className="fab fa-linkedin"></i></a>

    </div>

  </div>

</div>

  );
};

export default Header;
