import { useEffect, useState } from "react";
import "./Dashboard.css";
import ProductForm from "../../components/Admin/ProductForm";

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

        <div className="table-card">
          <table className="product-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Price</th>
                <th>Category</th>
                <th>Stock</th>
                <th>Actions</th>
              </tr>
            </thead>

            <tbody>
              {products.map((product) => (
                <tr key={product._id}>
                  <td>
                    <img
                      src={`${import.meta.env.VITE_API_URL}/uploads/${product.image}`}
                      alt={product.name}
                      className="product-image"
                    />
                  </td>

                  <td>{product.name}</td>

                  <td>₹{product.price}</td>

                  <td>{product.category}</td>

                  <td>{product.stock}</td>

                  <td>
                    <div className="action-buttons">
                      <button
                        className="edit-btn"
                        onClick={() => {
                          setEditingProduct(product);
                          setShowForm(true);
                        }}
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() => handleDelete(product._id)}
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
