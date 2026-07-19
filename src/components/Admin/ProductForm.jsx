import { useState, useEffect } from "react";
import "./ProductForm.css";
import { getToken } from "../../utils/auth";

function ProductForm({ product, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    category: "",
    price: "",
    stock: "",
    featured: false,
  });

  const [image, setImage] = useState(null);

  useEffect(() => {
    if (product) {
      setFormData({
        name: product.name,
        description: product.description,
        category: product.category,
        price: product.price,
        stock: product.stock,
        featured: product.featured,
      });
    }
  }, [product]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("name", formData.name);
    data.append("description", formData.description);
    data.append("category", formData.category);
    data.append("price", formData.price);
    data.append("stock", formData.stock);
    data.append("featured", formData.featured);

    if (image) {
      data.append("image", image);
    }

    try {
      let url = `${import.meta.env.VITE_API_URL}/api/products`;
      let method = "POST";

      if (product) {
        url = `${import.meta.env.VITE_API_URL}/api/products/${product._id}`;
        method = "PUT";
      }

      const response = await fetch(url, {
        method,
        headers: {
          Authorization: `Bearer ${getToken()}`,
        },
        body: data,
      });

      const result = await response.json();

      if (result.success) {
        alert(product ? "Product Updated!" : "Product Added");

        onSuccess();

        onClose();
      } else {
        alert(result.message);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="product-form">
        <button type="button" className="close-modal" onClick={onClose}>
          ×
        </button>
        <h2>{product ? "Edit Product" : "Add Product"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="name"
            placeholder="Product Name"
            value={formData.name}
            onChange={handleChange}
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
          />

          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />

          <input
            name="price"
            type="number"
            placeholder="Price"
            value={formData.price}
            onChange={handleChange}
          />

          <input
            name="stock"
            type="number"
            placeholder="Stock"
            value={formData.stock}
            onChange={handleChange}
          />

          {product && (
            <>
              <h4>Current Image</h4>

              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${product.image}`}
                alt={product.name}
                className="preview-image"
              />
            </>
          )}

          <label className="image-upload">
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) => setImage(e.target.files[0])}
            />

            {image ? (
              <img
                src={URL.createObjectURL(image)}
                alt="Preview"
                className="preview-image"
              />
            ) : product ? (
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${product.image}`}
                alt={product.name}
                className="preview-image"
              />
            ) : (
              <div className="empty-upload">
                <span className="upload-icon">📷</span>

                <h4>Upload Product Image</h4>

                <p>PNG, JPG up to 5 MB</p>
              </div>
            )}

            <div className="upload-overlay">
              {product ? (
                <>📷 Change Product Image</>
              ) : (
                <>📷 Upload Product Image</>
              )}
            </div>
          </label>

          <label className="checkbox-group">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            <span>Featured Product</span>
          </label>

          <div className="buttons">
            <button type="submit">{product ? "Update Product" : "Save"}</button>

            <button type="button" onClick={onClose}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
