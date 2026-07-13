import "./Horeca.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import horecaHero from "../../assets/restaurant.png";
import serviceImage from "../../assets/restaurant.png";

import Companies from "../../components/companies/Companies";

import {
  Building2,
  Truck,
  Package,
  ChefHat,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

import { useState } from "react";

function Horeca() {
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

      <section className="horeca-hero">
        <div className="horeca-circle horeca-circle-one"></div>
        <div className="horeca-circle horeca-circle-two"></div>

        <div className="horeca-container">
          <div className="horeca-left">
            <p className="horeca-tag">OUR SERVICES</p>

            <h1>
              Horeca &
              <br />
              Wholesale
              <br />
              <span>Solutions</span>
            </h1>

            <p>
              Professional-grade bulk packs tailored for restaurants, cloud
              kitchens and catering partners. Precision, efficiency and
              consistent flavour at scale.
            </p>

            <div className="horeca-buttons">
              <a href="/partner" className="btn-primary">
                <Building2
                  size={18}
                  style={{
                    verticalAlign: "middle",
                    marginBottom: "4px",
                    marginRight: "4px",
                  }}
                />
                Partner With Us
              </a>

              <a href="/shop" className="horeca-secondary">
                View Catalogue
                <ArrowRight
                  size={18}
                  style={{ marginLeft: "-5px", marginTop: "2px" }}
                />
              </a>
            </div>
          </div>

          <div className="horeca-right">
            <img src={horecaHero} alt="Ingri Horeca" />
          </div>
        </div>
      </section>

      {/* SERVICES */}

      <section className="services-section">
        <div className="services-heading">
          <p>WHAT WE OFFER</p>

          <h2>
            Our <span>Services</span>
          </h2>
        </div>

        <div className="services-grid">
          <div className="service-card">
            <Package size={34} />

            <h3>Ready To Use</h3>

            <p>
              Premium bases, pastes and marinades for restaurants and commercial
              kitchens.
            </p>
          </div>

          <div className="service-card">
            <ChefHat size={34} />

            <h3>Ready To Eat</h3>

            <p>
              Chef-crafted meals ready to reheat. Perfect for corporate
              canteens.
            </p>
          </div>

          <div className="service-card">
            <Truck size={34} />

            <h3>Reliable Delivery</h3>

            <p>
              Timely delivery backed by efficient cold-chain logistics across
              the city.
            </p>
          </div>
        </div>
      </section>

      {/* WHY INGRI */}

      <section className="why-section">
        <div className="why-container">
          <div className="why-image">
            <img src={serviceImage} alt="Ingri Services" />
          </div>

          <div className="why-content">
            <p className="why-tag">WHY CHOOSE US</p>

            <h2>
              Built For
              <br />
              <span>Professionals</span>
            </h2>

            <div className="why-list">
              <div className="why-item">
                <CheckCircle size={22} />
                <span>Consistent quality across every batch.</span>
              </div>

              <div className="why-item">
                <CheckCircle size={22} />
                <span>Custom pack sizes for every business.</span>
              </div>

              <div className="why-item">
                <CheckCircle size={22} />
                <span>Dedicated support for horeca partners.</span>
              </div>

              <div className="why-item">
                <CheckCircle size={22} />
                <span>Fast, dependable supply chain.</span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Companies />
      <Footer />
    </>
  );
}

export default Horeca;
