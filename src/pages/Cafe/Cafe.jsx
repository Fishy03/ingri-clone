import "./Cafe.css";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import cafeImg from "../../assets/restaurant.png";
import restaurant from "../../assets/restaurant.png";
import philosophyImg from "../../assets/philosophy.png";
import Testimonials from "../../components/Testimonials/Testimonials";
import menu from "../../assets/menu.pdf";
import { ArrowRight } from "lucide-react";

function Cafe() {
  return (
    <>
      <Navbar />

      <section className="cafe-hero">
        <div className="circle circle-one"></div>
        <div className="circle circle-two"></div>

        <div className="cafe-container">
          <div className="cafe-left">
            <p className="tag">INGRI CAFE</p>

            <h1>
              Where Cuisine
              <br />
              Meets <span>Culture</span>
            </h1>

            <p className="description">
              Nestled within Museo Camera — Ingri brings ingredient-led cooking
              to a space shaped by art and perspective. A culinary experience
              crafted through cuisine.
            </p>

            <div className="buttons">
              <a href="/reserve" className="primary-btn">
                Reserve a Table
                <ArrowRight
                  size={18}
                  style={{
                    marginLeft: "2px",
                    verticalAlign: "middle",
                    marginBottom: "2px",
                  }}
                />
              </a>

              <button
                className="secondary-btn"
                onClick={() => window.open(menu, "_blank")}
              >
                View Menu →
              </button>
            </div>
          </div>

          <div className="cafe-right">
            <img src={cafeImg} alt="Ingri Cafe" />
          </div>
        </div>
      </section>

      <section className="cafe-story">
        <div className="story-container">
          <div className="story-left">
            <p className="story-tag">OUR PHILOSOPHY</p>

            <h2>
              A Cultural Experience,
              <br />
              <span>Crafted Through Cuisine</span>
            </h2>

            <p>
              At Ingri, the exhibition continues at the table. Ingredient-led
              cooking meets a setting rooted in art, creating an experience that
              engages more than one sense.
            </p>

            <p>
              Our space is designed to be a sanctuary for visitors — a place to
              enjoy carefully prepared meals and brews that tell a story of
              their own.
            </p>

            <div className="story-stats">
              <div>
                <h3>0%</h3>
                <span>Preservatives</span>
              </div>

              <div>
                <h3>100%</h3>
                <span>Quality</span>
              </div>
            </div>
          </div>

          <div className="story-right">
            <img src={philosophyImg} alt="Ingri Philosophy" />
          </div>
        </div>
      </section>

      <Testimonials />

      <section className="reservation-section">
        <div className="reservation-overlay"></div>

        <img src={restaurant} alt="Ingri Cafe" className="reservation-bg" />

        <div className="reservation-content">
          <p className="reservation-tag">RESERVATIONS</p>

          <h2>
            Dine with <span>Us</span>
          </h2>
          <p>
            Whether it's a quiet lunch or a special dinner, we'd love to have
            you. Reserve your spot and let us take care of the rest.
          </p>
          <a href="/reserve" className="reservation-btn">
            Reserve a Table
          </a>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Cafe;
