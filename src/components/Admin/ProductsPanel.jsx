import { useState, useEffect } from "react";
import ProductForm from "./ProductForm";
import { getToken } from "../../utils/auth";
import toast from "react-hot-toast";
import EmptyState from "./Common/EmptyState";
import Swal from "sweetalert2";

function ProductsPanel() {
  const [products, setProducts] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);

  const fetchProducts = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/products`,
      );

      const data = await response.json();

      if (data.success) {
        setProducts(data.data);
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Failed to load products.");
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleDelete = async (id) => {
    const result = await Swal.fire({
      title: "Delete Product?",
      text: "This action cannot be undone.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#d33",
      cancelButtonColor: "#6c757d",
      confirmButtonText: "Yes, Delete",
      cancelButtonText: "Cancel",
    });

    if (!result.isConfirmed) return;

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
        toast.success("Product deleted successfully.");
        fetchProducts();
      } else {
        toast.error(data.message);
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong.");
    }
  };

  return (
    <>
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
        {products.length === 0 ? (
          <EmptyState
            icon="📦"
            title="No products found"
            message="Add your first product to get started."
          />
        ) : (
          products.map((product) => (
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
          ))
        )}
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
    </>
  );
}

export default ProductsPanel;
