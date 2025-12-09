import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Navbar from './Navbar';
import Header from './Header';

const Layout = () => {
  return (
    <>
      <Header />
      <Navbar />

      {/* Content wrapper */}
      <div className="page-wrapper">
        <Outlet />
      </div>

      <Footer />
    </>
  );
};

export default Layout;
