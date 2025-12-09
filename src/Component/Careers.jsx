import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Careers() {
  const form = useRef();
  const [msg, setMsg] = useState("");

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section className="careers-hero">
        <div className="hero-overlay"></div>
        <h1 data-aos="fade-up">Careers</h1>
      </section>

      {/* INTRO SECTION */}
      <section className="careers-intro">
        <h2 data-aos="fade-up">Powering Possibilities. Delivering Innovations.</h2>

        <p data-aos="fade-up" data-aos-delay="150">
          We’re always looking for talented people who push us to dream bigger & perform better.
          Join a team where innovation powers every solution.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="careers-form-section">
        <div className="career-form-card" data-aos="zoom-in">

          <h2>Apply for Job</h2>

          <form ref={form} className="career-form">

            <div className="form-row">
              <input type="text" name="fullname" placeholder="Full Name" required />
              <input type="text" name="education" placeholder="Education" required />
            </div>

            <div className="form-row">
              <input type="text" name="phone" placeholder="Phone Number" required />
              <input type="email" name="email" placeholder="Email" required />
            </div>

            <div className="form-row">
              <input type="text" name="experience" placeholder="Experience (Years)" required />
              <input type="text" name="location" placeholder="Current Location" required />
            </div>

            <textarea name="message" rows="4" placeholder="Your Message"></textarea>

            <div className="upload-box">
              <label>Upload Resume</label>
              <input type="file" accept=".pdf,.doc,.docx" required />
            </div>

            <button type="submit" className="submit-btn">Submit Application</button>

          </form>

        </div>
      </section>
    </>
  );
}
export default Careers;
