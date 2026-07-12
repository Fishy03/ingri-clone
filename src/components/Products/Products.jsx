import "./Products.css";
import ProductCard from "../ProductCard/ProductCard";
import almond from "../../assets/almond biscotti.png";
import makhana from "../../assets/almond makhana granola.png";
import choco from "../../assets/choco chip cookies.png";
import fresh from "../../assets/fresh chilli pickle.png";
import butter from "../../assets/super nut butter.png";

const products = [
    {
        name: "Almond Biscotti",
        price: 399,
        image: almond,
    },
    {
        name: "Choco Chip Cookies",
        price: 299,
        image: choco,
    },
    {
        name: "Fresh Chilli Pickle",
        price: 159,
        image: fresh,
    },
    // {
    //     name: "Almond Makhana Granola",
    //     price: 239,
    //     image: makhana,
    // },
    // {
    //     name: "Super Nut Butter",
    //     price: 119,
    //     image: butter,
    // },
];

function Products() {
    return (
        <section className="products-section">
            <div className="products-container">
                <div className="products-header">
                    <p className="section-tag">OUR PRODUCTS</p>
                    <h2>Best Sellers</h2>
                </div>
                <div className="products-grid">
                    {products.map(product => (
                        <ProductCard
                            key={product.name}
                            image={product.image}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Products;


