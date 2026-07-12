import "./companies.css";

import { Building2 } from "lucide-react";

import amazon from "../../assets/amazon.webp";
import flipkart from "../../assets/flipcart.png";
import eleven from "../../assets/7eleven.png";
import bigbasket from "../../assets/bigbasket.png";
import bistro from "../../assets/bistro.webp";
import reliance from "../../assets/reliance.jpg";
import zepto from "../../assets/zepto.png";
import spencer from "../../assets/spencer.jpg";
import instamart from "../../assets/instamart.png";

function Companies() {
  return (
    <section className="partnerships-section">
      <div className="partnerships-heading">
        <p>COLLABORATIONS</p>

        <h2>
          Our <span>Partnerships</span>
        </h2>

        <div className="heading-line"></div>

        <p className="partnerships-subtitle">
          A full network view of the brands, retailers and horeca partners that
          move with Ingri across formats and cities.
        </p>
      </div>

      <div className="partnership-cards">
        <div className="partnership-card">
          <Building2 size={24} />

          <h3>HoReCa Partners</h3>

          <p>
            Hotels, restaurants and cafés trust Ingri for consistent, chef-grade
            products.
          </p>

          <h4>150+</h4>

          <span>ACTIVE PARTNERS</span>
        </div>

        <div className="partnership-card">
          <Building2 size={24} />

          <h3>Corporate Tie-ups</h3>

          <p>
            Long-term partnerships with corporates for catering and gifting
            solutions.
          </p>

          <h4>12+</h4>

          <span>CITIES SERVED</span>
        </div>

        <div className="partnership-card">
          <Building2 size={24} />

          <h3>Nationwide Reach</h3>

          <p>Expanding our partner network across major cities in India.</p>

          <h4>50K+</h4>

          <span>UNITS MONTHLY</span>
        </div>
      </div>

      <div className="logos-container">
        <div className="logos-track">
          <img src={amazon} alt="Amazon" />
          <img src={flipkart} alt="Flipkart" />
          <img src={eleven} alt="7-Eleven" />
          <img src={bigbasket} alt="BigBasket" />
          <img src={instamart} alt="InstaMart" />
          <img src={bistro} alt="Bistro" />
          <img src={reliance} alt="Reliance" />
          <img src={zepto} alt="Zepto" />
          <img src={spencer} alt="Spencer" />

          {/* duplicate for seamless loop */}

          <img src={amazon} alt="Amazon" />
          <img src={flipkart} alt="Flipkart" />
          <img src={eleven} alt="7-Eleven" />
          <img src={bigbasket} alt="BigBasket" />
          <img src={instamart} alt="InstaMart" />
          <img src={bistro} alt="Bistro" />
          <img src={reliance} alt="Reliance" />
          <img src={zepto} alt="Zepto" />
          <img src={spencer} alt="Spencer" />
        </div>
      </div>
    </section>
  );
}

export default Companies;
