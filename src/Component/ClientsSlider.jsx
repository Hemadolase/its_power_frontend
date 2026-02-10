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
    "/img/client_8.png",
    "/img/client_9.png",
    "/img/client_10.png",
    "/img/client_11.png",
    "/img/client_12.png",
    "/img/client_13.png",
    "/img/client_14.png",
    "/img/client_15.png",
    "/img/client_16.png",
    "/img/client_17.png",
    "/img/client_18.png",
    "/img/client_18.png",
    "/img/client_20.png",
    "/img/client_21.png",
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
