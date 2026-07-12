import "./Gifting.css";

import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";

import { useCart } from "../../context/CartContext";

import heroImage from "../../assets/hero.png";
import gifting from "../../assets/gifting.png";
import bespoksol from "../../assets/bespoksol.png";

import almond from "../../assets/almond biscotti.png";
import makhana from "../../assets/almond makhana granola.png";
import choco from "../../assets/choco chip cookies.png";
import fresh from "../../assets/fresh chilli pickle.png";

import {
  Gift,
  Heart,
  Sparkles,
  Truck,
  ArrowRight,
  ShoppingBag,
} from "lucide-react";

const giftSets = [
  {
    id: 1,
    name: "Premium Snack Box",
    image: almond,
    price: 999,
    description:
      "A carefully curated snack hamper with premium ready-to-eat products.",
  },

  {
    id: 2,
    name: "Spice Lover's Hamper",
    image: fresh,
    price: 1499,
    description:
      "Authentic spice blends and pickles for every food enthusiast.",
  },

  {
    id: 3,
    name: "Sweet Treat Collection",
    image: choco,
    price: 799,
    description: "Cookies, sweets and delightful treats beautifully packed.",
  },

  {
    id: 4,
    name: "Healthy Wellness Box",
    image: makhana,
    price: 1199,
    description: "Healthy snacks and granola for conscious gifting.",
  },
];

function Gifting() {
  const { addToCart } = useCart();

  return (
    <>
      <Navbar />

      <main className="gifting-page">
        {/* HERO */}

        <section className="gift-hero">
          <div className="gift-circle gift-circle-one"></div>
          <div className="gift-circle gift-circle-two"></div>

          <div className="gift-container">
            <div className="gift-left">
              <p className="gift-tag">GIFTING</p>

              <h1>
                Curated Gift
                <br />
                <span>Hampers</span>
              </h1>

              <p>
                Thoughtfully crafted gift collections featuring our finest
                ready-to-eat meals and artisanal spice blends — perfect for
                every occasion.
              </p>

              <div className="gift-buttons">
                <a href="/shop" className="gift-primary">
                  Explore Gifts
                  <ArrowRight size={18} />
                </a>

                <a href="/contact" className="gift-secondary">
                  <ShoppingBag size={18} style={{ marginLeft: "4px" }} />
                  Custom Orders
                </a>
              </div>
            </div>

            <div className="gift-right">
              <img src={gifting} alt="Gift Hamper" />
            </div>
          </div>
        </section>

        {/* OPTIONS */}

        <section className="gift-options">
          <div className="options-heading">
            <p>WHAT WE OFFER</p>

            <h2>
              Gifting
              <span> Options</span>
            </h2>

            <div className="heading-line"></div>
          </div>

          <div className="options-grid">
            <div className="option-card">
              <Gift size={32} />

              <h3>Corporate Gifting</h3>

              <p>
                Premium hampers designed for employee appreciation, client
                gifting and corporate celebrations.
              </p>
            </div>

            <div className="option-card">
              <Heart size={32} />

              <h3>Personal Occasions</h3>

              <p>
                Celebrate birthdays, anniversaries and memorable moments with
                elegant curated gift boxes.
              </p>
            </div>

            <div className="option-card">
              <Sparkles size={32} />

              <h3>Festive Hampers</h3>

              <p>
                Exclusive festive collections perfect for Diwali, Christmas and
                New Year gifting.
              </p>
            </div>

            <div className="option-card">
              <Truck size={32} />

              <h3>Pan India Delivery</h3>

              <p>Beautifully packed hampers delivered safely across India.</p>
            </div>
          </div>
        </section>

        {/* FEATURED HAMPERS */}

        <section className="featured-gifts">
          <div className="featured-heading">
            <p>OUR COLLECTION</p>

            <h2>
              Featured
              <span> Hampers</span>
            </h2>

            <div className="heading-line"></div>

            <p className="featured-subtitle">
              Explore our most loved gift boxes curated with premium ingredients
              and beautiful packaging.
            </p>
          </div>

          <div className="gift-grid">
            {giftSets.map((gift) => (
              <div className="gift-card" key={gift.id}>
                <div className="gift-image">
                  <img src={gift.image} alt={gift.name} />
                </div>

                <div className="gift-content">
                  <h3>{gift.name}</h3>

                  <p className="gift-description">{gift.description}</p>

                  <div className="gift-bottom">
                    <span className="gift-price">₹{gift.price}</span>

                    <button
                      className="gift-cart-btn"
                      onClick={() => addToCart(gift)}
                    >
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CUSTOM GIFTING */}

        <section className="custom-gifting">
          <div className="custom-container">
            <div className="custom-left">
              <p className="custom-tag">BESPOKE SOLUTIONS</p>

              <h2>
                Create Your Own
                <br />
                <span>Gift Hamper</span>
              </h2>

              <p>
                Personalise every hamper with your favourite Ingri products.
                Ideal for birthdays, weddings, festive celebrations and
                corporate gifting.
              </p>

              <ul>
                <li>Premium packaging options</li>

                <li>Personalised message cards</li>

                <li>Bulk order discounts</li>

                <li>Pan-India delivery</li>
              </ul>

              <a href="/contact" className="gift-primary">
                Request Custom Hamper
              </a>
            </div>

            <div className="custom-right">
              <img src={bespoksol} alt="Custom Hamper" />
            </div>
          </div>
        </section>

        {/* CORPORATE CTA */}

        <section className="gift-cta">
          <div className="gift-cta-content">
            <p className="cta-tag">CORPORATE GIFTING</p>

            <h2>Looking For Bulk Orders?</h2>

            <p>
              From festive gifting to employee appreciation and client hampers,
              our team can curate custom gifting experiences tailored to your
              brand.
            </p>

            <div className="gift-buttons">
              <a href="/contact" className="gift-primary">
                Contact Our Team
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export default Gifting;
