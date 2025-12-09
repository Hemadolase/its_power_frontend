import React from "react";

function ClientsSlider() {

  const logos = [
    "/img/client_1.jpg",
    "/img/client_2.png",
    "/img/client_3.gif",
    "/img/client_4.png",
    "/img/client_5.jpg",
    "/img/client_6.png",
    "/img/client_7.png",
  ];

  return (
    <div className="clients-section">

      <h2 className="clients-title" >
        Our Clients
      </h2>
      <p className="clients-subtitle" >
        Serving Excellence Across Industries
      </p>

      <div className="slider_">
        <div className="slide-track">
          {logos.concat(logos).map((logo, index) => (
            <div className="slide_1_" key={index}>
              <img src={logo} alt="Client Logo" />
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ClientsSlider;
