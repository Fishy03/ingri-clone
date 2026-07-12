import "./WhyChooseUs.css";
import FeatureCard from "../FeatureCard/FeatureCard.jsx";

const features = [
    { icon: "🌿", title: "100% Natural", description: "No preservatives, no chemicals, just pure ingredients." },
    { icon: "🚚", title: "Fast Delivery", description: "Quick and reliable delivery right to your doorstep." },
    { icon: "🌾", title: "Farm Fresh", description: "Sourced directly from trusted farms." },
    { icon: "💯", title: "Quality Assured", description: "Every product checked for the best quality." },
];

function WhyChooseUs() {
    return (
        <section className="why-choose-us">
            <div className="why-choose-us-container">
                <div className="why-choose-us-header">
                    <h2>Why Choose Us</h2>
                    <p>We're committed to bringing you the finest quality products</p>
                </div>
                <div className="features">
                    {features.map(feature => (
                        <FeatureCard
                            key={feature.title}
                            icon={feature.icon}
                            title={feature.title}
                            description={feature.description}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default WhyChooseUs;