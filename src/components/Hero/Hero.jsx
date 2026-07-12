import "./Hero.css";
import product from "/src/assets/product.jpeg";

function Hero() {
    return (
        <section className="hero">
            <div className="hero-container">
                <div className="hero-content">
                    <h1>Premium Ready-to-Eat Meals & Spices</h1>
                    <p>Authentic flavors, chef-crafted recipes, delivered to your doorstep</p>
                    <div className="hero-buttons">
                        <a href="/shop" className="btn-primary">Shop Now</a>
                        <a href="/about" className="btn-secondary">Learn More</a>
                    </div>
                </div>
                <div className="hero-image">
                    <img src={product} alt="Premium Products" />
                </div>
            </div>
        </section>
    );
}

export default Hero;