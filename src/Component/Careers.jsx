import React, { useRef, useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Careers() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  const sendCareerForm = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData();
    formData.append("fullname", form.current.fullname.value);
    formData.append("education", form.current.education.value);
    formData.append("phone", form.current.phone.value);
    formData.append("email", form.current.email.value);
    formData.append("experience", form.current.experience.value);
    formData.append("location", form.current.location.value);
    formData.append("message", form.current.message.value);
    formData.append("resume", form.current.resume.files[0]); // IMPORTANT

    try {
      const res = await fetch(
        "https://its-power-backend.vercel.app/send-career",
        {
          method: "POST",
          body: formData,
        }
      );

      const result = await res.json();

      if (result.success) {
        alert("Application Sent Successfully!");
        form.current.reset();
      } else {
        alert("Failed to send application!");
      }
    } catch (err) {
      alert("Server Error!");
    }

    setLoading(false);
  };

  return (
    <>
      {/* HERO SECTION */}
      <section className="careers-hero">
        <div className="hero-overlay"></div>
        <h1 data-aos="fade-up">Careers</h1>
      </section>

      {/* INTRO SECTION */}
      <section className="careers-intro">
        <h2 data-aos="fade-up">
          Powering Possibilities. Delivering Innovations.
        </h2>

        <p data-aos="fade-up" data-aos-delay="150">
          Join our team and build a future where innovation powers every solution.
        </p>
      </section>

      {/* FORM SECTION */}
      <section className="careers-form-section">
        <div className="career-form-card" data-aos="zoom-in">
          <h2>Apply for Job</h2>

          <form ref={form} className="career-form" onSubmit={sendCareerForm}>
            
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
              <input type="file" name="resume" accept=".pdf,.doc,.docx" required />
            </div>

            <button type="submit" className="submit-btn">
              {loading ? "Sending..." : "Submit Application"}
            </button>

          </form>
        </div>
      </section>
    </>
  );
}

export default Careers;
