import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Layout from './Component/Layout';
import ScrollToTop from './Component/ScrollToTop';
import Online_UPS from './Component/Online_UPS';
import Battery_Charger from './Component/Battery_Charger';
import ServoStabilizer from './Component/ServoStabilizer';
import LoadBank from './Component/LoadBank';
import Careers from './Component/Careers';
import Industrial_Inverter from './Component/Industrial_Inverter';
import Industrial_inverter_1_1_ph from './Component/Industrial_inverter_1_1_ph';
import Industrial_inverter_3_3_ph from './Component/Industrial_inverter_3_3_ph';
import Product from './Component/Product';
import Online_ups_1phase from './Component/Online_ups_1phase';
import TechnicalSpecification from './Component/TechnicalSpecification';
import Online_ups_3ph from './Component/Online_ups_3ph';
import TechnicalSpecification_3ph from './Component/TechnicalSpecification_3ph';
import Online_ups_3_3_ph from './Component/Online_ups_3_3_ph';
import TechnicalSpecification_3_3ph from './Component/TechnicalSpecification_3_3ph';
import Servo_1ph_1ph from './Component/Servo_1ph_1ph';
import Servo_3ph_3ph from './Component/Servo_3ph_3ph';
import Servo_3ph_oil from './Component/Servo_3ph_oil';
import TechnicalSpecification_servo_1ph from './Component/TechnicalSpecification_servo_1ph';
import TechnicalSpecification_servo_3ph from './Component/TechnicalSpecification_servo_3ph';
import Loadbank_resistive from './Component/Loadbank_resistive';
import Loadbank_inductive from './Component/Loadbank_inductive';
import BatteryCharger_1ph from './Component/BatteryCharger_1ph';
import BatteryCharger_1ph_FCBC from './Component/BatteryCharger_1ph_FCBC';
import BatteryCharger_3ph_FCBC from './Component/BatteryCharger_3ph_FCBC';
import Isolation_transformer from './Component/Isolation_transformer';
import Solar_off_grid from './Component/Solar_off_grid';
import Gellery from './Component/Gellery';
import OtherProducts from './Component/OtherProducts';
import SolarProduct from './Component/SolarProduct';
import HybridACDC from './Component/HybridACDC';
import HybridMultiOutput from './Component/HybridMultiOutput';
import Services from './Component/Services';


function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />

            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />

            {/* UPS */}
            <Route path="online-ups-1ph" element={<Online_ups_1phase />} />
            <Route path="online-ups-3ph" element={<Online_ups_3ph />} />
            <Route path="online-ups-3-3ph" element={<Online_ups_3_3_ph />} />
            <Route path="onlineUPS" element={<Online_UPS />} />

            {/* Technical Specs */}
            <Route path="technicalSpecification" element={<TechnicalSpecification />} />
            <Route path="technicalSpecification_3ph" element={<TechnicalSpecification_3ph />} />
            <Route path="technicalSpecification_3_3ph" element={<TechnicalSpecification_3_3ph />} />

            {/* Battery Chargers */}
            <Route path="Battery_Charger" element={<Battery_Charger />} />
            <Route path="batteryCharger_1ph" element={<BatteryCharger_1ph />} />
            <Route path="batteryCharger_1ph_FCBC" element={<BatteryCharger_1ph_FCBC />} />
            <Route path="batteryCharger_3ph_FCBC" element={<BatteryCharger_3ph_FCBC />} />

            {/* Servo */}
            <Route path="ServoStabilizer" element={<ServoStabilizer />} />
            <Route path="servo_1ph_1ph" element={<Servo_1ph_1ph />} />
            <Route path="servo_3ph_3ph" element={<Servo_3ph_3ph />} />
            <Route path="servo_3ph_oil" element={<Servo_3ph_oil />} />
            <Route path="technicalspecification_servo_1ph" element={<TechnicalSpecification_servo_1ph />} />
            <Route path="technicalspecification_servo_3ph" element={<TechnicalSpecification_servo_3ph />} />

          
            {/* Load Bank */}
            <Route path="LoadBank" element={<LoadBank />} />
            <Route path="loadbank_resistive" element={<Loadbank_resistive />} />
            <Route path="loadbank_inductive" element={<Loadbank_inductive />} />

            {/* Industrial Inverter */}
            <Route path="IndustrialInverter" element={<Industrial_Inverter />} />
            <Route path="industrial_inverter_1ph-1ph" element={<Industrial_inverter_1_1_ph />} />
            <Route path="industrial_inverter_3ph-3ph" element={<Industrial_inverter_3_3_ph />} />

            {/* Other Products */}
            <Route path="product" element={<Product />} />
            <Route path="isolation_transformer" element={<Isolation_transformer />} />
            <Route path="solarOff-GridInverter" element={<Solar_off_grid />} />
               
               {/* Solar Product */}

              <Route path='solarproduct' element={<SolarProduct/>}/>
              <Route path="/hybrid-multi-output" element={<HybridMultiOutput/>} />
              <Route path="/hybrid-acdc" element={<HybridACDC />} />   



            {/* Careers */}
            <Route path="career" element={<Careers />} />

            {/* Gellery */}

              <Route path="gellery" element={<Gellery />} />

              {/* Other Product */}

              <Route path="other-products" element={<OtherProducts />} />

              {/* Service Page */}
               <Route path="services" element={<Services/>} />

          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
