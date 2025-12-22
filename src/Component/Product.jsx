import React, { useEffect } from "react";
import Product_section_2 from "./Product_section_2";
import CatalogueSection from "./CatalogueSection";

import AOS from "aos";
import "aos/dist/aos.css";

function Product() {

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
      {/* HERO SECTION */}
     
     <div className="product-hero">
  <div className="overlay">
    <h1
      data-aos="fade-up"
      data-aos-delay="200"
      className="product-title"
    >
      PRODUCTS
    </h1>
  </div>

  {/* PRODUCT IMAGE (MACHINES ONLY) */}
  <img
    src="img/Product_BG.webp"
    alt="Products"
    className="product-image"
  />
</div>


      {/* CATALOGUE SECTION */}
      <div data-aos="fade-up" data-aos-delay="200">
        <CatalogueSection />
      </div>

      {/* PRODUCT SECTION 2 */}
      <div data-aos="fade-up" data-aos-delay="300">
        <Product_section_2 />
      </div>
    </>
  );
}

export default Product;
