import "./Partnerships.css";
import { ShoppingBag, Gift, UtensilsCrossed } from "lucide-react";

const partnershipData = [
  {
    number: "01",
    title: "Shop",
    description:
      "In-house creations built around quality ingredients. Made for daily use, executed with restaurant-level discipline.",
    icon: <ShoppingBag size={24} />,
  },
  {
    number: "02",
    title: "Gifting",
    description:
      "Curated gift hampers designed for lasting impressions.",
    icon: <Gift size={24} />,
  },
  {
    number: "03",
    title: "HORECA",
    description:
      "Reliable volume supply for retail and hospitality clients.",
    icon: <UtensilsCrossed size={24} />,
  },
];

function Partnerships() {
  return (
    <section className="partnerships">
      <div className="partnerships-container">

        <p className="section-tag">PARTNERSHIPS</p>

        <h2>
          Retail Services, Gifting, <span>HORECA</span>
        </h2>

        <p className="section-description">
          Professional-grade culinary solutions tailored for customers,
          businesses and hospitality partners who value quality as much as we
          do.
        </p>

        <div className="partnership-grid">
          {partnershipData.map((item) => (
            <div className="partnership-card" key={item.number}>

              <div className="card-icon">
                {item.icon}
              </div>

              <span className="card-number">
                {item.number}
              </span>

              <h3>{item.title}</h3>

              <p>{item.description}</p>

            </div>
          ))}
        </div>

        <a href="/horeca" className="horeca-btn">
          Inquire for Horeca 
          <span>→</span>
        </a>

      </div>
    </section>
  );
}

export default Partnerships;