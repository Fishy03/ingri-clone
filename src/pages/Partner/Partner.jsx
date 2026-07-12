import "./Partner.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../assets/restaurant.png";

import {
  Building2,
  User,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
} from "lucide-react";

import { useState } from "react";

function Partner() {
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    setShowPopup(true);

    setTimeout(() => {
      setShowPopup(false);
    }, 3500);
  };

  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="partner-hero">
        <img
          src={heroImg}
          alt="Partner With Ingri"
          className="partner-hero-image"
        />

        <div className="partner-overlay"></div>

        <div className="partner-content">
          <p className="partner-tag">HORECA PARTNERSHIP</p>

          <h1>
            Partner
            <span> With Us</span>
          </h1>

          <p>
            Join restaurants, cafés, hotels and catering businesses across India
            that trust Ingri for premium ingredients and dependable service.
          </p>
        </div>
      </section>

      {/* FORM */}

      <section className="partner-page">
        <div className="partner-wrapper">
          <div className="partner-info">
            <h2>
              Why Partner
              <span> With Ingri?</span>
            </h2>

            <p>
              Whether you operate a restaurant, café, cloud kitchen or hotel,
              we'll provide tailored food solutions designed around your
              business.
            </p>

            <div className="partner-benefits">
              <div className="benefit">
                <CheckCircle size={20} />
                <span>Wholesale Pricing</span>
              </div>

              <div className="benefit">
                <CheckCircle size={20} />
                <span>Reliable Supply Chain</span>
              </div>

              <div className="benefit">
                <CheckCircle size={20} />
                <span>Dedicated Account Support</span>
              </div>

              <div className="benefit">
                <CheckCircle size={20} />
                <span>Custom Bulk Packaging</span>
              </div>
            </div>
          </div>

          <div className="partner-form-card">
            <div className="form-heading">
              <Building2 size={22} />

              <h3>Business Enquiry</h3>
            </div>

            <form className="partner-form" onSubmit={handleSubmit}>
              <div className="partner-row">
                <div className="partner-input">
                  <label>Business Name</label>

                  <div className="input-icon">
                    <Building2 size={18} />
                    <input
                      type="text"
                      placeholder="Ingri Cafe Pvt. Ltd."
                      required
                    />
                  </div>
                </div>

                <div className="partner-input">
                  <label>Contact Person</label>

                  <div className="input-icon">
                    <User size={18} />
                    <input type="text" placeholder="Your Name" required />
                  </div>
                </div>
              </div>

              <div className="partner-row">
                <div className="partner-input">
                  <label>Email Address</label>

                  <div className="input-icon">
                    <Mail size={18} />
                    <input
                      type="email"
                      placeholder="business@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="partner-input">
                  <label>Phone Number</label>

                  <div className="input-icon">
                    <Phone size={18} />
                    <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                  </div>
                </div>
              </div>

              <div className="partner-row">
                <div className="partner-input">
                  <label>City</label>

                  <div className="input-icon">
                    <MapPin size={18} />
                    <input type="text" placeholder="Gurugram" required />
                  </div>
                </div>

                <div className="partner-input">
                  <label>Business Type</label>

                  <select required>
                    <option value="">Select Business</option>
                    <option>Restaurant</option>
                    <option>Cafe</option>
                    <option>Cloud Kitchen</option>
                    <option>Hotel</option>
                    <option>Catering</option>
                    <option>Distributor</option>
                  </select>
                </div>
              </div>
              <div className="partner-input">
                <label>Tell Us About Your Requirements</label>

                <textarea
                  rows="6"
                  placeholder="Tell us about your business, expected order quantity, products you're interested in..."
                ></textarea>
              </div>

              <button className="partner-submit" type="submit">
                Submit Enquiry
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}

      {showPopup && (
        <div className="success-popup">
          <div className="success-card">
            <CheckCircle size={70} strokeWidth={1.6} />

            <h2>Enquiry Sent!</h2>

            <p>
              Thank you for contacting Ingri.
              <br />
              Our Horeca team will get in touch with you shortly.
            </p>

            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Partner;
