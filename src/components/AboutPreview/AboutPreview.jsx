import "./AboutPreview.css";
import restaurant from "../../assets/restaurant.png";

function AboutPreview() {
    return (
        <section className="about-preview">
            <div className="about-preview-container">

                <div className="about-text">
                    <p className="tag">WHAT WE DO</p>

                    <h2>
                        Ingri at <span>a Glance</span>
                    </h2>

                    <p className="description">
                        Ingri is a chef-led food and hospitality brand built
                        on ingredient-led cooking, disciplined systems and
                        scalable product innovation. From dining and café
                        formats to clean-label RTE, RTU and frozen products,
                        Ingri bridges culinary craft with modern food
                        technology.
                    </p>

                    <a href="/about" className="btn-primary">
                        Discover Our Story →
                    </a>
                </div>

                <div className="about-image">
                    <img src={restaurant} alt="Ingri Cafe" />
                </div>

            </div>
        </section>
    );
}

export default AboutPreview;