import { useEffect, useState } from "react";
import "./Dashboard.css";
import ProductForm from "../../components/Admin/ProductForm";
import { getToken } from "../../utils/auth";

function Dashboard() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`,
      );

      const data = await response.json();

      if (data.success) {
        setProducts(data.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this product?",
    );

    if (!confirmDelete) return;

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products/${id}`,
        {
          method: "DELETE",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
        },
      );
      const data = await response.json();

      if (data.success) {
        fetchProducts();
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="dashboard">
      <div className="Dashboard-container">
        <div className="dashboard-header">
          <div>
            <h1>Ingri Admin</h1>

            <p>Manage products, inventory and featured items</p>
          </div>

          <button
            className="add-product-btn"
            onClick={() => {
              setEditingProduct(null);
              setShowForm(true);
            }}
          >
            + Add Product
          </button>
        </div>

        <div className="dashboard-cards">
          <div className="dashboard-card">
            <span>Total Products</span>

            <h2>{products.length}</h2>
          </div>

          <div className="dashboard-card">
            <span>Featured Products</span>

            <h2>{products.filter((product) => product.featured).length}</h2>
          </div>

          <div className="dashboard-card">
            <span>Categories</span>

            <h2>{new Set(products.map((product) => product.category)).size}</h2>
          </div>
        </div>

        <div className="products-grid-admin">
          {products.map((product) => (
            <div className="product-admin-card" key={product._id}>
              <div className="card-header">
                {product.featured ? (
                  <span className="featured-badge">⭐ Featured</span>
                ) : (
                  <span></span>
                )}

                <span className="price">₹{product.price}</span>
              </div>

              <div className="card-image">
                <img
                  src={`${import.meta.env.VITE_API_URL}/uploads/${product.image}`}
                  alt={product.name}
                />
              </div>

              <div className="product-content">
                <h3 className="product-title">{product.name}</h3>

                <p className="product-description">{product.description}</p>

                <div className="product-meta">
                  <span className="category-pill">{product.category}</span>

                  <span
                    className={
                      product.stock > 10
                        ? "stock good"
                        : product.stock > 0
                          ? "stock low"
                          : "stock out"
                    }
                  >
                    {product.stock > 10
                      ? `🟢 ${product.stock} in stock`
                      : product.stock > 0
                        ? `🟠 Only ${product.stock} left`
                        : "🔴 Out of Stock"}
                  </span>
                </div>

                <div className="card-buttons">
                  <button
                    className="edit-btn"
                    onClick={() => {
                      setEditingProduct(product);
                      setShowForm(true);
                    }}
                  >
                    ✏ Edit
                  </button>

                  <button
                    className="delete-btn"
                    onClick={() => handleDelete(product._id)}
                  >
                    🗑 Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {showForm && (
          <ProductForm
            product={editingProduct}
            onClose={() => {
              setShowForm(false);
              setEditingProduct(null);
            }}
            onSuccess={() => {
              fetchProducts();
              setEditingProduct(null);
              setShowForm(false);
            }}
          />
        )}
      </div>
    </div>
  );
}

export default Dashboard;
