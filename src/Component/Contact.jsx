import React, { useRef, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Contact() {
  const form = useRef();

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sendEmail = async (e) => {
    e.preventDefault();

    const data = {
      name: form.current.name.value,
      company: form.current.company.value,
      phone: form.current.phone.value,
      email: form.current.email.value,
      product: form.current.product.value,
      city: form.current.city.value,
      message: form.current.message.value,
    };

    try {
    const res = await fetch("https://its-power-backend.vercel.app/send-contact", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (result.success) {
        alert("Message Sent Successfully!");
        form.current.reset();
      } else {
        alert("Failed to send message!");
      }
    } catch (err) {
      alert("Server Error!");
    }
  };

  return (
    <>
      {/* ⭐ HERO SECTION */}
      <section className="contact-hero">
        <div className="overlay"></div>
        <h1 data-aos="fade-up">Contact Us</h1>
        <p data-aos="fade-up" data-aos-delay="150">
          We are here to help you 24/7
        </p>
      </section>
      

      {/* ⭐ MAIN CONTACT WRAPPER */}
      <div className="contact-wrapper">

        {/* LEFT FORM CARD */}
        <div className="contact-form-card" data-aos="fade-right">

          <h2>Send Your Message</h2>
          <p>Don't hesitate to contact us</p>

          <form ref={form} onSubmit={sendEmail}>

            <div className="input-row">
              <input type="text" name="name" placeholder="Full Name" required />
              <input type="text" name="company" placeholder="Company Name" required />
            </div>

            <div className="input-row">
              <input type="text" name="phone" placeholder="Phone Number" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <div className="input-row">
              <input type="text" name="product" placeholder="Product Name" required />
              <input type="text" name="city" placeholder="City" required />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="4"
              required
            ></textarea>

            {/* SUBMIT BUTTON */}
            <button className="btn-submit">Send Message</button>

            {/* WHATSAPP CTA BUTTON */}
            <button
              type="button"
              className="btn-whatsapp"
              onClick={() =>
                window.open(
                  "https://wa.me/8805523535?text=Hello%20ITS%20Power%20Team",
                  "_blank"
                )
              }
            >
              Chat on WhatsApp
            </button>

          </form>

        </div>

        {/* RIGHT CONTACT INFO CARD */}
        <div className="contact-info-card" data-aos="fade-left">

          <img src="/img/its_logo.png" className="info-logo" alt="ITS Logo" />

          <div className="info-box">
            <i className="fas fa-map-marker-alt"></i>
            <p>77/1/2/3 Vishnu Malti Ind. Estate, Shivane, Pune 411 023</p>
          </div>

          <div className="info-box">
            <i className="fas fa-phone-alt"></i>
            <p>8805523535</p>
          </div>

          <div className="info-box">
            <i className="fas fa-envelope"></i>
            <p>sales@itspowerinfra.com</p>
          </div>

          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-linkedin"></i>
            <i className="fab fa-google"></i>
            <i className="fab fa-whatsapp"></i>
          </div>

        </div>
      </div>

      {/* ⭐ MAP SECTION */}
      <section className="contact-map" data-aos="fade-up">
        <iframe
          title="company-location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2875571733935!2d73.78977977415099!3d18.470629470699947!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc295a79fb9b2d5%3A0xab719ad5b6dae039!2sITS%20Power%20%26%20Infrastructure%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1763446357942!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: "0", borderRadius: "12px" }}
          loading="lazy"
        ></iframe>
      </section>

      {/* ⭐ IMPROVED FLOATING WHATSAPP BUTTON */}
      <div
        className="whatsapp-float"
        onClick={() =>
          window.open("https://wa.me/8805523535?text=Hello%20ITS%20Power", "_blank")
        }
      >
        <i className="fab fa-whatsapp"></i>
        <div className="whatsapp-text">Chat with us</div>
      </div>
    </>
  );
}

export default Contact;
