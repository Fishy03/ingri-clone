import { useState, useEffect } from "react";
import "./ProductForm.css";
import { getToken } from "../../utils/auth";
import toast from "react-hot-toast";

function BlogForm({ blog, onClose, onSuccess }) {
  const [formData, setFormData] = useState({
    title: "",
    excerpt: "",
    content: "",
    category: "",
    readTime: "",
    author: "",
  });

  const [image, setImage] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    if (blog) {
      setFormData({
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        category: blog.category,
        readTime: blog.readTime,
        author: blog.author,
      });
    }
  }, [blog]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();

    data.append("title", formData.title);
    data.append("excerpt", formData.excerpt);
    data.append("content", formData.content);
    data.append("category", formData.category);
    data.append("readTime", formData.readTime);
    data.append("author", formData.author);

    if (image) {
      data.append("image", image);
    }

    try {
      setIsSaving(true);
      let url = `${import.meta.env.VITE_API_URL}/api/blogs`;
      let method = "POST";

      if (blog) {
        url = `${import.meta.env.VITE_API_URL}/api/blogs/${blog._id}`;
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
        toast.success(blog ? "Blog Updated!" : "Blog Added!");

        onSuccess();
        onClose();
      } else {
        toast.error(result.message || "Something went wrong.");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="product-form">
        <button type="button" className="close-modal" onClick={onClose}>
          ×
        </button>

        <h2>{blog ? "Edit Blog" : "Add Blog"}</h2>

        <form onSubmit={handleSubmit}>
          <input
            name="title"
            placeholder="Blog Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
            required
          />

          {/* <input
            name="readTime"
            placeholder="Read Time"
            value={formData.readTime}
            onChange={handleChange}
          /> */}

          <input
            name="author"
            placeholder="Author"
            value={formData.author}
            onChange={handleChange}
          />

          <textarea
            name="excerpt"
            placeholder="Excerpt"
            value={formData.excerpt}
            onChange={handleChange}
            rows={3}
            required
          />

          <textarea
            name="content"
            placeholder="Blog Content"
            value={formData.content}
            onChange={handleChange}
            rows={8}
            required
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
            ) : blog ? (
              <img
                src={`${import.meta.env.VITE_API_URL}/uploads/${blog.image}`}
                alt={blog.title}
                className="preview-image"
              />
            ) : (
              <div className="empty-upload">
                <span className="upload-icon">📷</span>

                <h4>Upload Blog Image</h4>

                <p>PNG, JPG up to 5 MB</p>
              </div>
            )}

            <div className="upload-overlay">
              {blog ? "📷 Change Blog Image" : "📷 Upload Blog Image"}
            </div>
          </label>

          <div className="buttons">
            <button type="submit">{blog ? "Update Blog" : "Save Blog"}</button>

            <button type="button" onClick={onClose} disabled={isSaving}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BlogForm;
