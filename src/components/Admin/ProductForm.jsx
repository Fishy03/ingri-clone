import { useState, useEffect } from "react";
import "./ProductForm.css";
import { getToken } from "../../utils/auth";
import toast from "react-hot-toast";

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
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (!product) return;

    setFormData({
      name: product.name || "",
      description: product.description || "",
      category: product.category || "",
      price: product.price || "",
      stock: product.stock || "",
      featured: product.featured || false,
    });
  }, [product]);

  const handleChange = ({ target }) => {
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) return toast.error("Product name is required.");
    if (!formData.category.trim()) return toast.error("Category is required.");
    if (!formData.price) return toast.error("Price is required.");

    const data = new FormData();
    Object.entries(formData).forEach(([key, value]) => data.append(key, value));
    if (image) data.append("image", image);

    try {
      setIsSaving(true);

      const isEditing = Boolean(product);

      const response = await fetch(
        isEditing
          ? `${import.meta.env.VITE_API_URL}/api/products/${product._id}`
          : `${import.meta.env.VITE_API_URL}/api/products`,
        {
          method: isEditing ? "PUT" : "POST",
          headers: {
            Authorization: `Bearer ${getToken()}`,
          },
          body: data,
        },
      );

      const result = await response.json();

      if (!result.success) {
        return toast.error(result.message || "Failed to save product.");
      }

      toast.success(
        isEditing
          ? "Product updated successfully!"
          : "Product added successfully!",
      );

      onSuccess?.();
      onClose?.();
    } catch (err) {
      console.error(err);
      toast.error("Failed to save product.");
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="product-form">
        <button
          type="button"
          className="close-modal"
          onClick={onClose}
          disabled={isSaving}
        >
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
              📷 {product ? "Change Product Image" : "Upload Product Image"}
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
            <button type="submit" disabled={isSaving}>
              {isSaving
                ? "Saving..."
                : product
                  ? "Update Product"
                  : "Add Product"}
            </button>

            <button type="button" onClick={onClose} disabled={isSaving}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProductForm;
