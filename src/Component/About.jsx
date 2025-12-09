import React from 'react';
import ClientsSlider from './ClientsSlider';
import Preview from './Preview';
import AchiveMents from './AchiveMents';
import Natio_service from './Natio_service';

function About() {
  return (
    <>
      <div className='about_1'>
        <div className='b1'>
          
          <h1 data-aos="fade-up" data-aos-duration="800">
            ITS POWER & INFRASTURCTURE PVT. LTD
          </h1>

          <p data-aos="fade-up" data-aos-duration="1000" data-aos-delay="200">
            UNWIND THE TRASURE OF POWER
          </p>

        </div>
      </div>

      <ClientsSlider/>
      <Preview/>
      <AchiveMents/>
      <Natio_service/>

    </>

  );
}

export default About;
