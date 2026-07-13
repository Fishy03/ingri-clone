import "./Shop.css";
import { useState, useEffect } from "react";

import Navbar from "../../components/Navbar/Navbar.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";

import almond from "../../assets/almond biscotti.png";
import makhana from "../../assets/almond makhana granola.png";
import choco from "../../assets/choco chip cookies.png";
import fresh from "../../assets/fresh chilli pickle.png";
import butter from "../../assets/super nut butter.png";

const imageMap = {
  "almond biscotti.png": almond,
  "almond makhana granola.png": makhana,
  "choco chip cookies.png": choco,
  "fresh chilli pickle.png": fresh,
  "super nut butter.png": butter,
};

function Shop() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [allProducts, setAllProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/products`,
        );

        const data = await response.json();

        if (data.success) {
          setAllProducts(data.data);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);
  const filteredProducts = allProducts.filter((product) => {
    const categoryMatch =
      selectedCategory === "All" || product.category === selectedCategory;

    let priceMatch = true;

    switch (selectedPrice) {
      case "Under200":
        priceMatch = product.price < 200;
        break;

      case "200to400":
        priceMatch = product.price >= 200 && product.price <= 400;
        break;

      case "Above400":
        priceMatch = product.price > 400;
        break;

      default:
        priceMatch = true;
    }

    return categoryMatch && priceMatch;
  });

  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <>
      <Navbar />

      <div className="shop-page">
        <div className="shop-container">
          <div className="shop-header">
            <h1>Shop All Products</h1>
            <p>Discover our complete range of premium products</p>
          </div>

          <div className="shop-content">
            <aside className="shop-sidebar">
              <div className="filter-section">
                <h3>Categories</h3>

                <div className="filter-options">
                  <label>
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "All"}
                      onChange={() => setSelectedCategory("All")}
                    />
                    All Products
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "Snacks"}
                      onChange={() => setSelectedCategory("Snacks")}
                    />
                    Snacks
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "Pickles"}
                      onChange={() => setSelectedCategory("Pickles")}
                    />
                    Pickles
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "Spices"}
                      onChange={() => setSelectedCategory("Spices")}
                    />
                    Spices
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="category"
                      checked={selectedCategory === "Ready to Cook"}
                      onChange={() => setSelectedCategory("Ready to Cook")}
                    />
                    Ready to Cook
                  </label>
                </div>
              </div>

              <div className="filter-section">
                <h3>Price Range</h3>

                <div className="filter-options">
                  <label>
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === "All"}
                      onChange={() => setSelectedPrice("All")}
                    />
                    All Prices
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === "Under200"}
                      onChange={() => setSelectedPrice("Under200")}
                    />
                    Under ₹200
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === "200to400"}
                      onChange={() => setSelectedPrice("200to400")}
                    />
                    ₹200 - ₹400
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="price"
                      checked={selectedPrice === "Above400"}
                      onChange={() => setSelectedPrice("Above400")}
                    />
                    Above ₹400
                  </label>
                </div>
              </div>
            </aside>

            <div className="shop-products">
              <div className="products-grid">
                {filteredProducts.map((product, index) => (
                  <ProductCard
                    key={`${product.name}-${index}`}
                    image={imageMap[product.image]}
                    name={product.name}
                    price={product.price}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}

export default Shop;
