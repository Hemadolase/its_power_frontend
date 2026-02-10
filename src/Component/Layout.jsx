import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = () => {
  const [showBanner, setShowBanner] = useState(true);

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: true, // animation only once
    });
  }, []);

  return (
    <>
      <Header />

      {/* Anniversary Banner */}
      {showBanner && (
        <div
          className="anniversary-banner"
          data-aos="fade-down"
        >
          🎉 Celebrating <strong>13 Years of Trust & Innovation</strong> | Since 2013 – Thank You for Being With Us
          <span
            className="close-btn"
            onClick={() => setShowBanner(false)}
          >
            ✕
          </span>
        </div>
      )}

      <Navbar />

      <div className="page-wrapper">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
