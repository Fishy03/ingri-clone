import "./Contact.css";

import { useState } from "react";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        alert("Thanks! We'll get back to you soon.");
        setFormData({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
        });
      } else {
        alert(data.message || 'Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('Error submitting form. Please try again.');
    }
  };

  return (
    <>
      <Navbar />

      <main className="contact-page">
        {/* ================= HERO ================= */}

        <section className="contact-hero">
          <div className="contact-circle contact-circle-one"></div>
          <div className="contact-circle contact-circle-two"></div>

          <div className="contact-hero-container">
            <p className="contact-tag">CONTACT US</p>

            <h1>
              We'd Love to
              <span> Hear From You</span>
            </h1>

            <p>
              Whether you have questions about our products, Horeca
              partnerships, reservations, or anything else, our team is ready to
              help.
            </p>
          </div>
        </section>

        {/* ================= CONTACT ================= */}

        <section className="contact-section">
          <div className="contact-container">
            {/* LEFT */}

            <div className="contact-form-wrapper">
              <p className="section-tag">SEND A MESSAGE</p>

              <h2>
                Get in
                <span> Touch</span>
              </h2>

              <form className="contact-form" onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label>Your Name</label>

                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address</label>

                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label>Phone Number</label>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <label>Subject</label>

                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                    >
                      <option value="">Select a subject</option>

                      <option>General Inquiry</option>

                      <option>Reservation</option>

                      <option>Horeca Partnership</option>

                      <option>Feedback</option>

                      <option>Recipes</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label>Message</label>

                  <textarea
                    rows="6"
                    name="message"
                    placeholder="Tell us how we can help..."
                    value={formData.message}
                    onChange={handleChange}
                    required
                  ></textarea>
                </div>

                <button type="submit" className="contact-btn">
                  Send Message
                </button>
              </form>
            </div>

            {/* RIGHT */}

            <div className="contact-info-wrapper">
              <p className="section-tag">REACH US</p>

              <h2>
                Other Ways to
                <span> Connect</span>
              </h2>

              <div className="contact-cards">
                <div className="contact-card">
                  <h3>Visit Us</h3>

                  <p>
                    Plot No. 20, Udyog Vihar, Phase 1, Gurugram, Haryana 122016
                  </p>
                </div>

                <div className="contact-card">
                  <h3>Call Us</h3>

                  <p>+91 93141 15482</p>
                </div>

                <div className="contact-card">
                  <h3>Email Us</h3>

                  <p>gm.museo@ingri.world</p>
                </div>

                <div className="contact-card">
                  <h3>Opening Hours</h3>

                  <p>Every Day</p>

                  <p>08:00 AM — 10:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Contact;
