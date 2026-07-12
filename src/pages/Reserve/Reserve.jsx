import "./Reserve.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import heroImg from "../../assets/restaurant.png";
import reserveImg from "../../assets/restaurant.png";

import {
  MapPin,
  Clock,
  Phone,
  User,
  Calendar,
  UtensilsCrossed,
  CheckCircle,
} from "lucide-react";

import { useState } from "react";

function Reserve() {
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);

    setTimeout(() => {
      setShowSuccess(false);
    }, 3500);
  };

  const timeSlots = [];

  for (let hour = 8; hour <= 22; hour++) {
    for (let minute = 0; minute < 60; minute += 30) {
      const date = new Date();
      date.setHours(hour, minute);

      timeSlots.push(
        date.toLocaleTimeString([], {
          hour: "numeric",
          minute: "2-digit",
        }),
      );
    }
  }

  return (
    <>
      <Navbar />

      {/* HERO */}

      <section className="reserve-hero">
        <img
          src={heroImg}
          alt="Ingri Restaurant"
          className="reserve-hero-image"
        />

        <div className="reserve-overlay"></div>

        <div className="reserve-content">
          <p className="reserve-tag">RESERVATIONS</p>

          <h1>
            Reserve Your <span>Experience</span>
          </h1>

          <p>
            Secure your table at Ingri and enjoy an evening of culinary artistry
            within the walls of Museo Camera.
          </p>
        </div>
      </section>

      {/* BOOKING */}

      <section className="booking-section">
        <div className="booking-container">
          {/* LEFT */}

          <div className="booking-left">
            <div className="restaurant-card">
              <img src={reserveImg} alt="Restaurant" />

              <div className="restaurant-card-overlay">
                <h3>Ingri at Museo</h3>
                <p>A culinary dining experience</p>
              </div>
            </div>

            <div className="info-card">
              <MapPin size={18} />

              <div>
                <h4>Location</h4>

                <p>
                  Museo Camera Centre for the Photographic Arts, DLF Phase IV,
                  Gurugram
                </p>
              </div>
            </div>

            <div className="info-card">
              <Clock size={18} />

              <div>
                <h4>Hours</h4>
                <p>Open Daily • 8:00 AM - 10:00 PM</p>
              </div>
            </div>

            <div className="info-card">
              <Phone size={18} />

              <div>
                <h4>Contact</h4>
                <p>+91 98765 43210</p>
                <p>reservations@ingri.world</p>
              </div>
            </div>

            <div className="policy-card">
              <h5>CANCELLATION POLICY</h5>

              <p>
                Please provide at least 24 hours notice for cancellations.
                Groups of 8+ require 48 hours notice.
              </p>
            </div>
          </div>

          {/* RIGHT */}

          <div className="booking-right">
            <div className="form-title">
              <User size={18} />

              <h3>Guest Information</h3>
            </div>

            <form onSubmit={handleSubmit} className="booking-form">
              <div className="input-row">
                <div className="input-group">
                  <label>Full Name</label>

                  <input
                    type="text"
                    placeholder="Enter your full name"
                    required
                  />
                </div>

                <div className="input-group">
                  <label>Phone Number</label>

                  <input type="tel" placeholder="+91 XXXXX XXXXX" required />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group full-width">
                  <label>Email Address</label>

                  <input type="email" placeholder="you@example.com" required />
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Date</label>

                  <div className="input-icon">
                    <Calendar size={18} />

                    <input type="date" required />
                  </div>
                </div>

                <div className="input-group">
                  <label>Time</label>

                  <div className="input-icon">
                    <Clock size={18} />
                    <select required>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-row">
                <div className="input-group">
                  <label>Number of Guests</label>

                  <div className="input-icon">
                    <User size={18} />

                    <select>
                      <option>1 Guest</option>
                      <option>2 Guests</option>
                      <option>3 Guests</option>
                      <option>4 Guests</option>
                      <option>5 Guests</option>
                      <option>6 Guests</option>
                      <option>7 Guests</option>
                      <option>8 Guests</option>
                    </select>
                  </div>
                </div>

                <div className="input-group">
                  <label>Occasion</label>

                  <div className="input-icon">
                    <UtensilsCrossed size={18} />

                    <select>
                      <option>Casual Dining</option>
                      <option>Birthday</option>
                      <option>Anniversary</option>
                      <option>Date Night</option>
                      <option>Business Meeting</option>
                      <option>Family Gathering</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="input-group">
                <label>Special Requests</label>

                <textarea
                  rows="5"
                  placeholder="Dietary preferences, allergies, seating requests..."
                ></textarea>
              </div>

              <button className="confirm-btn" type="submit">
                Confirm Reservation →
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* SUCCESS POPUP */}

      {showSuccess && (
        <div className="success-popup">
          <div className="success-card">
            <CheckCircle size={70} strokeWidth={1.6} />

            <h2>Reservation Confirmed!</h2>

            <p>
              Thank you for choosing Ingri.
              <br />
              Your reservation request has been received.
              <br />
              <br />
              Our team will contact you shortly to confirm your booking.
            </p>

            <button onClick={() => setShowSuccess(false)}>Close</button>
          </div>
        </div>
      )}

      <Footer />
    </>
  );
}

export default Reserve;
